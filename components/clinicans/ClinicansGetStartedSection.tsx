import Link from "next/link";

const steps = [
    {
        title: "قدم ۱ – گفت‌وگوی اولیه و شناخت کلینیک",
        body:
            "در یک تماس یا جلسه‌ی کوتاه آنلاین، ساختار کلینیک، نوع خدمات، تعداد پزشکان و شیوه‌ی فعلی مدیریت را با هم مرور می‌کنیم. در همین مرحله، صریح توضیح می‌دهیم که Clinicans برای کلینیک شما چه مسئله‌هایی را حل می‌کند و چه انتظاری می‌توانید از آن داشته باشید.",
        bullets: [
            "بررسی نیازها و اولویت‌های کلینیک",
            "معرفی اجمالی امکانات متناسب با شرایط شما",
            "برآورد اولیه‌ی سطح و نوع همکاری (کلینیک تک‌شعبه‌ای، چندپزشکی، چند شعبه‌ای)"
        ]
    },
    {
        title: "قدم ۲ – تنظیم نسخه اختصاصی برای کلینیک شما",
        body:
            "بر اساس اطلاعات به‌دست‌آمده، پنل Clinicans متناسب با کلینیک شما پیکربندی می‌شود؛ از تعریف خدمات و پزشکان تا ساختار نوبت‌دهی و نقش‌های کاربری.",
        bullets: [
            "تعریف خدمات، اتاق‌ها، پزشکان و تعرفه‌ها",
            "تنظیم سطح دسترسی برای مدیریت، پزشکان و تیم پذیرش",
            "در صورت امکان، کمک به انتقال داده‌های مهم از سیستم‌های قبلی"
        ]
    },
    {
        title: "قدم ۳ – شروع استفاده و همراهی در کنار شما",
        body:
            "بعد از آماده شدن پنل، با یک دوره آموزش کوتاه برای تیم پذیرش و پزشکان، کار با Clinicans را در جریان واقعی کلینیک شروع می‌کنید.",
        bullets: [
            "آموزش عملی و ساده برای کاربران کلیدی",
            "پشتیبانی نزدیک در هفته‌های اول برای پاسخ به سؤالات و تنظیمات ریز",
            "ارائه پیشنهاد برای استفاده بهتر از گزارش‌ها و امکانات سیستم"
        ]
    }
];

export default function ClinicansGetStartedSection ()
{
    return (
        <section id="clinicans-get-started" className="pt-10 md:pt-12 pb-10 md:pb-14">
            <div className="mx-auto max-w-6xl space-y-5 text-right">
                <div className="space-y-3">
                    <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                        شروع همکاری با Clinicans
                    </h2>
                    <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                        فرآیند شروع، ساده و شفاف طراحی شده است؛ بدون نیاز به تیم IT و بدون
                        برهم‌زدن روال روزمره کلینیک.
                    </p>
                </div>

                <div className="space-y-3">
                    { steps.map( ( step, idx ) => (
                        <article
                            key={ step.title }
                            className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-bms-primary-soft text-[11px] font-semibold text-bms-primary">
                                    { idx + 1 }
                                </div>
                                <div className="space-y-1 text-[11px] md:text-sm leading-relaxed text-slate-700 flex-1">
                                    <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                                        { step.title }
                                    </h3>
                                    <p>{ step.body }</p>
                                    <ul className="mt-1 space-y-1.5 pr-4 list-disc">
                                        { step.bullets.map( ( b ) => (
                                            <li key={ b }>{ b }</li>
                                        ) ) }
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ) ) }
                </div>

                <div className="mt-4 rounded-3xl bg-bms-primary-soft/60 px-4 py-4 md:px-6 md:py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1 text-[11px] md:text-sm text-bms-dark">
                        <p className="font-semibold">
                            آماده‌اید ببینید Clinicans در کلینیک شما چه تغییری ایجاد می‌کند؟
                        </p>
                        <p>
                            در یک دمو کوتاه، مسیر کار روزانه در کلینیک شما را روی بستر
                            کلینیکانز مرور می‌کنیم و به سؤالات فنی و مدیریتی پاسخ می‌دهیم.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-end">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-bms-primary px-5 py-2.5 text-[11px] md:text-xs font-medium text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                        >
                            درخواست جلسه معرفی و دمو
                        </Link>
                        <Link
                            href="/contact-us?type=advice"
                            className="inline-flex items-center justify-center rounded-full border border-bms-primary px-5 py-2.5 text-[11px] md:text-xs font-medium text-bms-primary hover:bg-bms-primary-soft transition-colors"
                        >
                            ارسال پیام برای دریافت مشاوره و برآورد اولیه هزینه
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
