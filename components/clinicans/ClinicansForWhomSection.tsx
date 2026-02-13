"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuBriefcase,
    LuStethoscope,
    LuVenetianMask,
    LuCalendarCheck,
    LuHeartHandshake,
    LuCheck,
    LuUser,
    LuFingerprint,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 👥 CLINICANS PERSONA SECTION - REFORMED
 * Strategy: Stakeholder Access Nodes & Editorial Spacing
 * Theme: Corporate Navy + Medical Spectrum (Green/Teal/Blue)
 */

const personas = [
    {
        id: "managers",
        role: "Management_Enablement",
        title: "مدیران و مالکان کلینیک",
        subtitle: "توانمندسازی در تصمیم‌گیری و توسعه",
        summary:
            "برای مدیرانی که به دنبال ابزارهای دقیق برای پایش عملکرد، بهینه‌سازی درآمد و توسعه کسب‌وکار خود بر پایه داده‌های واقعی هستند.",
        icon: LuBriefcase,
        color: "text-[#145C98]", // BMS Primary Navy
        bg: "bg-blue-50",
        border: "group-hover:border-[#145C98]/30",
        benefits: [
            "دید یکپارچه نسبت به درآمد، ظرفیت و عملکرد واقعی",
            "گزارش‌های مدیریتی قابل اتکا برای تصمیم‌گیری راهبردی",
            "امکان مدیریت چند شعبه در یک ساختار متمرکز",
        ],
    },
    {
        id: "doctors",
        role: "Clinical_Intelligence",
        title: "پزشکان و کادر درمان",
        subtitle: "تمرکز بر کیفیت درمان و مراقبت",
        summary:
            "برای درمانگرانی که می‌خواهند با اتکا به ابزارهای دیجیتال، دغدغه‌های اجرایی را حذف کرده و کیفیت مراقبت از بیمار را ارتقا دهند.",
        icon: LuStethoscope,
        color: "text-[#10B981]", // Medical Green
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        benefits: [
            "دسترسی سریع و منسجم به پرونده و سوابق درمان",
            "ثبت ساده و ساخت‌یافته اطلاعات و خدمات",
            "کاهش وقفه‌های غیرضروری در زمان ویزیت",
        ],
    },
    {
        id: "reception",
        role: "Operational_Flow",
        title: "تیم پذیرش و عملیات",
        subtitle: "اتوماسیون فرآیندها و کاهش خطا",
        summary:
            "برای تیم‌های اجرایی که با حجم بالای هماهنگی روبرو هستند و به ابزارهای هوشمند برای مدیریت جریان مراجعین نیاز دارند.",
        icon: LuCalendarCheck,
        color: "text-[#F4C430]", // Intel Yellow
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        benefits: [
            "مدیریت هوشمند نوبت‌ها و تغییرات برنامه",
            "کاهش تماس‌های تکراری با اطلاع‌رسانی خودکار",
            "کاهش خطای انسانی در فرآیند پذیرش",
        ],
    },
    {
        id: "patients",
        role: "Patient_Experience",
        title: "مراجعان و بیماران",
        subtitle: "تجربه دریافت خدمات در کلاس جهانی",
        summary:
            "برای مراجعانی که انتظار دارند خدمات سلامت را با نظم، شفافیت و احترام دریافت کنند.",
        icon: LuHeartHandshake,
        color: "text-[#D72638]", // Industrial Red
        bg: "bg-red-50",
        border: "group-hover:border-red-200",
        benefits: [
            "دریافت نوبت بدون وابستگی به تماس تلفنی",
            "اطلاع‌رسانی شفاف درباره وضعیت و زمان مراجعه",
            "افزایش اعتماد به فرآیند و کیفیت خدمات",
        ],
    },
];

