"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuLayers } from "react-icons/lu";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

export default function WorldsGrid ()
{
    const rootRef = useRef<HTMLDivElement>( null );
    const bgRef = useRef<HTMLDivElement>( null );
    const contentRef = useRef<HTMLDivElement>( null );
    const featuresRef = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        if ( !rootRef.current ) return;

        const ctx = gsap.context( () =>
        {
            const prefersReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if ( prefersReduced ) return;

            // Background depth
            gsap.fromTo(
                bgRef.current,
                { scale: 1.12, opacity: 0.6 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: rootRef.current,
                        start: "top 85%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                }
            );

            // Main content (opposite zigzag direction)
            gsap.from( contentRef.current, {
                xPercent: -12,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 80%",
                },
            } );

            // Feature list stagger
            gsap.from( featuresRef.current?.children || [], {
                y: 24,
                opacity: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 70%",
                },
            } );
        }, rootRef );

        return () => ctx.revert();
    }, [] );

    return (
        <section
            aria-labelledby="domains-heading"
            className="relative w-full h-full"
            dir="rtl"
            ref={ rootRef }
        >
            <div
                className="
          relative h-full min-h-[540px]
          rounded-[2.5rem] md:rounded-[2.75rem]
          overflow-hidden
          border border-slate-200/20
          shadow-[0_40px_90px_-35px_rgba(15,23,42,0.6)]
        "
            >
                {/* ================= BACKGROUND ================= */ }
                <div ref={ bgRef } className="absolute inset-0 z-0">
                    <Image
                        src="/world-bg.jpg"
                        alt="حوزه‌های تخصصی و میدان‌های عملیاتی بارمان"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-slate-900/45" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-bms-accent/30 via-transparent to-indigo-500/25" />
                    <div className="absolute inset-0 backdrop-blur-[1.5px]" />
                </div>

                {/* ================= CONTENT ================= */ }
                <div
                    ref={ contentRef }
                    className="
            relative z-10
            h-full
            flex flex-col justify-between
            px-8 py-10
            md:px-12 md:py-14
            text-white
          "
                >
                    {/* Text block */ }
                    <div className="space-y-8 text-center max-w-xl mx-auto">
                        {/* Badge */ }
                        <motion.div
                            whileHover={ { y: -2 } }
                            transition={ { type: "spring", stiffness: 200, damping: 15 } }
                            className="
                inline-flex items-center gap-2
                bg-white/90
                text-bms-primary
                text-xs font-bold
                px-4 py-1.5
                rounded-xl
                border border-blue-100
              "
                        >
                            <LuLayers className="w-4 h-4" />
                            حوزه‌های تخصصی بارمان
                        </motion.div>

                        <h2
                            id="domains-heading"
                            className="
                text-[2.1rem] md:text-[2.4rem]
                font-extrabold
                leading-[1.25]
                tracking-tight
              "
                        >
                            حوزه‌هایی که فناوری
                            <br />
                            <span className="bg-gradient-to-l from-bms-primary to-bms-accent bg-clip-text text-transparent">
                                خلق ارزش می‌کند
                            </span>
                        </h2>

                        <p className="text-[15px] md:text-[17px] leading-relaxed text-slate-100">
                            بارمان در صنایعی ورود می‌کند که دقت، ایمنی و تصمیم‌سازی بی‌درنگ
                            حیاتی است؛ از زیرساخت‌های انرژی و کنترل صنعتی
                            تا سلامت دیجیتال و سامانه‌های هوشمند.
                        </p>

                        {/* CTA */ }
                        <motion.div whileTap={ { scale: 0.97 } }>
                            <Link
                                href="/fieldsofactivity"
                                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-white
                  px-8 py-3
                  text-sm font-bold
                  text-slate-900
                  shadow-lg
                  transition
                  hover:bg-slate-100
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-bms-accent focus-visible:ring-offset-2
                "
                            >
                                مشاهده جزئیات کامل
                            </Link>
                        </motion.div>
                    </div>

                    {/* Features */ }
                    <div
                        ref={ featuresRef }
                        className="
              grid grid-cols-2 gap-6
              pt-6 mt-6
              mx-auto
              max-w-md
              border-t border-white/20
              text-sm
            "
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            اتوماسیون صنعتی
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            اینترنت اشیاء (IoT)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500" />
                            هوش تجاری (BI)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            سلامت دیجیتال
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
