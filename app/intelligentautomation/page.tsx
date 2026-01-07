// app/(platforms)/wit/page.tsx
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { LuChevronLeft, LuHouse, LuDownload, LuCalendar, LuUsers } from "react-icons/lu";

import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";
import WitBmsStorySection from "@/components/wit/WitBmsStorySection";
import WitDomainsSection from "@/components/wit/WitDomainsSection";
import WitImpactSection from "@/components/wit/WitImpactSection";
import WitInvestmentSection from "@/components/wit/WitInvestmentSection";
import WitTeamSection from "@/components/wit/WitTeamSection";

export default function IntelligentAutomationPage ()
{
    const [ hideNav, setHideNav ] = useState( false );

    /* -------------------------------------------
     * HIDE GLOBAL LAYOUT NAV ON SCROLL
     * -----------------------------------------*/
    useEffect( () =>
    {
        let lastY = window.scrollY;

        const onScroll = () =>
        {
            const currentY = window.scrollY;
            setHideNav( currentY > 80 && currentY > lastY );
            lastY = currentY;
        };

        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    /* -------------------------------------------
     * STRUCTURED DATA (Organization + SoftwareApplication + FundingOpportunity)
     * -----------------------------------------*/
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://bms-co.ir/#organization",
                name: "بارمان محور سپادانا (BMS Co.)",
                description: "شرکت فناوری‌محور پیشرو در اتوماسیون هوشمند - جذب سرمایه برای رشد سریع",
                url: "https://bms-co.ir",
                foundingDate: "2021",
                founder: {
                    "@type": "Person",
                    name: "تیم کارآفرینان فناوری‌محور BMS"
                },
                funding: {
                    "@type": "FundingScheme",
                    name: "سری A",
                    url: "https://bms-co.ir/investors"
                },
                sameAs: [
                    "https://clinicans.ir",
                    "https://linkedin.com/company/bms-co"
                ]
            },
            {
                "@type": "SoftwareApplication",
                name: "پلتفرم هوشمند جهانی (WIT)",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description: "پلتفرم هسته‌ای برای انقلاب صنعتی چهارم - فرصت سرمایه‌گذاری در فناوری پیشرفته",
                provider: {
                    "@type": "Organization",
                    "@id": "https://bms-co.ir/#organization"
                },
                offers: {
                    "@type": "Offer",
                    category: "InvestmentOpportunity"
                }
            },
            {
                "@type": "InvestmentOrDeposit",
                name: "فرصت سرمایه‌گذاری در BMS Co.",
                description: "سرمایه‌گذاری در پلتفرم پیشرو اتوماسیون هوشمند با پتانسیل رشد تصاعدی",
                url: "https://bms-co.ir/invest",
                investmentType: "Equity",
                minimumInvestment: {
                    "@type": "MonetaryAmount",
                    currency: "IRR",
                    value: "1000000000"
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-wit"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* INVESTOR-FOCUSED TOP BAR */ }
            <header
                className={ `sticky top-0 z-40 transition-transform duration-300 ${ hideNav ? "-translate-y-full" : "translate-y-0"
                    } border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm` }
            >
                <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                            aria-label="بازگشت به صفحه اصلی"
                        >
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" aria-hidden="true" />
                        <span className="font-semibold text-indigo-600">فرصت سرمایه‌گذاری: WIT</span>
                    </div>

                    {/* Investor Navigation */ }
                    <nav className="hidden md:flex items-center gap-4 text-xs">
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            فرصت سرمایه‌گذاری
                        </span>
                        <a href="#investment" className="hover:text-indigo-600 transition-colors font-medium">مزایای سرمایه‌گذاری</a>
                        <a href="#team" className="hover:text-indigo-600 transition-colors font-medium">تیم</a>
                        <a href="#metrics" className="hover:text-indigo-600 transition-colors font-medium">شاخص‌ها</a>
                        <Link
                            href="/contact?type=investor-meeting"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:shadow-md transition-shadow"
                        >
                            جلسه با سرمایه‌گذاران
                        </Link>
                    </nav>
                </div>
            </header>

            {/* MAIN CONTENT */ }
            <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-24 md:space-y-32">
                    <WitHeroSection />

                    {/* Quick Investor Stats Bar */ }
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        { [
                            { label: "تیم فنی", value: "۱۵+ نفر", desc: "متخصص سخت‌افزار و نرم‌افزار" },
                            { label: "پروژه‌های فعال", value: "۲", desc: "ICTS + Clinicans" },
                            { label: "رشد سالانه", value: "۲۰۰%+", desc: "درآمد سال ۱۴۰۲" },
                            { label: "سهم بازار هدف", value: "۱۵%", desc: "حوزه اتوماسیون صنعتی" },
                        ].map( ( stat, idx ) => (
                            <div key={ idx } className="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-sm transition-shadow">
                                <div className="text-2xl font-bold text-slate-900">{ stat.value }</div>
                                <div className="text-sm font-semibold text-slate-700 mt-1">{ stat.label }</div>
                                <div className="text-xs text-slate-500 mt-1">{ stat.desc }</div>
                            </div>
                        ) ) }
                    </div>

                    <WitBmsStorySection />
                    <WitWhatIsSection />

                    <div className="relative rounded-[3rem] bg-white p-8 shadow-lg border border-slate-100 md:p-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                        <WitStrategicAdvantageSection />
                    </div>

                    <WitArchitectureSection />
                    <WitDomainsSection />
                    <WitImpactSection />
                    <WitInvestmentSection />
                    <WitTeamSection />

                    {/* FINAL INVESTOR CTA SECTION */ }
                    <section className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-8 md:p-12">
                        {/* Background Pattern */ }
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    لحظه تصمیم‌گیری فرا رسیده است
                                </h2>
                                <p className="text-indigo-200 max-w-2xl mx-auto">
                                    انقلاب صنعتی چهارم در حال وقوع است. شما می‌توانید ناظر باشید یا بازیگر اصلی.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                { [
                                    {
                                        title: "فرصت منحصربه‌فرد بازار",
                                        desc: "تقاضای روزافزون اتوماسیون هوشمند در ایران و منطقه"
                                    },
                                    {
                                        title: "تیم اجرایی اثبات‌شده",
                                        desc: "تجربه موفق در پروژه‌های ملی و صنعتی"
                                    },
                                    {
                                        title: "خروج استراتژیک",
                                        desc: "پتانسیل بالا برای اکتساب توسط شرکت‌های بزرگ فناوری"
                                    }
                                ].map( ( item, idx ) => (
                                    <div key={ idx } className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                                        <div className="text-lg font-semibold mb-2">{ item.title }</div>
                                        <div className="text-sm text-indigo-200">{ item.desc }</div>
                                    </div>
                                ) ) }
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/investors/deck.pdf"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-100 transition-colors min-w-[200px]"
                                    target="_blank"
                                >
                                    <LuDownload className="h-4 w-4" />
                                    دانلود پرزنتیشن سرمایه‌گذاری
                                </Link>
                                <Link
                                    href="/contact?type=investor-meeting&priority=high"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all min-w-[200px]"
                                >
                                    <LuCalendar className="h-4 w-4" />
                                    رزرو جلسه حضوری
                                </Link>
                                <Link
                                    href="/contact?type=nda"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors min-w-[200px]"
                                >
                                    <LuUsers className="h-4 w-4" />
                                    درخواست NDA و اطلاعات محرمانه
                                </Link>
                            </div>

                            <div className="mt-10 pt-6 border-t border-white/20">
                                <div className="text-center text-sm text-indigo-300">
                                    <p className="mb-2">سوال فوری دارید؟ با مدیر سرمایه‌گذاری تماس بگیرید</p>
                                    <a href="tel:+982188776655" className="text-white font-semibold hover:underline">
                                        ۰۲۱ - ۸۸۷۷۶۶۵۵
                                    </a>
                                    <span className="mx-2">•</span>
                                    <a href="mailto:invest@bms-co.ir" className="text-white font-semibold hover:underline">
                                        invest@bms-co.ir
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}