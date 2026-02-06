// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import RootChrome from "@/components/layout/RootChrome";
import Script from "next/script";

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
      },
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={ `${ bmsSans.variable } scroll-smooth text-slate-900` }
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
      </head>

      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg"
        >
          پرش به محتوای اصلی
        </a>

        <RootChrome>
          {/* IMPORTANT: main must NOT set a background */ }
          <main id="main-content">{ children }</main>
        </RootChrome>
      </body>
    </html>
  );
}
