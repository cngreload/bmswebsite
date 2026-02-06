"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import
{
    LuChevronLeft,
    LuHouse,
    LuArrowRight,
    LuMenu,
    LuX,
} from "react-icons/lu";

import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";
import WitBmsStorySection from "@/components/wit/WitBmsStorySection";
import WitDomainsSection from "@/components/wit/WitDomainsSection";
import WitImpactSection from "@/components/wit/WitImpactSection";

export default function IntelligentAutomationPage ()
{
    const [ hideNav, setHideNav ] = useState( false );
    const [ menuOpen, setMenuOpen ] = useState( false );

    /* -------------------------------------------
     * HIDE NAV + BREADCRUMB ON SCROLL
     * -----------------------------------------*/
    useEffect( () =>
    {
        let lastY = window.scrollY;

        const onScroll = () =>
        {
            const currentY = window.scrollY;
            setHideNav( currentY > 80 && currentY > lastY );
            lastY = currentY;
        };

        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    /* -------------------------------------------
     * LOCK BODY SCROLL WHEN MENU OPEN
     * -----------------------------------------*/
    useEffect( () =>
    {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () =>
        {
            document.body.style.overflow = "";
        };
    }, [ menuOpen ] );

    /* -------------------------------------------
     * STRUCTURED DATA
     * -----------------------------------------*/
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "بارمان محور سپادانا (BMS Co.)",
            },
            {
                "@type": "SoftwareApplication",
                name: "پلتفرم هوشمند جهانی (WIT)",
                applicationCategory: "BusinessApplication",
            },
        ],
    };

    return (
        <>
            <Script
                id="json-ld-wit"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* =========================
       * LOCAL STICKY NAVBAR
       * ========================= */}
            <header
                className={ `
          sticky top-0 z-50
          transition-transform duration-300
          ${ hideNav ? "-translate-y-full" : "translate-y-0" }
          border-b border-slate-200 bg-white/80 backdrop-blur
        `}
            >
                <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    {/* Mobile / Tablet Menu Button */ }
                    <button
                        aria-label="باز کردن منو"
                        onClick={ () => setMenuOpen( true ) }
                        className="md:hidden text-slate-700"
                    >
                        <LuMenu className="h-5 w-5" />
                    </button>

                    {/* Desktop Quick Links */ }
                    <nav className="hidden md:flex items-center gap-4 text-xs text-slate-600">
                        <a href="#story" className="hover:text-indigo-600 transition-colors">
                            داستان BMS
                        </a>
                        <a
                            href="#architecture"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            معماری
                        </a>
                        <a href="#domains" className="hover:text-indigo-600 transition-colors">
                            حوزه‌ها
                        </a>
                        <a href="#impact" className="hover:text-indigo-600 transition-colors">
                            تأثیر
                        </a>
                    </nav>
                </div>
            </header>

            {/* =========================
       * MOBILE / TABLET DRAWER
       * ========================= */}
            { menuOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/40"
                >
                    <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-800">
                                ناوبری WIT
                            </span>
                            <button
                                aria-label="بستن منو"
                                onClick={ () => setMenuOpen( false ) }
                            >
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        <ul className="space-y-4 text-sm">
                            { [
                                { href: "#story", label: "داستان BMS" },
                                { href: "#architecture", label: "معماری" },
                                { href: "#domains", label: "حوزه‌ها" },
                                { href: "#impact", label: "تأثیر" },
                            ].map( ( item ) => (
                                <li key={ item.href }>
                                    <a
                                        href={ item.href }
                                        onClick={ () => setMenuOpen( false ) }
                                        className="block text-slate-600 hover:text-indigo-600 transition-colors"
                                    >
                                        { item.label }
                                    </a>
                                </li>
                            ) ) }
                        </ul>
                    </div>
                </div>
            ) }

            {/* =========================
       * SINGLE STICKY BREADCRUMB
       * ========================= */}
            <div
                className={ `
          sticky top-[56px] z-40
          transition-transform duration-300
          ${ hideNav ? "-translate-y-full" : "translate-y-0" }
          border-b border-slate-200 bg-white
        `}
            >
                <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 text-xs text-slate-500">
                    <Link
                        href="/"
                        className="flex items-center gap-1 transition-colors hover:text-indigo-600"
                    >
                        <LuHouse className="h-3 w-3" />
                        <span>خانه</span>
                    </Link>
                    <LuChevronLeft className="h-3 w-3 opacity-50" />
                    <span className="font-medium text-indigo-600">
                        پلتفرم هوشمند WIT
                    </span>
                </div>
            </div>

            {/* =========================
       * MAIN CONTENT
       * ========================= */}
            <div
                id="main-content"
                className="min-h-screen bg-gradient-to-b from-white to-slate-50"
            >
                <div className="mx-auto max-w-6xl space-y-24 px-4 py-12 md:space-y-32 md:py-20">
                    <section id="hero">
                        <WitHeroSection />
                    </section>

                    <section id="story">
                        <WitBmsStorySection />
                    </section>

                    <WitWhatIsSection />

                    <section className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-8 shadow-lg md:p-12">
                        <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                        <WitStrategicAdvantageSection />
                    </section>

                    <section id="architecture">
                        <WitArchitectureSection />
                    </section>

                    <section id="domains">
                        <WitDomainsSection />
                    </section>

                    <section id="impact">
                        <WitImpactSection />
                    </section>

                    {/* CTA */ }
                    <section className="py-12 text-center">
                        <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                            آماده برای انقلاب صنعتی چهارم؟
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-slate-600">
                            WIT پلتفرم هسته‌ای برای سازمان‌هایی است که می‌خواهند پیشرو باشند.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact?subject=wit-platform"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors"
                            >
                                درخواست جلسه مشاوره
                                <LuArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/clinicans"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                مشاهده پروژه Clinicans
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
