// components/home/ProductBands.tsx
import Link from "next/link";
import CngPilotVideo from "./CngPilotVideo";
import { LuCpu, LuActivity, LuHandshake, LuArrowUpLeft } from "react-icons/lu";

export default function ProductBands ()
{
    return (
        <section className="py-10 md:py-16" aria-labelledby="products-heading">
            <div className="mx-auto max-w-6xl">

                {/* 
          🧠 SEMANTIC HEADER
          - Matches the visual rhythm of WorldsGrid.
          - Provides context before showing the cards.
        */}
                <div className="mb-12 space-y-3 text-right px-4">
                    <span className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                        محصولات عملیاتی
                    </span>
                    <h2
                        id="products-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        سامانه‌ها و <span className="text-bms-primary">محصولات</span>
                    </h2>
                    <p className="ml-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                        ما تنها طراح نیستیم؛ ما سازنده‌ایم. این‌ها محصولاتی هستند که هم‌اکنون در زیرساخت‌های ملی و کسب‌وکارهای خصوصی در حال خدمت‌رسانی هستند.
                    </p>
                </div>

                {/* Bands Container */ }
                <div className="space-y-16">
                    <ICTSBand />
                    <ClinicansBand />
                    <CooperationBand />
                </div>
            </div>
        </section>
    );
}

/* 
  🟦 BAND 1: ICTS (CNG Automation)
*/
function ICTSBand ()
{
    return (
        <article
            className="group relative overflow-hidden rounded-[2.5rem] border border-bms-primary/10 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 md:p-10 shadow-sm transition-shadow hover:shadow-md"
        >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">

                {/* Content (Right in RTL) */ }
                <div className="lg:flex-1 space-y-6 text-right">
                    <div className="flex items-center gap-2 text-bms-primary">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bms-primary/10">
                            <LuCpu className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">زیرساخت‌های حیاتی انرژی</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
                        سامانه هوشمند <span className="text-bms-primary">ICTS</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500">پایش و کنترل جایگاه‌های سوخت CNG</span>
                    </h3>

                    <p className="text-sm leading-7 text-slate-600 md:text-base text-justify">
                        پاسخ بومی بارمان به چالش ایمنی و نظارت در شبکه سوخت کشور.
                        ICTS با تلفیق سخت‌افزار صنعتی و نرم‌افزار مرکزی، داده‌های میدان را به صورت لحظه‌ای (Real-time)
                        پردازش کرده و ریسک حوادث ناشی از خودروهای غیرواجد شرایط را به صفر نزدیک می‌کند.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700">
                        { [ "شناسایی خودکار خودروهای پرخطر", "داشبورد مدیریتی تحت وب", "سخت‌افزار مقاوم صنعتی (Industrial Grade)" ].map( ( item, i ) => (
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

                {/* Media (Left) */ }
                <div className="w-full lg:w-[45%]">
                    <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl rotate-1 transition-transform duration-500 group-hover:rotate-0">
                        <CngPilotVideo
                            src="/CNG_Station_Automation.mp4"
                            ariaLabel="ویدیو عملکرد سامانه هوشمند در جایگاه سوخت"
                        />
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-bms-primary/10" />
                    </div>
                </div>
            </div>
        </article>
    );
}

/* 
  🟩 BAND 2: Clinicans (SaaS Healthcare)
*/
function ClinicansBand ()
{
    return (
        <article
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-10 shadow-sm transition-shadow hover:shadow-md"
        >
            <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-12">

                {/* Content */ }
                <div className="lg:flex-1 space-y-6 text-right">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                            <LuActivity className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">سلامت دیجیتال (E-Health)</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
                        پلتفرم ابری <span className="text-emerald-600">Clinicans</span>
                        <br />
                        <span className="text-lg font-medium text-slate-500">مدیریت یکپارچه کلینیک‌های مدرن</span>
                    </h3>

                    <p className="text-sm leading-7 text-slate-600 md:text-base text-justify">
                        پایان دوران نرم‌افزارهای جزیره‌ای. کلینیکانز (Clinicans) تمام نیازهای یک مرکز درمانی،
                        از نوبت‌دهی آنلاین و پرونده الکترونیک (EHR) تا حسابداری و CRM را در یک پلتفرم امن و یکپارچه گردآورده است.
                    </p>

                    <ul className="grid gap-3 text-sm text-slate-700">
                        { [ "پرونده الکترونیک سلامت (EHR)", "باشگاه مشتریان و مارکتینگ خودکار", "گزارش‌های هوش تجاری (BI)" ].map( ( item, i ) => (
                            <li key={ i } className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                { item }
                            </li>
                        ) ) }
                    </ul>

                    <div className="pt-2">
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                        >
                            مشاهده امکانات پلتفرم
                            <LuArrowUpLeft className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Visual: CSS Dashboard Mockup */ }
                <div className="w-full lg:w-[45%]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="absolute top-0 right-0 h-full w-16 border-l border-slate-200 bg-white" />
                        <div className="absolute top-4 right-20 left-4 h-8 rounded-lg bg-white border border-slate-200" />
                        <div className="absolute top-16 right-20 left-4 grid grid-cols-3 gap-3">
                            <div className="h-24 rounded-lg bg-white border border-slate-200 p-3">
                                <div className="h-2 w-8 rounded bg-emerald-100 mb-2" />
                                <div className="h-6 w-12 rounded bg-slate-100" />
                            </div>
                            <div className="h-24 rounded-lg bg-white border border-slate-200 p-3">
                                <div className="h-2 w-8 rounded bg-blue-100 mb-2" />
                                <div className="h-6 w-12 rounded bg-slate-100" />
                            </div>
                            <div className="h-24 rounded-lg bg-white border border-slate-200 p-3">
                                <div className="h-2 w-8 rounded bg-purple-100 mb-2" />
                                <div className="h-6 w-12 rounded bg-slate-100" />
                            </div>
                        </div>
                        <div className="absolute top-44 right-20 left-4 bottom-4 rounded-lg bg-white border border-slate-200 p-4">
                            <div className="flex items-end gap-2 h-full w-full opacity-50">
                                <div className="w-full bg-emerald-500 rounded-t h-[40%]" />
                                <div className="w-full bg-emerald-500 rounded-t h-[70%]" />
                                <div className="w-full bg-emerald-500 rounded-t h-[50%]" />
                                <div className="w-full bg-emerald-500 rounded-t h-[85%]" />
                                <div className="w-full bg-emerald-500 rounded-t h-[60%]" />
                            </div>
                        </div>
                        <div className="absolute bottom-3 right-3 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                            Live Demo
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* 
  🟪 BAND 3: Cooperation
*/
function CooperationBand ()
{
    return (
        <article
            className="rounded-[2.5rem] bg-slate-900 p-8 md:p-12 text-center text-white shadow-xl"
        >
            <div className="mx-auto max-w-3xl space-y-6">
                <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                        <LuHandshake className="h-6 w-6" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold md:text-4xl">
                    هم‌افزایی برای خلق <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">آینده هوشمند</span>
                </h3>

                <p className="text-sm leading-8 text-slate-300 md:text-base">
                    ما در بارمان به دنبال شرکای تجاری و سرمایه‌گذارانی هستیم که دیدگاهی فراتر از امروز دارند.
                    زیرساخت ماژولار ما (WIT) آماده است تا بستر توسعه محصولات نوآورانه در صنایع جدید باشد.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
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
                        تماس با واحد توسعه کسب‌وکار
                    </Link>
                </div>
            </div>
        </article>
    );
}