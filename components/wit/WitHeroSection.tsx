import { LuCpu, LuLayers, LuNetwork } from "react-icons/lu";

export default function WitHeroSection ()
{
    return (
        <section
            className="relative text-right overflow-hidden"
            aria-labelledby="wit-hero-heading"
            role="banner"
        >
            <div className="space-y-6 max-w-4xl">
                {/* Badge – Positioning & Entity Signal */ }
                <div
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-bold text-indigo-600"
                    aria-label="World Intelligent Technology Platform"
                >
                    <LuCpu className="h-4 w-4" />
                    <span>World Intelligent Technology (WIT)</span>
                </div>

                {/* H1 – Primary SEO Anchor */ }
                <h1
                    id="wit-hero-heading"
                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-bms-dark tracking-tight"
                >
                    هسته‌ی تصمیم‌ساز
                    <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-violet-600">
                        زیرساخت‌های هوشمند
                    </span>
                </h1>

                {/* Supporting Description – Context for Google & Humans */ }
                <p className="text-base md:text-lg leading-8 text-slate-600 max-w-3xl font-light">
                    <strong className="font-medium text-slate-900">WIT</strong> یک
                    پلتفرم هسته‌ای سخت‌افزاری و نرم‌افزاری است که داده‌های خام میدانی را
                    از لایه تجهیزات و حسگرها دریافت می‌کند و آن‌ها را به{ " " }
                    <strong className="font-medium text-slate-900">
                        بینش عملیاتی، کنترلی و مدیریتی
                    </strong>{ " " }
                    تبدیل می‌نماید — زیرساختی قابل اتکا برای پروژه‌های{ " " }
                    <span className="text-slate-800">
                        ماموریت‌حیاتی، صنعتی و مقیاس‌ملی
                    </span>
                    .
                </p>

                {/* Technical Proof Points – Scannable Signals */ }
                <ul
                    className="mt-4 grid gap-3 sm:grid-cols-3 text-xs md:text-sm text-slate-600"
                    role="list"
                    aria-label="WIT platform capabilities"
                >
                    <li className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                        <LuNetwork className="h-4 w-4 text-indigo-500" />
                        <span>Sensors · PLC · Embedded Systems</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                        <LuLayers className="h-4 w-4 text-indigo-500" />
                        <span>IIoT · Edge-to-Cloud · Data Core</span>
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                        <LuCpu className="h-4 w-4 text-indigo-500" />
                        <span>Industrial-Grade · Secure · Scalable</span>
                    </li>
                </ul>
            </div>

            {/* Abstract Tech Background – Non-visual, Signal-Only */ }
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-1/3 h-full opacity-10
        bg-[radial-gradient(circle_at_50%_50%,#6366f1,transparent_70%)]
        blur-3xl -z-10 pointer-events-none"
            />
        </section>
    );
}
