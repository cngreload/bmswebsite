import Link from "next/link";

export default function CngHeroSection ()
{
    return (
        <section id="hero" className="py-6 md:py-8 lg:py-10">
            <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12">
                {/* متن – راست */ }
                <div className="md:col-span-7 space-y-4 text-right">
                    {/* سوپرتایتل */ }
                    <p className="inline-flex items-center justify-center rounded-full bg-bms-primary-soft px-4 py-1.5 text-[11px] md:text-xs font-medium text-bms-primary shadow-sm">
                        سامانه بومی هوشمندسازی جایگاه‌های CNG (ICTS)
                    </p>

                    {/* تیتر اصلی */ }
                    <h1 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold leading-relaxed text-bms-dark">
                        استاندارد جدید پایش و کنترل جایگاه‌های CNG
                    </h1>

                    {/* زیرتیتر کوتاه – نسخه مینیمال و شرکتی */ }
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        راهکار مورد تأیید مراجع تخصصی برای نظارت لحظه‌ای، ارتقای ایمنی
                        خودروهای گازسوز و مدیریت شفاف داده در شبکه CNG کشور.
                    </p>

                    {/* پاراگراف خیلی کوتاه برای تکمیل پیام */ }
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl ml-auto">
                        طراحی‌شده و پیاده‌سازی‌شده توسط شرکت دانش‌بنیان بارمان‌محور
                        اسپادانا، ICTS تلفیقی از سخت‌افزار صنعتی و نرم‌افزار مدیریتی است که
                        جایگاه‌ها را از روش‌های سنتی به نظارت لحظه‌ای و تصمیم‌گیری مبتنی بر
                        داده منتقل می‌کند.
                    </p>

                    {/* CTAs */ }
                    <div className="mt-4 flex flex-wrap items-center justify-center md:justify-end gap-3">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full bg-bms-primary px-5 py-2.5 text-[11px] md:text-xs font-medium text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                        >
                            درخواست جلسه تخصصی و دمو
                        </Link>
                        <Link
                            href="/downloads/icts-intro.pdf"
                            className="inline-flex items-center justify-center rounded-full border border-bms-primary bg-white px-5 py-2.5 text-[11px] md:text-xs font-medium text-bms-primary hover:bg-bms-primary-soft transition-colors"
                        >
                            دانلود معرفی فنی ICTS (PDF)
                        </Link>
                    </div>
                </div>

                {/* ویدیو پایلوت – چپ */ }
                <div className="md:col-span-5 space-y-3">
                    <p className="text-[10px] md:text-[11px] text-slate-600 text-right">
                        نمایی کوتاه از اجرای پایلوت سامانه ICTS در جایگاه‌های منتخب CNG
                    </p>

                    <div
                        className="relative overflow-hidden rounded-2xl bg-slate-900 text-white aspect-video flex items-center justify-center shadow-soft-lg"
                        aria-label="پایلوت سامانه هوشمند کنترل و مانیتورینگ جایگاه CNG بارمان"
                    >
                        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-bms-primary via-bms-accent to-slate-900" />
                        <div className="relative flex flex-col items-center gap-2">
                            <button
                                type="button"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-bms-primary shadow-lg"
                            >
                                <span className="mr-0.5 translate-x-[1px] text-lg">▶</span>
                            </button>
                            <span className="text-[10px] md:text-xs text-white/85">
                                ویدیو پایلوت ICTS – نمونه نمایشی
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
