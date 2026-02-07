"use client";

import
{
    LuCpu,
    LuCircuitBoard,
    LuNetwork,
    LuDatabase,
    LuShieldCheck,
    LuActivity,
} from "react-icons/lu";

type HighlightKey =
    | "field"
    | "edge"
    | "network"
    | "platform"
    | "security"
    | "monitoring";

type TechItem = {
    id: HighlightKey;
    title: string;
    description: string;
    Icon: React.ElementType;
};

const techHighlights: TechItem[] = [
    {
        id: "field",
        title: "لایه میدان و تجهیزات صنعتی",
        description:
            "استفاده از PLCهای صنعتی، کنترلرهای امبدد و سنسورهای میدانی برای پایش فشار، دما، وضعیت شیرها و فرآیند سوخت‌گیری با قابلیت کار مداوم در شرایط سخت محیطی.",
        Icon: LuCircuitBoard,
    },
    {
        id: "edge",
        title: "پردازش لبه (Edge Computing)",
        description:
            "تحلیل و اعتبارسنجی داده‌ها در نزدیک‌ترین نقطه به میدان برای کاهش تأخیر (Latency)، افزایش پایداری و حفظ عملکرد حتی در صورت قطع ارتباط با مرکز.",
        Icon: LuCpu,
    },
    {
        id: "network",
        title: "شبکه ارتباطی صنعتی امن",
        description:
            "ارتباط پایدار و رمزنگاری‌شده بین جایگاه‌ها و مرکز از طریق شبکه‌های صنعتی، VPN و پروتکل‌های امن متناسب با زیرساخت‌های ملی.",
        Icon: LuNetwork,
    },
    {
        id: "platform",
        title: "پلتفرم داده و سرویس‌های مرکزی",
        description:
            "ذخیره‌سازی، تجمیع و پردازش داده‌های عملیاتی در یک بستر متمرکز و مقیاس‌پذیر؛ آماده تحلیل کلان، گزارش‌گیری حاکمیتی و اتصال به داشبوردهای مدیریتی.",
        Icon: LuDatabase,
    },
    {
        id: "security",
        title: "امنیت، احراز هویت و کنترل دسترسی",
        description:
            "پیاده‌سازی سیاست‌های امنیتی چندلایه شامل احراز هویت تجهیزات، ثبت رخداد (Audit Log) و کنترل دسترسی برای انطباق با الزامات پدافند غیرعامل.",
        Icon: LuShieldCheck,
    },
    {
        id: "monitoring",
        title: "پایش لحظه‌ای و هشدار هوشمند",
        description:
            "مانیتورینگ 24/7 وضعیت جایگاه‌ها و تجهیزات به‌همراه تولید هشدارهای پیشگیرانه برای جلوگیری از بروز حادثه پیش از وقوع.",
        Icon: LuActivity,
    },
];

export default function TechHighlightsSection ()
{
    return (
        <section
            id="tech-highlights"
            aria-labelledby="tech-heading"
            className="py-20 md:py-28 bg-slate-50"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <span className="inline-block rounded-md bg-white px-4 py-1.5 text-xs font-bold text-slate-600 border border-slate-200">
                        معماری فنی سامانه
                    </span>

                    <h2
                        id="tech-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        فناوری در{ " " }
                        <span className="text-bms-primary">
                            هسته ICTS
                        </span>
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        ICTS بر پایه یک معماری صنعتی چندلایه طراحی شده است که از
                        میدان تا مرکز، پایداری، امنیت و مقیاس‌پذیری را به‌صورت
                        یکپارچه تضمین می‌کند.
                    </p>
                </header>

                {/* ================= STACK ================= */ }
                <div className="relative">

                    {/* Central spine (desktop only) */ }
                    <div
                        className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"
                        aria-hidden
                    />

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                        { techHighlights.map( ( item ) =>
                        {
                            const Icon = item.Icon;

                            return (
                                <article
                                    key={ item.id }
                                    className="relative rounded-[2rem] border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
                                >
                                    {/* Connector dot (desktop) */ }
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-3 h-2.5 w-2.5 rounded-full bg-bms-primary"
                                        aria-hidden
                                    />

                                    {/* Header */ }
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-bms-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold text-slate-900">
                                            { item.title }
                                        </h3>
                                    </div>

                                    {/* Body */ }
                                    <p className="text-sm md:text-[15px] leading-7 text-slate-600 text-justify">
                                        { item.description }
                                    </p>
                                </article>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        </section>
    );
}
