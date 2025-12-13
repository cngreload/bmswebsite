"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type ModuleItem = {
    title: string;
    href: string;
    iconSrc: string;
    iconAlt?: string;
};

export default function ClinicansHeroSection ()
{
    const [ imagineWithout, setImagineWithout ] = useState( false );

    const modules: ModuleItem[] = useMemo(
        () => [
            { title: "نوبت‌دهی", href: "/clinicans#appointments", iconSrc: "/clinicans/modules/appointments.svg" },
            { title: "پرونده مراجعین", href: "/clinicans#ehr", iconSrc: "/clinicans/modules/ehr.svg" },
            { title: "پذیرش و صف", href: "/clinicans#frontdesk", iconSrc: "/clinicans/modules/frontdesk.svg" },
            { title: "پیامک و یادآوری", href: "/clinicans#sms", iconSrc: "/clinicans/modules/sms.svg" },
            { title: "مالی و فاکتور", href: "/clinicans#billing", iconSrc: "/clinicans/modules/billing.svg" },
            { title: "گزارش‌دهی", href: "/clinicans#reports", iconSrc: "/clinicans/modules/reports.svg" },
            { title: "ویزیت و خدمات", href: "/clinicans#visit", iconSrc: "/clinicans/modules/visit.svg" },
            { title: "مدیریت موجودی", href: "/clinicans#inventory", iconSrc: "/clinicans/modules/inventory.svg" },
            { title: "بازاریابی", href: "/clinicans#marketing", iconSrc: "/clinicans/modules/marketing.svg" },
            { title: "باشگاه مشتریان", href: "/clinicans#loyalty", iconSrc: "/clinicans/modules/loyalty.svg" },
            { title: "نقش‌ها و دسترسی", href: "/clinicans#access", iconSrc: "/clinicans/modules/access.svg" },
            { title: "یکپارچه‌سازی", href: "/clinicans#integrations", iconSrc: "/clinicans/modules/integrations.svg" },
            { title: "اسناد و فایل‌ها", href: "/clinicans#documents", iconSrc: "/clinicans/modules/documents.svg" },
            { title: "گفتگو و پیام داخلی", href: "/clinicans#chat", iconSrc: "/clinicans/modules/chat.svg" },
            { title: "فرم‌ها و پذیرش دیجیتال", href: "/clinicans#forms", iconSrc: "/clinicans/modules/forms.svg" },
            { title: "داشبورد مدیریتی", href: "/clinicans#dashboard", iconSrc: "/clinicans/modules/dashboard.svg" },
        ],
        []
    );

    return (
        <div className="space-y-10">
            {/* HERO (Odoo-style) */ }
            <section id="clinicans-hero" className="pt-6 pb-10 text-center">
                <div className="mx-auto w-full max-w-5xl space-y-5">
                    {/* small label / super title */ }
                    <div className="flex justify-center">
                        <p className="inline-flex items-center justify-center rounded-full bg-bms-primary-soft px-4 py-1.5 text-[11px] md:text-xs font-medium text-bms-primary shadow-sm">
                            پلتفرم بومی مدیریت هوشمند کلینیک‌های سلامت و زیبایی
                        </p>
                    </div>

                    {/* H1 */ }
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-bms-dark">
                        یک پلتفرم،{ " " }
                        <span className="rounded-md bg-bms-primary-soft px-2 py-1 text-bms-primary">
                            تمام مدیریت کلینیک
                        </span>
                    </h1>

                    {/* H2 (secondary headline like Odoo display-3) */ }
                    <h2 className="mx-auto max-w-3xl text-lg md:text-2xl font-semibold text-bms-dark">
                        ساده، سریع و{ " " }
                        <span className="rounded-md bg-emerald-100 px-2 py-1 text-emerald-800">
                            مقرون‌به‌صرفه
                        </span>
                    </h2>

                    {/* body paragraph */ }
                    <p className="mx-auto max-w-3xl text-sm md:text-base text-slate-700 leading-relaxed">
                        Clinicans یک پلتفرم یکپارچه برای نوبت‌دهی، پرونده‌ی مراجعین، مالی و گزارش‌دهی است که به کلینیک‌های حرفه‌ای کمک می‌کند
                        به‌جای درگیری با چند پنل و کارهای اداری، روی کیفیت درمان و رشد پایدار درآمد تمرکز کنند.
                    </p>

                    <p className="mx-auto max-w-3xl text-xs md:text-sm text-slate-600 leading-relaxed">
                        ساده برای تیم پذیرش و پزشک، شفاف برای مدیریت، قابل‌اعتماد برای مراجعان.
                    </p>

                    {/* CTAs */ }
                    <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-bms-primary px-6 py-3 text-sm font-semibold text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                        >
                            درخواست جلسه معرفی و دمو
                        </Link>

                        <Link
                            href="/clinicans/demo"
                            className="inline-flex items-center justify-center rounded-full border border-bms-primary bg-white px-6 py-3 text-sm font-semibold text-bms-primary hover:bg-bms-primary-soft transition-colors"
                        >
                            مشاهده نمونه محیط کاربری Clinicans
                        </Link>
                    </div>
                </div>
            </section>

            {/* APPS GRID (Odoo-like below hero) */ }
            <section className="relative overflow-hidden rounded-2xl bg-gray-100 py-8 md:py-10">
                {/* subtle background blob */ }
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -top-24 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-white blur-3xl" />
                </div>

                {/* optional overlay image when switch is ON */ }
                <div
                    className={ [
                        "pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 transition-opacity",
                        imagineWithout ? "opacity-100" : "opacity-0",
                    ].join( " " ) }
                    aria-hidden
                >
                    {/* If you don't add this file, it will just 404 silently in the browser (no build break). */ }
                    <Image
                        src="/clinicans/modules/apps_switched.svg"
                        alt="app_switched"
                        className="h-16 w-auto"
                        loading="lazy"
                        height={ 300 }
                        width={ 300 }
                    />
                </div>

                <div className="relative mx-auto w-full max-w-6xl px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Notification pill */ }
                        <Link
                            href="/contact-us"
                            className="mx-auto flex w-full max-w-2xl items-center justify-center gap-3 rounded-full bg-white px-4 py-2 text-xs md:text-sm shadow-sm ring-1 ring-black/5 hover:bg-slate-50"
                        >
                            <Image
                                src="/clinicans/modules/fr.png"
                                alt="France"
                                className="h-4 w-4 rounded-full"
                                loading="lazy"
                                height={ 300 }
                                width={ 300 }
                                onError={ ( e ) =>
                                {
                                    // if you don't want a flag, just prevent broken icon UI
                                    ( e.currentTarget as HTMLImageElement ).style.display = "none";
                                } }
                            />
                            <span className="font-semibold text-slate-900">رویداد آموزشی — معرفی ماژول‌ها</span>
                            <span className="hidden text-slate-400 sm:inline">•</span>
                            <span className="whitespace-nowrap text-slate-600">Dec 16, 2025</span>
                            <span className="ml-2 whitespace-nowrap font-semibold text-slate-900">ثبت‌نام ⟶</span>
                        </Link>

                        {/* Apps grid: 3 / 4 / 6 columns */ }
                        <div className="mt-10 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-6">
                            { modules.map( ( item ) => (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    className="group flex flex-col items-center justify-start text-center"
                                >
                                    <div
                                        className={ [
                                            "flex h-20 w-20 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-black/5 transition-transform group-hover:-translate-y-0.5",
                                            imagineWithout ? "grayscale opacity-50" : "",
                                        ].join( " " ) }
                                    >
                                        <img
                                            src={ item.iconSrc }
                                            alt={ item.iconAlt ?? `${ item.title } icon` }
                                            className="h-10 w-10"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="mt-3 w-full truncate px-1 text-[11px] md:text-xs font-medium text-slate-600">
                                        { item.title }
                                    </div>
                                </Link>
                            ) ) }
                        </div>

                        {/* bottom row */ }
                        <div className="mt-10 grid items-center gap-4 lg:grid-cols-2">
                            {/* switch (lg only) */ }
                            <div className="hidden lg:flex items-center justify-start">
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={ imagineWithout }
                                    onClick={ () => setImagineWithout( ( v ) => !v ) }
                                    className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-black/10"
                                >
                                    <span
                                        className={ [
                                            "relative inline-flex h-6 w-12 items-center rounded-full transition",
                                            imagineWithout ? "bg-slate-900" : "bg-slate-300",
                                        ].join( " " ) }
                                    >
                                        <span
                                            className={ [
                                                "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition",
                                                imagineWithout ? "-translate-x-6" : "-translate-x-1",
                                            ].join( " " ) }
                                        />
                                    </span>
                                    تصور کنید بدون Clinicans
                                </button>
                            </div>

                            {/* view all */ }
                            <div className="text-center lg:text-end">
                                <Link
                                    href="/clinicans#modules"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
                                >
                                    مشاهده همه ماژول‌ها
                                    <img
                                        src="/clinicans/modules/secondary_arrow_sm_03.svg"
                                        alt=""
                                        className="h-4 w-8"
                                        loading="lazy"
                                        onError={ ( e ) =>
                                        {
                                            // if you didn't add the arrow file, fallback to a text arrow
                                            ( e.currentTarget as HTMLImageElement ).style.display = "none";
                                        } }
                                    />
                                    <span className="inline-block">⟶</span>
                                </Link>
                            </div>
                        </div>

                        {/* anchor for “view all modules” */ }
                        <div id="modules" className="sr-only" />
                    </div>
                </div>
            </section>
        </div>
    );
}
