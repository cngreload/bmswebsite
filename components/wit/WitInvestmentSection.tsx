// components/wit/WitInvestmentSection.tsx
import
{
    LuTrendingUp,
    LuDownload,
    LuTarget,
    LuZap,
    LuShield,
    LuGlobe,
    LuDollarSign,

} from "react-icons/lu";
import Link from "next/link";

const investmentOpportunities = [
    {
        icon: LuTrendingUp,
        title: "سری A",
        amount: "۲۰ میلیارد تومان",
        valuation: "ارزش‌گذاری: ۱۰۰ میلیارد تومان",
        equity: "۲۰% سهام",
        timeline: "۱۸-۲۴ ماه",
        highlight: true,
        benefits: [
            "توسعه سریع بازار",
            "افزایش تیم فنی به ۳۰ نفر",
            "ورود به ۳ بازار جدید",
            "توسعه محصول Clinicans"
        ]
    },
    {
        icon: LuTarget,
        title: "سری Seed",
        amount: "۵ میلیارد تومان",
        valuation: "ارزش‌گذاری: ۵۰ میلیارد تومان",
        equity: "۱۰% سهام",
        timeline: "۱۲-۱۸ ماه",
        highlight: false,
        benefits: [
            "تسریع توسعه فنی",
            "توسعه تیم فروش",
            "MVP بازارهای جدید",
            "برندسازی"
        ]
    }
];

const roiProjections = [
    { year: "۱۴۰۳", revenue: "۱۵", growth: "۱۵۰%", valuation: "۱۰۰" },
    { year: "۱۴۰۴", revenue: "۴۰", growth: "۱۶۶%", valuation: "۲۵۰" },
    { year: "۱۴۰۵", revenue: "۱۲۰", growth: "۲۰۰%", valuation: "۶۰۰" },
    { year: "۱۴۰۶", revenue: "۳۰۰", growth: "۱۵۰%", valuation: "۱,۵۰۰" }
];

const exitStrategies = [
    {
        title: "اکتساب توسط شرکت‌های بزرگ",
        probability: "بالا",
        timeline: "۳-۵ سال",
        potential: "۱۰-۲۰x ROI",
        description: "شرکت‌های بزرگ فناوری یا صنعتی منطقه"
    },
    {
        title: "عرضه عمومی اولیه (IPO)",
        probability: "متوسط",
        timeline: "۵-۷ سال",
        potential: "۱۵-۳۰x ROI",
        description: "در بازار سرمایه ایران یا منطقه"
    },
    {
        title: "ادغام با شرکت‌های مکمل",
        probability: "متوسط",
        timeline: "۴-۶ سال",
        potential: "۸-۱۵x ROI",
        description: "ایجاد هلدینگ فناوری منطقه‌ای"
    }
];

