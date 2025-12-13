import Link from "next/link";

export default function FinalCtaSection ()
{
    return (
        <section id="final-cta" className="pt-10 md:pt-12 pb-10 md:pb-14">
            <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-bms-primary to-bms-dark p-6 md:p-8 shadow-soft-lg text-right text-white space-y-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    دعوت به هم‌افزایی برای آینده‌ای ایمن‌تر و هوشمندتر در صنعت سوخت
                </h2>
                <div className="space-y-3 text-[11px] md:text-sm leading-relaxed text-white/90">
                    <p>
                        شرکت بارمان‌محور اسپادانا با افتخار آمادگی خود را برای همکاری نزدیک
                        با نهادهای حاکمیتی، شرکت‌های فعال در صنعت گاز طبیعی، صنف
                        جایگاه‌داران و شرکت‌های پرداخت الکترونیک در مسیر استقرار، آموزش و
                        پشتیبانی سامانه ICTS در ابعاد ملی اعلام می‌کند.
                    </p>
                    <p>
                        ما باور داریم که اجرای کامل طرح هوشمندسازی جایگاه‌های CNG، نه تنها
                        یک پروژه فنی، بلکه گامی راهبردی در جهت ارتقای امنیت انرژی، افزایش
                        ایمنی شهروندان، بهره‌وری اقتصادی و اعتماد عمومی به زیرساخت‌های کشور
                        است.
                    </p>
                    <p>
                        امید داریم با همراهی و حمایت بازیگران کلیدی این حوزه، زمینه‌ساز
                        شکل‌گیری آینده‌ای کارآمد، امن و هوشمند در زنجیره توزیع انرژی گاز
                        طبیعی باشیم.
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[11px] md:text-xs font-medium text-bms-primary hover:bg-bms-primary-soft transition-colors"
                    >
                        هماهنگی برای جلسه مشترک و بررسی استقرار در سطح سازمان شما
                    </Link>
                    <Link
                        href="/downloads/icts-intro.pdf"
                        className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-5 py-2.5 text-[11px] md:text-xs font-medium text-white hover:bg-white/10 transition-colors"
                    >
                        دانلود بروشور و مدارک تکمیلی
                    </Link>
                </div>
            </div>
        </section>
    );
}
