import Link from "next/link";

export default function HeroSection ()
{
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
                {/* متن – سمت راست در RTL */ }
                <div className="lg:col-span-7 space-y-6 text-right">
                    {/* Super Title */ }
                    <p className="inline-flex items-center justify-center rounded-full bg-bms-primary-soft px-4 py-1.5 text-[11px] md:text-xs font-medium text-bms-primary shadow-sm">
                        سامانه‌های بومی هوشمندسازی کسب‌وکار و صنعت
                    </p>

                    {/* Headline با هایلایت روی «دارایی‌های حیاتی» */ }
                    <h1 className="text-3xl md:text-4xl lg:text-[2.7rem] font-bold leading-relaxed text-bms-dark">
                        هوشمندسازی{ " " }
                        <span className="relative inline-block">
                            دارایی‌های حیاتی
                            <span className="pointer-events-none absolute -bottom-1 right-0 left-0 h-1 rounded-full bg-gradient-to-l from-bms-accent/80 via-bms-accent/30 to-transparent" />
                        </span>
                        <span>؛</span>
                        <span className="block mt-1 text-bms-primary">
                            از انرژی تا سلامت
                        </span>
                    </h1>

                    {/* Subheadline + توضیحات در بلوک جمع‌وجور */ }
                    <div className="space-y-3 max-w-3xl lg:max-w-4xl ml-auto">
                        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                            بارمان زیرساختی بومی برای پایش، کنترل و مدیریت دیجیتال ساخته
                            است؛ زیرساختی که امروز در جایگاه‌های سوخت CNG و کلینیک‌های سلامت
                            و زیبایی در حال کار است و فردا آماده‌ی همراهی کسب‌وکارهای دیگر در
                            مسیر هوشمندسازی است.
                        </p>

                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            در بارمان‌محور اسپادانا، هوشمندسازی را از میدان واقعی آغاز
                            کرده‌ایم؛ از مدیریت و سرپرستی جایگاه‌های سوخت تا طراحی و اجرای
                            سامانه‌ای که هم سخت‌افزار دارد و هم نرم‌افزار و قلب تپنده‌ی کنترل
                            و مانیتورینگ را در اختیار می‌گیرد.
                        </p>

                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            همین هسته‌ی فناوری، امروز در دو مسیر تخصصی ادامه پیدا کرده است:
                            سامانه هوشمند کنترل و مانیتورینگ جایگاه‌های CNG و پلتفرم
                            Clinicans برای مدیریت یکپارچه کلینیک‌های زیبایی و سلامت. نقطه‌ی
                            مشترک همه‌ی این‌ها یک چیز است: تبدیل دارایی‌های حیاتی به داده‌های
                            قابل‌اعتماد برای تصمیم‌گیری.
                        </p>
                    </div>

                    {/* USP – کارت‌های مدرن */ }
                    <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <HeroUSPCard>
                            تنها تولیدکننده‌ی سامانه بومی کنترل و مانیتورینگ جایگاه‌های CNG
                            با پایلوت موفق در سطح ملی
                        </HeroUSPCard>
                        <HeroUSPCard>
                            ترکیب سخت‌افزار، نرم‌افزار و تجربه‌ی میدانی در حوزه‌های انرژی و
                            سلامت
                        </HeroUSPCard>
                        <HeroUSPCard>
                            طراحی‌شده برای تصمیم‌های حساس؛ مبتنی بر داده‌های دقیق، به‌روز و
                            قابل اتکا
                        </HeroUSPCard>
                        <HeroUSPCard>
                            از صنعت ۴.۰ تا سلامت دیجیتال؛ یک هسته‌ی فناوری، دو جهانِ کاربرد
                        </HeroUSPCard>
                    </div>

                    {/* CTAs */ }
                    <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-end gap-3">
                        <Link
                            href="/cng-automation"
                            className="inline-flex items-center justify-center rounded-full bg-bms-primary px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-soft-lg hover:bg-bms-dark transition-colors"
                        >
                            آشنایی با سامانه هوشمند جایگاه‌های سوخت CNG
                        </Link>
                        <Link
                            href="/clinicans"
                            className="inline-flex items-center justify-center rounded-full border border-bms-primary bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-bms-primary hover:bg-bms-primary-soft transition-colors"
                        >
                            آشنایی با پلتفرم Clinicans برای کلینیک‌ها
                        </Link>
                    </div>
                </div>

                {/* کارت موکاپ / فضای بصری – سمت چپ در RTL */ }
                <div className="lg:col-span-5">
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-bms-primary to-bms-accent p-6 md:p-8 shadow-soft-lg">
                        <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_0,white,transparent_60%),radial-gradient(circle_at_80%_100%,white,transparent_55%)]" />

                        <div className="relative space-y-4 text-right text-white">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] md:text-xs backdrop-blur-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                <span>هسته‌ی مشترک فناوری ICTS و Clinicans</span>
                            </div>

                            <h2 className="text-lg md:text-xl font-semibold">
                                از داده‌ی میدان تا داشبورد مدیریت
                            </h2>

                            <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                                از داده‌های لحظه‌ای میدان تا داشبوردهای مدیریتی؛ یک زیست‌بوم
                                یکپارچه برای پایش، کنترل و تصمیم‌سازی در زیرساخت‌های حیاتی،
                                جایگاه‌های CNG و کلینیک‌های سلامت و زیبایی.
                            </p>

                            <div className="mt-2 flex flex-wrap justify-start gap-2 text-[11px] md:text-xs">
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                                    پایش و کنترل صنعتی
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                                    سلامت دیجیتال و کلینیک‌های هوشمند
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                                    تصمیم‌سازی مبتنی بر داده
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * کارت کوچک برای USPهای هیرو
 */
function HeroUSPCard ( { children }: { children: React.ReactNode; } )
{
    return (
        <div className="flex gap-2 rounded-2xl border border-slate-200 bg-white/80 p-3.5 shadow-sm">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-bms-accent" />
            <p className="text-xs md:text-sm leading-relaxed text-slate-700">
                { children }
            </p>
        </div>
    );
}
