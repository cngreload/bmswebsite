// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import RootChrome from "@/components/layout/RootChrome";
import Script from "next/script"; // Import for JSON-LD

// ⚡ PERFORMANCE: Zero Layout Shift Font Loading
const bmsSans = IBM_Plex_Sans_Arabic( {
  subsets: [ "arabic", "latin" ],
  weight: [ "300", "400", "500", "600", "700" ],
  variable: "--font-bms-sans",
  display: "swap", // Ensure text is visible immediately
} );

export const metadata: Metadata = {
  metadataBase: new URL( "https://barman-mes.ir" ), // Replace with actual domain
  title: {
    template: "%s | بارمان محور اسپادانا",
    default: "بارمان محور اسپادانا | سامانه‌های هوشمندسازی",
  },
  description:
    "شرکت دانش‌بنیان بارمان محور اسپادانا؛ پیشرو در سامانه‌های بومی پایش (ICTS)، مدیریت کلینیک (Clinicans) و هوشمندسازی صنعتی.",
  // 🧠 CRAWLER EMPATHY: Open Graph for social sharing signals
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "Barman Mehvar Spadana",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout ( { children }: { children: React.ReactNode; } )
{
  // 🧠 CRAWLER EMPATHY: Organization Schema (Knowledge Graph)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Barman Mehvar Spadana",
    "alternateName": "بارمان محور اسپادانا",
    "url": "https://barman-mes.ir",
    "logo": "https://barman-mes.ir/logo.png", // Ensure you have a logo file
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-31-xxxxxxx", // Add actual phone
      "contactType": "customer service",
      "areaServed": "IR",
      "availableLanguage": "Persian"
    }
  };

  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
      </head>
      <body className={ `${ bmsSans.variable } font-sans bg-slate-50 text-slate-900 antialiased` }>
        {/* ♿ ACCESSIBILITY: Skip Link for Screen Readers */ }
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-bms-primary focus:rounded-md focus:shadow-lg">
          پرش به محتوای اصلی
        </a>

        <RootChrome>{ children }</RootChrome>
      </body>
    </html>
  );
}