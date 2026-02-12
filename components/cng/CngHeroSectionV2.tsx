"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { LuActivity, LuShieldCheck, LuArrowLeft, LuZap } from "react-icons/lu";

/**
 * 🏢 CNG HERO SECTION V2 - CORPORATE REFORMATION
 * Design Logic: High-Key White Surface with a "High-Tech Navy" Focal Point.
 */

export default function CngHeroSectionV2 ()
{
    return (
        <section
            dir="rtl"
            className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-40"
        >
            {/* ===================== BACKGROUND ARCHITECTURE ===================== */ }
            <div className="absolute inset-0 z-0">
                {/* Optical Haze - Soft Blue/Yellow mix for intelligence feel */ }
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.03),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(244,196,48,0.02),transparent_50%)]" />

                {/* Technical Grid Pattern - Light Edition */ }
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:48px_48px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-center gap-16 lg:grid-cols-12 xl:gap-24">

                    {/* ===================== TEXTUAL COMMAND (RIGHT) ===================== */ }
                    <div className="lg:col-span-7 space-y-10 text-right">

                        {/* National Status Badge - Utilizing Red for Importance */ }
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-bold text-slate-600 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D72638] opacity-40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D72638]" />
                            </span>
                            سامانه ملی هوشمندسازی و پایش دیسپنسرهای CNG
                        </motion.div>

                        {/* Authority Headline */ }
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tightest text-slate-900">
                                کنترل و پایش <br />
                                <span className="text-bms-primary">هوشمند دیسپنسرها</span>
                            </h1>
                            {/* Industrial Red Accent Line */ }
                            <div className="h-1.5 w-24 bg-[#D72638] rounded-full shadow-[0_0_15px_rgba(215,38,56,0.2)]" />
                        </div>

                        {/* Strategic Description */ }
                        <div className="max-w-2xl space-y-6">
                            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                یکپارچه‌سازی فرآیندهای عملیاتی در مقیاس ملی.
                            </p>
                            <p className="text-base md:text-lg text-slate-500 leading-corp-relaxed font-light text-justify">
                                سامانه <strong className="text-slate-900 font-bold">ICTS</strong> با اتصال مستقیم به تجهیزات جایگاه،
                                داده‌های میدانی را به ابزارهای تصمیم‌سازی مدیریتی تبدیل می‌کند.
                                زیرساختی بومی و امن برای مدیریت ناترازی انرژی و پایش دقیق شبکه توزیع سوخت.
                            </p>
                        </div>

                        {/* Actions */ }
                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Link
                                href="#system-overview"
                                className="btn-premium px-10 py-4 shadow-2xl shadow-bms-primary/20"
                            >
                                <span>بررسی معماری سامانه</span>
                                <LuArrowLeft className="mr-2 h-4 w-4" />
                            </Link>

                            <Link
                                href="#story"
                                className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-bms-primary active:scale-95"
                            >
                                گزارش اجرای پایلوت
                            </Link>
                        </div>

                        {/* Technical HUD Signals - Mobile friendly stack */ }
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-3">
                                <LuShieldCheck className="h-5 w-5 text-emerald-500" />
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Defense_Certified</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <LuActivity className="h-5 w-5 text-bms-primary" />
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">RealTime_Metrics</span>
                            </div>
                        </div>
                    </div>

                    {/* ===================== SYSTEM UNIT CARD (LEFT) ===================== */ }
                    <div className="lg:col-span-5 relative">
                        {/* Decorative Floating Circles (preserves the original spirit but cleaner) */ }
                        <div className="absolute inset-0 -m-12 rounded-full border border-bms-primary/5 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-0 -m-6 rounded-full border border-[#F4C430]/10 animate-[spin_25s_linear_infinite_reverse]" />

                        <div className="relative overflow-hidden rounded-[3rem] p-[1px] bg-gradient-to-b from-slate-200 to-transparent shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)]">

                            <div className="relative rounded-[2.95rem] bg-[#020617] p-8 md:p-12 overflow-hidden">

                                {/* Machined Surface Effects */ }
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,92,152,0.15),transparent_50%)]" />
                                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

                                <div className="relative z-10 space-y-10 text-right">

                                    {/* Card Header */ }
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
                                            <span className="text-2xl font-black text-emerald-400 tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">ICTS</span>
                                        </div>

                                        <div className="text-left font-mono text-[9px] text-slate-500 uppercase tracking-[0.2em] leading-tight" dir="ltr">
                                            CORE_STABILITY<br />
                                            <span className="text-emerald-500 font-bold">OPTIMAL</span>
                                        </div>
                                    </div>

                                    {/* Title Area */ }
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                                            Intelligent Control
                                            <br />
                                            <span className="text-[#F4C430]">Energy Backbone</span>
                                        </h3>
                                        <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                                    </div>

                                    {/* Mechanical Logic Description */ }
                                    <p className="text-[14px] leading-8 text-slate-400 text-justify font-light">
                                        هسته‌ی پردازشی <strong className="text-white">ICTS</strong> با معماری
                                        <span className="text-emerald-400 mx-1">Edge Computing</span>
                                        پایداری عملیات را حتی در زمان قطع شبکه‌ی سراسری تضمین کرده و امنیت داده‌ها را در بالاترین سطح استاندارد صنعتی حفظ می‌کند.
                                    </p>

                                    {/* Data Matrix Grid */ }
                                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5" dir="ltr">
                                        { [
                                            { l: "Up-Time", v: "99.9%" },
                                            { l: "Security", v: "AES-256" },
                                            { l: "Latency", v: "<15ms" },
                                            { l: "Protocol", v: "MODBUS" },
                                        ].map( ( item ) => (
                                            <div key={ item.l } className="flex flex-col p-2 rounded-lg bg-white/[0.02] border border-white/5">
                                                <span className="text-[8px] text-slate-500 uppercase tracking-widest">{ item.l }</span>
                                                <span className="text-xs font-bold text-slate-300">{ item.v }</span>
                                            </div>
                                        ) ) }
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Floating Live Signal - Unique Tablet/Mobile Detail */ }
                        <div className="absolute -bottom-8 -right-8 hidden md:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-corp-lift border border-slate-100 animate-fade-in-up">
                            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                                <LuZap className="h-6 w-6" />
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">System Health</div>
                                <div className="text-sm font-black text-slate-900">عملیاتی • بلادرنگ</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}