import type { Metadata } from "next";
import Script from "next/script";
import ClinicansNavbar from "@/components/clinicans/ClinicansNavbar";

import ClinicansHeroSection from "@/components/clinicans/ClinicansHeroSection";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";
import { ClinicansFeaturesGrid } from "@/components/clinicans/ColumnGrid";

/* ---------------------------------------------
 * SEO METADATA
 * -------------------------------------------*/
export const metadata: Metadata = {
    title:
        "کلینیکانز (Clinicans) | پلتفرم توانمندسازی دیجیتال ارائه‌دهندگان خدمات سلامت",
    description:
        "پلتفرمی یکپارچه برای توانمندسازی دیجیتال، اتوماسیون و هوشمندسازی ارائه‌دهندگان خدمات سلامت — از مطب‌های کوچک تا مراکز درمانی بزرگ.",
    alternates: {
        canonical: "https://barman-mes.ir/clinicans",
    },
};

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Clinicans",
        applicationCategory: [ "MedicalApplication", "BusinessApplication" ],
        operatingSystem: "Web",
        description:
            "پلتفرمی یکپارچه برای مدیریت بالینی، مالی و ارتباط با بیمار برای ارائه‌دهندگان خدمات سلامت.",
        publisher: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
            url: "https://barman-mes.ir",
        },
    };

    return (
        <>
            <Script
                id="json-ld-clinicans"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main
                id="main-content"
                className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-800"
            >
                {/* 🔗 PRODUCT NAVBAR */ }
                <ClinicansNavbar />

                {/* 📘 CONTENT */ }
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-16 space-y-28 md:space-y-36">
                    {/* =====================
           * OVERVIEW
           * ===================== */}
                    <section id="overview" className="scroll-mt-28 md:scroll-mt-32">
                        <ClinicansHeroSection />
                    </section>

                    {/* =====================
           * FEATURES
           * ===================== */}
                    <section id="features" className="scroll-mt-28 md:scroll-mt-32">
                        <ClinicansFeaturesGrid />
                    </section>

                    {/* =====================
           * AUDIENCE
           * ===================== */}
                    <section id="audience" className="scroll-mt-28 md:scroll-mt-32">
                        <ClinicansForWhomSection />
                    </section>

                    {/* =====================
           * SECURITY & TECH
           * ===================== */}
                    <section
                        id="security-tech"
                        className="scroll-mt-28 md:scroll-mt-32 space-y-20"
                    >
                        <ClinicansSecuritySection />
                        <ClinicansTechSection />
                    </section>

                    {/* =====================
           * PRICING / CTA
           * ===================== */}
                    <section id="pricing" className="scroll-mt-28 md:scroll-mt-32">
                        <ClinicansGetStartedSection />
                    </section>
                </div>
            </main>
        </>
    );
}
