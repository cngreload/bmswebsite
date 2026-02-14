import Script from "next/script";
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
            <Script id="json-ld-icts-product" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( { "@context": "https://schema.org", "@type": "Product", "name": "ICTS" } ) } } />

            {/* CHAPTER 1: VISION */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-12">
                <CngHeroSectionV2 />
            </Section>

            {/* CHAPTER 2: SYSTEM ARCHITECTURE */ }
            <Section variant="subtle" spacing="none" className="py-12 lg:py-20 border-y border-slate-100 relative z-10">
                <TwoBranchProducts />
            </Section>

            {/* CHAPTER 3: EVIDENCE (Cinematic Pinning) */ }
            {/* Note: StorySection handles its own full-screen height and pinning */ }
            <CngStorySection />

            {/* CHAPTER 4: PILOT PROOF (Positioned after the Story Exit) */ }
            <Section variant="white" spacing="none" id="pilotvideo" className="py-20 lg:py-32">
                <div className="max-w-5xl mx-auto w-full px-4">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#145C98]/10 via-[#F4C430]/5 to-transparent blur-3xl opacity-40" />
                        <IndustrialVideoTerminal
                            src="/CNG_Station_Automation.mp4"
                            poster="/images/cng-poster.jpg"
                            title="پایلوت رسمی سامانه ICTS"
                            description="مستندات استقرار در فاز عملیاتی با تایید سازمان پدافند غیرعامل."
                            uploadDate="2025-12-15"
                            duration="PT3M45S"
                        />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 5: STRATEGIC DOSSIER */ }
            <Section variant="subtle" spacing="none" id="why" className="py-16 lg:py-24 border-y border-slate-100">
                <div className="flex flex-col gap-12 lg:gap-20">
                    <NationalPlanSection />
                    <div className="h-px w-2/3 mx-auto bg-slate-200" />
                    <NecessitySection />
                    <div className="h-px w-2/3 mx-auto bg-slate-200" />
                    <StakeholderBenefitsSection />
                </div>
            </Section>

            {/* CHAPTER 6: TECHNICAL ENGINE */ }
            <Section variant="white" spacing="none" id="how" className="py-16 lg:py-24">
                <div className="rounded-[3.5rem] bg-white border border-slate-200 shadow-premium p-8 md:p-16 lg:p-24 relative overflow-hidden">
                    <div className="flex flex-col gap-16 md:gap-24">
                        <WhatSystemDoesSection />
                        <div className="h-px w-full bg-slate-100" />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 7: ACTION */ }
            <Section variant="subtle" spacing="none" className="py-16 lg:py-24 border-t border-slate-100">
                <div className="flex flex-col gap-24">
                    <NationalImportanceSection />
                    <DeploymentSection />
                    <CollaborationSection />
                    <FinalCtaSection />
                </div>
            </Section>
        </main>
    );
}