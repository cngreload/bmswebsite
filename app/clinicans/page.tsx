// app/clinicans/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse } from "react-icons/lu";

import ClinicansHeroSection from "@/components/clinicans/ClinicansHeroSection";
import ClinicansProblemsSection from "@/components/clinicans/ClinicansProblemsSection";
import ClinicansOverviewSection from "@/components/clinicans/ClinicansOverviewSection";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansFeaturesSection from "@/components/clinicans/ClinicansFeaturesSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";

// 🧠 CRAWLER EMPATHY: Targeted SaaS Keywords
export const metadata: Metadata = {
    title: "کلینیکانز (Clinicans) | نرم‌افزار مدیریت مطب و کلینیک",
    description: "پلتفرم جامع و ابری برای مدیریت کلینیک‌های زیبایی و سلامت. نوبت‌دهی آنلاین، پرونده الکترونیک (EHR)، حسابداری یکپارچه و CRM تخصصی پزشکی.",
    keywords: [ "نرم‌افزار کلینیک", "مدیریت مطب", "پرونده الکترونیک سلامت", "EHR", "نوبت‌دهی آنلاین پزشکی", "CRM پزشکی" ],
    alternates: {
        canonical: "https://barman-mes.ir/clinicans",
    }
};

export default function ClinicansPage ()
{
    // 🧠 CRAWLER EMPATHY: Rich Software Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Clinicans",
                "applicationCategory": "BusinessApplication", // or MedicalApplication
                "operatingSystem": "Web Browser",
                "description": "پلتفرم ابری مدیریت یکپارچه کلینیک‌های سلامت و زیبایی با قابلیت نوبت‌دهی، پرونده‌سازی و حسابداری.",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "IRR",
                    "availability": "https://schema.org/InStock"
                },
                "brand": {
                    "@type": "Brand",
                    "name": "Barman Mehvar Spadana"
                },
                "featureList": [
                    "نوبت‌دهی آنلاین",
                    "پرونده الکترونیک (EHR)",
                    "مدیریت مالی و فاکتور",
                    "باشگاه مشتریان"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://barman-mes.ir" },
                    { "@type": "ListItem", "position": 2, "name": "پلتفرم Clinicans", "item": "https://barman-mes.ir/clinicans" }
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

            <main id="main-content" className="min-h-screen bg-slate-50">
                {/* 
                  🎨 UX: Navigation Anchor
                  Consistent with other product pages.
                */}
                <div className="sticky top-[64px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-3 transition-all">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 text-xs text-slate-500">
                        <Link href="/" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-emerald-600">پلتفرم سلامت Clinicans</span>
                    </div>
                </div>

                {/* 
                  ⚡ CONTENT FLOW
                  Grouped logically to create "Reading Chapters".
                */}
                <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-24 md:space-y-32">

                    {/* Chapter 1: The Hook */ }
                    <ClinicansHeroSection />

                    {/* Chapter 2: The Why (Problem/Solution) */ }
                    <div className="space-y-16">
                        <ClinicansProblemsSection />
                        <ClinicansOverviewSection />
                    </div>

                    {/* Chapter 3: The Value (Features & Audience) */ }
                    <div className="relative rounded-[3rem] bg-white p-8 shadow-sm border border-slate-100 md:p-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-emerald-400 to-blue-500" />
                        <div className="space-y-20">
                            <ClinicansFeaturesSection />
                            <ClinicansForWhomSection />
                        </div>
                    </div>

                    {/* Chapter 4: Trust & Tech */ }
                    <div className="space-y-16">
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