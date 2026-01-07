// components/wit/WitDomainsSection.tsx
import
{
    LuFactory,
    LuHouse,
    LuGlobe,
    LuShield,
    LuTrendingUp,
    LuUsers
} from "react-icons/lu";

const domains = [
    {
        icon: LuFactory,
        title: "صنعت و تولید",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
        border: "border-blue-200",
        features: [
            "کنترل و مانیتورینگ از راه دور",
            "بهینه‌سازی فرآیند با هوش مصنوعی",
            "پیش‌بینی نگهداشت پیشگیرانه",
            "اتوماسیون خط تولید"
        ]
    },
    {
        icon: LuHouse,
        title: "خانه‌های هوشمند",
        color: "from-purple-500 to-pink-500",
        bg: "bg-purple-50",
        border: "border-purple-200",
        features: [
            "کنترل یکپارچه تجهیزات",
            "مدیریت هوشمند انرژی",
            "امنیت پیشرفته",
            "تجربه زندگی شخصی‌سازی شده"
        ]
    },
    {
        icon: LuGlobe,
        title: "مدیریت واردات/صادرات",
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-50",
        border: "border-green-200",
        features: [
            "تخمین دقیق نیازها",
            "بهینه‌سازی زنجیره تأمین",
            "پیش‌بینی نوسانات بازار",
            "کاهش ریسک اقتصادی"
        ]
    },
    {
        icon: LuShield,
        title: "شفافیت و امنیت ملی",
        color: "from-amber-500 to-orange-500",
        bg: "bg-amber-50",
        border: "border-amber-200",
        features: [
            "مقابله با فساد و اختلاس",
            "شفافیت داده‌ای",
            "امنیت سایبری پیشرفته",
            "نظارت فرآیندی"
        ]
    },
    {
        icon: LuTrendingUp,
        title: "آینده کار",
        color: "from-red-500 to-rose-500",
        bg: "bg-red-50",
        border: "border-red-200",
        features: [
            "اتوماسیون فرآیندها",
            "ایجاد مشاغل جدید",
            "افزایش بهره‌وری",
            "انعطاف‌پذیری کاری"
        ]
    },
    {
        icon: LuUsers,
        title: "کارآفرینان چند کسب‌وکار",
        color: "from-indigo-500 to-violet-500",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        features: [
            "نظارت یکپارچه لحظه‌ای",
            "تصمیم‌گیری مبتنی بر داده",
            "کاهش هزینه عملیاتی",
            "تجربه مشتری بهبودیافته"
        ]
    }
];

export default function WitDomainsSection ()
{
    return (
        <section
            id="domains"
            className="relative"
            aria-labelledby="domains-heading"
        >
            {/* Section Header */ }
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-indigo-600 mb-4">
                    <LuGlobe className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        قلمروهای هوشمندسازی
                    </span>
                </div>

                <h2
                    id="domains-heading"
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                >
                    WIT در خدمت <span className="text-indigo-600">تحول دیجیتال</span>
                </h2>

                <p className="text-slate-600 max-w-3xl mx-auto">
                    از خانه‌های هوشمند تا صنایع بزرگ، از مدیریت واردات تا امنیت ملی —
                    پلتفرم WIT قابلیت تطبیق با حوزه‌های مختلف را دارد
                </p>
            </div>

            {/* Domains Grid */ }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                { domains.map( ( domain, index ) =>
                {
                    const Icon = domain.icon;
                    return (
                        <article
                            key={ index }
                            className={ `group relative overflow-hidden rounded-2xl ${ domain.bg } border ${ domain.border } p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1` }
                        >
                            {/* Gradient Corner */ }
                            <div className={ `absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${ domain.color } opacity-10 rounded-br-3xl` } />

                            {/* Icon */ }
                            <div className={ `relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${ domain.color } text-white mb-4` }>
                                <Icon className="h-6 w-6" />
                            </div>

                            {/* Title */ }
                            <h3 className="text-lg font-bold text-slate-900 mb-3">
                                { domain.title }
                            </h3>

                            {/* Features List */ }
                            <ul className="space-y-2 mb-4">
                                { domain.features.map( ( feature, idx ) => (
                                    <li key={ idx } className="flex items-start gap-2">
                                        <div className={ `w-1.5 h-1.5 rounded-full bg-gradient-to-r ${ domain.color } mt-2` } />
                                        <span className="text-sm text-slate-700">{ feature }</span>
                                    </li>
                                ) ) }
                            </ul>

                            {/* Learn More Link */ }
                            <div className="pt-4 border-t border-slate-200">
                                <button
                                    className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
                                    onClick={ () => document.getElementById( `detail-${ index }` )?.scrollIntoView( { behavior: 'smooth' } ) }
                                >
                                    جزئیات بیشتر
                                    <span className="text-lg">→</span>
                                </button>
                            </div>
                        </article>
                    );
                } ) }
            </div>

            {/* Detailed Descriptions (Initially hidden, revealed by above links) */ }
            <div className="mt-16 space-y-12">
                { [
                    {
                        id: "detail-0",
                        title: "صنعت و تولید هوشمند",
                        description: "با ادغام سیستم‌های کنترل پیشرفته، اینترنت اشیاء و هوش مصنوعی، WIT امکان نظارت و کنترل لحظه‌ای خطوط تولید، بهینه‌سازی مصرف انرژی و پیش‌بینی خرابی تجهیزات را فراهم می‌کند.",
                        benefits: [
                            "کاهش ۴۰٪ در مصرف انرژی",
                            "افزایش ۳۰٪ در بهره‌وری",
                            "کاهش ۶۰٪ در زمان توقف خط تولید",
                            "پیش‌بینی ۹۰٪ خرابی‌های احتمالی"
                        ]
                    },
                    {
                        id: "detail-1",
                        title: "خانه‌های هوشمند نسل جدید",
                        description: "WIT خانه‌ها را به محیط‌های هوشمند، کارآمد و راحت تبدیل می‌کند. کنترل یکپارچه روشنایی، دما، امنیت و مصرف انرژی از طریق یک پلتفرم واحد.",
                        benefits: [
                            "کاهش ۳۵٪ در هزینه‌های انرژی",
                            "کنترل کامل از راه دور",
                            "امنیت پیشرفته با تشخیص ناهنجاری",
                            "تجربه زندگی شخصی‌سازی شده"
                        ]
                    },
                    {
                        id: "detail-4",
                        title: "آینده کار در عصر اتوماسیون",
                        description: "WIT با اتوماسیون فرآیندهای تکراری و تحلیل داده‌ها، بهره‌وری را افزایش داده و فرصت‌های شغلی جدیدی در حوزه‌های خلاقیت، نوآوری و حل مسئله ایجاد می‌کند.",
                        benefits: [
                            "ایجاد مشاغل جدید مبتنی بر مهارت‌های دیجیتال",
                            "افزایش انعطاف‌پذیری در محیط کار",
                            "آموزش مستمر و یادگیری مادام‌العمر",
                            "تمرکز بر کارهای خلاقانه و استراتژیک"
                        ]
                    }
                ].map( ( detail, idx ) => (
                    <div
                        key={ idx }
                        id={ detail.id }
                        className="hidden group-target:block bg-white rounded-2xl border border-slate-200 p-6"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{ detail.title }</h3>
                        <p className="text-slate-700 mb-6">{ detail.description }</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            { detail.benefits.map( ( benefit, i ) => (
                                <div key={ i } className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                    <span className="text-slate-700">{ benefit }</span>
                                </div>
                            ) ) }
                        </div>
                    </div>
                ) ) }
            </div>
        </section>
    );
}