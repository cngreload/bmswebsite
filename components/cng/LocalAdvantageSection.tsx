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
            className="py-10 md:py-16 bg-slate-50/50"
            aria-labelledby="local-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-10 space-y-3 text-right">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        مزیت رقابتی بومی
                    </span>

                    <h2
                        id="local-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        چرا <span className="text-bms-primary">توانمندی بومی</span> یک الزام راهبردی است؟
                    </h2>

                    <p className="ml-auto max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                        در زیرساخت‌های حیاتی انرژی،
                        <strong className="mx-1 text-bms-primary font-bold">
                            بومی‌بودن
                        </strong>
                        یک انتخاب اختیاری یا مزیت تبلیغاتی نیست؛
                        بلکه پیش‌شرط تداوم سرویس، امنیت داده،
                        تاب‌آوری سامانه و امکان حکمرانی فناورانه در شرایط عادی و بحرانی است.
                    </p>
                </div>

                {/* Advantages Grid */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { advantages.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.id }
                                className="group relative flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-bms-primary/20"
                            >
                                {/* Icon */ }
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-bms-primary group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { item.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Bottom Accent */ }
                                <div className="absolute inset-x-6 bottom-0 h-1 scale-x-0 rounded-t-full bg-bms-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
