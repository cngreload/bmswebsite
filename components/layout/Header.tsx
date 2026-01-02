"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import
{
    LuChevronDown,
    LuMenu,
    LuX,
    LuShieldCheck,
    LuUsers,
    LuTarget,
    LuBookOpen,
    LuScale,
    LuNetwork,
    LuCpu,
    LuActivity,
    LuFactory,
    LuPhone,
} from "react-icons/lu";

/* ---------------------------------------------
 * NAV DATA
 * -------------------------------------------*/

const companyItems = [
    { label: "داستان ما", href: "/about/story", icon: LuBookOpen },
    { label: "ماموریت و چشم‌انداز", href: "/about/mission", icon: LuTarget },
    { label: "ارزش‌های محوری", href: "/about/values", icon: LuShieldCheck },
    { label: "تیم راهبر", href: "/about/team", icon: LuUsers },
    { label: "حاکمیت شرکتی", href: "/about/governance", icon: LuScale },
    { label: "منشور اخلاقی", href: "/about/code-of-ethics", icon: LuShieldCheck },
    { label: "اکوسیستم همکاری", href: "/about/ecosystem", icon: LuNetwork },
];

const solutionItems = [
    {
        label: "سامانه هوشمند CNG",
        href: "/cng-automation",
        icon: LuCpu,
        desc: "پایش و کنترل صنعتی",
    },
    {
        label: "پلتفرم Clinicans",
        href: "/clinicans",
        icon: LuActivity,
        desc: "مدیریت مراکز درمانی",
    },
    {
        label: "هوشمندسازی صنعتی",
        href: "/intelligentautomation",
        icon: LuFactory,
        desc: "زیرساخت Industry 4.0",
    },
];

/* ---------------------------------------------
 * HEADER
 * -------------------------------------------*/

