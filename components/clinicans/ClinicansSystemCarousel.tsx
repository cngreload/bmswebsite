"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { CLINICANS_TABS } from "./clinicansSystemTabs.data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { LuArrowLeft } from "react-icons/lu";

const accentTextMap: Record<string, string> = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    rose: "text-rose-600",
    violet: "text-violet-600",
};

export default function ClinicansSystemCarousel ()
{
    const cards = CLINICANS_TABS.map( ( tab, index ) => (
        <Card
            key={ tab.id }
            index={ index }
            card={ {
                src: `/images/clinicans/${ tab.id }.jpg`,
                category: tab.label,
                title: tab.title,
                content: (
                    <div className="space-y-8 text-right">
                        <h3 className="text-2xl font-bold">{ tab.title }</h3>

                        <p className="leading-8 text-slate-600 text-justify">
                            { tab.description }
                        </p>

                        <Link
                            href={ tab.ctaLink }
                            className={ `inline-flex items-center gap-2 text-sm font-bold ${ accentTextMap[ tab.accent ] }` }
                        >
                            { tab.ctaText }
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>

                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
                            <Image
                                src={ `/images/clinicans/${ tab.id }.jpg` }
                                alt={ tab.title }
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                ),
            } }
        />
    ) );

    return (
        <section dir="rtl" className="py-24 bg-white">
            <Script
                id="clinicans-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Clinicans Platform",
                        url: "https://barman-mes.ir/clinicans",
                    } ),
                } }
            />

            <div className="max-w-7xl mx-auto px-4 space-y-12">
                <header className="text-right max-w-3xl ml-auto">
                    <h2 className="text-4xl font-bold">
                        معماری پلتفرم Clinicans
                    </h2>
                    <p className="text-slate-600 mt-3">
                        هر ماژول یک نقش مشخص در توانمندسازی دیجیتال مراکز درمانی دارد.
                    </p>
                </header>

                <Carousel items={ cards } />
            </div>
        </section>
    );
}
