"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINICANS_ALL_IN_ONE } from "@/components/clinicans/all-in-one/clinicansALLInOneData";

/* ---------------------------------------------
 * STRUCTURED DATA
 * -------------------------------------------*/
function ClinicansStructuredData ()
{
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Clinicans All-in-One Ecosystem",
        applicationCategory: "MedicalBusinessApplication",
        operatingSystem: "Web",
        description:
            "اکوسیستم یکپارچه مدیریت کلینیک و مطب با ماژول‌های متصل نوبت‌دهی، EHR، مالی، CRM و هوش مدیریتی",
        hasPart: CLINICANS_ALL_IN_ONE.map( ( cat ) => ( {
            "@type": "SoftwareApplication",
            name: cat.title,
            featureList: cat.modules.map( ( m ) => m.title ),
        } ) ),
        offers: {
            "@type": "Offer",
            category: "SoftwareAsAService",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://barman-mes.ir/clinicans/all-in-one",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={ { __html: JSON.stringify( structuredData ) } }
        />
    );
}

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansAllInOnePage ()
{
    const [ hideNav, setHideNav ] = useState( false );

    useEffect( () =>
    {
        let lastY = window.scrollY;
        const onScroll = () =>
        {
            const currentY = window.scrollY;
            setHideNav( currentY > 80 && currentY > lastY );
            lastY = currentY;
        };
        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    return (
        <>
            <ClinicansStructuredData />

            {/* LOCAL NAV */ }
            <header
                className={ `sticky top-0 z-50 transition-transform duration-300 ${ hideNav ? "-translate-y-full" : "translate-y-0"
                    } border-b border-slate-200 bg-white/80 backdrop-blur` }
            >
                <div className="container mx-auto flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                            C
                        </span>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold">Clinicans</div>
                            <div className="text-[11px] text-slate-500">
                                All-in-One Ecosystem
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Link
                            href="/clinicans"
                            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                            بازگشت
                        </Link>
                        <Link
                            href="/contact-us?type=clinicans-demo"
                            className="rounded-xl bg-bms-primary px-4 py-2 text-sm font-semibold text-white hover:bg-bms-primary/90"
                        >
                            درخواست دمو
                        </Link>
                    </div>
                </div>
            </header>

            {/* MAIN */ }
            <main id="main-content" className="min-h-screen">
                {/* HERO */ }
                <section className="container mx-auto py-12 md:py-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-sm">
                                <span className="h-2 w-2 rounded-full bg-bms-primary" />
                                یک اکوسیستم، تمام نیازهای کلینیک
                            </span>

                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Clinicans All-in-One
                                <span className="block mt-3 text-slate-600 text-xl md:text-2xl">
                                    اکوسیستم یکپارچه مدیریت، رشد و تصمیم‌سازی کلینیک
                                </span>
                            </h1>

                            <p className="max-w-2xl text-base md:text-lg text-slate-700 leading-relaxed">
                                این صفحه برای <strong>تصمیم‌گیری آگاهانه مدیران</strong> طراحی شده است.
                                Clinicans مجموعه‌ای از ماژول‌های جداگانه نیست؛
                                بلکه اکوسیستمی است که داده، فرآیند و تجربه بیمار را
                                در یک چرخه منسجم به هم متصل می‌کند.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3 pt-2">
                                { [
                                    [ "کنترل مراجعه", "کاهش No-Show و ازدحام" ],
                                    [ "شفافیت مالی", "گزارش مدیریتی دقیق" ],
                                    [ "رشد پایدار", "CRM و وفادارسازی" ],
                                ].map( ( [ k, v ] ) => (
                                    <div
                                        key={ k }
                                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >
                                        <div className="font-semibold">{ k }</div>
                                        <div className="text-sm text-slate-600 mt-1">{ v }</div>
                                    </div>
                                ) ) }
                            </div>

                            <div className="text-xs text-slate-500">
                                مناسب کلینیک‌های زیبایی، درمانی و چندتخصصی
                            </div>
                        </div>

                        <aside className="lg:col-span-5">
                            <Image
                                src="/images/clinicans-modules-hero.jpg"
                                alt="اکوسیستم ماژول‌های Clinicans"
                                width={ 600 }
                                height={ 400 }
                                priority
                                className="rounded-3xl shadow-xl"
                            />
                        </aside>
                    </div>
                </section>

                {/* MODULES */ }
                <section id="modules" className="container mx-auto pb-20 space-y-12">
                    { CLINICANS_ALL_IN_ONE.map( ( group ) => (
                        <article
                            key={ group.id }
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="mb-3">
                                <h2 className="text-xl font-bold">{ group.title }</h2>
                                <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                                    { group.description }
                                </p>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                { group.modules.map( ( m ) => (
                                    <div
                                        key={ m.slug }
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white hover:shadow-sm transition"
                                    >
                                        <div className="font-semibold text-sm">{ m.title }</div>
                                        <div className="mt-1 text-sm text-slate-600">
                                            { m.subtitle }
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </article>
                    ) ) }
                </section>

                {/* CTA */ }
                <section className="border-t border-slate-200 bg-white py-14">
                    <div className="container mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold">
                                آماده‌ای اکوسیستم Clinicans را در عمل ببینی؟
                            </h3>
                            <p className="mt-2 text-slate-600 max-w-xl">
                                در جلسه دمو، ماژول‌ها دقیقاً براساس ساختار کلینیک شما
                                نمایش داده می‌شوند — بدون ارائه‌های کلی و تبلیغاتی.
                            </p>
                        </div>
                        <Link
                            href="/contact-us?type=clinicans-demo"
                            className="inline-flex items-center justify-center rounded-2xl bg-bms-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-bms-primary/90"
                        >
                            درخواست دمو
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
