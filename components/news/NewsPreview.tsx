// components/home/NewsPreview.tsx
'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getFeaturedNews, getAllNews } from './data';
import { LuArrowLeft, LuCalendar, LuNewspaper } from "react-icons/lu";

gsap.registerPlugin( useGSAP );

export default function NewsPreview ()
{
    // 🧠 DATA: Fetch content (Client-side import of static data is fine here)
    const featured = getFeaturedNews();
    const latestUpdates = getAllNews().slice( 0, 3 );
    const [ activeIndex, setActiveIndex ] = useState( 0 );

    const slideContainerRef = useRef<HTMLDivElement>( null );

    // 1. HERO SLIDER LOGIC
    useGSAP( () =>
    {
        if ( !slideContainerRef.current || featured.length === 0 ) return;

        const slides = slideContainerRef.current.children;

        // Initial State: Only show active index
        gsap.set( slides, { opacity: 0, zIndex: 0 } );
        gsap.set( slides[ activeIndex ], { opacity: 1, zIndex: 10 } );

        const timer = setInterval( () =>
        {
            const nextIndex = ( activeIndex + 1 ) % featured.length;

            // Crossfade Animation
            const tl = gsap.timeline();

            tl.to( slides[ activeIndex ], {
                opacity: 0,
                zIndex: 0,
                duration: 1.2,
                ease: 'power2.inOut'
            } )
                .fromTo( slides[ nextIndex ],
                    { opacity: 0, zIndex: 10 },
                    { opacity: 1, duration: 1.2, ease: 'power2.inOut' },
                    "<" // Start at same time
                );

            setActiveIndex( nextIndex );
        }, 8000 ); // 8s dwell time

        return () => clearInterval( timer );
    }, [ activeIndex, featured.length ] );

    if ( featured.length === 0 ) return null;

    return (
        <section className="w-full bg-slate-50 border-t border-slate-200 py-16 font-sans relative overflow-hidden" dir="rtl">
            {/* Background Texture */ }
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* 
                   HEADER 
                   Semantic structure for accessibility
                */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <span className="inline-flex items-center gap-2 text-bms-primary font-bold text-xs tracking-wider mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            <LuNewspaper className="h-3 w-3" />
                            رسانه و مطبوعات
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-bms-dark leading-tight">
                            آخرین <span className="text-bms-primary">اخبار بارمان</span>
                        </h2>
                    </div>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-bms-primary transition-colors group"
                    >
                        <span>آرشیو کامل مطالب</span>
                        <LuArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>

                {/* 
                   BENTO GRID LAYOUT 
                   Left: List (Desktop) | Right: Slider
                */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[500px]">

                    {/* 1. HERO SLIDER (Dominant Visual) */ }
                    <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 h-[400px] lg:h-full border border-slate-800 group">
                        <div ref={ slideContainerRef } className="relative w-full h-full">
                            { featured.map( ( item, index ) => (
                                <article key={ item.slug } className="absolute inset-0 w-full h-full">

                                    {/* ⚡ LCP: Priority Image */ }
                                    <Image
                                        src={ item.image }
                                        alt={ item.title }
                                        fill
                                        priority={ index === 0 }
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s] ease-out"
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                    />

                                    {/* Gradient Overlay */ }
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                                    {/* Content Layer */ }
                                    <div className="absolute bottom-0 right-0 w-full p-8 md:p-10 flex flex-col items-start">
                                        <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold rounded-lg mb-4 shadow-sm">
                                            { item.category }
                                        </span>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-md text-balance">
                                            <Link href={ `/news/${ item.slug }` } className="hover:underline decoration-emerald-400 underline-offset-8 decoration-2">
                                                { item.title }
                                            </Link>
                                        </h3>
                                        <p className="text-slate-200 text-sm md:text-base line-clamp-2 max-w-2xl hidden md:block leading-relaxed opacity-90">
                                            { item.summary }
                                        </p>
                                    </div>
                                </article>
                            ) ) }
                        </div>

                        {/* Pagination Dots */ }
                        <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                            { featured.map( ( _, idx ) => (
                                <button
                                    key={ idx }
                                    onClick={ () => setActiveIndex( idx ) }
                                    className={ `h-1.5 rounded-full transition-all duration-500 ${ idx === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30 hover:bg-white/60'
                                        }` }
                                    aria-label={ `Go to slide ${ idx + 1 }` }
                                />
                            ) ) }
                        </div>
                    </div>

                    {/* 2. SIDE LIST (Quick Updates) */ }
                    <div className="lg:col-span-4 flex flex-col gap-4 h-full">
                        { latestUpdates.map( ( item ) => (
                            <Link
                                key={ item.slug }
                                href={ `/news/${ item.slug }` }
                                className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 hover:border-bms-primary/40 hover:shadow-lg transition-all group flex flex-col justify-center relative overflow-hidden"
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-bms-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                                <div className="flex items-center gap-2 mb-3 text-slate-400">
                                    <LuCalendar className="h-3.5 w-3.5" />
                                    <span className="text-xs font-medium font-mono pt-0.5">
                                        { new Intl.DateTimeFormat( 'fa-IR' ).format( new Date( item.publishedAt ) ) }
                                    </span>
                                </div>

                                <h4 className="text-base font-bold text-slate-800 leading-snug group-hover:text-bms-primary transition-colors line-clamp-2">
                                    { item.title }
                                </h4>
                            </Link>
                        ) ) }

                        {/* Mobile "View All" Button */ }
                        <Link
                            href="/news"
                            className="md:hidden w-full py-4 bg-slate-100 text-slate-700 font-bold rounded-2xl text-center text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <span>مشاهده همه اخبار</span>
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}