"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
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
    LuSearch,
    LuGlobe,
    LuBuilding,
} from "react-icons/lu";

// ============================================================================
// 🗺️ NAVIGATION DATA - Structured for Google's Understanding
// ============================================================================

interface NavItem
{
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string; }>;
    desc?: string;
    /** Google's crawl priority (1.0 highest, 0.0 lowest) */
    crawlPriority: number;
    /** For Google's structured data and entity understanding */
    entityType?: "Organization" | "Service" | "Information" | "News";
    /** Last updated timestamp for Google Freshness signals */
    lastUpdated?: string;
    /** Related keywords for Google's content understanding */
    relatedKeywords?: string[];
}

interface NavSection
{
    id: string;
    label: string;
    ariaLabel: string;
    items: NavItem[];
    semanticRole: "menu" | "navigation";
    href?: string; // Added href for sections that are also direct links
    icon?: React.ComponentType<{ className?: string; }>; // Added icon for direct link sections
}

// Organized by crawl priority and semantic importance
const NAV_SECTIONS: NavSection[] = [
    {
        id: "solutions",
        label: "راهکارها",
        ariaLabel: "منوی راهکارهای تخصصی شرکت",
        semanticRole: "menu",
        items: [
            {
                label: "سامانه هوشمند جایگاه‌های سوخت",
                href: "/cng-automation",
                icon: LuCpu,
                desc: "پایش و کنترل صنعتی جایگاه‌های CNG - راهکار بومی Industry 4.0",
                crawlPriority: 1.0,
                entityType: "Service",
                lastUpdated: "2024-01-15",
                relatedKeywords: [ "صنعت نفت و گاز", "اتوماسیون صنعتی", "IOT" ],
            },
            {
                label: "پلتفرم سلامت کلینیکانز",
                href: "/clinicans",
                icon: LuActivity,
                desc: "سیستم یکپارچه مدیریت مراکز درمانی و سلامت دیجیتال",
                crawlPriority: 0.9,
                entityType: "Service",
                lastUpdated: "2024-01-10",
                relatedKeywords: [ "سلامت دیجیتال", "مدیریت بیمارستان", "نرم‌افزار پزشکی" ],
            },
            {
                label: "فناوری هوشمند جهانی",
                href: "/intelligentautomation",
                icon: LuFactory,
                desc: "زیرساخت‌های هوشمندسازی صنعتی مبتنی بر Industry 4.0",
                crawlPriority: 0.8,
                entityType: "Service",
                lastUpdated: "2024-01-05",
                relatedKeywords: [ "صنعت هوشمند", "اتوماسیون", "اینترنت اشیاء صنعتی" ],
            },
        ],
    },
    {
        id: "company",
        label: "درباره ما",
        ariaLabel: "منوی اطلاعات شرکتی و سازمانی",
        semanticRole: "navigation",
        items: [
            {
                label: "داستان ما",
                href: "/about/story",
                icon: LuBookOpen,
                crawlPriority: 0.9,
                entityType: "Organization",
                lastUpdated: "2024-01-20",
            },
            {
                label: "ماموریت و چشم‌انداز",
                href: "/about/mission",
                icon: LuTarget,
                crawlPriority: 0.9,
                entityType: "Organization",
            },
            {
                label: "ارزش‌های محوری",
                href: "/about/values",
                icon: LuShieldCheck,
                crawlPriority: 0.8,
                entityType: "Organization",
            },
            {
                label: "تیم راهبر",
                href: "/about/team",
                icon: LuUsers,
                crawlPriority: 0.7,
                entityType: "Organization",
                lastUpdated: "2024-01-18",
            },
            {
                label: "حاکمیت شرکتی",
                href: "/about/governance",
                icon: LuScale,
                crawlPriority: 0.7,
                entityType: "Organization",
            },
            {
                label: "منشور اخلاقی",
                href: "/about/code-of-ethics",
                icon: LuShieldCheck,
                crawlPriority: 0.6,
                entityType: "Organization",
            },
            {
                label: "اکوسیستم همکاری",
                href: "/about/ecosystem",
                icon: LuNetwork,
                crawlPriority: 0.8,
                entityType: "Organization",
                relatedKeywords: [ "همکاری استراتژیک", "شبکه شرکای تجاری" ],
            },
        ],
    },
    {
        id: "news",
        label: "اخبار و مقالات",
        ariaLabel: "اخبار و مقالات شرکت",
        semanticRole: "menu",
        href: "/news",
        icon: LuNewspaper,
        items: [
            {
                label: "اخبار و مقالات",
                href: "/news",
                icon: LuNewspaper,
                crawlPriority: 0.8,
                entityType: "News",
                lastUpdated: new Date().toISOString().split( "T" )[ 0 ],
            },
        ],
    },
    {
        id: "contact",
        label: "تماس با ما",
        ariaLabel: "تماس با شرکت",
        semanticRole: "menu",
        href: "/contact-us",
        icon: LuPhone,
        items: [
            {
                label: "تماس با ما",
                href: "/contact-us",
                icon: LuPhone,
                crawlPriority: 0.7,
                entityType: "Information",
            },
        ],
    },
];

