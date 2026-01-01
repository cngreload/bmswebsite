// components/cng/CollaborationSection.tsx
import
{
    LuLandmark,
    LuFuel,
    LuCreditCard,
    LuMicroscope,
    LuArrowLeft
} from "react-icons/lu";

const collabItems = [
    {
        id: "gov",
        title: "نهادهای حاکمیتی و سیاست‌گذار",
        icon: LuLandmark,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        // 🪄 MAGIC SPELL: Breaking "Wall of Text" into Value Bullets
        bullets: [
            "استقرار زیرساخت بومی هوشمندسازی با همکاری وزارت نفت",
            "تدوین استانداردهای مرجع و پروتکل‌های ایمنی ملی",
            "نظارت داده‌محور بر جریان توزیع سوخت کشور"
        ]
    },
    {
        id: "owners",
        title: "صنف و بهره‌برداران جایگاه‌ها",
        icon: LuFuel,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        bullets: [
            "مدل‌های استقرار اقتصادی و مرحله‌ای (Pay-as-you-grow)",
            "کاهش هزینه‌های تعمیرات با پایش پیشگیرانه تجهیزات",
            "مدیریت شفاف شیفت‌ها و جلوگیری از خطای انسانی"
        ]
    },
    {
        id: "psp",
        title: "شرکت‌های پرداخت (Fintech)",
        icon: LuCreditCard,
        color: "text-slate-600",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        bullets: [
            "توسعه کیف‌پول‌های تخصصی سوخت و پرداخت سازمانی",
            "پیاده‌سازی سناریوهای تسهیم وجوه (Sharing) در لحظه",
            "اتصال امن به پایانه‌های فروش (POS Integration)"
        ]
    },
    {
        id: "rnd",
        title: "همکاری تحقیقاتی و دانشگاهی",
        icon: LuMicroscope,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "group-hover:border-purple-200",
        bullets: [
            "تحلیل داده‌های کلان (Big Data) برای الگوی مصرف",
            "توسعه الگوریتم‌های هوش مصنوعی در لبه (Edge AI)",
            "بهینه‌سازی شبکه توزیع انرژی بر اساس تقاضا"
        ]
    },
];

export default function CollaborationSection ()
{
    return (
        <section
            id="collaboration"
            className="py-10 md:py-16"
            aria-labelledby="collab-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        اکوسیستم ذی‌نفعان
                    </span>
                    <h2
                        id="collab-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        مدل همکاری؛ از هم‌فکری تا <span className="text-bms-primary">هم‌سرنوشتی</span>
                    </h2>
                    <p className="ml-auto max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                        سامانه ICTS یک جزیره نیست؛ بلکه پلتفرمی است که منافع تمام بازیگران صنعت گاز طبیعی،
                        از رگولاتور تا اپراتور را در یک نقطه به هم پیوند می‌دهد.
                    </p>
                </div>

                {/* Grid */ }
                <ul className="grid gap-6 md:grid-cols-2">
                    { collabItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <li key={ item.id }>
                                <article
                                    className={ `group relative flex h-full flex-col items-start gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ item.border }` }
                                >
                                    {/* Header Row: Icon + Title */ }
                                    <div className="flex w-full items-center gap-4">
                                        <div className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform group-hover:scale-105 group-hover:rotate-3` }>
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                            { item.title }
                                        </h3>
                                    </div>

                                    {/* 
                    🪄 MAGIC UI: The List
                    Replaces paragraph with scannable points.
                  */}
                                    <ul className="space-y-3 w-full border-t border-slate-100 pt-4">
                                        { item.bullets.map( ( point, idx ) => (
                                            <li key={ idx } className="flex items-start gap-3 text-sm text-slate-600 leading-6">
                                                {/* Custom bullet styling */ }
                                                <span className={ `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${ item.color.replace( 'text-', 'bg-' ) } opacity-60` } />
                                                <span className="text-pretty">{ point }</span>
                                            </li>
                                        ) ) }
                                    </ul>

                                    {/* Hover Action Hint */ }
                                    <div className={ `mt-auto flex items-center gap-1 text-xs font-medium ${ item.color } opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100` }>
                                        <span>شروع همکاری</span>
                                        <LuArrowLeft className="h-3 w-3" />
                                    </div>
                                </article>
                            </li>
                        );
                    } ) }
                </ul>
            </div>
        </section>
    );
}