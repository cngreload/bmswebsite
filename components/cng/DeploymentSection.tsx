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
            aria-labelledby="deployment-heading"
            className="py-24 md:py-32 bg-slate-50"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-24 max-w-3xl text-right space-y-6">
                    <span className="inline-block rounded-md bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-600">
                        نقشه راه اجرایی
                    </span>

                    <h2
                        id="deployment-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900"
                    >
                        مسیر استقرار{ " " }
                        <span className="text-bms-primary">ICTS</span>
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        استقرار ICTS یک پروژه صرفاً فنی نیست؛
                        یک فرآیند مدیریتی، اجرایی و حاکمیتی است.
                        این نقشه راه، مسیر تبدیل پیچیدگی هوشمندسازی
                        جایگاه‌های CNG را به گام‌های شفاف، قابل‌سنجش
                        و قابل‌حسابرسی ترسیم می‌کند.
                    </p>
                </header>

                {/* ================= EXECUTION SPINE ================= */ }
                <div className="relative">

                    {/* Central spine */ }
                    <div
                        className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"
                        aria-hidden
                    />

                    <ol className="space-y-14">
                        { deploymentPhases.map( ( phase ) =>
                        {
                            const Icon = phase.icon;

                            return (
                                <li key={ phase.id } className="relative flex gap-8">

                                    {/* Node */ }
                                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-bms-primary">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    {/* Module */ }
                                    <article className="flex-1 rounded-[2.5rem] bg-white border border-slate-200 p-6 md:p-8">
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                                                { phase.id }
                                            </span>
                                            <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                                { phase.title }
                                            </h3>
                                        </div>

                                        <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                                            { phase.description }
                                        </p>

                                        {/* Deliverable */ }
                                        <div className="mt-6 inline-flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                                            <LuCheck className="h-4 w-4 mt-0.5 shrink-0" />
                                            <span className="font-medium">
                                                خروجی مرحله:
                                            </span>
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
