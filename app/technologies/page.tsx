// app/technologies/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Import Si icons from react-icons/si
import
{
    SiLaravel,
    SiSharp,
    SiNextdotjs,
    SiDotnet,
    SiDjango,
    SiPython,
    SiReact,
    SiMysql,
    SiTailwindcss,
    SiThreedotjs,
    SiCplusplus,
} from "react-icons/si";

// Import Lu icons from react-icons/lu
import
{
    LuCpu,
    LuCircuitBoard,
    LuServer,
    LuLayoutDashboard,
    LuWifi,
    LuScan,
    LuRadio,
    LuBrainCircuit,
    LuCode,
    LuAward,
    LuTrendingUp,
    LuArrowLeft,
    LuChevronLeft,
    LuHouse,
} from "react-icons/lu";

// 🧠 SEO METADATA
export const metadata: Metadata = {
    title: "تکنولوژی و زیرساخت فنی | مهندسی بارمان",
    description:
        "بررسی عمیق استک فنی بارمان: معماری میکروسرویس، طراحی برد (PCB)، فرم‌ورک‌های نهفته و هوش مصنوعی در لبه (Edge AI).",
    keywords: [
        "Embedded Systems",
        "Industrial IoT",
        ".NET Core Architecture",
        "React & Next.js",
        "AI Agents",
        "PCB Design",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/technologies",
    },
};

