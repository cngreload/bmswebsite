// components/clinicans/ClinicansFeaturesSection.tsx
import
{
    LuCalendarClock,
    LuFileText,
    LuWallet,
    LuMegaphone,
    LuChartBar,
    LuSettings2,
    LuCheck
} from "react-icons/lu";

const featureClusters = [
    {
        id: "scheduling",
        title: "نوبت‌دهی و پذیرش",
        subtitle: "نظم در نوبت‌ها، آرامش در پذیرش",
        icon: LuCalendarClock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        intro: "سیستم نوبت‌دهی کلینیکانز، قلب جریان مراجعه است؛ طراحی شده تا هم برای منشی سریع باشد، هم برای پزشک قابل اعتماد.",
        points: [
            "تقویم یک‌پارچه برای همه‌ی پزشکان و اتاق‌ها",
            "ثبت و جابه‌جایی نوبت با چند کلیک (Drag & Drop)",
            "تعریف نوبت‌های تکرارشونده و VIP",
            "مدیریت هوشمند لیست انتظار و پر کردن کنسلی‌ها"
        ]
    },
    {
        id: "ehr",
        title: "پرونده الکترونیک (EHR)",
        subtitle: "دسترسی آنی به سوابق درمان",
        icon: LuFileText,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        intro: "پرونده مراجع در کلینیکانز، فقط چند یادداشت نیست؛ تصویری کامل از تاریخچه، گالری تصاویر و روند بهبود است.",
        points: [
            "پروفایل ۳۶۰ درجه با سوابق و رضایت‌نامه‌ها",
            "ثبت خدمات و طرح درمان (Treatment Plan)",
            "گالری تصاویر قبل و بعد (Before/After) و اسناد",
            "قالب‌سازی (Templates) اختصاصی برای هر تخصص"
        ]
    },
    {
        id: "finance",
        title: "مالی و حسابداری",
        subtitle: "شفافیت مالی، بدون اکسل‌های پیچیده",
        icon: LuWallet,
        color: "text-amber-600",
        bg: "bg-amber-50",
        intro: "ماژول مالی کمک می‌کند جریان درآمد و هزینه، جلوی چشم مدیریت باشد؛ قابل ردیابی، گزارش‌گیری و متصل به بانک.",
        points: [
            "صدور فاکتور رسمی و غیررسمی خودکار",
            "محاسبه سهم پزشک (Performance-based) و دستیار",
            "مدیریت کیف پول مراجع و پرداخت اقساطی",
            "گزارش سود و زیان به تفکیک خدمات"
        ]
    },
    {
        id: "crm",
        title: "ارتباط با مشتری (CRM)",
        subtitle: "تبدیل مراجع به مشتری وفادار",
        icon: LuMegaphone,
        color: "text-rose-600",
        bg: "bg-rose-50",
        intro: "ابزارهای بازاریابی در دل پلتفرم تعبیه شده‌اند تا رشد کلینیک نه یک اتفاق، بلکه یک فرآیند قابل برنامه‌ریزی باشد.",
        points: [
            "یادآوری خودکار نوبت (SMS/Call) برای کاهش No-Show",
            "کمپین‌های هدفمند برای بازگشت بیمار (Retention)",
            "باشگاه مشتریان و سیستم امتیازدهی (Loyalty)",
            "نظرسنجی اتوماتیک پس از ویزیت"
        ]
    },
    {
        id: "analytics",
        title: "هوش تجاری و گزارش‌ها",
        subtitle: "تصمیم‌گیری با چشمان باز",
        icon: LuChartBar,
        color: "text-violet-600",
        bg: "bg-violet-50",
        intro: "گزارش‌دهی در کلینیکانز صرفاً چند جدول نیست؛ داشبوردی است که سلامت کسب‌وکارتان را در یک نگاه نشان می‌دهد.",
        points: [
            "داشبورد زنده KPIهای کلیدی کلینیک",
            "تحلیل نرخ تبدیل و کانال‌های جذب مشتری",
            "نمودار رشد درآمد و مقایسه دوره‌ای",
            "خروجی اکسل استاندارد برای حسابرسی"
        ]
    },
    {
        id: "admin",
        title: "تنظیمات و سطوح دسترسی",
        subtitle: "کنترل کامل در دست مدیریت",
        icon: LuSettings2,
        color: "text-slate-600",
        bg: "bg-slate-100",
        intro: "ساختار کلینیکانز انعطاف‌پذیر است؛ دسترسی‌ها و نقش‌ها را دقیقاً مطابق چارت سازمانی کلینیک خود بچینید.",
        points: [
            "تعریف نقش‌های کاربری (Role-Based Access)",
            "مدیریت چند شعبه‌ای (Multi-Branch) در یک پنل",
            "شخصی‌سازی فرم‌ها و سربرگ‌ها",
            "لاگ فعالیت کاربران برای امنیت داده‌ها"
        ]
    }
];

export default function ClinicansFeaturesSection ()
{
    return (
        <section
            id="clinicans-features"
            className="py-8"
            aria-labelledby="features-heading"
        >
            <div className="mx-auto max-w-6xl space-y-12 px-4">
                {/* Header */ }
                <div className="space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-100">
                        ماژول‌های کاربردی
                    </span>
                    <h2
                        id="features-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        جعبه‌ابزار کامل برای <span className="text-emerald-600">مدیریت مدرن</span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        هرآنچه برای اداره‌ی روزمره، تصمیم‌گیری و رشد یک کلینیک حرفه‌ای نیاز دارید،
                        در یک پلتفرم یکپارچه گردآوری شده است.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { featureClusters.map( ( cluster ) =>
                    {
                        const Icon = cluster.icon;
                        return (
                            <article
                                key={ cluster.id }
                                className="group relative flex flex-col gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-100/50"
                            >
                                {/* Card Header */ }
                                <div className="flex items-start gap-4">
                                    <div className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ cluster.bg } ${ cluster.color } shadow-sm transition-transform group-hover:scale-105` }>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                            { cluster.title }
                                        </h3>
                                        <p className="text-xs font-medium text-slate-500">
                                            { cluster.subtitle }
                                        </p>
                                    </div>
                                </div>

                                {/* Intro Text */ }
                                <p className="text-sm leading-7 text-slate-600 text-pretty border-r-2 border-slate-100 pr-3 mr-1">
                                    { cluster.intro }
                                </p>

                                {/* Checklist */ }
                                <ul className="space-y-3 mt-auto pt-2">
                                    { cluster.points.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-center gap-3 text-sm text-slate-700">
                                            <LuCheck className={ `h-4 w-4 shrink-0 ${ cluster.color } opacity-80` } />
                                            <span>{ point }</span>
                                        </li>
                                    ) ) }
                                </ul>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}