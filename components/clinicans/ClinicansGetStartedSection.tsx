// components/clinicans/ClinicansGetStartedSection.tsx
import Link from "next/link";
import
{
    LuMessageSquare,
    LuHandshake,
    LuSettings,
    LuRocket,
    LuArrowLeft,
    LuLogIn,
} from "react-icons/lu";

const steps = [
    {
        id: 1,
        stepType: "Discovery",
        title: "نیازسنجی و ارزیابی توانمندسازی",
        icon: LuMessageSquare,
        body:
            "پیش از استقرار، نیازهای واقعی مجموعه شما را تحلیل می‌کنیم تا اطمینان حاصل کنیم که «پلتفرم توانمندسازی دیجیتال» بهترین مسیر برای رشد کلینیک شماست.",
        bullets: [
            "بررسی دقیق فرآیندهای فعلی و نقاط اصطکاک",
            "شفاف‌سازی اهداف هوشمندسازی و انتظارات مدیران",
            "ارائه مشاوره صادقانه برای مسیر تحول دیجیتال",
        ],
    },
    {
        id: 2,
        stepType: "Configuration",
        title: "پیکربندی زیرساخت دیجیتال",
        icon: LuSettings,
        body:
            "این پلتفرم یک ابزار ثابت نیست؛ بلکه دقیقاً بر اساس تخصص‌ها، نقش‌ها و جریان کاری خاص مرکز درمانی شما شخصی‌سازی می‌شود.",
        bullets: [
            "تعریف دقیق سطوح دسترسی و نقش‌های سازمانی",
            "شخصی‌سازی خدمات، فرم‌های درمانی و تعرفه‌ها",
            "آماده‌سازی محیط برای تجربه کاربری روان تیم درمان",
        ],
    },
    {
        id: 3,
        stepType: "Enablement",
        title: "استقرار، آموزش و توانمندسازی تیم",
        icon: LuRocket,
        body:
            "راه‌اندازی بدون اختلال در پذیرش بیماران انجام می‌شود. تیم شما آموزش می‌بیند و وارد فاز عملیاتی «توانمندسازی دیجیتال» می‌شود.",
        bullets: [
            "آموزش تخصصی متناسب با هر نقش (پذیرش، پزشک، مالی)",
            "پشتیبانی نزدیک در روزهای نخست بهره‌برداری",
            "بهینه‌سازی مستمر بر اساس بازخورد واقعی میدان",
        ],
    },
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
                <div className="mb-14 text-right space-y-4">
                    <div className="mb-14 text-right space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-slate-200/50 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300">
                            <LuHandshake className="h-3.5 w-3.5" />
                            <span>نقشه راه استقرار
                            </span>
                        </div>
                    </div>

                    <h2
                        id="start-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        آغاز سفر <span className="text-emerald-600">توانمندسازی دیجیتال</span>
                    </h2>

                    <p className="max-w-2xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        ورود به این پلتفرم به‌معنای نصب یک نرم‌افزار نیست؛
                        آغاز یک همکاری بلندمدت برای هوشمندسازی و ارتقای کیفیت خدمات در مرکز درمانی شماست.
                    </p>
                </div>

                {/* Timeline */ }
                <div className="relative space-y-10">
                    <div className="absolute right-6 top-6 bottom-6 w-px bg-slate-200 md:right-8" />

                    { steps.map( ( step ) =>
                    {
                        const Icon = step.icon;
                        return (
                            <div key={ step.id } className="relative flex gap-6 md:gap-10">
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-emerald-50 text-emerald-600 shadow-sm md:h-16 md:w-16">
                                    <Icon className="h-5 w-5 md:h-7 md:w-7" />
                                </div>

                                <article className="flex-1 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg">
                                    <div className="mb-2 flex items-center gap-2">
                                        <h3 className="text-base font-bold text-slate-900 md:text-lg">
                                            { step.title }
                                        </h3>
                                        <span className="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 border border-slate-200">
                                            { step.stepType }
                                        </span>
                                    </div>

                                    <p className="text-sm leading-7 text-slate-600 mb-4 text-pretty">
                                        { step.body }
                                    </p>

                                    <ul className="space-y-2 border-t border-slate-50 pt-4">
                                        { step.bullets.map( ( bullet, idx ) => (
                                            <li
                                                key={ idx }
                                                className="flex items-center gap-2 text-xs md:text-sm text-slate-500"
                                            >
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

                {/* 
                    🧠 SYSTEM SUMMARY BLOCK (Trust & Enablement)
                */}
                <div className="mt-20 lg:mt-28 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4">

                        {/* Inner Container */ }
                        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                                    <LuHandshake className="h-10 w-10" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-3">
                                <h4 className="text-lg font-bold text-slate-900">
                                    همکاری مبتنی بر ارزش آفرینی
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 leading-8 text-justify">
                                    <strong className="text-slate-900 font-bold">پلتفرم توانمندسازی دیجیتال</strong>
                                    تنها زمانی پیشنهاد می‌شود که
                                    <span className="text-indigo-700 font-medium">
                                        { " " }
                                        برای مجموعه شما ارزش واقعی ایجاد کند
                                    </span>.
                                    ما شریک رشد شما هستیم و شفافیت در تصمیم‌گیری، پایه
                                    <span className="text-indigo-700 font-medium">
                                        { " " }
                                        اعتماد متقابل
                                    </span>
                                    ماست — از نخستین مشاوره تا توسعه بلندمدت.
                                </p>
                            </div>

                        </div>
                    </aside>
                </div>

                {/* Final CTA */ }
                <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-24 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                        <div className="space-y-3 text-center lg:text-right">
                            <h3 className="text-xl font-bold md:text-2xl">
                                آماده تجربه پلتفرم توانمندسازی دیجیتال هستید؟
                            </h3>
                            <p className="text-sm text-emerald-50 max-w-xl leading-relaxed">
                                می‌توانید ابتدا پلتفرم را از نزدیک بررسی کنید
                                یا مستقیماً وارد محیط کاربری شوید.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <Link
                                href="https://clinicans.ir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                <LuLogIn className="h-4 w-4" />
                                <span>ورود به پلتفرم کلینیکانز </span>
                            </Link>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            >
                                <span>درخواست جلسه دمو</span>
                                <LuArrowLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}