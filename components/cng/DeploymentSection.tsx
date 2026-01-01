// components/cng/DeploymentSection.tsx
import
{
    LuSearch,
    LuPenTool,
    LuHammer,
    LuNetwork,
    LuCirclePlay,
    LuScaling,
    LuLifeBuoy,
    LuCheck
} from "react-icons/lu";

const deploymentPhases = [
    {
        id: 1,
        title: "شناخت میدان و امکان‌سنجی",
        icon: LuSearch,
        description: "حضور تیم فنی در سایت و بررسی زیرساخت‌های موجود (برق، شبکه، لوله‌کشی).",
        deliverable: "گزارش فنی–اجرایی و برآورد زمان‌بندی"
    },
    {
        id: 2,
        title: "طراحی راهکار اختصاصی",
        icon: LuPenTool,
        description: "تدوین سناریوی نرم‌افزاری و معماری سخت‌افزار متناسب با ترافیک و تجهیزات جایگاه.",
        deliverable: "بلوپرینت (Blueprint) استقرار و نقشه کابل‌کشی"
    },
    {
        id: 3,
        title: "نصب و تجهیز سخت‌افزار",
        icon: LuHammer,
        description: "نصب کنترلرها، سنسورها و ماژول‌های ارتباطی با رعایت کامل استانداردهای ایمنی (Ex).",
        deliverable: "تاییدیه نصب سخت‌افزار و تست ایمنی"
    },
    {
        id: 4,
        title: "راه‌اندازی و یکپارچه‌سازی",
        icon: LuNetwork,
        description: "اتصال امن به سامانه ملی «سیمفا» و دیتابیس خودروهای گازسوز کشور.",
        deliverable: "برقراری ارتباط زنده (Live) با سرور مرکزی"
    },
    {
        id: 5,
        title: "آموزش و پایلوت عملیاتی",
        icon: LuCirclePlay,
        description: "اجرای آزمایشی و آموزش عملی به اپراتورها و مدیران جایگاه در محیط واقعی.",
        deliverable: "گواهی پایان دوره آموزشی پرسنل"
    },
    {
        id: 6,
        title: "تعمیم (Roll-out) و مدیریت تغییر",
        icon: LuScaling,
        description: "استقرار در سایر جایگاه‌ها بر اساس موج‌های تعریف شده و فعال‌سازی داشبوردها.",
        deliverable: "تحویل نهایی سامانه در مقیاس شبکه"
    },
    {
        id: 7,
        title: "پشتیبانی و توسعه پایدار",
        icon: LuLifeBuoy,
        description: "مانیتورینگ 24/7 سلامت سامانه، به‌روزرسانی‌های امنیتی و توسعه ماژول‌های جدید.",
        deliverable: "قرارداد سطح سرویس (SLA) و گزارش‌های دوره‌ای"
    }
];

export default function DeploymentSection ()
{
    return (
        <section
            id="deployment"
            className="py-10 md:py-16"
            aria-labelledby="deployment-heading"
        >
            <div className="mx-auto max-w-5xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                        نقشه راه اجرایی
                    </span>
                    <h2
                        id="deployment-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        مسیر استقرار <span className="text-bms-primary">ICTS</span>
                    </h2>
                    <p className="ml-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ما پروسه پیچیده هوشمندسازی را به گام‌های شفاف و قابل سنجش تبدیل کرده‌ایم.
                        همراهی مرحله‌به‌مرحله؛ از ارزیابی اولیه تا بهره‌برداری پایدار.
                    </p>
                </div>

                {/* 
                   🚦 TIMELINE UI 
                   Uses a relative container to draw the connecting line.
                */}
                <div className="relative">
                    {/* Vertical Connector Line (Right aligned for RTL) */ }
                    <div className="absolute right-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-bms-primary/20 via-slate-200 to-transparent md:right-8" />

                    <ol className="space-y-8 relative">
                        { deploymentPhases.map( ( phase ) =>
                        {
                            const Icon = phase.icon;
                            return (
                                <li key={ phase.id } className="group relative flex gap-6 md:gap-10">

                                    {/* 1. The Marker (Timeline Node) */ }
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-slate-50 text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-bms-primary group-hover:text-white group-hover:shadow-md md:h-16 md:w-16 z-10">
                                            <Icon className="h-5 w-5 md:h-7 md:w-7" />
                                        </div>
                                        <div className="my-2 h-full w-px border-r border-dashed border-slate-300 md:hidden" />
                                    </div>

                                    {/* 2. The Content Card */ }
                                    <article className="flex-1 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-bms-primary/20 hover:shadow-lg md:p-7">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 group-hover:bg-bms-primary/10 group-hover:text-bms-primary">
                                                { phase.id }
                                            </span>
                                            <h3 className="text-base font-bold text-slate-900 md:text-lg">
                                                { phase.title }
                                            </h3>
                                        </div>

                                        <p className="text-sm leading-7 text-slate-600 text-pretty">
                                            { phase.description }
                                        </p>

                                        {/* Deliverable Pill */ }
                                        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs text-slate-500 transition-colors group-hover:bg-emerald-50/50 group-hover:border-emerald-100 group-hover:text-emerald-700">
                                            <LuCheck className="h-3.5 w-3.5 text-emerald-500" />
                                            <span className="font-medium">خروجی:</span>
                                            <span>{ phase.deliverable }</span>
                                        </div>
                                    </article>
                                </li>
                            );
                        } ) }
                    </ol>
                </div>
            </div>
        </section>
    );
}