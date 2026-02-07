// layout.tsx
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#145C98",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL( "https://barman-mes.ir" ),
  title: {
    template: "%s | بارمان محور اسپادانا",
    default: "بارمان | هوشمندسازی دارایی‌های حیاتی",
  },
  description:
    "بارمان با سامانه ICTS و پلتفرم Clinicans، نبض زیرساخت‌های انرژی و سلامت را در دست می‌گیرد. تکنولوژی بومی برای محافظت از دارایی‌های حیاتی کشور.",
  alternates: {
    canonical: "https://barman-mes.ir",
  },
  robots: { index: true, follow: true },

  // SEO polish
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "بارمان محور اسپادانا",
    url: "https://barman-mes.ir",
  },
  twitter: {
    card: "summary_large_image",
  },

  // PWA / favicon readiness
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
        alternateName: "بارمان",
        url: "https://barman-mes.ir",
        logo: "https://barman-mes.ir/logo.png",
        foundingCountry: "IR",
        description: "Leading provider of Smart Infrastructure and Vital Asset Management solutions.",
      },
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={ `${ bmsSans.variable } scroll-smooth text-slate-900 antialiased` }
    >
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
      </head>

      <body className="bg-slate-50 min-h-screen flex flex-col">
        {/* Skip link */ }
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] rounded-2xl bg-bms-primary px-8 py-4 text-white font-semibold shadow-xl transition-all duration-300"
        >
          پرش به محتوای اصلی
        </a>

        <RootChrome>
          <main id="main-content" className="flex-1 w-full relative overflow-hidden">
            { children }
          </main>
        </RootChrome>
      </body>
    </html>
  );
}