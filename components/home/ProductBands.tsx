"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import CngPilotVideo from "./CngPilotVideo";
import
{
    LuCpu,
    LuActivity,
    LuArrowUpLeft,
    LuHandshake,
    LuGlobe,
} from "react-icons/lu";

export default function ProductBands ()
{
    const containerRef = useRef<HTMLDivElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start 85%", "end 20%" ],
    } );

    const spineHeight = useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "100%" ] );
    const glowOpacity = useTransform(
        scrollYProgress,
        [ 0.42, 0.55, 0.68 ],
        [ 0, 0.45, 0 ]
    );
    const coreScale = useTransform( scrollYProgress, [ 0.47, 0.53 ], [ 0.96, 1.04 ] );

    return (
        <section
            ref={ containerRef }
            aria-labelledby="products-heading"
            className="relative py-32 md:py-40"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-24 flex flex-col items-center text-center gap-4">
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-600 tracking-wide">
                        محصولات و راهکارها
                    </span>

                    <h2
                        id="products-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-bms-dark"
                    >
                        پلتفرم‌ها و سامانه‌های عملیاتی
                    </h2>

                    <p className="max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
                        راهکارهای بارمان صرفاً مفاهیم تئوریک یا نمونه‌های آزمایشگاهی نیستند؛
                        این سامانه‌ها به‌صورت عملیاتی در محیط‌های واقعی،
                        زیرساخت‌های حیاتی و کسب‌وکارهای فعال مورد استفاده قرار گرفته‌اند.
                    </p>
                </header>

                {/* ================= SYSTEM ================= */ }
                <div className="relative">

                    {/* ===== SPINE (SYSTEM BUS) ===== */ }
                    <div
                        aria-hidden
                        className="absolute left-1/2 top-0 h-full -translate-x-1/2"
                    >
                        <div className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-slate-300 to-transparent overflow-hidden">
                            <motion.div
                                style={ { height: spineHeight } }
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-bms-primary via-emerald-400 to-bms-primary origin-top"
                            />

                            <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(16,185,129,0.35),transparent)] animate-[flow_4s_linear_infinite]" />

                            <motion.div
                                style={ { opacity: glowOpacity } }
                                className="absolute top-1/2 left-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bms-primary/20 blur-3xl"
                            />
                        </div>
                    </div>

                    {/* ================= ICTS ================= */ }
                    <BandWrapper side="right">
                        <ICTSBand />
                    </BandWrapper>

                    <CoreNode scale={ coreScale } />

                    {/* ================= CLINICANS ================= */ }
                    <BandWrapper side="left">
                        <ClinicansBand />
                    </BandWrapper>

                    <CoreNode scale={ coreScale } />

                    {/* ================= WIT ================= */ }
                    <BandWrapper side="right">
                        <WITBand />
                    </BandWrapper>

                </div>
            </div>
        </section>
    );
}

/* ================= CORE NODE ================= */
function CoreNode ( { scale }: { scale: MotionValue<number>; } )
{
    return (
        <motion.div
            style={ { scale } }
            className="relative z-20 my-16 flex justify-center"
        >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white border border-slate-300 shadow-[0_20px_40px_-18px_rgba(0,0,0,0.4)]">
                <motion.span
                    animate={ { rotate: 360 } }
                    transition={ { duration: 40, repeat: Infinity, ease: "linear" } }
                    className="absolute inset-[-6px] rounded-full border border-bms-primary/30"
                />
                <span className="absolute inset-0 rounded-full bg-bms-primary/15 blur-md" />
                <Image
                    src="/bmslogoclean.webp"
                    alt="Barman Core Platform"
                    width={ 30 }
                    height={ 30 }
                    className="relative z-10"
                />
            </div>
        </motion.div>
    );
}

/* ================= BAND WRAPPER ================= */
function BandWrapper ( {
    side,
    children,
}: {
    side: "left" | "right";
    children: ReactNode;
} )
{
    return (
        <motion.div
            initial={ { opacity: 0, y: 24 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, margin: "-120px" } }
            transition={ { duration: 0.7, ease: [ 0.22, 1, 0.36, 1 ] } }
            className="relative z-10 mb-20"
        >
            <div
                aria-hidden
                className={ `absolute top-1/2 hidden lg:block ${ side === "right" ? "left-1/2 ml-8" : "right-1/2 mr-8"
                    }` }
            >
                <div className="relative h-px w-24 bg-gradient-to-r from-transparent via-bms-primary to-transparent">
                    <span className="absolute right-0 -top-1 h-2 w-2 rounded-full bg-bms-primary" />
                </div>
            </div>

            { children }
        </motion.div>
    );
}

