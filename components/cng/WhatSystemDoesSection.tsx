import
{
    LuCable,
    LuCpu,
    LuChartBar,
    LuArrowLeft
} from "react-icons/lu";

type Step = {
    id: number;
    stage: string;
    title: string;
    description: string;
    color: string;
    bg: string;
};

const steps: Step[] = [
    {
        id: 1,
        stage: "Input",
        title: "داده‌برداری از میدان",
        description:
            "جمع‌آوری سیگنال‌های حیاتی از سنسورها، دیسپنسرها (نازل)، تگ‌های RFID و کمپرسورها. تبدیل رخدادهای فیزیکی به داده‌های خام دیجیتال در لبه (Edge).",
        color: "text-slate-600",
        bg: "bg-slate-50",
    },
    {
        id: 2,
        stage: "Process",
        title: "پردازش و کنترل هوشمند",
        description:
            "اجرای منطق کنترلی در کنترلر صنعتی جایگاه. اعتبارسنجی خودروها، صدور فرمان سوخت‌گیری و مدیریت آلارم‌ها بدون وابستگی به اینترنت (Local Logic).",
        color: "text-bms-primary",
        bg: "bg-blue-50",
    },
    {
        id: 3,
        stage: "Output",
        title: "هوش تجاری و تصمیم‌سازی",
        description:
            "تجمیع داده‌ها در سرور مرکزی. داشبوردهای مدیریتی برای رصد روند فروش، تعمیرات پیشگیرانه و سیاست‌گذاری کلان بر اساس داده‌های واقعی.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
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
                        از سیگنال میدان تا{ " " }
                        <span className="text-bms-primary">تصمیم مدیریتی</span>
                    </h2>
                </div>

                {/* Flow */ }
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch">

                    { steps.map( ( step, index ) => (
                        <>
                            {/* Card */ }
                            <article
                                key={ step.id }
                                className="group relative flex-1 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                                        { step.stage }
                                    </span>

                                    <div
                                        className={ `flex h-10 w-10 items-center justify-center rounded-xl ${ step.bg } ${ step.color }` }
                                    >
                                        { step.id === 1 && <LuCable className="h-5 w-5" /> }
                                        { step.id === 2 && <LuCpu className="h-5 w-5" /> }
                                        { step.id === 3 && <LuChartBar className="h-5 w-5" /> }
                                    </div>
                                </div>

                                <div className="space-y-2 text-right">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { step.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { step.description }
                                    </p>
                                </div>
                            </article>

                            {/* Arrow (desktop only) */ }
                            { index < steps.length - 1 && (
                                <div
                                    key={ `arrow-${ step.id }` }
                                    className="hidden md:flex flex-col justify-center items-center w-12 shrink-0 opacity-30 text-slate-400"
                                >
                                    <div className="h-px w-full bg-current" />
                                    <LuArrowLeft className="h-5 w-5 -ml-1.5 -mt-2.5" />
                                </div>
                            ) }
                        </>
                    ) ) }

                </div>
            </div>
        </section>
    );
}
