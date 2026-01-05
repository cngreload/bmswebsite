// components/clinicans/ClinicansForWhomSection.tsx
import
{
    LuBriefcase,
    LuStethoscope,
    LuVenetianMask,
    LuCalendarCheck,
    LuHeartHandshake,
    LuCheck,
    LuUser,
} from "react-icons/lu";

const personas = [
    {
        id: "managers",
        role: "Management Enablement",
        title: "مدیران و مالکان کلینیک",
        subtitle: "توانمندسازی در تصمیم‌گیری و توسعه",
        summary:
            "برای مدیرانی که به دنبال ابزارهای دقیق برای پایش عملکرد، بهینه‌سازی درآمد و توسعه کسب‌وکار خود بر پایه داده‌های واقعی هستند.",
        icon: LuBriefcase,
        color: "text-slate-700",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        benefits: [
            "دید یکپارچه نسبت به درآمد، ظرفیت و عملکرد واقعی",
            "گزارش‌های مدیریتی قابل اتکا برای تصمیم‌گیری راهبردی",
            "امکان مدیریت چند شعبه در یک ساختار متمرکز",
        ],
    },
    {
        id: "doctors",
        role: "Clinical Enablement",
        title: "پزشکان و کادر درمان",
        subtitle: "تمرکز بر کیفیت درمان و مراقبت",
        summary:
            "برای درمانگرانی که می‌خواهند با اتکا به ابزارهای دیجیتال، دغدغه‌های اجرایی را حذف کرده و کیفیت مراقبت از بیمار را ارتقا دهند.",
        icon: LuStethoscope,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        benefits: [
            "دسترسی سریع و منسجم به پرونده و سوابق درمان",
            "ثبت ساده و ساخت‌یافته اطلاعات و خدمات",
            "کاهش وقفه‌های غیرضروری در زمان ویزیت",
        ],
    },
    {
        id: "reception",
        role: "Operational Automation",
        title: "تیم پذیرش و عملیات",
        subtitle: "اتوماسیون فرآیندها و کاهش خطا",
        summary:
            "برای تیم‌های اجرایی که با حجم بالای هماهنگی روبرو هستند و به ابزارهای هوشمند برای مدیریت جریان مراجعین نیاز دارند.",
        icon: LuCalendarCheck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        benefits: [
            "مدیریت هوشمند نوبت‌ها و تغییرات برنامه",
            "کاهش تماس‌های تکراری با اطلاع‌رسانی خودکار",
            "کاهش خطای انسانی در فرآیند پذیرش",
        ],
    },
    {
        id: "patients",
        role: "Patient Experience",
        title: "مراجعان و بیماران",
        subtitle: "تجربه دریافت خدمات در کلاس جهانی",
        summary:
            "برای مراجعانی که انتظار دارند خدمات سلامت را با نظم، شفافیت و احترام دریافت کنند.",
        icon: LuHeartHandshake,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200",
        benefits: [
            "دریافت نوبت بدون وابستگی به تماس تلفنی",
            "اطلاع‌رسانی شفاف درباره وضعیت و زمان مراجعه",
            "افزایش اعتماد به فرآیند و کیفیت خدمات",
        ],
    },
];

export default function ClinicansForWhomSection ()
{
    return (
        <section
            id="clinicans-for-whom"
            className="py-10"
            aria-labelledby="audience-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-14 text-right space-y-4">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        ذی‌نفعان پلتفرم
                    </span>

                    <h2
                        id="audience-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        این پلتفرم چه کسانی را <br />
                        <span className="text-bms-primary">توانمند </span> می‌کند؟
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        «پلتفرم توانمندسازی دیجیتال ارائه‌دهندگان خدمات سلامت» یک ابزار یکسان برای همه نیست.
                        هر نقش در کلینیک، جایگاه مشخصی در این پلتفرم دارد و تجربه کاربری دقیقاً متناسب با نیازهای توانمندسازی همان نقش طراحی شده است.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { personas.map( ( persona ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <article
                                key={ persona.id }
                                className={ `group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ persona.border }` }
                            >
                                {/* Icon Header */ }
                                <div className="mb-4 flex flex-col items-center text-center">
                                    <div
                                        className={ `mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${ persona.bg } ${ persona.color } transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { persona.title }
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-slate-500">
                                        { persona.subtitle }
                                    </p>

                                    {/* Role Tag */ }
                                    <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 border border-slate-200">
                                        <LuUser className="h-3 w-3" />
                                        { persona.role }
                                    </span>
                                </div>

                                {/* Summary */ }
                                <p className="mb-4 text-xs text-center text-slate-600 leading-6">
                                    { persona.summary }
                                </p>

                                {/* Divider */ }
                                <div className="mb-4 w-full border-t border-slate-100" />

                                {/* Benefits */ }
                                <ul className="flex-1 space-y-3 text-right">
                                    { persona.benefits.map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-start gap-2.5">
                                            <div
                                                className={ `mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${ persona.bg } ${ persona.color }` }
                                            >
                                                <LuCheck className="h-2.5 w-2.5" />
                                            </div>
                                            <span className="text-xs leading-5 text-slate-600">
                                                { item }
                                            </span>
                                        </li>
                                    ) ) }
                                </ul>
                            </article>
                        );
                    } ) }
                </div>
                {/* 
                    🧠 SYSTEM SUMMARY BLOCK (Refined)
                    Strategic conclusion to the enablement narrative
                */}
                <div className="mt-20 lg:mt-28 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4">

                        {/* Inner Container */ }
                        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                                    <LuVenetianMask className="h-10 w-10" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-3">
                                <h4 className="text-lg font-bold text-slate-900">
                                    توانمندسازی هم‌زمان تمام ارکان کلینیک
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 leading-8 text-justify">
                                    کلینیکانز  با درک دقیق نیازهای هر نقش، یک چرخه هماهنگ میان
                                    <strong className="text-slate-900 font-bold"> مدیریت</strong>،
                                    <strong className="text-slate-900 font-bold"> تیم درمان</strong>
                                    و
                                    <strong className="text-slate-900 font-bold"> مراجعان</strong>
                                    ایجاد می‌کند؛ چرخه‌ای که
                                    <span className="text-indigo-700 font-medium"> تجربه بهتر</span>،
                                    <span className="text-indigo-700 font-medium"> بهره‌وری بالاتر</span>
                                    و
                                    <span className="text-indigo-700 font-medium"> رشد پایدار</span>
                                    را از طریق توانمندسازی دیجیتال محقق می‌سازد.
                                </p>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};