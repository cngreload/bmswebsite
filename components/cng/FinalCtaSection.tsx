import Link from "next/link";
import { LuCalendarCheck, LuDownload, LuArrowLeft } from "react-icons/lu";

export default function FinalCtaSection ()
{
    return (
        <section
            id="final-cta"
            className="py-12 md:py-20"
            aria-labelledby="cta-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-bms-primary to-[#0F172A] p-8 md:p-12 shadow-2xl text-right text-white">

                    {/* Ambient Light Blobs */ }
                    <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

                    {/* Subtle Grid Overlay */ }
                    <div className="pointer-events-none absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        {/* Content */ }
                        <div className="space-y-6 lg:max-w-2xl">
                            <h2
                                id="cta-heading"
                                className="text-2xl font-bold md:text-3xl lg:text-4xl leading-tight text-balance"
                            >
                                دعوت به مشارکت راهبردی برای آینده‌ای <br />
                                <span className="text-emerald-400">
                                    ایمن‌تر، شفاف‌تر و هوشمندتر
                                </span>{ " " }
                                در صنعت سوخت
                            </h2>

                            <div className="space-y-4 text-sm leading-8 text-slate-200/90 md:text-base">
                                <p>
                                    شرکت{ " " }
                                    <strong className="text-white font-medium">
                                        بارمان‌محور اسپادانا
                                    </strong>{ " " }
                                    آمادگی خود را برای همکاری رسمی با نهادهای حاکمیتی، شرکت‌های
                                    گاز استانی، اپراتورهای جایگاه و بازیگران مالی کشور
                                    در مسیر استقرار ملی سامانه{ " " }
                                    <strong className="text-white font-medium">ICTS</strong>{ " " }
                                    اعلام می‌کند.
                                </p>

                                <p>
                                    این طرح صرفاً یک پروژه فناورانه نیست؛
                                    بلکه یک اقدام زیرساختی و بلندمدت برای
                                    <strong className="mx-1 text-white font-medium">
                                        ارتقای ایمنی شهروندان
                                    </strong>
                                    ،
                                    <strong className="mx-1 text-white font-medium">
                                        افزایش شفافیت و حکمرانی داده
                                    </strong>
                                    و
                                    <strong className="mx-1 text-white font-medium">
                                        بهینه‌سازی بهره‌وری اقتصادی
                                    </strong>
                                    در یکی از حیاتی‌ترین شبکه‌های انرژی کشور است.
                                </p>
                            </div>
                        </div>

                        {/* Actions */ }
                        <div className="flex w-full flex-col gap-4 sm:w-auto lg:min-w-[320px]">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-bms-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bms-primary"
                            >
                                <LuCalendarCheck className="h-5 w-5" />
                                <span>هماهنگی جلسه فنی و استقرار</span>
                                <LuArrowLeft className="mr-auto h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                            </Link>

                            <Link
                                href="/downloads/icts-intro.pdf"
                                target="_blank"
                                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bms-primary"
                            >
                                <LuDownload className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white" />
                                <span>دانلود مستندات فنی و حاکمیتی (PDF)</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