export default function ClinicansForWhomSection ()
{
    return (
        <section
            id="clinicans-for-whom"
            className="relative py-20 lg:py-32 bg-white overflow-hidden"
            aria-labelledby="audience-heading"
            dir="rtl"
        >
            {/* Background HUD Graphics */ }
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
                <LuFingerprint className="w-80 h-80 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* ===================== HEADER ===================== */ }
                <header className="mb-20 text-right space-y-4 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm"
                    >
                        <LuUser className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                            User_Segmentation / 042-BMS
                        </span>
                    </motion.div>

                    <h2
                        id="audience-heading"
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        این پلتفرم چه کسانی را <br />
                        <span className="text-bms-primary underline decoration-bms-primary/10 underline-offset-8">
                            توانمند
                        </span>{ " " }
                        می‌کند؟
                    </h2>

                    <p className="max-w-3xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        «پلتفرم توانمندسازی دیجیتال ارائه‌دهندگان خدمات سلامت» یک ابزار
                        یکسان برای همه نیست؛ بلکه تجربه‌ای شخصی‌سازی‌شده متناسب با نقش هر
                        فرد در چرخه درمان است.
                    </p>
                </header>

                {/* ===================== PERSONA NODES ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { personas.map( ( persona, index ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <motion.article
                                key={ persona.id }
                                initial={ { opacity: 0, y: 30 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col h-full rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:shadow-premium",
                                    persona.border
                                ) }
                            >
                                {/* HUD Role Metadata */ }
                                <div className="mb-6 flex flex-col items-center text-center gap-4">
                                    <div
                                        className={ cn(
                                            "flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110",
                                            persona.bg,
                                            persona.color
                                        ) }
                                    >
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-lg font-black text-slate-950 group-hover:text-bms-primary transition-colors">
                                            { persona.title }
                                        </h3>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                                            { persona.role }
                                        </p>
                                    </div>
                                </div>

                                {/* Summary */ }
                                <p className="mb-6 text-xs leading-6 text-center text-slate-500 font-medium italic">
                                    { persona.summary }
                                </p>

                                {/* Benefits List */ }
                                <ul className="flex-1 space-y-4 border-t border-slate-50 pt-6">
                                    { persona.benefits.map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div
                                                className={ cn(
                                                    "mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                                                    persona.bg,
                                                    persona.color
                                                ) }
                                            >
                                                <LuCheck className="h-3 w-3" />
                                            </div>
                                            <span className="text-xs leading-5 text-slate-600 font-light">
                                                { item }
                                            </span>
                                        </li>
                                    ) ) }
                                </ul>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== SUMMARY BLOCK ===================== */ }
                <div className="mt-20 lg:mt-32 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-1 shadow-2xl max-w-5xl w-full mx-4">
                        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-[2.95rem] bg-slate-950 px-8 py-10 md:px-14">
                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute inset-0 bg-bms-primary/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 text-[#F4C430] shadow-2xl border border-white/10 backdrop-blur-md">
                                    <LuVenetianMask className="h-12 w-12 animate-float" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <h4 className="text-xl md:text-2xl font-black text-white">
                                        تلاقی تخصص و هوشمندی دیجیتال
                                    </h4>
                                    <span className="hidden md:block h-px w-12 bg-white/20" />
                                </div>
                                <p className="text-sm md:text-base text-slate-300 leading-8 text-justify font-light opacity-90">
                                    کلینیکانز با درک دقیق نیازهای هر نقش، یک چرخه هماهنگ میان
                                    <strong className="text-white font-bold mx-1">مدیریت</strong>،
                                    <strong className="text-white font-bold mx-1">تیم درمان</strong>
                                    و
                                    <strong className="text-white font-bold mx-1">مراجعان</strong>
                                    ایجاد می‌کند؛ چرخه‌ای که از طریق توانمندسازی دیجیتال، منجر به
                                    <span className="text-[#F4C430] font-bold mx-1">
                                        تجربه بهتر
                                    </span>
                                    ،
                                    <span className="text-emerald-400 font-bold mx-1">
                                        بهره‌وری بالاتر
                                    </span>
                                    و
                                    <span className="text-blue-400 font-bold mx-1">
                                        رشد پایدار
                                    </span>
                                    می‌گردد.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}