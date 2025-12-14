import Image from "next/image";

export type BentoItem = {
    id: number;
    title: string;
    variant: "lg" | "md" | "sm";
    imageSrc: string;
    imageAlt: string;
};

const bentoItems: BentoItem[] = [
    {
        id: 1,
        title: "پلتفرم‌های دیجیتال",
        variant: "lg",
        imageSrc: "/images/worlds/digital-platforms.svg",
        imageAlt: "پلتفرم‌های دیجیتال",
    },
    {
        id: 2,
        title: "صنعت ۴ و زیرساخت‌های هوشمند",
        variant: "md",
        imageSrc: "/images/worlds/industry4-smart-infra.svg",
        imageAlt: "صنعت ۴ و زیرساخت‌های هوشمند",
    },
    {
        id: 3,
        title: "اتوماسیون کسب‌وکار",
        variant: "sm",
        imageSrc: "/images/worlds/business-automation.svg",
        imageAlt: "اتوماسیون کسب‌وکار",
    },
    {
        id: 4,
        title: "سلامت دیجیتال و کلینیک‌های هوشمند",
        variant: "sm",
        imageSrc: "/images/worlds/digital-health.svg",
        imageAlt: "سلامت دیجیتال و کلینیک‌های هوشمند",
    },
    {
        id: 5,
        title: "پایش انرژی",
        variant: "sm",
        imageSrc: "/images/worlds/energy-monitoring.svg",
        imageAlt: "پایش انرژی",
    },
    {
        id: 6,
        title: "خانه و زندگی هوشمند",
        variant: "sm",
        imageSrc: "/images/worlds/smart-home.svg",
        imageAlt: "خانه و زندگی هوشمند",
    },
    {
        id: 7,
        title: "داشبوردها و تصمیم‌سازی مبتنی بر داده",
        variant: "md",
        imageSrc: "/images/worlds/data-dashboards.svg",
        imageAlt: "داشبوردها و تصمیم‌سازی مبتنی بر داده",
    },
    {
        id: 8,
        title: "راهکارهای ماژولار بر بستر سخت‌افزار و نرم‌افزار بومی",
        variant: "sm",
        imageSrc: "/images/worlds/modular-native-solutions.svg",
        imageAlt: "راهکارهای ماژولار",
    },
];

export default function WorldsGrid ()
{
    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto max-w-6xl space-y-6">
                {/* Header */ }
                <div className="space-y-2 text-right">
                    <p className="text-[11px] md:text-xs font-medium text-bms-primary">
                        حوزه‌های فناوری و نوآوری بارمان
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold text-bms-dark">
                        جهان‌هایی که فناوری بارمان در آن‌ها نفس می‌کشد
                    </h2>
                    <p className="max-w-3xl ml-auto text-xs md:text-sm leading-relaxed text-slate-600">
                        از پلتفرم‌های دیجیتال تا اتوماسیون صنعت و زندگی روزمره، بارمان یک
                        هسته‌ی مشترک دارد: هوشمندسازی دارایی‌ها، فرآیندها و تجربه‌ی انسان.
                    </p>
                </div>

                {/* Bento Grid */ }
                <div className="mt-4 grid gap-3 md:grid-cols-6 auto-rows-[110px] md:auto-rows-[140px] lg:auto-rows-[160px]">
                    { bentoItems.map( ( item ) => (
                        <BentoTile key={ item.id } item={ item } />
                    ) ) }
                </div>
            </div>
        </section>
    );
}

function BentoTile ( { item }: { item: BentoItem; } )
{
    let sizeClasses = "md:col-span-3 md:row-span-1"; // default (md)
    if ( item.variant === "lg" ) sizeClasses = "md:col-span-3 md:row-span-2";
    else if ( item.variant === "sm" ) sizeClasses = "md:col-span-2 md:row-span-1";

    return (
        <article
            className={ `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft-lg ${ sizeClasses }` }
        >
            {/* Background image (width/height provided) */ }
            <div className="pointer-events-none absolute inset-0">
                <Image
                    src={ item.imageSrc }
                    alt={ item.imageAlt }
                    width={ 1600 }
                    height={ 900 }
                    priority={ item.id <= 2 }
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            {/* Content */ }
            <div className="relative z-10 flex h-full flex-col items-end justify-end p-4 md:p-5 text-right">
                <div className="max-w-[90%] rounded-xl bg-white/75 backdrop-blur-md px-3 py-2 ring-1 ring-black/5 shadow-sm">
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold text-bms-dark leading-relaxed">
                        { item.title }
                    </h3>
                    <div className="mt-1 flex w-full justify-end">
                        <span className="h-[2px] w-0 rounded-full bg-bms-accent transition-all duration-200 group-hover:w-16" />
                    </div>
                </div>
            </div>
        </article>
    );
}
