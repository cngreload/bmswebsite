// app/clinicans/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import ClinicansNavbar from "@/components/clinicans/ClinicansNavbar";

import ClinicansHeroSection from "@/components/clinicans/ClinicansHeroSection";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";
import { ClinicansFeaturesGrid } from "@/components/clinicans/ColumnGrid";

// 🧠 PRODUCT METADATA — Updated for Canonical Platform Positioning
export const metadata: Metadata = {
    title: "کلینیکانز (Clinicans) | پلتفرم توانمندسازی دیجیتال ارائه‌دهندگان خدمات سلامت",
    description:
        "پلتفرمی یکپارچه برای توانمندسازی دیجیتال، اتوماسیون و هوشمندسازی ارائه‌دهندگان خدمات سلامت — از مطب‌های کوچک تا مراکز درمانی بزرگ.",
    keywords: [
        "پلتفرم توانمندسازی دیجیتال سلامت",
        "Digital Health Enablement Platform",
        "اتوماسیون مراکز درمانی",
        "هوشمندسازی خدمات سلامت",
        "پرونده الکترونیک سلامت",
        "مدیریت مطب و کلینیک",
        "CRM پزشکی",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/clinicans",
    },
};

export default function ClinicansPage ()
{
    // 🧠 RICH SOFTWARE + PRODUCT SCHEMA
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": "https://barman-mes.ir/clinicans#software",
                "name": "Clinicans",
                "applicationCategory": [
                    "MedicalApplication",
                    "BusinessApplication"
                ],
                "operatingSystem": "Web Browser",
                "softwareVersion": "1.0",
                "isAccessibleForFree": true,
                "description":
                    "پلتفرمی یکپارچه برای توانمندسازی دیجیتال، اتوماسیون و هوشمندسازی ارائه‌دهندگان خدمات سلامت که فرآیندهای بالینی، مالی و ارتباط با مراجعین را در یک سیستم امن و مقیاس‌پذیر تجمیع می‌کند.",
                "featureList": [
                    "نوبت‌دهی آنلاین پزشکی",
                    "پرونده الکترونیک سلامت (EHR)",
                    "مدیریت مالی و حسابداری",
                    "ارتباط با بیمار و CRM پزشکی",
                    "گزارش‌های تحلیلی و مدیریتی"
                ],
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "IRR",
                    "availability": "https://schema.org/InStock"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Barman Mehvar Spadana",
                    "url": "https://barman-mes.ir"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": [
                        "ارائه‌دهندگان خدمات سلامت",
                        "کلینیک‌های درمانی و زیبایی",
                        "پزشکان و متخصصان",
                        "مدیران مراکز درمانی"
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "خانه",
                        "item": "https://barman-mes.ir"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "پلتفرم توانمندسازی دیجیتال سلامت (Clinicans)",
                        "item": "https://barman-mes.ir/clinicans"
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-clinicans"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-800">

                {/* 🔗 NEW PRODUCT NAVBAR */ }
                <ClinicansNavbar />

                {/* 📘 CONTENT FLOW */ }
                <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16 space-y-24 md:space-y-32">

                    {/* Chapter 1: Hero & Enablement Vision */ }
                    <div id="overview">
                        <ClinicansHeroSection />

                        <div id="audience" className="scroll-mt-24">
                            <ClinicansFeaturesGrid />

                            <ClinicansForWhomSection />
                        </div>

                        <div id="security" className="space-y-16 scroll-mt-24">
                            <ClinicansSecuritySection />
                            <ClinicansTechSection />
                        </div>

                        {/* Chapter 5: Conversion */ }
                        <ClinicansGetStartedSection />
                    </div>
                </div>

            </main>
        </>
    );
}