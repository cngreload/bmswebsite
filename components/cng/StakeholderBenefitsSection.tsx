import
{
    LuUsers,
    LuLandmark,
    LuStore,
    LuCheck,
    LuTrendingUp,
} from "react-icons/lu";

/* ================= TYPES ================= */
type StakeholderTone = "sky" | "slate" | "emerald";

interface Stakeholder
{
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    tone: StakeholderTone;
    benefits: string[];
}

/* ================= DATA ================= */
const stakeholders: Stakeholder[] = [
    {
        id: "public",
        title: "مردم و شهروندان",
        subtitle: "ایمنی بالاتر، تجربه قابل اعتماد",
        icon: LuUsers,
        tone: "sky",
        benefits: [
            "کاهش ریسک جانی از طریق جلوگیری سیستمی و برخط از سوخت‌گیری خودروهای فاقد ایمنی یا معاینه معتبر",
            "تجربه سوخت‌گیری سریع‌تر و شفاف‌تر با پرداخت الکترونیک و حذف فرآیندهای پرخطای دستی",
            "اطمینان از صحت تراکنش‌ها، کیفیت خدمات و رعایت استانداردهای ایمنی در جایگاه‌ها",
        ],
    },
    {
        id: "government",
        title: "حاکمیت و دولت",
        subtitle: "داده به‌عنوان سرمایه راهبردی",
        icon: LuLandmark,
        tone: "slate",
        benefits: [
            "رصد لحظه‌ای و متمرکز وضعیت شبکه توزیع CNG در سطح ملی از طریق داشبوردهای حاکمیتی",
            "امکان سیاست‌گذاری انرژی مبتنی بر داده‌های واقعی مصرف، رفتار ناوگان و الگوهای منطقه‌ای",
            "افزایش تاب‌آوری ملی و کاهش وابستگی به زیرساخت‌ها، سرویس‌ها و لایسنس‌های خارجی تحریم‌پذیر",
        ],
    },
    {
        id: "business",
        title: "صنف جایگاه‌داران",
        subtitle: "مدیریت هوشمند، عملیات پایدار",
        icon: LuStore,
        tone: "emerald",
        benefits: [
            "کاهش تخلف، کسری و اختلاف حساب از طریق حذف دخالت انسانی در ثبت، تسویه و گزارش تراکنش‌ها",
            "دسترسی لحظه‌ای به وضعیت فنی تجهیزات، شیفت‌ها و عملکرد جایگاه از طریق داشبورد مدیریتی",
            "آمادگی زیرساخت برای مدل‌های درآمدی آینده مانند وفادارسازی مشتری، خدمات دیجیتال و تبلیغات هدفمند",
        ],
    },
];

/* ================= TONE MAP ================= */
const toneMap: Record<
    StakeholderTone,
    { bg: string; text: string; soft: string; }
> = {
    sky: {
        bg: "bg-sky-50",
        text: "text-sky-600",
        soft: "bg-sky-100",
    },
    slate: {
        bg: "bg-slate-100",
        text: "text-slate-700",
        soft: "bg-slate-200",
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        soft: "bg-emerald-100",
    },
};

export default function StakeholderBenefitsSection ()
{
    return (
        <section
            id="stakeholder-benefits"
            aria-labelledby="benefits-heading"
            className="relative py-20 md:py-28 bg-slate-50"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuTrendingUp className="h-4 w-4" />
                        ارزش‌آفرینی اکوسیستمی
                    </span>

                    <h2
                        id="benefits-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        منافع هم‌راستا در{ " " }
                        <span className="text-bms-primary">
                            یک اکوسیستم یکپارچه
                        </span>
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-slate-600">
                        ICTS بر اساس مدل «برد–برد–برد» طراحی شده است؛ مدلی که در آن
                        افزایش ایمنی شهروندان، هم‌زمان به کاهش هزینه‌های عملیاتی صنف
                        و ارتقای حکمرانی داده‌محور برای دولت منجر می‌شود.
                    </p>
                </header>

                {/* ================= STAKEHOLDER FLOW ================= */ }
                <div className="space-y-12">
                    { stakeholders.map( ( persona ) =>
                    {
                        const Icon = persona.icon;
                        const tone = toneMap[ persona.tone ];

                        return (
                            <article
                                key={ persona.id }
                                className="
                  rounded-[2rem]
                  border border-slate-200
                  bg-white
                  px-6 py-8 md:px-8
                "
                            >
                                {/* Header */ }
                                <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                    <div
                                        className={ `flex h-14 w-14 items-center justify-center rounded-xl ${ tone.bg } ${ tone.text }` }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div className="text-right">
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                            { persona.title }
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500">
                                            { persona.subtitle }
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits */ }
                                <ul className="space-y-4">
                                    { persona.benefits.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <span
                                                className={ `mt-1 flex h-5 w-5 items-center justify-center rounded-full ${ tone.soft } ${ tone.text }` }
                                            >
                                                <LuCheck className="h-3 w-3" />
                                            </span>
                                            <p className="text-sm md:text-base leading-7 text-slate-600">
                                                { point }
                                            </p>
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
