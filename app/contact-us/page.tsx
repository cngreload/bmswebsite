// app/contact-us/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LuHouse, LuChevronLeft } from "react-icons/lu";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";

export const metadata: Metadata = {
    title: "تماس با ما | مشاوره تخصصی و استقرار راهکارهای هوشمند",
    description:
        "ارتباط مستقیم با تیم بارمان‌محور اسپادانا برای مشاوره تخصصی، درخواست دمو و استقرار راهکارهای هوشمند در حوزه انرژی، سلامت و زیرساخت‌های حیاتی.",
    alternates: {
        canonical: "https://barman-mes.ir/contact-us",
    },
};

export default function ContactUsPage ()
{
    // 🧠 CRAWLER EMPATHY: ContactPage + Organization Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "تماس با بارمان‌محور اسپادانا",
        description:
            "صفحه رسمی ارتباط با تیم بارمان‌محور اسپادانا برای مشاوره، درخواست دمو و آغاز همکاری‌های فناورانه.",
        mainEntity: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
            url: "https://barman-mes.ir",
            email: "contact@barman-mes.ir",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "sales & technical consulting",
                    telephone: "+98-31-xxxxxxx",
                    areaServed: "IR",
                    availableLanguage: [ "fa" ],
                },
            ],
        },
    };

    return (
        <>
            <Script
                id="json-ld-contact"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="min-h-screen bg-slate-50">
                {/* Breadcrumb */ }
                <div className="border-b border-slate-200 bg-white py-3">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 transition-colors hover:text-bms-primary"
                        >
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-bms-primary">تماس با ما</span>
                    </div>
                </div>

                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-16">
                    {/* Hero */ }
                    <section className="mb-12 space-y-4 text-right">
                        <span className="inline-block rounded-lg border border-bms-primary/20 bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                            ارتباط مستقیم با تیم تخصصی
                        </span>

                        <h1 className="text-3xl font-bold tracking-tight text-bms-dark md:text-4xl lg:text-5xl">
                            نقطه شروع یک{ " " }
                            <span className="bg-gradient-to-r from-bms-primary to-blue-600 bg-clip-text text-transparent">
                                همکاری راهبردی
                            </span>
                        </h1>

                        <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                            اگر به‌دنبال استقرار یک سامانه ملی در حوزه انرژی، پیاده‌سازی
                            زیرساخت‌های هوشمند صنعتی، یا مدیریت یکپارچه کلینیک با Clinicans
                            هستید، تیم فنی و مشاوره بارمان‌محور اسپادانا آماده گفت‌وگو با شماست.
                        </p>
                    </section>

                    {/* Grid */ }
                    <div className="grid items-start gap-8 lg:grid-cols-12">
                        {/* Form */ }
                        <div className="lg:col-span-7 xl:col-span-8">
                            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                                <h2 className="mb-6 border-b border-slate-100 pb-4 text-lg font-bold text-slate-800">
                                    ثبت درخواست، دمو یا پیام رسمی
                                </h2>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Info */ }
                        <div className="space-y-6 lg:col-span-5 xl:col-span-4">
                            <ContactInfoPanel />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
