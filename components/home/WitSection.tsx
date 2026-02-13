"use client";

import Link from "next/link";
import { LuHandshake, LuGlobe, LuArrowLeft, LuActivity } from "react-icons/lu";

export default function WitSection ()
{
    return (
        <div className="relative w-full h-full min-h-[400px] flex flex-col justify-center bg-slate-900 overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[3.5rem]">
            {/* Background Atmosphere */ }
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,92,152,0.3),transparent_70%)]" />
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                <LuHandshake className="w-64 h-64 text-white" />
            </div>

            <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-right space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                        <LuActivity className="w-4 h-4 animate-pulse" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em]">Global_Collaboration_Protocol</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        همکاری برای <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#F4C430] via-yellow-100 to-white">
                            آینده‌ی هوشمند زیرساخت‌ها
                        </span>
                    </h3>

                    <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
                        بارمان بستری برای توسعه مشترک محصولات، سرمایه‌گذاری فناورانه و ورود استراتژیک به حوزه‌های نوظهور صنعتی و دیجیتال فراهم می‌کند.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Link
                        href="/intelligentautomation"
                        className="flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition-all hover:-translate-y-1 active:scale-95"
                    >
                        <span>مدل‌های همکاری</span>
                        <LuArrowLeft className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/contact-us"
                        className="flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm backdrop-blur-md hover:bg-white/5 transition-all"
                    >
                        تماس با توسعه بازار
                    </Link>
                </div>
            </div>

            {/* Footer Branding */ }
            <div className="absolute bottom-6 right-1/2 translate-x-1/2 flex items-center gap-2 opacity-20">
                <LuGlobe className="w-3 h-3 text-blue-300" />
                <span className="text-[8px] font-mono font-bold text-blue-300 uppercase tracking-[0.5em]">Worldwide Intelligent Technology</span>
            </div>
        </div>
    );
}