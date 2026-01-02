import
{
    LuCpu,
    LuCircuitBoard,
    LuNetwork,
    LuDatabase,
    LuShieldCheck,
    LuActivity
} from "react-icons/lu";

const techHighlights = [
    {
        id: "field-layer",
        title: "لایه میدان و تجهیزات صنعتی",
        description:
            "استفاده از PLCهای صنعتی، کنترلرهای امبدد و سنسورهای میدانی برای پایش فشار، دما، وضعیت شیرها و فرآیند سوخت‌گیری با قابلیت کار مداوم در شرایط سخت محیطی.",
        Icon: LuCircuitBoard,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "hover:border-indigo-200",
        line: "group-hover:via-indigo-200"
    },
    {
        id: "edge-computing",
        title: "پردازش لبه (Edge Computing)",
        description:
            "تحلیل و اعتبارسنجی داده‌ها در نزدیک‌ترین نقطه به میدان برای کاهش تأخیر (Latency)، افزایش پایداری و حفظ عملکرد حتی در صورت قطع ارتباط با مرکز.",
        Icon: LuCpu,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "hover:border-emerald-200",
        line: "group-hover:via-emerald-200"
    },
    {
        id: "industrial-network",
        title: "شبکه ارتباطی صنعتی امن",
        description:
            "ارتباط پایدار و رمزنگاری‌شده بین جایگاه‌ها و مرکز از طریق شبکه‌های صنعتی، VPN و پروتکل‌های امن متناسب با زیرساخت‌های ملی.",
        Icon: LuNetwork,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "hover:border-sky-200",
        line: "group-hover:via-sky-200"
    },
    {
        id: "data-platform",
        title: "پلتفرم داده و سرویس‌های مرکزی",
        description:
            "ذخیره‌سازی، تجمیع و پردازش داده‌های عملیاتی در یک بستر متمرکز و مقیاس‌پذیر؛ آماده تحلیل کلان، گزارش‌گیری حاکمیتی و اتصال به داشبوردهای مدیریتی.",
        Icon: LuDatabase,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "hover:border-violet-200",
        line: "group-hover:via-violet-200"
    },
    {
        id: "security",
        title: "امنیت، احراز هویت و کنترل دسترسی",
        description:
            "پیاده‌سازی سیاست‌های امنیتی چندلایه شامل احراز هویت تجهیزات، ثبت رخداد (Audit Log) و کنترل دسترسی برای انطباق با الزامات پدافند غیرعامل.",
        Icon: LuShieldCheck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "hover:border-amber-200",
        line: "group-hover:via-amber-200"
    },
    {
        id: "realtime-monitoring",
        title: "پایش لحظه‌ای و هشدار هوشمند",
        description:
            "مانیتورینگ 24/7 وضعیت جایگاه‌ها و تجهیزات به‌همراه تولید هشدارهای پیشگیرانه برای جلوگیری از بروز حادثه پیش از وقوع.",
        Icon: LuActivity,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "hover:border-red-200",
        line: "group-hover:via-red-200"
    }
];

export default function TechHighlightsSection ()
{
    return (
        <section
            id="tech-highlights"
            className="py-10 md:py-16"
            aria-labelledby="tech-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-3 text-right">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        مشخصات فنی
                    </span>

                    <h2
                        id="tech-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        معماری <span className="text-bms-primary">فناوری</span> در قلب ICTS
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        ICTS بر پایه یک معماری صنعتی چندلایه طراحی شده است که
                        از میدان تا مرکز، پایداری، امنیت و مقیاس‌پذیری را تضمین می‌کند.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    { techHighlights.map( ( item ) =>
                    {
                        const Icon = item.Icon;
                        return (
                            <article
                                key={ item.id }
                                className={ `group relative flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ item.border }` }
                            >
                                {/* Header */ }
                                <div className="flex items-center justify-between">
                                    <div
                                        className={ `flex h-12 w-12 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <div
                                        className={ `h-px flex-1 mx-4 bg-gradient-to-l from-transparent via-slate-200 to-transparent transition-colors ${ item.line }` }
                                    />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { item.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
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
