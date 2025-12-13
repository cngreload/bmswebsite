import { LuCpu, LuShieldCheck, LuRadioTower, LuCreditCard, LuChartLine } from "react-icons/lu";
import { PiCircuitryLight } from "react-icons/pi";

const techHighlights = [
    {
        title: "طراحی صنعتی و میکروکد اختصاصی",
        description:
            "کنترلر صنعتی ICTS و میکروکد اختصاصی آن، به‌طور ویژه برای شرایط عملیاتی جایگاه‌های CNG طراحی شده‌اند؛ مقاوم، قابل به‌روزرسانی و هماهنگ با الزامات ایمنی و پدافند غیرعامل.",
        Icon: PiCircuitryLight
    },
    {
        title: "زیرساخت نرم‌افزاری مدرن",
        description:
            "نرم‌افزار ICTS بر پایه‌ی چارچوب‌های به‌روز و قابل‌اعتماد توسعه یافته است؛ معماری ماژولار، امکان توسعه و نگه‌داری بلندمدت را فراهم می‌کند.",
        Icon: LuCpu
    },
    {
        title: "امنیت و پدافند غیرعامل",
        description:
            "ICTS با نگاه پدافند غیرعامل طراحی شده است؛ از تفکیک لایه‌های شبکه و کنترل دسترسی تا رمزنگاری ارتباطات و امکان استقرار در زیرساخت‌های حساس.",
        Icon: LuShieldCheck
    },
    {
        title: "ارتباطات امن و چندمسیره",
        description:
            "ماژول‌های ارتباطی ICTS امکان اتصال مطمئن جایگاه به سامانه مرکزی را از طریق مسیرهای ارتباطی مختلف فراهم می‌کنند؛ با مدیریت اختلالات موقت و ثبت آفلاین داده‌ها.",
        Icon: LuRadioTower
    },
    {
        title: "پرداخت الکترونیک صنعتی",
        description:
            "زیرساخت پرداخت الکترونیک در ICTS، متناسب با الزامات صنعت سوخت طراحی شده و امکان همکاری عمیق با شرکت‌های PSP و طراحی کیف‌پول‌های تخصصی سوخت را فراهم می‌کند.",
        Icon: LuCreditCard
    },
    {
        title: "داده‌برداری بلندمدت و هوش تجاری",
        description:
            "ICTS داده‌ها را به سرمایه‌ی راهبردی تبدیل می‌کند؛ ذخیره‌سازی بلندمدت، دیدن روندها و تحلیل الگوهای مصرف، پایه‌ی ورود هوش مصنوعی به مدیریت هوشمند سوخت است.",
        Icon: LuChartLine

    }
];

export default function TechHighlightsSection ()
{
    return (
        <section id="tech-highlights" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    قابلیت‌ها و فناوری‌های کلیدی در قلب ICTS
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto">
                    ترکیبی از طراحی سخت‌افزاری بومی، نرم‌افزار مدرن و زیرساخت امن داده که
                    ICTS را از یک سیستم کنترلی ساده فراتر می‌برد.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                    { techHighlights.map( ( item ) =>
                    {
                        const Icon = item.Icon;
                        return (
                            <article
                                key={ item.title }
                                className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm flex flex-col gap-3"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bms-primary-soft text-bms-primary">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                                        { item.title }
                                    </h3>
                                    <p className="text-[11px] md:text-sm leading-relaxed text-slate-700">
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
