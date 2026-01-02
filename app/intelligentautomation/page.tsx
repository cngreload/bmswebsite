"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";

export default function IntelligentAutomationPage ()
{
    const [ hideNav, setHideNav ] = useState( false );

    /* -------------------------------------------
     * HIDE GLOBAL LAYOUT NAV ON SCROLL
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
     * STRUCTURED DATA (Service Schema)
     * -----------------------------------------*/
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Industrial IoT Platform",
        name: "WIT Platform",
        provider: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
        },
        description:
            "پلتفرم هسته‌ای سخت‌افزاری و نرم‌افزاری برای توسعه راهکارهای هوشمندسازی صنعتی و سازمانی.",
        areaServed: "IR",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "WIT Solutions",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "ICTS (Energy)" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Clinicans (Health)" },
                },
            ],
        },
    };

    return (
        <>
            <Script
                id="json-ld-wit"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* LOCAL PAGE NAV */ }
            <header
                className={ `sticky top-0 z-40 transition-transform duration-300 ${ hideNav ? "-translate-y-full" : "translate-y-0"
                    } border-b border-slate-200 bg-white/80 backdrop-blur` }
            >
                <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                    >
                        <LuHouse className="h-3 w-3" />
                        <span>خانه</span>
                    </Link>
                    <LuChevronLeft className="h-3 w-3 opacity-50" />
                    <span className="font-medium text-indigo-600">تکنولوژی WIT</span>
                </div>
            </header>

            {/* MAIN CONTENT */ }
            <main id="main-content" className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-24 md:space-y-32">
                    <WitHeroSection />
                    <WitWhatIsSection />

                    <div className="relative rounded-[3rem] bg-white p-8 shadow-sm border border-slate-100 md:p-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                        <WitStrategicAdvantageSection />
                    </div>

                    <WitArchitectureSection />
                </div>
            </main>
        </>
    );
}
