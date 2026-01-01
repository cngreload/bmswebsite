// components/clinicans/ClinicansTechSection.tsx
import
{
    LuCloud,
    LuCpu,
    LuDatabase,
    LuWebhook,
    LuServer
} from "react-icons/lu";

const techBlocks = [
    {
        id: "cloud",
        title: "معماری تحت‌وب و Cloud-Ready",
        icon: LuCloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body: "دسترسی از هر مکان و هر دستگاه (Anywhere, Anytime). بدون نیاز به نصب سرور فیزیکی در مطب و دغدغه‌های نگهداری سخت‌افزار."
    },
    {
        id: "stack",
        title: "هسته‌ی مدرن (Modern Stack)",
        icon: LuCpu,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body: "توسعه یافته با جدیدترین تکنولوژی‌های وب (Next.js & React). رابط کاربری سریع، واکنش‌گرا (Responsive) و تجربه کاربری روان."
    },
    {
        id: "db",
        title: "پایگاه داده مقیاس‌پذیر",
        icon: LuDatabase,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        border: "group-hover:border-cyan-200",
        body: "طراحی دیتابیس برای حجم عظیم داده‌های پزشکی. بهینه‌سازی شده برای جستجوی سریع در میلیون‌ها رکورد پرونده و تراکنش مالی."
    },
    {
        id: "api",
        title: "آماده برای اتصال (API-First)",
        icon: LuWebhook,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "group-hover:border-violet-200",
        body: "معماری باز برای اتصال به سایر سرویس‌ها. یکپارچگی آسان با سامانه‌های بیمه، آزمایشگاه‌ها، درگاه‌های پرداخت و پنل‌های پیامکی."
    }
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
                <div className="mb-12 text-right space-y-4">
                    <span className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300 font-mono">
                        Tech Specs
                    </span>
                    <h2
                        id="tech-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        زیرساخت فنی و <span className="text-bms-primary">تکنولوژی</span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base">
                        ما کلینیکانز را نه فقط به عنوان یک نرم‌افزار، بلکه به عنوان یک
                        <strong className="text-slate-900 mx-1">اکوسیستم دیجیتال</strong> مهندسی کرده‌ایم.
                        پایداری، سرعت و امنیت، در DNA کدهای ماست.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { techBlocks.map( ( block ) =>
                    {
                        const Icon = block.icon;
                        return (
                            <article
                                key={ block.id }
                                className={ `group relative flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ block.border }` }
                            >
                                {/* Tech Icon */ }
                                <div className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ block.bg } ${ block.color } shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6` }>
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { block.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { block.body }
                                    </p>
                                </div>

                                {/* Tech Decoration */ }
                                <div className="absolute top-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                                    <LuServer className="h-4 w-4 text-slate-200" />
                                </div>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}