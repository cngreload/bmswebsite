"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion, Variants, BezierDefinition } from "framer-motion";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { LuActivity } from "react-icons/lu";

/* -------------------------------------------
 * USP Card – Mathematical Spacing & Hierarchy
 * ----------------------------------------- */
function HeroUSPCard ( { children }: { children: ReactNode; } )
{
    return (
        <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-5 md:p-6 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-bms-primary/50 hover:bg-slate-900/80"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex items-start gap-4">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D72638] shadow-[0_0_12px_rgba(215,38,56,0.6)] group-hover:scale-125 transition-transform duration-300" />
                <p className="text-xs md:text-base leading-relaxed font-medium text-slate-200 opacity-90 group-hover:opacity-100 transition-opacity">
                    { children }
                </p>
            </div>
        </motion.div>
    );
}

export default function HeroSection ()
{
    const customEase: BezierDefinition = [ 0.22, 1, 0.36, 1 ];

    const containerVars: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVars: Variants = {
        initial: { opacity: 0, x: 20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: customEase,
            },
        },
    };

    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A] py-20 lg:py-0"
        >
            {/* ===================== BACKGROUND ===================== */ }
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bgh2.jpg"
                    alt="هوشمندسازی زیرساخت‌های صنعتی بارمان"
                    fill
                    priority
                    quality={ 90 }
                    sizes="100vw"
                    className="object-cover object-center scale-105 opacity-50"
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.15),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full pt-10 lg:pt-32 pb-12 lg:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* LEFT COLUMN */ }
                    <motion.div
                        variants={ containerVars }
                        initial="initial"
                        animate="animate"
                        className="space-y-8 lg:space-y-12 lg:col-span-7"
                    >
                        <motion.div variants={ itemVars } className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 font-mono">
                                Industrial Intelligence Node v4.2
                            </span>
                        </motion.div>

                        <motion.div variants={ itemVars } className="space-y-4">
                            <h1
                                id="hero-heading"
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.2] lg:leading-[1.1] tracking-tightest drop-shadow-2xl"
                            >
                                هوشمندسازی <br />
                                <span className="bg-gradient-to-l from-[#F4C430] via-yellow-100 to-[#10B981] bg-clip-text text-transparent">
                                    دارایی‌های حیاتی
                                </span>
                            </h1>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 lg:pt-12">
                            <HeroUSPCard>تنها تولیدکننده بومی سامانه کنترل و مانیتورینگ جایگاه‌های CNG با پایلوت موفق در سطح ملی</HeroUSPCard>
                            <HeroUSPCard>ترکیب سخت‌افزار، نرم‌افزار و تجربه‌ی میدانی در حوزه‌های حساس انرژی و سلامت دیجیتال</HeroUSPCard>
                            <HeroUSPCard>طراحی‌شده برای تصمیم‌های استراتژیک؛ مبتنی بر داده‌های دقیق، رمزنگاری‌شده و قابل اتکا</HeroUSPCard>
                            <HeroUSPCard>از صنعت ۴.۰ تا سلامت دیجیتال؛ یک هسته‌ی فناوری (WIT)، دو جهانِ بی‌پایان کاربرد</HeroUSPCard>
                        </div>
                    </motion.div>

                    {/* RIGHT WIT CARD */ }
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        animate={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 1, delay: 0.5 } }
                        className="flex justify-center lg:col-span-5 lg:justify-end mt-8 lg:mt-0"
                    >
                        <div className="relative w-full max-w-[320px] sm:max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#020617] via-[#0F172A] to-slate-900 p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                            <div className="relative h-full w-full rounded-[2.2rem] bg-[#020617] p-6 lg:p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#10b981_0%,transparent_50%)] opacity-20" />

                                <div className="relative space-y-8 lg:space-y-12 text-right z-10">

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                                        <span className="text-4xl lg:text-5xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                            WIT
                                        </span>
                                        <p className="mt-2 text-[8px] lg:text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase">
                                            Worldwide Intelligent Technology
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-[#F4C430]">
                                            چشم‌انداز ما
                                        </h3>
                                        <div className="mx-auto mt-3 lg:mt-4 h-1 w-12 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent rounded-full opacity-60" />
                                    </div>

                                    <div className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/40 shadow-inner">
                                        <MaskContainer
                                            revealText={
                                                <div className="flex h-full w-full items-center justify-center bg-slate-950">
                                                    <p className="mx-auto text-center text-2xl lg:text-4xl font-black leading-tight text-white tracking-tight">
                                                        کنترل کامل
                                                        <br />
                                                        <span className="text-[#F4C430] drop-shadow-[0_0_12px_rgba(244,196,48,0.6)]">
                                                            در لحظه
                                                        </span>
                                                    </p>
                                                </div>
                                            }
                                            className="h-48 lg:h-64"
                                        >
                                            <p className="px-4 lg:px-8 my-auto text-xs lg:text-base font-medium text-center leading-6 lg:leading-8 text-slate-300">
                                                ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان مدرن هستیم —
                                                رؤیایی که در آن، کنترل کامل و بی‌درنگ بر دارایی‌ها، از هر جا و در هر لحظه، ممکن است.
                                            </p>
                                        </MaskContainer>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-white/5" dir="ltr">
                                        { [ "Real-Time", "Secure", "Industrial", "Decision AI" ].map( ( tag ) => (
                                            <span
                                                key={ tag }
                                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] lg:text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest"
                                            >
                                                { tag }
                                            </span>
                                        ) ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute bottom-8 right-8 hidden xl:flex items-center gap-4 p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-inner">
                    <LuActivity className="h-6 w-6" />
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Network Status
                    </div>
                    <div className="text-sm font-black text-slate-900">
                        ۹۹.۹٪ پایداری
                    </div>
                </div>
            </div>
        </section>
    );
}