// components/wit/WitHeroSection.tsx
import { LuCpu, LuLayers, LuNetwork, LuGlobe, LuZap, LuShield } from "react-icons/lu";
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-20" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl -z-10" />

            <div className="space-y-8 max-w-6xl">
                {/* Badge – Positioning & Entity Signal */ }
                <div
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 px-4 py-2 text-sm font-bold text-indigo-700"
                    aria-label="World Intelligent Technology Platform"
                >
                    <LuGlobe className="h-4 w-4" />
                    <span>فناوری هوشمند جهانی (World Intelligent Technology)</span>
                    <span className="text-xs font-normal text-indigo-500">از BMS Co.</span>
                </div>

                {/* H1 – Primary SEO Anchor */ }
                <div className="space-y-4">
                    <h1
                        id="wit-hero-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight"
                    >
                        هسته‌ی تصمیم‌ساز
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600">
                            زیرساخت‌های هوشمند
                        </span>
                    </h1>

                    <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <LuZap className="h-4 w-4 text-amber-500" />
                        <span>ادغام انقلابی سیستم‌های کنترل، IoT و هوش مصنوعی در انقلاب صنعتی چهارم</span>
                    </div>
                </div>

                {/* Supporting Description – Context for Google & Humans */ }
                <div className="space-y-6">
                    <p className="text-base md:text-lg leading-8 text-slate-700 max-w-4xl font-light">
                        <strong className="font-semibold text-slate-900">WIT</strong> پاسخی است به
                        <em className="text-slate-900"> محدودیت‌های سیستم‌های اتوماسیون موجود</em> —
                        یک پلتفرم هسته‌ای که داده‌های خام میدانی را به{ ' ' }
                        <strong className="font-semibold text-slate-900">
                            بینش عملیاتی، کنترلی و مدیریتی
                        </strong>{ ' ' }
                        تبدیل می‌کند و رویای{ ' ' }
                        <span className="text-slate-800 font-medium">
                            کنترل تمام جنبه‌های دارایی‌ها در هر زمان و مکان
                        </span>{ ' ' }
                        را محقق می‌سازد.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <Link
                            href="#story"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-white font-semibold hover:shadow-lg transition-all"
                        >
                            <LuShield className="h-4 w-4" />
                            کشف داستان BMS
                        </Link>
                        <div className="text-xs text-slate-500 max-w-md">
                            <span className="font-semibold">نکته:</span> WIT همان فناوری هوشمند کنترل و تگ (ICTS) است که اکنون با نام جهانی ارائه می‌شود
                        </div>
                    </div>
                </div>

                {/* Technical Proof Points – Scannable Signals */ }
                <div className="mt-8">
                    <h3 className="text-sm font-semibold text-slate-700 mb-4">توانمندی‌های کلیدی پلتفرم:</h3>
                    <ul
                        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm"
                        role="list"
                        aria-label="WIT platform capabilities"
                    >
                        { [
                            { icon: LuNetwork, text: "سنسورها · PLC · سیستم‌های تعبیه‌شده", color: "text-indigo-500" },
                            { icon: LuLayers, text: "IIoT · پردازش لبه‌ای · هسته داده", color: "text-purple-500" },
                            { icon: LuCpu, text: "صنعتی‌گرا · امن · مقیاس‌پذیر", color: "text-cyan-500" },
                            { icon: LuShield, text: "حاکمیت داده · امنیت بومی · مقاوم در برابر تحریم", color: "text-emerald-500" },
                        ].map( ( item, idx ) => (
                            <li
                                key={ idx }
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <item.icon className={ `h-5 w-5 ${ item.color }` } />
                                <span className="text-slate-700">{ item.text }</span>
                            </li>
                        ) ) }
                    </ul>
                </div>
            </div>
        </section>
    );
}