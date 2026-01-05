"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuShieldCheck, LuAward, LuFileBadge } from "react-icons/lu";

// Register GSAP Plugin
if ( typeof window !== "undefined" )
{
    gsap.registerPlugin( ScrollTrigger );
}

export default function CngStory ()
{
    const containerRef = useRef<HTMLElement>( null );
    const imageWrapperRef = useRef<HTMLDivElement>( null );
    const contentRef = useRef<HTMLDivElement>( null );

    // Refs for staggered animation
    const badgeRef = useRef( null );
    const titleRef = useRef( null );
    const descRef = useRef( null );
    const gridRef = useRef( null );

    useEffect( () =>
    {
        const container = containerRef.current;
        const imageWrapper = imageWrapperRef.current;
        const content = contentRef.current;

        if ( !container || !imageWrapper || !content ) return;

        // ⚡ PERFORMANCE: Browser Hinting
        gsap.set( imageWrapper, { willChange: "clip-path, transform" } );
        gsap.set( content, { willChange: "opacity, transform" } );

        const ctx = gsap.context( () =>
        {

            const tl = gsap.timeline( {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=300%", // Longer scroll distance for drama
                    scrub: 0.5,    // Smooth scrubbing
                    pin: true,
                    anticipatePin: 1,
                },
            } );

            // --- SEQUENCE DEFINITION ---

            // 1. Expand Image (The Reveal)
            tl.to( imageWrapper, {
                clipPath: "inset(0% 0% 0% 0% round 0px)", // Full screen, sharp corners
                scale: 1,
                duration: 2,
                ease: "power3.inOut",
            } )

                // 2. Content Entry (Staggered Fade In)
                .to( content, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.5" ) // Overlap slightly with image expansion

                // Stagger internal elements
                .from( [ badgeRef.current, titleRef.current, descRef.current, gridRef.current ], {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.2)",
                }, "<" )

                // 3. The Hold (Reading Time)
                .to( {}, { duration: 1.5 } )

                // 4. Exit Phase
                .to( content, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.in",
                } )
                .to( imageWrapper, {
                    clipPath: "inset(15% 5% 15% 5% round 2.5rem)", // Shrink back differently
                    scale: 0.9,
                    filter: "grayscale(100%)", // Fade to B&W on exit
                    duration: 2,
                    ease: "power3.inOut",
                }, "<+=0.1" );

        }, containerRef );

        return () => ctx.revert();
    }, [] );

    return (
        <section
            ref={ containerRef }
            className="relative w-full h-screen bg-slate-50 flex items-center justify-center overflow-hidden"
            aria-label="داستان امنیت و پدافند"
            dir="rtl"
        >
            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* 
           ================= 1. THE GLASS CARD (Content) =================
           Positioned absolutely in center (z-20).
           Initial state: Hidden & Translated Down.
        */}
                <div
                    ref={ contentRef }
                    className="absolute z-20 w-[90%] max-w-4xl opacity-0 translate-y-10"
                >
                    <div className="relative overflow-hidden rounded-[3rem] bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-12 text-center">

                        {/* Texture Overlay for Glass */ }
                        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

                        {/* Badge */ }
                        <div ref={ badgeRef } className="flex justify-center mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider shadow-lg">
                                <LuShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span>استاندارد ملی امنیت</span>
                            </span>
                        </div>

                        {/* Headline */ }
                        <h2 ref={ titleRef } className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-6">
                            تنها دارنده گواهی <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bms-primary to-blue-600">
                                پدافند غیرعامل
                            </span>
                        </h2>

                        {/* Description */ }
                        <p className="text-lg md:text-xl text-slate-600 leading-9 font-medium">
                            در زیرساخت‌های حیاتی کشور، اعتماد اتفاقی نیست.
                            <br className="hidden md:block" />
                            سامانه کنترل و مانیتورینگ جایگاه های سوخت سی ان جی تنها پلتفرم بومی است که موفق به اخذ بالاترین سطوح تاییدیه‌های امنیتی و پدافندی شده است.
                        </p>
                        {/* Trust Grid */ }
                        <div ref={ gridRef } className="flex flex-wrap justify-center gap-4 mt-8 border-t border-slate-200/50 pt-8">
                            <div className="flex items-center gap-3 bg-white/60 px-5 py-3 rounded-2xl border border-white shadow-sm hover:scale-105 transition-transform cursor-default">
                                <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                                    <LuAward className="w-5 h-5" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Certificate</span>
                                    <span className="text-sm font-bold text-slate-800">مجوز سازمان پدافند غیر عامل</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/60 px-5 py-3 rounded-2xl border border-white shadow-sm hover:scale-105 transition-transform cursor-default">
                                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                                    <LuFileBadge className="w-5 h-5" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Approval</span>
                                    <span className="text-sm font-bold text-slate-800">تاییدیه دانش بنیان</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 
           ================= 2. THE VISUAL (Image) =================
           Initial State: Inset (Card Look).
           Animates to: Full Screen.
        */}
                <div
                    ref={ imageWrapperRef }
                    className="absolute inset-0 z-10 w-full h-full shadow-2xl origin-center overflow-hidden bg-slate-200"
                    style={ {
                        // Responsive Clip-Path Logic:
                        // Mobile: Wider (5% inset) | Desktop: Narrower (20% inset)
                        clipPath: "inset(10% 5% 10% 5% round 2rem)",
                        transform: "scale(0.95)",
                    } }
                >
                    {/* 
             ⚡ IMAGE OPTIMIZATION: 
             - fill: covers the container
             - priority: High importance LCP candidate
             - quality: 90 for crisp edges on expansion
          */}
                    <Image
                        src="/certificate_padafand.webp"
                        alt="زیرساخت امن صنعتی بارمان"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        quality={ 90 }
                    />

                    {/* Cinematic Grain Overlay */ }
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none mix-blend-multiply" />
                </div>

            </div>
        </section>
    );
}