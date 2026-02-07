"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

/* -------------------------------------------
 * USP Card – Premium Badge Style
 * ----------------------------------------- */
function HeroUSPCard ( { children }: { children: ReactNode; } )
{
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 text-sm font-medium text-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 shadow-sm" />
                <p className="leading-relaxed text-balance">{ children }</p>
            </div>
        </div>
    );
}

/* -------------------------------------------
 * HERO SECTION – Cinematic Edition
 * ----------------------------------------- */
export default function HeroSection ()
{
    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="relative min-h-screen overflow-hidden pt-24 pb-24 md:pt-28 lg:pt-32"
        >
            {/* ===================== BACKGROUND ===================== */ }
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="پس‌زمینه هوشمندسازی زیرساخت‌های صنعتی، انرژی و سلامت"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-bms-primary/30 via-transparent via-50% to-amber-500/20" />
                <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#9f1239_0%,transparent_50%)] opacity-40" />
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
                <div className="absolute inset-0 bg-slate-950/60 [mask-image:radial-gradient(circle_at_center,transparent_30%,black_90%)]" />
            </div>

            {/* ===================== CONTENT ===================== */ }
            <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid min-h-[calc(100vh-6rem)] items-center gap-16 lg:grid-cols-12 xl:gap-20">

                    {/* LEFT */ }
                    <div className="space-y-10 text-white lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold tracking-wider text-amber-300 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            توسعه‌دهنده راهکارهای هوشمند بومی
                        </div>

                        <h1
                            id="hero-heading"
                            className="text-[2.75rem] font-black leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
                        >
                            هوشمندسازی
                            <br />
                            <span className="bg-gradient-to-l from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">
                                دارایی‌های حیاتی
                            </span>
                        </h1>

                        <p className="max-w-2xl text-xl font-light tracking-tight text-amber-300/90 md:text-2xl">
                            دریچه شما به انقلاب صنعتی چهارم در انرژی، صنعت و سلامت
                        </p>

                        <p className="max-w-xl text-lg font-light leading-relaxed text-slate-200/90 md:text-xl">
                            ما سامانه‌هایی یکپارچه می‌سازیم تا داده‌های عملیاتی، به اطلاعات
                            قابل اتکا و در نهایت به تصمیم مدیریتی تبدیل شوند.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/cng-automation"
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-bms-primary to-blue-700 px-10 text-lg font-bold text-white shadow-xl shadow-blue-950/50 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.985]"
                            >
                                راهکارهای انرژی (CNG)
                            </Link>

                            <Link
                                href="/clinicans"
                                className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10 px-10 text-lg font-bold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/20"
                            >
                                پلتفرم سلامت (Clinicans)
                            </Link>
                        </div>

                        <div className="grid gap-4 pt-12 sm:grid-cols-2">
                            <HeroUSPCard>
                                تنها تولیدکننده‌ی سامانه بومی کنترل و مانیتورینگ جایگاه‌های CNG با پایلوت موفق در سطح ملی
                            </HeroUSPCard>
                            <HeroUSPCard>
                                ترکیب سخت‌افزار، نرم‌افزار و تجربه‌ی میدانی در حوزه‌های انرژی و سلامت
                            </HeroUSPCard>
                            <HeroUSPCard>
                                طراحی‌شده برای تصمیم‌های حساس؛ مبتنی بر داده‌های دقیق، به‌روز و قابل اتکا
                            </HeroUSPCard>
                            <HeroUSPCard>
                                از صنعت ۴.۰ تا سلامت دیجیتال؛ یک هسته‌ی فناوری، دو جهانِ کاربرد
                            </HeroUSPCard>
                        </div>
                    </div>

                    {/* RIGHT */ }
                    <div className="flex justify-center lg:col-span-5 lg:justify-end">
                        <div className="relative w-full max-w-lg overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E40AF] p-10 shadow-2xl shadow-blue-950/80">
                            <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,#f59e0b_0%,transparent_60%)] opacity-30" />

                            <div className="relative space-y-10 text-right">
                                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center">
                                    <span className="text-5xl font-black tracking-tighter text-emerald-400">
                                        WIT
                                    </span>
                                    <p className="mt-1 text-sm font-light text-white/70">
                                        Worldwide Intelligent Technology
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold tracking-tight text-amber-400">
                                        چشم‌انداز ما
                                    </h3>
                                    <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                                </div>

                                <MaskContainer
                                    className="overflow-hidden rounded-2xl"
                                    revealText={
                                        <p className="py-16 px-10 text-center text-4xl font-black leading-none text-white">
                                            کنترل کامل
                                            <br />
                                            <span className="text-amber-400">در لحظه</span>
                                        </p>
                                    }
                                >
                                    <p className="px-4 py-14 text-center text-[17px] font-medium leading-relaxed text-slate-300">
                                        ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان
                                        مدرن هستیم — رؤیایی که در آن، کنترل کامل و بی‌درنگ بر
                                        املاک و کسب‌وکار، از هر جا و در هر لحظه، ممکن است.
                                    </p>
                                </MaskContainer>

                                <div
                                    className="flex flex-wrap justify-end gap-2 border-t border-white/10 pt-8"
                                    dir="ltr"
                                >
                                    { [ "Real-Time", "Secure", "Industrial", "Decision AI" ].map(
                                        ( tag ) => (
                                            <span
                                                key={ tag }
                                                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-emerald-300/90"
                                            >
                                                { tag }
                                            </span>
                                        )
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
