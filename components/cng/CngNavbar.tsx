"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import
{
    LuGauge,
    LuTriangleAlert,
    LuScale,
    LuUsers,
    LuCpu,
    LuArrowLeft,
    LuMenu,
    LuX,
} from "react-icons/lu";

/* ---------------------------------------------
 * NAV LINKS (ANCHORS)
 * -------------------------------------------*/
const navLinks = [
    { label: "نمای کلی", href: "#overview", icon: LuGauge },
    { label: "ضرورت هوشمندسازی", href: "#necessity", icon: LuTriangleAlert },
    { label: "اهمیت ملی", href: "#national-importance", icon: LuUsers },
    { label: "طرح ملی", href: "#national-plan", icon: LuScale },
    { label: "منافع ذی‌نفعان", href: "#stakeholder-benefits", icon: LuUsers },
    { label: "فناوری", href: "#tech-highlights", icon: LuCpu },
    { label: "جریان داده", href: "#how-it-works", icon: LuGauge },
];
export default function CngNavbar ()
{
    const [ isScrolled, setIsScrolled ] = useState( false );
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState( false );

    /* ---------------------------------------------
     * SCROLL EFFECT
     * -------------------------------------------*/
    useEffect( () =>
    {
        const handleScroll = () =>
        {
            setIsScrolled( window.scrollY > 20 );
        };
        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [] );

    return (
        <>
            <nav
                className={ cn(
                    // 📌 must sit ABOVE main layout header
                    "sticky top-0 left-0 right-0 z-[999] w-full transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm"
                        : "bg-white/60 backdrop-blur-sm border-transparent py-4"
                ) }
            >
                <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">

                    {/* RIGHT: BRAND + DESKTOP NAV */ }
                    <div className="flex items-center gap-3">

                        {/* Mobile Toggle */ }
                        <button
                            onClick={ () => setIsMobileMenuOpen( !isMobileMenuOpen ) }
                            className="lg:hidden text-slate-600 hover:text-bms-primary transition-colors"
                            aria-label="باز کردن منو"
                        >
                            { isMobileMenuOpen ? <LuX size={ 24 } /> : <LuMenu size={ 24 } /> }
                        </button>

                        {/* Brand */ }
                        <Link href="/cng-automation" className="flex items-center gap-2 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 transition-transform group-hover:scale-105">
                                <LuGauge className="h-6 w-6" />
                            </div>
                            <div className="hidden md:flex flex-col">
                                <span className="text-lg font-bold text-slate-900 leading-none">
                                    CNG Automation
                                </span>
                                <span className="text-[10px] font-medium text-blue-600 tracking-wider uppercase">
                                    National Smart Infrastructure
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Anchors */ }
                        <ul className="hidden lg:flex items-center gap-1 mr-8 bg-slate-100/60 p-1 rounded-full border border-slate-200/50">
                            { navLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="
                                          flex items-center gap-2
                                          px-4 py-2 text-sm font-medium
                                          text-slate-600 rounded-full
                                          hover:bg-white hover:text-bms-primary
                                          hover:shadow-sm transition-all
                                        "
                                    >
                                        <link.icon className="w-4 h-4 opacity-70" />
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* LEFT: CTA */ }
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact-us"
                            className="
                              inline-flex h-10 items-center gap-2
                              rounded-xl bg-bms-primary px-5
                              text-sm font-bold text-white
                              shadow-lg shadow-bms-primary/25
                              transition-transform hover:-translate-y-0.5
                              hover:bg-bms-dark
                            "
                        >
                            <span>درخواست مشاوره</span>
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* ---------------------------------
                 * MOBILE DROPDOWN
                 * --------------------------------*/}
                { isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-4 shadow-xl lg:hidden animate-in slide-in-from-top-2">
                        <ul className="space-y-2">
                            { navLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        onClick={ () => setIsMobileMenuOpen( false ) }
                                        className="
                                          flex items-center gap-3
                                          rounded-lg p-3 text-sm font-medium
                                          text-slate-600
                                          hover:bg-blue-50 hover:text-bms-primary
                                        "
                                    >
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm text-bms-primary">
                                            <link.icon size={ 16 } />
                                        </div>
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }

                            <li className="pt-2 border-t border-slate-100 mt-2">
                                <Link
                                    href="/"
                                    className="block text-center text-xs text-slate-400 py-2 hover:text-bms-primary"
                                >
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
