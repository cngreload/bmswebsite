import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

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
        <>
            {/* -------------------------------------------------
       * PRODUCT STRUCTURED DATA (MINIMAL BUT COMPLETE)
       * ------------------------------------------------*/}
            <Script
                id="json-ld-cng-product"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: "ICTS – Intelligent CNG Station System",
                        description:
                            "سامانه یکپارچه پایش و کنترل جایگاه‌های سوخت CNG مبتنی بر PLC، سیستم‌های امبدد و IIoT.",
                        brand: {
                            "@type": "Organization",
                            name: "Baraman Mehvar Spadana",
                        },
                        url: "https://barman-mes.ir/cng-automation",
                    } ),
                } }
            />

            {/* -------------------------------------------------
       * BREADCRUMB STRUCTURED DATA
       * ------------------------------------------------*/}
            <Script
                id="json-ld-cng-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "خانه",
                                item: "https://barman-mes.ir",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "سامانه هوشمند ICTS",
                                item: "https://barman-mes.ir/cng-automation",
                            },
                        ],
                    } ),
                } }
            />

            {/* -------------------------------------------------
       * PAGE CONTENT (INSIDE ROOT <main>)
       * ------------------------------------------------*/}
            <div className="bg-slate-50/50">
                {/* Breadcrumb (visual) */ }
                <nav
                    aria-label="breadcrumb"
                    className="border-b border-slate-200 bg-white"
                >
                    <div className="mx-auto max-w-7xl px-4 md:px-8">
                        <div className="flex h-12 items-center gap-2 text-xs text-slate-500">
                            <Link
                                href="/"
                                className="flex items-center gap-1 hover:text-bms-primary"
                            >
                                <LuHouse className="h-3 w-3" />
                                خانه
                            </Link>
                            <LuChevronLeft className="h-3 w-3 opacity-40" />
                            <span className="font-medium text-bms-primary">
                                سامانه هوشمند ICTS
                            </span>
                        </div>
                    </div>
                </nav>

                {/* Page sections */ }
                <div className="space-y-24 pb-32">
                    {/* HERO (must contain the only H1) */ }
                    <section id="hero" className="scroll-mt-32">
                        <CngHeroSectionV2 />
                    </section>

                    <section id="products" className="scroll-mt-32">
                        <TwoBranchProducts />
                    </section>

                    <section id="story" className="scroll-mt-32 space-y-12">
                        <CngStorySection />

                        {/* Video section — semantic */ }
                        <section
                            id="pilotvideo"
                            aria-labelledby="pilotvideo-title"
                        >
                            <h2 id="pilotvideo-title" className="sr-only">
                                ویدیوی پایلوت اجرایی سامانه ICTS
                            </h2>

                            <IndustrialVideoTerminal
                                src="/CNG_Station_Automation.mp4"
                                poster="/images/cng-poster.jpg"
                                title="گزارش اجرایی پایلوت ملی"
                                description="استقرار سامانه ICTS در جایگاه‌های منتخب با موفقیت کامل."
                                uploadDate="2025-12-15"
                                duration="PT3M45S"
                            />
                        </section>
                    </section>

                    <section id="why" className="scroll-mt-32 space-y-16">
                        <NationalPlanSection />
                        <NecessitySection />
                        <StakeholderBenefitsSection />
                    </section>

                    <section
                        id="how"
                        className="scroll-mt-32 space-y-16 rounded-[3rem] bg-white p-8 shadow-sm md:p-12"
                    >
                        <WhatSystemDoesSection />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </section>

                    <section id="future" className="scroll-mt-32 space-y-16">
                        <NationalImportanceSection />
                        <DeploymentSection />
                    </section>

                    <section id="action" className="scroll-mt-32 space-y-10">
                        <CollaborationSection />
                        <FinalCtaSection />
                    </section>
                </div>
            </div>
        </>
    );
}
