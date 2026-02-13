"use client";

import Link from "next/link";
import { LuLayers, LuArrowLeft, LuActivity, LuDatabase, LuShield, LuStethoscope } from "react-icons/lu";

const domains = [
    { label: "اتوماسیون صنعتی", icon: LuActivity },
    { label: "اینترنت اشیاء (IIoT)", icon: LuDatabase },
    { label: "هوش تجاری (BI)", icon: LuShield },
    { label: "سلامت دیجیتال", icon: LuStethoscope },
];

export default function WorldsGrid ()
{
    return (
        <div className="relative h-full w-full flex flex-col bg-white p-8 md:p-12 overflow-hidden group">
            {/* HUD Pattern Background */ }
            <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#145C98_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

            <div className="relative z-10 flex flex-col h-full">
                <header className="mb-8">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-bms-primary border border-blue-100 mb-6">
                        <LuLayers className="w-3.5 h-3.5" />
                        <span>Market Segments</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tightest mb-4">
                        تلاقی داده و <span className="text-bms-primary">واقعیت</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                        ما پلتفرم هسته‌ای خود را به دنیاهای مختلف برده‌ایم؛ از پایش انرژی تا هوشمندسازی سلامت.
                    </p>
                </header>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    { domains.map( ( item ) => (
                        <div key={ item.label } className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                            <item.icon className="w-4 h-4 text-bms-primary" />
                            <span className="text-xs font-bold text-slate-700">{ item.label }</span>
                        </div>
                    ) ) }
                </div>

                <div className="mt-auto">
                    <Link
                        href="/fieldsofactivity"
                        className="inline-flex items-center gap-2 text-bms-primary font-black text-xs uppercase tracking-widest group/link"
                    >
                        <span>راهکارهای استراتژیک</span>
                        <LuArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}