// ============================================================================
// 🎯 GOOGLE-OPTIMIZED NAVIGATION COMPONENTS
// ============================================================================

/**
 * Google-Optimized Dropdown Component
 * - Semantic HTML structure for crawlers
 * - ARIA attributes for accessibility = indexability
 * - Keyboard navigation support
 * - Mobile-friendly touch targets
 */
interface DropdownProps
{
    section: NavSection;
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
    isMobile?: boolean;
}

const GoogleOptimizedDropdown: React.FC<DropdownProps> = ( {
    section,
    isOpen,
    onToggle,
    onClose,
    isMobile = false,
} ) =>
{
    const dropdownRef = useRef<HTMLDivElement>( null );
    const firstItemRef = useRef<HTMLAnchorElement>( null );

    // Keyboard navigation support
    useEffect( () =>
    {
        if ( !isOpen || !dropdownRef.current ) return;

        const focusableElements = dropdownRef.current.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[ 0 ] as HTMLElement;
        const lastElement = focusableElements[ focusableElements.length - 1 ] as HTMLElement;

        const handleKeyDown = ( e: KeyboardEvent ) =>
        {
            if ( e.key === "Escape" )
            {
                onClose();
                return;
            }

            if ( e.key === "Tab" )
            {
                if ( !e.shiftKey && document.activeElement === lastElement )
                {
                    e.preventDefault();
                    firstElement?.focus();
                } else if ( e.shiftKey && document.activeElement === firstElement )
                {
                    e.preventDefault();
                    lastElement?.focus();
                }
            }
        };

        document.addEventListener( "keydown", handleKeyDown );
        return () => document.removeEventListener( "keydown", handleKeyDown );
    }, [ isOpen, onClose ] );

    // Auto-focus first item when opened (for keyboard users)
    useEffect( () =>
    {
        if ( isOpen && firstItemRef.current && !isMobile )
        {
            setTimeout( () => firstItemRef.current?.focus(), 50 );
        }
    }, [ isOpen, isMobile ] );

    const DropdownContent = () => (
        <div
            ref={ dropdownRef }
            role={ section.semanticRole }
            aria-label={ section.ariaLabel }
            className={ cn(
                "bg-white border border-slate-200 rounded-2xl shadow-xl",
                isMobile
                    ? "w-full space-y-1"
                    : "absolute right-0 top-full mt-2 min-w-[280px] animate-in slide-in-from-top-2 fade-in duration-200"
            ) }
        >
            { section.items.map( ( item, index ) =>
            {
                const Icon = item.icon;
                return (
                    <Link
                        key={ item.href }
                        ref={ index === 0 ? firstItemRef : null }
                        href={ item.href }
                        onClick={ onClose }
                        className={ cn(
                            "flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                            "hover:bg-slate-50 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-bms-primary/20",
                            "group"
                        ) }
                        role="menuitem"
                        aria-label={ `برو به ${ item.label }` }
                        data-crawl-priority={ item.crawlPriority }
                        data-entity-type={ item.entityType }
                        { ...( item.lastUpdated && {
                            "data-content-freshness": item.lastUpdated,
                        } ) }
                    >
                        { Icon && (
                            <div
                                className="flex-shrink-0 rounded-lg bg-bms-primary/10 p-2 group-hover:bg-bms-primary/20 transition-colors"
                                aria-hidden="true"
                            >
                                <Icon className="h-4 w-4 text-bms-primary" />
                            </div>
                        ) }
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-800 truncate">
                                { item.label }
                            </div>
                            { item.desc && (
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    { item.desc }
                                </div>
                            ) }
                        </div>
                        <LuChevronDown className="h-3 w-3 text-slate-400 flex-shrink-0 -rotate-90" />
                    </Link>
                );
            } ) }
        </div>
    );

    if ( isMobile )
    {
        return (
            <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
                    { section.label }
                </h3>
                <DropdownContent />
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={ onToggle }
                onKeyDown={ ( e ) =>
                {
                    if ( e.key === "Enter" || e.key === " " )
                    {
                        e.preventDefault();
                        onToggle();
                    }
                } }
                className={ cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    "text-slate-700 hover:text-bms-primary hover:bg-slate-50",
                    "focus:outline-none focus:ring-2 focus:ring-bms-primary/30 focus:bg-slate-50",
                    "aria-expanded:bg-slate-50 aria-expanded:text-bms-primary"
                ) }
                aria-expanded={ isOpen }
                aria-controls={ `dropdown-${ section.id }` }
                aria-label={ `${ section.label } - باز کردن منو` }
            >
                { section.label }
                { isOpen ? (
                    <LuChevronUp className="h-4 w-4 transition-transform" />
                ) : (
                    <LuChevronDown className="h-4 w-4 transition-transform" />
                ) }
            </button>

            { isOpen && (
                <>
                    {/* Backdrop for closing on outside click */ }
                    <div
                        className="fixed inset-0 z-40"
                        onClick={ onClose }
                        aria-hidden="true"
                    />
                    <div className="absolute z-50" id={ `dropdown-${ section.id }` }>
                        <DropdownContent />
                    </div>
                </>
            ) }
        </div>
    );
};

