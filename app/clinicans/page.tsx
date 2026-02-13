"use client";

import React, { useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import
{

    LuStethoscope,
    LuFingerprint,
    LuLayoutGrid
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";

/* Navigation Components */
import ClinicansMacosDock from "@/components/clinicans/ClinicansMacosDock";
import ClinicansMobileSectionSwitcher from "@/components/clinicans/ClinicansMobileSectionSwitcher";

/* Section Components */
import ClinicansHeroSectionV2 from "@/components/clinicans/ClinicansHeroSectionV2";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";
import ClinicansSystemCarousel from "@/components/clinicans/ClinicansSystemCarousel";
import ClinicansSystemTabs from "@/components/clinicans/ClinicansSystemTabs";

/**
 * 🏥 CLINICANS PLATFORM - FINAL REFORMATION
 * Spacing calibrated to 8pt Grid (py-12 to py-24)
 * Fixed Footer Gap and Section Stacking
 */
export default function ClinicansPage ()
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

    // Subtle Parallax without breaking the document flow
    const mainScale = useTransform( smoothProgress, [ 0.9, 1 ], [ 1, 0.98 ] );

    return (
        <main
            ref={ containerRef }
            className="flex flex-col w-full bg-white overflow-visible"
            dir="rtl"
        >
            <Script
                id="json-ld-clinicans-master"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Clinicans Health Platform",
                        "applicationCategory": "MedicalBusinessApplication",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Barman Mehvar Spadana"
                        }
                    } ),
                } }
            />

            {/* ===================== CHAPTER 1: VISION ===================== */ }
            {/* Tightened top padding. Added relative positioning to handle the overlap correctly */ }
            <Section variant="white" spacing="none" id="overview" className="pt-6 md:pt-10 pb-0">
                <div className="flex flex-col">
                    <ClinicansHeroSectionV2 />

                    {/* Overlap Card: Reduced negative margin for better stability */ }
                    <motion.div
                        initial={ { y: 40, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.8, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="-mt-16 md:-mt-24 relative z-30 mx-auto max-w-5xl px-4 w-full"
                    >
                        <div className="bg-white/90 backdrop-blur-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2.5rem] border border-slate-100 shadow-2xl ring-1 ring-black/5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg border border-emerald-400">
                                    <LuStethoscope className="w-7 h-7" />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-1">Status: Active</span>
                                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">زیرساخت هوشمند درمان</h3>
                                </div>
                            </div>
                            <div className="hidden lg:block h-12 w-px bg-slate-100" />
                            <div className="flex items-center gap-10">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-emerald-600 tracking-tighter">۱۰۰٪</div>
                                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">بومی‌سازی</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-bms-primary tracking-tighter">۲۴/۷</div>
                                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">پشتیبانی</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: ECOSYSTEM ===================== */ }
            {/* Tightened CHAPTER 2 Padding from 40 to 24 */ }
            <Section
                variant="subtle"
                spacing="none"
                id="features"
                className="py-16 lg:py-24 border-y border-slate-100 mt-16"
            >
                <div className="space-y-16">
                    <header className="text-center space-y-4 max-w-4xl mx-auto px-6">
                        <div className="inline-flex items-center gap-3 text-emerald-600 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                            <LuLayoutGrid className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Integrated_Ecosystem</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tightest">
                            تجمیع فرآیندهای <span className="text-emerald-600">هوشمند درمانی</span>
                        </h2>
                    </header>

                    <div className="space-y-0">
                        <ClinicansSystemCarousel />
                        <div className="max-w-5xl mx-auto py-10 px-6">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        </div>
                        <ClinicansSystemTabs />
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 3: AUDIENCE ===================== */ }
            {/* Removed 'large' spacing to prevent massive white gaps */ }
            <Section variant="white" spacing="none" id="audience" className="py-16 lg:py-24">
                <ClinicansForWhomSection />
            </Section>

            {/* ===================== CHAPTER 4: TECHNOLOGY ===================== */ }
            {/* Standardized py-24 instead of py-40 */ }
            <Section variant="subtle" spacing="none" id="security-tech" className="py-16 lg:py-24 border-y border-slate-100">
                <div className="flex flex-col gap-16 md:gap-20">
                    <ClinicansSecuritySection />

                    <div className="flex items-center justify-center relative py-4">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                        <div className="relative z-10 flex items-center gap-4 bg-slate-50 px-6 py-2 rounded-full border border-slate-200">
                            <LuFingerprint className="w-5 h-5 text-[#145C98] animate-pulse" />
                            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-slate-400">Security_Layer_Active</span>
                        </div>
                    </div>

                    <ClinicansTechSection />
                </div>
            </Section>

            {/* ===================== CHAPTER 5: ONBOARDING ===================== */ }
            {/* CRITICAL FIX: Changed pb-60 to pb-20 to remove gap before footer */ }
            <Section variant="white" spacing="none" id="pricing" className="pt-16 md:pt-24 pb-16 md:pb-20">
                <motion.div style={ { scale: mainScale } } className="space-y-20">
                    <div className="flex justify-center scale-125 opacity-40">
                        <div className="relative">
                            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent" />
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#F4C430]" />
                        </div>
                    </div>
                    <ClinicansGetStartedSection />
                </motion.div>
            </Section>

            {/* ===================== UNIVERSAL OVERLAYS ===================== */ }
            <ClinicansMacosDock />

            {/* Tablet/Mobile Switcher */ }
            <div className="lg:hidden sticky bottom-0 z-[40]">
                <ClinicansMobileSectionSwitcher />
            </div>

            {/* Mobile Dock - Repositioned to avoid overlap */ }
            <div className="lg:hidden fixed bottom-16 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-sm">
                <div className="bg-white/95 backdrop-blur-xl p-3 flex items-center justify-between rounded-2xl border border-slate-200 shadow-2xl ring-1 ring-black/5">
                    <div className="flex items-center gap-3 pr-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Live System</span>
                    </div>
                    <Link
                        href="/contact-us?type=clinic-demo"
                        className="bg-[#145C98] text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-lg"
                    >
                        درخواست دمو
                    </Link>
                </div>
            </div>
        </main>
    );
}