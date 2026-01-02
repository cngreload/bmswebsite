// components/home/ProductBands.tsx
import Link from "next/link";
import CngPilotVideo from "./CngPilotVideo";
import
{
    LuCpu,
    LuActivity,
    LuHandshake,
    LuArrowUpLeft,
    LuGlobe, // Added for the WIT section
} from "react-icons/lu";

export default function ProductBands ()
{
    return (
        <section className="py-10 md:py-16" aria-labelledby="products-heading">
            <div className="mx-auto max-w-6xl">
                {/* HEADER */ }
                <div className="mb-12 space-y-3 text-right px-4">
                    <span className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                        محصولات و راهکارها
                    </span>
                    <h2
                        id="products-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        سامانه‌ها و <span className="text-bms-primary">پلتفرم‌های عملیاتی</span>
                    </h2>
                    <p className="ml-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                        راهکارهای بارمان‌محور اسپادانا صرفاً مفاهیم تئوریک یا نمونه‌های
                        آزمایشگاهی نیستند؛ این سامانه‌ها به‌صورت عملیاتی در محیط‌های واقعی،
                        زیرساخت‌های حساس و کسب‌وکارهای فعال مورد استفاده قرار گرفته‌اند.
                    </p>
                </div>

                {/* PRODUCT BANDS */ }
                <div className="space-y-16">
                    <ICTSBand />
                    <ClinicansBand />
                    <CooperationBand />
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────
   🟦 PRODUCT 1: ICTS (CNG / ENERGY)
───────────────────────────── */
function ICTSBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-bms-primary/10 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 md:p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                {/* CONTENT */ }
                <div className="lg:flex-1 space-y-6 text-right">
                    <div className="flex items-center gap-2 text-bms-primary">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bms-primary/10">
                            <LuCpu className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            سامانه صنعتی پایش و کنترل
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
                        سامانه هوشمند <span className="text-bms-primary">ICTS</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500">
                            پایش و کنترل جایگاه‌های سوخت CNG
                        </span>
                    </h3>

                    <p className="text-sm leading-7 text-slate-600 md:text-base text-justify">
                        ICTS راهکار بومی بارمان برای مدیریت، ایمنی و نظارت هوشمند بر شبکه
                        جایگاه‌های سوخت CNG است. این سامانه با تکیه بر سخت‌افزار صنعتی،
                        کنترلرهای میدانی و نرم‌افزار مرکزی، داده‌های عملیاتی را به‌صورت
                        بلادرنگ تحلیل کرده و زمینه تصمیم‌گیری دقیق و کاهش ریسک‌های عملیاتی
                        و حوادث را فراهم می‌سازد.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700">
                        { [
                            "پایش بلادرنگ تجهیزات و فرآیند سوخت‌گیری",
                            "داشبورد مدیریتی و نظارت متمرکز",
                            "سخت‌افزار صنعتی مقاوم و بومی (Industrial Grade)",
                        ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-bms-accent" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    <div className="pt-2">
                        <Link
                            href="/cng-automation"
                            className="inline-flex items-center gap-2 text-sm font-bold text-bms-primary hover:text-bms-dark transition-colors"
                        >
                            بررسی فنی سامانه
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* MEDIA */ }
                <div className="w-full lg:w-[45%]">
                    <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl rotate-1 transition-transform duration-500 group-hover:rotate-0">
                        <CngPilotVideo
                            src="/CNG_Station_Automation.mp4"
                            ariaLabel="ویدیو عملکرد سامانه هوشمند ICTS در جایگاه سوخت"
                        />
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-bms-primary/10" />
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────
   🟩 PRODUCT 2: CLINICANS
───────────────────────────── */
function ClinicansBand ()
{
    return (
        <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-12">
                {/* CONTENT */ }
                <div className="lg:flex-1 space-y-6 text-right">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                            <LuActivity className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                            پلتفرم سلامت دیجیتال
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
                        پلتفرم <span className="text-emerald-600">Clinicans</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500">
                            مدیریت یکپارچه کلینیک‌های سلامت و زیبایی
                        </span>
                    </h3>

                    <p className="text-sm leading-7 text-slate-600 md:text-base text-justify">
                        Clinicans یک پلتفرم نرم‌افزاری یکپارچه برای مدیریت هوشمند کلینیک‌ها
                        و مراکز درمانی است که فرآیندهای بالینی، مالی و ارتباط با مراجعان
                        را در یک هسته منسجم، امن و قابل توسعه تجمیع می‌کند.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700">
                        { [
                            "پرونده الکترونیک سلامت و اطلاعات مراجعان",
                            "مدیریت نوبت‌دهی، پذیرش و ارتباط با بیمار",
                            "گزارش‌های مدیریتی و تحلیل عملکرد کلینیک",
                        ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    {/* CTA BUTTONS */ }
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                        >
                            مشاهده جزئیات پلتفرم
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>

                        <a
                            href="https://clinicans.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                            aria-label="ورود مستقیم به پلتفرم Clinicans"
                        >
                            ورود به پلتفرم Clinicans
                        </a>
                    </div>
                </div>

                {/* VISUAL MOCKUP */ }
                <div className="w-full lg:w-[45%]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="absolute bottom-3 right-3 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                            Active Platform
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────
   🟪 BUSINESS & COOPERATION
───────────────────────────── */
function CooperationBand ()
{
    return (
        <article className="rounded-[2.5rem] bg-slate-900 p-8 md:p-12 text-center text-white shadow-xl">
            <div className="mx-auto max-w-3xl space-y-8">
                {/* ICON & TITLE */ }
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                            <LuHandshake className="h-6 w-6" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold md:text-4xl">
                        مسیرهای همکاری برای خلق{ " " }
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            آینده هوشمند
                        </span>
                    </h3>

                    <p className="text-sm leading-8 text-slate-300 md:text-base">
                        زیرساخت ماژولار و پلتفرم‌محور بارمان بستری برای توسعه مشترک محصولات،
                        سرمایه‌گذاری فناورانه و ورود هدفمند به حوزه‌های نوظهور صنعتی و
                        دیجیتال فراهم می‌کند.
                    </p>
                </div>

                {/* BUTTONS */ }
                <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                    <Link
                        href="/intelligentautomation"
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-slate-900 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
                    >
                        مدل‌های همکاری
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-transparent px-8 text-sm font-bold text-white transition-colors hover:bg-white/5"
                    >
                        تماس با توسعه کسب‌وکار
                    </Link>
                </div>

                {/* 🆕 WIT: Worldwide Intelligent Technology SECTION */ }
                <div className="pt-8">
                    <div className="group relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-md transition-all duration-500 hover:border-blue-400/30 hover:bg-white/10">
                        {/* Ambient Glow Effect */ }
                        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[50px] transition-opacity group-hover:opacity-100" />

                        <div className="relative flex flex-col items-center justify-center space-y-2">
                            {/* WIT Title */ }
                            <h4 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 drop-shadow-sm">
                                WIT
                            </h4>

                            {/* Separator */ }
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                            {/* Subtitle with Icon */ }
                            <div className="flex items-center gap-2 pt-1">
                                <LuGlobe className="h-3 w-3 text-blue-400 opacity-80" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
                                    Worldwide Intelligent Technology
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}