// 🧠 DATA: GROWTH STAGES
const evolutionSteps = [
    {
        id: "hardware",
        step: "01",
        title: "بومی‌سازی سخت‌افزار",
        en: "Hardware Layer",
        desc: "نقطه شروع: طراحی شماتیک و PCB چندلایه. نوشتن فرم‌ورک‌های (Firmware) بلادرنگ با C/C++ برای کنترلرهای صنعتی.",
        icon: LuCircuitBoard,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        id: "connectivity",
        step: "02",
        title: "اتصال و شبکه اشیاء",
        en: "Connectivity & IoT",
        desc: "پیاده‌سازی پروتکل‌های امن صنعتی (Modbus/MQTT). انتقال داده از لایه فیزیکی به سرورها با رمزنگاری سخت‌افزاری.",
        icon: LuWifi,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        id: "platform",
        step: "03",
        title: "پلتفرم ابری داده",
        en: "Digital Platform",
        desc: "معماری میکروسرویس برای مدیریت میلیون‌ها تراکنش. دیتابیس‌های توزیع‌شده و داشبوردهای تعاملی وب.",
        icon: LuLayoutDashboard,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        id: "ai",
        step: "04",
        title: "هوش مصنوعی و عامل‌ها",
        en: "AI Agents & Insight",
        desc: "لایه فعلی: پردازش تصویر در لبه (Edge Vision) و الگوریتم‌های پیش‌بینی خرابی (Predictive Maintenance).",
        icon: LuBrainCircuit,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
];

// 🧠 DATA: TECH STACK
const techCategories = [
    {
        title: "لایه سخت‌افزار و فیلد",
        subtitle: "Field & Hardware",
        icon: LuCpu,
        items: [
            {
                icon: LuRadio,
                name: "Industrial Sensors",
                desc: "Data Acquisition",
                color: "text-slate-600",
            },
            {
                icon: LuScan,
                name: "RFID / NFC",
                desc: "Identification",
                color: "text-slate-600",
            },
            {
                icon: LuWifi,
                name: "IoT Protocols",
                desc: "MQTT / Modbus",
                color: "text-blue-600",
            },
            {
                icon: SiCplusplus,
                name: "Embedded C++",
                desc: "Real-time OS",
                color: "text-blue-800",
            },
            {
                icon: LuCircuitBoard,
                name: "Altium Designer",
                desc: "PCB Design",
                color: "text-amber-600",
            },
        ],
    },
    {
        title: "هسته و بک‌اند",
        subtitle: "Core Engineering",
        icon: LuServer,
        items: [
            {
                icon: SiSharp,
                name: "C#",
                desc: "Business Logic",
                color: "text-purple-600",
            },
            {
                icon: SiDotnet,
                name: ".NET Core",
                desc: "High Perf API",
                color: "text-indigo-600",
            },
            {
                icon: SiPython,
                name: "Python",
                desc: "AI & Data Processing",
                color: "text-yellow-600",
            },
            {
                icon: SiDjango,
                name: "Django",
                desc: "Admin Panels",
                color: "text-emerald-700",
            },
            {
                icon: SiMysql,
                name: "PostgreSQL",
                desc: "Relational DB",
                color: "text-blue-600",
            },
        ],
    },
    {
        title: "رابط کاربری دیجیتال",
        subtitle: "Digital Experience",
        icon: LuLayoutDashboard,
        items: [
            {
                icon: SiNextdotjs,
                name: "Next.js 14",
                desc: "App Framework",
                color: "text-slate-900",
            },
            {
                icon: SiReact,
                name: "React",
                desc: "Component Library",
                color: "text-sky-500",
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS",
                desc: "Design System",
                color: "text-cyan-500",
            },
            {
                icon: SiThreedotjs,
                name: "Three.js",
                desc: "3D Visualization",
                color: "text-slate-800",
            },
            {
                icon: SiLaravel,
                name: "Laravel",
                desc: "Support Services",
                color: "text-red-600",
            },
        ],
    },
];

export default function TechnologiesPage ()
{
    // 🧠 CRAWLER EMPATHY: ItemList Schema for Tech Stack
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Barman Technology Stack",
        description: "Technologies and frameworks used in Barman's industrial solutions.",
        itemListElement: techCategories.flatMap( ( cat, catIdx ) =>
            cat.items.map( ( item, itemIdx ) => ( {
                "@type": "ListItem",
                position: catIdx * 10 + itemIdx + 1,
                name: item.name,
                description: item.desc,
            } ) )
        ),
    };

    return (
        <>
            <Script
                id="json-ld-tech"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="flex flex-col w-full bg-slate-50 min-h-screen">
                {/* Navigation Anchor */ }
                <div className="border-b border-slate-200 bg-white py-3">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                        >
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-indigo-600">زیرساخت فنی</span>
                    </div>
                </div>

                {/* 🧠 1. HERO SECTION */ }
                <section className="relative pt-20 pb-20 overflow-hidden bg-white border-b border-slate-200">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="container relative z-10 mx-auto px-4 max-w-6xl text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 mb-8 uppercase tracking-wider font-mono">
                            <LuCode className="w-4 h-4" />
                            Engineering & Innovation
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8">
                            تکنولوژی؛ <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bms-primary to-indigo-600">
                                زبان خلق ارزش
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                            در بارمان، ما مصرف‌کننده تکنولوژی نیستیم، بلکه سازنده آن هستیم. ترکیبی از{ " " }
                            <span className="font-semibold text-slate-900 border-b-2 border-amber-200">
                                سخت‌افزار دقیق
                            </span>{ " " }
                            و
                            <span className="font-semibold text-slate-900 border-b-2 border-indigo-200">
                                نرم‌افزار هوشمند
                            </span>{ " " }
                            که هویت دانش‌بنیان ما را شکل می‌دهد.
                        </p>
                    </div>
                </section>

                {/* 🧠 2. EVOLUTION STORY */ }
                <section
                    className="py-24 bg-slate-900 text-white relative overflow-hidden"
                    aria-labelledby="evolution-heading"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            {/* Narrative */ }
                            <div className="lg:w-1/3 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-yellow-400 font-bold mb-4">
                                    <LuAward className="w-6 h-6" />
                                    <h2 id="evolution-heading" className="text-sm uppercase tracking-widest">
                                        مسیر بلوغ فناوری
                                    </h2>
                                </div>
                                <p className="text-3xl font-bold mb-6 leading-tight">
                                    از لایه‌های سخت‌افزاری تا{ " " }
                                    <span className="text-indigo-400">هوش مصنوعی</span>
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-8 text-sm text-justify">
                                    تبدیل شدن به یک شرکت دانش‌بنیان اتفاقی نبود. این حاصل حرکت استراتژیک ما از
                                    لایه‌های سطحی به لایه‌های عمیق مهندسی (Deep Tech) بود.
                                </p>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl font-bold text-white">
                                            100<span className="text-emerald-400 text-2xl">%</span>
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                                            In-House
                                            <br />
                                            Development
                                        </div>
                                    </div>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-full animate-[pulse_3s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */ }
                            <ol className="lg:w-2/3 grid gap-6">
                                { evolutionSteps.map( ( item, idx ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li
                                            key={ item.id }
                                            className={ `group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${ item.border }` }
                                        >
                                            {/* Icon */ }
                                            <div
                                                className={ `flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 ${ item.bg } ${ item.color }` }
                                            >
                                                <Icon className="w-8 h-8" />
                                            </div>

                                            {/* Content */ }
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                                        { item.title }
                                                    </h3>
                                                    <span className="text-4xl font-bold text-white/5 font-mono select-none">
                                                        { item.step }
                                                    </span>
                                                </div>
                                                <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                                                    { item.en }
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-3 mt-1">
                                                    { item.desc }
                                                </p>
                                            </div>

                                            {/* Connector (Visual) */ }
                                            <div className="hidden md:flex items-center justify-center text-white/10">
                                                { idx !== evolutionSteps.length - 1 && (
                                                    <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent absolute -bottom-6 left-[4.5rem]" />
                                                ) }
                                                <LuTrendingUp className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                                            </div>
                                        </li>
                                    );
                                } ) }
                            </ol>
                        </div>
                    </div>
                </section>

                {/* 🧠 3. TECH STACK GRID */ }
                <section className="py-24 bg-slate-50" aria-labelledby="stack-heading">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16 space-y-4">
                            <h2 id="stack-heading" className="text-3xl font-bold text-slate-900">
                                نقشه مهندسی پلتفرم
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
                                ما از بهترین ابزارهای متن‌باز (Open Source) و فریم‌ورک‌های مدرن برای ساخت
                                سیستم‌هایی پایدار و مقیاس‌پذیر استفاده می‌کنیم.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            { techCategories.map( ( category, idx ) => (
                                <div
                                    key={ idx }
                                    className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Header */ }
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{ category.title }</h3>
                                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                                                { category.subtitle }
                                            </span>
                                        </div>
                                    </div>

                                    {/* Items */ }
                                    <ul className="space-y-3 relative z-10">
                                        { category.items.map( ( tech, tIdx ) =>
                                        {
                                            const TechIcon = tech.icon;
                                            return (
                                                <li
                                                    key={ tIdx }
                                                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <TechIcon className={ `w-5 h-5 ${ tech.color }` } />
                                                        <span className="font-bold text-slate-700 text-sm">
                                                            { tech.name }
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-slate-400 font-mono bg-white px-2 py-1 rounded-md border border-slate-100">
                                                        { tech.desc }
                                                    </span>
                                                </li>
                                            );
                                        } ) }
                                    </ul>

                                    {/* Decor */ }
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-5 text-slate-900 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                                        <category.icon className="w-full h-full" />
                                    </div>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>

                {/* 🧠 4. CTA */ }
                <section className="py-24 border-t border-slate-200 bg-white text-center">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                            پروژه شما به کدام لایه تکنولوژی نیاز دارد؟
                        </h2>
                        <p className="text-slate-600 mb-10 leading-7">
                            از طراحی برد الکترونیکی تا پیاده‌سازی هوش مصنوعی؛ تیم فنی ما آماده تحلیل
                            نیازمندی‌های شماست.
                        </p>
                        <Link
                            href="/contact?type=tech-consult"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
                        >
                            <span>درخواست مشاوره فنی</span>
                            <LuArrowLeft className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}