export default function WitInvestmentSection ()
{
    return (
        <section
            id="investment"
            className="relative"
            aria-labelledby="investment-heading"
        >
            {/* Section Header */ }
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
                    <LuDollarSign className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        فرصت سرمایه‌گذاری استراتژیک
                    </span>
                </div>

                <h2
                    id="investment-heading"
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                >
                    سرمایه‌گذاری در <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">آینده اتوماسیون</span>
                </h2>

                <p className="text-slate-600 max-w-3xl mx-auto">
                    همراهی در رشد تصاعدی شرکتی که انقلاب صنعتی چهارم را در ایران رهبری می‌کند
                </p>
            </div>

            {/* Investment Rounds */ }
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                { investmentOpportunities.map( ( round, index ) => (
                    <div
                        key={ index }
                        className={ `relative rounded-3xl overflow-hidden ${ round.highlight ? 'border-2 border-emerald-500 shadow-xl' : 'border border-slate-200' } bg-white` }
                    >
                        { round.highlight && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                پیشنهاد ویژه
                            </div>
                        ) }

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <round.icon className={ `h-6 w-6 ${ round.highlight ? 'text-emerald-600' : 'text-slate-600' }` } />
                                        <h3 className="text-xl font-bold text-slate-900">{ round.title }</h3>
                                    </div>
                                    <div className="text-sm text-slate-500">{ round.timeline } زمان بازگشت سرمایه</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-slate-900">{ round.amount }</div>
                                    <div className="text-sm text-slate-600">{ round.equity }</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="text-sm font-semibold text-slate-700 mb-2">اهداف تخصیص سرمایه:</div>
                                <ul className="space-y-2">
                                    { round.benefits.map( ( benefit, idx ) => (
                                        <li key={ idx } className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            { benefit }
                                        </li>
                                    ) ) }
                                </ul>
                            </div>

                            <Link
                                href={ `/contact?type=investment-round-${ round.title.toLowerCase().replace( ' ', '-' ) }` }
                                className={ `block text-center py-3 rounded-xl font-semibold transition-all ${ round.highlight
                                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200' }` }
                            >
                                اطلاعات بیشتر و ترم‌شیت
                            </Link>
                        </div>
                    </div>
                ) ) }
            </div>

            {/* ROI Projections */ }
            <div className="mb-16">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <LuTrendingUp className="h-5 w-5 text-emerald-600" />
                    پیش‌بینی رشد مالی
                </h3>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">سال</th>
                                <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">درآمد (میلیارد تومان)</th>
                                <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">رشد سالانه</th>
                                <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">ارزش‌گذاری (میلیارد تومان)</th>
                            </tr>
                        </thead>
                        <tbody>
                            { roiProjections.map( ( projection, idx ) => (
                                <tr key={ idx } className="hover:bg-slate-50">
                                    <td className="p-4 border-b border-slate-100">
                                        <div className="font-semibold text-slate-900">{ projection.year }</div>
                                    </td>
                                    <td className="p-4 border-b border-slate-100">
                                        <div className="font-bold text-slate-900">{ projection.revenue }</div>
                                    </td>
                                    <td className="p-4 border-b border-slate-100">
                                        <div className="inline-flex items-center gap-1">
                                            <LuTrendingUp className="h-4 w-4 text-emerald-500" />
                                            <span className="font-semibold text-emerald-600">{ projection.growth }</span>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-slate-100">
                                        <div className="font-bold text-slate-900">{ projection.valuation }</div>
                                    </td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-sm text-slate-600">
                    * پیش‌بینی‌ها بر اساس تحلیل بازار، نرخ پذیرش فناوری و استراتژی رشد تهیه شده است
                </div>
            </div>

            {/* Competitive Advantages for Investors */ }
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                { [
                    {
                        icon: LuShield,
                        title: "مزیت رقابتی قوی",
                        desc: "فناوری ثبت‌شده و تیم فنی عمیق"
                    },
                    {
                        icon: LuZap,
                        title: "بازار در حال رشد",
                        desc: "تقاضای شدید برای اتوماسیون در ایران"
                    },
                    {
                        icon: LuGlobe,
                        title: "قابلیت توسعه منطقه‌ای",
                        desc: "پتانسیل ورود به بازارهای همسایه"
                    }
                ].map( ( advantage, idx ) => (
                    <div key={ idx } className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-5">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                            <advantage.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-2">{ advantage.title }</h4>
                        <p className="text-sm text-slate-600">{ advantage.desc }</p>
                    </div>
                ) ) }
            </div>

            {/* Exit Strategies */ }
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <LuTarget className="h-5 w-5 text-emerald-600" />
                    استراتژی‌های خروج
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    { exitStrategies.map( ( strategy, idx ) => (
                        <div key={ idx } className="bg-white rounded-2xl border border-slate-200 p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="font-bold text-slate-900">{ strategy.title }</h4>
                                <span className={ `text-xs font-bold px-2 py-1 rounded-full ${ strategy.probability === 'بالا'
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'bg-amber-100 text-amber-700'
                                    }` }>
                                    احتمال { strategy.probability }
                                </span>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">زمان‌بندی:</span>
                                    <span className="font-semibold text-slate-900">{ strategy.timeline }</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">پتانسیل بازدهی:</span>
                                    <span className="font-bold text-emerald-600">{ strategy.potential }</span>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600">{ strategy.description }</p>
                        </div>
                    ) ) }
                </div>
            </div>

            {/* Investor CTA */ }
            <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    آماده‌ای جزئیات مالی کامل را ببینید؟
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                    پرزنتیشن کامل سرمایه‌گذاری شامل تحلیل بازار، مدل مالی، تیم اجرایی و استراتژی رشد آماده ارائه است.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/investors/deck.pdf"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-300 text-slate-700 px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
                        target="_blank"
                    >
                        <LuDownload className="h-4 w-4" />
                        دانلود پرزنتیشن کامل
                    </Link>
                    <Link
                        href="/contact?type=financial-model-review"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all"
                    >
                        <LuDollarSign className="h-4 w-4" />
                        بررسی مدل مالی با تیم اجرایی
                    </Link>
                </div>
            </div>
        </section>
    );
}