'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getFeaturedNews, getAllNews } from './data';
import { LuArrowLeft, LuCalendar, LuNewspaper } from "react-icons/lu";

gsap.registerPlugin( useGSAP );

export default function NewsPreview ()
{
    const featured = getFeaturedNews()[ 0 ];
    const feed = getAllNews().slice( 0, 6 );

    const rootRef = useRef<HTMLDivElement>( null );
    const feedRef = useRef<HTMLDivElement>( null );
    const tweenRef = useRef<gsap.core.Tween | null>( null );

    /* ================= ENTRANCE ================= */
    useGSAP( () =>
    {
        gsap.from( '[data-news-block]', {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
        } );
    }, [] );

    /* ================= AUTO SCROLL FEED ================= */
    useEffect( () =>
    {
        if ( !feedRef.current ) return;

        // Disable auto-scroll on small screens
        if ( window.innerWidth < 1024 ) return;

        const container = feedRef.current;
        const items = Array.from( container.children ) as HTMLElement[];

        if ( items.length < 2 ) return;

        const itemHeight = items[ 0 ].offsetHeight + 24; // incl. gap
        const totalHeight = itemHeight * items.length;

        gsap.set( container, { y: 0 } );

        tweenRef.current = gsap.to( container, {
            y: `-=${ totalHeight }`,
            duration: items.length * 7, // ~7s per item
            ease: 'linear',
            repeat: -1,
            modifiers: {
                y: ( y ) =>
                {
                    const current = parseFloat( y );
                    return `${ current % totalHeight }px`;
                },
            },
        } );

        // Pause on hover
        const pause = () => tweenRef.current?.pause();
        const resume = () => tweenRef.current?.resume();

        container.addEventListener( 'mouseenter', pause );
        container.addEventListener( 'mouseleave', resume );
        container.addEventListener( 'focusin', pause );
        container.addEventListener( 'focusout', resume );

        return () =>
        {
            tweenRef.current?.kill();
            container.removeEventListener( 'mouseenter', pause );
            container.removeEventListener( 'mouseleave', resume );
            container.removeEventListener( 'focusin', pause );
            container.removeEventListener( 'focusout', resume );
        };
    }, [] );

    if ( !featured ) return null;

    return (
        <section
            ref={ rootRef }
            aria-labelledby="news-heading"
            className="relative bg-white border-t border-slate-200 py-28"
            dir="rtl"
        >
            <div className="mx-auto max-w-7xl px-4">

                {/* ================= HEADER ================= */ }
                <header
                    data-news-block
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 text-bms-primary font-bold text-xs tracking-wider mb-4">
                            <LuNewspaper className="h-4 w-4" />
                            مرکز رسانه بارمان
                        </span>

                        <h2
                            id="news-heading"
                            className="text-3xl md:text-4xl font-bold text-slate-900"
                        >
                            اخبار، تحلیل‌ها و اطلاعیه‌ها
                        </h2>
                    </div>

                    <Link
                        href="/news"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-bms-primary transition"
                    >
                        مشاهده آرشیو
                        <LuArrowLeft className="h-4 w-4" />
                    </Link>
                </header>

                {/* ================= GRID ================= */ }
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* ================= FEATURED ================= */ }
                    <article
                        data-news-block
                        className="lg:col-span-7 group"
                    >
                        <Link href={ `/news/${ featured.slug }` } className="block">
                            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 mb-8">
                                <Image
                                    src={ featured.image }
                                    alt={ featured.title }
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-4 max-w-xl">
                                <span className="inline-block text-xs font-bold tracking-widest text-bms-primary">
                                    { featured.category }
                                </span>

                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug group-hover:text-bms-primary transition-colors">
                                    { featured.title }
                                </h3>

                                <p className="text-slate-600 leading-relaxed line-clamp-3">
                                    { featured.summary }
                                </p>
                            </div>
                        </Link>
                    </article>

                    {/* ================= AUTO-SCROLL FEED ================= */ }
                    <div
                        data-news-block
                        className="lg:col-span-5 border-r border-slate-200 pr-8 overflow-hidden"
                    >
                        <div ref={ feedRef } className="flex flex-col gap-6">
                            { [ ...feed, ...feed ].map( ( item, idx ) => (
                                <Link
                                    key={ `${ item.slug }-${ idx }` }
                                    href={ `/news/${ item.slug }` }
                                    className="group flex gap-4 items-start"
                                >
                                    <div className="mt-1 h-2 w-2 rounded-full bg-bms-primary/40 group-hover:bg-bms-primary transition" />

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                                            <LuCalendar className="h-3 w-3" />
                                            <span className="font-mono">
                                                { new Intl.DateTimeFormat( 'fa-IR' ).format(
                                                    new Date( item.publishedAt )
                                                ) }
                                            </span>
                                        </div>

                                        <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-bms-primary transition-colors line-clamp-2">
                                            { item.title }
                                        </h4>
                                    </div>
                                </Link>
                            ) ) }
                        </div>

                        {/* Mobile CTA */ }
                        <Link
                            href="/news"
                            className="md:hidden mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-4 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                        >
                            مشاهده همه اخبار
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
