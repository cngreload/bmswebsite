// components/clinicans/ClinicansGetStartedSection.tsx
import Link from "next/link";
import
{
    LuMessageSquare,
    LuSettings,
    LuRocket,
    LuArrowLeft,
    LuCalendarCheck
} from "react-icons/lu";

const steps = [
    {
        id: 1,
        title: "گفت‌وگوی اولیه و نیازسنجی",
        icon: LuMessageSquare,
        body: "در یک تماس کوتاه، ساختار کلینیک شما را بررسی می‌کنیم. صریح و شفاف می‌گوییم که کلینیکانز کدام چالش‌های شما را حل می‌کند.",
        bullets: [
            "تحلیل جریان کاری فعلی (Workflow Analysis)",
            "برآورد هزینه بر اساس تعداد پزشک و شعبه",
            "مشاوره فنی رایگان برای مهاجرت داده‌ها"
        ]
    },
    {
        id: 2,
        title: "پیکربندی اختصاصی (Onboarding)",
        icon: LuSettings,
        body: "پنل کلینیکانز متناسب با تخصص و چارت سازمانی شما تنظیم می‌شود. تعریف خدمات، تعرفه‌ها و دسترسی‌ها توسط تیم ما انجام می‌شود.",
        bullets: [
            "شخصی‌سازی فرم‌ها و سربرگ‌ها",
            "تعریف شیفت‌های کاری پزشکان",
            "اتصال به درگاه پرداخت و پنل پیامک"
        ]
    },
    {
        id: 3,
        title: "آموزش و استقرار نهایی",
        icon: LuRocket,
        body: "بدون توقف در کار کلینیک، تیم شما آموزش می‌بیند و سیستم زیر بار می‌رود. ما در روزهای اول کنار شما هستیم تا همه‌چیز روان باشد.",
        bullets: [
            "آموزش حضوری یا آنلاین برای منشی‌ها",
            "پشتیبانی ویژه در هفته اول استقرار",
            "بررسی بازخوردها و بهینه‌سازی تنظیمات"
        ]
    }
];

export default function ClinicansGetStartedSection ()
{
    return (
        <section
            id="get-started"
            className="py-10 md:py-16"
            aria-labelledby="start-heading"
        >
            <div className="mx-auto max-w-5xl px-4">
                {/* Header */ }
                <div className="mb-12 text-right space-y-4">
                    <span className="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-100">
                        مسیر همکاری
                    </span>
                    <h2
                        id="start-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        شروع ساده، <span className="text-emerald-600">تغییر بزرگ</span>
                    </h2>
                    <p className="max-w-2xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        ما پروسه تغییر نرم‌افزار را برای شما آسان کرده‌ایم. بدون نیاز به تیم فنی و بدون
                        اختلال در پذیرش بیماران، به کلینیکانز مهاجرت کنید.
                    </p>
                </div>

                {/* Timeline Container */ }
                <div className="relative space-y-8">
                    {/* Vertical Line (Right aligned for RTL) */ }
                    <div className="absolute right-6 top-6 bottom-6 w-px bg-slate-200 md:right-8" />

                    { steps.map( ( step ) =>
                    {
                        const Icon = step.icon;
                        return (
                            <div key={ step.id } className="relative flex gap-6 md:gap-10">
                                {/* Marker */ }
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-emerald-50 text-emerald-600 shadow-sm md:h-16 md:w-16">
                                    <Icon className="h-5 w-5 md:h-7 md:w-7" />
                                </div>

                                {/* Content Card */ }
                                <article className="flex-1 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg">
                                    <div className="mb-3">
                                        <h3 className="text-base font-bold text-slate-900 md:text-lg">
                                            { step.title }
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-7 text-slate-600 mb-4 text-pretty">
                                        { step.body }
                                    </p>
                                    <ul className="space-y-2 border-t border-slate-50 pt-4">
                                        { step.bullets.map( ( bullet, idx ) => (
                                            <li key={ idx } className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                                { bullet }
                                            </li>
                                        ) ) }
                                    </ul>
                                </article>
                            </div>
                        );
                    } ) }
                </div>

                {/* Final CTA Block */ }
                <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                    {/* Texture */ }
                    <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                        <div className="space-y-3 text-center lg:text-right">
                            <h3 className="text-xl font-bold md:text-2xl">
                                آماده تحول در مدیریت کلینیک هستید؟
                            </h3>
                            <p className="text-sm text-emerald-50 max-w-xl leading-relaxed">
                                در یک جلسه دمو ۳۰ دقیقه‌ای، محیط واقعی نرم‌افزار را ببینید و
                                پاسخ سوالات خود را از کارشناسان محصول بگیرید.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                <LuCalendarCheck className="h-4 w-4" />
                                <span>هماهنگی جلسه دمو</span>
                            </Link>
                            <Link
                                href="/contact-us?type=advice"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            >
                                <span>مشاوره و استعلام قیمت</span>
                                <LuArrowLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}