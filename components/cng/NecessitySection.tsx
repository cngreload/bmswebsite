import
{
    LuTriangleAlert,
    LuFileX,
    LuShieldCheck,
} from "react-icons/lu";

/* ================= TYPES ================= */
type Tone = "amber" | "red" | "primary";

interface NecessityPoint
{
    id: string;
    title: string;
    icon: React.ElementType;
    tone: Tone;
    description: string;
}

/* ================= DATA ================= */
const necessityPoints: NecessityPoint[] = [
    {
        id: "risk",
        title: "تلاقی زیرساخت حیاتی با زندگی روزمره",
        icon: LuTriangleAlert,
        tone: "amber",
        description:
            "جایگاه‌های CNG تنها یک تأسیسات صنعتی نیستند؛ بلکه نقطه تماس مستقیم انرژی پرفشار با شهروندان در بطن شهرها هستند. هر نقص فنی، خطای انسانی یا تأخیر در تشخیص—even در سطح محدود—می‌تواند به حوادث جانی، خسارات اقتصادی گسترده و خدشه‌دار شدن اعتماد عمومی منجر شود.",
    },
    {
        id: "manual",
        title: "بن‌بست نظارت سنتی و گزارش‌های غیرقابل اتکا",
        icon: LuFileX,
        tone: "red",
        description:
            "در شبکه‌ای متشکل از هزاران جایگاه فعال، اتکا به بازدیدهای دوره‌ای، چک‌لیست‌های کاغذی و گزارش‌های دستی، عملاً به «نابینایی مدیریتی» منجر می‌شود. ایمنی واقعی نیازمند داده‌های لحظه‌ای، قابل ممیزی و مبتنی بر شواهد است؛ نه برداشت‌های مقطعی و تأخیردار.",
    },
    {
        id: "solution",
        title: "زیرساخت پیشگیرانه، نه واکنش پس از حادثه",
        icon: LuShieldCheck,
        tone: "primary",
        description:
            "ICTS هوشمندسازی را از یک انتخاب اختیاری یا پروژه مقطعی، به یک استاندارد عملیاتی دائمی تبدیل می‌کند؛ سامانه‌ای که به‌صورت پیوسته پایش می‌کند، داده معتبر ثبت می‌نماید و پیش از وقوع حادثه، امکان هشدار، مداخله و پیشگیری مؤثر را فراهم می‌سازد.",
    },
];

/* ================= TONE MAP ================= */
const toneMap: Record<Tone, { bg: string; text: string; }> = {
    amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
    },
    red: {
        bg: "bg-red-50",
        text: "text-red-600",
    },
    primary: {
        bg: "bg-blue-50",
        text: "text-bms-primary",
    },
};

export default function NecessitySection ()
{
    return (
        <section
            id="necessity"
            aria-labelledby="necessity-heading"
            className="relative py-20 md:py-28 bg-white"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <span className="inline-flex rounded-md bg-red-50 px-4 py-1.5 text-xs font-bold text-red-600 border border-red-100">
                        چرایی هوشمندسازی
                    </span>

                    <h2
                        id="necessity-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900"
                    >
                        یک{ " " }
                        <span className="text-red-600 underline decoration-red-200 underline-offset-6">
                            ضرورت ایمنی و حاکمیتی
                        </span>
                        ،
                        <br className="hidden sm:block" />
                        نه یک انتخاب فناورانه
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-slate-600">
                        در زیرساخت‌هایی که مستقیماً با جان شهروندان، امنیت انرژی و اعتماد
                        اجتماعی گره خورده‌اند، روش‌های سنتی و واکنشی دیگر پاسخگو نیستند.
                    </p>
                </header>

                {/* ================= ESCALATION FLOW ================= */ }
                <div className="space-y-12">
                    { necessityPoints.map( ( item, index ) =>
                    {
                        const Icon = item.icon;
                        const tone = toneMap[ item.tone ];

                        return (
                            <article
                                key={ item.id }
                                className="relative flex flex-col md:flex-row gap-6 md:gap-10 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 md:px-8"
                            >
                                {/* Step indicator */ }
                                <div className="hidden md:flex absolute -right-4 top-8 h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-500">
                                    { index + 1 }
                                </div>

                                {/* Icon */ }
                                <div
                                    className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${ tone.bg } ${ tone.text }` }
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-3 text-right">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                        { item.title }
                                    </h3>

                                    <p className="text-sm md:text-base leading-8 text-slate-600">
                                        { item.description }
                                    </p>
                                </div>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
