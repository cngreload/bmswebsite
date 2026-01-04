// components/home/HeroSection.tsx
import Link from 'next/link';
import React from 'react';

// --- Internal Helper Component for USP Cards ---
// 🧠 UX: Small, digestible value props that support the main H1
function HeroUSPCard ( { children }: { children: React.ReactNode; } )
{
    return (
        <div className="rounded-2xl border border-blue-100 bg-white/60 p-4 text-xs md:text-sm font-medium text-slate-600 shadow-sm hover:bg-blue-50 hover:border-blue-200 transition-colors leading-relaxed backdrop-blur-sm">
            <div className="flex gap-2 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bms-accent" />
                <p>{ children }</p>
            </div>
        </div>
    );
}

export default function HeroSection ()
{
    return (
        <section className="relative pt-12 md:pt-20 lg:pt-32 pb-16 overflow-hidden" dir="rtl">

            {/* 1. Background Effects (Optimized for performance - CSS Only) */ }
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-bms-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* --- RIGHT CONTENT: Text, Buttons, USPs --- */ }
                    <div className="lg:col-span-7 space-y-8 text-right order-1">

                        {/* 1. Headline Badge */ }
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-bms-primary border border-blue-100 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-bms-primary"></span>
                            </span>
                            راهکارهای بومی دیجیتال برای کسب و کار و زیرساخت‌های ملی
                        </div>

                        {/* 2. Headlines */ }
                        <div className="space-y-3">
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.2] tracking-tight">
                                هوشمندسازی <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                                    دارایی‌های حیاتی
                                </span>
                            </h1>
                            <p className="text-sm md:text-base font-medium text-slate-500 tracking-wide opacity-90">
                                (دریچه شما به انقلاب صنعتی چهارم)
                            </p>
                        </div>

                        {/* 3. Description */ }
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light text-justify">
                            ما با ادغام فناوری‌های نوین در عرصه سخت‌افزار و نرم‌افزار و رشد راهکارهای همه‌جانبه،
                            فاصله میان <span className="font-bold text-slate-900 border-b-2 border-blue-100">عملیات میدانی</span> و
                            <span className="font-bold text-slate-900 border-b-2 border-emerald-100"> تصمیم‌سازی مدیریتی </span>
                            را از بین می‌بریم.
                        </p>

                        {/* 4. CTA Buttons */ }
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                href="/cng-automation"
                                className="inline-flex items-center justify-center rounded-xl bg-bms-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-bms-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all"
                            >
                                راهکارهای انرژی (CNG)
                            </Link>
                            <Link
                                href="/clinicans"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
                            >
                                پلتفرم سلامت (Clinicans)
                            </Link>
                        </div>

                        {/* 5. USP Grid (The requested addition) */ }
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="grid gap-4 sm:grid-cols-2">
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
                        </div>

                    </div>

                    {/* --- LEFT CONTENT: Visual Card (WIT) --- */ }
                    <div className="lg:col-span-5 relative order-2 lg:order-1 mt-12 lg:mt-0">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-8 md:p-10 text-white transform hover:scale-[1.01] transition-transform duration-500 group">

                            {/* Inner Glow */ }
                            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#10B981,transparent_55%)]" />

                            <div className="relative z-20 space-y-8 text-right">
                                {/* Header Row */ }
                                <div className="flex items-center justify-between">
                                    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-white/20 transition-colors">
                                        <span className="text-sm font-black text-emerald-400 tracking-wider">WIT</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">System Status</span>
                                        <span className="text-xs text-slate-300 tracking-wide font-mono mt-1" dir="ltr">
                                            Online • Real-Time
                                        </span>
                                    </div>
                                </div>

                                {/* Card Title */ }
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                                        تکنولوژی هوشمندسازی جهانی
                                    </h3>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                                </div>

                                {/* Card Vision */ }
                                <p className="text-slate-300 text-sm md:text-[15px] leading-8 text-justify font-light">
                                    ما در <strong className="text-white font-bold">بارمان محور اسپادانا</strong>،
                                    طلایه‌دار تحقق رؤیای انسان مدرن هستیم — رؤیایی که در آن،
                                    <span className="text-white border-b border-white/20 mx-1">کنترل کامل و بی‌درنگ</span>
                                    بر املاک و کسب‌وکار، از هر جا و در هر لحظه، ممکن است.
                                </p>

                                {/* Technical Tags (LTR) */ }
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10" dir="ltr">
                                    { [ "Real-Time Control", "Secure Infrastructure", "Digital Platforms", "Industrial Systems" ].map( ( tag ) => (
                                        <span key={ tag } className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] md:text-xs text-emerald-300 font-mono backdrop-blur-sm">
                                            { tag }
                                        </span>
                                    ) ) }
                                </div>
                            </div>
                        </div>

                        {/* Behind Card Glow */ }
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bms-primary/30 blur-[80px] -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}