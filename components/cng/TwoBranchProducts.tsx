"use client";

import React from "react";
import Script from "next/script";
import
{
    LuCpu,
    LuVideo,
    LuScan,
    LuWifi,
    LuToggleRight,
    LuShieldCheck,
    LuLayoutDashboard,
    LuDatabase,
    LuRefreshCw,
    LuCreditCard,
    LuBrainCircuit,
    LuFileChartLine,
    LuLayers,
    LuBox,
    LuZap,
} from "react-icons/lu";

/* ================= DATA ================= */
const hardwareProducts = [
    { id: "HR", name: "HR-ICTS", desc: "هسته مرکزی کنترل", icon: LuCpu },
    { id: "HCO", name: "HCO-ICTS", desc: "اینترفیس دیسپنسر", icon: LuBox },
    { id: "HPCR", name: "HPCR-ICTS", desc: "دوربین پلاک‌خوان", icon: LuVideo },
    { id: "HPR", name: "HPR-ICTS", desc: "یونیت پردازش LPR", icon: LuScan },
    { id: "COM", name: "Com-Module", desc: "ماژول ارتباطی", icon: LuWifi },
    { id: "DOC", name: "Digital I/O", desc: "کنترلر ایمنی", icon: LuToggleRight },
];

const softwareProducts = [
    { id: "SF", name: "SF-ICTS", desc: "مدیریت عملیات", icon: LuLayers },
    { id: "SS", name: "SS-ICTS", desc: "تونل امن داده", icon: LuShieldCheck },
    { id: "SM", name: "SM-ICTS", desc: "داشبورد مرکزی", icon: LuLayoutDashboard },
    { id: "DB", name: "DB-ICTS", desc: "دیتابیس توزیع‌شده", icon: LuDatabase },
    { id: "SU", name: "SU-ICTS", desc: "آپدیت از راه دور", icon: LuRefreshCw },
    { id: "PAY", name: "Payment", desc: "پرداخت یکپارچه", icon: LuCreditCard },
    { id: "AI", name: "AI Core", desc: "هوش مصنوعی", icon: LuBrainCircuit },
    { id: "REP", name: "Reports", desc: "گزارش‌ساز پویا", icon: LuFileChartLine },
];

export default function TwoBranchProducts ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "اجزای سامانه ICTS",
        description: "معماری یکپارچه سخت‌افزار و نرم‌افزار",
        itemListElement: [ ...hardwareProducts, ...softwareProducts ].map(
            ( item, index ) => ( {
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
            } )
        ),
    };

    return (
        <section
            aria-labelledby="products-heading"
            className="relative py-28 md:py-36 bg-slate-50 overflow-hidden"
        >
            <Script
                id="products-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* Background grid – ultra subtle */ }
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-24 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs font-bold text-slate-500 tracking-wider shadow-sm">
                        <LuZap className="w-4 h-4 text-amber-500" />
                        معماری Full-Stack بومی
                    </div>

                    <h2
                        id="products-heading"
                        className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
                    >
                        یکپارچگی <span className="text-bms-primary">آهن و کد</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-600">
                        ما سخت‌افزار را برای نرم‌افزار خودمان می‌سازیم و نرم‌افزار را روی
                        سخت‌افزار خودمان اجرا می‌کنیم. نتیجه؟ پایداری و امنیتی که با
                        سیستم‌های تکه‌تکه غیرممکن است.
                    </p>
                </header>

                {/* ================= SYSTEM DIAGRAM ================= */ }
                <div className="relative rounded-[3rem] bg-white border border-slate-200 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)] px-6 py-16 md:px-12 md:py-24">

                    {/* Central BUS */ }
                    <div
                        aria-hidden="true"
                        className="hidden lg:flex absolute left-1/2 top-0 h-full -translate-x-1/2 flex-col items-center"
                    >
                        <div className="h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                        <span className="mt-4 text-[10px] font-bold tracking-widest text-slate-400">
                            SYSTEM BUS
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* ================= HARDWARE ================= */ }
                        <div className="space-y-8 lg:pr-20">
                            <SectionLabel title="لایه سخت‌افزار" code="PHYSICAL" tone="amber" />

                            <ul className="space-y-4">
                                { hardwareProducts.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li
                                            key={ item.id }
                                            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all hover:-translate-x-1 hover:shadow-md"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-amber-600">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <div className="flex-1 text-right">
                                                <div className="text-sm font-bold font-mono text-slate-800">
                                                    { item.name }
                                                </div>
                                                <div className="text-xs text-slate-500 mt-0.5">
                                                    { item.desc }
                                                </div>
                                            </div>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </div>

                        {/* ================= SOFTWARE ================= */ }
                        <div className="space-y-8 lg:pl-20">
                            <SectionLabel title="لایه نرم‌افزار" code="LOGICAL" tone="indigo" />

                            <ul className="space-y-4">
                                { softwareProducts.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li
                                            key={ item.id }
                                            className="group flex flex-row-reverse items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-all hover:translate-x-1 hover:shadow-md"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <div className="flex-1 text-left">
                                                <div className="text-sm font-bold font-mono text-slate-800">
                                                    { item.name }
                                                </div>
                                                <div className="text-xs text-slate-500 mt-0.5">
                                                    { item.desc }
                                                </div>
                                            </div>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= LABEL COMPONENT ================= */
function SectionLabel ( {
    title,
    code,
    tone,
}: {
    title: string;
    code: string;
    tone: "amber" | "indigo";
} )
{
    const tones = {
        amber: "bg-amber-100 text-amber-700 border-amber-200",
        indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };

    return (
        <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-slate-900">{ title }</h3>
            <span
                className={ `px-2 py-1 rounded border text-[10px] font-mono font-bold ${ tones[ tone ] }` }
            >
                { code }
            </span>
        </div>
    );
}
