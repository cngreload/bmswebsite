// components/clinicans/ClinicansForWhomSection.tsx
import
{
    LuBriefcase,
    LuStethoscope,
    LuCalendarCheck,
    LuHeartHandshake,
    LuCheck,
    LuUser,
} from "react-icons/lu";

const personas = [
    {
        id: "managers",
        role: "Clinic Governance",
        title: "مدیران و مالکان کلینیک",
        subtitle: "کنترل شفاف، رشد قابل پیش‌بینی",
        summary:
            "برای مدیرانی که کلینیک را به‌عنوان یک سیستم زنده و در حال رشد می‌بینند، نه مجموعه‌ای از فرآیندهای جدا از هم.",
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
        role: "Clinical Practice",
        title: "پزشکان و کادر درمان",
        subtitle: "تمرکز بر درمان، نه حاشیه",
        summary:
            "برای درمانگرانی که می‌خواهند زمان و تمرکز خود را صرف کیفیت درمان کنند، نه هماهنگی‌های اجرایی.",
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
        role: "Front Desk Operations",
        title: "تیم پذیرش و هماهنگی",
        subtitle: "نظم عملیاتی، آرامش کاری",
        summary:
            "برای تیم‌هایی که نقش کلیدی در جریان مراجعه و تجربه مراجعان دارند.",
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
        subtitle: "تجربه‌ای منظم و قابل اعتماد",
        summary:
            "برای مراجعانی که انتظار نظم، احترام و شفافیت از یک کلینیک حرفه‌ای دارند.",
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
                        اجزای اکوسیستم Clinicans
                    </span>

                    <h2
                        id="audience-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        این اکوسیستم برای چه{ " " }
                        <span className="text-bms-primary">نقش‌هایی</span> طراحی شده است؟
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        Clinicans یک ابزار یکسان برای همه نیست.
                        هر نقش در کلینیک، جایگاه مشخصی در اکوسیستم دارد و
                        تجربه کاربری و قابلیت‌ها دقیقاً متناسب با همان نقش طراحی شده‌اند.
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

                {/* Transition Line */ }
                <div className="mt-16 text-right">
                    <p className="max-w-3xl ml-auto text-sm md:text-base text-slate-600">
                        Clinicans با درک دقیق نقش‌ها، یک چرخه هماهنگ میان مدیریت،
                        تیم درمان و مراجعان ایجاد می‌کند؛ چرخه‌ای که
                        تجربه بهتر، بهره‌وری بالاتر و رشد پایدار را هم‌زمان ممکن می‌سازد.
                    </p>
                </div>
            </div>
        </section>
    );
}
