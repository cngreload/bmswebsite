"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ContactMessage = {
    id: string;
    fullName: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    contactType: string;
    status: string;
    createdAt: string;
};

type ContactListResponse =
    | { items: ContactMessage[]; page: number; pageSize: number; totalItems: number; totalPages: number; }
    | ContactMessage[];

function normalize ( x: ContactListResponse )
{
    if ( Array.isArray( x ) ) return { items: x, page: 1, pageSize: x.length, totalItems: x.length, totalPages: 1 };
    return x;
}

function readErrorText ( err: unknown )
{
    if ( err instanceof Error ) return err.message;
    return String( err ?? "Unknown error" );
}

export default function AdminContactMessagesPage ()
{
    const [ data, setData ] = useState<ReturnType<typeof normalize> | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ errText, setErrText ] = useState<string | null>( null );

    async function load ()
    {
        setLoading( true );
        setErrText( null );
        try
        {
            const r = await fetch( "/api/admin/contact-messages?page=1&pageSize=30", { cache: "no-store" } );
            if ( !r.ok ) throw new Error( await r.text() );
            const j: unknown = await r.json();
            setData( normalize( j as ContactListResponse ) );
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

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-xl font-bold text-bms-dark">پیام‌ها</h1>
                <p className="text-sm text-odoo-600">پیام‌های ارسال‌شده از فرم تماس</p>
            </div>

            { errText ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{ errText }</div>
            ) : null }

            <div className="rounded-2xl border border-odoo-200 bg-white shadow-sm overflow-hidden">
                <div className="p-4 border-b border-odoo-200 text-sm text-odoo-600">
                    { loading ? "در حال بارگذاری…" : `تعداد: ${ data?.totalItems ?? 0 }` }
                </div>

                <div className="divide-y divide-odoo-100">
                    { ( data?.items ?? [] ).map( ( m ) => (
                        <Link key={ m.id } href={ `/admin/contact-messages/${ m.id }` } className="block p-4 hover:bg-odoo-50">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold text-bms-dark truncate">{ m.subject }</div>
                                        <span
                                            className={ `text-xs rounded-full px-2 py-1 border ${ m.status === "NEW"
                                                ? "bg-bms-primary-soft text-bms-primary border-bms-primary/20"
                                                : "bg-odoo-50 text-odoo-700 border-odoo-200"
                                                }` }
                                        >
                                            { m.status }
                                        </span>
                                    </div>
                                    <div className="text-xs text-odoo-600 mt-1">
                                        { m.fullName } • { m.email } { m.phone ? `• ${ m.phone }` : "" } • { m.contactType }
                                    </div>
                                </div>
                                <div className="text-xs text-odoo-500 whitespace-nowrap">
                                    { new Date( m.createdAt ).toLocaleDateString( "fa-IR" ) }
                                </div>
                            </div>
                        </Link>
                    ) ) }

                    { !loading && !( data?.items?.length ?? 0 ) ? (
                        <div className="p-6 text-sm text-odoo-600">موردی یافت نشد.</div>
                    ) : null }
                </div>
            </div>
        </div>
    );
}
