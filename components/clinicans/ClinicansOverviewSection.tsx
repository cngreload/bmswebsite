// components/clinicans/ClinicansOverviewSection.tsx
import
{
    LuCalendarDays,
    LuFileHeart,
    LuCoins,
    LuTrendingUp,
    LuLayers
} from "react-icons/lu";

const overviewItems = [
    {
        id: "scheduling",
        title: "نوبت‌دهی و پذیرش",
        icon: LuCalendarDays,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        description: "سیستم نوبت‌دهی یکپارچه برای مدیریت رزروها، صف انتظار و برنامه‌ی پزشکان. حذف تداخل نوبت‌ها و خداحافظی با دفاتر کاغذی."
    },
    {
        id: "ehr",
        title: "پرونده الکترونیک (EHR)",
        icon: LuFileHeart,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        description: "ثبت ساخت‌یافته‌ی سوابق، تصاویر و طرح درمان. دسترسی آنی پزشک به تاریخچه بیمار در یک نگاه، بدون نیاز به بایگانی فیزیکی."
    },
    {
        id: "finance",
        title: "مدیریت مالی و حسابداری",
        icon: LuCoins,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        description: "صدور فاکتور خودکار، محاسبه سهم پزشکان و گزارش‌های دقیق سود و زیان. شفافیت کامل در جریان نقدینگی کلینیک."
    },
    {
        id: "growth",
        title: "CRM و رشد کسب‌وکار",
        icon: LuTrendingUp,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "group-hover:border-purple-200",
        description: "ابزارهای بازاریابی، یادآوری پیامکی و باشگاه مشتریان. تبدیل مراجع گذری به مراجع وفادار با ارتباط موثر و پیوسته."
    }
];

export default function ClinicansOverviewSection ()
{
    return (
        <section
            id="clinicans-overview"
            className="py-10 md:py-16"
            aria-labelledby="overview-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */ }
                <div className="mb-12 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuLayers className="h-3.5 w-3.5" />
                        <span>معماری یکپارچه</span>
                    </div>
                    <h2
                        id="overview-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        کلینیکانز در <span className="text-bms-primary">یک نگاه</span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base text-justify">
                        ما <span className="font-bold text-slate-900">چهار ستون اصلی</span> مدیریت مطب را در یک پلتفرم بومی و تحت‌وب گرد هم آورده‌ایم.
                        هدف ما ساده است: حذف نرم‌افزارهای جزیره‌ای و ایجاد جریانی روان از لحظه نوبت‌دهی تا تسویه حساب.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { overviewItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.id }
                                className={ `group relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ item.border }` }
                            >
                                {/* Icon Box */ }
                                <div className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform group-hover:scale-110` }>
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { item.title }
                                    </h3>
                                    <p className="text-xs md:text-sm leading-6 text-slate-600">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Bottom Accent */ }
                                <div className={ `absolute bottom-0 inset-x-8 h-1 rounded-t-full ${ item.bg.replace( 'bg-', 'bg-opacity-60 ' ) } scale-x-0 transition-transform duration-300 group-hover:scale-x-100` } />
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}