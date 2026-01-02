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
        subtitle: "ایمنی بالاتر، تجربه قابل اعتماد",
        icon: LuUsers,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "group-hover:border-sky-200",
        shadow: "group-hover:shadow-sky-100",
        benefits: [
            "کاهش ریسک جانی از طریق جلوگیری سیستمی و برخط از سوخت‌گیری خودروهای فاقد ایمنی یا معاینه معتبر",
            "تجربه سوخت‌گیری سریع‌تر و شفاف‌تر با پرداخت الکترونیک و حذف فرآیندهای پرخطای دستی",
            "اطمینان از صحت تراکنش‌ها، کیفیت خدمات و رعایت استانداردهای ایمنی در جایگاه‌ها"
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
            "رصد لحظه‌ای و متمرکز وضعیت شبکه توزیع CNG در سطح ملی از طریق داشبوردهای حاکمیتی",
            "امکان سیاست‌گذاری انرژی مبتنی بر داده‌های واقعی مصرف، رفتار ناوگان و الگوهای منطقه‌ای",
            "افزایش تاب‌آوری ملی و کاهش وابستگی به زیرساخت‌ها، سرویس‌ها و لایسنس‌های خارجی تحریم‌پذیر"
        ]
    },
    {
        id: "business",
        title: "صنف جایگاه‌داران",
        subtitle: "مدیریت هوشمند، عملیات پایدار",
        icon: LuStore,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        shadow: "group-hover:shadow-emerald-100",
        benefits: [
            "کاهش تخلف، کسری و اختلاف حساب از طریق حذف دخالت انسانی در ثبت، تسویه و گزارش تراکنش‌ها",
            "دسترسی لحظه‌ای به وضعیت فنی تجهیزات، شیفت‌ها و عملکرد جایگاه از طریق داشبورد مدیریتی",
            "آمادگی زیرساخت برای مدل‌های درآمدی آینده مانند وفادارسازی مشتری، خدمات دیجیتال و تبلیغات هدفمند"
        ]
    }
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
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuTrendingUp className="h-3.5 w-3.5" />
                        <span>ارزش‌آفرینی اکوسیستمی</span>
                    </span>

                    <h2
                        id="benefits-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        منافع هم‌راستا در{ " " }
                        <span className="text-bms-primary">یک اکوسیستم یکپارچه</span>
                    </h2>

                    <p className="ml-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ICTS بر اساس مدل «برد–برد–برد» طراحی شده است؛ مدلی که در آن
                        افزایش ایمنی شهروندان، هم‌زمان به کاهش هزینه‌های عملیاتی صنف
                        و ارتقای حکمرانی داده‌محور برای دولت منجر می‌شود.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { stakeholders.map( ( persona ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <article
                                key={ persona.id }
                                className={ `group relative flex flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ persona.border } ${ persona.shadow }` }
                            >
                                {/* Header */ }
                                <div className="mb-6 flex flex-col items-center text-center">
                                    <div
                                        className={ `mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${ persona.bg } ${ persona.color } transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { persona.title }
                                    </h3>
                                    <p className="mt-1 text-xs font-medium text-slate-500">
                                        { persona.subtitle }
                                    </p>
                                </div>

                                {/* Divider */ }
                                <div className="mb-6 w-full border-t border-slate-100" />

                                {/* Benefits */ }
                                <ul className="flex-1 space-y-4 text-right">
                                    { persona.benefits.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div
                                                className={ `mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${ persona.bg } ${ persona.color }` }
                                            >
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
