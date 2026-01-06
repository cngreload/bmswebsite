import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import
{
    LuGlobe,
    LuLayoutTemplate,
    LuSearch,
    LuShieldCheck,
    LuServer,
    LuUsers,
    LuVideo,
    LuMessageSquare,
    LuPenTool,
    LuTrendingUp,
    LuZap,
    LuCheckCheck,
    LuSparkles,
} from "react-icons/lu";

/* ---------------------------------------------
 * SEO METADATA
 * -------------------------------------------*/
export const metadata: Metadata = {
    title: "سازنده وب‌سایت و حضور دیجیتال کلینیک | Clinicans",
    description:
        "وب‌سایت‌ساز حرفه‌ای Clinicans برای مراکز درمانی و زیبایی؛ ساخت وب‌سایت، لندینگ‌پیج، سئو، هاست، امنیت و تولید محتوا — بدون نیاز به تیم فنی یا هزینه‌های سنگین.",
    keywords: [
        "سازنده وب‌سایت کلینیک",
        "طراحی سایت پزشکی",
        "سئو کلینیک",
        "دیجیتال برندینگ پزشکی",
        "وب‌سایت‌ساز درمانی",
        "Clinicans Digital Builder",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/clinicans/digital-builder",
    },
};

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansDigitalBuilderPage ()
{
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">

            {/* HERO */ }
            <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
                            <LuGlobe className="h-4 w-4 text-blue-600" />
                            حضور دیجیتال حرفه‌ای مراکز درمانی
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                                سازنده وب‌سایت و برندینگ دیجیتال Clinicans
                            </span>
                            <span className="block mt-4 text-2xl md:text-3xl font-medium text-slate-800">
                                توانمندسازی کلینیک در فضای آنلاین — بدون پیچیدگی فنی
                            </span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
                            Clinicans زیرساخت کامل حضور دیجیتال را برای ارائه‌دهندگان خدمات سلامت فراهم می‌کند.
                            بدون نیاز به طراح سایت، بدون دغدغه هاست و امنیت، و بدون استخدام نیروی سئو یا تولید محتوا.
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
                            src="/clinicans/digital-builder.png"
                            alt="سازنده وب‌سایت کلینیک Clinicans"
                            width={ 560 }
                            height={ 420 }
                            className="rounded-3xl shadow-2xl"
                            priority
                        />
                    </aside>
                </div>
            </section>

            {/* COST RELIEF SECTION */ }
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        حذف هزینه‌های سنگین حضور دیجیتال
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        طراحی سایت اختصاصی، هاست امن، سئو، تولید محتوا و نگهداری فنی —
                        معمولاً نیازمند چندین قرارداد و نیروی متخصص است.
                        Clinicans همه این موارد را در یک پلتفرم یکپارچه حذف می‌کند.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { [
                        "عدم نیاز به طراح وب‌سایت اختصاصی",
                        "حذف هزینه‌های هاست و سرور",
                        "عدم نیاز به استخدام متخصص سئو",
                        "عدم نیاز به تیم تولید محتوا",
                    ].map( ( item ) => (
                        <div
                            key={ item }
                            className="rounded-2xl bg-white border border-slate-200 p-6 text-center shadow-sm"
                        >
                            <LuCheckCheck className="h-6 w-6 text-emerald-500 mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">{ item }</p>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* CAPABILITIES */ }
            <section className="container mx-auto px-4 sm:px-6 py-20">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        قابلیت‌های منحصربه‌فرد سازنده دیجیتال Clinicans
                    </h2>
                    <p className="text-lg text-slate-600">
                        همه ابزارهای لازم برای ساخت، رشد و دیده‌شدن برند کلینیک شما
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    { [
                        { icon: LuLayoutTemplate, title: "قالب‌های تخصصی پزشکی", desc: "طراحی‌شده برای کلینیک‌های زیبایی، درمانی و دندانپزشکی" },
                        { icon: LuPenTool, title: "ساخت لندینگ‌پیج بدون کدنویسی", desc: "کشیدن، رها کردن و انتشار فوری" },
                        { icon: LuUsers, title: "معرفی پزشکان و پرسنل", desc: "پروفایل حرفه‌ای، تخصص‌ها و سوابق" },
                        { icon: LuMessageSquare, title: "نظرات و رضایت مراجعین", desc: "افزایش اعتماد و نرخ تبدیل" },
                        { icon: LuVideo, title: "پشتیبانی از ویدیو و رسانه", desc: "ویدیوهای معرفی خدمات و آموزش‌ها" },
                        { icon: LuSearch, title: "سئو داخلی خودکار", desc: "ساختار بهینه برای گوگل بدون تنظیمات پیچیده" },
                        { icon: LuServer, title: "هاست و CDN یکپارچه", desc: "سرعت بالا و دسترس‌پذیری پایدار" },
                        { icon: LuShieldCheck, title: "امنیت و نگهداری خودکار", desc: "SSL، بکاپ و به‌روزرسانی بدون دخالت شما" },
                        { icon: LuTrendingUp, title: "تحلیل ترافیک و عملکرد", desc: "بینش واقعی از بازدید و رفتار کاربران" },
                    ].map( ( { icon: Icon, title, desc } ) => (
                        <div
                            key={ title }
                            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
                        >
                            <Icon className="h-6 w-6 text-blue-600 mb-4" />
                            <h3 className="font-bold text-slate-800 mb-2">{ title }</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{ desc }</p>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* FINAL CTA */ }
            <section className="bg-gradient-to-br from-blue-600 to-emerald-500 py-20">
                <div className="container mx-auto px-4 sm:px-6 text-center text-white">
                    <LuZap className="h-12 w-12 mx-auto mb-6 text-white/80" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        برند دیجیتال کلینیک خود را حرفه‌ای بسازید
                    </h3>
                    <p className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto">
                        بدون هزینه‌های پنهان، بدون تیم فنی، و بدون پیچیدگی —
                        Clinicans مسیر حضور دیجیتال را برای شما ساده می‌کند.
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
