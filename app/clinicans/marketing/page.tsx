import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import
{
    LuTrendingUp,
    LuMessageSquare,
    LuGift,
    LuChartBar,
    LuZap,
    LuCheck,
    LuRepeat,
    LuSparkles,
    LuMegaphone,
    LuHeartHandshake,
} from "react-icons/lu";

/* ---------------------------------------------
 * SEO METADATA
 * -------------------------------------------*/
export const metadata: Metadata = {
    title: "بازاریابی هوشمند و رشد کلینیک | Clinicans",
    description:
        "ابزارهای بازاریابی، وفاداری و جذب مراجع Clinicans؛ پیامک مارکتینگ هدفمند، کمپین‌های شخصی‌سازی‌شده، سیستم رفرال و باشگاه مشتریان برای رشد پایدار کلینیک بدون هزینه‌های سنگین تبلیغاتی.",
    keywords: [
        "بازاریابی کلینیک",
        "SMS مارکتینگ پزشکی",
        "وفاداری بیمار",
        "سیستم رفرال کلینیک",
        "افزایش مراجعه مجدد",
        "Clinicans Marketing",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/clinicans/marketing",
    },
};

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansMarketingPage ()
{
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

            {/* HERO */ }
            <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
                            <LuTrendingUp className="h-4 w-4 text-emerald-600" />
                            رشد پایدار و جذب هوشمند مراجع
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                                بازاریابی و وفاداری هوشمند Clinicans
                            </span>
                            <span className="block mt-4 text-2xl md:text-3xl font-medium text-slate-800">
                                افزایش مراجعه، حفظ بیماران و رشد ارگانیک — بدون تبلیغات پرهزینه
                            </span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
                            Clinicans بازاریابی کلینیک را از یک فعالیت پرهزینه و پراکنده،
                            به یک فرآیند داده‌محور، هوشمند و قابل اندازه‌گیری تبدیل می‌کند.
                            تمرکز ما بر <strong className="text-slate-800">بازگشت بیمار، وفاداری و رشد پایدار</strong> است —
                            نه صرفاً جذب مقطعی.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition"
                            >
                                <LuSparkles className="h-5 w-5 ml-2" />
                                درخواست دمو
                            </Link>
                            <Link
                                href="/clinicans"
                                className="inline-flex items-center rounded-2xl border-2 border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
                            >
                                بازگشت به Clinicans
                            </Link>
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <Image
                            src="/clinicans/marketing.png"
                            alt="بازاریابی و رشد کلینیک با Clinicans"
                            width={ 560 }
                            height={ 420 }
                            className="rounded-3xl shadow-2xl"
                            priority
                        />
                    </aside>
                </div>
            </section>

            {/* CORE VALUE */ }
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        بازاریابی مبتنی بر داده، نه حدس و تبلیغات کور
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        بسیاری از کلینیک‌ها هزینه‌های قابل‌توجهی صرف تبلیغات می‌کنند
                        بدون آنکه بدانند کدام مراجع بازمی‌گردد، چه کسی وفادار است
                        و کدام کمپین واقعاً اثرگذار بوده است.
                        Clinicans این ابهام را از بین می‌برد.
                    </p>
                </div>
            </section>

            {/* FEATURES */ }
            <section className="container mx-auto px-4 sm:px-6 py-20">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* SMS MARKETING */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuMessageSquare className="h-7 w-7 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            پیامک مارکتینگ هدفمند
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            ارسال پیامک‌های شخصی‌سازی‌شده بر اساس نوع خدمت، پزشک،
                            سابقه مراجعه، تاریخ آخرین ویزیت و رفتار بیمار.
                            هر پیام در زمان درست، برای فرد درست ارسال می‌شود —
                            نه ارسال انبوه و بی‌اثر.
                        </p>
                    </div>

                    {/* CAMPAIGNS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuMegaphone className="h-7 w-7 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            کمپین‌های هوشمند و قابل اندازه‌گیری
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            طراحی و اجرای کمپین‌های بازگشت بیمار، معرفی خدمات جدید
                            یا پر کردن اسلات‌های خالی، همراه با گزارش دقیق نرخ بازگشت،
                            تبدیل و اثربخشی هر کمپین.
                        </p>
                    </div>

                    {/* LOYALTY */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuGift className="h-7 w-7 text-pink-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            باشگاه مشتریان و وفاداری
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            سیستم امتیازدهی، سطح‌بندی و پاداش‌دهی برای افزایش مراجعه مجدد.
                            وفاداری بیماران به‌صورت ساختاریافته مدیریت می‌شود،
                            نه وابسته به تخفیف‌های مقطعی.
                        </p>
                    </div>

                    {/* REFERRAL */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuHeartHandshake className="h-7 w-7 text-red-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            سیستم رفرال و معرفی هوشمند
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            تبدیل مراجعین راضی به سفیران برند شما.
                            ردیابی دقیق معرفی‌ها، پاداش‌دهی شفاف و رشد ارگانیک
                            بدون هزینه‌های سنگین تبلیغات.
                        </p>
                    </div>

                    {/* RETENTION */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuRepeat className="h-7 w-7 text-indigo-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            افزایش مراجعه مجدد
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            یادآوری‌های هوشمند، پیشنهادهای شخصی‌سازی‌شده
                            و ارتباط مستمر با بیمار باعث می‌شود
                            مراجعه مجدد به یک رفتار طبیعی تبدیل شود.
                        </p>
                    </div>

                    {/* ANALYTICS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuChartBar className="h-7 w-7 text-cyan-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            تحلیل عملکرد بازاریابی
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            مشاهده دقیق اینکه کدام کانال، کدام کمپین
                            و کدام گروه از بیماران بیشترین بازگشت سرمایه را ایجاد کرده‌اند —
                            تصمیم‌گیری بر پایه داده، نه حدس.
                        </p>
                    </div>
                </div>
            </section>

            {/* COST SAVING */ }
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="grid gap-6 md:grid-cols-4 text-center">
                    { [
                        "کاهش وابستگی به تبلیغات پرهزینه",
                        "عدم نیاز به تیم مارکتینگ بزرگ",
                        "افزایش بازگشت سرمایه (ROI)",
                        "رشد پایدار و قابل پیش‌بینی",
                    ].map( ( item ) => (
                        <div
                            key={ item }
                            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
                        >
                            <LuCheck className="h-6 w-6 text-emerald-500 mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">{ item }</p>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* FINAL CTA */ }
            <section className="bg-gradient-to-br from-blue-600 to-emerald-500 py-20">
                <div className="container mx-auto px-4 sm:px-6 text-center text-white">
                    <LuZap className="h-12 w-12 mx-auto mb-6 text-white/80" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        رشد کلینیک را به فرآیندی هوشمند تبدیل کنید
                    </h3>
                    <p className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto">
                        Clinicans به شما کمک می‌کند بیماران فعلی را حفظ کنید،
                        بیماران جدید را با هزینه کمتر جذب کنید
                        و رشد کلینیک را قابل پیش‌بینی کنید.
                    </p>

                    <Link
                        href="/contact-us?type=clinicans-demo"
                        className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl hover:bg-blue-50 transition"
                    >
                        درخواست دمو رایگان
                    </Link>
                </div>
            </section>
        </main>
    );
}
