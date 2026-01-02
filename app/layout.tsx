// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import RootChrome from "@/components/layout/RootChrome";
import Script from "next/script";

// ⚡ PERFORMANCE: Zero Layout Shift Font Loading
const bmsSans = IBM_Plex_Sans_Arabic( {
  subsets: [ "arabic", "latin" ],
  weight: [ "300", "400", "500", "600", "700" ],
  variable: "--font-bms-sans",
  display: "swap",
} );

export const metadata: Metadata = {
  metadataBase: new URL( "https://barman-mes.ir" ),
  title: {
    template: "%s | بارمان محور اسپادانا",
    default: "بارمان محور اسپادانا | سامانه‌های هوشمندسازی و پایش بومی",
  },
  description:
    "بارمان محور اسپادانا، شرکت دانش‌بنیان پیشرو در طراحی و پیاده‌سازی سامانه‌های بومی پایش (ICTS)، مدیریت هوشمند کلینیک و راهکارهای پیشرفته هوشمندسازی صنعتی برای پروژه‌های حساس و زیرساختی.",
  alternates: {
    canonical: "https://barman-mes.ir",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://barman-mes.ir",
    siteName: "بارمان محور اسپادانا",
    title: "بارمان محور اسپادانا | سامانه‌های هوشمندسازی و پایش بومی",
    description:
      "راهکارهای بومی و پیشرفته پایش، کنترل و هوشمندسازی برای سازمان‌ها و پروژه‌های ملی.",
  },
  twitter: {
    card: "summary_large_image",
    title: "بارمان محور اسپادانا",
    description:
      "طراحی سامانه‌های بومی پایش، مدیریت کلینیک و هوشمندسازی صنعتی.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode;
} )
{
  // 🧠 KNOWLEDGE GRAPH: Organization + Website Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://barman-mes.ir/#organization",
        name: "Barman Mehvar Spadana",
        alternateName: "بارمان محور اسپادانا",
        url: "https://barman-mes.ir",
        logo: "https://barman-mes.ir/logo.png",
        foundingCountry: "IR",
        knowsAbout: [
          "هوشمندسازی صنعتی",
          "سامانه‌های پایش (ICTS)",
          "مدیریت هوشمند کلینیک",
          "اتوماسیون زیرساخت‌های حیاتی",
        ],
        sameAs: [
          // Add real profiles when available
          "https://www.linkedin.com/company/barman-mes",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+98-31-xxxxxxx",
          contactType: "customer service",
          areaServed: "IR",
          availableLanguage: [ "Persian" ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://barman-mes.ir/#website",
        url: "https://barman-mes.ir",
        name: "بارمان محور اسپادانا",
        publisher: {
          "@id": "https://barman-mes.ir/#organization",
        },
        inLanguage: "fa-IR",
      },
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={ `${ bmsSans.variable } scroll-smooth bg-slate-50 text-slate-900` }
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
      </head>
      <body className="font-sans antialiased">
        {/* ♿ ACCESSIBILITY: Skip to Main Content */ }
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg"
        >
          پرش به محتوای اصلی
        </a>

        <RootChrome>
          <main id="main-content">{ children }</main>
        </RootChrome>
      </body>
    </html>
  );
}
