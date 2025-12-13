"use client";

import { useEffect, useState } from "react";
import
{
    SiLaravel,
    SiSharp,
    SiNextdotjs,
    SiDotnet,
    SiPostgresql,
    SiTailwindcss,
    SiPrisma,
    SiDocker,
    SiRedis,
} from "react-icons/si";
import { LuCpu } from "react-icons/lu";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type TechItem = {
    id: number;
    name: string;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string; }>;
};

const techItems: TechItem[] = [
    {
        id: 1,
        name: "Laravel",
        label: "Laravel",
        description: "هسته‌ی وب‌سرویس‌ها و پلتفرم‌های کسب‌وکار",
        icon: SiLaravel,
    },
    {
        id: 2,
        name: "CSharp",
        label: "C#",
        description: "توسعه‌ی صنعتی و یکپارچه‌سازی سامانه‌ها",
        icon: SiSharp,
    },
    {
        id: 3,
        name: "Microcoding",
        label: "Microcoding / Firmware",
        description: "طراحی میکروکد کنترلرهای صنعتی و سامانه‌های میدانی",
        icon: LuCpu,
    },
    {
        id: 4,
        name: "Next.js",
        label: "Next.js",
        description: "فرانت‌اند مدرن، SEO-Ready و مقیاس‌پذیر",
        icon: SiNextdotjs,
    },
    {
        id: 5,
        name: ".NET",
        label: ".NET",
        description: "زیرساخت نرم‌افزاری سازمانی و صنعتی",
        icon: SiDotnet,
    },
    {
        id: 6,
        name: "PostgreSQL",
        label: "PostgreSQL",
        description: "پایگاه داده‌ی ساخت‌یافته، پایدار و قابل اتکا",
        icon: SiPostgresql,
    },
    {
        id: 7,
        name: "Tailwind",
        label: "Tailwind CSS",
        description: "رابط‌های کاربری مینیمال و پاسخ‌گو",
        icon: SiTailwindcss,
    },
    {
        id: 8,
        name: "Prisma",
        label: "Prisma",
        description: "لایه‌ی مدرن دسترسی به داده و مدل‌سازی",
        icon: SiPrisma,
    },
    {
        id: 9,
        name: "Docker",
        label: "Docker",
        description: "استقرار کانتینری و محیط‌های تکرارپذیر",
        icon: SiDocker,
    },
    {
        id: 10,
        name: "Redis",
        label: "Redis",
        description: "کش، صف و پردازش سبک داده‌ها",
        icon: SiRedis,
    },
];

const CARD_COUNT = 3;
const BASE_INTERVAL_MS = 4500;
const CARD_STAGGER_MS = 1000;

export default function TechStrip ()
{
    const [ cardIndices, setCardIndices ] = useState<number[]>( () =>
        Array.from( { length: CARD_COUNT }, ( _, i ) => i ),
    );

    useEffect( () =>
    {
        const intervals = Array.from( { length: CARD_COUNT }, ( _, cardIdx ) =>
        {
            const delay = BASE_INTERVAL_MS + cardIdx * CARD_STAGGER_MS;
            return window.setInterval( () =>
            {
                setCardIndices( ( prev ) =>
                    prev.map( ( val, idx ) =>
                        idx === cardIdx ? ( val + 1 ) % techItems.length : val,
                    ),
                );
            }, delay );
        } );

        return () =>
        {
            intervals.forEach( ( id ) => clearInterval( id ) );
        };
    }, [] );

    const visibleItems = cardIndices.map(
        ( itemIndex ) => techItems[ itemIndex ] as TechItem,
    );

    return (
        <section className="border-t border-slate-100 bg-white py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-5 flex items-center justify-between gap-2">
                    <div className="text-xs font-medium tracking-wide text-slate-600 md:text-sm">
                        پشته‌ی فناوری بارمان
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    { visibleItems.map( ( item, cardIndex ) =>
                    {
                        const Icon = item.icon;
                        const key = `${ cardIndex }-${ item.id }`;

                        return (
                            <BackgroundGradient
                                key={ key }
                                containerClassName="h-full"
                                className="flex h-full flex-col items-center justify-start rounded-[22px] bg-white px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6"
                            >
                                {/* icon */ }
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm sm:h-12 sm:w-12">
                                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>

                                {/* label + description */ }
                                <div className="space-y-1">
                                    <div className="text-xs font-semibold text-bms-dark sm:text-sm">
                                        { item.label }
                                    </div>
                                    <div className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                                        { item.description }
                                    </div>
                                </div>
                            </BackgroundGradient>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
