// app/(landing)/clinicans/all-in-one/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "همه ماژول‌ها | Clinicans",
    description:
        "نمای کامل ماژول‌های Clinicans: نوبت‌دهی، پرونده، مالی، پیامک، CRM، گزارش‌ها، بازاریابی و زیرساخت امن.",
};

const MODULE_GROUPS: Array<{
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string; tag?: string; }>;
}> = [
        {
            title: "پذیرش و نوبت‌دهی",
            desc: "کاهش تماس‌های تکراری، نظم‌دهی به زمان‌ها و جلوگیری از هدررفت ظرفیت پزشک.",
            items: [
                { title: "تقویم نوبت‌ها", desc: "نمای روز/هفته، رزرو سریع، مدیریت لغو و جابه‌جایی." },
                { title: "صف انتظار", desc: "پر کردن خودکار زمان‌های خالی و کاهش عدم حضور." },
                { title: "یادآوری پیامکی", desc: "کاهش No-Show با الگوی پیام و زمان‌بندی هوشمند.", tag: "SMS" },
                { title: "چک‌این و پذیرش سریع", desc: "ورود مراجع در چند ثانیه، بدون سردرگمی." },
            ],
        },
        {
            title: "پرونده و گردش درمان",
            desc: "ثبت یکپارچه اطلاعات و افزایش کیفیت پیگیری درمان.",
            items: [
                { title: "پرونده مراجعین", desc: "سوابق، تصاویر/فایل‌ها، یادداشت‌ها و پیگیری‌ها." },
                { title: "خدمات و پکیج‌ها", desc: "تعریف سرویس‌ها، تعرفه‌ها، مدت زمان و پیش‌نیازها." },
                { title: "فرم‌ها و رضایت‌نامه‌ها", desc: "نسخه دیجیتال + آرشیو و دسترسی سریع." },
                { title: "تسک‌ها و پیگیری‌ها", desc: "کارهای تیم پذیرش/پزشک با وضعیت و یادآور." },
            ],
        },
        {
            title: "مالی و عملیات",
            desc: "شفافیت برای مدیریت، سرعت برای پذیرش، گزارش‌پذیری برای حسابداری.",
            items: [
                { title: "فاکتور و پرداخت", desc: "پرداخت نقد/کارت/آنلاین، چندمرحله‌ای، رسید." },
                { title: "مدیریت بدهی و اقساط", desc: "پیگیری مانده، سررسیدها و وضعیت پرداخت." },
                { title: "گزارش درآمد", desc: "روزانه/ماهانه، پزشک/سرویس/کانال ورودی." },
                { title: "کنترل هزینه‌های عملیاتی", desc: "ثبت هزینه‌ها و تحلیل سود/زیان در سطح مدیریت." },
            ],
        },
        {
            title: "CRM و ارتباط با مراجع",
            desc: "نگهداشت مشتری، بازگشت مجدد و افزایش LTV بدون ابزارهای پراکنده.",
            items: [
                { title: "پروفایل ۳۶۰ درجه", desc: "تاریخچه تماس، خرید، نوبت‌ها و ترجیحات." },
                { title: "تقسیم‌بندی مخاطبان", desc: "براساس شهر/محله، سرویس، تاریخ مراجعه و…" },
                { title: "پیام‌رسانی هدفمند", desc: "ارسال پیام به گروه‌های انتخابی با متن سفارشی.", tag: "SMS Marketing" },
                { title: "کمپین‌های بازگشت", desc: "ری‌اکتیو کردن مشتریان قدیمی با سناریوهای آماده." },
            ],
        },
        {
            title: "گزارش‌ها و مدیریت",
            desc: "داشبوردهای مدیریتی با KPIهای کلیدی و تصمیم‌گیری سریع‌تر.",
            items: [
                { title: "داشبورد KPI", desc: "No-Show، نرخ پرشدن ظرفیت، درآمد، رشد ماهانه." },
                { title: "تحلیل کانال جذب", desc: "منبع ورودی مشتری (آفلاین/آنلاین/ارجاع و…)." },
                { title: "گزارش عملکرد پزشک", desc: "ساعات فعال، سرویس‌ها، درآمد، روندها." },
                { title: "خروجی‌گیری", desc: "اکسل/CSV برای استفاده‌های مدیریتی و مالی." },
            ],
        },
        {
            title: "امنیت و زیرساخت",
            desc: "قابل‌اعتماد، قابل‌ممیزی و آماده رشد در مقیاس.",
            items: [
                { title: "نقش‌ها و سطح دسترسی", desc: "تفکیک دسترسی پذیرش/پزشک/مدیر/حسابدار." },
                { title: "لاگ فعالیت‌ها", desc: "ردیابی تغییرات حساس و رویدادهای مهم." },
                { title: "پشتیبان‌گیری و بازیابی", desc: "سناریوهای بازیابی و نگهداری داده." },
                { title: "مقیاس‌پذیری", desc: "آماده برای رشد تعداد کلینیک/کاربر/مراجع." },
            ],
        },
    ];

