"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedNews, getAllNews } from "./data";
import { Section } from "@/components/layout/Section";
import { LuArrowLeft, LuZap, LuActivity } from "react-icons/lu";

gsap.registerPlugin( ScrollTrigger );

export default function NewsPreview ()
{
    const featured = getFeaturedNews()[ 0 ];
    const feed = getAllNews().slice( 1, 5 );

    const containerRef = useRef<HTMLDivElement>( null );
    const featuredRef = useRef<HTMLDivElement>( null );

    useGSAP( () =>
    {
        gsap.from( ".news-eyebrow", {
            opacity: 0,
            x: -30,
            duration: 1,
            scrollTrigger: {
                trigger: ".news-eyebrow",
                start: "top 90%"
            }
        } );

        gsap.to( ".parallax-img", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-img",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        } );

        gsap.from( ".feed-item", {
            opacity: 0,
            x: 50,
            scale: 0.95,
            stagger: 0.2,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".feed-container",
                start: "top 80%"
            }
        } );

        gsap.to( ".floating-hud", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1
            }
        } );
    }, { scope: containerRef } );

    if ( !featured ) return null;

    return (
        <Section
            variant="white"
            spacing="large"
            id="news"
            className="overflow-visible"
        >
            {/* 🧩 BACKGROUND IMMERSION LAYER */ }
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <div className="floating-hud absolute top-20 left-10 text-[100px] font-black text-slate-50 leading-none">
                    INSIGHT
                </div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100" />
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:100px_100px]" />
            </div>

            <div ref={ containerRef } className="relative z-10">

                {/* ================= HEADER ================= */ }
                <header className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24 pr-4">
                    <div className="space-y-6 text-right">
                        <div className="news-eyebrow flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-[#D72638] shadow-[0_0_10px_#D72638]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                                Data Stream / 042-BMS
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tightest leading-none">
                            مرکز رسانه و <br />
                            <span className="text-[#145C98]">
                                تحولات استراتژیک
                            </span>
                        </h2>
                    </div>

                    <Link href="/news" className="group flex flex-col items-end gap-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Archive
                        </span>
                        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 pl-4 pr-6 py-3 rounded-full transition-all group-hover:bg-[#145C98] group-hover:text-white group-hover:border-[#145C98]">
                            <span className="text-sm font-black">
                                مشاهده تمام اخبار
                            </span>
                            <LuArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                        </div>
                    </Link>
                </header>

                <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">

                    {/* ================= FEATURED ================= */ }
                    <div className="lg:col-span-7" ref={ featuredRef }>
                        <Link
                            href={ `/news/${ featured.slug }` }
                            className="group relative block"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-200">
                                <Image
                                    src={ featured.image }
                                    alt={ featured.title }
                                    fill
                                    className="parallax-img object-cover opacity-80 transition-transform duration-[2s] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-white/40 font-mono text-[9px] uppercase tracking-widest">
                                    <span>Status: Verified</span>
                                    <span>Latency: 14ms</span>
                                </div>

                                <div className="absolute top-0 right-0 h-32 w-1 bg-[#F4C430]" />
                            </div>

                            <div className="mt-10 space-y-6 pr-4">
                                <div className="flex items-center gap-4">
                                    <span className="bg-[#D72638] text-white text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-tighter">
                                        { featured.category }
                                    </span>
                                    <time className="text-xs font-bold text-slate-400 font-mono">
                                        { new Intl.DateTimeFormat( "fa-IR" )
                                            .format( new Date( featured.publishedAt ) ) }
                                    </time>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] transition-colors group-hover:text-[#145C98]">
                                    { featured.title }
                                </h3>

                                <p className="text-lg text-slate-500 leading-corp-relaxed line-clamp-3 font-light text-justify">
                                    { featured.summary }
                                </p>

                                <div className="flex items-center gap-3 text-[#145C98] font-black uppercase text-xs tracking-widest pt-4">
                                    <LuZap className="h-4 w-4 fill-current" />
                                    <span>Full Analysis Available</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* ================= FEED ================= */ }
                    <div className="lg:col-span-5 space-y-12">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                Latest Feed
                            </span>
                            <LuActivity className="h-4 w-4 text-emerald-500 animate-pulse" />
                        </div>

                        <div className="feed-container divide-y divide-slate-100">
                            { feed.map( ( item ) => (
                                <article
                                    key={ item.slug }
                                    className="feed-item group py-10 first:pt-0"
                                >
                                    <Link
                                        href={ `/news/${ item.slug }` }
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#145C98] transition-transform group-hover:scale-[3] group-hover:bg-[#D72638]" />
                                            <span className="text-[10px] font-black text-[#D72638] uppercase tracking-wider">
                                                { item.category }
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#145C98] transition-all">
                                            { item.title }
                                        </h4>

                                        <div className="flex items-center justify-between">
                                            <time className="text-[10px] font-mono font-bold text-slate-400">
                                                { new Intl.DateTimeFormat( "fa-IR" )
                                                    .format( new Date( item.publishedAt ) ) }
                                            </time>
                                            <div className="h-px flex-1 bg-slate-50 mx-4" />
                                            <LuArrowLeft className="h-4 w-4 text-slate-300 transition-transform group-hover:-translate-x-2 group-hover:text-[#145C98]" />
                                        </div>
                                    </Link>
                                </article>
                            ) ) }
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}
