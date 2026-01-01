// components/cng/StakeholderBenefitsSection.tsx
import
{
    LuUsers,
    LuLandmark,
    LuStore,
    LuCheck,
    LuTrendingUp
} from "react-icons/lu";

const stakeholders = [
    {
        id: "public",
        title: "مردم و شهروندان",
        subtitle: "تجربه‌ای ایمن‌تر و شفاف‌تر",
        icon: LuUsers,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "group-hover:border-sky-200",
        shadow: "group-hover:shadow-sky-100",
        benefits: [
            "حفظ جان شهروندان با جلوگیری سیستمی از سوخت‌گیری خودروهای ناایمن",
            "پرداخت الکترونیک سریع و حذف اصطکاک در صف‌های جایگاه",
            "شفافیت در تراکنش‌ها و اطمینان از کیفیت خدمات دریافت شده"
        ]
    },
    {
        id: "government",
        title: "حاکمیت و دولت",
        subtitle: "داده به‌عنوان سرمایه راهبردی",
        icon: LuLandmark,
        color: "text-slate-700",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        shadow: "group-hover:shadow-slate-200",
        benefits: [
            "رصد لحظه‌ای (Real-time) وضعیت شبکه سوخت در داشبورد ملی",
            "سیاست‌گذاری دقیق انرژی مبتنی بر داده‌های واقعی مصرف (Data-Driven)",
            "ارتقای تاب‌آوری ملی و کاهش وابستگی به لایسنس‌های خارجی"
        ]
    },
    {
        id: "business",
        title: "صنف جایگاه‌داران",
        subtitle: "مدیریت هوشمند و سودآور",
        icon: LuStore,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        shadow: "group-hover:shadow-emerald-100",
        benefits: [
            "جلوگیری از کسری و تخلف با حذف دخالت انسانی در ثبت تراکنش",
            "داشبورد مدیریت شیفت‌ها و وضعیت فنی تجهیزات روی موبایل",
            "آمادگی زیرساخت برای طرح‌های درآمدزا (وفاداری مشتریان و تبلیغات)"
        ]
    },
];

export default function StakeholderBenefitsSection ()
{
    return (
        <section
            id="stakeholder-benefits"
            className="py-10 md:py-16"
            aria-labelledby="benefits-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */ }
                <div className="mb-12 text-right space-y-3">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuTrendingUp className="h-3.5 w-3.5" />
                        <span>ارزش آفرینی ۳۶۰ درجه</span>
                    </span>
                    <h2
                        id="benefits-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        منافع مشترک در <span className="text-bms-primary">یک اکوسیستم</span>
                    </h2>
                    <p className="ml-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                        طراحی ICTS بر اساس مدل «برد-برد» انجام شده است؛ جایی که افزایش ایمنی برای مردم،
                        به معنای کاهش هزینه برای جایگاه‌دار و بهبود نظارت برای دولت است.
                    </p>
                </div>

                {/* 
          ⚡ GRID: 3 Columns 
          Each column represents a distinct persona.
        */}
                <div className="grid gap-6 md:grid-cols-3">
                    { stakeholders.map( ( persona ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <article
                                key={ persona.id }
                                className={ `group relative flex flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ persona.border } ${ persona.shadow }` }
                            >
                                {/* Persona Header */ }
                                <div className="mb-6 flex flex-col items-center text-center">
                                    <div className={ `mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${ persona.bg } ${ persona.color } transition-transform group-hover:scale-110` }>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { persona.title }
                                    </h3>
                                    <p className="text-xs font-medium text-slate-500 mt-1">
                                        { persona.subtitle }
                                    </p>
                                </div>

                                {/* Divider */ }
                                <div className="mb-6 w-full border-t border-slate-100" />

                                {/* Benefit List */ }
                                <ul className="space-y-4 text-right flex-1">
                                    { persona.benefits.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div className={ `mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${ persona.bg } ${ persona.color }` }>
                                                <LuCheck className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm leading-6 text-slate-600 text-pretty">
                                                { point }
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