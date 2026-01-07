// components/wit/WitStrategicAdvantageSection.tsx
import
{
    LuRocket,
    LuShieldCheck,
    LuChartLine,
    LuLayers,
    LuUsers,
    LuBuilding,
    LuGlobe,
    LuLock
} from "react-icons/lu";

const advantages = [
    {
        title: "کاهش چشمگیر Time-to-Market",
        desc: "در WIT، مؤلفه‌های حیاتی مانند امنیت، مدیریت هویت، زیرساخت داده، ارتباطات صنعتی و پایش از پیش طراحی شده‌اند. این رویکرد باعث می‌شود تیم‌ها مستقیماً روی منطق کسب‌وکار و نیاز واقعی پروژه تمرکز کنند، نه ساخت زیرساخت‌های تکراری از صفر.",
        icon: LuRocket,
        color: "text-blue-600",
        border: "border-blue-200",
        bg: "bg-blue-50",
        stat: "تا ۷۰٪"
    },
    {
        title: "حاکمیت فناوری و امنیت بومی",
        desc: "مالکیت کامل معماری، کد و لایه‌های سخت‌افزاری و نرم‌افزاری. WIT وابسته به سرویس‌های خارجی یا Cloud عمومی نیست و در برابر تحریم، قطع سرویس، تغییر سیاست تأمین‌کنندگان و ریسک‌های ژئوپلیتیکی مقاوم طراحی شده است.",
        icon: LuShieldCheck,
        color: "text-emerald-600",
        border: "border-emerald-200",
        bg: "bg-emerald-50",
        stat: "۱۰۰٪ بومی"
    },
    {
        title: "داده به‌عنوان دارایی راهبردی",
        desc: "تمام سامانه‌های مبتنی بر WIT داده‌ها را با یک استاندارد مشترک تولید، ذخیره و تحلیل می‌کنند. این انسجام داده‌ای، بستر لازم برای تحلیل کلان، هوش مصنوعی، پیش‌بینی، پایش ملی و تصمیم‌سازی مدیریتی مبتنی بر داده را فراهم می‌کند.",
        icon: LuChartLine,
        color: "text-amber-600",
        border: "border-amber-200",
        bg: "bg-amber-50",
        stat: "انسجام داده"
    },
    {
        title: "انعطاف‌پذیری و شخصی‌سازی",
        desc: "با ساختار مدولار WIT، سازمان‌ها می‌توانند راهکارهای هوشمندسازی را بر اساس بودجه و نیازهای خاص خود سفارشی‌سازی کنند. این رویکرد دسترسی برابر به فناوری را برای همه کسب‌وکارها — از کوچک تا بزرگ — فراهم می‌سازد.",
        icon: LuUsers,
        color: "text-purple-600",
        border: "border-purple-200",
        bg: "bg-purple-50",
        stat: "مدولار"
    },
    {
        title: "تحول چشم‌انداز رقابتی",
        desc: "کسب‌وکارهایی که از WIT بهره می‌برند، می‌توانند کارایی و بهره‌وری خود را افزایش داده و از رقبا پیشی بگیرند. این سیستم با ارائه راهکارهای یکپارچه و نوآورانه، مزیت رقابتی پایدار ایجاد می‌کند.",
        icon: LuBuilding,
        color: "text-rose-600",
        border: "border-rose-200",
        bg: "bg-rose-50",
        stat: "مزیت رقابتی"
    },
    {
        title: "دسترسی جهانی و کنترل لحظه‌ای",
        desc: "WIT رویای کنترل کامل دارایی‌ها از هر مکان و در هر زمان را محقق می‌سازد. کاربران می‌توانند از طریق داشبوردهای بصری و رابط کاربری آسان، نظارت، کنترل و تصمیم‌گیری لحظه‌ای داشته باشند.",
        icon: LuGlobe,
        color: "text-indigo-600",
        border: "border-indigo-200",
        bg: "bg-indigo-50",
        stat: "۲۴/۷"
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
            <div className="mb-12 text-right max-w-4xl">
                <div className="inline-flex items-center gap-2 text-indigo-600 mb-3">
                    <LuLayers className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        ارزش راهبردی پلتفرم
                    </span>
                </div>

                <h2
                    id="strategy-heading"
                    className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl leading-tight mb-4"
                >
                    چرا WIT یک{ ' ' }
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        دارایی استراتژیک
                    </span>{ ' ' }
                    برای سازمان‌هاست؟
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                    WIT صرفاً یک محصول نرم‌افزاری یا پلتفرم IoT نیست؛ یک زیرساخت فناورانه‌ی بلندمدت است که امکان توسعه امن،
                    مقیاس‌پذیر و پایدار سامانه‌های حیاتی را فراهم می‌کند و ارزش آن هم‌زمان با رشد داده‌ها، محصولات و دامنه کاربرد،
                    به‌صورت تصاعدی افزایش می‌یابد.
                </p>
            </div>

            {/* Advantage Cards */ }
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                { advantages.map( ( adv, i ) =>
                {
                    const Icon = adv.icon;
                    return (
                        <article
                            key={ i }
                            className={ `group relative overflow-hidden rounded-3xl border-2 ${ adv.border }
              ${ adv.bg } p-6 transition-all duration-300
              hover:shadow-2xl hover:-translate-y-1 hover:border-opacity-100`}
                        >
                            {/* Stat Badge */ }
                            <div className="absolute top-4 left-4">
                                <span className={ `text-xs font-bold ${ adv.color } bg-white px-2 py-1 rounded-full border ${ adv.border }` }>
                                    { adv.stat }
                                </span>
                            </div>

                            <div
                                className={ `mb-5 inline-flex rounded-xl bg-white p-3 shadow-sm ${ adv.color }
                transition-transform group-hover:scale-110 group-hover:shadow-md`}
                            >
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mb-3 text-lg font-bold text-slate-900">
                                { adv.title }
                            </h3>

                            <p className="text-sm leading-7 text-slate-600 text-pretty">
                                { adv.desc }
                            </p>

                            {/* Hover Effect Line */ }
                            <div className={ `absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r ${ adv.color.replace( 'text-', 'from-' ) } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300` } />
                        </article>
                    );
                } ) }
            </div>

            {/* Additional Benefits */ }
            <div className="mt-16 grid md:grid-cols-3 gap-6">
                { [
                    {
                        title: "کاهش هزینه",
                        desc: "با حذف هزینه‌های اضافی مرتبط با راهکارهای سنتی اتوماسیون",
                        icon: LuChartLine
                    },
                    {
                        title: "امنیت پیشرفته",
                        desc: "رمزگذاری داده، احراز هویت کاربران و نظارت بر دسترسی",
                        icon: LuLock
                    },
                    {
                        title: "عدالت اجتماعی",
                        desc: "شناسایی و رفع نابرابری‌ها از طریق شفافیت داده و تحلیل عمیق",
                        icon: LuUsers
                    }
                ].map( ( item, idx ) => (
                    <div key={ idx } className="text-center p-6 bg-white rounded-2xl border border-slate-200">
                        <item.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-slate-900 mb-2">{ item.title }</h4>
                        <p className="text-sm text-slate-600">{ item.desc }</p>
                    </div>
                ) ) }
            </div>
        </section>
    );
}