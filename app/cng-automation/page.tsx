import Script from "next/script";
import Link from "next/link";
import { Section } from "@/components/layout/Section";

/* Sections */
import CngHeroSectionV2 from "@/components/cng/CngHeroSectionV2";
import TwoBranchProducts from "@/components/cng/TwoBranchProducts";
import CngStorySection from "@/components/cng/CngStorySection";
import IndustrialVideoTerminal from "@/components/cng/IndustrialVideoTerminal";
import NationalPlanSection from "@/components/cng/NationalPlanSection";
import NecessitySection from "@/components/cng/NecessitySection";
import StakeholderBenefitsSection from "@/components/cng/StakeholderBenefitsSection";
import WhatSystemDoesSection from "@/components/cng/WhatSystemDoesSection";
import TechHighlightsSection from "@/components/cng/TechHighlightsSection";
import LocalAdvantageSection from "@/components/cng/LocalAdvantageSection";
import NationalImportanceSection from "@/components/cng/NationalImportanceSection";
import DeploymentSection from "@/components/cng/DeploymentSection";
import CollaborationSection from "@/components/cng/CollaborationSection";
import FinalCtaSection from "@/components/cng/FinalCtaSection";

export default function CngAutomationPage ()
{
    return (
        <main className="flex flex-col w-full antialiased bg-white overflow-visible" dir="rtl">
            {/* 🧠 SEO: Metadata remains intact */ }
            <Script id="json-ld-icts-product" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( { "@context": "https://schema.org", "@type": "Product", "name": "ICTS – Intelligent Control & Tag System" } ) } } />

            {/* CHAPTER 1: VISION */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-12">
                <CngHeroSectionV2 />
            </Section>

            {/* CHAPTER 2: ARCHITECTURE (Tight Transition) */ }
            <Section variant="subtle" spacing="none" className="py-12 lg:py-16 border-y border-slate-100">
                <TwoBranchProducts />
            </Section>

            {/* CHAPTER 3: EVIDENCE (The Certificate & Video Journey) */ }
            {/* We use White background for both to make them feel like one chapter */ }
            <Section variant="white" spacing="none" id="story" className="pt-16 lg:pt-24">
                <CngStorySection />
            </Section>

            {/* Correct Position: Video directly below certificates with minimal clean gap */ }
            <Section variant="white" spacing="none" id="pilotvideo" className="pb-16 lg:pb-24">
                <div className="max-w-4xl mx-auto w-full px-4 ">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-bms-primary/10 via-[#F4C430]/5 to-transparent blur-2xl opacity-40" />
                        <IndustrialVideoTerminal
                            src="/CNG_Station_Automation.mp4"
                            poster="/images/cng-poster.jpg"
                            title="پایلوت رسمی سامانه ICTS"
                            description="مستندات استقرار و بهره‌برداری در فاز عملیاتی با تایید سازمان پدافند غیرعامل."
                            uploadDate="2025-12-15"
                            duration="PT3M45S"
                        />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 4: STRATEGY (Subtle Background Divider) */ }
            <Section variant="subtle" spacing="none" id="why" className="py-12 lg:py-20 border-y border-slate-100">
                <div className="flex flex-col gap-10">
                    <NationalPlanSection />
                    <div className="h-px w-1/2 mx-auto bg-slate-200" />
                    <NecessitySection />
                    <div className="h-px w-1/2 mx-auto bg-slate-200" />
                    <StakeholderBenefitsSection />
                </div>
            </Section>

            {/* CHAPTER 5: TECHNOLOGY */ }
            <Section variant="white" spacing="none" className="py-12 lg:py-20">
                <div className="rounded-[3rem] bg-white border border-slate-200 shadow-sm p-8 md:p-16 relative overflow-hidden">
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <WhatSystemDoesSection />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 6: LOGISTICS & ACTION */ }
            <Section variant="subtle" spacing="none" className="py-12 lg:py-20 border-y border-slate-100">
                <div className="flex flex-col gap-16">
                    <NationalImportanceSection />
                    <DeploymentSection />
                </div>
            </Section>

            <Section variant="white" spacing="none" id="action" className="pt-16 pb-40">
                <div className="space-y-16">
                    <CollaborationSection />
                    <FinalCtaSection />
                </div>
            </Section>

            {/* 📱 MOBILE DOCK */ }
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
                <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-3 flex items-center justify-between ring-1 ring-black/5">
                    <div className="flex items-center gap-2 pr-2">
                        <div className="h-2 w-2 rounded-full bg-[#D72638] animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase">System Live</span>
                    </div>
                    <Link href="/contact-us" className="bg-bms-primary text-white px-6 py-2 rounded-xl text-xs font-black shadow-lg">
                        شروع همکاری
                    </Link>
                </div>
            </div>
        </main>
    );
}