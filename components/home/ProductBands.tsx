import Link from "next/link";

export default function ProductBands ()
{
    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
                <ICTSBand />
                <ClinicansBand />
                <CooperationBand />
            </div>
        </section>
    );
}

/* 🟦 باند ۱ – سامانه هوشمند جایگاه‌های سوخت CNG (با ویدیو پایلوت) */

function ICTSBand ()
{
    return (
        <article className="rounded-3xl border border-bms-primary/10 bg-bms-primary-soft/70 p-5 md:p-8 shadow-soft-lg">
            <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-stretch">
                {/* متن – راست (در RTL) */ }
                <div className="md:flex-1 text-right space-y-4">
                    {/* سوپرتایتل */ }
                    <p className="text-[11px] md:text-xs font-medium text-bms-primary">
                        انرژی، ایمنی و زیرساخت‌های حیاتی
                    </p>

                    {/* تیتر اصلی */ }
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-bms-dark leading-relaxed">
                        سامانه هوشمند کنترل و مانیتورینگ جایگاه‌های CNG
                    </h3>

                    {/* زیرتیتر کوتاه */ }
                    <p className="text-xs md:text-sm text-slate-700">
                        جایی که فناوری، ایمنی و بهره‌وری به هم می‌رسند.
                    </p>

                    {/* پاراگراف‌ها */ }
                    <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-700">
                        <p>
                            داستان این سامانه از دل یک نیاز واقعی در جایگاه‌های سوخت آغاز شد؛
                            نیازی به نظارت دقیق، سریع و ایمن بر فرآیندهایی که هر روز با جان و
                            سرمایه‌ی مردم گره خورده‌اند. پاسخی که بارمان به این نیاز داد،
                            صرفاً یک محصول نبود؛ تحولی بومی و جسورانه در نحوه‌ی نگاه به کنترل
                            و مانیتورینگ در صنعت سوخت کشور بود.
                        </p>
                        <p>
                            سامانه هوشمند کنترل و مانیتورینگ جایگاه‌های CNG با تکیه بر
                            فناوری‌های روز، داده‌ها را به‌صورت لحظه‌ای جمع‌آوری و پردازش
                            می‌کند، وضعیت تجهیزات حیاتی را پایش می‌کند و با ارائه‌ی داشبوردها
                            و گزارش‌های تعاملی، مدیریت را از کاری پیچیده و پراکنده به
                            تصمیم‌گیری هوشمند، مستند و قابل ردیابی تبدیل می‌کند.
                        </p>
                        <p>
                            نقطه‌ی عطف این سامانه، قابلیت شناسایی خودکار خودروهای غیر
                            استاندارد است؛ راهکاری که با پیشگیری از حوادث و کاهش ریسک‌های
                            پنهان، ایمنی را از یک شعار به واقعیتی ملموس برای بهره‌برداران،
                            کارکنان و مراجعان جایگاه تبدیل می‌کند.
                        </p>
                    </div>

                    {/* بولت‌های نتیجه‌محور */ }
                    <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-slate-700 list-disc pr-4">
                        <li>
                            پایش و کنترل لحظه‌ای تجهیزات، نازل‌ها و زیرساخت‌های حیاتی جایگاه
                        </li>
                        <li>
                            کاهش ریسک حوادث و توقف‌های هزینه‌زا با شناسایی خودکار شرایط و
                            خودروهای پرخطر
                        </li>
                        <li>
                            تولید گزارش‌ها و بینش مدیریتی برای انطباق با الزامات، برنامه‌ریزی
                            و تصمیم‌سازی
                        </li>
                        <li>
                            یکپارچگی سخت‌افزار و نرم‌افزار بومی، مبتنی بر تجربه‌ی میدانی در
                            طرح‌های ملی
                        </li>
                    </ul>

                    {/* CTA */ }
                    <div className="mt-4 flex justify-end">
                        <Link
                            href="/cng-automation"
                            className="inline-flex items-center gap-1 rounded-full bg-bms-primary px-5 py-2 text-[11px] md:text-xs font-medium text-white hover:bg-bms-dark transition-colors"
                        >
                            <span>مشاهده جزئیات سامانه جایگاه‌های CNG</span>
                            <span className="text-[13px]">↗</span>
                        </Link>
                    </div>
                </div>

                {/* ویدیو / موکاپ – چپ (در RTL) */ }
                <div className="md:w-[42%] space-y-3">
                    <p className="text-[10px] md:text-[11px] text-slate-600 text-right">
                        نمایش بخشی از اجرای پایلوت سامانه در جایگاه‌های CNG
                    </p>

                    <div
                        className="relative overflow-hidden rounded-2xl bg-slate-900 text-white aspect-video flex items-center justify-center shadow-soft-lg"
                        aria-label="پایلوت سامانه هوشمند کنترل و مانیتورینگ جایگاه CNG بارمان"
                    >
                        {/* اینجا بعداً می‌توان ویدیو واقعی یا تصویر موکاپ قرار داد */ }
                        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-bms-primary via-bms-accent to-slate-900" />
                        <div className="relative flex flex-col items-center gap-2">
                            <button
                                type="button"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-bms-primary shadow-lg"
                            >
                                <span className="mr-0.5 translate-x-[1px] text-lg">▶</span>
                            </button>
                            <span className="text-[10px] md:text-xs text-white/85">
                                مشاهده ویدیوی پایلوت (نمونه نمایشی)
                            </span>
                        </div>
                    </div>

                    <p className="text-[10px] md:text-[11px] leading-relaxed text-slate-600 text-right">
                        ویدیو پایلوت سامانه هوشمند کنترل و مانیتورینگ بارمان در یکی از
                        جایگاه‌های منتخب؛ نمونه‌ای از کار در میدان، نه صرفاً در آزمایشگاه.
                    </p>
                </div>
            </div>
        </article>
    );
}

