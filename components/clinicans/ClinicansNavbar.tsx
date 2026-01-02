// components/clinicans/ClinicansNavbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import
{
    LuLayoutGrid,
    LuShieldCheck,
    LuSparkles,
    LuUsers,
    LuTriangleAlert,
    LuNetwork,
    LuScale,
    LuBookOpen,
    LuArrowLeft,
    LuMenu,
    LuX,
} from "react-icons/lu";
const navLinks = [
    { label: "بررسی کلی", href: "#overview", icon: LuLayoutGrid },
    { label: "چالش‌ها", href: "#problems", icon: LuTriangleAlert },
    { label: "امکانات", href: "#features", icon: LuSparkles },
    { label: "ماژول‌ها", href: "#modules", icon: LuLayoutGrid },
    { label: "برای چه کسانی؟", href: "#audience", icon: LuUsers },
    { label: "امنیت و پایداری", href: "#security", icon: LuShieldCheck },
    { label: "یکپارچگی‌ها", href: "#integration", icon: LuNetwork },
    { label: "مدل استقرار", href: "#pricing", icon: LuScale },
    { label: "سوالات متداول", href: "#faq", icon: LuBookOpen },
];

export default function ClinicansNavbar ()
{
    const [ isScrolled, setIsScrolled ] = useState( false );
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState( false );

    // Handle Scroll Effect
    useEffect( () =>
    {
        const handleScroll = () =>
        {
            // Trigger effect slightly after scrolling starts
            setIsScrolled( window.scrollY > 20 );
        };
        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [] );

    return (
        <>
            <nav
                className={ cn(
                    // 📌 STICKY & Z-INDEX: High z-index [999] ensures it covers the main layout navbar
                    "sticky top-0 left-0 right-0 z-[999] w-full transition-all duration-300 border-b",

                    // 🎨 BACKGROUND LOGIC:
                    // When Scrolled: Stronger blur, clearer background to hide elements behind it
                    // Top: Lighter blur, more transparency for blending with Hero section
                    isScrolled
                        ? "bg-white/85 backdrop-blur-md border-slate-200 py-3 shadow-sm"
                        : "bg-white/50 backdrop-blur-sm border-transparent py-4"
                ) }
            >
                <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">

                    {/* RIGHT: Logo & Brand */ }
                    <div className="flex items-center gap-3">
                        {/* Mobile Menu Toggle */ }
                        <button
                            onClick={ () => setIsMobileMenuOpen( !isMobileMenuOpen ) }
                            className="lg:hidden text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            { isMobileMenuOpen ? <LuX size={ 24 } /> : <LuMenu size={ 24 } /> }
                        </button>

                        <Link href="/clinicans" className="flex items-center gap-2 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
                                {/* Medical Cross / Abstract Icon */ }
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <div className="hidden flex-col md:flex">
                                <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                                    Clinicans
                                </span>
                                <span className="text-[10px] font-medium text-emerald-600 tracking-wider uppercase">
                                    Healthcare Platform
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */ }
                        <ul className="hidden lg:flex items-center gap-1 mr-8 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                            { navLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-emerald-600 hover:shadow-sm transition-all duration-200"
                                    >
                                        <link.icon className="w-4 h-4 opacity-70" />
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* LEFT: CTAs */ }
                    <div className="flex items-center gap-3">
                        <Link
                            href="https://app.clinicans.ir/login"
                            className="hidden sm:inline-flex text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            ورود به پنل
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700"
                        >
                            <span>درخواست دمو</span>
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */ }
                { isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-4 shadow-xl lg:hidden animate-in slide-in-from-top-2">
                        <ul className="space-y-2">
                            { navLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        onClick={ () => setIsMobileMenuOpen( false ) }
                                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm text-emerald-600">
                                            <link.icon size={ 16 } />
                                        </div>
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                            <li className="pt-2 border-t border-slate-100 mt-2">
                                <Link href="/" className="block text-center text-xs text-slate-400 py-2 hover:text-emerald-600">
                                    بازگشت به صفحه اصلی بارمان
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) }
            </nav>
        </>
    );
}