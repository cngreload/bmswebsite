"use client";

import { useEffect, useMemo, useState } from "react";

type Tag = {
    id: string;
    name: string;
    slug: string;
};

function readErrorText ( err: unknown )
{
    if ( err instanceof Error ) return err.message;
    return String( err ?? "Unknown error" );
}

export default function AdminTagsPage ()
{
    const [ items, setItems ] = useState<Tag[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ errText, setErrText ] = useState<string | null>( null );

    const [ createName, setCreateName ] = useState( "" );
    const [ createSlug, setCreateSlug ] = useState( "" );

    const [ editingId, setEditingId ] = useState<string | null>( null );
    const [ editName, setEditName ] = useState( "" );
    const [ editSlug, setEditSlug ] = useState( "" );

    const sorted = useMemo(
        () => [ ...items ].sort( ( a, b ) => a.name.localeCompare( b.name, "fa" ) ),
        [ items ]
    );

    async function load ()
    {
        setLoading( true );
        setErrText( null );
        try
        {
            const r = await fetch( "/api/admin/blog/tags", { cache: "no-store" } );
            if ( !r.ok ) throw new Error( await r.text() );
            const j: unknown = await r.json();
            if ( !Array.isArray( j ) ) throw new Error( "Invalid response" );
            setItems(
                j.map( ( x ) => ( {
                    id: String( ( x as { id: unknown; } ).id ),
                    name: String( ( x as { name: unknown; } ).name ?? "" ),
                    slug: String( ( x as { slug: unknown; } ).slug ?? "" ),
                } ) )
            );
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        } finally
        {
            setLoading( false );
        }
    }

    useEffect( () =>
    {
        void load();
    }, [] );

    function startEdit ( t: Tag )
    {
        setEditingId( t.id );
        setEditName( t.name );
        setEditSlug( t.slug );
    }

    function cancelEdit ()
    {
        setEditingId( null );
        setEditName( "" );
        setEditSlug( "" );
    }

    async function create ()
    {
        setErrText( null );
        try
        {
            const r = await fetch( "/api/admin/blog/tags", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( {
                    name: createName.trim(),
                    slug: createSlug.trim() || undefined,
                } ),
            } );
            if ( !r.ok ) throw new Error( await r.text() );

            setCreateName( "" );
            setCreateSlug( "" );
            await load();
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        }
    }

    async function saveEdit ( id: string )
    {
        setErrText( null );
        try
        {
            const r = await fetch( `/api/admin/blog/tags/${ id }`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( {
                    name: editName.trim(),
                    slug: editSlug.trim(),
                } ),
            } );
            if ( !r.ok ) throw new Error( await r.text() );
            cancelEdit();
            await load();
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        }
    }

    async function remove ( id: string )
    {
        if ( !confirm( "حذف شود؟" ) ) return;
        setErrText( null );
        try
        {
            const r = await fetch( `/api/admin/blog/tags/${ id }`, { method: "DELETE" } );
            if ( !r.ok ) throw new Error( await r.text() );
            await load();
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-xl font-bold text-bms-dark">تگ‌ها</h1>
                <p className="text-sm text-odoo-600">مدیریت تگ‌های خبرها</p>
            </div>

            { errText ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{ errText }</div>
            ) : null }

            <div className="rounded-2xl border border-odoo-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-bms-dark mb-3">ایجاد تگ جدید</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                        className="rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        placeholder="نام"
                        value={ createName }
                        onChange={ ( e ) => setCreateName( e.target.value ) }
                    />
                    <input
                        className="rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                        placeholder="slug (اختیاری)"
                        value={ createSlug }
                        onChange={ ( e ) => setCreateSlug( e.target.value ) }
                    />
                    <button
                        onClick={ () => void create() }
                        className="rounded-xl bg-bms-primary px-4 py-3 text-sm font-medium text-white"
                    >
                        ایجاد
                    </button>
                </div>
            </div>

            <div className="rounded-2xl border border-odoo-200 bg-white shadow-sm overflow-hidden">
                <div className="p-4 border-b border-odoo-200 text-sm text-odoo-600">
                    { loading ? "در حال بارگذاری…" : `تعداد: ${ items.length }` }
                </div>

                <div className="divide-y divide-odoo-100">
                    { sorted.map( ( t ) =>
                    {
                        const isEditing = editingId === t.id;

                        return (
                            <div key={ t.id } className="p-4">
                                { !isEditing ? (
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <div className="font-semibold text-bms-dark truncate">{ t.name }</div>
                                            <div className="text-xs text-odoo-600 mt-1">
                                                <span className="opacity-80">{ t.slug }</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={ () => startEdit( t ) }
                                                className="rounded-xl border border-odoo-200 px-3 py-2 text-sm hover:bg-odoo-50"
                                            >
                                                ویرایش
                                            </button>
                                            <button
                                                onClick={ () => void remove( t.id ) }
                                                className="rounded-xl border border-red-200 px-3 py-2 text-sm text-red-700 hover:bg-red-50"
                                            >
                                                حذف
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <input
                                            className="rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                                            value={ editName }
                                            onChange={ ( e ) => setEditName( e.target.value ) }
                                        />
                                        <input
                                            className="rounded-xl border border-odoo-200 px-4 py-3 text-sm"
                                            value={ editSlug }
                                            onChange={ ( e ) => setEditSlug( e.target.value ) }
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={ () => void saveEdit( t.id ) }
                                                className="flex-1 rounded-xl bg-bms-primary px-4 py-3 text-sm font-medium text-white"
                                            >
                                                ذخیره
                                            </button>
                                            <button
                                                onClick={ cancelEdit }
                                                className="rounded-xl border border-odoo-200 px-4 py-3 text-sm hover:bg-odoo-50"
                                            >
                                                انصراف
                                            </button>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        );
                    } ) }
                </div>

                { !loading && sorted.length === 0 ? (
                    <div className="p-6 text-sm text-odoo-600">موردی وجود ندارد.</div>
                ) : null }
            </div>
        </div>
    );
}
