// components/wit/WitImpactSection.tsx (Updated with Investor Metrics)
import
{
    LuZap,
    LuTarget,
    LuTrendingUp,

    LuUsers,
    LuChartBar,
    LuDollarSign
} from "react-icons/lu";

export default function WitImpactSection ()
{
    return (
        <section
            id="metrics"
            className="relative"
            aria-labelledby="impact-heading"
        >
            {/* Section Header */ }
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-indigo-600 mb-4">
                    <LuChartBar className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        شاخص‌های عملکرد و رشد
                    </span>
                </div>

                <h2
                    id="impact-heading"
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                >
                    اثبات اجرایی: <span className="text-indigo-600">اعدادی که باورکردنی نیستند</span>
                </h2>

                <p className="text-slate-600 max-w-3xl mx-auto">
                    عملکرد گذشته تضمین‌کننده آینده است. این اعداد نشان می‌دهند چرا WIT فرصت سرمایه‌گذاری استثنایی است
                </p>
            </div>

            {/* Key Metrics Grid */ }
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                { [
                    {
                        icon: LuTrendingUp,
                        title: "رشد درآمد",
                        value: "۲۰۰%+",
                        unit: "سالانه",
                        description: "رشد تصاعدی در ۲ سال گذشته",
                        color: "from-emerald-500 to-green-500",
                        highlight: true
                    },
                    {
                        icon: LuDollarSign,
                        title: "حاشیه سود ناخالص",
                        value: "۶۵%",
                        unit: "نرخ سودآوری",
                        description: "بالاتر از متوسط صنعت",
                        color: "from-blue-500 to-cyan-500"
                    },
                    {
                        icon: LuUsers,
                        title: "نرخ نگهداشت مشتری",
                        value: "۹۵%",
                        unit: "رضایت مشتری",
                        description: "مشتریان برمی‌گردند",
                        color: "from-purple-500 to-pink-500"
                    },
                    {
                        icon: LuZap,
                        title: "کارایی عملیاتی",
                        value: "۴۰%+",
                        unit: "بهبود کارایی",
                        description: "برای مشتریان WIT",
                        color: "from-amber-500 to-orange-500"
                    }
                ].map( ( metric, index ) =>
                {
                    const Icon = metric.icon;
                    return (
                        <div
                            key={ index }
                            className={ `group relative overflow-hidden rounded-2xl bg-white border ${ metric.highlight ? 'border-emerald-500 shadow-lg' : 'border-slate-200' } p-6 hover:shadow-xl transition-all duration-300` }
                        >
                            { metric.highlight && (
                                <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
                                    برجسته
                                </div>
                            ) }

                            <div className="relative z-10">
                                {/* Icon */ }
                                <div className={ `inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${ metric.color } text-white mb-4` }>
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Value */ }
                                <div className="text-3xl font-bold text-slate-900 mb-1">
                                    { metric.value }
                                </div>

                                {/* Title & Unit */ }
                                <div className="text-sm font-semibold text-slate-700 mb-2">
                                    { metric.title }
                                    <div className="text-xs text-slate-500 font-normal mt-1">
                                        { metric.unit }
                                    </div>
                                </div>

                                {/* Description */ }
                                <p className="text-sm text-slate-600">
                                    { metric.description }
                                </p>
                            </div>
                        </div>
                    );
                } ) }
            </div>

            {/* Growth Chart Visualization */ }
            <div className="mb-16 bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <LuTrendingUp className="h-5 w-5 text-emerald-600" />
                    روند رشد درآمد
                </h3>

                <div className="space-y-4">
                    { [
                        { year: "۱۴۰۱", revenue: 5, growth: "شروع عملیات" },
                        { year: "۱۴۰۲", revenue: 15, growth: "+۲۰۰%" },
                        { year: "۱۴۰۳", revenue: 45, growth: "+۲۰۰% (پیش‌بینی)" },
                        { year: "۱۴۰۴", revenue: 120, growth: "+۱۶۶% (پیش‌بینی)" }
                    ].map( ( item, idx ) => (
                        <div key={ idx } className="flex items-center gap-4">
                            <div className="w-20 text-sm font-semibold text-slate-700">{ item.year }</div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="text-sm text-slate-600">{ item.revenue } میلیارد تومان</div>
                                    <div className={ `text-sm font-semibold ${ idx > 0 ? 'text-emerald-600' : 'text-slate-500' }` }>
                                        { item.growth }
                                    </div>
                                </div>
                                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                        style={ { width: `${ ( item.revenue / 120 ) * 100 }%` } }
                                    />
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>

                <div className="mt-6 text-sm text-slate-500">
                    * اعداد سال‌های آتی بر اساس قراردادهای در دست اقدام و تحلیل بازار پیش‌بینی شده است
                </div>
            </div>

            {/* Market Opportunity */ }
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                    اندازه بازار و سهم هدف
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    { [
                        {
                            title: "بازار کل اتوماسیون ایران",
                            size: "۶,۰۰۰",
                            unit: "میلیارد تومان",
                            description: "ارزش بازار سالانه",
                            growth: "رشد ۲۵٪ سالانه"
                        },
                        {
                            title: "سهم بازار هدف WIT",
                            size: "۱۵%",
                            unit: "از بازار کل",
                            description: "تا سال ۱۴۰۶",
                            growth: "ارزش ۹۰۰ میلیارد تومان"
                        },
                        {
                            title: "پتانسیل منطقه‌ای",
                            size: "۱۰x",
                            unit: "ضریب رشد",
                            description: "در بازارهای همسایه",
                            growth: "عرضه به ۵ کشور منطقه"
                        }
                    ].map( ( item, idx ) => (
                        <div key={ idx } className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-2">{ item.size }</div>
                            <div className="text-sm text-slate-600 mb-1">{ item.unit }</div>
                            <h4 className="font-semibold text-slate-900 mb-2">{ item.title }</h4>
                            <p className="text-sm text-slate-600 mb-2">{ item.description }</p>
                            <div className="text-xs font-semibold text-emerald-600">{ item.growth }</div>
                        </div>
                    ) ) }
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <LuTarget className="h-4 w-4 text-indigo-600" />
                        <span>منبع: گزارش‌های مرکز آمار ایران، اتاق بازرگانی و تحلیل داخلی</span>
                    </div>
                </div>
            </div>
        </section>
    );
}