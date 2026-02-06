"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { CLINICANS_TABS, ClinicansTab } from "./clinicansSystemTabs.data";
import { LuArrowLeft } from "react-icons/lu";

/* ---------------------------------------------
 * Accent colors
 * -------------------------------------------*/
const accentMap: Record<string, string> = {
    blue: "text-blue-600 border-blue-200",
    emerald: "text-emerald-600 border-emerald-200",
    rose: "text-rose-600 border-rose-200",
    violet: "text-violet-600 border-violet-200",
};

/* ---------------------------------------------
 * Image per tab (single source of truth)
 * -------------------------------------------*/
const tabImages: Record<ClinicansTab[ "id" ], string> = {
    digital: "/images/clinicans/digital.jpg",
    operations: "/images/clinicans/operations.jpg",
    growth: "/images/clinicans/growth.jpg",
    ai: "/images/clinicans/ai.jpg",
};

export default function ClinicansSystemTabs ()
{
    const [ active, setActive ] = useState<ClinicansTab>( CLINICANS_TABS[ 0 ] );
    const tabRefs = useRef<( HTMLButtonElement | null )[]>( [] );

    /* ---------------------------------------------
     * Keyboard navigation (← →)
     * -------------------------------------------*/
    const onKeyDown = ( e: React.KeyboardEvent, index: number ) =>
    {
        if ( e.key === "ArrowLeft" || e.key === "ArrowRight" )
        {
            e.preventDefault();
            const dir = e.key === "ArrowRight" ? -1 : 1;
            const next =
                ( index + dir + CLINICANS_TABS.length ) % CLINICANS_TABS.length;

            setActive( CLINICANS_TABS[ next ] );
            tabRefs.current[ next ]?.focus();
        }
    };

    return (
        <section
            id="system-overview"
            className="relative py-24 bg-white text-slate-800 overflow-hidden"
            dir="rtl"
            aria-labelledby="system-heading"
        >
            {/* JSON-LD per active tab */ }
            <Script
                id={ `jsonld-${ active.id }` }
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": active.entityType,
                        name: active.title,
                        description: active.description,
                        dateModified: active.lastUpdated,
                        keywords: active.relatedKeywords.join( ", " ),
                        url: `https://barman-mes.ir${ active.ctaLink }`,
                    } ),
                } }
            />

            <div className="mx-auto max-w-6xl px-4 space-y-14">
                {/* Header */ }
                <header className="max-w-3xl ml-auto space-y-3">
                    <h2 id="system-heading" className="text-3xl md:text-4xl font-bold">
                        معماری پلتفرم Clinicans
                    </h2>
                    <p className="text-slate-600 leading-7">
                        هر ماژول یک نقش مشخص در توانمندسازی دیجیتال مراکز درمانی دارد.
                    </p>
                </header>

                {/* Tabs */ }
                <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="hidden md:flex gap-2 justify-end flex-wrap"
                >
                    { CLINICANS_TABS.map( ( tab, i ) =>
                    {
                        const Icon = tab.icon;
                        const isActive = tab.id === active.id;

                        return (
                            <button
                                key={ tab.id }
                                ref={ ( el ) =>
                                {
                                    tabRefs.current[ i ] = el;
                                } }
                                role="tab"
                                aria-selected={ isActive }
                                aria-controls={ `panel-${ tab.id }` }
                                tabIndex={ isActive ? 0 : -1 }
                                onClick={ () => setActive( tab ) }
                                onKeyDown={ ( e ) => onKeyDown( e, i ) }
                                className={ `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold border transition
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${ isActive
                                        ? `bg-white ${ accentMap[ tab.accent ] }`
                                        : "border-slate-200 text-slate-500 hover:bg-slate-50"
                                    }
                `}
                            >
                                <Icon className="h-4 w-4" />
                                { tab.label }
                            </button>
                        );
                    } ) }
                </div>

                {/* Mobile dropdown */ }
                <div className="md:hidden">
                    <select
                        value={ active.id }
                        onChange={ ( e ) =>
                            setActive(
                                CLINICANS_TABS.find( ( t ) => t.id === e.target.value )!
                            )
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
                        aria-label="انتخاب ماژول پلتفرم"
                    >
                        { CLINICANS_TABS.map( ( tab ) => (
                            <option key={ tab.id } value={ tab.id }>
                                { tab.label }
                            </option>
                        ) ) }
                    </select>
                </div>

                {/* Content panel */ }
                <div
                    id={ `panel-${ active.id }` }
                    role="tabpanel"
                    className="grid gap-12 lg:grid-cols-12 rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12"
                >
                    {/* Left: Definition */ }
                    <div className="lg:col-span-7 space-y-6 border-l-4 border-slate-200 pl-6">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            { active.title }
                        </h3>

                        <p className="text-slate-600 leading-8 text-justify">
                            { active.description }
                        </p>

                        <Link
                            href={ active.ctaLink }
                            className={ `inline-flex items-center gap-2 text-sm font-bold ${ accentMap[ active.accent ] }` }
                        >
                            { active.ctaText }
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Right: Visual explanation (changes per tab) */ }
                    <aside className="lg:col-span-5">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                            <Image
                                key={ active.id }
                                src={ tabImages[ active.id ] }
                                alt={ active.title }
                                fill
                                className="object-cover transition-opacity duration-300"
                                priority={ active.id === CLINICANS_TABS[ 0 ].id }
                            />

                            {/* Soft overlay for consistency */ }
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Motion-reduced accessibility */ }
            <style jsx>{ `
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
        </section>
    );
}
