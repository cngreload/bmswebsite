import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

import CngNavbar from "@/components/cng/CngNavbar";


import CngHeroSection from "@/components/cng/CngHeroSection";
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
import CngStorySection from "@/components/cng/CngStorySection";
import IndustrialVideoTerminal from "@/components/cng/IndustrialVideoTerminal";
import TwoBranchProducts from "@/components/cng/TwoBranchProducts";

export default function CngAutomationPage ()
{
    /* ---------------------------------------------
     * STRUCTURED DATA — Product + Platform Context
     * -------------------------------------------*/
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "ICTS – Intelligent CNG Station System",
                "description":
                    "سامانه یکپارچه پایش و کنترل جایگاه‌های سوخت CNG مبتنی بر PLC، سیستم‌های امبدد و پردازش لبه (Edge Computing).",
                "category": "Industrial Control Platform",
                "brand": {
                    "@type": "Brand",
                    "name": "Barman Mehvar Spadana",
                },
                "isPartOf": {
                    "@type": "SoftwareApplication",
                    "name": "WIT Platform",
                    "applicationCategory": "Industrial IoT Platform",
                },
                "audience": {
                    "@type": "BusinessAudience",
                    "audienceType":
                        "Energy Infrastructure, Government, Utilities",
                },
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "Control Layer",
                        "value": "PLC / RTU / Embedded Controllers",
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Architecture",
                        "value": "Edge-Based Industrial IoT",
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Deployment",
                        "value": "National Energy Infrastructure",
                    },
                ],
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "خانه",
                        "item": "https://barman-mes.ir",
                    },
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

                {/* Breadcrumb */ }
                <CngNavbar />
                <div className="border-b border-slate-200 bg-white py-3">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-bms-primary transition-colors"
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

                {/* Content */ }
                <div className="bms-page space-y-20 md:space-y-32 pb-24">
                    <CngHeroSection />
                    <TwoBranchProducts />
                    <CngStorySection />
                    <div className="md:col-span-5 relative mt-8 md:mt-0">
                        <IndustrialVideoTerminal
                            src="/CNG_Station_Automation.mp4"
                            poster="/images/cng-poster.jpg"
                            title="گزارش اجرایی پایلوت ملی"
                            description="استقرار سامانه ICTS در جایگاه‌های منتخب شبکه توزیع سوخت کشور با موفقیت ۱۰۰٪ تراکنش."
                            uploadDate="2025-12-15"
                            duration="PT3M45S" // 3 Minutes 45 Seconds
                        />
                    </div>

                    {/* WHY */ }
                    <div className="space-y-16">
                        <NationalPlanSection />
                        <NecessitySection />
                        <StakeholderBenefitsSection />
                    </div>

                    {/* HOW */ }
                    <div className="space-y-16 rounded-[3rem] bg-white p-8 shadow-sm border border-slate-100 md:p-12">
                        <WhatSystemDoesSection />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </div>

                    {/* FUTURE */ }
                    <div className="space-y-16">
                        <NationalImportanceSection />
                        <DeploymentSection />
                    </div>

                    {/* ACTION */ }
                    <div className="space-y-10">
                        <CollaborationSection />
                        <FinalCtaSection />
                    </div>
                </div>
            </main>
        </>
    );
}
