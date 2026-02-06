"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import
{
    LuChevronDown,
    LuChevronUp,
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
    LuGlobe,

} from "react-icons/lu";

/* ============================================================================
   NAV DATA
============================================================================ */

interface NavItem
{
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string; }>;
    desc?: string;
    crawlPriority: number;
}

interface NavSection
{
    id: string;
    label: string;
    ariaLabel: string;
    items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
    {
        id: "solutions",
        label: "راهکارها",
        ariaLabel: "راهکارهای تخصصی",
        items: [
            {
                label: "سامانه هوشمند جایگاه‌های سوخت",
                href: "/cng-automation",
                icon: LuCpu,
                desc: "پایش و کنترل صنعتی جایگاه‌های CNG",
                crawlPriority: 1,
            },
            {
                label: "پلتفرم سلامت کلینیکانز",
                href: "/clinicans",
                icon: LuActivity,
                desc: "مدیریت هوشمند مراکز درمانی",
                crawlPriority: 0.9,
            },
            {
                label: "هوشمندسازی صنعتی",
                href: "/intelligentautomation",
                icon: LuFactory,
                desc: "Industry 4.0 و IoT صنعتی",
                crawlPriority: 0.8,
            },
        ],
    },
    {
        id: "news",
        label: "اخبار",
        ariaLabel: "اخبار و مقالات",
        items: [
            {
                label: "اخبار و مقالات",
                href: "/news",
                icon: LuNewspaper,
                crawlPriority: 0.7,
            },
        ],
    },
    {
        id: "company",
        label: "درباره ما",
        ariaLabel: "اطلاعات شرکتی",
        items: [
            { label: "داستان ما", href: "/about/story", icon: LuBookOpen, crawlPriority: 0.9 },
            { label: "ماموریت و چشم‌انداز", href: "/about/mission", icon: LuTarget, crawlPriority: 0.9 },
            { label: "ارزش‌ها", href: "/about/values", icon: LuShieldCheck, crawlPriority: 0.8 },
            { label: "تیم راهبر", href: "/about/team", icon: LuUsers, crawlPriority: 0.7 },
            { label: "حاکمیت شرکتی", href: "/about/governance", icon: LuScale, crawlPriority: 0.7 },
            { label: "اکوسیستم همکاری", href: "/about/ecosystem", icon: LuNetwork, crawlPriority: 0.8 },
        ],
    },
];

/* ============================================================================
   DROPDOWN
============================================================================ */

function Dropdown ( {
    section,
    open,
    onToggle,
    onClose,
    mobile,
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
            <div className="space-y-2">
                <button
                    onClick={ onToggle }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                    { section.label }
                    <LuChevronDown className={ cn( "transition-transform", open && "rotate-180" ) } />
                </button>

                { open && (
                    <div className="space-y-1">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="flex items-start gap-3 rounded-lg px-4 py-2 text-sm hover:bg-slate-100"
                                >
                                    { Icon && <Icon className="h-4 w-4 text-bms-primary mt-0.5" /> }
                                    <span>{ item.label }</span>
                                </Link>
                            );
                        } ) }
                    </div>
                ) }
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={ onToggle }
                className="h-10 inline-flex items-center gap-1 rounded-lg px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-bms-primary"
                aria-expanded={ open }
            >
                { section.label }
                { open ? <LuChevronUp /> : <LuChevronDown /> }
            </button>

            { open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={ onClose } />
                    <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border bg-white shadow-xl">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="flex gap-3 px-4 py-3 text-sm hover:bg-slate-50"
                                >
                                    { Icon && (
                                        <span className="rounded-lg bg-bms-primary/10 p-2">
                                            <Icon className="h-4 w-4 text-bms-primary" />
                                        </span>
                                    ) }
                                    <div>
                                        <div className="font-semibold text-slate-800">{ item.label }</div>
                                        { item.desc && <div className="text-xs text-slate-500">{ item.desc }</div> }
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

/* ============================================================================
   HEADER
============================================================================ */

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ active, setActive ] = useState<string | null>( null );

    const closeAll = useCallback( () => setActive( null ), [] );

    useEffect( () =>
    {
        setMobileOpen( false );
        closeAll();
    }, [ pathname, closeAll ] );

    return (
        <>
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex h-16 md:h-20 items-center justify-between">
                        {/* LOGO */ }
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-11 w-11 rounded-2xl bg-bms-primary p-1.5">
                                <Image
                                    src="/bmslogoclean.webp"
                                    alt="Baraman محور اسپادانا"
                                    width={ 44 }
                                    height={ 44 }
                                    priority
                                />
                                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                                    <LuShieldCheck className="h-2.5 w-2.5 text-white" />
                                </span>
                            </div>

                            <div className="leading-tight">
                                <div className="text-sm md:text-base font-bold text-slate-900">
                                    بارمان محور اسپادانا
                                </div>
                                <div className="hidden md:block text-xs text-slate-500">
                                    هوشمندسازی زیرساخت‌های حیاتی
                                </div>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */ }
                        <nav className="hidden lg:flex items-center gap-0.5">
                            <Link
                                href="/"
                                className={ cn(
                                    "h-10 inline-flex items-center gap-2 rounded-lg px-4 text-sm font-medium",
                                    pathname === "/" ? "text-bms-primary bg-bms-primary/5" : "text-slate-700 hover:bg-slate-50"
                                ) }
                            >
                                <LuHouse className="h-4 w-4" />
                                صفحه اصلی
                            </Link>

                            { NAV_SECTIONS.map( ( s ) => (
                                <Dropdown
                                    key={ s.id }
                                    section={ s }
                                    open={ active === s.id }
                                    onToggle={ () => setActive( active === s.id ? null : s.id ) }
                                    onClose={ closeAll }
                                />
                            ) ) }
                        </nav>

                        {/* CTA + MOBILE */ }
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact-us?type=sales"
                                className="hidden md:inline-flex h-10 items-center gap-2 rounded-xl bg-bms-primary px-5 text-sm font-bold text-white shadow hover:shadow-lg"
                            >
                                <LuPhone className="h-4 w-4" />
                                درخواست مشاوره
                            </Link>

                            <button className="hidden md:flex h-10 items-center gap-1 rounded-lg px-3 text-sm text-slate-600 hover:bg-slate-50">
                                <LuGlobe className="h-4 w-4" />
                                FA
                            </button>

                            <button
                                onClick={ () => setMobileOpen( true ) }
                                className="lg:hidden rounded-xl p-2.5 hover:bg-slate-100"
                            >
                                <LuMenu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE DRAWER */ }
            { mobileOpen && (
                <div className="fixed inset-0 z-[100] bg-black/50">
                    <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
                        <div className="flex h-16 items-center justify-between border-b px-4">
                            <span className="font-bold">منو</span>
                            <button onClick={ () => setMobileOpen( false ) }>
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-6 px-4 py-6">
                            <Link href="/" onClick={ () => setMobileOpen( false ) } className="block font-medium">
                                صفحه اصلی
                            </Link>

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

                            <Link
                                href="/contact-us?type=sales"
                                className="flex h-10 items-center justify-center gap-2 rounded-xl bg-bms-primary text-white font-bold"
                            >
                                <LuPhone />
                                درخواست مشاوره
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}
