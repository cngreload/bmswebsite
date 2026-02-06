"use client";

import Link from "next/link";
import Image from "next/image";
import { LuLayers } from "react-icons/lu";

export default function WorldsGrid ()
{
    return (
        <section
            aria-labelledby="domains-heading"
            className="relative w-full h-full"
            dir="rtl"
        >
            <div className="relative h-full min-h-[520px] rounded-[2.75rem] overflow-hidden border border-slate-200 shadow-2xl">

                {/* ================= BACKGROUND IMAGE ================= */ }
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/world-bg.jpg"
                        alt="حوزه‌های تخصصی و میدان‌های عملیاتی بارمان"
                        fill
                        priority
                        className="object-cover object-center scale-105"
                    />

                    <div className="absolute inset-0 bg-slate-900/40" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-bms-accent/30 via-transparent to-indigo-500/25" />
                    <div className="absolute inset-0 backdrop-blur-[1.5px]" />
                </div>

                {/* ================= CONTENT ================= */ }
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">

                    {/* -------- TEXT -------- */ }
                    <div className="space-y-8 text-center max-w-xl">

                        <div className="inline-flex items-center gap-2 bg-white/90 text-bms-primary text-xs font-bold px-3 py-1 rounded-lg border border-blue-100">
                            <LuLayers className="w-4 h-4" />
                            حوزه‌های تخصصی بارمان
                        </div>

                        <h2
                            id="domains-heading"
                            className="text-3xl md:text-4xl font-extrabold leading-tight"
                        >
                            حوزه‌هایی که فناوری
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                                خلق ارزش می‌کند
                            </span>
                        </h2>

                        <p className="text-base md:text-lg leading-8 text-slate-100">
                            بارمان در صنایعی ورود می‌کند که دقت، ایمنی و تصمیم‌سازی بی‌درنگ
                            حیاتی است؛ از زیرساخت‌های انرژی و کنترل صنعتی
                            تا سلامت دیجیتال و سامانه‌های هوشمند.
                        </p>

                        <Link
                            href="/fieldsofactivity"
                            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition"
                        >
                            مشاهده جزئیات کامل
                        </Link>
                    </div>

                    {/* -------- FEATURES -------- */ }
                    <div className="grid grid-cols-2 gap-6 pt-6  mx-auto border-t border-white/20 text-sm">
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
