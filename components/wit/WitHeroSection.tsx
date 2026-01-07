// components/wit/WitHeroSection.tsx
import { LuGlobe, LuZap, LuShield, LuTrendingUp, LuDollarSign } from "react-icons/lu";
import Link from "next/link";

export default function WitHeroSection ()
{
    return (
        <section
            className="relative text-right overflow-hidden"
            aria-labelledby="wit-hero-heading"
            role="banner"
        >
            {/* Gradient Background */ }
            <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/50 to-white -z-20" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-10 blur-3xl -z-10" />

            <div className="space-y-8 max-w-6xl">
                {/* Investor Badge */ }
                <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-4 py-2 text-sm font-bold text-emerald-700">
                        <LuTrendingUp className="h-4 w-4" />
                        <span>فرصت سرمایه‌گذاری سری A</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 px-4 py-2 text-sm font-bold text-indigo-700">
                        <LuGlobe className="h-4 w-4" />
                        <span>فناوری هوشمند جهانی (WIT)</span>
                    </div>
                    <div className="text-xs text-slate-500">
                        از <strong className="text-slate-700">BMS Co.</strong> - پیشرو در انقلاب صنعتی چهارم
                    </div>
                </div>

                {/* H1 – Primary Investor Message */ }
                <div className="space-y-4">
                    <h1
                        id="wit-hero-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight"
                    >
                        فرصت سرمایه‌گذاری در
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600">
                            آینده اتوماسیون
                        </span>
                    </h1>

                    <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <LuDollarSign className="h-4 w-4 text-emerald-500" />
                        <span>ارزش‌گذاری ۱۰۰ میلیارد تومانی - جذب سرمایه ۲۰ میلیارد تومانی</span>
                    </div>
                </div>

                {/* Investor-focused Description */ }
                <div className="space-y-6">
                    <p className="text-base md:text-lg leading-8 text-slate-700 max-w-4xl">
                        <strong className="font-semibold text-slate-900">BMS Co.</strong> با پلتفرم WIT،
                        <em className="text-slate-900 font-medium"> پیشروترین فناوری اتوماسیون هوشمند ایران</em> را ایجاد کرده است.
                        این فرصت به شما امکان می‌دهد در شرکتی سرمایه‌گذاری کنید که{ ' ' }
                        <strong className="font-semibold text-slate-900">
                            رویای کنترل کامل دارایی‌ها در انقلاب صنعتی چهارم
                        </strong>{ ' ' }
                        را محقق می‌سازد و پتانسیل{ ' ' }
                        <span className="text-emerald-600 font-medium">
                            رشد تصاعدی و بازدهی استثنایی
                        </span>{ ' ' }
                        را دارد.
                    </p>

                    {/* Quick Investor Actions */ }
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link
                            href="#investment"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-3 font-semibold hover:shadow-lg transition-all"
                        >
                            <LuTrendingUp className="h-4 w-4" />
                            مشاهده فرصت سرمایه‌گذاری
                        </Link>
                        <Link
                            href="/investors/deck.pdf"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-300 text-slate-700 px-5 py-3 font-semibold hover:bg-slate-50 transition-colors"
                            target="_blank"
                        >
                            <LuDollarSign className="h-4 w-4" />
                            دانلود پرزنتیشن سرمایه‌گذاری
                        </Link>
                        <div className="text-xs text-slate-500">
                            <span className="font-semibold">زمان محدود:</span> فرصت سرمایه‌گذاری تا پایان فصل
                        </div>
                    </div>
                </div>

                {/* Key Investment Highlights */ }
                <div className="mt-8">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">نکات کلیدی برای سرمایه‌گذاران:</h3>
                    <ul
                        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm"
                        role="list"
                        aria-label="Investment highlights"
                    >
                        { [
                            { icon: LuTrendingUp, text: "رشد ۲۰۰٪+ درآمد سالانه", color: "text-emerald-500", highlight: true },
                            { icon: LuShield, text: "فناوری ثبت‌شده و متمایز", color: "text-indigo-500" },
                            { icon: LuGlobe, text: "پتانسیل توسعه منطقه‌ای", color: "text-blue-500" },
                            { icon: LuZap, text: "تیم اجرایی اثبات‌شده", color: "text-amber-500" },
                        ].map( ( item, idx ) => (
                            <li
                                key={ idx }
                                className={ `flex items-center gap-3 rounded-xl border ${ item.highlight ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white' } px-4 py-3 shadow-sm hover:shadow-md transition-shadow` }
                            >
                                <item.icon className={ `h-5 w-5 ${ item.color }` } />
                                <span className="text-slate-700">{ item.text }</span>
                            </li>
                        ) ) }
                    </ul>

                    {/* Quick Contact for Serious Investors */ }
                    <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                            <span>برای سرمایه‌گذاران جدی:</span>
                            <a href="tel:+982188776655" className="font-semibold text-slate-700 hover:text-indigo-600">
                                ۰۲۱-۸۸۷۷۶۶۵۵
                            </a>
                            <span>•</span>
                            <a href="mailto:invest@bms-co.ir" className="font-semibold text-slate-700 hover:text-indigo-600">
                                invest@bms-co.ir
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}