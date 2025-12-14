import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import RootChrome from "@/components/layout/RootChrome";

const bmsSans = IBM_Plex_Sans_Arabic( {
  subsets: [ "arabic", "latin" ],
  weight: [ "300", "400", "500", "600", "700" ],
  variable: "--font-bms-sans",
  display: "swap",
} );

export const metadata: Metadata = {
  title: "بارمان محور اسپادانا | سامانه‌های بومی هوشمندسازی کسب‌وکار و صنعت",
  description:
    "شرکت بارمان محور اسپادانا؛ توسعه‌دهنده سامانه‌های بومی پایش، کنترل و هوشمندسازی برای زیرساخت‌های حیاتی، جایگاه‌های CNG و کلینیک‌های سلامت و زیبایی.",
};

export default function RootLayout ( { children }: { children: React.ReactNode; } )
{
  return (
    <html lang="fa" dir="rtl">
      <body className={ `${ bmsSans.variable } font-sans bg-slate-50 text-slate-900` }>
        <RootChrome>{ children }</RootChrome>
      </body>
    </html>
  );
}
