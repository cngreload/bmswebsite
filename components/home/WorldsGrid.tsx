// components/home/WorldsGrid.tsx
import Link from "next/link";
import Image from "next/image";
import { LuLayers } from "react-icons/lu";

export default function WorldsGrid ()
{
    return (
        <section className="py-10" aria-labelledby="domains-heading">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content - First on mobile/tablet, right on desktop */ }
                    <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-right">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-bms-primary border border-blue-100">
                            <LuLayers className="w-4 h-4" />
                            حوزه‌های تخصصی بارمان
                        </div>

                        <h2
                            id="domains-heading"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                        >
                            حوزه‌هایی که فناوری <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                                خلق ارزش می‌کند
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            بارمان‌محور اسپادانا با تکیه بر پلتفرم هسته‌ای بومی خود، در صنایعی
                            ورود می‌کند که نیازمند دقت، ایمنی و تصمیم‌سازی بی‌درنگ هستند. از
                            هوشمندسازی زیرساخت‌های انرژی و کنترل صنعتی گرفته تا سلامت دیجیتال
                            و راهکارهای مبتنی بر هوش مصنوعی.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/fieldsofactivity"
                                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all"
                            >
                                مشاهده جزئیات کامل
                            </Link>
                        </div>

                        {/* Small Features List */ }
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-6">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-sm text-slate-600">اتوماسیون صنعتی</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-sm text-slate-600">اینترنت اشیاء (IoT)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-500" />
                                <span className="text-sm text-slate-600">هوش تجاری (BI)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-500" />
                                <span className="text-sm text-slate-600">سلامت دیجیتال</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Section - Second on mobile/tablet, left on desktop */ }
                    <div className="lg:col-span-6 order-2 lg:order-1 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square lg:aspect-[5/4] group">
                            <Image
                                src="/FOA.png"
                                alt="حوزه‌های تخصصی بارمان"
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply transition-opacity group-hover:bg-indigo-900/10" />
                        </div>

                        {/* Abstract Shape */ }
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bms-accent/20 rounded-full blur-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}