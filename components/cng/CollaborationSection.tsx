"use client";

import React from "react";
import
{
    LuLandmark,
    LuFuel,
    LuCreditCard,
    LuMicroscope,
    LuArrowLeft,
} from "react-icons/lu";

/* ---------------------------------------------
 * TYPES
 * -------------------------------------------*/

type ToneKey = "blue" | "emerald" | "slate" | "purple";

type CollabItem = {
    id: string;
    title: string;
    icon: React.ElementType;
    tone: ToneKey;
    bullets: string[];
};

/* ---------------------------------------------
 * TONE MAP (DESIGN TOKENS)
 * -------------------------------------------*/

const toneMap: Record<
    ToneKey,
    {
        bg: string;
        text: string;
        border: string;
        bullet: string;
    }
> = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "group-hover:border-blue-200",
        bullet: "bg-blue-500",
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "group-hover:border-emerald-200",
        bullet: "bg-emerald-500",
    },
    slate: {
        bg: "bg-slate-100",
        text: "text-slate-600",
        border: "group-hover:border-slate-300",
        bullet: "bg-slate-500",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "group-hover:border-purple-200",
        bullet: "bg-purple-500",
    },
};

/* ---------------------------------------------
 * DATA
 * -------------------------------------------*/

const collabItems: CollabItem[] = [
    {
        id: "gov",
        title: "نهادهای حاکمیتی و سیاست‌گذار",
        icon: LuLandmark,
        tone: "blue",
        bullets: [
            "استقرار زیرساخت بومی و قابل اتکای هوشمندسازی با مشارکت نهادهای متولی انرژی",
            "تعریف و تثبیت استانداردهای مرجع ملی در حوزه ایمنی، پایش و داده‌های عملیاتی",
            "ایجاد امکان نظارت متمرکز، داده‌محور و بلادرنگ بر شبکه توزیع سوخت کشور",
        ],
    },
    {
        id: "owners",
        title: "صنف و بهره‌برداران جایگاه‌ها",
        icon: LuFuel,
        tone: "emerald",
        bullets: [
            "مدل‌های استقرار مرحله‌ای و اقتصادی متناسب با مقیاس هر جایگاه",
            "کاهش توقف، خرابی و هزینه‌های نگهداشت از طریق پایش پیشگیرانه تجهیزات",
            "شفاف‌سازی عملیات روزانه، شیفت‌ها و فرآیندها با حداقل وابستگی به نیروی انسانی",
        ],
    },
    {
        id: "psp",
        title: "شرکت‌های پرداخت و فین‌تک",
        icon: LuCreditCard,
        tone: "slate",
        bullets: [
            "توسعه راهکارهای پرداخت تخصصی متناسب با زیرساخت انرژی و سوخت",
            "تسویه، تسهیم و گزارش‌گیری مالی شفاف در سطح جایگاه و شبکه",
            "یکپارچه‌سازی امن و استاندارد با پایانه‌های فروش و سامانه‌های مالی موجود",
        ],
    },
    {
        id: "rnd",
        title: "همکاری تحقیقاتی و دانشگاهی",
        icon: LuMicroscope,
        tone: "purple",
        bullets: [
            "تحلیل کلان‌داده‌های عملیاتی برای استخراج الگوهای مصرف و رفتار شبکه",
            "توسعه الگوریتم‌های هوش مصنوعی و تحلیل پیش‌بینانه در سطح لبه (Edge AI)",
            "پشتیبانی علمی از بهینه‌سازی شبکه توزیع انرژی مبتنی بر داده واقعی میدان",
        ],
    },
];

/* ---------------------------------------------
 * COMPONENT
 * -------------------------------------------*/

export default function CollaborationSection ()
{
    return (
        <section
            id="collaboration"
            className="py-10 md:py-16"
            aria-labelledby="collab-heading"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        اکوسیستم همکاری ملی
                    </span>

                    <h2
                        id="collab-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        مدل همکاری؛ از{ " " }
                        <span className="text-bms-primary">
                            هم‌راستایی منافع
                        </span>{ " " }
                        تا مسئولیت مشترک
                    </h2>

                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ICTS یک بستر زیرساختی برای هم‌راستا کردن منافع رگولاتور،
                        بهره‌بردار، ارائه‌دهنده خدمات و جامعه علمی است؛ با
                        شفافیت داده، معماری بومی و تصمیم‌سازی پایدار.
                    </p>
                </div>

                {/* Grid */ }
                <ul className="grid gap-6 md:grid-cols-2">
                    { collabItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        const tone = toneMap[ item.tone ];

                        return (
                            <li key={ item.id }>
                                <article
                                    className={ `group relative flex h-full flex-col gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ tone.border }` }
                                >
                                    {/* Header */ }
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ tone.bg } ${ tone.text } transition-transform group-hover:scale-105 group-hover:rotate-3` }
                                        >
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                            { item.title }
                                        </h3>
                                    </div>

                                    {/* Bullets */ }
                                    <ul className="space-y-3 border-t border-slate-100 pt-4">
                                        { item.bullets.map( ( point, idx ) => (
                                            <li
                                                key={ idx }
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                            >
                                                <span
                                                    className={ `mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${ tone.bullet } opacity-60` }
                                                />
                                                <span className="text-pretty">
                                                    { point }
                                                </span>
                                            </li>
                                        ) ) }
                                    </ul>

                                    {/* CTA Hint */ }
                                    <div
                                        className={ `mt-auto flex items-center gap-1 text-xs font-medium ${ tone.text } opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100` }
                                    >
                                        <span>شروع همکاری راهبردی</span>
                                        <LuArrowLeft className="h-3 w-3" />
                                    </div>
                                </article>
                            </li>
                        );
                    } ) }
                </ul>
            </div>
        </section>
    );
}