export default function ClinicansAllInOnePage ()
{
    return (
        <main className="min-h-screen">
            {/* Top bar (lightweight, no site header) */ }
            <div className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
                <div className="container mx-auto flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
                            C
                        </span>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold text-slate-900">Clinicans</div>
                            <div className="text-[11px] text-slate-500">All-in-One Modules</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/clinicans"
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                        >
                            بازگشت
                        </Link>
                        <Link
                            href="/contact?type=clinicans-demo"
                            className="rounded-xl bg-bms-primary px-4 py-2 text-sm font-semibold text-white hover:bg-bms-primary/90"
                        >
                            درخواست دمو
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero */ }
            <section className="container mx-auto py-10 md:py-14">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-bms-primary" />
                            یک پلتفرم، تمام ماژول‌ها
                        </div>

                        <h1 className="mt-4 text-3xl font-bold leading-tight text-bms-dark md:text-5xl">
                            Clinicans All-in-One
                            <span className="block text-slate-600 md:mt-2 md:text-2xl">
                                مدیریت، رشد و گزارش‌دهی کلینیک — یکجا، یکپارچه، قابل‌اتکا
                            </span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
                            این صفحه یک نمای کامل از ماژول‌های اصلی Clinicans است؛ برای اینکه تیم مدیریت و تصمیم‌گیرندگان
                            دقیقاً ببینند چه چیزهایی در پلتفرم وجود دارد و چطور کنار هم یک «سیستم یکپارچه» می‌سازند.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/contact?type=clinicans-demo"
                                className="inline-flex items-center justify-center rounded-2xl bg-bms-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-bms-primary/90"
                            >
                                درخواست جلسه معرفی و دمو
                            </Link>
                            <Link
                                href="#modules"
                                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                            >
                                مشاهده فهرست ماژول‌ها
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            { [
                                { k: "کاهش No-Show", v: "با یادآوری و پیگیری" },
                                { k: "شفافیت مالی", v: "گزارش‌های مدیریتی" },
                                { k: "رشد پایدار", v: "CRM + کمپین هدفمند" },
                            ].map( ( x ) => (
                                <div
                                    key={ x.k }
                                    className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm"
                                >
                                    <div className="text-sm font-semibold text-slate-900">{ x.k }</div>
                                    <div className="mt-1 text-sm text-slate-600">{ x.v }</div>
                                </div>
                            ) ) }
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
                            <div className="text-sm font-semibold text-slate-900">نمای سریع</div>
                            <div className="mt-1 text-sm text-slate-600">
                                اگر بخواهیم این صفحه را شبیه کاتالوگ تصمیم‌گیری ببینیم:
                            </div>

                            <ul className="mt-4 space-y-3 text-sm text-slate-700">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-bms-primary" />
                                    ماژول‌ها دسته‌بندی شده‌اند تا سریع مقایسه و انتخاب کنید.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-bms-primary" />
                                    هر کارت، «اسم + کاربرد کوتاه» دارد تا جلسه معرفی سریع‌تر جلو برود.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-bms-primary" />
                                    در انتها می‌توانید برای دمو یا نمونه محیط کاربری اقدام کنید.
                                </li>
                            </ul>

                            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-900">پیشنهاد برای ارائه</div>
                                <div className="mt-1 text-sm text-slate-600">
                                    این صفحه را در جلسه اسکرول کنید و روی دسته‌ها مکث کنید — دقیقاً مثل بروشور ماژول‌ها.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules */ }
            <section id="modules" className="container mx-auto pb-14">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-bms-dark md:text-3xl">فهرست ماژول‌ها</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                            ساختار زیر دقیقاً برای «تصمیم‌گیری» طراحی شده: گروه‌ها + کارت‌های ساده و خوانا.
                        </p>
                    </div>
                    <a
                        href="#cta"
                        className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 md:inline-flex"
                    >
                        رفتن به CTA
                    </a>
                </div>

                <div className="mt-6 grid gap-6">
                    { MODULE_GROUPS.map( ( group ) => (
                        <div
                            key={ group.title }
                            className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm"
                        >
                            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                                <div>
                                    <div className="text-lg font-bold text-slate-900">{ group.title }</div>
                                    <div className="mt-1 text-sm text-slate-600">{ group.desc }</div>
                                </div>
                                <div className="text-xs text-slate-500">
                                    طراحی شده برای تجربه‌ای شبیه Odoo: ساده، مرتب، قابل اسکن
                                </div>
                            </div>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                { group.items.map( ( item ) => (
                                    <div
                                        key={ item.title }
                                        className="group rounded-2xl border border-slate-200/70 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm"
                                    >
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="text-sm font-semibold text-slate-900">
                                                { item.title }
                                            </div>
                                            { item.tag ? (
                                                <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600">
                                                    { item.tag }
                                                </span>
                                            ) : null }
                                        </div>
                                        <div className="mt-2 text-sm leading-6 text-slate-600">
                                            { item.desc }
                                        </div>
                                        <div className="mt-3 h-px bg-slate-200/70" />
                                        <div className="mt-3 text-xs text-slate-500">
                                            یکپارچه با سایر ماژول‌ها
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                    ) ) }
                </div>
            </section>

            {/* CTA */ }
            <section id="cta" className="border-t border-slate-200/70 bg-white">
                <div className="container mx-auto py-12">
                    <div className="grid items-center gap-6 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <h3 className="text-2xl font-bold text-bms-dark">
                                آماده‌ای ماژول‌ها را روی یک نمونه واقعی ببینی؟
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                                اگر هدفت تصمیم‌گیری سریع است، دمو را برگزار می‌کنیم و دقیقاً براساس نیاز کلینیک شما،
                                ماژول‌های مربوط را نشان می‌دهیم.
                            </p>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <Link
                                    href="/contact?type=clinicans-demo"
                                    className="inline-flex items-center justify-center rounded-2xl bg-bms-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-bms-primary/90"
                                >
                                    درخواست دمو
                                </Link>
                                <Link
                                    href="/clinicans"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                                >
                                    برگشت به معرفی Clinicans
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-slate-500">
                        © Clinicans — All-in-One Modules
                    </div>
                </div>
            </section>
        </main>
    );
}
