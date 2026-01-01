// components/cng/WhatSystemDoesSection.tsx
import
{
    LuCable,
    LuCpu,
    LuChartBar,
    LuArrowLeft
} from "react-icons/lu";

const processSteps = [
    {
        id: 1,
        stage: "Input",
        title: "داده‌برداری از میدان",
        icon: LuCable,
        color: "text-slate-600",
        bg: "bg-slate-50",
        description: "جمع‌آوری سیگنال‌های حیاتی از سنسورها، دیسپنسرها (نازل)، تگ‌های RFID و کمپرسورها. تبدیل رخدادهای فیزیکی به داده‌های خام دیجیتال در لبه (Edge)."
    },
    {
        id: "flow", // Visual spacer for flow arrow
        title: "flow"
    },
    {
        id: 2,
        stage: "Process",
        title: "پردازش و کنترل هوشمند",
        icon: LuCpu,
        color: "text-bms-primary",
        bg: "bg-blue-50",
        description: "اجرای منطق کنترلی در کنترلر صنعتی جایگاه. اعتبارسنجی خودروها، صدور فرمان سوخت‌گیری و مدیریت آلارم‌ها بدون وابستگی به اینترنت (Local Logic)."
    },
    {
        id: "flow",
        title: "flow"
    },
    {
        id: 3,
        stage: "Output",
        title: "هوش تجاری و تصمیم‌سازی",
        icon: LuChartBar,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        description: "تجمیع داده‌ها در سرور مرکزی. داشبوردهای مدیریتی برای رصد روند فروش، تعمیرات پیشگیرانه و سیاست‌گذاری کلان بر اساس داده‌های واقعی."
    }
];

export default function WhatSystemDoesSection ()
{
    return (
        <section
            id="how-it-works"
            className="py-10 md:py-16"
            aria-labelledby="system-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        جریان داده
                    </span>
                    <h2
                        id="system-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        از سیگنال میدان تا <span className="text-bms-primary">تصمیم مدیریتی</span>
                    </h2>
                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ICTS یک نرم‌افزار نیست؛ بلکه یک زنجیره ارزش است. ما سخت‌افزار صنعتی، نرم‌افزار میدانی و داشبورد ابری را
                        در یک پلتفرم یکپارچه ترکیب کرده‌ایم.
                    </p>
                </div>

                {/* 
          🔄 FLOW GRID 
          A specialized layout that inserts visual connectors between cards on desktop.
        */}
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4">
                    { processSteps.map( ( step, index ) =>
                    {

                        // Render Flow Arrow (Desktop Only)
                        if ( step.id === "flow" )
                        {
                            return (
                                <div key={ `arrow-${ index }` } className="hidden md:flex flex-col justify-center items-center w-12 shrink-0 opacity-30 text-slate-400">
                                    <div className="h-px w-full bg-current" />
                                    <LuArrowLeft className="h-5 w-5 -ml-1.5 -mt-2.5" />
                                </div>
                            );
                        }

                        // Render Process Card
                        const Icon = step.icon as React.ElementType; // Type assertion

                        return (
                            <article
                                key={ step.id }
                                className="group relative flex-1 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-bms-primary/20"
                            >
                                {/* Stage Label */ }
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                                        { step.stage }
                                    </span>
                                    <div className={ `flex h-10 w-10 items-center justify-center rounded-xl ${ step.bg } ${ step.color } transition-transform group-hover:scale-110` }>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right mt-2">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { step.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { step.description }
                                    </p>
                                </div>

                                {/* Mobile Connector (Vertical Arrow) */ }
                                { step.id !== 3 && (
                                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-300">
                                        <LuArrowLeft className="h-5 w-5 -rotate-90" />
                                    </div>
                                ) }
                            </article>
                        );
                    } ) }
                </div>

            </div>
        </section>
    );
}