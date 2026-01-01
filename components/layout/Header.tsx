// components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a class merger

// ... (Keep existing companyItems and mainNavItems arrays) ...
// Ensure you define or import them here as in your original file.

function NavLink ( { href, label, isActive }: { href: string; label: string; isActive: boolean; } )
{
    return (
        <Link
            href={ href }
            aria-current={ isActive ? "page" : undefined } // ♿ A11y
            className={ cn(
                "relative inline-flex items-center px-2 py-1.5 text-sm transition-colors rounded-md",
                isActive ? "text-bms-primary font-medium" : "text-slate-700 hover:text-bms-primary hover:bg-slate-50"
            ) }
        >
            { label }
            { isActive && (
                <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-bms-primary" />
            ) }
        </Link>
    );
}

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ companyOpen, setCompanyOpen ] = useState( false );
    const dropdownRef = useRef<HTMLDivElement>( null );

    // 🧠 UX: Close dropdown when clicking outside
    useEffect( () =>
    {
        function handleClickOutside ( event: MouseEvent )
        {
            if ( dropdownRef.current && !dropdownRef.current.contains( event.target as Node ) )
            {
                setCompanyOpen( false );
            }
        }
        document.addEventListener( "mousedown", handleClickOutside );
        return () => document.removeEventListener( "mousedown", handleClickOutside );
    }, [] );

    const closeMobile = () => setMobileOpen( false );
    const isActive = ( href: string ) => ( href === "/" ? pathname === "/" : pathname.startsWith( href ) );
    const isCompanyActive = pathname.startsWith( "/about" );

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 md:h-20 items-center justify-between gap-4">

                {/* Right: Logo & Desktop Nav */ }
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-right group" onClick={ closeMobile } aria-label="بارمان محور اسپادانا - صفحه اصلی">
                        {/* ⚡ LCP: Logo is usually LCP on mobile, keep it simple SVG/CSS */ }
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-bms-primary text-white text-sm font-bold shadow-soft-lg transition-transform group-hover:scale-105">
                            B
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-bold text-bms-dark group-hover:text-bms-primary transition-colors">بارمان محور اسپادانا</div>
                            <div className="text-[11px] text-slate-500">سامانه‌های بومی هوشمندسازی</div>
                        </div>
                    </Link>

                    {/* Desktop Nav */ }
                    <nav className="hidden lg:flex items-center gap-1 text-sm" aria-label="منوی اصلی">
                        {/* Dropdown */ }
                        <div className="relative" ref={ dropdownRef }>
                            <button
                                type="button"
                                aria-expanded={ companyOpen }
                                aria-haspopup="true"
                                className={ cn(
                                    "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors border",
                                    companyOpen || isCompanyActive
                                        ? "border-bms-primary bg-bms-primary-soft text-bms-primary"
                                        : "border-transparent text-slate-700 hover:bg-slate-50"
                                ) }
                                onClick={ () => setCompanyOpen( ( prev ) => !prev ) }
                            >
                                <span>معرفی بارمان</span>
                                <span className={ `text-xs transition-transform duration-200 ${ companyOpen ? "rotate-180" : "" }` }>▾</span>
                            </button>

                            {/* Dropdown Menu - ⚡ NO CLS: Absolute positioning removes it from flow */ }
                            <div
                                className={ cn(
                                    "absolute top-full mt-2 right-0 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 transition-all duration-200 origin-top-right z-50",
                                    companyOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                ) }
                            >
                                <div className="px-3 py-2 text-xs font-semibold text-slate-400">شناخت شرکت</div>
                                <ul className="space-y-0.5">
                                    {/* (Import companyItems from original file here) */ }
                                    { [ { label: "داستان ما", href: "/about/story" }, { label: "ماموریت", href: "/about/mission" } ].map( ( item ) => (
                                        <li key={ item.href }>
                                            <Link
                                                href={ item.href }
                                                className="block w-full rounded-xl px-3 py-2 text-right text-sm text-slate-700 hover:bg-slate-50 hover:text-bms-primary transition-colors"
                                                onClick={ () => setCompanyOpen( false ) }
                                            >
                                                { item.label }
                                            </Link>
                                        </li>
                                    ) ) }
                                </ul>
                            </div>
                        </div>

                        {/* Main Links */ }
                        {/* (Import mainNavItems from original file here) */ }
                        { [ { label: "محصولات", href: "/products" } ].map( ( item ) => (
                            <NavLink key={ item.href } href={ item.href } label={ item.label } isActive={ isActive( item.href ) } />
                        ) ) }
                    </nav>
                </div>

                {/* Left: CTA & Mobile Toggle */ }
                <div className="flex items-center gap-3">
                    <Link
                        href="/intelligentautomation"
                        className="hidden md:inline-flex items-center rounded-full bg-bms-primary px-5 py-2 text-sm font-medium text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        شروع همکاری
                    </Link>

                    <button
                        type="button"
                        className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                        onClick={ () => setMobileOpen( !mobileOpen ) }
                        aria-label={ mobileOpen ? "بستن منو" : "باز کردن منو" }
                        aria-expanded={ mobileOpen }
                    >
                        {/* Hamburger Icon */ }
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d={ mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" } /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - ⚡ Keep DOM structure clean */ }
            { mobileOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white absolute w-full left-0 shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
                    <nav className="container py-6 space-y-6">
                        {/* ... (Mobile menu content similar to original, but using sematic <ul> and <li>) ... */ }
                    </nav>
                </div>
            ) }
        </header>
    );
}