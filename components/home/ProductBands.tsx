"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CngPilotVideo from "./CngPilotVideo";
import { LuCpu, LuActivity, LuArrowUpLeft } from "react-icons/lu";

export default function ProductBands ()
{
    const containerRef = useRef<HTMLDivElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start 70%", "end 30%" ],
    } );

    /* Spine fill */
    const spineHeight = useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "100%" ] );

    /* Active glow around viewport center */
    const glowOpacity = useTransform( scrollYProgress, [ 0.35, 0.5, 0.65 ], [ 0, 1, 0 ] );

    /* Core pulse */
    const coreScale = useTransform( scrollYProgress, [ 0.45, 0.55 ], [ 0.95, 1.05 ] );

    return (
        <section
            ref={ containerRef }
            className="py-20 md:py-24"
            aria-labelledby="products-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER (UNCHANGED CONTENT) ================= */ }
                <div className="mb-16 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                        محصولات و راهکارها
                    </span>

                    <h2
                        id="products-heading"
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-bms-dark"
                    >
                        سامانه‌ها و{ " " }
                        <span className="text-bms-primary">
                            پلتفرم‌های عملیاتی
                        </span>
                    </h2>

                    <p className="ml-auto max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
                        راهکارهای بارمان‌ صرفاً مفاهیم تئوریک یا نمونه‌های آزمایشگاهی نیستند؛
                        این سامانه‌ها به‌صورت عملیاتی در محیط‌های واقعی،
                        زیرساخت‌های حساس و کسب‌وکارهای فعال مورد استفاده قرار گرفته‌اند.
                    </p>
                </div>

                {/* ================= CONNECTED SYSTEM ================= */ }
                <div className="relative">

                    {/* ===== SYSTEM SPINE ===== */ }
                    <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
                        <div className="relative h-full w-px bg-slate-200">

                            {/* Fill */ }
                            <motion.div
                                style={ { height: spineHeight } }
                                className="absolute top-0 left-0 w-px bg-bms-primary origin-top"
                            />

                            {/* Active glow */ }
                            <motion.div
                                style={ { opacity: glowOpacity } }
                                className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bms-primary/20 blur-3xl"
                            />
                        </div>
                    </div>

                    {/* ================= PRODUCT 1: ICTS (UNCHANGED CONTENT) ================= */ }
                    <div className="relative z-10">
                        <ICTSBand />
                    </div>

                    {/* ================= BMS CORE ================= */ }
                    <motion.div
                        style={ { scale: coreScale } }
                        className="relative z-20 my-6 flex justify-center"
                    >
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg border border-slate-300">

                            {/* Pulse ring */ }
                            <span className="absolute inset-0 rounded-full bg-bms-primary/20 blur-md animate-pulse" />

                            {/* Logo */ }
                            <Image
                                src="/bmslogoclean.webp"
                                alt="Barman Mehvar Spadana"
                                width={ 32 }
                                height={ 32 }
                                className="relative z-10"
                            />
                        </div>
                    </motion.div>

                    {/* ================= PRODUCT 2: CLINICANS (UNCHANGED CONTENT) ================= */ }
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true, margin: "-120px" } }
                        transition={ { duration: 0.6, ease: "easeOut" } }
                        className="relative z-10"
                    >
                        <ClinicansBand />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────
   🟦 PRODUCT 1: ICTS (FULL ORIGINAL CONTENT)
───────────────────────────── */
function ICTSBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-bms-primary/10 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

                <div className="lg:flex-1 space-y-7 text-right">

                    <div className="flex items-center gap-2 text-bms-primary">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bms-primary/10">
                            <LuCpu className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            سامانه صنعتی پایش و کنترل
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        سامانه هوشمند
                        <br />
                        <span className="text-bms-primary">
                            کنترل و مانیتوریتگ جایگاه‌های سوخت CNG
                        </span>
                        <br />
                        <span className="text-lg font-medium text-slate-500 font-mono">
                            (Intelligent Control & Tag System)
                        </span>
                    </h3>

                    <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        ICTS راهکار بومی بارمان برای مدیریت، ایمنی و نظارت هوشمند بر شبکه
                        جایگاه‌های سوخت CNG است. این سامانه با تکیه بر سخت‌افزار صنعتی،
                        کنترلرهای میدانی و نرم‌افزار مرکزی، داده‌های عملیاتی را
                        به‌صورت بلادرنگ تحلیل کرده و تصمیم‌گیری دقیق را ممکن می‌سازد.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700 pt-2">
                        { [
                            "ارتقا چشم گیر ایمنی شهروندان، پرسنل و جایگاه‌ها",
                            "پایش بلادرنگ تجهیزات و فرآیند سوخت‌گیری",
                            "داشبورد مدیریتی و نظارت متمرکز",
                            "سخت‌افزار صنعتی مقاوم و بومی (Industrial Grade)",
                        ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-bms-accent" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    <div className="pt-4">
                        <Link
                            href="/cng-automation"
                            className="inline-flex items-center gap-2 text-sm font-bold text-bms-primary hover:text-bms-dark transition-colors"
                        >
                            بررسی فنی سامانه
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[45%]">
                    <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl rotate-1 transition-transform duration-500 group-hover:rotate-0">
                        <CngPilotVideo
                            src="/CNG_Station_Automation.mp4"
                            ariaLabel="ویدیو عملکرد سامانه هوشمند ICTS در جایگاه سوخت"
                        />
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-bms-primary/10" />
                    </div>
                </div>

            </div>
        </article>
    );
}

/* ─────────────────────────────
   🟩 PRODUCT 2: CLINICANS (FULL ORIGINAL CONTENT)
───────────────────────────── */
function ClinicansBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-14">

                <div className="lg:flex-1 space-y-7 text-right">

                    <div className="flex items-center gap-2 text-emerald-600">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                            <LuActivity className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            پلتفرم سلامت دیجیتال
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        پلتفرم <span className="text-emerald-600">Clinicans</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500">
                            مدیریت یکپارچه خدمات ارایه دهندگان سلامت و زیبایی
                        </span>
                    </h3>

                    <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        Clinicans یک پلتفرم نرم‌افزاری یکپارچه برای مدیریت هوشمند کلینیک‌ها
                        و مراکز درمانی است که فرآیندهای بالینی، مالی و ارتباط با مراجعان
                        را در یک هسته منسجم، امن و قابل توسعه تجمیع می‌کند.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700 pt-2">
                        { [
                            "پرونده الکترونیک سلامت و اطلاعات مراجعان",
                            "مدیریت نوبت‌دهی، پذیرش و ارتباط با بیمار",
                            "گزارش‌های مدیریتی و تحلیل عملکرد کلینیک",
                        ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                        >
                            مشاهده جزئیات پلتفرم
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>

                        <a
                            href="https://clinicans.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md transition"
                        >
                            ورود به پلتفرم Clinicans
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-[45%]">
                    <div className="relative aspect-[16/10] w-full rounded-xl border border-slate-200 bg-slate-50 shadow-lg" />
                </div>

            </div>
        </article>
    );
}
