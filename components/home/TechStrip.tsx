"use client";

import Link from "next/link";
import Image from "next/image";
import { LuCpu, LuCode, LuServer } from "react-icons/lu";

export default function TechStrip ()
{
    return (
        <section
            aria-labelledby="tech-stack-heading"
            className="relative w-full h-full"
            dir="rtl"
        >
            <div className="relative h-full min-h-[520px] rounded-[2.75rem] overflow-hidden border border-slate-200 shadow-2xl">

                {/* ================= BACKGROUND IMAGE ================= */ }
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/techstack.png"
                        alt="معماری فنی و زیرساخت نرم‌افزاری بارمان"
                        fill
                        priority
                        className="object-cover object-center scale-105"
                    />

                    <div className="absolute inset-0 bg-slate-900/45" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-bms-primary/30 via-transparent to-indigo-600/25" />
                    <div className="absolute inset-0 backdrop-blur-[1.5px]" />
                </div>

                {/* ================= CONTENT ================= */ }
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">

                    {/* -------- TEXT -------- */ }
                    <div className="space-y-8 text-center max-w-xl">

                        <div className="inline-flex items-center gap-2 bg-white/90 text-bms-primary text-xs font-bold px-3 py-1 rounded-lg border border-blue-100">
                            <LuCpu className="w-4 h-4" />
                            زیرساخت فنی و معماری
                        </div>

                        <h2
                            id="tech-stack-heading"
                            className="text-3xl md:text-4xl font-extrabold leading-tight"
                        >
                            پلتفرم هسته‌ای و
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 to-emerald-500">
                                تکنولوژی‌های بومی
                            </span>
                        </h2>

                        <p className="text-base md:text-lg leading-8 text-slate-100">

                            معماری فنی بارمان از دریافت داده در میدان آغاز می‌شود، در لبه پردازش می‌شود و به‌صورت امن به پلتفرم‌های دیجیتال منتقل می‌گردد. بومی‌سازی کامل سخت‌افزار و نرم‌افزار، وابستگی خارجی و ریسک‌های آن را حذف کرده است.
                        </p>

                        <Link
                            href="/technologies"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition"
                        >
                            بررسی کامل استک فنی
                            <LuCode className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* -------- STABILITY / STATUS (BELOW TEXT) -------- */ }
                    <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white max-w-sm justify-center mx-auto">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
                                <LuServer className="w-5 h-5" />
                            </div>

                            <div className="text-center justify-center">
                                <div className="text-base font-bold">پایداری و انسجام فناوری</div>
                                <div className="text-[11px] font-mono text-slate-200">
                                    High Availability • Secure
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 text-xs font-mono bg-black/30 px-3 py-1 rounded-lg inline-block">
                            v4.2.0 — Production Stable
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
