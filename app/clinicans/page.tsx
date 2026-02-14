"use client";

import React, { useRef } from "react";
import Script from "next/script";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { LuStethoscope } from "react-icons/lu";
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
import ClinicansCardScroll from "@/components/clinicans/ClinicansCardScroll";

export default function ClinicansPage ()
{
    const containerRef = useRef<HTMLDivElement>( null );
    const { scrollYProgress } = useScroll( { target: containerRef, offset: [ "start start", "end end" ] } );
    const smoothProgress = useSpring( scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 } );
    const mainScale = useTransform( smoothProgress, [ 0.9, 1 ], [ 1, 0.98 ] );

    return (
        <main ref={ containerRef } className="flex flex-col w-full bg-white overflow-visible" dir="rtl">
            <Script
                id="json-ld-clinicans-master"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Clinicans Health Platform",
                        "publisher": { "@type": "Organization", "name": "Barman Mehvar Spadana" }
                    } ),
                } }
            />

            {/* CHAPTER 1: VISION */ }
            <Section variant="white" spacing="none" id="overview" className="pt-6 md:pt-10 pb-0">
                <div className="flex flex-col">
                    <ClinicansHeroSectionV2 />
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

            {/* CHAPTER 2: MODULES (Subtle Background) */ }
            <Section variant="subtle" spacing="none" id="features" className="py-16 lg:py-24 border-y border-slate-100 mt-16">
                <div className="space-y-16">
                    <ClinicansSystemCarousel />
                    <div className="max-w-5xl mx-auto py-10 px-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    </div>
                    <ClinicansSystemTabs />
                </div>
            </Section>

            {/* CHAPTER 3: IMMERSIVE 3D SCROLL */ }
            <section id="specialists" className="relative w-full bg-slate-950 z-20">
                <div style={ { height: '400vh' } } className="relative">
                    <ClinicansCardScroll />
                </div>
            </section>

            {/* CHAPTER 4: AUDIENCE & SECURITY */ }
            <Section variant="white" spacing="none" id="audience" className="py-16 lg:py-24">
                <div className="flex flex-col gap-24 lg:gap-32">
                    <ClinicansForWhomSection />
                    <div className="h-px w-2/3 mx-auto bg-slate-100" />
                    <ClinicansSecuritySection />
                    <div className="h-px w-2/3 mx-auto bg-slate-100" />
                    <ClinicansTechSection />
                </div>
            </Section>

            {/* CHAPTER 5: ONBOARDING */ }
            <Section variant="white" spacing="none" id="pricing" className="pt-16 md:pt-24 pb-20">
                <motion.div style={ { scale: mainScale } } className="space-y-20">
                    <ClinicansGetStartedSection />
                </motion.div>
            </Section>

            <ClinicansMacosDock />
            <ClinicansMobileSectionSwitcher />
        </main>
    );
}