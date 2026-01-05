// components/clinicans/ClinicansTechSection.tsx
import
{
    LuCloud,
    LuCpu,
    LuInfinity,
    LuDatabase,
    LuWebhook,
    LuServer,
    LuShieldCheck,

} from "react-icons/lu";

const techBlocks = [
    {
        id: "cloud",
        capability: "Availability & Mobility",
        title: "معماری ابری (Cloud-Native)",
        icon: LuCloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body:
            "دسترسی ایمن به ابزارهای توانمندسازی از هر مکان و هر دستگاه. زیرساخت ابری ما پایداری سرویس و دسترسی همیشگی به داده‌ها را برای تیم درمان تضمین می‌کند.",
    },
    {
        id: "stack",
        capability: "Performance & UX",
        title: "هسته‌ی مدرن و چابک",
        icon: LuCpu,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body:
            "پیاده‌سازی با جدیدترین استانداردهای وب برای پاسخ‌گویی سریع و رابط کاربری روان؛ تا فرآیند توانمندسازی دیجیتال بدون تأخیر فنی انجام شود.",
    },
    {
        id: "db",
        capability: "Scalability",
        title: "پایگاه داده مقیاس‌پذیر",
        icon: LuDatabase,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        border: "group-hover:border-cyan-200",
        body:
            "طراحی شده برای نگهداری ایمن حجم بالای پرونده‌های الکترونیک و داده‌های مالی، با تمرکز بر دقت، امنیت و رشد بلندمدت مرکز درمانی.",
    },
    {
        id: "api",
        capability: "Integration-Ready",
        title: "معماری API-First",
        icon: LuWebhook,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "group-hover:border-violet-200",
        body:
            "آماده اتصال به سرویس‌های بیرونی (بیمه، آزمایشگاه، پرداخت). این پلتفرم توانمندسازی، جزیره‌ای نیست و به اکوسیستم سلامت متصل می‌شود.",
    },
];

export default function ClinicansTechSection ()
{
    return (
        <section
            id="clinicans-tech"
            className="py-10 md:py-16 bg-slate-50/50"
            aria-labelledby="tech-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-14 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-200/50 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300">
                        <LuShieldCheck className="h-3.5 w-3.5" />
                        <span>فواید زیرساختی پلتفرم</span>
                    </div>
                    <h2
                        id="tech-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        فواید فنی <span className="text-bms-primary">پلتفرم توانمندسازی دیجیتال</span>
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base">
                        ما کلینیکانز را به عنوان یک <strong className="text-slate-900">پلتفرم توانمندسازی دیجیتال</strong> مهندسی کرده‌ایم؛ زیرساختی که امنیت، سرعت و پایداری لازم برای هوشمندسازی مراکز درمانی بزرگ را فراهم می‌کند.
                    </p>
                </div>

                {/* Tech Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { techBlocks.map( ( block ) =>
                    {
                        const Icon = block.icon;
                        return (
                            <article
                                key={ block.id }
                                className={ `group relative flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ block.border }` }
                            >
                                {/* Icon */ }
                                <div
                                    className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ block.bg } ${ block.color } shadow-sm transition-transform group-hover:scale-110` }
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { block.title }
                                    </h3>

                                    {/* Capability Tag */ }
                                    <span className="inline-flex w-fit rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 border border-slate-200">
                                        { block.capability }
                                    </span>

                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { block.body }
                                    </p>
                                </div>

                                {/* Subtle Decoration */ }
                                <div className="absolute top-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                                    <LuServer className="h-4 w-4 text-slate-200" />
                                </div>
                            </article>
                        );
                    } ) }
                </div>
                {/* 
                    🧠 SYSTEM SUMMARY BLOCK (Scalable Architecture)
                */}
                <div className="mt-20 lg:mt-28 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4">

                        {/* Inner Container */ }
                        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                                    <LuInfinity className="h-10 w-10" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-3">
                                <h4 className="text-lg font-bold text-slate-900">
                                    معماری برای توانمندسازی پایدار
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 leading-8 text-justify">
                                    زیرساخت فنی این پلتفرم تضمین می‌کند که
                                    <strong className="text-slate-900 font-bold"> توانمندسازی دیجیتال </strong>
                                    مجموعه شما با رشد تعداد مراجعین متوقف نشود. سیستم در
                                    <span className="text-indigo-700 font-medium"> ساعات شلوغ پایدار می‌ماند </span>
                                    و
                                    <span className="text-indigo-700 font-medium"> به سادگی با نیازهای آینده منطبق می‌شود </span>
                                    — بدون نیاز به بازطراحی یا مهاجرت‌های پرهزینه.
                                </p>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}