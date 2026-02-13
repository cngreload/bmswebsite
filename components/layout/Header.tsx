"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
    LuNewspaper,
    LuHouse,
} from "react-icons/lu";

/* --- 1. HUMAN-CENTRIC NAV DATA --- */

interface NavItem
{
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string; }>;
    desc?: string;
}

interface NavSection
{
    id: string;
    label: string;
    items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
    {
        id: "solutions",
        label: "راهکارها",
        items: [
            {
                label: "امنیت انرژی (ICTS)",
                href: "/cng-automation",
                icon: LuCpu,
                desc: "خیالت راحت، جایگاه امنه",
            },
            {
                label: "سلامت دیجیتال (Clinicans)",
                href: "/clinicans",
                icon: LuActivity,
                desc: "زمان برای درمان، نه کاغذبازی",
            },
            {
                label: "صنعت هوشمند",
                href: "/intelligentautomation",
                icon: LuFactory,
                desc: "کارخانه زنده و بیدار",
            },
        ],
    },
    {
        id: "company",
        label: "درباره ما",
        items: [
            { label: "داستان ما", href: "/about/story", icon: LuBookOpen },
            { label: "باورهای ما (ماموریت)", href: "/about/mission", icon: LuTarget },
            { label: "ارزش‌ها", href: "/about/values", icon: LuShieldCheck },
            { label: "آدم‌های بارمان", href: "/about/team", icon: LuUsers },
            { label: "شفافیت (حاکمیت)", href: "/about/governance", icon: LuScale },
            { label: "هم‌مسیرها (اکوسیستم)", href: "/about/ecosystem", icon: LuNetwork },
        ],
    },
];

/* --- 2. DROPDOWN COMPONENT --- */

function Dropdown ( {
    section,
    open,
    onToggle,
    onClose,
    mobile = false,
}: {
    section: NavSection;
    open: boolean;
    onToggle: () => void;
    onClose: () => void;
    mobile?: boolean;
} )
{
    if ( mobile )
    {
        return (
            <div className="space-y-1.5">
                <button
                    onClick={ onToggle }
                    className={ cn(
                        "flex w-full items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold",
                        open
                            ? "bg-blue-50/70 text-bms-primary"
                            : "bg-slate-50/60 text-slate-800 hover:bg-slate-100/80"
                    ) }
                >
                    { section.label }
                    <LuChevronDown
                        className={ cn(
                            "h-5 w-5 transition-transform duration-300 ease-out",
                            open && "rotate-180"
                        ) }
                    />
                </button>

                <div
                    className={ cn(
                        "grid overflow-hidden transition-all duration-400 ease-in-out",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    ) }
                >
                    <div className="min-h-0 space-y-1 px-2 pb-3 pt-1">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="flex items-start gap-3.5 rounded-xl px-5 py-3.5 text-[15px] transition-all duration-200 hover:bg-blue-50/60 active:bg-blue-100/40"
                                >
                                    { Icon && (
                                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-slate-400">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    ) }
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-800">
                                            { item.label }
                                        </span>
                                        { item.desc && (
                                            <span className="mt-0.5 text-xs text-slate-500/90 font-light leading-tight">
                                                { item.desc }
                                            </span>
                                        ) }
                                    </div>
                                </Link>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={ onToggle }
                className={ cn(
                    "group relative flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-all duration-200",
                    open
                        ? "bg-white shadow-sm text-slate-900 ring-1 ring-slate-200/70"
                        : "text-slate-600 hover:bg-white/80 hover:text-slate-900 hover:shadow-sm"
                ) }
                aria-expanded={ open }
                aria-haspopup="true"
            >
                { section.label }
                <LuChevronDown
                    className={ cn(
                        "h-4 w-4 transition-transform duration-300 ease-out",
                        open && "rotate-180"
                    ) }
                />
            </button>

            { open && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={ onClose }
                        aria-hidden="true"
                    />
                    <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-100/80 bg-white/95 backdrop-blur-xl shadow-[0_16px_50px_-12px_rgba(0,0,0,0.12)] ring-1 ring-slate-900/5 p-2">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm hover:bg-slate-50/80"
                                >
                                    { Icon && (
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50/80 text-slate-500 group-hover:text-bms-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    ) }
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-800 group-hover:text-bms-primary">
                                            { item.label }
                                        </span>
                                        { item.desc && (
                                            <span className="mt-0.5 text-xs text-slate-500/90">
                                                { item.desc }
                                            </span>
                                        ) }
                                    </div>
                                </Link>
                            );
                        } ) }
                    </div>
                </>
            ) }
        </div>
    );
}

