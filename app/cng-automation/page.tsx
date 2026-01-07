import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

import CngNavbar from "@/components/cng/CngNavbar";

import CngHeroSection from "@/components/cng/CngHeroSection";
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "ICTS – Intelligent CNG Station System",
                "description":
                    "سامانه یکپارچه پایش و کنترل جایگاه‌های سوخت CNG مبتنی بر PLC، سیستم‌های امبدد و پردازش لبه.",
                "brand": { "@type": "Brand", "name": "Barman Mehvar Spadana" },
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://barman-mes.ir" },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "سامانه هوشمند ICTS",
                        "item": "https://barman-mes.ir/cng-automation",
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Script
                id="json-ld-cng"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="min-h-screen bg-slate-50/50">
                {/* NAVBAR */ }
                <CngNavbar />

                {/* STICKY BREADCRUMB */ }
                <div
                    className="
            sticky top-14 z-40 border-b border-slate-200 bg-white
            transition-opacity duration-200
            [html[data-nav-open='true']_&]:opacity-0
            [html[data-nav-open='true']_&]:pointer-events-none
          "
                >
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 transition-colors hover:text-bms-primary"
                        >
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-bms-primary">
                            سامانه هوشمند ICTS
                        </span>
                    </div>
                </div>

                {/* PAGE CONTENT */ }
                <div className="bms-page space-y-20 pb-24 md:space-y-32">
                    <section id="hero"><CngHeroSection /></section>
                    <section id="products"><TwoBranchProducts /></section>

                    <section id="story" className="space-y-12">
                        <CngStorySection />
                        <IndustrialVideoTerminal
                            src="/CNG_Station_Automation.mp4"
                            poster="/images/cng-poster.jpg"
                            title="گزارش اجرایی پایلوت ملی"
                            description="استقرار سامانه ICTS در جایگاه‌های منتخب با موفقیت کامل."
                            uploadDate="2025-12-15"
                            duration="PT3M45S"
                        />
                    </section>

                    <section id="why" className="space-y-16">
                        <NationalPlanSection />
                        <NecessitySection />
                        <StakeholderBenefitsSection />
                    </section>

                    <section
                        id="how"
                        className="space-y-16 rounded-[3rem] bg-white p-8 shadow-sm md:p-12"
                    >
                        <WhatSystemDoesSection />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </section>

                    <section id="future" className="space-y-16">
                        <NationalImportanceSection />
                        <DeploymentSection />
                    </section>

                    <section id="action" className="space-y-10">
                        <CollaborationSection />
                        <FinalCtaSection />
                    </section>
                </div>
            </main>
        </>
    );
}
