"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type CompanyNavItem = {
    label: string;
    href: string;
};

const companyItems: CompanyNavItem[] = [
    {
        label: "داستان بارمان محور اسپادانا",
        href: "/about/story",
    },
    {
        label: "ماموریت ما",
        href: "/about/mission",
    },
    {
        label: "ارزش‌های محوری",
        href: "/about/values",
    },
    {
        label: "تیم راهبر",
        href: "/about/team",
    },
    {
        label: "حاکمیت شرکتی و ساختار تصمیم‌گیری",
        href: "/about/governance",
    },
    {
        label: "منشور حرفه‌ای و کد اخلاقی",
        href: "/about/code-of-ethics",
    },
    {
        label: "اکوسیستم همکاری بارمان محور",
        href: "/about/ecosystem",
    },
];

type MainNavItem = {
    label: string;
    href: string;
};

const mainNavItems: MainNavItem[] = [
    {
        label: "سامانه ICTS جایگاه‌های CNG",
        href: "/cng-automation",
    },
    {
        label: "پلتفرم Clinicans",
        href: "/clinicans",
    },
    {
        label: "راهکارهای هوشمندسازی صنعت ۴",
        href: "/intelligentautomation",
    },
    {
        label: "اخبار و رویدادها",
        href: "/news",
    },
    {
        label: "تماس با ما",
        href: "/contact-us",
    },
];