export default function Header ()
{
    const pathname = usePathname();

    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ activeDropdown, setActiveDropdown ] = useState<string | null>( null );

    // scroll hide
    const [ hidden, setHidden ] = useState( false );
    const lastScrollY = useRef( 0 );

    const navRef = useRef<HTMLDivElement>( null );

    /* Scroll behavior */
    useEffect( () =>
    {
        function onScroll ()
        {
            const current = window.scrollY;
            if ( current < 80 ) setHidden( false );
            else if ( current > lastScrollY.current ) setHidden( true );
            else setHidden( false );

            lastScrollY.current = current;
        }
        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    /* Close dropdowns on outside click */
    useEffect( () =>
    {
        function handleClickOutside ( e: MouseEvent )
        {
            if ( navRef.current && !navRef.current.contains( e.target as Node ) )
            {
                setActiveDropdown( null );
            }
        }
        document.addEventListener( "mousedown", handleClickOutside );
        return () => document.removeEventListener( "mousedown", handleClickOutside );
    }, [] );

    /* Close mobile menu on route change */
    useEffect( () =>
    {
        setMobileOpen( false );
        setActiveDropdown( null );
    }, [ pathname ] );

    return (
        <>
            {/* ───────── HEADER BAR ───────── */ }
            <header
                role="banner"
                className={ cn(
                    "sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-transform duration-300",
                    hidden && !mobileOpen && "-translate-y-full"
                ) }
            >
                <div
                    ref={ navRef }
                    className="container mx-auto max-w-7xl px-4 flex h-16 md:h-20 items-center justify-between gap-4"
                >
                    {/* LOGO */ }
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 group"
                        aria-label="بارمان محور اسپادانا"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bms-primary text-white font-bold shadow-lg">
                            B
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-bold text-bms-dark">
                                بارمان محور اسپادانا
                            </div>
                            <div className="text-[10px] text-slate-500">
                                زیرساخت‌های هوشمند
                            </div>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */ }
                    <nav className="hidden lg:flex items-center gap-1">
                        {/* Solutions */ }
                        <div className="relative">
                            <button
                                type="button"
                                onClick={ () =>
                                    setActiveDropdown(
                                        activeDropdown === "solutions"
                                            ? null
                                            : "solutions"
                                    )
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            >
                                راهکارها
                                <LuChevronDown className="h-4 w-4" />
                            </button>

                            { activeDropdown === "solutions" && (
                                <div className="absolute right-0 top-full mt-3 w-80 rounded-2xl border bg-white shadow-xl p-3">
                                    { solutionItems.map( ( item ) =>
                                    {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={ item.href }
                                                href={ item.href }
                                                className="flex gap-3 rounded-xl p-3 hover:bg-slate-50"
                                            >
                                                <Icon className="h-5 w-5 text-bms-primary" />
                                                <div>
                                                    <div className="text-sm font-bold">
                                                        { item.label }
                                                    </div>
                                                    <div className="text-xs text-slate-500">
                                                        { item.desc }
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    } ) }
                                </div>
                            ) }
                        </div>

                        {/* Company */ }
                        <div className="relative">
                            <button
                                type="button"
                                onClick={ () =>
                                    setActiveDropdown(
                                        activeDropdown === "company"
                                            ? null
                                            : "company"
                                    )
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            >
                                درباره ما
                                <LuChevronDown className="h-4 w-4" />
                            </button>

                            { activeDropdown === "company" && (
                                <div className="absolute right-0 top-full mt-3 w-60 rounded-2xl border bg-white shadow-xl p-2">
                                    { companyItems.map( ( item ) => (
                                        <Link
                                            key={ item.href }
                                            href={ item.href }
                                            className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                                        >
                                            { item.label }
                                        </Link>
                                    ) ) }
                                </div>
                            ) }
                        </div>

                        <Link
                            href="/news"
                            className="px-3 py-2 text-sm font-medium text-slate-600"
                        >
                            اخبار
                        </Link>
                        <Link
                            href="/contact-us"
                            className="px-3 py-2 text-sm font-medium text-slate-600"
                        >
                            تماس با ما
                        </Link>
                    </nav>

                    {/* CTA + MOBILE TOGGLE */ }
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact-us?type=sales"
                            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-bms-primary px-5 py-2.5 text-sm font-bold text-white"
                        >
                            شروع همکاری
                            <LuPhone className="h-4 w-4" />
                        </Link>

                        <button
                            onClick={ () => setMobileOpen( true ) }
                            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
                        >
                            <LuMenu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ───────── MOBILE DRAWER ───────── */ }
            { mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm">
                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
                        {/* Header */ }
                        <div className="flex items-center justify-between h-16 px-4 border-b">
                            <span className="font-bold text-sm">
                                منوی اصلی
                            </span>
                            <button
                                onClick={ () => setMobileOpen( false ) }
                                className="p-2"
                            >
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */ }
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 mb-2">
                                    راهکارها
                                </h3>
                                { solutionItems.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={ item.href }
                                            href={ item.href }
                                            onClick={ () =>
                                                setMobileOpen( false )
                                            }
                                            className="flex items-center gap-3 rounded-xl p-3 bg-slate-50 mb-2"
                                        >
                                            <Icon className="h-5 w-5 text-bms-primary" />
                                            { item.label }
                                        </Link>
                                    );
                                } ) }
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-slate-400 mb-2">
                                    درباره ما
                                </h3>
                                { companyItems.map( ( item ) => (
                                    <Link
                                        key={ item.href }
                                        href={ item.href }
                                        onClick={ () => setMobileOpen( false ) }
                                        className="block px-3 py-2 text-sm"
                                    >
                                        { item.label }
                                    </Link>
                                ) ) }
                            </div>

                            <Link
                                href="/news"
                                onClick={ () => setMobileOpen( false ) }
                                className="block px-3 py-2 font-medium"
                            >
                                اخبار
                            </Link>

                            <Link
                                href="/contact-us"
                                onClick={ () => setMobileOpen( false ) }
                                className="block px-3 py-2 font-medium"
                            >
                                تماس با ما
                            </Link>
                        </div>

                        {/* CTA */ }
                        <div className="p-4 border-t">
                            <Link
                                href="/contact-us?type=sales"
                                onClick={ () => setMobileOpen( false ) }
                                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-bms-primary text-white font-bold"
                            >
                                شروع همکاری
                                <LuPhone className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}
