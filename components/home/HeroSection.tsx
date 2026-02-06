"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

/* -------------------------------------------
 * USP Card
 * ----------------------------------------- */
function HeroUSPCard ( { children }: { children: React.ReactNode; } )
{
    return (
        <div className="rounded-2xl border border-blue-100 bg-white/70 p-3 md:p-4 text-xs md:text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-blue-50">
            <div className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-bms-accent shrink-0" />
                <p className="leading-relaxed">{ children }</p>
            </div>
        </div>
    );
}

/* -------------------------------------------
 * HERO SECTION
 * ----------------------------------------- */
export default function HeroSection ()
{
    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="
        relative
        min-h-screen
        pt-24 md:pt-28 lg:pt-32
        pb-20
        overflow-hidden
      "
        >
            {/* =====================================================
          IMAGE WALLPAPER BACKGROUND
         ===================================================== */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="پس‌زمینه هوشمندسازی زیرساخت‌های صنعتی، انرژی و سلامت"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />

                <div className="absolute inset-0 bg-slate-900/35" />
                <div className="absolute inset-0 bg-gradient-to-bl from-bms-primary/20 via-transparent to-emerald-500/15" />
                <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_55%,transparent_80%)] bg-slate-900/30" />

                <div
                    className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:48px_48px]
          "
                />

                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
            </div>

            {/* =====================================================
          CONTENT
         ===================================================== */}
            <div className="relative z-10 container mx-auto max-w-6xl px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* ---------------- RIGHT / TEXT ---------------- */ }
                    <div className="lg:col-span-7 text-right space-y-6 text-white">

                        <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-bms-primary border border-blue-200">
                            توسعه‌دهنده راهکارهای هوشمند بومی در حوزه انرژی و سلامت
                        </div>

                        <h1
                            id="hero-heading"
                            className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.15]"
                        >
                            هوشمندسازی
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-emerald-500">
                                دارایی‌های حیاتی
                            </span>
                        </h1>

                        <p className="text-sm md:text-base text-yellow-400">
                            (دریچه شما به انقلاب صنعتی چهارم در صنعت، انرژی و سلامت)
                        </p>

                        <p className="text-lg md:text-xl max-w-xl text-slate-100 leading-relaxed font-light text-justify">
                            ما سامانه‌هایی یکپارچه می‌سازیم تا داده‌های عملیاتی، به اطلاعات قابل اتکا و در نهایت به تصمیم مدیریتی تبدیل شوند.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                href="/cng-automation"
                                className="rounded-xl bg-bms-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-bms-primary/30"
                            >
                                راهکارهای انرژی (CNG)
                            </Link>

                            <Link
                                href="/clinicans"
                                className="rounded-xl border border-white/40 bg-white/90 px-8 py-3.5 text-base font-bold text-slate-800"
                            >
                                پلتفرم سلامت (Clinicans)
                            </Link>
                        </div>

                        <div className="pt-8 mt-8 border-t border-white/20">
                            <div className="grid gap-3 sm:grid-cols-2">
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
                    </div>

                    {/* ---------------- LEFT / CARD ---------------- */ }
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#2246a7] p-8 md:p-10 text-white shadow-2xl">

                            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#933,transparent_90%)]" />

                            <div className="relative space-y-8 text-right">
                                <div className="rounded-2xl bg-white/10 text-center border border-white/20 p-4">
                                    <span className="text-4xl font-sans text-emerald-400">WIT</span>
                                    <br />
                                    <q className="text-white font-sans">
                                        Worldwide Intelligent Technology
                                    </q>
                                </div>

                                <div>
                                    <h3 className="text-xl text-center  md:text-2xl text-yellow-300 font-bold mb-2">
                                        تکنولوژی هوشمندسازی جهانی
                                    </h3>
                                    <div className="h-1 max-w-full mx-auto items-center justify-center bg-yellow-400 rounded-full" />
                                </div>

                                <MaskContainer
                                    className="rounded-lg"
                                    revealText={
                                        <p className="text-white font-extrabold text-[20px] lg:text-4xl leading-8 text-center p-20 ">

                                            چشم انداز
                                            <br />
                                            شرکت
                                        </p>

                                    }

                                >
                                    <p className="text-slate-300 justify-center  text-xl md:text-[15px] leading-8 text-center my-14 mx-2 font-extrabold">
                                        ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان مدرن هستیم — رؤیایی که در آن،کنترل کامل و بی‌درنگ بر املاک و کسب‌وکار، از هر جا و در هر لحظه، ممکن است.                                        </p>

                                </MaskContainer>

                                <div
                                    className="flex flex-wrap gap-2 pt-2 border-t border-white/10"
                                    dir="ltr"
                                >
                                    { [
                                        "Real-Time Data",
                                        "Secure Systems",
                                        "Industrial Software",
                                        "Decision Intelligence",
                                    ].map( ( tag ) => (
                                        <span
                                            key={ tag }
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] md:text-xs text-emerald-300 font-mono"
                                        >
                                            { tag }
                                        </span>
                                    ) ) }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
