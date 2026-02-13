import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import
{
    LuBrain,

    LuTrendingUp,
    LuEye,
    LuDatabase,
    LuBell,
    LuChartBar,
    LuZap,
    LuCheck,
    LuSparkles,
    LuTarget,
} from "react-icons/lu";

/* ---------------------------------------------
 * SEO METADATA
 * -------------------------------------------*/
export const metadata: Metadata = {
    title: "هوش مصنوعی سلامت و تصمیم‌سازی هوشمند | Clinicans",
    description:
        "راهکارهای هوش مصنوعی Clinicans برای تحلیل داده‌های درمانی و مدیریتی، پیش‌بینی روندها، پیشنهاددهی هوشمند و کاهش خطای انسانی در کلینیک‌ها و مراکز درمانی.",
    keywords: [
        "هوش مصنوعی سلامت",
        "AI در کلینیک",
        "تحلیل داده پزشکی",
        "پیش‌بینی درمان",
        "تصمیم‌سازی هوشمند سلامت",
        "Clinicans Health AI",
    ],
    alternates: {
        canonical: "https://co-bms.ir/clinicans/health-ai",
    },
};

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansHealthAIPage ()
{
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

            {/* HERO */ }
            <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
                            <LuBrain className="h-4 w-4 text-purple-600" />
                            هوشمندسازی تصمیم‌گیری با هوش مصنوعی
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                هوش مصنوعی سلامت Clinicans
                            </span>
                            <span className="block mt-4 text-2xl md:text-3xl font-medium text-slate-800">
                                تحلیل، پیش‌بینی و پیشنهاددهی درمانی و مدیریتی
                            </span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
                            Clinicans با توسعه مدل‌های پیشرفته هوش مصنوعی و LLMهای تخصصی حوزه سلامت،
                            تصمیم‌گیری را از حالت تجربی و پراکنده خارج کرده و به فرآیندی
                            <strong className="text-slate-800"> داده‌محور، قابل توضیح و قابل اعتماد </strong>
                            تبدیل می‌کند.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition"
                            >
                                <LuSparkles className="h-5 w-5 ml-2" />
                                مشاهده دمو AI
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
                            src="/clinicans/health-ai.png"
                            alt="هوش مصنوعی سلامت در Clinicans"
                            width={ 560 }
                            height={ 420 }
                            className="rounded-3xl shadow-2xl"
                            priority
                        />
                    </aside>
                </div>
            </section>

            {/* PHILOSOPHY */ }
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        هوش مصنوعی به‌عنوان دستیار تصمیم — نه جایگزین پزشک
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        راهکارهای AI در Clinicans با هدف پشتیبانی از تصمیم‌گیری بالینی و مدیریتی طراحی شده‌اند.
                        خروجی‌ها قابل توضیح، قابل بررسی و در خدمت افزایش دقت، ایمنی و کیفیت خدمات سلامت هستند —
                        نه جایگزین قضاوت حرفه‌ای پزشک.
                    </p>
                </div>
            </section>

            {/* AI CAPABILITIES */ }
            <section className="container mx-auto px-4 sm:px-6 py-20">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* MEDICAL DATA ANALYSIS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuDatabase className="h-7 w-7 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            تحلیل داده‌های درمانی
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            تحلیل هوشمند پرونده‌های سلامت، سوابق درمانی، الگوهای مراجعه
                            و نتایج درمان برای شناسایی روندها، ریسک‌ها و نقاط قابل بهبود
                            در فرآیند درمان بیماران.
                        </p>
                    </div>

                    {/* MEDICAL IMAGE */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuEye className="h-7 w-7 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            آنالیز تصویر پزشکی
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            پردازش و تحلیل تصاویر پزشکی (مانند قبل/بعد درمان، تصاویر تشخیصی)
                            برای کمک به ارزیابی روند درمان، مستندسازی دقیق‌تر
                            و کاهش خطای انسانی.
                        </p>
                    </div>

                    {/* PREDICTIVE ANALYTICS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuTrendingUp className="h-7 w-7 text-purple-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            تحلیل و پیش‌بینی روندها
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            پیش‌بینی تقاضای خدمات، احتمال No-Show، رفتار مراجعه‌کنندگان
                            و روندهای درآمدی برای برنامه‌ریزی دقیق‌تر و کاهش عدم قطعیت.
                        </p>
                    </div>

                    {/* AI RECOMMENDATION */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuTarget className="h-7 w-7 text-red-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            پیشنهاددهی هوشمند خدمات
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            پیشنهاد خدمات تکمیلی، جلسات پیگیری و برنامه‌های درمانی
                            متناسب با پروفایل هر بیمار — افزایش کیفیت درمان
                            همراه با افزایش ارزش طول عمر بیمار.
                        </p>
                    </div>

                    {/* SMART REMINDERS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuBell className="h-7 w-7 text-amber-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            یادآوری‌های هوشمند مبتنی بر AI
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            زمان‌بندی خودکار پیام‌ها و یادآوری‌ها بر اساس رفتار بیمار،
                            تاریخچه درمان و احتمال عدم مراجعه — کاهش No-Show
                            بدون ایجاد مزاحمت.
                        </p>
                    </div>

                    {/* MANAGEMENT INSIGHTS */ }
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                        <LuChartBar className="h-7 w-7 text-cyan-600 mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">
                            بینش مدیریتی مبتنی بر هوش مصنوعی
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            تحلیل همزمان داده‌های درمانی و مالی برای ارائه
                            توصیه‌های مدیریتی عملی در زمینه قیمت‌گذاری،
                            تخصیص منابع و بهینه‌سازی درآمد.
                        </p>
                    </div>
                </div>
            </section>

            {/* TRUST & SAFETY */ }
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="grid gap-6 md:grid-cols-3 text-center">
                    { [
                        "کاهش خطای انسانی در تصمیم‌گیری",
                        "افزایش کیفیت و ایمنی درمان",
                        "تصمیم‌سازی شفاف و قابل توضیح",
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
            <section className="bg-gradient-to-br from-purple-600 to-blue-500 py-20">
                <div className="container mx-auto px-4 sm:px-6 text-center text-white">
                    <LuZap className="h-12 w-12 mx-auto mb-6 text-white/80" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        تصمیم‌گیری هوشمند را وارد کلینیک خود کنید
                    </h3>
                    <p className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto">
                        Clinicans AI به شما کمک می‌کند
                        کیفیت درمان را افزایش دهید،
                        ریسک‌ها را کاهش دهید
                        و کلینیک را با اطمینان مدیریت کنید.
                    </p>

                    <Link
                        href="/contact-us?type=clinicans-demo"
                        className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-2xl hover:bg-blue-50 transition"
                    >
                        درخواست دمو هوش مصنوعی
                    </Link>
                </div>
            </section>
        </main>
    );
}
