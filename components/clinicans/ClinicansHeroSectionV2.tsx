"use client";

import Link from "next/link";
import { LuSparkles, LuArrowLeft, LuShieldCheck, LuActivity } from "react-icons/lu";

export default function ClinicansHeroSectionV2 ()
{
    return (
        <section
            id="clinicans-hero"
            className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 md:py-28"
            dir="rtl"
        >
            {/* Background FX */ }
            <div className="pointer-events-none absolute -top-40 right-1/3 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="grid items-center gap-16 lg:grid-cols-12">

                    {/* ================= TEXT ================= */ }
                    <div className="lg:col-span-7 text-right space-y-8">

                        {/* Badge */ }
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
                            <LuSparkles className="h-4 w-4 text-emerald-600" />
                            پلتفرم یکپارچه مدیریت و توانمندسازی سلامت
                        </div>

                        {/* Headline */ }
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-tight">
                                توانمندسازی دیجیتال
                                <br />
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    ارائه‌دهندگان خدمات سلامت
                                </span>
                            </h1>

                            <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-slate-600">
                                <strong className="text-slate-900 font-semibold">کلینیکانز</strong>{ " " }
                                زیرساختی امن و مقیاس‌پذیر برای یکپارچه‌سازی مدیریت بالینی،
                                فرآیندهای اداری، امور مالی و ارتباط با بیمار — از مطب‌های
                                مستقل تا مراکز درمانی بزرگ.
                            </p>
                        </div>

                        {/* Key Signals */ }
                        <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <LuActivity className="h-4 w-4 text-emerald-600" />
                                پایش و مدیریت یکپارچه
                            </div>
                            <div className="flex items-center gap-2">
                                <LuShieldCheck className="h-4 w-4 text-emerald-600" />
                                امنیت و محرمانگی داده‌های سلامت
                            </div>
                        </div>

                        {/* Actions */ }
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link
                                href="#features"
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-600/35"
                            >
                                مشاهده قابلیت‌ها
                                <LuArrowLeft className="mr-2 h-4 w-4" />
                            </Link>

                            <Link
                                href="#pricing"
                                className="inline-flex h-14 items-center justify-center rounded-2xl border border-emerald-600 bg-white px-8 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-50"
                            >
                                شروع استفاده
                            </Link>
                        </div>

                        {/* Scroll Hint */ }
                        <div className="pt-6 text-sm text-slate-500">
                            در ادامه، معماری پلتفرم و نقش هر بخش را ببینید ↓
                        </div>
                    </div>

                    {/* ================= VISUAL CARD ================= */ }
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-10 shadow-2xl">

                            {/* Accent */ }
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)]" />

                            <div className="relative space-y-8 text-right">

                                {/* Header */ }
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 font-black tracking-wider">
                                        CLX
                                    </div>

                                    <div className="text-left text-xs font-mono text-slate-500" dir="ltr">
                                        PLATFORM STATUS
                                        <div className="mt-1 text-emerald-600 font-semibold">
                                            ACTIVE · SECURE
                                        </div>
                                    </div>
                                </div>

                                {/* Title */ }
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                        Clinicans Platform
                                    </h3>
                                    <div className="h-1 w-12 rounded-full bg-emerald-500" />
                                </div>

                                {/* Description */ }
                                <p className="text-sm md:text-[15px] leading-8 text-slate-600 text-justify font-light">
                                    کلینیکانز با طراحی ماژولار و مبتنی بر داده، به مراکز درمانی
                                    کمک می‌کند تا <strong className="text-slate-900 font-semibold">کنترل،
                                        شفافیت و بهره‌وری</strong> را هم‌زمان افزایش دهند؛
                                    بدون پیچیدگی‌های ابزارهای جزیره‌ای.
                                </p>

                                {/* Tags */ }
                                <div
                                    className="flex flex-wrap gap-2 border-t border-slate-100 pt-4"
                                    dir="ltr"
                                >
                                    { [
                                        "Clinical Management",
                                        "Financial Automation",
                                        "Patient Engagement",
                                        "Secure by Design",
                                    ].map( ( tag ) => (
                                        <span
                                            key={ tag }
                                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] md:text-xs font-mono text-emerald-700"
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
