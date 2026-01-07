// components/wit/WitBmsStorySection.tsx
import { LuBuilding2, LuLightbulb, LuRocket, LuTarget } from "react-icons/lu";
import Link from "next/link";

export default function WitBmsStorySection ()
{
    return (
        <section
            id="story"
            className="relative rounded-[2.5rem] bg-gradient-to-bl from-indigo-50 to-white border border-slate-200 p-8 md:p-12"
            aria-labelledby="bms-story-heading"
        >
            {/* Background Pattern */ }
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-10" />

            <div className="relative z-10">
                {/* Section Header */ }
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <LuBuilding2 className="h-5 w-5 text-indigo-600" />
                            <span className="text-sm font-bold tracking-wider text-indigo-600">
                                بارمان محور سپادانا
                            </span>
                        </div>
                        <h2
                            id="bms-story-heading"
                            className="text-2xl md:text-3xl font-bold text-slate-900"
                        >
                            خالق WIT: از ایستگاه‌های CNG تا انقلاب در اتوماسیون
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            BMS Co. Since 2021
                        </span>
                    </div>
                </div>

                {/* Main Story Content */ }
                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                    {/* Left Column - Story */ }
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                <LuLightbulb className="h-5 w-5 text-amber-500" />
                                انگیزه اولیه: حل چالش‌های واقعی
                            </h3>
                            <p className="text-slate-700 leading-7">
                                با حضور عملی در حوزه انرژی و مدیریت ایستگاه‌های سوخت CNG در سطح ملی،
                                <strong className="text-slate-900"> محدودیت‌های سیستم‌های اتوماسیون موجود</strong>
                                را به‌وضوح درک کردیم. این تجربه عملی، جرقه‌ای شد برای خلق پلتفرمی که
                                <em> توانمندی‌های نهفته عصر هوش مصنوعی</em> را در خدمت اتوماسیون واقعی قرار دهد.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                <LuRocket className="h-5 w-5 text-green-500" />
                                از MVP تا تأیید ملی
                            </h3>
                            <p className="text-slate-700 leading-7">
                                با تمرکز بر B2G و مراکز آزمون دولتی،
                                <strong> گواهی‌های امنیتی پیشرفته</strong> را کسب کردیم و اجازه اجرای
                                <strong> پایلوت واقعی</strong> در یکی از پیچیده‌ترین ایستگاه‌ها را دریافت نمودیم.
                                موفقیت این پایلوت، مسیر را برای قرارداد ملی ایستگاه‌های CNG هموار ساخت.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Mission & Vision */ }
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">رسالت ما</h3>
                            <p className="text-slate-700 mb-4">
                                محقق ساختن رویای انسان مدرن برای <strong>دسترسی کامل به تمام جنبه‌های دارایی‌هایش</strong>
                                — اعم از کسب‌وکار، صنعت یا ملک — در هر زمان و مکان با بالاترین سطح امنیت.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-full">
                                <LuTarget className="h-4 w-4" />
                                دسترسی کامل + امنیت + کنترل لحظه‌ای
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">فراتر از محدودیت‌ها</h3>
                            <p className="text-slate-700 text-sm mb-3">
                                WIT صرفاً یک محصول نیست؛ یک <strong>پلتفرم مادر</strong> است که می‌تواند برای
                                هر صنعتی که به کارایی و راهکارهای هوشمند نیاز دارد، تخصصی‌سازی شود.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="text-xs text-slate-600">
                                    <div className="font-semibold">پروژه‌های موفق</div>
                                    <div>ICTS + Clinicans</div>
                                </div>
                                <Link
                                    href="/clinicans"
                                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                                >
                                    مشاهده Clinicans →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */ }
                <div className="relative">
                    <div className="absolute top-1/2 right-0 left-0 h-0.5 bg-slate-200 -translate-y-1/2" />
                    <div className="relative grid grid-cols-4 gap-4 text-center">
                        { [
                            { year: "۲۰۲۱", title: "تأسیس BMS", desc: "ورود به دنیای فناوری و کسب‌وکار" },
                            { year: "۲۰۲۲", title: "پلتفرم مادر", desc: "طراحی هسته WIT" },
                            { year: "۲۰۲۳", title: "پایلوت موفق", desc: "ICTS در ایستگاه‌های CNG" },
                            { year: "۲۰۲۴", title: "توسعه Clinicans", desc: "ورود به حوزه سلامت" },
                        ].map( ( item, index ) => (
                            <div key={ index } className="relative">
                                <div className="relative z-10 w-4 h-4 bg-indigo-600 rounded-full mx-auto mb-2" />
                                <div className="bg-white rounded-xl border border-slate-200 p-4">
                                    <div className="text-lg font-bold text-slate-900">{ item.year }</div>
                                    <div className="text-sm font-semibold text-slate-700 mt-1">{ item.title }</div>
                                    <div className="text-xs text-slate-500 mt-1">{ item.desc }</div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
            </div>
        </section>
    );
}