import type { Metadata } from "next";
import Script from "next/script";

/* Rail */
import ClinicansStickyRail from "@/components/clinicans/ClinicansStickyRail";
import ClinicansMobileSectionSwitcher from "@/components/clinicans/ClinicansMobileSectionSwitcher";

/* Sections */
import ClinicansHeroSectionV2 from "@/components/clinicans/ClinicansHeroSectionV2";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";
import ClinicansSystemCarousel from "@/components/clinicans/ClinicansSystemCarousel";
import ClinicansSystemTabs from "@/components/clinicans/ClinicansSystemTabs";

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

export default function ClinicansPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Clinicans",
        applicationCategory: [ "MedicalApplication", "BusinessApplication" ],
        operatingSystem: "Web",
        description:
            "پلتفرمی یکپارچه برای مدیریت بالینی، مالی و ارتباط با بیمار.",
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
                className="relative min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-800"
            >
                {/* ---------------------------------------------
         * PAGE GRID (RTL-AWARE)
         * -------------------------------------------*/}
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
                        {/* MAIN CONTENT (RIGHT in RTL) */ }
                        <div className="space-y-28 md:space-y-36">
                            <section id="overview" className="scroll-mt-32">
                                <ClinicansHeroSectionV2 />
                            </section>

                            <section id="features" className="scroll-mt-32">
                                <ClinicansSystemCarousel />
                                <ClinicansSystemTabs />
                            </section>

                            <section id="audience" className="scroll-mt-32">
                                <ClinicansForWhomSection />
                            </section>

                            <section
                                id="security-tech"
                                className="scroll-mt-32 space-y-20"
                            >
                                <ClinicansSecuritySection />
                                <ClinicansTechSection />
                            </section>

                            <section id="pricing" className="scroll-mt-32">
                                <ClinicansGetStartedSection />
                            </section>
                        </div>

                        {/* STICKY RAIL (LEFT in RTL) */ }
                        <div className="hidden lg:flex justify-end">
                            <ClinicansStickyRail />
                        </div>
                    </div>
                </div>

                {/* MOBILE BOTTOM SWITCHER */ }
                <ClinicansMobileSectionSwitcher />
            </main>
        </>
    );
}
