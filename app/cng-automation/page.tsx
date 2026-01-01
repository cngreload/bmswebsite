// app/cng-automation/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

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

// 🧠 CRAWLER EMPATHY: High-Value Industrial Keywords
export const metadata: Metadata = {
    title: "سامانه هوشمند ICTS | اتوماسیون جایگاه‌های سوخت CNG",
    description: "اولین سامانه بومی پایش و کنترل جایگاه‌های سوخت (ICTS). راهکار جامع سخت‌افزاری و نرم‌افزاری برای هوشمندسازی، ارتقای ایمنی و مدیریت داده در صنعت گاز طبیعی.",
    keywords: [ "هوشمندسازی CNG", "سامانه ICTS", "پایش جایگاه سوخت", "اتوماسیون صنعتی", "اینترنت اشیاء صنعتی", "IIoT" ],
    alternates: {
        canonical: "https://barman-mes.ir/cng-automation",
    }
};

export default function CngAutomationPage ()
{
    // 🧠 CRAWLER EMPATHY: Structured Data for Industrial Product
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "ICTS - Intelligent CNG Station System",
                "image": "https://barman-mes.ir/images/icts-hero.jpg", // Ensure image exists
                "description": "سامانه یکپارچه مدیریت و مانیتورینگ جایگاه‌های سوخت گاز طبیعی با قابلیت شناسایی هوشمند خودرو.",
                "brand": {
                    "@type": "Brand",
                    "name": "Barman Mehvar Spadana"
                },
                "category": "Industrial Automation Software",
                "audience": {
                    "@type": "BusinessAudience",
                    "audienceType": "Government, Energy Sector"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://barman-mes.ir" },
                    { "@type": "ListItem", "position": 2, "name": "هوشمندسازی CNG", "item": "https://barman-mes.ir/cng-automation" }
                ]
            }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-cng"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="min-h-screen bg-slate-50/50">
                {/* 
                  🎨 UX: Semantic Breadcrumb
                  Visible navigation aid that reduces bounce rate.
                */}
                <div className="border-b border-slate-200 bg-white py-3">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 text-xs text-slate-500">
                        <Link href="/" className="flex items-center gap-1 hover:text-bms-primary transition-colors">
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-bms-primary">سامانه هوشمند ICTS</span>
                    </div>
                </div>

                {/* 
                  ⚡ CONTENT FLOW
                  Increased spacing (space-y-20) to reduce cognitive load on long scrolling pages.
                */}
                <div className="bms-page space-y-20 md:space-y-32 pb-24">
                    {/* ۱. هیرو محصول: LCP Priority */ }
                    <CngHeroSection />

                    {/* Group 1: The "Why" - Semantic grouping for logic */ }
                    <div className="space-y-16">
                        <NationalPlanSection />
                        <NecessitySection />
                        <StakeholderBenefitsSection />
                    </div>

                    {/* Group 2: The "How" - Technical Deep Dive */ }
                    <div className="space-y-16 rounded-[3rem] bg-white p-8 shadow-sm border border-slate-100 md:p-12">
                        <WhatSystemDoesSection />
                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </div>

                    {/* Group 3: The "Future" - Trust & Deployment */ }
                    <div className="space-y-16">
                        <NationalImportanceSection />
                        <DeploymentSection />
                    </div>

                    {/* Group 4: Action */ }
                    <div className="space-y-10">
                        <CollaborationSection />
                        <FinalCtaSection />
                    </div>
                </div>
            </main>
        </>
    );
}