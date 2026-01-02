// components/home/WorldsGrid.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

// 🧠 DOMAIN MODEL — STRATEGIC & COMPANY-ALIGNED
export type BentoItem = {
    id: number;
    title: string;
    description: string;
    variant: "lg" | "md" | "sm";
    imageSrc: string;
    imageAlt: string;
    href?: string;
};

// 🧠 CORE DOMAINS OF BARMAN (REAL, NON-GENERIC)
const bentoItems: BentoItem[] = [
    // --- ROW 1 & 2 ---

    // 1. LEFT (Big Square 2x2)
    {
        id: 1,
        title: "پلتفرم‌های هسته‌ای و دیجیتال سازمانی",
        description:
            "طراحی پلتفرم‌های بومی و داده‌محور برای اتصال عملیات میدانی، پردازش اطلاعات و تصمیم‌سازی مدیریتی در مقیاس سازمانی و ملی.",
        variant: "lg",
        imageSrc: "/images/worlds/digital-platforms.svg",
        imageAlt: "پلتفرم هسته‌ای دیجیتال و داشبوردهای سازمانی",
    },
    // 2. RIGHT TOP (Wide Rectangle 2x1)
    {
        id: 2,
        title: "سامانه‌های پایش و کنترل صنعتی",
        description:
            "پایش بلادرنگ، کنترل فرآیندها و تجمیع داده‌های میدانی برای زیرساخت‌های حیاتی و محیط‌های حساس عملیاتی.",
        variant: "md",
        imageSrc: "/images/worlds/industry4-smart-infra.svg",
        imageAlt: "سامانه پایش و کنترل صنعتی زیرساخت‌های حیاتی",
    },
    // 3. RIGHT BOTTOM 1 (Small Square 1x1)
    {
        id: 3,
        title: "هوشمندسازی CNG",
        description:
            "راهکار بومی کنترل و مانیتورینگ جایگاه‌های سوخت با تمرکز بر ایمنی.",
        variant: "sm",
        imageSrc: "/images/worlds/energy-monitoring.svg",
        imageAlt: "سامانه هوشمند مدیریت و پایش جایگاه CNG",
        href: "/cng-automation",
    },
    // 4. RIGHT BOTTOM 2 (Small Square 1x1)
    {
        id: 4,
        title: "سلامت دیجیتال",
        description:
            "پلتفرم یکپارچه مدیریت کلینیک‌های زیبایی و پرونده الکترونیک (Clinicans).",
        variant: "sm",
        imageSrc: "/images/worlds/digital-health.svg",
        imageAlt: "پلتفرم مدیریت کلینیک و سلامت دیجیتال",
        href: "/clinicans",
    },

    // --- ROW 3 (Reflowed for Perfect Fit) ---

    // 5. LEFT (Small Square 1x1) - Resized to fit new item
    {
        id: 5,
        title: "هوش تجاری (BI)",
        description:
            "تبدیل داده‌های میدانی به بینش تحلیلی برای مدیران.",
        variant: "sm",
        imageSrc: "/images/worlds/data-dashboards.svg",
        imageAlt: "داشبوردهای تحلیلی و تصمیم‌سازی مدیریتی",
    },
    // 6. MIDDLE (Small Square 1x1) - Resized to fit new item
    {
        id: 6,
        title: "سخت‌افزار بومی",
        description:
            "طراحی بردها و سیستم‌های داخلی جهت استقلال فناوری.",
        variant: "sm",
        imageSrc: "/images/worlds/digitaltransformation.svg",
        imageAlt: "سخت‌افزار بومی و سیستم‌های داخلی صنعتی",
    },
    // 7. NEW ITEM: RIGHT (Wide Rectangle 2x1)
    {
        id: 7,
        title: "هوش مصنوعی، LLM و کلان‌داده",
        description:
            "یکپارچه‌سازی مدل‌های زبانی، پردازش تصویر و تحلیل Big Data در هسته پلتفرم برای خودکارسازی هوشمند فرآیندها.",
        variant: "md",
        imageSrc: "/images/worlds/ai.png", // Ensure this image exists or use a placeholder
        imageAlt: "هوش مصنوعی، پردازش تصویر و تحلیل کلان‌داده",
    },
];

export default function WorldsGrid ()
{
    return (
        <section className="py-10 md:py-16" aria-labelledby="domains-heading">
            <div className="mx-auto max-w-6xl space-y-8 px-4">
                {/* HEADER */ }
                <div className="space-y-3 text-right">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        حوزه‌های تخصصی بارمان
                    </span>
                    <h2
                        id="domains-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        حوزه‌هایی که فناوری بارمان در آن‌ها{ " " }
                        <span className="text-bms-primary">به نتیجه می‌رسد</span>
                    </h2>
                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        بارمان‌محور اسپادانا با تکیه بر یک پلتفرم هسته‌ای بومی، حوزه‌هایی را
                        هدف قرار می‌دهد که دقت، ایمنی و تصمیم‌سازی مبتنی بر داده در آن‌ها
                        حیاتی است؛ از زیرساخت‌های انرژی و صنعت تا سلامت دیجیتال و هوش مصنوعی.
                    </p>
                </div>

                {/* 
                   🧠 PERFECT BENTO GRID LAYOUT 
                   Desktop (md): 4 columns
                   Row 1: 2+2 = 4
                   Row 2: 2(cont) + 1 + 1 = 4
                   Row 3: 1 + 1 + 2 = 4 (New Configuration)
                */}
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]">
                    { bentoItems.map( ( item ) => (
                        <BentoTile key={ item.id } item={ item } />
                    ) ) }
                </ul>
            </div>
        </section>
    );
}

function BentoTile ( { item }: { item: BentoItem; } )
{
    // 🧠 SPAN LOGIC
    const spanClasses = {
        lg: "md:col-span-2 md:row-span-2", // Big Square
        md: "md:col-span-2 md:row-span-1", // Wide Rectangle
        sm: "md:col-span-1 md:row-span-1", // Small Box
    };

    const Wrapper = item.href ? "a" : "div";

    return (
        <li
            className={ cn(
                "group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-bms-primary/30",
                spanClasses[ item.variant ]
            ) }
        >
            <Wrapper href={ item.href } className="block h-full w-full">
                {/* IMAGE */ }
                <div className="absolute inset-0 z-0">
                    <Image
                        src={ item.imageSrc }
                        alt={ item.imageAlt }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={ item.id <= 2 }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* CONTENT */ }
                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-right text-white">
                    <div className="transition-transform duration-300 group-hover:-translate-y-2">
                        <h3 className="text-lg font-bold leading-tight md:text-xl">
                            { item.title }
                        </h3>

                        <div className="mt-3 h-1 w-8 rounded-full bg-bms-accent transition-all duration-300 group-hover:w-full group-hover:bg-white/50" />

                        {/* Description is hidden by default, shown on hover */ }
                        <p className="mt-0 h-0 overflow-hidden text-xs leading-relaxed text-slate-200 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:h-auto group-hover:opacity-100 md:text-sm">
                            { item.description }
                        </p>
                    </div>
                </div>
            </Wrapper>
        </li>
    );
}