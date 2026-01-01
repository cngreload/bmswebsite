// components/home/WorldsGrid.tsx
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming utils exist, or I can inline clsx

// 🧠 CRAWLER EMPATHY: Enhanced Data Structure
// Added 'description' and 'keywords' context to feed the algorithm.
export type BentoItem = {
    id: number;
    title: string;
    description: string; // New SEO field
    variant: "lg" | "md" | "sm";
    imageSrc: string;
    imageAlt: string;
    href?: string; // Potential for internal linking
};

const bentoItems: BentoItem[] = [
    {
        id: 1,
        title: "توسعه پلتفرم‌های دیجیتال",
        description: "معماری میکروسرویس و راهکارهای ابری برای مقیاس‌پذیری سازمانی.",
        variant: "lg",
        imageSrc: "/images/worlds/digital-platforms.svg",
        imageAlt: "داشبورد مدیریت پلتفرم‌های دیجیتال و نرم‌افزار سازمانی",
    },
    {
        id: 2,
        title: "صنعت ۴.۰ و IoT صنعتی",
        description: "اتصال ماشین‌آلات به شبکه (IIoT) و مانیتورینگ بلادرنگ خطوط تولید.",
        variant: "md",
        imageSrc: "/images/worlds/industry4-smart-infra.svg",
        imageAlt: "نمای گرافیکی از کارخانه هوشمند و صنعت نسل چهارم",
    },
    {
        id: 3,
        title: "اتوماسیون فرایندهای کسب‌وکار",
        description: "حذف کاغذبازی و دیجیتالی‌سازی گردش کار (BPMS) در سازمان‌ها.",
        variant: "sm",
        imageSrc: "/images/worlds/business-automation.svg",
        imageAlt: "فلوچارت و نمودارهای اتوماسیون اداری",
    },
    {
        id: 4,
        title: "سلامت دیجیتال (E-Health)",
        description: "پرونده الکترونیک و مدیریت هوشمند مراکز درمانی (Clinicans).",
        variant: "sm",
        imageSrc: "/images/worlds/digital-health.svg",
        imageAlt: "رابط کاربری نرم‌افزار پزشکی و سلامت",
    },
    {
        id: 5,
        title: "پایش و مدیریت انرژی",
        description: "کاهش هدررفت انرژی با سنسورهای هوشمند و تحلیل الگوی مصرف.",
        variant: "sm",
        imageSrc: "/images/worlds/energy-monitoring.svg",
        imageAlt: "نمودارهای مصرف انرژی و پنل‌های خورشیدی هوشمند",
    },
    {
        id: 6,
        title: "خانه و ساختمان هوشمند",
        description: "BMS و کنترل یکپارچه تاسیسات برای آسایش و امنیت ساکنین.",
        variant: "sm",
        imageSrc: "/images/worlds/smart-home.svg",
        imageAlt: "آیکون‌های کنترل خانه هوشمند و اینترنت اشیاء",
    },
    {
        id: 7,
        title: "هوش تجاری (BI) و داشبوردها",
        description: "تبدیل داده‌های خام به بینش استراتژیک برای مدیران ارشد.",
        variant: "md",
        imageSrc: "/images/worlds/data-dashboards.svg",
        imageAlt: "داشبوردهای تحلیلی و نمودارهای رشد کسب‌وکار",
    },
    {
        id: 8,
        title: "سخت‌افزار و نرم‌افزار بومی",
        description: "طراحی بردها و میکروکدهای اختصاصی برای استقلال تکنولوژیک.",
        variant: "sm",
        imageSrc: "/images/worlds/digitaltransformation.svg",
        imageAlt: "مدارچاپی و کدنویسی سخت‌افزار بومی",
    },
];

export default function WorldsGrid ()
{
    return (
        <section className="py-10 md:py-16" aria-labelledby="domains-heading">
            <div className="mx-auto max-w-6xl space-y-8 px-4">
                {/* Header - SEO Optimized Structure */ }
                <div className="space-y-3 text-right">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        اکوسیستم فناوری
                    </span>
                    <h2
                        id="domains-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        جهان‌هایی که فناوری بارمان در آن‌ها <span className="text-bms-primary">نفس می‌کشد</span>
                    </h2>
                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ما مرزهای سنتی بین سخت‌افزار و نرم‌افزار را حذف می‌کنیم. از <strong>پلتفرم‌های دیجیتال</strong> تا <strong>اتوماسیون صنعتی</strong>،
                        بارمان یک هسته‌ی مشترک دارد: هوشمندسازی دارایی‌ها برای خلق ارزش افزوده.
                    </p>
                </div>

                {/* 
          ⚡ PERFORMANCE: 
          - Semantic <ul> list for accessibility.
          - CSS Grid for layout stability (Zero CLS).
        */}
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:auto-rows-[180px] lg:auto-rows-[220px]">
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
    // Grid Span Logic based on 'variant'
    const spanClasses = {
        lg: "md:col-span-3 md:row-span-2",
        md: "md:col-span-3 md:row-span-1",
        sm: "md:col-span-2 md:row-span-1",
    };

    return (
        <li className={ cn(
            "group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-bms-primary/30",
            spanClasses[ item.variant ]
        ) }>
            {/* 
        ⚡ IMAGE OPTIMIZATION: 
        - 'sizes' prop is critical for grid layouts to prevent downloading huge images for small slots.
      */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src={ item.imageSrc }
                    alt={ item.imageAlt }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                    priority={ item.id <= 2 } // Prioritize LCP candidates
                />
                {/* Gradient Overlay for Text Readability */ }
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            </div>

            {/* 
        🎨 UX: Progressive Disclosure
        - Title is always visible.
        - Description slides up on hover.
      */}
            <div className="relative z-10 flex h-full flex-col justify-end p-5 text-right text-white">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-bold leading-tight md:text-xl">
                        { item.title }
                    </h3>

                    {/* Decorative Line */ }
                    <div className="mt-3 h-1 w-8 rounded-full bg-bms-accent transition-all duration-300 group-hover:w-full group-hover:bg-white/50" />

                    {/* SEO Content: Visible on Hover */ }
                    <p className="mt-0 h-0 overflow-hidden text-xs leading-relaxed text-slate-200 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:h-auto group-hover:opacity-100 md:text-sm">
                        { item.description }
                    </p>
                </div>
            </div>
        </li>
    );
}