/* --- 3. HEADER COMPONENT --- */

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ active, setActive ] = useState<string | null>( null );

    useEffect( () =>
    {
        setMobileOpen( false );
        setActive( null );
    }, [ pathname ] );
    return (
        <>
            <header
                className={ cn(
                    "sticky top-0 z-50 w-full border-b border-slate-200/50",
                    "bg-white/75 backdrop-blur-xl transition-all duration-300",
                    "supports-[backdrop-filter]:bg-white/65"
                ) }
            >
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <div className="flex h-16 md:h-[4.5rem] items-center justify-between">
                        {/* LOGO */ }
                        <Link
                            href="/"
                            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/40 focus-visible:ring-offset-2 rounded-xl"
                            aria-label="صفحه اصلی بارمان"
                        >
                            <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-2xl bg-gradient-to-br from-bms-primary to-blue-800 p-0.5 shadow-md group-hover:shadow-lg group-hover:shadow-blue-600/20 transition-all duration-300">
                                <div className="h-full w-full bg-white rounded-[10px] flex items-center justify-center">
                                    <span className="font-black text-2xl text-bms-primary tracking-tighter">B</span>
                                </div>
                            </div>
                            <div className="hidden md:block leading-tight">
                                <div className="text-base font-bold text-slate-900 tracking-tight">
                                    بارمان محور اسپادانا
                                </div>
                                <div className="text-xs text-slate-500 font-medium mt-0.5">
                                    معماری هوشمند آینده
                                </div>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */ }
                        <nav className="hidden lg:flex items-center gap-2" role="navigation">
                            <Link
                                href="/"
                                className={ cn(
                                    "flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200",
                                    pathname === "/"
                                        ? "bg-white shadow-sm text-slate-900 ring-1 ring-slate-200/60"
                                        : "text-slate-600 hover:bg-white/80 hover:shadow-sm hover:text-slate-900"
                                ) }
                            >
                                <LuHouse className="h-4 w-4" />
                                خانه
                            </Link>

                            { NAV_SECTIONS.map( ( section ) => (
                                <Dropdown
                                    key={ section.id }
                                    section={ section }
                                    open={ active === section.id }
                                    onToggle={ () => setActive( active === section.id ? null : section.id ) }
                                    onClose={ () => setActive( null ) }
                                />
                            ) ) }

                            <Link
                                href="/news"
                                className={ cn(
                                    "flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200",
                                    "text-slate-600 hover:bg-white/80 hover:shadow-sm hover:text-slate-900"
                                ) }
                            >
                                <LuNewspaper className="h-4 w-4" />
                                مجله
                            </Link>
                        </nav>

                        {/* CTA + MOBILE TOGGLE */ }
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact-us?type=sales"
                                className={ cn(
                                    "hidden md:inline-flex h-11 items-center justify-center gap-2.5 rounded-2xl",
                                    "bg-bms-primary px-7 text-sm font-semibold text-white",
                                    "shadow-lg shadow-blue-900/15 hover:bg-bms-dark hover:shadow-xl",
                                    "transition-all duration-300 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bms-primary/50"
                                ) }
                            >
                                شروع گفتگو
                                <LuPhone className="h-4 w-4" />
                            </Link>

                            <button
                                onClick={ () => setMobileOpen( true ) }
                                className="lg:hidden rounded-xl p-2.5 text-slate-600 hover:bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-bms-primary/40 transition-colors"
                                aria-label="باز کردن منوی اصلی"
                                aria-expanded={ mobileOpen }
                            >
                                <LuMenu className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE DRAWER */ }
            { mobileOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end lg:hidden">
                    {/* Backdrop */ }
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={ () => setMobileOpen( false ) }
                    />

                    {/* Drawer */ }
                    <div
                        className={ cn(
                            "relative h-full w-full max-w-sm bg-white shadow-2xl",
                            "animate-in slide-in-from-right duration-400 ease-out flex flex-col"
                        ) }
                    >
                        <div className="flex h-16 items-center justify-between border-b border-slate-100 px-6">
                            <span className="text-lg font-bold text-slate-900 tracking-tight">
                                بارمان
                            </span>
                            <button
                                onClick={ () => setMobileOpen( false ) }
                                className="rounded-xl p-2.5 hover:bg-slate-100 text-slate-600 transition-colors"
                                aria-label="بستن منو"
                            >
                                <LuX className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                            <div className="space-y-1.5">
                                <Link
                                    href="/"
                                    className={ cn(
                                        "flex items-center gap-3.5 rounded-2xl px-5 py-4 text-base font-semibold transition-all duration-200",
                                        pathname === "/"
                                            ? "bg-blue-50/70 text-bms-primary"
                                            : "text-slate-800 hover:bg-slate-50/80"
                                    ) }
                                >
                                    <LuHouse className="h-5 w-5" />
                                    صفحه اصلی
                                </Link>

                                <Link
                                    href="/news"
                                    className="flex items-center gap-3.5 rounded-2xl px-5 py-4 text-base font-semibold text-slate-800 hover:bg-slate-50/80 transition-all duration-200"
                                >
                                    <LuNewspaper className="h-5 w-5" />
                                    مجله خبری
                                </Link>
                            </div>

                            <hr className="border-slate-100 my-4" />

                            { NAV_SECTIONS.map( ( s ) => (
                                <Dropdown
                                    key={ s.id }
                                    section={ s }
                                    open={ active === s.id }
                                    onToggle={ () => setActive( active === s.id ? null : s.id ) }
                                    onClose={ () => setMobileOpen( false ) }
                                    mobile
                                />
                            ) ) }
                        </div>

                        <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-6">
                            <Link
                                href="/contact-us?type=sales"
                                className="flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-bms-primary text-white font-semibold shadow-md active:scale-[0.98] transition-all duration-200"
                            >
                                شروع گفتگو
                                <LuPhone className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}