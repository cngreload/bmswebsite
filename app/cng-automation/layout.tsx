import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "سامانه هوشمند ICTS | پایش و اتوماسیون جایگاه‌های سوخت CNG",
    description:
        "ICTS سامانه بومی پایش و کنترل جایگاه‌های CNG مبتنی بر PLC، سیستم‌های امبدد و IIoT. راهکار یکپارچه سخت‌افزاری و نرم‌افزاری بارمان برای ایمنی، داده‌محوری و مدیریت زیرساخت‌های انرژی کشور.",
    keywords: [
        "سامانه ICTS",
        "هوشمندسازی جایگاه CNG",
        "پایش جایگاه سوخت",
        "اتوماسیون صنعتی",
        "PLC",
        "سیستم‌های امبدد",
        "IIoT",
        "زیرساخت انرژی",
        "کنترل صنعتی بومی",
    ],
    alternates: {
        canonical: "https://barman-mes.ir/cng-automation",
    },
    openGraph: {
        title: "سامانه هوشمند ICTS | اتوماسیون جایگاه‌های CNG",
        description:
            "پلتفرم صنعتی بارمان برای پایش، ایمنی و مدیریت داده‌محور جایگاه‌های سوخت CNG در مقیاس ملی.",
        url: "https://barman-mes.ir/cng-automation",
        siteName: "Barman Mehvar Spadana",
        locale: "fa_IR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CngAutomationLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return <>{ children }</>;
}
