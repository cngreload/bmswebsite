import
{
    LuSearch,
    LuPenTool,
    LuHammer,
    LuNetwork,
    LuCirclePlay,
    LuScaling,
    LuLifeBuoy,
    LuCheck,
} from "react-icons/lu";

const deploymentPhases = [
    {
        id: 1,
        title: "شناخت میدان و امکان‌سنجی",
        icon: LuSearch,
        description:
            "بازدید میدانی و ارزیابی دقیق شرایط واقعی جایگاه شامل زیرساخت برق، شبکه، تجهیزات عملیاتی، الزامات ایمنی و انطباق مقرراتی؛ با هدف کاهش ریسک و جلوگیری از خطا در مراحل بعدی.",
        deliverable: "گزارش فنی–اجرایی، تحلیل ریسک و برآورد زمان‌بندی",
    },
    {
        id: 2,
        title: "طراحی راهکار اختصاصی",
        icon: LuPenTool,
        description:
            "طراحی معماری نرم‌افزار و سخت‌افزار متناسب با ظرفیت عملیاتی، الگوی ترافیک و تجهیزات هر جایگاه؛ به‌گونه‌ای که امکان توسعه آتی و مقیاس‌پذیری شبکه حفظ شود.",
        deliverable: "بلوپرینت استقرار، معماری فنی و نقشه کابل‌کشی",
    },
    {
        id: 3,
        title: "نصب و تجهیز سخت‌افزار",
        icon: LuHammer,
        description:
            "نصب کنترلرها، سنسورها و ماژول‌های ارتباطی صنعتی با رعایت کامل استانداردهای ایمنی، انفجاری (Ex) و دستورالعمل‌های عملیاتی شبکه توزیع سوخت.",
        deliverable: "تأییدیه نصب، گزارش تست ایمنی و صحت عملکرد",
    },
    {
        id: 4,
        title: "راه‌اندازی و یکپارچه‌سازی",
        icon: LuNetwork,
        description:
            "راه‌اندازی سامانه و اتصال امن به زیرساخت‌های ملی از جمله سامانه «سیمفا» و پایگاه داده خودروهای گازسوز، با تضمین یکپارچگی و صحت تبادل داده.",
        deliverable: "ارتباط زنده و پایدار با سرور مرکزی",
    },
    {
        id: 5,
        title: "آموزش و پایلوت عملیاتی",
        icon: LuCirclePlay,
        description:
            "اجرای پایلوت در محیط واقعی و آموزش عملی اپراتورها، مدیران و ناظران برای اطمینان از آمادگی سازمانی پیش از بهره‌برداری سراسری.",
        deliverable: "گواهی آموزش پرسنل و گزارش نتایج پایلوت",
    },
    {
        id: 6,
        title: "تعمیم (Roll-out) و مدیریت تغییر",
        icon: LuScaling,
        description:
            "گسترش مرحله‌ای سامانه در سطح شبکه جایگاه‌ها بر اساس برنامه زمان‌بندی‌شده، همراه با مدیریت تغییر و فعال‌سازی داشبوردهای نظارتی.",
        deliverable: "تحویل نهایی سامانه در مقیاس شبکه",
    },
    {
        id: 7,
        title: "پشتیبانی و توسعه پایدار",
        icon: LuLifeBuoy,
        description:
            "پایش مداوم سلامت سامانه به‌صورت 24/7، اعمال به‌روزرسانی‌های امنیتی، بهینه‌سازی عملکرد و توسعه ماژول‌های جدید متناسب با نیازهای آینده شبکه.",
        deliverable: "قرارداد SLA، گزارش‌های دوره‌ای و نقشه توسعه",
    },
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
                        استقرار ICTS یک پروژه صرفاً فنی نیست؛
                        یک فرآیند مدیریتی، اجرایی و حاکمیتی است.
                        این نقشه راه، مسیر تبدیل پیچیدگی هوشمندسازی
                        جایگاه‌های CNG را به گام‌های شفاف، قابل‌سنجش
                        و قابل‌حسابرسی ترسیم می‌کند.
                    </p>
                </div>

                {/* Timeline */ }
                <div className="relative">
                    {/* Vertical Line */ }
                    <div className="absolute right-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-bms-primary/30 via-slate-200 to-transparent md:right-8" />

                    <ol className="relative space-y-8">
                        { deploymentPhases.map( ( phase ) =>
                        {
                            const Icon = phase.icon;
                            return (
                                <li key={ phase.id } className="group relative flex gap-6 md:gap-10">
                                    {/* Marker */ }
                                    <div className="flex flex-col items-center">
                                        <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-slate-50 text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-bms-primary group-hover:text-white md:h-16 md:w-16">
                                            <Icon className="h-5 w-5 md:h-7 md:w-7" />
                                        </div>
                                    </div>

                                    {/* Content */ }
                                    <article className="flex-1 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-bms-primary/30 hover:shadow-lg md:p-7">
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

                                        {/* Deliverable */ }
                                        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-500 transition-colors group-hover:border-emerald-100 group-hover:bg-emerald-50/50 group-hover:text-emerald-700">
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
