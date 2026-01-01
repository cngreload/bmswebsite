// components/clinicans/ClinicansForWhomSection.tsx
import
{
    LuBriefcase,
    LuStethoscope,
    LuCalendarCheck,
    LuHeartHandshake,
    LuCheck
} from "react-icons/lu";

const personas = [
    {
        id: "managers",
        title: "مدیران و مالکان",
        subtitle: "دید شفاف، تصمیم‌گیری مطمئن",
        icon: LuBriefcase,
        color: "text-slate-700",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        benefits: [
            "رصد لحظه‌ای درآمد و عملکرد کلینیک",
            "گزارش‌های مالی دقیق برای توسعه کسب‌وکار",
            "مدیریت یکپارچه چند شعبه در یک پنل"
        ]
    },
    {
        id: "doctors",
        title: "پزشکان و کادر درمان",
        subtitle: "تمرکز بر درمان، نه فرم و کاغذ",
        icon: LuStethoscope,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        benefits: [
            "دسترسی آنی به پرونده کامل و سوابق بیمار",
            "ثبت آسان نسخه‌ها و یادداشت‌های بالینی",
            "کاهش وقفه‌های اداری در زمان ویزیت"
        ]
    },
    {
        id: "reception",
        title: "تیم پذیرش و منشی‌ها",
        subtitle: "نظم در نوبت‌ها، آرامش در پذیرش",
        icon: LuCalendarCheck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        benefits: [
            "تقویم هوشمند با قابلیت جابه‌جایی سریع",
            "کاهش تماس‌های تکراری با یادآوری خودکار",
            "حذف خطای انسانی و تداخل نوبت‌ها"
        ]
    },
    {
        id: "patients",
        title: "مراجعان و بیماران",
        subtitle: "تجربه‌ای شفاف و محترمانه",
        icon: LuHeartHandshake,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200",
        benefits: [
            "نوبت‌گیری آنلاین و بدون معطلی",
            "اطلاع‌رسانی دقیق و شفاف از وضعیت نوبت",
            "حس اعتماد به نظم و کیفیت خدمات کلینیک"
        ]
    }
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
                <div className="mb-12 text-right space-y-4">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        مخاطبان هدف
                    </span>
                    <h2
                        id="audience-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        برای چه کسانی <span className="text-bms-primary">طراحی شده است؟</span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        کلینیکانز پلتفرمی است که تجربه کاربری (UX) را برای هر نقش به طور اختصاصی بهینه کرده است؛
                        از اتاق مدیریت تا اتاق انتظار.
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
                                <div className="mb-5 flex flex-col items-center text-center">
                                    <div className={ `mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${ persona.bg } ${ persona.color } transition-transform group-hover:scale-110` }>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { persona.title }
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-slate-500">
                                        { persona.subtitle }
                                    </p>
                                </div>

                                {/* Divider */ }
                                <div className="mb-5 w-full border-t border-slate-100" />

                                {/* Benefits List */ }
                                <ul className="flex-1 space-y-3 text-right">
                                    { persona.benefits.map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-start gap-2.5">
                                            <div className={ `mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${ persona.bg } ${ persona.color }` }>
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
            </div>
        </section>
    );
}