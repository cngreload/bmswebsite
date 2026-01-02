import { LuLayers, LuCpu, LuNetwork, LuDatabase } from "react-icons/lu";

const layers = [
    {
        title: "لایه تحلیل و تصمیم‌سازی",
        subtitle: "Analytics & Decision Intelligence",
        desc: "تجمیع و تحلیل داده‌ها برای تولید بینش عملیاتی، پایش شاخص‌های کلیدی و پشتیبانی از تصمیم‌گیری مدیریتی در سطح سازمان و حاکمیتی.",
        bg: "bg-indigo-600",
        text: "text-white",
    },
    {
        title: "لایه کاربردی و محصولات",
        subtitle: "Applications & Product Platforms",
        desc: "راهکارها و سامانه‌های نهایی مانند انرژی، سلامت و مدیریت عملیات که مستقیماً در میدان عمل مورد استفاده قرار می‌گیرند.",
        bg: "bg-indigo-500",
        text: "text-white",
    },
    {
        title: "لایه یکپارچه‌سازی و API",
        subtitle: "Integration & Secure APIs",
        desc: "ایجاد ارتباط کنترل‌شده با سامانه‌های بیرونی، ERP، BI و سرویس‌های سازمانی با حفظ امنیت و استقلال داده.",
        bg: "bg-indigo-400",
        text: "text-white",
    },
    {
        title: "سرویس‌های مرکزی و داده",
        subtitle: "Core Services & Data Platform",
        desc: "مدیریت هویت، امنیت، ثبت رخدادها، پردازش رویداد و نگهداری داده به‌عنوان ستون فقرات پلتفرم.",
        bg: "bg-indigo-300",
        text: "text-slate-900",
    },
    {
        title: "لایه کنترل و لبه (Edge)",
        subtitle: "Edge Computing & Control Layer",
        desc: "پردازش نزدیک به میدان برای کاهش تأخیر، افزایش پایداری و تضمین عملکرد حتی در شرایط قطع ارتباط.",
        bg: "bg-indigo-200",
        text: "text-slate-900",
    },
    {
        title: "لایه میدان و تجهیزات",
        subtitle: "PLC, Embedded & Field Devices",
        desc: "تجهیزات صنعتی، PLCها، سنسورها و کنترلرهای تعبیه‌شده که داده‌های واقعی عملیات را تولید می‌کنند.",
        bg: "bg-indigo-100",
        text: "text-slate-900",
    },
];

export default function WitArchitectureSection ()
{
    return (
        <section
            aria-labelledby="arch-heading"
            role="region"
            className="relative"
        >
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Textual Explanation – SEO Anchor */ }
                <div className="space-y-6 text-right max-w-xl">
                    <div className="inline-flex items-center gap-2 text-indigo-600">
                        <LuLayers className="h-5 w-5" />
                        <span className="text-sm font-bold tracking-wider">
                            معماری هسته‌ای WIT
                        </span>
                    </div>

                    <h2
                        id="arch-heading"
                        className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl leading-tight"
                    >
                        معماری لایه‌ای، آماده برای
                        <br />
                        <span className="text-indigo-600">
                            پروژه‌های صنعتی، حساس و مقیاس‌ملی
                        </span>
                    </h2>

                    <p className="text-sm md:text-base leading-8 text-slate-600">
                        پلتفرم WIT بر اساس یک معماری لایه‌ای صنعتی طراحی شده است که
                        مسیر داده را از
                        <strong className="text-slate-900 mx-1">تجهیزات میدانی</strong>
                        تا
                        <strong className="text-slate-900 mx-1">
                            تحلیل و تصمیم‌سازی مدیریتی
                        </strong>
                        به‌صورت یکپارچه پوشش می‌دهد.
                        این رویکرد امکان توسعه، نگهداری و ارتقای هر لایه را
                        بدون ایجاد اختلال در سایر بخش‌ها فراهم می‌کند.
                    </p>

                    {/* Key Signals */ }
                    <ul
                        className="grid gap-3 sm:grid-cols-2 text-xs md:text-sm text-slate-600"
                        role="list"
                        aria-label="WIT architecture key technologies"
                    >
                        <li className="flex items-center gap-2">
                            <LuCpu className="h-4 w-4 text-indigo-500" />
                            PLC & Embedded Controllers
                        </li>
                        <li className="flex items-center gap-2">
                            <LuNetwork className="h-4 w-4 text-indigo-500" />
                            Edge & Industrial Networks
                        </li>
                        <li className="flex items-center gap-2">
                            <LuDatabase className="h-4 w-4 text-indigo-500" />
                            Secure Data & Core Services
                        </li>
                        <li className="flex items-center gap-2">
                            <LuLayers className="h-4 w-4 text-indigo-500" />
                            Modular · Scalable · Fault-Tolerant
                        </li>
                    </ul>
                </div>

                {/* Visual Stack – Industrial Reference Diagram */ }
                <div className="flex flex-col gap-2 p-4 rounded-3xl border border-slate-200 bg-white shadow-xl max-w-md mx-auto w-full">
                    { layers.map( ( layer, i ) => (
                        <div
                            key={ i }
                            className={ `group flex flex-col items-center justify-center gap-1 py-4 rounded-xl text-center transition-all
              hover:scale-[1.02] hover:shadow-md ${ layer.bg } ${ layer.text }` }
                        >
                            <span className="font-bold text-sm md:text-base">
                                { layer.title }
                            </span>
                            <span className="text-[10px] opacity-80 font-mono uppercase tracking-widest">
                                { layer.subtitle }
                            </span>
                            <span className="mt-1 text-[11px] max-w-xs opacity-90 px-4">
                                { layer.desc }
                            </span>
                        </div>
                    ) ) }
                </div>
            </div>
        </section>
    );
}
