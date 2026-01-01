// components/clinicans/ClinicansHeroSection.tsx
"use client";
import Link from "next/link";
import
{
    LuCalendarCheck,
    LuFileText,
    LuUsers,
    LuMessageSquare,
    LuWallet,
    LuChartBar,
    LuStethoscope,
    LuBox,
    LuMegaphone,
    LuHeartHandshake,
    LuShieldCheck,
    LuWorkflow,
    LuFiles,
    LuMessageCircle,
    LuFileInput,
    LuLayoutDashboard,
    LuArrowLeft
} from "react-icons/lu";

// 🧠 SEMANTIC DATA: Static definition for stability
const modules = [
    { title: "نوبت‌دهی", icon: LuCalendarCheck, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "پرونده الکترونیک", icon: LuFileText, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "پذیرش و صف", icon: LuUsers, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "پیامک و یادآوری", icon: LuMessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "مالی و فاکتور", icon: LuWallet, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "گزارش‌ساز", icon: LuChartBar, color: "text-cyan-600", bg: "bg-cyan-50" },
    { title: "ویزیت پزشک", icon: LuStethoscope, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "انبارداری", icon: LuBox, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "مارکتینگ", icon: LuMegaphone, color: "text-pink-600", bg: "bg-pink-50" },
    { title: "باشگاه مشتریان", icon: LuHeartHandshake, color: "text-red-600", bg: "bg-red-50" },
    { title: "سطوح دسترسی", icon: LuShieldCheck, color: "text-slate-600", bg: "bg-slate-50" },
    { title: "یکپارچه‌سازی", icon: LuWorkflow, color: "text-teal-600", bg: "bg-teal-50" },
    { title: "مدیریت اسناد", icon: LuFiles, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "چت داخلی", icon: LuMessageCircle, color: "text-green-600", bg: "bg-green-50" },
    { title: "فرم‌ساز", icon: LuFileInput, color: "text-violet-600", bg: "bg-violet-50" },
    { title: "داشبورد", icon: LuLayoutDashboard, color: "text-slate-800", bg: "bg-slate-100" },
];

export default function ClinicansHeroSection ()
{
    return (
        <div className="space-y-12">
            {/* 
        ⚡ HERO SECTION
        LCP Optimization: Text-first, no heavy images above fold.
      */}
            <section id="clinicans-hero" className="pt-8 text-center" aria-labelledby="hero-heading">
                <div className="mx-auto w-full max-w-4xl space-y-6 px-4">

                    {/* Badge */ }
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                            </span>
                            نسل جدید نرم‌افزارهای مدیریت درمان
                        </span>
                    </div>

                    {/* H1 */ }
                    <h1
                        id="hero-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight"
                    >
                        یک پلتفرم، <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            تمام نیازهای کلینیک
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
                        ما پیچیدگی‌های مدیریت مطب و کلینیک را حذف کرده‌ایم.
                        <strong className="text-slate-900 font-semibold"> کلینیکانز (Clinicans) </strong>
                        یک دستیار هوشمند ابری است که نوبت‌دهی، پرونده‌ها و حسابداری شما را یکپارچه می‌کند.
                    </p>

                    {/* Actions */ }
                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                        <Link
                            href="/contact-us"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700"
                        >
                            درخواست دمو رایگان
                        </Link>

                        <Link
                            href="/clinicans/features"
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300"
                        >
                            مشاهده تور محصول
                        </Link>
                    </div>
                </div>
            </section>

            {/* 
        🧩 MODULES GRID (The "Odoo" Look)
        Performance: Pure CSS grid, vector icons (no network requests).
      */}
            <section className="relative overflow-hidden rounded-[3rem] bg-slate-50 py-12 md:py-16">
                {/* Background Decoration */ }
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

                <div className="relative mx-auto w-full max-w-6xl px-4">

                    {/* Grid Container */ }
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
                        { modules.map( ( item, idx ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={ idx }
                                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                                >
                                    <div className={ `flex h-14 w-14 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } transition-transform group-hover:scale-110` }>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900">
                                        { item.title }
                                    </span>
                                </div>
                            );
                        } ) }
                    </div>

                    {/* Bottom Link */ }
                    <div className="mt-10 text-center">
                        <Link
                            href="/clinicans/all-in-one"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                            <span>مشاهده جزئیات تمام ماژول‌ها</span>
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}