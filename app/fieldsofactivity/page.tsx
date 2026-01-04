// app/solutions/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import
{
    LuFactory,
    LuActivity,
    LuDatabase,

    LuGlobe,
    LuTrendingUp,
    LuShieldCheck,
    LuZap,
    LuArrowLeft,
    LuLayers,

    LuHouse,
    LuWifi,

    LuCloud,
    LuBrain,
    LuLightbulb,
    LuPlug,
    LuMonitor,
} from "react-icons/lu";

// 🧠 SEO METADATA
export const metadata: Metadata = {
    title: "حوزه‌های فعالیت و راهکارهای هوشمند | بارمان محور اسپادانا",
    description:
        "بررسی حوزه‌های تخصصی بارمان: از هوشمندسازی جایگاه‌های سوخت (CNG) و سلامت دیجیتال (Clinicans) تا تحقق انقلاب صنعتی چهارم و توسعه سخت‌افزارهای بومی.",
    keywords: [
        "انقلاب صنعتی چهارم",
        "Industry 4.0",
        "هوشمندسازی انرژی",
        "CNG Automation",
        "سلامت دیجیتال",
        "اقتصاد دیجیتال",
        "بومی‌سازی سخت‌افزار",
        "پلتفرم دیجیتال",
        "اتوماسیون اداری",
        "خانه هوشمند",
        "هوش تجاری",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/solutions",
    },
    openGraph: {
        title: "حوزه‌های فعالیت و راهکارهای هوشمند",
        description: "نقش بارمان در انقلاب صنعتی چهارم و هوشمندسازی زیرساخت‌های ملی.",
        type: "website",
        locale: "fa_IR",
    },
};

// 🧠 SOLUTIONS DATA
const solutionCategories = [
    {
        id: "platform",
        title: "پلتفرم دیجیتال",
        subtitle: "معماری ابری و میکروسرویس",
        description:
            "پلتفرم‌های یکپارچه مبتنی بر معماری ابری و میکروسرویس برای مدیریت هوشمند فرآیندهای سازمانی",
        icon: LuCloud,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        features: [
            "معماری میکروسرویس مقیاس‌پذیر",
            "پلتفرم‌های ابری ترکیبی (Hybrid Cloud)",
            "API Gateway و مدیریت سرویس‌ها",
            "کانتینر سازی با Docker & Kubernetes",
        ],
    },
    {
        id: "industry",
        title: "صنعت هوشمند",
        subtitle: "صنعت ۴.۰ و IIoT",
        description:
            "اتصال ماشین‌آلات به شبکه و پیاده‌سازی راهکارهای انقلاب صنعتی چهارم در کارخانه‌های هوشمند",
        icon: LuFactory,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        features: [
            "اتصال ماشین‌آلات به شبکه (IIoT)",
            "دوقلوی دیجیتال (Digital Twin)",
            "کنترل و مانیتورینگ بلادرنگ",
            "پیش‌بینی خرابی (Predictive Maintenance)",
        ],
    },
    {
        id: "automation",
        title: "اتوماسیون",
        subtitle: "دیجیتالی‌سازی گردش کار",
        description:
            "اتوماسیون اداری و دیجیتالی‌سازی کامل فرآیندهای کسب‌وکار با راهکارهای نوین",
        icon: LuZap,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        features: [
            "اتوماسیون فرآیندهای اداری",
            "گردش کار هوشمند (Workflow)",
            "مدیریت اسناد الکترونیک",
            "یکپارچه‌سازی سیستم‌ها",
        ],
    },
    {
        id: "health",
        title: "سلامت دیجیتال",
        subtitle: "مدیریت هوشمند مراکز درمانی",
        description:
            "راهکارهای جامع سلامت الکترونیک برای مدیریت هوشمند بیمارستان‌ها و کلینیک‌ها",
        icon: LuActivity,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        features: [
            "پرونده الکترونیک سلامت (EHR)",
            "نوبت‌دهی هوشمند",
            "مدیریت دارو و انبار",
            "تله‌مدیسین و مشاوره آنلاین",
        ],
    },
    {
        id: "energy",
        title: "انرژی",
        subtitle: "پایش هوشمند مصرف",
        description: "سیستم‌های پایش انرژی و بهینه‌سازی مصرف با سنسورهای هوشمند",
        icon: LuPlug,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        features: [
            "سنسورهای هوشمند مصرف انرژی",
            "پایش بلادرنگ مصرف",
            "بهینه‌سازی خودکار مصرف",
            "گزارش‌گیری تحلیلی انرژی",
        ],
    },
    {
        id: "smart-home",
        title: "خانه هوشمند",
        subtitle: "BMS و کنترل تاسیسات",
        description: "سیستم مدیریت ساختمان (BMS) و اتوماسیون خانه‌های هوشمند",
        icon: LuHouse,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200",
        features: [
            "سیستم مدیریت ساختمان (BMS)",
            "کنترل روشنایی و دمای هوشمند",
            "امنیت و نظارت تصویری",
            "مدیریت مصرف انرژی ساختمان",
        ],
    },
    {
        id: "bi",
        title: "هوش تجاری (BI)",
        subtitle: "داشبوردهای تصمیم‌ساز",
        description: "پلتفرم هوش تجاری با داشبوردهای تعاملی و گزارش‌های تحلیلی",
        icon: LuBrain,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200",
        features: [
            "داشبوردهای مدیریتی تعاملی",
            "گزارش‌سازی تحلیلی پیشرفته",
            "هشدارهای هوشمند",
            "تحلیل داده‌های کلان (Big Data)",
        ],
    },
];

