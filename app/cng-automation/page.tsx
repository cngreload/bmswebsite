import type { Metadata } from "next";

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

export const metadata: Metadata = {
    title: "سامانه ICTS – هوشمندسازی جایگاه‌های CNG | بارمان‌محور اسپادانا",
    description:
        "سامانه بومی ICTS برای پایش و کنترل هوشمند جایگاه‌های CNG؛ استاندارد جدید ایمنی، بهره‌وری و مدیریت داده در صنعت سوخت گاز طبیعی کشور."
};

export default function CngAutomationPage ()
{
    return (
        <div className="bms-page space-y-12 md:space-y-16">
            {/* ۱. هیرو محصول + ویدیو پایلوت */ }
            <CngHeroSection />

            {/* ۲. طرح ملی و جایگاه ICTS در آن */ }
            <NationalPlanSection />

            {/* ۳. چرا ضرورت است، نه آپشن لوکس؟ */ }
            <NecessitySection />

            {/* ۴. فواید برای مردم / حاکمیت / صنف جایگاه‌داران */ }
            <StakeholderBenefitsSection />

            {/* ۵. این سامانه دقیقاً چه می‌کند؟ (روایت جریان داده) */ }
            <WhatSystemDoesSection />

            {/* ۶. قابلیت‌های فنی کلیدی / فیچرهای تکنیکی */ }
            <TechHighlightsSection />

            {/* ۷. برتری و توانایی بومی */ }
            <LocalAdvantageSection />

            {/* ۸. اهمیت بومی‌سازی در سطح ملی */ }
            <NationalImportanceSection />

            {/* ۹. مسیر پیاده‌سازی و همراهی با مشتری */ }
            <DeploymentSection />

            {/* ۱۰. مدل‌های همکاری + دعوت نهایی و CTAها */ }
            <CollaborationSection />
            <FinalCtaSection />
        </div>
    );
}
