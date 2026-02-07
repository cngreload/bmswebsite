"use client";

import React from "react";
import
{
    LuCable,
    LuCpu,
    LuChartBar,
} from "react-icons/lu";

type StageKey = "input" | "process" | "output";

type Step = {
    id: number;
    key: StageKey;
    stage: string;
    title: string;
    description: string;
    icon: React.ElementType;
};

const steps: Step[] = [
    {
        id: 1,
        key: "input",
        stage: "Input Layer",
        title: "داده‌برداری از میدان",
        description:
            "جمع‌آوری سیگنال‌های حیاتی از سنسورها، دیسپنسرها (نازل)، تگ‌های RFID و کمپرسورها. تبدیل رخدادهای فیزیکی به داده‌های خام دیجیتال در لبه (Edge).",
        icon: LuCable,
    },
    {
        id: 2,
        key: "process",
        stage: "Control Layer",
        title: "پردازش و کنترل هوشمند",
        description:
            "اجرای منطق کنترلی در کنترلر صنعتی جایگاه. اعتبارسنجی خودروها، صدور فرمان سوخت‌گیری و مدیریت آلارم‌ها بدون وابستگی به اینترنت (Local Logic).",
        icon: LuCpu,
    },
    {
        id: 3,
        key: "output",
        stage: "Decision Layer",
        title: "هوش تجاری و تصمیم‌سازی",
        description:
            "تجمیع داده‌ها در سرور مرکزی. داشبوردهای مدیریتی برای رصد روند فروش، تعمیرات پیشگیرانه و سیاست‌گذاری کلان بر اساس داده‌های واقعی.",
        icon: LuChartBar,
    },
];

const toneMap: Record<
    StageKey,
    { bg: string; text: string; line: string; }
> = {
    input: {
        bg: "bg-slate-50",
        text: "text-slate-700",
        line: "bg-slate-300",
    },
    process: {
        bg: "bg-blue-50",
        text: "text-bms-primary",
        line: "bg-bms-primary",
    },
    output: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        line: "bg-emerald-500",
    },
};

export default function WhatSystemDoesSection ()
{
    return (
        <section
            id="how-it-works"
            aria-labelledby="system-heading"
            className="py-20 md:py-28 bg-white"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <span className="inline-block rounded-md bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-600 border border-slate-200">
                        جریان داده و کنترل
                    </span>

                    <h2
                        id="system-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        از سیگنال میدان تا{ " " }
                        <span className="text-bms-primary">
                            تصمیم مدیریتی
                        </span>
                    </h2>
                </header>

                {/* ================= FLOW ================= */ }
                <div className="relative">

                    {/* Desktop spine */ }
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-200" />

                    <div className="grid gap-12 md:grid-cols-3 relative z-10">
                        { steps.map( ( step, index ) =>
                        {
                            const Icon = step.icon;
                            const tone = toneMap[ step.key ];

                            return (
                                <div key={ step.id } className="relative">

                                    {/* Mobile connector */ }
                                    { index !== 0 && (
                                        <div
                                            className={ `md:hidden absolute -top-6 right-1/2 translate-x-1/2 w-px h-6 ${ tone.line }` }
                                            aria-hidden
                                        />
                                    ) }

                                    {/* Node */ }
                                    <article
                                        className={ `
                      relative h-full rounded-[2rem] border border-slate-200
                      bg-white p-6 md:p-8
                    `}
                                    >
                                        {/* Stage label */ }
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="text-[11px] uppercase tracking-widest font-mono text-slate-400">
                                                { step.stage }
                                            </span>

                                            <div
                                                className={ `flex h-12 w-12 items-center justify-center rounded-xl ${ tone.bg } ${ tone.text }` }
                                            >
                                                <Icon className="h-6 w-6" />
                                            </div>
                                        </div>

                                        {/* Content */ }
                                        <div className="space-y-3 text-right">
                                            <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                                { step.title }
                                            </h3>
                                            <p className="text-sm md:text-base leading-7 text-slate-600">
                                                { step.description }
                                            </p>
                                        </div>
                                    </article>

                                    {/* Desktop connector dot */ }
                                    <div
                                        className={ `
                      hidden md:block absolute top-1/2
                      ${ index === 0 ? "-right-3" : index === steps.length - 1 ? "-left-3" : "left-1/2 -translate-x-1/2" }
                      h-3 w-3 rounded-full ${ tone.line }
                    `}
                                        aria-hidden
                                    />
                                </div>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        </section>
    );
}
