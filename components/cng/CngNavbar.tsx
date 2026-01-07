"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_ITEMS = [
    { id: "hero", label: "معرفی سامانه" },
    { id: "products", label: "معماری و محصولات" },
    { id: "story", label: "پایلوت ملی" },
    { id: "why", label: "چرایی ملی" },
    { id: "how", label: "چگونگی عملکرد" },
    { id: "future", label: "آینده و توسعه" },
    { id: "action", label: "همکاری" },
];

export default function CngNavbar ()
{
    const [ open, setOpen ] = useState( false );

    /* ---------------------------------------------
     * Sync navbar state with DOM (breadcrumb control)
     * -------------------------------------------*/
    useEffect( () =>
    {
        const root = document.documentElement;
        if ( open )
        {
            root.setAttribute( "data-nav-open", "true" );
        } else
        {
            root.removeAttribute( "data-nav-open" );
        }
    }, [ open ] );

    return (
        <nav
            role="navigation"
            aria-label="ناوبری سامانه ICTS"
            className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-14 items-center justify-between">
                    {/* Desktop Navigation */ }
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        { NAV_ITEMS.map( ( item ) => (
                            <li key={ item.id }>
                                <Link
                                    href={ `#${ item.id }` }
                                    className="transition-colors hover:text-bms-primary"
                                >
                                    { item.label }
                                </Link>
                            </li>
                        ) ) }
                    </ul>

                    {/* Mobile Menu Button */ }
                    <button
                        aria-label="باز کردن منوی ناوبری"
                        onClick={ () => setOpen( true ) }
                        className="md:hidden text-slate-700"
                    >
                        <LuMenu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */ }
            { open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/40"
                >
                    <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-lg">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-800">
                                ناوبری سامانه ICTS
                            </span>
                            <button
                                aria-label="بستن منو"
                                onClick={ () => setOpen( false ) }
                            >
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        <ul className="space-y-4 text-sm">
                            { NAV_ITEMS.map( ( item ) => (
                                <li key={ item.id }>
                                    <Link
                                        href={ `#${ item.id }` }
                                        onClick={ () => setOpen( false ) }
                                        className="block text-slate-600 hover:text-bms-primary"
                                    >
                                        { item.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>
                </div>
            ) }
        </nav>
    );
}