function NavLink ( {
    href,
    label,
    isActive,
}: {
    href: string;
    label: string;
    isActive: boolean;
} )
{
    return (
        <Link
            href={ href }
            className={ `relative inline-flex items-center px-2 py-1.5 text-sm transition-colors ${ isActive
                ? "text-bms-primary"
                : "text-slate-700 hover:text-bms-primary"
                }` }
        >
            <span>{ label }</span>
            { isActive && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-bms-primary" />
            ) }
        </Link>
    );
}

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ companyOpen, setCompanyOpen ] = useState( false );

    const toggleMobile = () => setMobileOpen( ( prev ) => !prev );
    const closeMobile = () => setMobileOpen( false );

    const isActive = ( href: string ) =>
    {
        if ( href === "/" ) return pathname === "/";
        return pathname === href || pathname.startsWith( href );
    };

    const isCompanyActive = pathname.startsWith( "/about" );

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
                {/* Right side: logo + desktop nav */ }
                <div className="flex items-center gap-8">
                    {/* Logo / Brand */ }
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-right"
                        onClick={ closeMobile }
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-bms-primary text-white text-sm font-bold shadow-soft-lg">
                            B
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold text-bms-dark">
                                بارمان محور اسپادانا
                            </div>
                            <div className="text-[11px] text-slate-500">
                                سامانه‌های بومی هوشمندسازی کسب‌وکار و صنعت
                            </div>
                        </div>
                    </Link>

                    {/* Desktop navigation */ }
                    <nav className="hidden lg:flex items-center gap-2 text-sm">
                        {/* Company dropdown */ }
                        <div className="relative">
                            <button
                                type="button"
                                className={ `inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors border ${ companyOpen || isCompanyActive
                                    ? "border-bms-primary bg-bms-primary-soft text-bms-primary"
                                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50"
                                    }` }
                                onClick={ () => setCompanyOpen( ( prev ) => !prev ) }
                            >
                                <span>معرفی بارمان</span>
                                <span className="text-xs translate-y-0.5">
                                    { companyOpen ? "▴" : "▾" }
                                </span>
                            </button>

                            { companyOpen && (
                                <div className="absolute top-full mt-2 right-0 w-72 rounded-2xl border border-slate-200 bg-white shadow-soft-lg p-2">
                                    <div className="px-2 py-1.5 text-xs text-slate-500">
                                        شناخت بارمان محور اسپادانا
                                    </div>
                                    <ul className="space-y-0.5">
                                        { companyItems.map( ( item ) =>
                                        {
                                            const active = isActive( item.href );
                                            return (
                                                <li key={ item.href }>
                                                    <Link
                                                        href={ item.href }
                                                        className={ `block w-full rounded-xl px-3 py-2 text-right text-sm transition-colors ${ active
                                                            ? "bg-bms-primary-soft text-bms-primary"
                                                            : "text-slate-700 hover:bg-slate-50"
                                                            }` }
                                                        onClick={ () =>
                                                        {
                                                            setCompanyOpen( false );
                                                            closeMobile();
                                                        } }
                                                    >
                                                        { item.label }
                                                    </Link>
                                                </li>
                                            );
                                        } ) }
                                    </ul>
                                </div>
                            ) }
                        </div>

                        {/* Main nav items */ }
                        { mainNavItems.map( ( item ) => (
                            <NavLink
                                key={ item.href }
                                href={ item.href }
                                label={ item.label }
                                isActive={ isActive( item.href ) }
                            />
                        ) ) }
                    </nav>
                </div>

                {/* Left side: CTA + mobile toggle */ }
                <div className="flex items-center gap-3">
                    {/* CTA (desktop) */ }
                    <Link
                        href="/intelligentautomation"
                        className="hidden md:inline-flex items-center rounded-full border border-bms-primary bg-bms-primary px-4 py-1.5 text-xs md:text-sm font-medium text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                    >
                        شروع همکاری
                    </Link>

                    {/* Mobile menu button */ }
                    <button
                        type="button"
                        className="inline-flex lg:hidden items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm"
                        onClick={ toggleMobile }
                        aria-label="باز کردن منوی سایت"
                    >
                        <span className="sr-only">منو</span>
                        <div className="flex flex-col gap-0.5">
                            <span className="h-0.5 w-4 rounded-full bg-slate-700" />
                            <span className="h-0.5 w-3 rounded-full bg-slate-700" />
                            <span className="h-0.5 w-4 rounded-full bg-slate-700" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */ }
            { mobileOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white">
                    <div className="container py-3 space-y-4 text-sm">
                        {/* CTA mobile */ }
                        <Link
                            href="/intelligentautomation"
                            className="inline-flex w-full items-center justify-center rounded-full border border-bms-primary bg-bms-primary px-4 py-2 text-xs font-medium text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                            onClick={ closeMobile }
                        >
                            شروع همکاری
                        </Link>

                        {/* Company section */ }
                        <div className="space-y-1">
                            <div className="text-[13px] font-medium text-slate-600">
                                معرفی بارمان
                            </div>
                            <ul className="grid gap-1">
                                { companyItems.map( ( item ) =>
                                {
                                    const active = isActive( item.href );
                                    return (
                                        <li key={ item.href }>
                                            <Link
                                                href={ item.href }
                                                className={ `block rounded-xl px-3 py-2 text-right text-[13px] transition-colors ${ active
                                                    ? "bg-bms-primary-soft text-bms-primary"
                                                    : "bg-slate-50 text-slate-700"
                                                    }` }
                                                onClick={ closeMobile }
                                            >
                                                { item.label }
                                            </Link>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </div>

                        {/* Main nav items */ }
                        <div className="space-y-1">
                            <div className="text-[13px] font-medium text-slate-600">
                                راهکارها و محصولات
                            </div>
                            <ul className="grid gap-1">
                                { mainNavItems.map( ( item ) =>
                                {
                                    const active = isActive( item.href );
                                    return (
                                        <li key={ item.href }>
                                            <Link
                                                href={ item.href }
                                                className={ `block rounded-xl px-3 py-2 text-right text-[13px] transition-colors ${ active
                                                    ? "bg-bms-primary-soft text-bms-primary"
                                                    : "text-slate-700 hover:bg-slate-50"
                                                    }` }
                                                onClick={ closeMobile }
                                            >
                                                { item.label }
                                            </Link>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </div>
                    </div>
                </div>
            ) }
        </header>
    );
}