// ============================================================================
// 🏢 MAIN HEADER COMPONENT - Corporate Grade + Google Optimized
// ============================================================================

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ activeDropdown, setActiveDropdown ] = useState<string | null>( null );
    const [ isScrolled, setIsScrolled ] = useState( false );
    const [ lastScrollY, setLastScrollY ] = useState( 0 );

    const headerRef = useRef<HTMLElement>( null );
    const navRef = useRef<HTMLDivElement>( null );

    // ==========================================================================
    // 📊 SCROLL BEHAVIOR - Google-Friendly (No content shift)
    // ==========================================================================

    useEffect( () =>
    {
        const handleScroll = () =>
        {
            const currentScrollY = window.scrollY;

            // Show/hide header with smooth animation
            if ( currentScrollY > 100 )
            {
                if ( currentScrollY > lastScrollY && currentScrollY > 100 )
                {
                    // Scrolling down - hide
                    setIsScrolled( true );
                } else
                {
                    // Scrolling up - show
                    setIsScrolled( false );
                }
            } else
            {
                setIsScrolled( false );
            }

            setLastScrollY( currentScrollY );
        };

        // Use passive listener for better performance (Google's INP)
        window.addEventListener( "scroll", handleScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [ lastScrollY ] );

    // ==========================================================================
    // 🎯 DROPDOWN MANAGEMENT - Accessibility & User Experience
    // ==========================================================================

    const handleDropdownToggle = useCallback( ( sectionId: string ) =>
    {
        setActiveDropdown( ( prev ) => ( prev === sectionId ? null : sectionId ) );
    }, [] );

    const closeAllDropdowns = useCallback( () =>
    {
        setActiveDropdown( null );
    }, [] );

    // Close dropdowns on escape key
    useEffect( () =>
    {
        const handleEscape = ( e: KeyboardEvent ) =>
        {
            if ( e.key === "Escape" )
            {
                closeAllDropdowns();
                setMobileOpen( false );
            }
        };
        document.addEventListener( "keydown", handleEscape );
        return () => document.removeEventListener( "keydown", handleEscape );
    }, [ closeAllDropdowns ] );

    // Close dropdowns on route change (for SPA navigation)
    useEffect( () =>
    {
        closeAllDropdowns();
        setMobileOpen( false );
    }, [ pathname, closeAllDropdowns ] );

    // ==========================================================================
    // 📱 MOBILE MENU OPTIMIZATION - Touch & Performance
    // ==========================================================================

    // Prevent body scroll when mobile menu is open (no layout shift)
    useEffect( () =>
    {
        if ( mobileOpen )
        {
            document.body.style.overflow = "hidden";
            // Focus management for screen readers
            const firstFocusable = document.querySelector(
                '[role="dialog"] button, [role="dialog"] a'
            ) as HTMLElement;
            firstFocusable?.focus();
        } else
        {
            document.body.style.overflow = "";
        }
        return () =>
        {
            document.body.style.overflow = "";
        };
    }, [ mobileOpen ] );

    // ==========================================================================
    // 🏢 DESKTOP NAVIGATION - Semantic & Accessible
    // ==========================================================================

    const DesktopNavigation = () => (
        <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="منوی اصلی سایت"
        >
            <Link
                href="/"
                className={ cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    "text-slate-700 hover:text-bms-primary hover:bg-slate-50",
                    "focus:outline-none focus:ring-2 focus:ring-bms-primary/30",
                    pathname === "/" && "text-bms-primary bg-bms-primary/5"
                ) }
                aria-label="برو به صفحه اصلی"
                aria-current={ pathname === "/" ? "page" : undefined }
            >
                <LuHouse className="h-4 w-4" />
                صفحه اصلی
            </Link>

            { NAV_SECTIONS.map( ( section ) => (
                <GoogleOptimizedDropdown
                    key={ section.id }
                    section={ section }
                    isOpen={ activeDropdown === section.id }
                    onToggle={ () => handleDropdownToggle( section.id ) }
                    onClose={ closeAllDropdowns }
                />
            ) ) }

            {/* Search Trigger (Optional - Google likes search functionality) */ }
            <button
                type="button"
                className="ml-2 p-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-bms-primary transition-colors"
                aria-label="جستجو در سایت"
                onClick={ () =>
                {
                    // Implement search functionality
                    console.log( "Search triggered" );
                } }
            >
                <LuSearch className="h-5 w-5" />
            </button>
        </nav>
    );

    // ==========================================================================
    // 📱 MOBILE NAVIGATION - Touch Optimized
    // ==========================================================================

    const MobileNavigation = () => (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="منوی موبایل"
            className={ cn(
                "lg:hidden fixed inset-0 z-[100] transition-all duration-300",
                mobileOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
            ) }
        >
            {/* Backdrop */ }
            <div
                className={ cn(
                    "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
                    mobileOpen ? "opacity-100" : "opacity-0"
                ) }
                onClick={ () => setMobileOpen( false ) }
                aria-hidden="true"
            />

            {/* Drawer */ }
            <div
                className={ cn(
                    "absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out",
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                ) }
                onClick={ ( e ) => e.stopPropagation() }
            >
                {/* Drawer Header */ }
                <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-bms-primary flex items-center justify-center">
                            <LuBuilding className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-sm text-slate-800">
                            بارمان محور اسپادانا
                        </span>
                    </div>
                    <button
                        onClick={ () => setMobileOpen( false ) }
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="بستن منو"
                    >
                        <LuX className="h-5 w-5 text-slate-600" />
                    </button>
                </div>

                {/* Drawer Content - Scrollable */ }
                <div className="h-[calc(100%-4rem)] flex flex-col">
                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
                        {/* Quick Actions */ }
                        <div className="space-y-3">
                            <Link
                                href="/"
                                onClick={ () => setMobileOpen( false ) }
                                className={ cn(
                                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
                                    "bg-slate-50 text-slate-800 hover:bg-slate-100",
                                    pathname === "/" && "bg-bms-primary/10 text-bms-primary"
                                ) }
                                aria-current={ pathname === "/" ? "page" : undefined }
                            >
                                <LuHouse className="h-5 w-5" />
                                صفحه اصلی
                            </Link>

                            <button
                                type="button"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium bg-slate-50 text-slate-800 hover:bg-slate-100 w-full"
                                onClick={ () =>
                                {
                                    setMobileOpen( false );
                                    // Implement search
                                } }
                            >
                                <LuSearch className="h-5 w-5" />
                                جستجو در سایت
                            </button>
                        </div>

                        {/* Navigation Sections */ }
                        { NAV_SECTIONS.map( ( section ) => (
                            <GoogleOptimizedDropdown
                                key={ section.id }
                                section={ section }
                                isOpen={ activeDropdown === section.id }
                                onToggle={ () => handleDropdownToggle( section.id ) }
                                onClose={ () => setMobileOpen( false ) }
                                isMobile
                            />
                        ) ) }
                    </div>

                    {/* Drawer Footer - Primary CTA */ }
                    <div className="border-t border-slate-200 p-4">
                        <Link
                            href="/contact-us?type=sales"
                            onClick={ () => setMobileOpen( false ) }
                            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-bms-primary to-bms-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            aria-label="شروع همکاری با بارمان محور اسپادانا"
                        >
                            <LuPhone className="h-5 w-5" />
                            <span className="text-sm">درخواست مشاوره رایگان</span>
                        </Link>

                        {/* Company Info */ }
                        <div className="mt-4 text-center">
                            <div className="text-xs text-slate-500">
                                شرکت دانش‌بنیان بارمان محور اسپادانا
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1">
                                شماره ثبت: ۵۸۴۲۶۷ - شناسه ملی: ۱۴۰۰۹۷۴۰۲۱۹
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // ==========================================================================
    // 🎨 HEADER RENDER - Google & Corporate Optimized
    // ==========================================================================

    return (
        <>
            {/* Skip to Main Content Link - Accessibility & Google Crawlability */ }
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-bms-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-bold"
                onClick={ ( e ) =>
                {
                    e.preventDefault();
                    const main = document.querySelector( "main" );
                    main?.setAttribute( "tabindex", "-1" );
                    main?.focus();
                } }
            >
                پرش به محتوای اصلی
            </a>

            {/* Main Header */ }
            <header
                ref={ headerRef }
                role="banner"
                className={ cn(
                    "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90",
                    "border-b border-slate-200/50 transition-all duration-300",
                    isScrolled && !mobileOpen
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                ) }
                data-google-component="navigation"
                data-crawl-priority="1.0"
                data-semantic-role="banner"
            >
                <div
                    ref={ navRef }
                    className="container mx-auto max-w-7xl px-4 md:px-6"
                >
                    <div className="flex h-16 md:h-20 items-center justify-between gap-4">
                        {/* LOGO SECTION - Brand Identity + Google Signals */ }
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                            aria-label="بارمان محور اسپادانا - بازگشت به صفحه اصلی"
                            onClick={ closeAllDropdowns }
                        >
                            {/* Logo with semantic meaning */ }
                            <div
                                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-bms-primary to-bms-primary/80 text-white shadow-lg group-hover:shadow-xl transition-shadow"
                                role="img"
                                aria-label="لوگوی بارمان محور اسپادانا"
                            >
                                <Image
                                    src="/bmslogoclean.webp"
                                    alt="لوگوی شرکت دانش‌بنیان بارمان محور اسپادانا - فعال در حوزه هوشمندسازی صنعتی"
                                    width={ 48 }
                                    height={ 48 }
                                    className="p-1.5"
                                    priority // Google LCP optimization
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                {/* Trust Badge for E-E-A-T signals */ }
                                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                                    <LuShieldCheck className="h-2.5 w-2.5 text-white" />
                                </div>
                            </div>

                            {/* Company Name with semantic hierarchy */ }
                            <div className="flex flex-col leading-tight">
                                <h1 className="text-base md:text-lg font-bold text-bms-dark tracking-tight">
                                    بارمان محور اسپادانا
                                    <span className="text-xs text-green-600 font-normal mr-2">
                                        (دانش‌بنیان)
                                    </span>
                                </h1>
                                <div className="text-xs text-slate-600">
                                    <span className="font-medium">هوشمندسازی زیرساخت‌های حیاتی</span>
                                    <span className="text-slate-400 mx-1">•</span>
                                    <span>صنعت نفت، گاز و سلامت</span>
                                </div>
                            </div>
                        </Link>

                        {/* DESKTOP NAVIGATION */ }
                        <DesktopNavigation />

                        {/* CALL TO ACTION + MOBILE TOGGLE */ }
                        <div className="flex items-center gap-3">
                            {/* Primary CTA - Google values clear conversion paths */ }
                            <Link
                                href="/contact-us?type=sales"
                                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-bms-primary to-bms-primary/90 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                                aria-label="شروع همکاری با کارشناسان بارمان محور اسپادانا"
                                onClick={ closeAllDropdowns }
                                data-conversion-type="primary"
                                data-google-event="contact_cta_click"
                            >
                                <LuPhone className="h-4 w-4" />
                                <span>درخواست مشاوره</span>
                            </Link>

                            {/* Language Selector (Optional) */ }
                            <button
                                type="button"
                                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-bms-primary transition-colors"
                                aria-label="تغییر زبان"
                            >
                                <LuGlobe className="h-4 w-4" />
                                <span className="text-xs font-medium">FA</span>
                            </button>

                            {/* Mobile Menu Toggle */ }
                            <button
                                type="button"
                                onClick={ () => setMobileOpen( true ) }
                                className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-bms-primary transition-colors"
                                aria-label="باز کردن منوی موبایل"
                                aria-expanded={ mobileOpen }
                                aria-controls="mobile-menu"
                            >
                                <LuMenu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE NAVIGATION DRAWER */ }
            <MobileNavigation />

            {/* STRUCTURED DATA FOR GOOGLE (JSON-LD) */ }
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "بارمان محور اسپادانا",
                        alternateName: "BMS",
                        url: "https://barman-mes.ir",
                        logo: "https://barman-mes.ir/bmslogoclean.webp",
                        description: "شرکت دانش‌بنیان فعال در طراحی و پیاده‌سازی سامانه‌های بومی پایش و کنترل (ICTS)، پلتفرم‌های دیجیتال و هوشمندسازی زیرساخت‌های حساس انرژی و سلامت.",
                        foundingDate: "2020",
                        foundingLocation: {
                            "@type": "Place",
                            name: "اصفهان، ایران",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+98-313-1234567",
                            contactType: "پشتیبانی فنی",
                            areaServed: "IR",
                            availableLanguage: "fa",
                        },
                        sameAs: [
                            "https://linkedin.com/company/barman-mes",
                            "https://twitter.com/barmanmes",
                        ],
                        knowsAbout: [
                            "هوشمندسازی صنعتی",
                            "صنعت نفت و گاز",
                            "سلامت دیجیتال",
                            "Industry 4.0",
                            "اینترنت اشیاء صنعتی",
                        ],
                    } ),
                } }
            />
        </>
    );
}