// components/cng/TechHighlightsSection.tsx
import
{
    LuCpu,
    LuShieldCheck,
    LuRadioTower,
    LuCreditCard,
    LuChartBar, // Changed from ChartLine for visual weight
    LuCircuitBoard // Replacing Pi for bundle consistency (Lucide)
} from "react-icons/lu";

const techHighlights = [
    {
        id: "hardware",
        title: "طراحی صنعتی و میکروکد",
        description: "کنترلر صنعتی اختصاصی (Embedded) با معماری مقاوم در برابر نویز، حرارت و لرزش. طراحی شده برای کارکرد دائم‌کار (24/7) در محیط‌های پرخطر (Ex).",
        Icon: LuCircuitBoard,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200"
    },
    {
        id: "software",
        title: "هسته نرم‌افزاری مدرن",
        description: "معماری میکروسرویس (Microservices) برای مقیاس‌پذیری آنی. به‌روزرسانی بدون توقف سرویس (Zero-downtime) و پایداری ۹۹.۹٪.",
        Icon: LuCpu,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200"
    },
    {
        id: "security",
        title: "امنیت و پدافند غیرعامل",
        description: "رمزنگاری End-to-End داده‌ها از نازل تا سرور. ایزولاسیون شبکه و انطباق کامل با پروتکل‌های امنیتی زیرساخت‌های حیاتی کشور.",
        Icon: LuShieldCheck,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "group-hover:border-red-200"
    },
    {
        id: "connectivity",
        title: "ارتباطات امن چندلایه",
        description: "مدیریت هوشمند قطعی شبکه (Offline Mode) با بافرینگ داخلی. ارسال داده‌ها از طریق بسترهای امن APN و رمزنگاری سخت‌افزاری.",
        Icon: LuRadioTower,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "group-hover:border-sky-200"
    },
    {
        id: "fintech",
        title: "پرداخت صنعتی (Industrial FinTech)",
        description: "پشتیبانی از تسهیم وجوه در لحظه و کیف‌پول‌های سازمانی. اتصال مستقیم به سوئیچ‌های بانکی با استاندارد ISO 8583.",
        Icon: LuCreditCard,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200"
    },
    {
        id: "data",
        title: "هوش تجاری و کلان‌داده",
        description: "تبدیل ترابایت‌ها داده خام سنسورها به داشبوردهای مدیریتی. پیش‌بینی خرابی تجهیزات (Predictive Maintenance) با تحلیل روندها.",
        Icon: LuChartBar,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "group-hover:border-violet-200"
    }
];

export default function TechHighlightsSection ()
{
    return (
        <section
            id="tech-highlights"
            className="py-10 md:py-16"
            aria-labelledby="tech-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */ }
                <div className="mb-12 text-right space-y-3">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        مشخصات فنی
                    </span>
                    <h2
                        id="tech-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        معماری <span className="text-bms-primary">فناوری</span> در قلب ICTS
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        ترکیبی از مهندسی سخت‌افزار دقیق و توسعه نرم‌افزار چابک؛
                        طراحی شده برای پایداری در شرایط سخت صنعتی.
                    </p>
                </div>

                {/* Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    { techHighlights.map( ( item ) =>
                    {
                        const Icon = item.Icon;
                        return (
                            <article
                                key={ item.id }
                                className={ `group relative flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ item.border }` }
                            >
                                {/* Header Row */ }
                                <div className="flex items-center justify-between">
                                    <div className={ `flex h-12 w-12 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform group-hover:scale-110` }>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    {/* Tech Circuit Line Decoration */ }
                                    <div className={ `h-px flex-1 mx-4 bg-gradient-to-l from-transparent via-slate-200 to-transparent group-hover:via-${ item.color.split( '-' )[ 1 ] }-200 transition-colors` } />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { item.title }
                                    </h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { item.description }
                                    </p>
                                </div>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}