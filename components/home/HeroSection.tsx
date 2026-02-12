"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
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
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-bms-primary/50 hover:bg-slate-900/80"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex items-start gap-4">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D72638] shadow-[0_0_12px_rgba(215,38,56,0.6)] group-hover:scale-125 transition-transform duration-300" />
                <p className="text-sm md:text-base leading-corp-relaxed font-medium text-slate-200 opacity-90 group-hover:opacity-100 transition-opacity">
                    { children }
                </p>
            </div>
        </motion.div>
    );
}

/* -------------------------------------------
 * HERO SECTION – The Reformation
 * ----------------------------------------- */
export default function HeroSection ()
{
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
                ease: [ 0.22, 1, 0.36, 1 ] as [ number, number, number, number ],
            },
        },
    };

    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]"
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
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.15),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-32 pb-24">
                <div className="grid min-h-[70vh] items-center gap-16 lg:grid-cols-12 xl:gap-24">

                    {/* LEFT COLUMN */ }
                    <motion.div
                        variants={ containerVars }
                        initial="initial"
                        animate="animate"
                        className="space-y-12 lg:col-span-7"
                    >
                        <motion.div variants={ itemVars } className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 font-mono">
                                Industrial Intelligence Node v4.2
                            </span>
                        </motion.div>

                        <motion.div variants={ itemVars } className="space-y-4">
                            <h1
                                id="hero-heading"
                                className="text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white leading-[1.1] tracking-tightest drop-shadow-2xl"
                            >
                                هوشمندسازی <br />
                                <span className="bg-gradient-to-l from-[#F4C430] via-yellow-100 to-[#10B981] bg-clip-text text-transparent">
                                    دارایی‌های حیاتی
                                </span>
                            </h1>
                        </motion.div>

                        <div className="grid gap-4 pt-12 sm:grid-cols-2">
                            <HeroUSPCard>تنها تولیدکننده بومی سامانه کنترل و مانیتورینگ جایگاه‌های CNG با پایلوت موفق در سطح ملی</HeroUSPCard>
                            <HeroUSPCard>ترکیب سخت‌افزار، نرم‌افزار و تجربه‌ی میدانی در حوزه‌های حساس انرژی و سلامت دیجیتال</HeroUSPCard>
                            <HeroUSPCard>طراحی‌شده برای تصمیم‌های استراتژیک؛ مبتنی بر داده‌های دقیق، رمزنگاری‌شده و قابل اتکا</HeroUSPCard>
                            <HeroUSPCard>از صنعت ۴.۰ تا سلامت دیجیتال؛ یک هسته‌ی فناوری (WIT)، دو جهانِ بی‌پایان کاربرد</HeroUSPCard>
                        </div>
                    </motion.div>

                    {/* RIGHT WIT CARD — ORIGINAL RESTORED */ }
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        animate={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 1, delay: 0.5 } }
                        className="flex justify-center lg:col-span-5 lg:justify-end"
                    >
                        <div className="relative w-full max-w-lg overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#020617] via-[#0F172A] to-slate-900 p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                            <div className="relative h-full w-full rounded-[2.7rem] bg-[#020617] p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#10b981_0%,transparent_50%)] opacity-20" />

                                <div className="relative space-y-12 text-right z-10">

                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <span className="text-5xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                            WIT
                                        </span>
                                        <p className="mt-2 text-[10px] font-mono font-bold text-slate-500 tracking-[0.3em] uppercase">
                                            Worldwide Intelligent Technology
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold tracking-tight text-[#F4C430]">
                                            چشم‌انداز ما
                                        </h3>
                                        <div className="mx-auto mt-4 h-1 w-12 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent rounded-full opacity-60" />
                                    </div>

                                    <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900/40 shadow-inner">
                                        <MaskContainer
                                            revealText={
                                                <div className="flex h-full w-full items-center justify-center bg-slate-950">
                                                    <p className="mx-auto text-center text-4xl font-black leading-tight text-white tracking-tight">
                                                        کنترل کامل
                                                        <br />
                                                        <span className="text-[#F4C430] drop-shadow-[0_0_12px_rgba(244,196,48,0.6)]">
                                                            در لحظه
                                                        </span>
                                                    </p>
                                                </div>
                                            }
                                            className="h-64"
                                        >
                                            <p className="px-8 my-auto text-sm md:text-base font-medium text-center leading-8 text-slate-300">
                                                ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان مدرن هستیم —
                                                رؤیایی که در آن، کنترل کامل و بی‌درنگ بر دارایی‌ها، از هر جا و در هر لحظه، ممکن است.
                                            </p>
                                        </MaskContainer>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-white/5" dir="ltr">
                                        { [ "Real-Time", "Secure", "Industrial", "Decision AI" ].map( ( tag ) => (
                                            <span
                                                key={ tag }
                                                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest"
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

            <div className="absolute bottom-12 right-12 hidden xl:flex items-center gap-4 p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
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
