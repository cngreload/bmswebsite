"use client";

import Link from "next/link";

import { ClinicansFeaturesGrid } from "./ColumnGrid";
// 🧠 SEMANTIC MODULE DEFINITIONS — OPERATIONAL ECOSYSTEM

export default function ClinicansHeroSection ()
{
    return (
        <div className="space-y-14">
            {/* ================= HERO ================= */ }
            <section
                id="clinicans-hero"
                className="pt-8 text-center"
                aria-labelledby="clinicans-hero-heading"
            >
                <div className="mx-auto w-full max-w-4xl space-y-6 px-4">
                    {/* Badge */ }
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700">
                            اکوسیستم دیجیتال سلامت و زیبایی
                        </span>
                    </div>

                    {/* H1 */ }
                    <h1
                        id="clinicans-hero-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight"
                    >
                        اکوسیستم <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            کلینیک‌های مدرن ایران
                        </span>
                    </h1>

                    {/* Authority / Philosophy */ }
                    <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
                        <strong className="text-slate-900 font-semibold">Clinicans</strong>{ " " }
                        نخستین پلتفرم دوجانبه تخصصی حوزه سلامت و زیبایی ایران است که
                        <strong className="text-slate-900"> کلینیک‌ها، مراجعین و سفیران </strong>
                        را در یک چرخه همکاری برد–برد به هم متصل می‌کند؛
                        جایی که مدیریت حرفه‌ای، تجربه بهتر درمان و رشد پایدار کسب‌وکار
                        هم‌زمان محقق می‌شود.
                    </p>

                    {/* Ecosystem Value Signals */ }
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                        { [
                            "جذب مراجع بدون هزینه تبلیغات",
                            "بهبود تجربه مراجعان",
                            "باشگاه مراجعان و سفیران",
                            "مدیریت یکپارچه کلینیک",
                            "اکوسیستم داده‌محور سلامت",
                        ].map( ( item ) => (
                            <span
                                key={ item }
                                className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                            >
                                { item }
                            </span>
                        ) ) }
                    </div>
                    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
                        <ClinicansFeaturesGrid />
                    </section>

                    {/* Actions */ }
                    <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
                        <Link
                            href="/contact-us"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700"
                        >
                            شروع همکاری با Clinicans
                        </Link>

                        <a
                            href="https://clinicans.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-600 bg-white px-8 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-50"
                            aria-label="ورود مستقیم به اکوسیستم Clinicans"
                        >
                            ورود به پلتفرم Clinicans
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= MODULES GRID =================
                        */ }
        </div>
    );
}
/*
const modules = [
    { title: "نوبت‌دهی", icon: LuCalendarCheck, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "پرونده الکترونیک", icon: LuFileText, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "پذیرش و صف", icon: LuUsers, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "پیامک و یادآوری", icon: LuMessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "مالی و تسویه‌حساب", icon: LuWallet, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "گزارش و تحلیل", icon: LuChartBar, color: "text-cyan-600", bg: "bg-cyan-50" },
    { title: "ویزیت پزشک", icon: LuStethoscope, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "انبار و اقلام", icon: LuBox, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "جذب و ارتباط", icon: LuMegaphone, color: "text-pink-600", bg: "bg-pink-50" },
    { title: "باشگاه مراجعان و سفیران", icon: LuHeartHandshake, color: "text-red-600", bg: "bg-red-50" },
    { title: "سطوح دسترسی", icon: LuShieldCheck, color: "text-slate-600", bg: "bg-slate-50" },
    { title: "یکپارچه‌سازی فرآیندها", icon: LuWorkflow, color: "text-teal-600", bg: "bg-teal-50" },
    { title: "مدیریت اسناد", icon: LuFiles, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "چت داخلی", icon: LuMessageCircle, color: "text-green-600", bg: "bg-green-50" },
    { title: "فرم‌ساز", icon: LuFileInput, color: "text-violet-600", bg: "bg-violet-50" },
    { title: "داشبورد مدیریتی", icon: LuLayoutDashboard, color: "text-slate-800", bg: "bg-slate-100" },
];

<section
className="relative overflow-hidden rounded-[3rem] bg-slate-50 py-12 md:py-16"
aria-label="قابلیت‌ها و اجزای اکوسیستم Clinicans"
>
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

<div className="relative mx-auto w-full max-w-6xl px-4">
   <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
       { modules.map( ( item, idx ) =>
       {
           const Icon = item.icon;
           return (
               <div
                   key={ idx }
                   className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
               >
                   <div
                       className={ `flex h-14 w-14 items-center justify-center rounded-2xl ${ item.bg } ${ item.color }` }
                   >
                       <Icon className="h-7 w-7" aria-hidden />
                   </div>
                   <span className="text-xs font-bold text-slate-700 text-center">
                       { item.title }
                   </span>
               </div>
           );
       } ) }
       </div>
       
       
       <div className="mt-10 text-center">
       <Link
       href="/clinicans/all-in-one"
       className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
       >
           <span>بررسی کامل اجزای اکوسیستم Clinicans</span>
           <LuArrowLeft className="h-4 w-4" />
       </Link>
       </div>
       </div>
       </section>
       */