/* 🟦 باند ۲ – پلتفرم Clinicans برای کلینیک‌ها */

function ClinicansBand ()
{
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-5 md:p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-stretch">
                {/* متن – راست */ }
                <div className="md:flex-1 text-right space-y-4">
                    {/* سوپرتایتل */ }
                    <p className="text-[11px] md:text-xs font-medium text-bms-primary">
                        سلامت دیجیتال و کلینیک‌های هوشمند
                    </p>

                    {/* تیتر اصلی */ }
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-bms-dark leading-relaxed">
                        Clinicans – پلتفرم فول‌استک مدیریت کلینیک‌های زیبایی و سلامت
                    </h3>

                    {/* زیرتیتر کوتاه */ }
                    <p className="text-xs md:text-sm text-slate-700">
                        از نوبت‌دهی تا رشد درآمد؛ همه‌چیز در یک بستر یکپارچه.
                    </p>

                    {/* پاراگراف‌ها */ }
                    <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-700">
                        <p>
                            Clinicans پاسخی است به کلینیک‌هایی که می‌خواهند از مدیریت روزمره‌ی
                            شلوغ و ابزارهای پراکنده عبور کنند و بر کیفیت خدمات و رشد پایدار
                            تمرکز کنند. این پلتفرم فول‌استک، لایه‌های مختلف مدیریت کلینیک را –
                            از نوبت‌دهی و پرونده‌ی سلامت تا مالی، ارتباط با بیمار و مارکتینگ –
                            در یک پنل یکپارچه و مدرن گردآورده است.
                        </p>
                        <p>
                            Clinicans با طراحی بومی برای کلینیک‌های حرفه‌ای، امکان پایش
                            عملکرد، تحلیل داده‌های کلینیک و برنامه‌ریزی برای توسعه‌ی خدمات را
                            فراهم می‌کند؛ بدون آن‌که تیم درمان را درگیر چندین سامانه‌ی
                            جداگانه، زمان‌بر و پرخطا کند.
                        </p>
                    </div>

                    {/* بولت‌های نتیجه‌محور */ }
                    <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-slate-700 list-disc pr-4">
                        <li>
                            یکپارچه‌سازی نوبت‌دهی، پرونده‌ی بیمار، مالی و ارتباط با مراجعان
                        </li>
                        <li>
                            ابزارهای درون‌ساخت برای مارکتینگ، پیام‌رسانی هدفمند و تحلیل رشد
                            کلینیک
                        </li>
                        <li>
                            طراحی‌شده برای کلینیک‌های در حال توسعه که به ساختار حرفه‌ای و
                            مقیاس‌پذیر نیاز دارند
                        </li>
                        <li>
                            تجربه‌ی کاربری ساده برای تیم درمان، در عین پشتیبانی از سناریوهای
                            پیچیده‌ی مدیریتی
                        </li>
                    </ul>

                    {/* CTA */ }
                    <div className="mt-4 flex justify-end">
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center gap-1 rounded-full bg-bms-primary px-5 py-2 text-[11px] md:text-xs font-medium text-white hover:bg-bms-dark transition-colors"
                        >
                            <span>آشنایی با پلتفرم Clinicans</span>
                            <span className="text-[13px]">↗</span>
                        </Link>
                    </div>
                </div>

                {/* موکاپ / تصویر – چپ */ }
                <div className="md:w-[42%] space-y-3">
                    <p className="text-[10px] md:text-[11px] text-slate-600 text-right">
                        نمایی از داشبورد مدیریت کلینیک در پلتفرم Clinicans
                    </p>

                    <div className="relative overflow-hidden rounded-2xl border border-bms-primary/15 bg-gradient-to-br from-bms-primary-soft via-white to-emerald-50 aspect-video shadow-sm">
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_10%_0,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_90%_100,rgba(20,92,152,0.3),transparent_55%)]" />
                        <div className="relative flex h-full flex-col justify-between p-4 text-right text-slate-800">
                            <div className="flex items-center justify-between text-[11px] md:text-xs">
                                <span className="font-semibold text-bms-primary">
                                    Clinicans Dashboard
                                </span>
                                <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px]">
                                    Demo View
                                </span>
                            </div>
                            <div className="space-y-1.5 text-[10px] md:text-[11px] leading-relaxed">
                                <p>• نوبت‌های امروز، وضعیت اتاق‌ها و مراجعان در یک نگاه</p>
                                <p>• نمای کلی درآمد، کانال‌های ورودی و کمپین‌های فعال</p>
                                <p>• لیست سریع مراجعان VIP و پیگیری‌های در حال انجام</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] md:text-[11px] leading-relaxed text-slate-600 text-right">
                        موکاپ نمایشی از داشبورد Clinicans؛ در نسخه نهایی می‌توان اسکرین‌شات
                        واقعی محیط کاربری را در این بخش جایگزین کرد.
                    </p>
                </div>
            </div>
        </article>
    );
}

