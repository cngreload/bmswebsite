import
{
    LuTriangleAlert,
    LuFileX,
    LuShieldCheck
} from "react-icons/lu";

const necessityPoints = [
    {
        id: "risk",
        title: "تلاقی زیرساخت حیاتی با زندگی روزمره",
        icon: LuTriangleAlert,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        description:
            "جایگاه‌های CNG تنها یک تأسیسات صنعتی نیستند؛ بلکه نقطه تماس مستقیم انرژی پرفشار با شهروندان در بطن شهرها هستند. هر نقص فنی، خطای انسانی یا تأخیر در تشخیص—even در سطح محدود—می‌تواند به حوادث جانی، خسارات اقتصادی گسترده و خدشه‌دار شدن اعتماد عمومی منجر شود."
    },
    {
        id: "manual",
        title: "بن‌بست نظارت سنتی و گزارش‌های غیرقابل اتکا",
        icon: LuFileX,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-100",
        description:
            "در شبکه‌ای متشکل از هزاران جایگاه فعال، اتکا به بازدیدهای دوره‌ای، چک‌لیست‌های کاغذی و گزارش‌های دستی، عملاً به «نابینایی مدیریتی» منجر می‌شود. ایمنی واقعی نیازمند داده‌های لحظه‌ای، قابل ممیزی و مبتنی بر شواهد است؛ نه برداشت‌های مقطعی و تأخیردار."
    },
    {
        id: "solution",
        title: "زیرساخت پیشگیرانه، نه واکنش پس از حادثه",
        icon: LuShieldCheck,
        color: "text-bms-primary",
        bg: "bg-blue-50",
        border: "border-blue-100",
        description:
            "ICTS هوشمندسازی را از یک انتخاب اختیاری یا پروژه مقطعی، به یک استاندارد عملیاتی دائمی تبدیل می‌کند؛ سامانه‌ای که به‌صورت پیوسته پایش می‌کند، داده معتبر ثبت می‌نماید و پیش از وقوع حادثه، امکان هشدار، مداخله و پیشگیری مؤثر را فراهم می‌سازد."
    }
];

export default function NecessitySection ()
{
    return (
        <section
            id="necessity"
            className="py-10 md:py-16"
            aria-labelledby="necessity-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-red-50 px-3 py-1 text-xs font-bold text-red-600 border border-red-100">
                        چرایی هوشمندسازی
                    </span>

                    <h2
                        id="necessity-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl leading-tight"
                    >
                        یک{ " " }
                        <span className="text-red-600 underline decoration-red-200 underline-offset-4">
                            ضرورت ایمنی و حاکمیتی
                        </span>
                        ،<br className="hidden md:block" />
                        نه یک انتخاب فناورانه
                    </h2>

                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        در زیرساخت‌هایی که مستقیماً با جان شهروندان، امنیت انرژی و اعتماد
                        اجتماعی گره خورده‌اند، روش‌های سنتی و واکنشی دیگر پاسخگو نیستند.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { necessityPoints.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.id }
                                className={ `group relative flex flex-col items-start gap-4 rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ item.border }` }
                            >
                                {/* Icon */ }
                                <div
                                    className={ `flex h-14 w-14 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } transition-transform group-hover:scale-110 group-hover:rotate-3` }
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-3 text-right">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { item.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Accent Bar */ }
                                <div
                                    className={ `absolute bottom-0 inset-x-8 h-1 rounded-t-full ${ item.bg.replace(
                                        "bg-",
                                        "bg-opacity-60 "
                                    ) } opacity-0 transition-opacity duration-300 group-hover:opacity-100` }
                                />
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
