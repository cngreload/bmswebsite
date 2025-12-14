"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type PostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

type AdminPost = {
    id: string;
    slug: string;
    title: string;
    status: PostStatus;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
    category: { id: string; name: string; } | null;
};

type AdminListResponse =
    | {
        items: AdminPost[];
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
    }
    | AdminPost[];

function normalizeList ( x: AdminListResponse )
{
    if ( Array.isArray( x ) )
    {
        return { items: x, page: 1, pageSize: x.length, totalItems: x.length, totalPages: 1 };
    }
    return x;
}

export default function AdminPostsPage ()
{
    const [ q, setQ ] = useState( "" );
    const [ status, setStatus ] = useState<string>( "" );
    const [ page, setPage ] = useState( 1 );

    const [ data, setData ] = useState<ReturnType<typeof normalizeList> | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ errText, setErrText ] = useState<string | null>( null );

    const qs = useMemo( () =>
    {
        const p = new URLSearchParams();
        p.set( "page", String( page ) );
        p.set( "pageSize", "20" );
        if ( q.trim() ) p.set( "q", q.trim() );
        if ( status ) p.set( "status", status );
        return p.toString();
    }, [ q, status, page ] );

    useEffect( () =>
    {
        let mounted = true;
        setLoading( true );
        setErrText( null );

        fetch( `/api/admin/posts?${ qs }`, { cache: "no-store" } )
            .then( async ( r ) =>
            {
                if ( !r.ok ) throw new Error( await r.text() );
                return r.json();
            } )
            .then( ( j ) => mounted && setData( normalizeList( j ) ) )
            .catch( ( e ) => mounted && setErrText( String( e?.message ?? "Fetch failed" ) ) )
            .finally( () => mounted && setLoading( false ) );

        return () =>
        {
            mounted = false;
        };
    }, [ qs ] );

    const totalPages = data?.totalPages ?? 1;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-bms-dark">مدیریت پست‌ها</h1>
                    <p className="text-sm text-odoo-600">ایجاد، ویرایش و انتشار اخبار/مقاله‌ها</p>
                </div>

                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center justify-center rounded-xl bg-bms-primary px-5 py-3 text-sm font-medium text-white"
                >
                    + پست جدید
                </Link>
            </div>

            <div className="rounded-2xl border border-odoo-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        value={ q }
                        onChange={ ( e ) =>
                        {
                            setPage( 1 );
                            setQ( e.target.value );
                        } }
                        placeholder="جستجو…"
                        className="w-full rounded-xl border border-odoo-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bms-primary/30"
                    />
                    <select
                        value={ status }
                        onChange={ ( e ) =>
                        {
                            setPage( 1 );
                            setStatus( e.target.value );
                        } }
                        className="rounded-xl border border-odoo-200 bg-white px-4 py-3 text-sm"
                    >
                        <option value="">همه وضعیت‌ها</option>
                        <option value="DRAFT">DRAFT</option>
                        <option value="PUBLISHED">PUBLISHED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                </div>
            </div>

            <div className="rounded-2xl border border-odoo-200 bg-white shadow-sm overflow-hidden">
                <div className="p-4 border-b border-odoo-200 text-sm text-odoo-600 flex items-center justify-between">
                    <span>{ loading ? "در حال بارگذاری…" : `نتیجه: ${ data?.totalItems ?? 0 }` }</span>
                    { errText ? <span className="text-red-600">{ errText }</span> : null }
                </div>

                <div className="divide-y divide-odoo-100">
                    { ( data?.items ?? [] ).map( ( p ) => (
                        <Link key={ p.id } href={ `/admin/posts/${ p.id }` } className="block p-4 hover:bg-odoo-50">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="font-semibold text-bms-dark truncate">{ p.title }</div>
                                    <div className="text-xs text-odoo-600 mt-1">
                                        { p.status }
                                        { p.category ? ` • ${ p.category.name }` : "" }
                                        { p.publishedAt ? ` • ${ new Date( p.publishedAt ).toLocaleDateString( "fa-IR" ) }` : " • بدون تاریخ انتشار" }
                                        { " • " }
                                        <span className="opacity-80">{ p.slug }</span>
                                    </div>
                                </div>
                                <div className="text-xs text-odoo-500 whitespace-nowrap">
                                    { new Date( p.updatedAt ).toLocaleDateString( "fa-IR" ) }
                                </div>
                            </div>
                        </Link>
                    ) ) }

                    { !loading && !( data?.items?.length ?? 0 ) ? (
                        <div className="p-6 text-sm text-odoo-600">موردی یافت نشد.</div>
                    ) : null }
                </div>

                { totalPages > 1 ? (
                    <div className="p-4 border-t border-odoo-200 flex items-center justify-between">
                        <button
                            onClick={ () => setPage( ( x ) => Math.max( 1, x - 1 ) ) }
                            className="px-4 py-2 rounded-xl border border-odoo-200 hover:bg-odoo-50 disabled:opacity-50"
                            disabled={ page <= 1 }
                        >
                            قبلی
                        </button>
                        <div className="text-sm text-odoo-600">
                            صفحه { page } از { totalPages }
                        </div>
                        <button
                            onClick={ () => setPage( ( x ) => Math.min( totalPages, x + 1 ) ) }
                            className="px-4 py-2 rounded-xl border border-odoo-200 hover:bg-odoo-50 disabled:opacity-50"
                            disabled={ page >= totalPages }
                        >
                            بعدی
                        </button>
                    </div>
                ) : null }
            </div>
        </div>
    );
}
