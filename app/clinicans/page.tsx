// app/clinicans/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import ClinicansNavbar from "@/components/clinicans/ClinicansNavbar"; // 👈 Import the new navbar

import ClinicansHeroSection from "@/components/clinicans/ClinicansHeroSection";
import ClinicansProblemsSection from "@/components/clinicans/ClinicansProblemsSection";
import ClinicansOverviewSection from "@/components/clinicans/ClinicansOverviewSection";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansFeaturesSection from "@/components/clinicans/ClinicansFeaturesSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";

// 🧠 PRODUCT METADATA — SaaS + Healthcare aligned
export const metadata: Metadata = {
    title: "کلینیکانز (Clinicans) | پلتفرم مدیریت هوشمند کلینیک",
    description:
        "Clinicans یک پلتفرم ابری و یکپارچه برای مدیریت کلینیک‌های سلامت و زیبایی است؛ شامل نوبت‌دهی آنلاین، پرونده الکترونیک سلامت (EHR)، مدیریت مالی و ارتباط با بیمار.",
    keywords: [
        "نرم‌افزار مدیریت کلینیک",
        "مدیریت مطب",
        "پرونده الکترونیک سلامت",
        "EHR",
        "نوبت‌دهی آنلاین پزشکی",
        "نرم‌افزار کلینیک زیبایی",
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
                    "Clinicans یک پلتفرم نرم‌افزاری ابری برای مدیریت یکپارچه کلینیک‌های سلامت و زیبایی است که فرآیندهای بالینی، مالی و ارتباط با بیمار را در یک سیستم امن و مقیاس‌پذیر تجمیع می‌کند.",
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
                        "کلینیک‌های درمانی",
                        "کلینیک‌های زیبایی",
                        "پزشکان",
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
                        "name": "پلتفرم Clinicans",
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

                    {/* Chapter 1: Hero */ }
                    <div id="overview">
                        <ClinicansHeroSection />
                    </div>

                    {/* Chapter 2: Problem & Overview */ }
                    <div className="space-y-16">
                        <ClinicansProblemsSection />
                        <ClinicansOverviewSection />
                    </div>

                    {/* Chapter 3: Features & Audience */ }
                    {/* Added IDs for Scroll Navigation */ }
                    <div id="features" className="relative rounded-[3rem] bg-white p-8 shadow-sm border border-slate-100 md:p-12 overflow-hidden scroll-mt-24">
                        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-emerald-400 to-blue-500" />
                        <div className="space-y-20">
                            <ClinicansFeaturesSection />

                            <div id="audience" className="scroll-mt-24">
                                <ClinicansForWhomSection />
                            </div>
                        </div>
                    </div>

                    {/* Chapter 4: Trust & Technology */ }
                    <div id="security" className="space-y-16 scroll-mt-24">
                        <ClinicansSecuritySection />
                        <ClinicansTechSection />
                    </div>

                    {/* Chapter 5: Conversion */ }
                    <ClinicansGetStartedSection />
                </div>
            </main>
        </>
    );
}