/* ================= ICTS ================= */
function ICTSBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-bms-primary/10 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-10 shadow-[0_28px_56px_-30px_rgba(0,0,0,0.4)]">
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
                        سامانه هوشمند کنترل و مانیتورینگ
                        <br />
                        <span className="text-bms-primary">جایگاه‌های سوخت CNG</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500 font-mono">
                            Intelligent Control & Tag System (ICTS)
                        </span>
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                        ICTS راهکار بومی بارمان برای پایش، ایمنی و تصمیم‌سازی بلادرنگ
                        در شبکه جایگاه‌های سوخت CNG است که با سخت‌افزار صنعتی
                        و نرم‌افزار متمرکز، پایداری عملیاتی و نظارت دقیق را تضمین می‌کند.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700 pt-2">
                        { [
                            "ارتقای ایمنی شهروندان، پرسنل و تجهیزات",
                            "پایش بلادرنگ فرآیندها و تجهیزات حیاتی",
                            "داشبورد مدیریتی و کنترل متمرکز",
                            "سخت‌افزار صنعتی بومی (Industrial-Grade)",
                        ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-bms-accent" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    <Link
                        href="/cng-automation"
                        className="inline-flex items-center gap-2 text-sm font-bold text-bms-primary hover:text-bms-dark transition"
                    >
                        بررسی فنی سامانه
                        <LuArrowUpLeft className="h-4 w-4" />
                    </Link>
                </div>

                <div className="w-full lg:w-[45%]">
                    <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl rotate-1 group-hover:rotate-0 transition">
                        <CngPilotVideo
                            src="/CNG_Station_Automation.mp4"
                            ariaLabel="ویدیو عملکرد سامانه هوشمند ICTS"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ================= CLINICANS ================= */
function ClinicansBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_28px_56px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-14">
                <div className="lg:flex-1 space-y-7 text-right">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                            <LuActivity className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            Digital Health Platform
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        پلتفرم <span className="text-emerald-600">Clinicans</span>
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                        Clinicans یک پلتفرم سلامت دیجیتال برای مدیریت یکپارچه
                        کلینیک‌ها و مراکز درمانی است که فرآیندهای بالینی،
                        مالی و ارتباط با بیمار را در یک هسته امن و مقیاس‌پذیر تجمیع می‌کند.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600"
                        >
                            مشاهده جزئیات
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>
                        <a
                            href="https://clinicans.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-bold text-white hover:bg-emerald-700 transition"
                        >
                            ورود به پلتفرم
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-[45%]">
                    <div className="aspect-[16/10] rounded-xl border bg-slate-50 shadow-lg" />
                </div>
            </div>
        </article>
    );
}

/* ================= WIT ================= */
function WITBand ()
{
    return (
        <article className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 md:p-14 shadow-xl">
            <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center text-white">
                <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <LuHandshake className="h-6 w-6" />
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    همکاری برای{ " " }
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        آینده هوشمند
                    </span>
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                    بارمان بستری برای توسعه مشترک محصولات،
                    سرمایه‌گذاری فناورانه و ورود راهبردی
                    به حوزه‌های نوظهور صنعتی و دیجیتال فراهم می‌کند.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-2">
                    <Link
                        href="/intelligentautomation"
                        className="rounded-xl bg-white px-8 py-3 text-sm font-bold text-slate-900"
                    >
                        مدل‌های همکاری
                    </Link>
                    <Link
                        href="/contact-us"
                        className="rounded-xl border border-white/20 px-8 py-3 text-sm font-bold text-white"
                    >
                        تماس با توسعه کسب‌وکار
                    </Link>
                </div>

                <div className="pt-6 text-xs tracking-widest text-blue-300">
                    <LuGlobe className="inline h-3 w-3 ml-1" />
                    Worldwide Intelligent Technology (WIT)
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10" />
        </article>
    );
}
