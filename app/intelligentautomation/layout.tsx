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
        description:
            "WIT، هسته‌ی سخت‌افزاری و نرم‌افزاری بارمان برای پیاده‌سازی سامانه‌های هوشمندسازی صنعتی و سازمانی.",
        locale: "fa_IR",
        siteName: "Barman Mehvar Spadana",
    },
};

export default function IntelligentAutomationLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return children;
}