/* 🟦 باند ۳ – همکاری و سرمایه‌گذاری بر بستر فناوری بارمان */

function CooperationBand ()
{
    return (
        <article className="rounded-3xl border border-dashed border-bms-primary/25 bg-gradient-to-br from-white via-bms-primary-soft/60 to-emerald-50/60 p-5 md:p-7 shadow-sm">
            <div className="space-y-4 text-right">
                {/* سوپرتایتل */ }
                <p className="text-[11px] md:text-xs font-medium text-bms-primary">
                    همکاری‌های استراتژیک و توسعه‌ی محصولات جدید
                </p>

                {/* تیتر اصلی */ }
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-bms-dark leading-relaxed">
                    سرمایه‌گذاری بر یک هسته‌ی بومی برای هوشمندسازی نسل بعد کسب‌وکارها
                </h3>

                {/* زیرتیتر کوتاه */ }
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto">
                    از صنعت و انرژی تا خدمات و زندگی روزمره؛ معماری ماژولار بارمان آماده‌ی
                    خلق نسل بعدی محصولات هوشمند است.
                </p>

                {/* پاراگراف‌ها */ }
                <div className="space-y-3 text-xs md:text-sm leading-relaxed text-slate-700 max-w-3xl ml-auto">
                    <p>
                        هسته‌ی فناوری بارمان – ترکیبی از سخت‌افزار، نرم‌افزار و طراحی
                        فرآیند – برای یک سناریوی واحد ساخته نشده است. معماری ماژولار این
                        پلتفرم، امکان توسعه‌ی راهکارهای جدید را برای طیفی از کسب‌وکارهای
                        خدماتی و صنعتی فراهم می‌کند؛ جایی که مدل‌های نوین درآمد، تجربه‌ی
                        کاربر و الزامات ایمنی و نظارتی در کنار هم قرار می‌گیرند.
                    </p>
                    <p>
                        ما در بارمان به‌دنبال شراکت‌های صرفاً مالی نیستیم؛ به‌دنبال
                        هم‌افزایی با بازیگران آینده‌نگر در صنعت، سلامت، خدمات و فناوری هستیم
                        تا بر بستر این زیرساخت بومی، نسل تازه‌ای از محصولات هوشمند برای
                        بازار ایران و فراتر از آن طراحی و پیاده‌سازی کنیم.
                    </p>
                </div>

                {/* بولت‌های نتیجه‌محور */ }
                <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-slate-700 list-disc pr-4 max-w-3xl ml-auto">
                    <li>
                        دسترسی به زیرساخت آزموده‌شده‌ی هوشمندسازی، به‌جای شروع از نقطه‌ی
                        صفر
                    </li>
                    <li>
                        امکان طراحی محصول مشترک متناسب با بازار هدف و مدل کسب‌وکار شریک
                    </li>
                    <li>
                        کاهش ریسک فنی و زمانی با استفاده از ماژول‌ها و تجربیات عملی در
                        پروژه‌های واقعی
                    </li>
                    <li>
                        باز کردن مسیر ورود به حوزه‌های جدید: از کسب‌وکارهای خدماتی تا
                        فضاهای زندگی و کار هوشمند
                    </li>
                </ul>

                {/* CTA */ }
                <div className="mt-4 flex justify-end">
                    <Link
                        href="/intelligentautomation"
                        className="inline-flex items-center gap-1 rounded-full bg-bms-primary px-5 py-2 text-[11px] md:text-xs font-medium text-white hover:bg-bms-dark transition-colors"
                    >
                        <span>فرصت‌های همکاری و سرمایه‌گذاری با بارمان</span>
                        <span className="text-[13px]">↗</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
