// app/intelligentautomation/page.tsx

import type { Metadata } from "next";
import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";

export const metadata: Metadata = {
    title: "پلتفرم WIT – تکنولوژی هوشمند جهانی | بارمان‌محور اسپادانا",
    description:
        "پلتفرم هسته‌ای WIT (تکنولوژی هوشمند جهانی)، زیرساخت مشترک سامانه‌های هوشمند بارمان برای صنعت، انرژی و سلامت است؛ ترکیبی از سخت‌افزار، نرم‌افزار و داده برای مدیریت دارایی‌های حیاتی.",
};

export default function IntelligentAutomationPage ()
{
    return (
        <main className="pb-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 space-y-16">
                <WitHeroSection />
                <WitWhatIsSection />
                <WitStrategicAdvantageSection />
                <WitArchitectureSection />
            </div>
        </main>
    );
}