// 🧠 INDUSTRY 4.0 FEATURES
const industry4Features = [
    {
        title: "اتصال ماشین‌آلات",
        description: "یکپارچه‌سازی تجهیزات صنعتی با پروتکل‌های استاندارد IIoT",
        icon: LuWifi,
    },
    {
        title: "داده‌محوری",
        description: "تصمیم‌گیری مبتنی بر تحلیل داده‌های بلادرنگ",
        icon: LuDatabase,
    },
    {
        title: "خودکارسازی",
        description: "اتوماسیون کامل فرآیندهای تولید و کنترل کیفیت",
        icon: LuZap,
    },
    {
        title: "یادگیری ماشین",
        description: "بهینه‌سازی فرآیندها با الگوریتم‌های هوش مصنوعی",
        icon: LuBrain,
    },
];

export default function SolutionsPage ()
{
    // 🧠 CRAWLER EMPATHY: CollectionPage Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "راهکارهای هوشمند بارمان",
        description: "مجموعه خدمات و محصولات در حوزه اتوماسیون صنعتی و سلامت دیجیتال",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: solutionCategories.map( ( cat, index ) => ( {
                "@type": "ListItem",
                position: index + 1,
                name: `${ cat.title } - ${ cat.subtitle }`,
                description: cat.description,
            } ) ),
        },
    };

    return (
        <>
            <Script
                id="json-ld-solutions"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="flex flex-col w-full bg-slate-50">
                {/* 🧠 1. HERO SECTION */ }
                <section className="relative pt-32 pb-20 lg:pt-40 bg-white overflow-hidden border-b border-slate-200">
                    {/* Background Tech Pattern */ }
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 border border-blue-100">
                                <LuLayers className="w-3.5 h-3.5" />
                                راهکارهای تخصصی بارمان
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                                اکوسیستم یکپارچه <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                                    مدیریت و هوشمندسازی
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-3xl text-balance">
                                ما با تکیه بر دانش عمیق در حوزه‌های مختلف فناوری، راهکارهای جامعی برای
                                <span className="text-slate-900 font-medium mx-1 border-b-2 border-orange-200">
                                    هوشمندسازی کسب‌وکارها
                                </span>
                                ارائه می‌دهیم. از پلتفرم‌های ابری پیچیده تا سیستم‌های ساده خانه هوشمند.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 🧠 2. SOLUTIONS OVERVIEW GRID */ }
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                حوزه‌های تخصصی بارمان
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                راهکارهای جامع ما طیف وسیعی از نیازهای دیجیتال سازمان‌ها را پوشش می‌دهد
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            { solutionCategories.map( ( category ) => (
                                <div
                                    key={ category.id }
                                    className={ `group relative p-6 rounded-2xl border ${ category.borderColor } ${ category.bgColor } hover:shadow-xl hover:-translate-y-1 transition-all duration-300` }
                                >
                                    <div className="absolute top-4 left-4">
                                        <div className={ `p-3 rounded-xl ${ category.bgColor } border ${ category.borderColor }` }>
                                            <category.icon className={ `w-6 h-6 ${ category.color }` } />
                                        </div>
                                    </div>

                                    <div className="pt-12">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{ category.title }</h3>
                                        <p className="text-sm text-slate-700 mb-3">{ category.subtitle }</p>
                                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                            { category.description }
                                        </p>

                                        <div className="space-y-2">
                                            { category.features.slice( 0, 2 ).map( ( feature, idx ) => (
                                                <div key={ idx } className="flex items-center gap-2">
                                                    <div className={ `w-1.5 h-1.5 rounded-full ${ category.bgColor }` } />
                                                    <span className="text-xs text-slate-700">{ feature }</span>
                                                </div>
                                            ) ) }
                                        </div>

                                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={ `/solutions/${ category.id }` }
                                                className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-blue-600"
                                            >
                                                مشاهده جزئیات
                                                <LuArrowLeft className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>

                {/* 🧠 3. INDUSTRY 4.0 DEEP DIVE */ }
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-300 font-mono text-xs mb-6">
                                    <LuGlobe className="w-3.5 h-3.5" />
                                    <span>انقلاب صنعتی چهارم</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    صنعت ۴.۰: <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                        اتصال فیزیک به دیجیتال
                                    </span>
                                </h2>

                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    انقلاب صنعتی چهارم (Industry 4.0) یعنی خلق سیستم‌های{ " " }
                                    <strong>فیزیکی-سایبری (CPS)</strong>. جایی که ماشین‌ها حرف می‌زنند و
                                    داده‌ها بلادرنگ تحلیل می‌شوند. بارمان دقیقاً در این نقطه ایستاده است.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    { industry4Features.map( ( feature, idx ) =>
                                    {
                                        const Icon = feature.icon;
                                        return (
                                            <div
                                                key={ idx }
                                                className="bg-white/5 p-4 rounded-xl border border-white/10"
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="p-2 rounded-lg bg-white/10">
                                                        <Icon className="w-5 h-5 text-emerald-400" />
                                                    </div>
                                                    <h4 className="font-bold text-white">{ feature.title }</h4>
                                                </div>
                                                <p className="text-sm text-slate-400">{ feature.description }</p>
                                            </div>
                                        );
                                    } ) }
                                </div>
                            </div>

                            <div className="relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                                    <Image
                                        src="/images/worlds/industry4-smart-infra.svg"
                                        alt="صنعت هوشمند ۴.۰"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                                </div>

                                {/* Floating Stats */ }
                                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white max-w-xs">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">IIoT Connectivity</span>
                                        <span className="text-xs opacity-70">+40%</span>
                                    </div>
                                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-4/5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 4. DIGITAL PLATFORM ARCHITECTURE */ }
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                معماری پلتفرم‌های دیجیتال
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                زیرساخت ابری مقیاس‌پذیر با معماری میکروسرویس برای سازمان‌های بزرگ
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 text-right">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    از ایده تا اجرا: پلتفرم‌های یکپارچه
                                </h3>
                                <p className="text-slate-600 leading-8">
                                    ما با معماری میکروسرویس و رویکرد Cloud-Native، پلتفرم‌هایی طراحی
                                    می‌کنیم که قابلیت مقیاس‌پذیری بی‌نهایت دارند. هر سرویس به صورت مستقل
                                    توسعه، تست و مستقر می‌شود.
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 text-sm mb-2">
                                            میکروسرویس‌ها
                                        </h4>
                                        <p className="text-xs text-blue-700">
                                            جداسازی سرویس‌ها برای توسعه مستقل
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 text-sm mb-2">API Gateway</h4>
                                        <p className="text-xs text-blue-700">مدیریت متمرکز درخواست‌ها</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 text-sm mb-2">کانتینر‌سازی</h4>
                                        <p className="text-xs text-blue-700">استقرار یکسان در همه محیط‌ها</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 text-sm mb-2">
                                            مقیاس خودکار
                                        </h4>
                                        <p className="text-xs text-blue-700">
                                            افزایش منابع بر اساس تقاضا
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl">
                                <Image
                                    src="/images/worlds/cloud-architecture.svg"
                                    alt="معماری ابری و میکروسرویس"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 5. SMART HOME & BUILDING AUTOMATION */ }
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl">
                                <Image
                                    src="/images/worlds/smart-home.svg"
                                    alt="خانه هوشمند و BMS"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent" />
                            </div>

                            <div className="order-1 lg:order-2 space-y-6 text-right">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    خانه و ساختمان هوشمند
                                </h3>
                                <p className="text-slate-600 leading-8">
                                    سیستم مدیریت ساختمان (BMS) ما تمامی تجهیزات را یکپارچه کرده و امکان
                                    کنترل هوشمند روشنایی، دما، امنیت و مصرف انرژی را فراهم می‌کند.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                                        <div className="p-3 rounded-lg bg-cyan-50 text-cyan-600">
                                            <LuHouse className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">کنترل مرکزی</h4>
                                            <p className="text-sm text-slate-600">
                                                مدیریت تمام تجهیزات از یک پنل واحد
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                                        <div className="p-3 rounded-lg bg-cyan-50 text-cyan-600">
                                            <LuShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">امنیت هوشمند</h4>
                                            <p className="text-sm text-slate-600">
                                                نظارت تصویری و سیستم‌های هشدار پیشرفته
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                                        <div className="p-3 rounded-lg bg-cyan-50 text-cyan-600">
                                            <LuZap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">مدیریت انرژی</h4>
                                            <p className="text-sm text-slate-600">
                                                بهینه‌سازی خودکار مصرف برق و آب
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 6. BUSINESS INTELLIGENCE */ }
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                هوش تجاری (BI) و تحلیل داده
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                تبدیل داده‌های خام به بینش‌های ارزشمند برای تصمیم‌گیری استراتژیک
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                                    <LuMonitor className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">داشبوردهای مدیریتی</h4>
                                <p className="text-slate-600">
                                    داشبوردهای تعاملی با قابلیت شخصی‌سازی برای مدیران ارشد
                                </p>
                            </div>

                            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                                    <LuTrendingUp className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">گزارش‌گیری پیشرفته</h4>
                                <p className="text-slate-600">
                                    گزارش‌های تحلیلی با قابلیت دریل‌داون (Drill-Down) چندسطحی
                                </p>
                            </div>

                            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                                    <LuLightbulb className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">هشدارهای هوشمند</h4>
                                <p className="text-slate-600">
                                    سیستم هشدار خودکار بر اساس الگوهای ناهنجاری در داده‌ها
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 7. CTA */ }
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">
                            <LuZap className="w-4 h-4" />
                            <span>آماده هوشمندسازی هستید؟</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            آینده کسب‌وکار شما هوشمند است
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                            برای ورود به دنیای صنعت نسل چهارم، نیاز به شریکی دارید که هم زبان سخت‌افزار
                            را بفهمد و هم زبان نرم‌افزار را.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-lg"
                            >
                                درخواست مشاوره رایگان
                            </Link>
                            <Link
                                href="/technologies"
                                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                آشنایی با فناوری‌های ما
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}