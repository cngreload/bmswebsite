// app/intelligentautomation/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "پلتفرم هوشمند WIT | زیرساخت اینترنت اشیاء صنعتی (IIoT)",
    description:
        "تکنولوژی هوشمند جهانی (WIT). پلتفرم جامع سخت‌افزاری و نرم‌افزاری بارمان برای هوشمندسازی صنایع، انرژی و سلامت با معماری ماژولار و بومی.",
    keywords: [
        "پلتفرم IoT",
        "هوشمندسازی صنعتی",
        "IIoT",
        "کنترل صنعتی",
        "سخت‌افزار بومی",
        "اتوماسیون صنعتی",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/intelligentautomation",
    },
    openGraph: {
        type: "website",
        title: "WIT Platform | Industrial IoT by Barman",
        description: "WIT، هسته‌ی سخت‌افزاری و نرم‌افزاری بارمان برای پیاده‌سازی سامانه‌های هوشمندسازی صنعتی و سازمانی.",
        locale: "fa_IR",
        siteName: "Barman Mehvar Spadana",
        images: [ { url: '/images/og-wit.jpg', width: 1200, height: 630 } ]
    },
    twitter: {
        card: "summary_large_image",
        title: "WIT Platform | Industrial IoT by Barman",
    }
};

export default function IntelligentAutomationLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <section className="bg-white min-h-screen">
            { children }
        </section>
    );
}