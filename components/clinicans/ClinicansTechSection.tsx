// components/clinicans/ClinicansTechSection.tsx
import
{
    LuCloud,
    LuCpu,
    LuDatabase,
    LuWebhook,
    LuServer,
    LuGitMerge,
} from "react-icons/lu";

const techBlocks = [
    {
        id: "cloud",
        capability: "Availability & Mobility",
        title: "معماری تحت‌وب و Cloud-Native",
        icon: LuCloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body:
            "دسترسی ایمن به سیستم از هر مکان و هر دستگاه، بدون نیاز به نصب سرور محلی. زیرساخت ابری، پایداری سرویس و سهولت توسعه را تضمین می‌کند.",
    },
    {
        id: "stack",
        capability: "Performance & UX",
        title: "هسته‌ی مدرن نرم‌افزار",
        icon: LuCpu,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body:
            "پیاده‌سازی با معماری مدرن وب برای پاسخ‌گویی سریع، رابط کاربری روان و تجربه‌ای بدون تأخیر — حتی در ساعات پرترافیک کلینیک.",
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
            "طراحی شده برای نگهداری و جستجوی سریع حجم بالای داده‌های پزشکی و مالی، با تمرکز بر دقت، پایداری و رشد بلندمدت.",
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
            "آماده اتصال به سرویس‌های بیرونی مانند سامانه‌های بیمه، آزمایشگاه‌ها، درگاه‌های پرداخت و پیامک. بدون قفل‌شدگی به یک مسیر بسته.",
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
                    <span className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300 font-mono">
                        Tech Architecture
                    </span>

                    <h2
                        id="tech-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        زیرساخت فنی و <span className="text-bms-primary">معماری سیستم</span>
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base">
                        کلینیکانز به‌عنوان یک{ " " }
                        <strong className="text-slate-900">
                            پلتفرم SaaS سلامت
                        </strong>{ " " }
                        طراحی شده است؛ با تمرکز بر پایداری، مقیاس‌پذیری و
                        تجربه کاربری قابل اتکا برای محیط‌های درمانی.
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

                {/* Architecture Summary */ }
                <div className="mt-14 text-right">
                    <div className="inline-flex items-start gap-4 rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
                        <div className="mt-1 text-bms-primary">
                            <LuGitMerge className="h-5 w-5" />
                        </div>
                        <p className="max-w-3xl text-sm md:text-base text-slate-600 leading-7">
                            نتیجه این معماری، سیستمی است که با رشد کلینیک شما
                            بزرگ می‌شود، در ساعات شلوغ پایدار می‌ماند و
                            به‌راحتی با سرویس‌های جدید یکپارچه می‌شود —
                            بدون نیاز به بازطراحی یا مهاجرت‌های پرهزینه.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
