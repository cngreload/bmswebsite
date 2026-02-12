"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuLayers,
    LuArrowLeft,
    LuActivity,
    LuDatabase,
    LuStethoscope,
    LuChartLine
} from "react-icons/lu";
import { cn } from "@/lib/utils";

const domains = [
    { label: "اتوماسیون صنعتی", icon: LuActivity, desc: "کنترل فرآیند هوشمند", color: "text-[#D72638]" },
    { label: "اینترنت اشیاء", icon: LuDatabase, desc: "اتصال اجزای سخت‌افزاری", color: "text-bms-primary" },
    { label: "هوش تجاری", icon: LuChartLine, desc: "تحلیل برای تصمیم‌سازی", color: "text-[#F4C430]" },
    { label: "سلامت دیجیتال", icon: LuStethoscope, desc: "مدیریت مدرن درمان", color: "text-emerald-500" },
];

export default function WorldsGrid ()
{
    return (
        <section
            aria-labelledby="domains-heading"
            className="relative w-full h-full flex flex-col justify-center bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Engineering Dot Pattern */ }
            <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 p-6 md:p-10 lg:p-14 text-right">
                {/* Compact Eyebrow */ }
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-bms-primary mb-6">
                    <LuLayers className="w-3 h-3" />
                    <span>Sectors</span>
                </div>

                {/* Scaled Header - Reduced size for grid safety */ }
                <h2
                    id="domains-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tightest"
                >
                    از صنعت تا سلامت؛ <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-indigo-600">
                        جایی که داده جان می‌گیرد
                    </span>
                </h2>

                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-10 max-w-md font-light">
                    پلتفرم هسته‌ای بارمان در دنیاهای متفاوتی نبض می‌زند. هرجا که دقت و امنیت اولویت باشد، ما حضور داریم.
                </p>

                {/* Compact Bento Grid */ }
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    { domains.map( ( item, idx ) => (
                        <motion.div
                            key={ item.label }
                            initial={ { opacity: 0, y: 10 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { delay: idx * 0.1 } }
                            className="group relative flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all hover:bg-white hover:shadow-lg"
                        >
                            <div className={ cn( "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110", item.color ) }>
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-black text-slate-900">{ item.label }</h3>
                                <p className="text-[10px] text-slate-400 font-medium">{ item.desc }</p>
                            </div>
                        </motion.div>
                    ) ) }
                </div>

                <Link
                    href="/fieldsofactivity"
                    className="inline-flex items-center gap-3 text-bms-primary font-black text-sm group"
                >
                    <span className="border-b-2 border-bms-primary/10 pb-0.5 group-hover:border-bms-primary transition-all">
                        مشاهده تمام راهکارها
                    </span>
                    <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </Link>
            </div>
        </section>
    );
}