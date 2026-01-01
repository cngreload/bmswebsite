// components/cng/CngHeroSection.tsx
import Link from "next/link";
import CngPilotVideo from "../home/CngPilotVideo";
import { LuDownload, LuCalendarCheck, LuCheckCheck } from "react-icons/lu";

export default function CngHeroSection ()
{
    return (
        <section
            id="cng-hero"
            className="relative py-8 md:py-12 lg:py-16 overflow-hidden"
            aria-labelledby="cng-hero-heading"
        >
            {/* 
        🎨 UX: Subtle Technical Background Pattern
        Adds depth without LCP penalty (CSS only).
      */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 px-4">

                {/* 
          📝 CONTENT (Right in RTL) 
          LCP Priority: Text renders immediately.
        */}
                <div className="md:col-span-7 space-y-6 text-right">
                    {/* Trust Badge */ }
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-bold text-bms-primary shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-bms-primary"></span>
                        </span>
                        سامانه بومی هوشمندسازی (ICTS)
                    </div>

                    {/* H1: Optimized for "text-balance" in Persian */ }
                    <h1
                        id="cng-hero-heading"
                        className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-bms-dark text-balance"
                    >
                        استاندارد جدید <span className="text-bms-primary">پایش و کنترل</span> <br />
                        جایگاه‌های سوخت CNG
                    </h1>

                    <p className="text-sm md:text-base text-slate-700 leading-8 max-w-2xl text-justify">
                        <span className="font-semibold text-slate-900">سامانه ICTS</span> (Intelligent CNG Tracking System)؛
                        راهکار جامع سخت‌افزاری و نرم‌افزاری برای نظارت لحظه‌ای، ارتقای ایمنی خودروهای گازسوز و مدیریت شفاف داده در شبکه انرژی کشور.
                        مورد تأیید مراجع تخصصی و اجرا شده در مقیاس ملی.
                    </p>

                    {/* Trust Signals / Features List */ }
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-slate-600">
                        <li className="flex items-center gap-1.5">
                            <LuCheckCheck className="h-4 w-4 text-emerald-500" />
                            <span>پایش لحظه‌ای (Real-time)</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <LuCheckCheck className="h-4 w-4 text-emerald-500" />
                            <span>تطبیق با سیمفا</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <LuCheckCheck className="h-4 w-4 text-emerald-500" />
                            <span>سخت‌افزار صنعتی</span>
                        </li>
                    </ul>

                    {/* Action Area */ }
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bms-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-bms-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-bms-dark"
                        >
                            <LuCalendarCheck className="h-4 w-4" />
                            درخواست جلسه فنی و دمو
                        </Link>
                        <Link
                            href="/downloads/icts-intro.pdf"
                            target="_blank" // UX: Open PDFs in new tab
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                        >
                            <LuDownload className="h-4 w-4 text-slate-500" />
                            دانلود کاتالوگ فنی (PDF)
                        </Link>
                    </div>
                </div>

                {/* 
          🎥 MEDIA (Left)
          Visual Anchor: Styled to look like a "Control Monitor" to fit the theme.
        */}
                <div className="md:col-span-5 relative mt-8 md:mt-0">
                    <div className="relative rounded-2xl bg-slate-900 p-1.5 ring-1 ring-slate-900/5 shadow-2xl">
                        {/* Screen Glare/Reflection Effect */ }
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

                        <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-video">
                            <CngPilotVideo
                                src="/CNG_Station_Automation.mp4"
                                ariaLabel="ویدیو مستند اجرای پایلوت سامانه هوشمند در جایگاه‌های CNG"
                                poster="/images/cng-poster.jpg" // 🧠 LCP: Always use a poster!
                            />
                        </div>

                        {/* Label */ }
                        <div className="absolute -bottom-12 right-4 left-4 text-center">
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                                <span className="block font-semibold text-slate-700 mb-1">گزارش مستند</span>
                                اجرای موفق پایلوت در جایگاه‌های منتخب شرکت ملی پخش فرآورده‌های نفتی
                            </p>
                        </div>
                    </div>

                    {/* Decorative Backdrop */ }
                    <div className="absolute -inset-4 bg-gradient-to-tr from-bms-primary/20 to-emerald-500/20 blur-2xl -z-10 rounded-[3rem] opacity-70" />
                </div>
            </div>
        </section>
    );
}