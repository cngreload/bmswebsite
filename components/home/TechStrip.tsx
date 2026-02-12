"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuCpu, LuCode, LuTerminal } from "react-icons/lu";

export default function TechStrip ()
{
    return (
        <section
            aria-labelledby="tech-stack-heading"
            className="relative w-full h-full flex flex-col justify-center bg-[#020617] overflow-hidden group"
            dir="rtl"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/techstack.png"
                    alt="Technical Infrastructure"
                    fill
                    priority
                    className="object-cover opacity-20 filter saturate-0 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#020617]/90 to-transparent" />
                <motion.div
                    animate={ { top: [ "0%", "100%" ] } }
                    transition={ { duration: 8, repeat: Infinity, ease: "linear" } }
                    className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-bms-primary/20 to-transparent z-10 pointer-events-none"
                />
            </div>

            <div className="relative z-20 p-6 md:p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F4C430] shadow-inner">
                        <LuCpu className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                        <div className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-widest">Architecture</div>
                        <div className="text-[10px] font-black text-[#F4C430] uppercase">Sovereign Layer</div>
                    </div>
                </div>

                <h2
                    id="tech-stack-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tightest"
                >
                    استقلال در <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 via-blue-400 to-indigo-400">
                        زیرساخت‌های ملی
                    </span>
                </h2>

                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-10 max-w-sm">
                    بومی‌سازی کامل لایه‌های سخت‌افزار و نرم‌افزار برای امنیت مطلق تداوم عملیات.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Link
                        href="/technologies"
                        className="group/btn relative inline-flex items-center gap-3 rounded-xl bg-white text-bms-dark px-8 py-3.5 text-xs font-black shadow-xl hover:-translate-y-1 transition-all"
                    >
                        <span>بررسی فنی</span>
                        <LuCode className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                        <div className="space-y-0.5">
                            <span className="text-[8px] font-mono text-slate-500 uppercase block">Response</span>
                            <span className="text-[10px] font-bold text-emerald-400">&lt; 15MS</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center gap-3 opacity-30">
                    <LuTerminal className="w-3 h-3 text-slate-500" />
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">SYSTEM_READY_V4.2</span>
                </div>
            </div>
        </section>
    );
}