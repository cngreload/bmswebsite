import
{
    LuRocket,
    LuShieldCheck,
    LuChartLine,
    LuLayers,
} from "react-icons/lu";

const advantages = [
    {
        title: "کاهش چشمگیر Time-to-Market",
        desc: "در WIT، مؤلفه‌های حیاتی مانند امنیت، مدیریت هویت، زیرساخت داده، ارتباطات صنعتی و پایش از پیش طراحی شده‌اند. این رویکرد باعث می‌شود تیم‌ها مستقیماً روی منطق کسب‌وکار و نیاز واقعی پروژه تمرکز کنند، نه ساخت زیرساخت‌های تکراری از صفر.",
        icon: LuRocket,
        color: "text-blue-600",
        border: "border-blue-200",
    },
    {
        title: "حاکمیت فناوری و امنیت بومی",
        desc: "مالکیت کامل معماری، کد و لایه‌های سخت‌افزاری و نرم‌افزاری. WIT وابسته به سرویس‌های خارجی یا Cloud عمومی نیست و در برابر تحریم، قطع سرویس، تغییر سیاست تأمین‌کنندگان و ریسک‌های ژئوپلیتیکی مقاوم طراحی شده است.",
        icon: LuShieldCheck,
        color: "text-emerald-600",
        border: "border-emerald-200",
    },
    {
        title: "داده به‌عنوان دارایی راهبردی",
        desc: "تمام سامانه‌های مبتنی بر WIT داده‌ها را با یک استاندارد مشترک تولید، ذخیره و تحلیل می‌کنند. این انسجام داده‌ای، بستر لازم برای تحلیل کلان، هوش مصنوعی، پیش‌بینی، پایش ملی و تصمیم‌سازی مدیریتی مبتنی بر داده را فراهم می‌کند.",
        icon: LuChartLine,
        color: "text-amber-600",
        border: "border-amber-200",
    },
];

export default function WitStrategicAdvantageSection ()
{
    return (
        <section
            aria-labelledby="strategy-heading"
            role="region"
            className="relative"
        >
            {/* Header */ }
            <div className="mb-10 text-right max-w-3xl">
                <div className="inline-flex items-center gap-2 text-indigo-600 mb-3">
                    <LuLayers className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        ارزش راهبردی پلتفرم
                    </span>
                </div>

                <h2
                    id="strategy-heading"
                    className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl leading-tight"
                >
                    چرا WIT یک
                    <span className="text-indigo-600"> دارایی استراتژیک </span>
                    برای سازمان‌هاست؟
                </h2>

                <p className="mt-4 text-sm md:text-base leading-8 text-slate-600">
                    WIT صرفاً یک محصول نرم‌افزاری یا پلتفرم IoT نیست؛
                    یک زیرساخت فناورانه‌ی بلندمدت است که امکان توسعه امن،
                    مقیاس‌پذیر و پایدار سامانه‌های حیاتی را فراهم می‌کند
                    و ارزش آن هم‌زمان با رشد داده‌ها، محصولات و دامنه کاربرد،
                    به‌صورت تصاعدی افزایش می‌یابد.
                </p>
            </div>

            {/* Advantage Cards */ }
            <div className="grid gap-6 md:grid-cols-3">
                { advantages.map( ( adv, i ) =>
                {
                    const Icon = adv.icon;
                    return (
                        <article
                            key={ i }
                            className={ `group relative overflow-hidden rounded-3xl border-t-4 ${ adv.border }
              bg-slate-50 p-6 transition-all duration-300
              hover:bg-white hover:shadow-xl`}
                        >
                            <div
                                className={ `mb-4 inline-flex rounded-xl bg-white p-3 shadow-sm ${ adv.color }
                transition-transform group-hover:scale-110`}
                            >
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mb-3 text-base md:text-lg font-bold text-slate-900">
                                { adv.title }
                            </h3>

                            <p className="text-sm leading-7 text-slate-600 text-pretty">
                                { adv.desc }
                            </p>
                        </article>
                    );
                } ) }
            </div>
        </section>
    );
}
