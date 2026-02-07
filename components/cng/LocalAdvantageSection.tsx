import { LuMapPin, LuShieldCheck, LuGem } from "react-icons/lu";

const advantages = [
    {
        id: "native",
        title: "طراحی بومی مبتنی بر واقعیت میدان",
        icon: LuMapPin,
        description:
            "سامانه ICTS بازتولید یا بومی‌سازی یک راهکار خارجی نیست؛ بلکه از مرحله طراحی اولیه، بر اساس شرایط واقعی بهره‌برداری، محدودیت‌های زیرساختی، الگوهای مصرف و الزامات ایمنی جایگاه‌های CNG کشور مهندسی شده است. این رویکرد، کارایی عملیاتی و پایداری سیستم را در مقیاس ملی تضمین می‌کند.",
    },
    {
        id: "support",
        title: "امنیت راهبردی و پشتیبانی پایدار داخلی",
        icon: LuShieldCheck,
        description:
            "چرخه کامل توسعه، نگه‌داری، پشتیبانی و ارتقاء ICTS به‌صورت کامل در داخل کشور انجام می‌شود. این موضوع نه‌تنها انطباق با الزامات پدافند غیرعامل را ممکن می‌سازد، بلکه وابستگی به فناوری‌های تحریم‌پذیر، سرویس‌های خارجی و ریسک قطع پشتیبانی را به‌طور بنیادین حذف می‌کند.",
    },
    {
        id: "asset",
        title: "دارایی زیرساختی بلندمدت، نه هزینه مقطعی",
        icon: LuGem,
        description:
            "ICTS یک پروژه کوتاه‌مدت یا هزینه مصرفی نیست؛ بلکه دارایی زیرساختی قابل توسعه‌ای است که با فرآیندها، زبان عملیاتی و نیازهای راهبردی صنعت گاز کشور هم‌راستا طراحی شده و قابلیت انطباق با سیاست‌ها، فناوری‌ها و الزامات آینده را دارد.",
    },
];

export default function LocalAdvantageSection ()
{
    return (
        <section
            id="local-advantage"
            aria-labelledby="local-heading"
            className="py-24 md:py-32 bg-white"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <span className="inline-block rounded-md bg-bms-primary/10 px-4 py-1.5 text-xs font-bold text-bms-primary">
                        مزیت رقابتی بومی
                    </span>

                    <h2
                        id="local-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        چرا{ " " }
                        <span className="text-bms-primary">
                            توانمندی بومی
                        </span>{ " " }
                        یک الزام راهبردی است؟
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        در زیرساخت‌های حیاتی انرژی،
                        <strong className="mx-1 text-bms-primary font-bold">
                            بومی‌بودن
                        </strong>
                        یک انتخاب تبلیغاتی نیست؛ بلکه پیش‌شرط تداوم سرویس،
                        امنیت داده، تاب‌آوری سامانه و امکان حکمرانی فناورانه
                        در شرایط عادی و بحرانی است.
                    </p>
                </header>

                {/* ================= PILLARS ================= */ }
                <div className="grid gap-12 md:grid-cols-3">
                    { advantages.map( ( item, index ) =>
                    {
                        const Icon = item.icon;

                        return (
                            <article
                                key={ item.id }
                                className="relative flex flex-col rounded-[2.75rem] bg-slate-50 p-8 md:p-10 border border-slate-200"
                            >
                                {/* Pillar index */ }
                                <div className="absolute -top-6 right-8 text-6xl font-black text-slate-200 select-none">
                                    { index + 1 }
                                </div>

                                {/* Icon */ }
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-bms-primary shadow-sm">
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-4 text-right">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                        { item.title }
                                    </h3>

                                    <p className="text-sm md:text-[15px] leading-7 text-slate-600 text-justify">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Base line */ }
                                <div
                                    className="mt-8 h-1 w-16 rounded-full bg-bms-primary"
                                    aria-hidden
                                />
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
