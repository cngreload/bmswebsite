"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuShieldCheck, LuAward, LuFileBadge, LuBinary } from "react-icons/lu";

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
                    end: "+=250%", // Optimized duration for better flow
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            } );

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
                .to( {}, { duration: 1.5 } )

                // 4. Exit Phase: Fade content and Grayscale the image
                .to( content, {
                    opacity: 0,
                    y: -40,
                    duration: 0.8,
                    ease: "power2.in",
                } )
                .to( imageWrapper, {
                    clipPath: "inset(12% 4% 12% 4% round 3rem)",
                    scale: 0.92,
                    filter: "grayscale(100%) brightness(0.7)",
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
                    className="absolute z-20 w-[94%] max-w-4xl opacity-0 translate-y-12 pointer-events-none"
                >
                    <div className="relative overflow-hidden rounded-[3.5rem] bg-white/85 backdrop-blur-3xl border border-white/50 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] p-8 md:p-16 text-center">

                        {/* HUD Grid Detail */ }
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:32px_32px]" />

                        {/* Badge - Corporate Navy */ }
                        <div ref={ badgeRef } className="flex justify-center mb-8">
                            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl ring-1 ring-white/20">
                                <LuShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
                                <span>استاندارد ملی امنیت صنعتی</span>
                            </span>
                        </div>

                        {/* Headline */ }
                        <h2 ref={ titleRef } className="text-3xl md:text-6xl font-black leading-[1.1] text-slate-950 mb-8 tracking-tightest">
                            تنها دارنده گواهی <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-[#145C98] to-blue-600">
                                پدافند غیرعامل
                            </span>
                        </h2>

                        {/* Description */ }
                        <p ref={ descRef } className="text-base md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                            در مدیریت زیرساخت‌های حیاتی انرژی، امنیت یک ادعا نیست؛ یک الزام قانونی است.
                            ICTS تنها پلتفرم بومی با تاییدیه سطح یک پدافند غیرعامل است.
                        </p>

                        {/* Trust Grid */ }
                        <div ref={ gridRef } className="flex flex-wrap justify-center gap-6 mt-12 border-t border-slate-200/50 pt-12">
                            <div className="flex items-center gap-4 bg-slate-50/50 px-6 py-4 rounded-2xl border border-white shadow-sm">
                                <LuAward className="w-7 h-7 text-[#F4C430]" />
                                <div className="text-right">
                                    <span className="block text-[8px] text-slate-400 font-black uppercase tracking-tighter">Auth_Node</span>
                                    <span className="text-sm font-bold text-slate-900">مجوز سازمان پدافند</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-slate-50/50 px-6 py-4 rounded-2xl border border-white shadow-sm">
                                <LuFileBadge className="w-7 h-7 text-[#145C98]" />
                                <div className="text-right">
                                    <span className="block text-[8px] text-slate-400 font-black uppercase tracking-tighter">Enterprise</span>
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
                        clipPath: "inset(10% 4% 10% 4% round 3rem)",
                        transform: "scale(0.96)",
                    } }
                >
                    <Image
                        src="/certificate_padafand.webp"
                        alt="گواهی پدافند غیرعامل بارمان"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        quality={ 100 }
                    />

                    {/* Cinematic Overlay */ }
                    <div className="absolute inset-0 bg-slate-950/25 pointer-events-none mix-blend-multiply" />
                    <div className="absolute top-10 left-10 opacity-20">
                        <LuBinary className="w-32 h-32 text-white" />
                    </div>
                </div>

            </div>
        </section>
    );
}