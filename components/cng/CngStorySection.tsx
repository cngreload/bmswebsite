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

export default function CngStorySection ()
{
    const containerRef = useRef<HTMLElement>( null );
    const imageWrapperRef = useRef<HTMLDivElement>( null );
    const contentRef = useRef<HTMLDivElement>( null );

    // Refs for staggered internal animations
    const badgeRef = useRef<HTMLDivElement>( null );
    const titleRef = useRef<HTMLHeadingElement>( null );
    const descRef = useRef<HTMLParagraphElement>( null );
    const gridRef = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        const container = containerRef.current;
        const imageWrapper = imageWrapperRef.current;
        const content = contentRef.current;

        if ( !container || !imageWrapper || !content ) return;

        // ⚡ PERFORMANCE: Hinting browser for heavy transforms
        gsap.set( imageWrapper, { willChange: "clip-path, transform" } );
        gsap.set( content, { willChange: "opacity, transform" } );

        const ctx = gsap.context( () =>
        {
            const tl = gsap.timeline( {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=300%", // Cinematic long-scroll
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                },
            } );

            // --- THE SEQUENCE ---

            // 1. Reveal Phase: Expand image from card-inset to full-screen
            tl.to( imageWrapper, {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                scale: 1,
                duration: 2,
                ease: "power3.inOut",
            } )

                // 2. Entrance Phase: Staggered reveal of the Glass Card
                .to( content, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.5" )

                .from( [ badgeRef.current, titleRef.current, descRef.current, gridRef.current ], {
                    y: 24,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.4)",
                }, "<" )

                // 3. The Sustained Hold (Reading Time)
                .to( {}, { duration: 2 } )

                // 4. Exit Phase: Fade content and Grayscale the image
                .to( content, {
                    opacity: 0,
                    y: -40,
                    duration: 0.8,
                    ease: "power2.in",
                } )
                .to( imageWrapper, {
                    clipPath: "inset(15% 5% 15% 5% round 3rem)",
                    scale: 0.9,
                    filter: "grayscale(100%) brightness(0.6)",
                    duration: 2,
                    ease: "power3.inOut",
                }, "<+=0.1" );

        }, containerRef );

        return () => ctx.revert();
    }, [] );

    return (
        <section
            ref={ containerRef }
            className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden"
            aria-label="داستان امنیت و پدافند غیرعامل بارمان"
            dir="rtl"
        >
            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* ================= 1. THE GLASS CARD (Floating UI) ================= */ }
                <div
                    ref={ contentRef }
                    className="absolute z-20 w-[92%] max-w-4xl opacity-0 translate-y-12 pointer-events-none"
                >
                    <div className="relative overflow-hidden rounded-[3rem] bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-8 md:p-14 text-center">

                        {/* Subtle Noise Texture for Glass Look */ }
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.webp')] bg-repeat" />

                        {/* Badge - Corporate Dark Blue */ }
                        <div ref={ badgeRef } className="flex justify-center mb-8">
                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest shadow-xl ring-1 ring-white/20">
                                <LuShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span>استاندارد ملی امنیت</span>
                            </span>
                        </div>

                        {/* Headline - Typographic Authority */ }
                        <h2 ref={ titleRef } className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-slate-950 mb-8 tracking-tightest">
                            تنها دارنده گواهی <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] to-blue-600">
                                پدافند غیرعامل
                            </span>
                        </h2>

                        {/* Description */ }
                        <p ref={ descRef } className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                            در زیرساخت‌های حیاتی کشور، اعتماد بر پایه شواهد بنا می‌شود.
                            سامانه ICTS تنها پلتفرم بومی است که موفق به اخذ بالاترین تاییدیه امنیتی شده است.
                        </p>

                        {/* Trust Grid - Red and Yellow Accents */ }
                        <div ref={ gridRef } className="flex flex-wrap justify-center gap-5 mt-10 border-t border-slate-200/50 pt-10">
                            <div className="flex items-center gap-4 bg-white/60 px-6 py-4 rounded-2xl border border-white shadow-sm transition-all hover:scale-105">
                                <div className="bg-amber-50 p-3 rounded-xl text-[#F4C430]">
                                    <LuAward className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-[9px] text-slate-400 font-black uppercase tracking-tighter">Accreditation</span>
                                    <span className="text-sm font-bold text-slate-900">مجوز سازمان پدافند</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/60 px-6 py-4 rounded-2xl border border-white shadow-sm transition-all hover:scale-105">
                                <div className="bg-blue-50 p-3 rounded-xl text-[#145C98]">
                                    <LuFileBadge className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <span className="block text-[9px] text-slate-400 font-black uppercase tracking-tighter">Status</span>
                                    <span className="text-sm font-bold text-slate-900">تاییدیه دانش‌بنیان</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= 2. THE VISUAL (Cinematic Image) ================= */ }
                <div
                    ref={ imageWrapperRef }
                    className="absolute inset-0 z-10 w-full h-full shadow-2xl origin-center overflow-hidden bg-slate-100"
                    style={ {
                        clipPath: "inset(10% 5% 10% 5% round 3rem)",
                        transform: "scale(0.95)",
                    } }
                >
                    <Image
                        src="/certificate_padafand.webp"
                        alt="زیرساخت امن صنعتی بارمان محور اسپادانا"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        quality={ 100 }
                    />

                    {/* Cinematic Overlay */ }
                    <div className="absolute inset-0 bg-slate-950/20 pointer-events-none mix-blend-multiply" />
                </div>

            </div>
        </section>
    );
}