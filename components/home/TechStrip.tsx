// components/home/TechStrip.tsx
import Link from "next/link";
import Image from "next/image";
import { LuCpu, LuCode, LuServer } from "react-icons/lu";

export default function TechStrip ()
{
    return (
        <section
            className="border-y border-slate-200 bg-slate-50/50 py-16 lg:py-24 overflow-hidden"
            aria-labelledby="tech-stack-heading"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* 
            📝 TEXT CONTENT (Right in RTL)
          */}
                    <div className="lg:w-5/12 space-y-8 text-right">
                        <div className="inline-flex items-center gap-2 text-bms-primary font-bold text-sm tracking-wide uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                            <LuCpu className="w-5 h-5" />
                            <span>زیرساخت فنی و معماری</span>
                        </div>

                        <h2 id="tech-stack-heading" className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            پلتفرم هسته‌ای و <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bms-primary to-indigo-600">
                                تکنولوژی‌های بومی
                            </span>
                        </h2>

                        <p className="text-base leading-8 text-slate-600 text-justify">
                            معماری فنی بارمان بر پایه‌ی دریافت داده از میدان، پردازش در لبه (Edge) و انتقال امن به پلتفرم‌های ابری طراحی شده است.
                            ما با بومی‌سازی کامل لایه‌های سخت‌افزار و نرم‌افزار، ریسک‌های وابستگی خارجی را حذف کرده‌ایم.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="/technologies"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
                            >
                                <LuCode className="w-4 h-4" />
                                <span>
                                    بررسی کامل استک فنی ←
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* 
            🖼️ VISUAL REPRESENTATION (Left in RTL)
            Replaces the logo grid with a single authoritative image.
          */}
                    <div className="lg:w-7/12 w-full relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white group">

                            {/* Image Container */ }
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src="/techstack.png"
                                    alt="شماتیک معماری پلتفرم هوشمند بارمان"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />

                                {/* Overlay Gradient */ }
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-80" />
                            </div>

                            {/* Floating Badge (Glassmorphism) */ }
                            <div className="absolute bottom-6 right-6 left-6 flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                                        <LuServer className="w-5 h-5" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold">معماری میکروسرویس</div>
                                        <div className="text-[10px] text-slate-200 font-mono opacity-80">High Availability • Secure</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-xs font-mono bg-black/20 px-3 py-1 rounded-lg">
                                    v4.2.0 (Stable)
                                </div>
                            </div>

                        </div>

                        {/* Decorative Background Blur */ }
                        <div className="absolute -inset-4 bg-gradient-to-tr from-bms-primary/20 to-indigo-500/20 blur-3xl -z-10 rounded-[3rem] opacity-60" />
                    </div>

                </div>
            </div>
        </section>
    );
}