// components/products/TwoBranchProducts.tsx
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
    LuZap
} from "react-icons/lu";

// 🧠 DATA
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
        "name": "اجزای سامانه ICTS",
        "description": "معماری یکپارچه سخت‌افزار و نرم‌افزار",
        "itemListElement": [ ...hardwareProducts, ...softwareProducts ].map( ( item, index ) => ( {
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name
        } ) )
    };

    return (
        <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden" aria-labelledby="products-heading">
            <Script id="products-schema" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            {/* Background Circuit Pattern */ }
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 relative z-10">

                {/* HEADER */ }
                <div className="mb-20 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs font-bold text-slate-500 shadow-sm uppercase tracking-wider">
                        <LuZap className="w-4 h-4 text-amber-500" />
                        <span>معماری Full-Stack بومی</span>
                    </div>
                    <h2 id="products-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                        یکپارچگی <span className="text-bms-primary">آهن و کد</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        ما سخت‌افزار را برای نرم‌افزار خودمان می‌سازیم و نرم‌افزار را روی سخت‌افزار خودمان اجرا می‌کنیم.
                        نتیجه؟ پایداری و امنیتی که با سیستم‌های تکه‌تکه (Modular) غیرممکن است.
                    </p>
                </div>

                {/* ================= THE SYSTEM CHASSIS ================= */ }
                <div className="relative rounded-[3rem] bg-white border border-slate-200 shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16">

                    {/* Inner Texture */ }
                    <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden lg:block" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">

                        {/* 🟧 LEFT: HARDWARE (Physical Layer) */ }
                        <div className="flex flex-col items-center lg:items-end lg:pr-16 space-y-8">
                            {/* Label */ }
                            <div className="flex items-center gap-3 mb-4 lg:flex-row-reverse">
                                <h3 className="text-xl font-bold text-slate-900">لایه سخت‌افزار</h3>
                                <div className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-mono font-bold border border-amber-200">PHYSICAL</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md">
                                { hardwareProducts.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <div key={ item.id } className="group relative flex items-center gap-4 bg-gradient-to-br from-slate-100 to-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-amber-300 transition-all hover:shadow-lg hover:-translate-x-2 cursor-default">
                                            {/* Connection Line (Desktop) */ }
                                            <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-px bg-slate-200 group-hover:bg-amber-300 transition-colors" />
                                            <div className="hidden lg:block absolute top-1/2 -right-[66px] w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors" />

                                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-right flex-1">
                                                <div className="font-bold text-slate-800 font-mono text-sm">{ item.name }</div>
                                                <div className="text-xs text-slate-500 mt-1">{ item.desc }</div>
                                            </div>
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>

                        {/* 🟦 RIGHT: SOFTWARE (Logical Layer) */ }
                        <div className="flex flex-col items-center lg:items-start lg:pl-16 space-y-8">
                            {/* Label */ }
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-xl font-bold text-slate-900">لایه نرم‌افزار</h3>
                                <div className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-[10px] font-mono font-bold border border-indigo-200">LOGICAL</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md">
                                { softwareProducts.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <div key={ item.id } className="group relative flex flex-row-reverse items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 hover:border-indigo-300 transition-all hover:shadow-lg hover:translate-x-2 cursor-default">
                                            {/* Connection Line (Desktop) */ }
                                            <div className="hidden lg:block absolute top-1/2 -left-16 w-16 h-px bg-slate-200 group-hover:bg-indigo-300 transition-colors" />
                                            <div className="hidden lg:block absolute top-1/2 -left-[66px] w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors" />

                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-left flex-1">
                                                <div className="font-bold text-slate-800 font-mono text-sm">{ item.name }</div>
                                                <div className="text-xs text-slate-500 mt-1">{ item.desc }</div>
                                            </div>
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>

                        {/* CENTRAL PROCESSING UNIT (The Connector) */ }
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 z-20">
                            <div className="w-4 h-40 bg-slate-100 rounded-full border border-slate-300 shadow-inner flex flex-col items-center justify-center gap-2 overflow-hidden">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse delay-75" />
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                                <div className="w-full h-full bg-gradient-to-b from-transparent via-white/50 to-transparent animate-scan" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">BUS</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}