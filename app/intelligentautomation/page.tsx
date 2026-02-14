"use client";

import { useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import
{
    LuChevronLeft,
    LuHouse,
    LuArrowLeft,

    LuZap,
    LuCpu
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";

/* Navigation Components */
import WitMacosDock from "@/components/wit/WitMacosDock";

/* Section Components */
import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";
import WitBmsStorySection from "@/components/wit/WitBmsStorySection";
import WitDomainsSection from "@/components/wit/WitDomainsSection";
import WitImpactSection from "@/components/wit/WitImpactSection";

/**
 * 🌐 WIT PLATFORM - ARCHITECTURAL REFORMATION
 * Award-Winning UI Strategy: Industrial Technical Dossier
 * Navigation: Universal Responsive macOS Dock
 */
export default function IntelligentAutomationPage ()
{
    const containerRef = useRef<HTMLDivElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start start", "end end" ]
    } );

    const smoothProgress = useSpring( scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    } );

    const mainScale = useTransform( smoothProgress, [ 0.8, 1 ], [ 1, 0.98 ] );

    return (
        <main
            ref={ containerRef }
            className="flex flex-col w-full bg-white overflow-visible"
            dir="rtl"
        >
            <Script
                id="json-ld-wit-main"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "WIT - Worldwide Intelligent Technology",
                        "description": "پلتفرم هسته‌ای هوشمند برای مدیریت و کنترل یکپارچه دارایی‌های حیاتی صنعتی و سلامت.",
                        "brand": {
                            "@type": "Organization",
                            "name": "Barman Mehvar Spadana",
                        }
                    } ),
                } }
            />

            {/* ===================== CHAPTER 0: BREADCRUMB ===================== */ }
            <nav className="sticky top-0 z-[45] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Link href="/" className="flex items-center gap-1.5 hover:text-bms-primary transition-colors">
                            <LuHouse className="w-3 h-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-30" />
                        <span className="text-bms-primary">WIT Intelligence Platform</span>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter">System_Status: Stable_v4.2</span>
                    </div>
                </div>
            </nav>

            {/* ===================== CHAPTER 1: HERO ===================== */ }
            <Section variant="white" spacing="none" id="hero" className="pt-8 md:pt-12 pb-0">
                <div className="flex flex-col">
                    <WitHeroSection />

                    <motion.div
                        initial={ { y: 40, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.8, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="-mt-20 md:-mt-32 relative z-30 mx-auto max-w-5xl px-4 w-full"
                    >
                        <div className="bg-white/90 backdrop-blur-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2.5rem] border border-slate-100 shadow-2xl ring-1 ring-black/5">
                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-bms-primary shadow-inner border border-blue-100">
                                    <LuCpu className="w-7 h-7" />
                                </div>
                                <div className="text-right space-y-1">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Core Sovereignty</span>
                                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">هسته‌ی مرکزی پردازش داده</h3>
                                </div>
                            </div>
                            <div className="hidden lg:block h-12 w-px bg-slate-100" />
                            <div className="flex items-center gap-12">
                                <div className="text-center group">
                                    <div className="text-4xl font-black text-bms-primary tracking-tighter">۲۰۰٪</div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">رشد درآمد</div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-4xl font-black text-[#D72638] tracking-tighter">۱۵+</div>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">سال تجربه فنی</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <motion.div style={ { scale: mainScale } } className="origin-top">

                {/* ===================== CHAPTER 2: THE EVOLUTION ===================== */ }
                <Section variant="subtle" spacing="none" id="story" className="py-16 lg:py-24 border-y border-slate-100 mt-20">
                    <div className="space-y-16">
                        <header className="text-center space-y-3 px-6">
                            <div className="inline-flex items-center gap-2 text-bms-primary">
                                <LuZap className="w-4 h-4 fill-current text-[#F4C430]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Corporate Lineage</span>
                            </div>
                            <h2 className="text-slate-950 text-3xl md:text-5xl font-black tracking-tightest">داستان خلق یک <span className="text-bms-primary">انقلاب تکنولوژیک</span></h2>
                        </header>
                        <WitBmsStorySection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 3: PLATFORM ESSENCE ===================== */ }
                <Section variant="white" spacing="none" id="what-is-wit" className="py-16 lg:py-24">
                    <div className="flex flex-col gap-24">
                        <WitWhatIsSection />
                        <div className="max-w-4xl mx-auto w-full px-6">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        </div>
                        <WitStrategicAdvantageSection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 4: TECHNICAL ARCHITECTURE ===================== */ }
                <Section variant="subtle" spacing="none" id="architecture" className="py-16 lg:py-24 border-y border-slate-100">
                    <div className="space-y-20">
                        <header className="text-center space-y-3 px-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D72638]">System Schema</span>
                            <h2 className="text-slate-950 text-3xl md:text-5xl font-black tracking-tightest">معماری لایه‌ای و مقیاس‌پذیر</h2>
                        </header>
                        <WitArchitectureSection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 5: INDUSTRIAL DOMAINS ===================== */ }
                <Section variant="white" spacing="none" id="domains" className="py-16 lg:py-24">
                    <WitDomainsSection />
                </Section>

                {/* ===================== CHAPTER 6: PROVEN IMPACT ===================== */ }
                <Section variant="subtle" spacing="none" id="impact" className="py-16 lg:py-24 border-y border-slate-100">
                    <WitImpactSection />
                </Section>

            </motion.div>

            {/* ===================== CHAPTER 7: CALL TO ACTION ===================== */ }
            <Section variant="white" spacing="none" id="action" className="pt-16 pb-40">
                <div className="flex flex-col items-center text-center space-y-12">
                    <div className="h-1.5 w-16 bg-[#F4C430] rounded-full" />
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                            آماده برای ورود به <br /> <span className="text-bms-primary">دنیای هوشمند بارمان؟</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">
                            WIT زیرساختی برای سازمان‌هایی است که می‌خواهند آینده را از همین امروز بسازند. با ما در تماس باشید.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/contact?subject=wit-platform"
                            className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-bms-primary px-10 text-base font-bold text-white shadow-xl shadow-bms-primary/20 active:scale-95 transition-transform"
                        >
                            <span>درخواست جلسه مشاوره</span>
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/clinicans"
                            className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-700 active:scale-95 transition-transform hover:bg-slate-50"
                        >
                            مشاهده پروژه‌های فعال
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 🚀 UNIVERSAL macOS DOCK */ }
            <WitMacosDock />

            {/* Contextual Switcher for Tablet/Mobile */ }


            {/* Final Visual Hard-Stop Visual Anchor */ }
            <div className="h-px w-full bg-gradient-to-r from-transparent via-bms-primary/10 to-transparent" />
        </main>
    );
}