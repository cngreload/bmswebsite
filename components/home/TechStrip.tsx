"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuCode, LuServer, LuZap } from "react-icons/lu";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger );

export default function TechStrip ()
{
    const rootRef = useRef<HTMLDivElement>( null );
    const contentRef = useRef<HTMLDivElement>( null );
    const bgRef = useRef<HTMLDivElement>( null );
    const statusRef = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        if ( !rootRef.current ) return;

        const ctx = gsap.context( () =>
        {
            const prefersReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if ( prefersReduced ) return;

            // Background parallax
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

            // Main content (zigzag-aware directional reveal)
            gsap.from( contentRef.current, {
                xPercent: 12, // from zigzag edge
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top 80%",
                },
            } );

            // Status card (powered-on feel)
            gsap.from( statusRef.current, {
                y: 40,
                opacity: 0,
                filter: "blur(6px)",
                duration: 0.9,
                delay: 0.2,
                ease: "power3.out",
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
            aria-labelledby="tech-stack-heading"
            className="relative w-full h-full"
            dir="rtl"
            ref={ rootRef }
        >
            <div className="relative h-full min-h-[540px] overflow-hidden border border-slate-200/20 shadow-[0_40px_90px_-35px_rgba(15,23,42,0.6)]">
                {/* ================= BACKGROUND ================= */ }
                <div ref={ bgRef } className="absolute inset-0 z-0">
                    <Image
                        src="/techstack.png"
                        alt="معماری فنی و زیرساخت نرم‌افزاری بارمان"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/65 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent" />
                    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(15,23,42,0.92)_100%)]" />
                </div>

                {/* ================= CONTENT ================= */ }
                <div
                    ref={ contentRef }
                    className="relative z-10 h-full flex flex-col justify-between px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16 text-white"
                >
                    {/* Top block */ }
                    <div className="space-y-8 text-center">
                        {/* Badge */ }
                        <motion.div
                            whileHover={ { y: -2 } }
                            transition={ { type: "spring", stiffness: 200, damping: 15 } }
                            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-lg border border-white/20 text-amber-300 text-xs font-bold px-5 py-2 rounded-2xl shadow-inner"
                        >
                            <LuZap className="w-5 h-5" />
                            زیرساخت فنی بومی
                        </motion.div>

                        <h2
                            id="tech-stack-heading"
                            className="text-[2.25rem] md:text-[2.75rem] font-black leading-[1.15] tracking-[-0.015em]"
                        >
                            پلتفرم هسته‌ای
                            <br />
                            <span className="bg-gradient-to-l from-emerald-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
                                تکنولوژی‌های بومی
                            </span>
                        </h2>

                        <p className="max-w-lg mx-auto text-[15px] md:text-[17px] leading-relaxed text-slate-200 font-light">
                            از میدان تا ابر، همه چیز بومی، امن و لحظه‌ای. معماری‌ای که وابستگی
                            خارجی را حذف کرده و پایداری ملی را تضمین می‌کند.
                        </p>

                        {/* CTA */ }
                        <motion.div whileTap={ { scale: 0.97 } }>
                            <Link
                                href="/technologies"
                                className="group inline-flex items-center gap-3 rounded-2xl bg-white text-slate-900 font-semibold px-8 py-4 text-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                کاوش کامل استک فنی
                                <motion.span
                                    className="inline-flex"
                                    whileHover={ { rotate: 12 } }
                                    transition={ { type: "spring", stiffness: 300 } }
                                >
                                    <LuCode className="w-4 h-4" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Status card */ }
                    <motion.div
                        ref={ statusRef }
                        whileHover={ { y: -4 } }
                        transition={ { type: "spring", stiffness: 180, damping: 18 } }
                        className="mx-auto w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-inner"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/30">
                                <LuServer className="w-6 h-6 text-slate-900" />
                            </div>

                            <div className="text-left">
                                <div className="text-lg font-bold tracking-tight">
                                    پایداری ۴۹۹ روزه
                                </div>
                                <div className="text-[11px] font-mono text-emerald-300 tracking-[2px] uppercase">
                                    HIGH AVAILABILITY • ZERO DOWNTIME
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <div className="mt-4 text-center text-[13px] font-mono text-slate-300">
                            v4.2.0 — Production Stable
                        </div>
                    </motion.div>
                </div>

                {/* Zigzag energy edge */ }
                <div
                    aria-hidden="true"
                    className="absolute right-0 top-1/3 h-52 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-40 blur-sm"
                />
            </div>
        </section>
    );
}
