// components/clinicans/ClinicansProblemsSection.tsx
import
{
    LuTrendingDown,
    LuStethoscope,
    LuPhoneMissed,
    LuUserX,
    LuCircleX,
    LuOctagonAlert,
} from "react-icons/lu";

const problems = [
    {
        id: "manager",
        title: "مدیران و مالکان",
        subtitle: "داده‌های ناقص = تصمیم‌های اشتباه",
        icon: LuTrendingDown,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200",
        points: [
            "پراکندگی اطلاعات بین نرم‌افزار حسابداری، اکسل و دفتر نوبت‌دهی",
            "عدم دسترسی به گزارش‌های تجمیعی و لحظه‌ای از عملکرد کلینیک",
            "ریسک بالای توسعه شعب بدون داشتن زیرساخت مرکزی و قابل رصد",
        ],
    },
    {
        id: "doctor",
        title: "پزشکان و درمانگران",
        subtitle: "اتلاف وقت روی کاغذبازی",
        icon: LuStethoscope,
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "group-hover:border-orange-200",
        points: [
            "جستجوی زمان‌بر سوابق بیمار در بایگانی‌های کاغذی",
            "وقفه‌های مکرر در ویزیت برای هماهنگی با منشی و پذیرش",
            "نبود تاریخچه تصویری (Before/After) منظم برای پیگیری درمان",
        ],
    },
    {
        id: "reception",
        title: "پذیرش و منشی‌ها",
        subtitle: "فشار کاری و خطای انسانی",
        icon: LuPhoneMissed,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        points: [
            "ترافیک تماس‌های تلفنی برای کارهای ساده‌ای مثل لغو یا جابه‌جایی",
            "تداخل نوبت‌ها (Double Booking) و نارضایتی در سالن انتظار",
            "فرسودگی شغلی ناشی از فرآیندهای دستی و تکراری",
        ],
    },
    {
        id: "patient",
        title: "مراجعان و بیماران",
        subtitle: "تجربه‌ای گنگ و کلافه‌کننده",
        icon: LuUserX,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "group-hover:border-red-200",
        points: [
            "معطلی پشت خط تلفن و عدم وجود سیستم نوبت‌دهی آنلاین",
            "بی‌خبری از کنسلی‌ها و تغییرات ناگهانی برنامه پزشک",
            "احساس عدم اطمینان به نظم و حرفه‌ای بودن مجموعه",
        ],
    },
];

export default function ClinicansProblemsSection ()
{
    return (
        <section
            id="clinicans-problems"
            className="py-10 md:py-16"
            aria-labelledby="problems-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 border border-rose-100">
                        <LuOctagonAlert className="h-3.5 w-3.5" />
                        <span>چالش‌های وضعیت موجود</span>
                    </div>
                    <h2
                        id="problems-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        چرا روش‌های سنتی دیگر{ " " }
                        <span className="text-rose-600 underline decoration-rose-200 underline-offset-4">
                            پاسخگو نیستند؟
                        </span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base">
                        حتی موفق‌ترین کلینیک‌ها نیز با{ ' ' }
                        <strong className="font-bold text-rose-700">جزایر اطلاعاتی</strong>{ ' ' }
                        درگیرند. وقتی نوبت‌دهی، پرونده و مالی به هم متصل نیستند، انرژی تیم صرف
                        مدیریت بحران می‌شود، نه ارتقای کیفیت درمان.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { problems.map( ( card ) =>
                    {
                        const Icon = card.icon;
                        return (
                            <article
                                key={ card.id }
                                className={ `group relative flex flex-col gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ card.border }` }
                            >
                                {/* Header */ }
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div
                                        className={ `flex h-14 w-14 items-center justify-center rounded-2xl ${ card.bg } ${ card.color } shadow-sm transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">{ card.title }</h3>
                                        <p className="text-xs font-medium text-slate-500 mt-1">{ card.subtitle }</p>
                                    </div>
                                </div>

                                {/* Divider */ }
                                <div className={ `w-full h-px ${ card.bg.replace( "bg-", "bg-opacity-50 bg-" ) }` } />

                                {/* Pain Points List */ }
                                <ul className="space-y-3 text-right flex-1">
                                    { card.points.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-2.5">
                                            <LuCircleX className={ `h-4 w-4 shrink-0 mt-1 ${ card.color } opacity-70` } />
                                            <span className="text-xs leading-5 text-slate-600">{ point }</span>
                                        </li>
                                    ) ) }
                                </ul>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}