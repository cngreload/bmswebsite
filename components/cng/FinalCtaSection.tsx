"use client";

import Link from "next/link";
import
{
    LuCalendarCheck,
    LuDownload,
    LuArrowLeft,
    LuShieldCheck,
} from "react-icons/lu";

export default function FinalCtaSection ()
{
    return (
        <section
            id="final-cta"
            aria-labelledby="cta-heading"
            className="relative py-16 md:py-24"
            dir="rtl"
        >
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 text-white shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]">

                    {/* ===== Background Layers ===== */ }
                    <div className="pointer-events-none absolute inset-0">
                        {/* Gradient Core */ }
                        <div className="absolute inset-0 bg-gradient-to-br from-bms-primary via-[#0B1220] to-[#020617]" />

                        {/* Radial Focus */ }
                        <div className="absolute -top-32 right-1/3 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[140px]" />
                        <div className="absolute -bottom-40 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />

                        {/* Grid Texture */ }
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
                    </div>

                    {/* ===== Content ===== */ }
                    <div className="relative z-10 grid gap-14 p-8 md:p-14 lg:grid-cols-12 lg:gap-10">

                        {/* ---------- LEFT: MESSAGE ---------- */ }
                        <div className="lg:col-span-7 space-y-8 text-right">
                            {/* Trust Badge */ }
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-300 backdrop-blur">
                                <LuShieldCheck className="h-4 w-4" />
                                دعوت رسمی به مشارکت زیرساختی
                            </div>

                            <h2
                                id="cta-heading"
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance"
                            >
                                مشارکت راهبردی برای
                                <br />
                                <span className="bg-gradient-to-l from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                                    آینده‌ای ایمن، شفاف و داده‌محور
                                </span>
                                <br />
                                در صنعت سوخت کشور
                            </h2>

                            <div className="space-y-5 text-sm md:text-base leading-8 text-slate-300">
                                <p>
                                    شرکت{ " " }
                                    <strong className="font-medium text-white">
                                        بارمان‌محور اسپادانا
                                    </strong>{ " " }
                                    آمادگی دارد در قالب همکاری رسمی، طراحی و
                                    استقرار ملی سامانه{ " " }
                                    <strong className="font-medium text-white">
                                        ICTS
                                    </strong>{ " " }
                                    را با نهادهای حاکمیتی، شرکت‌های گاز استانی،
                                    اپراتورهای جایگاه و بازیگران مالی کشور
                                    پیش ببرد.
                                </p>

                                <p>
                                    این مسیر، یک پروژه کوتاه‌مدت نیست؛ بلکه
                                    سرمایه‌گذاری بلندمدت برای{ " " }
                                    <strong className="text-white font-medium">
                                        ایمنی شهروندان
                                    </strong>
                                    ،{ " " }
                                    <strong className="text-white font-medium">
                                        حکمرانی داده
                                    </strong>{ " " }
                                    و{ " " }
                                    <strong className="text-white font-medium">
                                        بهره‌وری ملی
                                    </strong>{ " " }
                                    در یکی از حیاتی‌ترین زیرساخت‌های انرژی کشور
                                    است.
                                </p>
                            </div>
                        </div>

                        {/* ---------- RIGHT: ACTIONS ---------- */ }
                        <div className="lg:col-span-5 flex flex-col justify-center gap-5">

                            {/* Primary CTA */ }
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-between gap-4 rounded-2xl bg-white px-7 py-5 text-sm md:text-base font-bold text-bms-primary shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <div className="flex items-center gap-3">
                                    <LuCalendarCheck className="h-5 w-5" />
                                    <span>درخواست جلسه فنی و مذاکره استقرار</span>
                                </div>
                                <LuArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            </Link>

                            {/* Secondary CTA */ }
                            <Link
                                href="/downloads/icts-intro.pdf"
                                target="_blank"
                                className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-slate-200 backdrop-blur transition-all hover:bg-white/10 hover:text-white"
                            >
                                <div className="flex items-center gap-3">
                                    <LuDownload className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                                    <span>
                                        دانلود مستند فنی و حاکمیتی (PDF)
                                    </span>
                                </div>
                                <LuArrowLeft className="h-4 w-4 opacity-40" />
                            </Link>

                            {/* Hint */ }
                            <div className="pt-2 text-xs text-slate-400 text-center">
                                پاسخ‌گویی رسمی • مستندات کامل • مسیر شفاف استقرار
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
