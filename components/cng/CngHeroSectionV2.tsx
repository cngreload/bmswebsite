import Link from "next/link";
import React from "react";

export default function CngHeroSectionV2 ()
{
    return (
        <section
            className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 lg:pt-32 pb-20"
            dir="rtl"
        >
            {/* Background glows */ }
            <div className="pointer-events-none absolute -top-32 right-1/3 h-[520px] w-[520px] rounded-full bg-bms-primary/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="grid items-center gap-14 lg:grid-cols-12">

                    {/* ===== Textual Content ===== */ }
                    <div className="lg:col-span-7 text-right space-y-8">

                        {/* Eyebrow / Badge */ }
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-bms-primary shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-bms-primary" />
                            </span>
                            سامانه ملی هوشمندسازی جایگاه‌های CNG
                        </div>

                        {/* Headline */ }
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight tracking-tight text-slate-900">
                                کنترل و پایش هوشمند
                                <br />
                                <span className="bg-gradient-to-l from-bms-primary to-bms-accent bg-clip-text text-transparent">
                                    جایگاه‌های CNG
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 max-w-2xl">
                                سامانه ICTS با یکپارچه‌سازی داده‌های میدانی، پایش لحظه‌ای
                                تجهیزات و ابزارهای تصمیم‌سازی مدیریتی، زیرساختی قابل اتکا
                                برای مدیریت هوشمند انرژی در مقیاس ملی فراهم می‌کند.
                            </p>
                        </div>

                        {/* CTA */ }
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="#system-overview"
                                className="inline-flex items-center justify-center rounded-xl bg-bms-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-bms-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                مشاهده معماری سامانه
                            </Link>

                            <Link
                                href="#story"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                            >
                                گزارش اجرای پایلوت
                            </Link>
                        </div>

                        {/* Hint / Scroll cue */ }
                        <div className="pt-6 text-sm text-slate-500">
                            در ادامه، اجزای سامانه و نقش هر بخش را بررسی کنید ↓
                        </div>
                    </div>

                    {/* ===== Visual / System Card ===== */ }
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-slate-900 to-blue-900 p-8 md:p-10 text-white shadow-2xl">

                            {/* inner glow */ }
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.25),transparent_70%)] opacity-70" />

                            <div className="relative space-y-8 text-right">
                                {/* Header */ }
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                                        <span className="text-sm font-black tracking-widest text-emerald-400">
                                            ICTS
                                        </span>
                                    </div>

                                    <div className="text-left font-mono text-xs text-slate-300" dir="ltr">
                                        STATUS
                                        <div className="mt-1 text-emerald-400">
                                            ONLINE · REAL-TIME
                                        </div>
                                    </div>
                                </div>

                                {/* Title */ }
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                                        Intelligent CNG
                                        <br />
                                        Control System
                                    </h3>
                                    <div className="h-1 w-12 rounded-full bg-emerald-500" />
                                </div>

                                {/* Description */ }
                                <p className="text-sm md:text-[15px] font-light leading-8 text-slate-300 text-justify">
                                    ICTS با اتصال مستقیم تجهیزات جایگاه، سنسورها و مراکز
                                    مدیریتی، امکان <strong className="text-white font-bold">کنترل، پایش و تصمیم‌سازی</strong>
                                    مبتنی بر داده‌های دقیق و بلادرنگ را فراهم می‌کند؛
                                    بدون وابستگی به زیرساخت‌های خارجی.
                                </p>

                                {/* Tags */ }
                                <div
                                    className="flex flex-wrap gap-2 border-t border-white/10 pt-4"
                                    dir="ltr"
                                >
                                    { [
                                        "Real-Time Monitoring",
                                        "Operational Control",
                                        "Secure Infrastructure",
                                        "National Scale",
                                    ].map( ( tag ) => (
                                        <span
                                            key={ tag }
                                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] md:text-xs font-mono text-emerald-300 backdrop-blur-sm"
                                        >
                                            { tag }
                                        </span>
                                    ) ) }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
