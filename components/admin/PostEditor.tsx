"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Mode = "create" | "edit";
type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

type Category = { id: string; name: string; slug: string; description?: string | null; };
type Tag = { id: string; name: string; slug: string; };

type PostDetail = {
    id: string;
    title: string;
    slug: string;
    summary: string | null;
    content: string;
    coverImageUrl: string | null;
    status: PostStatus | string;
    publishedAt: string | null;
    categoryId: string | null;
    tags: Tag[];
};

function readErrorText ( err: unknown )
{
    if ( err instanceof Error ) return err.message;
    return String( err ?? "Unknown error" );
}

export default function PostEditor ( { mode, id }: { mode: Mode; id?: string; } )
{
    const router = useRouter();

    const [ loading, setLoading ] = useState( mode === "edit" );
    const [ saving, setSaving ] = useState( false );
    const [ errText, setErrText ] = useState<string | null>( null );

    const [ title, setTitle ] = useState( "" );
    const [ slug, setSlug ] = useState( "" );
    const [ summary, setSummary ] = useState( "" );
    const [ content, setContent ] = useState( "" );
    const [ coverImageUrl, setCoverImageUrl ] = useState( "" );
    const [ status, setStatus ] = useState<PostStatus>( "DRAFT" );
    const [ publishedAt, setPublishedAt ] = useState<string>( "" );

    const [ categories, setCategories ] = useState<Category[]>( [] );
    const [ tags, setTags ] = useState<Tag[]>( [] );
    const [ categoryId, setCategoryId ] = useState<string>( "" );
    const [ tagIds, setTagIds ] = useState<Record<string, boolean>>( {} );

    const selectedTagIds = useMemo(
        () => Object.entries( tagIds ).filter( ( [ , v ] ) => v ).map( ( [ k ] ) => k ),
        [ tagIds ]
    );

    useEffect( () =>
    {
        Promise.all( [
            fetch( "/api/admin/blog/categories", { cache: "no-store" } ).then( async ( r ) => ( r.ok ? ( await r.json() ) : [] ) ),
            fetch( "/api/admin/blog/tags", { cache: "no-store" } ).then( async ( r ) => ( r.ok ? ( await r.json() ) : [] ) ),
        ] ).then( ( [ c, t ] ) =>
        {
            const catArr = Array.isArray( c ) ? c : [];
            const tagArr = Array.isArray( t ) ? t : [];
            setCategories(
                catArr.map( ( x: unknown ) => ( {
                    id: String( ( x as { id: unknown; } ).id ),
                    name: String( ( x as { name: unknown; } ).name ?? "" ),
                    slug: String( ( x as { slug: unknown; } ).slug ?? "" ),
                    description: ( ( x as { description?: unknown; } ).description ?? null ) as string | null,
                } ) )
            );
            setTags(
                tagArr.map( ( x: unknown ) => ( {
                    id: String( ( x as { id: unknown; } ).id ),
                    name: String( ( x as { name: unknown; } ).name ?? "" ),
                    slug: String( ( x as { slug: unknown; } ).slug ?? "" ),
                } ) )
            );
        } );
    }, [] );

    useEffect( () =>
    {
        if ( mode !== "edit" || !id ) return;

        let mounted = true;
        setLoading( true );
        setErrText( null );

        fetch( `/api/admin/posts/${ id }`, { cache: "no-store" } )
            .then( async ( r ) =>
            {
                if ( !r.ok ) throw new Error( await r.text() );
                return ( await r.json() ) as unknown;
            } )
            .then( ( raw ) =>
            {
                if ( !mounted ) return;
                const p = raw as PostDetail;

                setTitle( p.title ?? "" );
                setSlug( p.slug ?? "" );
                setSummary( p.summary ?? "" );
                setContent( p.content ?? "" );
                setCoverImageUrl( p.coverImageUrl ?? "" );
                setStatus( ( p.status as PostStatus ) ?? "DRAFT" );
                setPublishedAt( p.publishedAt ? String( p.publishedAt ).slice( 0, 16 ) : "" );
                setCategoryId( p.categoryId ? String( p.categoryId ) : "" );

                const initial: Record<string, boolean> = {};
                ( p.tags ?? [] ).forEach( ( x: Tag ) =>
                {
                    initial[ String( x.id ) ] = true;
                } );
                setTagIds( initial );
            } )
            .catch( ( e: unknown ) => mounted && setErrText( readErrorText( e ) ) )
            .finally( () => mounted && setLoading( false ) );

        return () =>
        {
            mounted = false;
        };
    }, [ mode, id ] );

    async function onSave ()
    {
        setSaving( true );
        setErrText( null );

        try
        {
            const payload: Record<string, unknown> = {
                title,
                slug: slug || undefined,
                summary: summary || undefined,
                content,
                coverImageUrl: coverImageUrl || undefined,
                status,
                publishedAt: publishedAt ? new Date( publishedAt ).toISOString() : null,
                categoryId: categoryId || null,
                tagIds: selectedTagIds,
            };

            const res =
                mode === "create"
                    ? await fetch( "/api/admin/posts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify( payload ),
                    } )
                    : await fetch( `/api/admin/posts/${ id }`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify( payload ),
                    } );

            if ( !res.ok ) throw new Error( await res.text() );

            if ( mode === "create" ) router.push( "/admin/posts" );
            else router.refresh();
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        } finally
        {
            setSaving( false );
        }
    }

    async function onDelete ()
    {
        if ( mode !== "edit" || !id ) return;
        if ( !confirm( "حذف شود؟" ) ) return;

        const res = await fetch( `/api/admin/posts/${ id }`, { method: "DELETE" } );
        if ( !res.ok )
        {
            setErrText( await res.text() );
            return;
        }
        router.push( "/admin/posts" );
    }

    if ( loading ) return <div className="text-sm text-odoo-600">در حال بارگذاری…</div>;

    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-odoo-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h1 className="text-lg font-bold text-bms-dark">{ mode === "create" ? "پست جدید" : "ویرایش پست" }</h1>
                        <p className="text-sm text-odoo-600">محتوا فعلاً به صورت HTML ذخیره می‌شود.</p>
                    </div>

                    { mode === "edit" ? (
                        <button onClick={ () => void onDelete() } className="text-sm text-red-600 hover:underline">
                            حذف
                        </button>
                    ) : null }
                </div>

                { errText ? (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{ errText }</div>
                ) : null }

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-odoo-600">عنوان</label>
                        <input
                            value={ title }
                            onChange={ ( e ) => setTitle( e.target.value ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-odoo-600">اسلاگ (اختیاری)</label>
                        <input
                            value={ slug }
                            onChange={ ( e ) => setSlug( e.target.value ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs text-odoo-600">خلاصه</label>
                        <textarea
                            value={ summary }
                            onChange={ ( e ) => setSummary( e.target.value ) }
                            rows={ 3 }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs text-odoo-600">Cover Image URL</label>
                        <input
                            value={ coverImageUrl }
                            onChange={ ( e ) => setCoverImageUrl( e.target.value ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-odoo-600">وضعیت</label>
                        <select
                            value={ status }
                            onChange={ ( e ) => setStatus( e.target.value as PostStatus ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm bg-white"
                        >
                            <option value="DRAFT">DRAFT</option>
                            <option value="PUBLISHED">PUBLISHED</option>
                            <option value="ARCHIVED">ARCHIVED</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs text-odoo-600">تاریخ انتشار (اختیاری)</label>
                        <input
                            type="datetime-local"
                            value={ publishedAt }
                            onChange={ ( e ) => setPublishedAt( e.target.value ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs text-odoo-600">دسته‌بندی</label>
                        <select
                            value={ categoryId }
                            onChange={ ( e ) => setCategoryId( e.target.value ) }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm bg-white"
                        >
                            <option value="">بدون دسته</option>
                            { categories.map( ( c ) => (
                                <option key={ c.id } value={ c.id }>
                                    { c.name }
                                </option>
                            ) ) }
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs text-odoo-600">تگ‌ها</label>
                        <div className="mt-2 flex flex-wrap gap-2">
                            { tags.map( ( t ) =>
                            {
                                const key = String( t.id );
                                const checked = !!tagIds[ key ];
                                return (
                                    <button
                                        type="button"
                                        key={ key }
                                        onClick={ () => setTagIds( ( prev ) => ( { ...prev, [ key ]: !prev[ key ] } ) ) }
                                        className={ `px-3 py-1.5 rounded-full text-xs border ${ checked ? "bg-bms-accent text-white border-bms-accent" : "border-odoo-200 text-odoo-700"
                                            }` }
                                    >
                                        #{ t.name }
                                    </button>
                                );
                            } ) }
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs text-odoo-600">محتوا (HTML)</label>
                        <textarea
                            value={ content }
                            onChange={ ( e ) => setContent( e.target.value ) }
                            rows={ 14 }
                            className="mt-2 w-full rounded-xl border border-odoo-200 px-4 py-3 text-sm font-mono"
                        />
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button
                        onClick={ () => void onSave() }
                        disabled={ saving }
                        className="rounded-xl bg-bms-primary px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
                    >
                        { saving ? "در حال ذخیره…" : "ذخیره" }
                    </button>

                    <button
                        onClick={ () => router.push( "/admin/posts" ) }
                        className="rounded-xl border border-odoo-200 px-5 py-3 text-sm hover:bg-odoo-50"
                    >
                        بازگشت
                    </button>
                </div>
            </div>
        </div>
    );
}
