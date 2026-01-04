import type { Metadata } from "next";
// Components
import Hero from "@/components/home/HeroSection";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";
import NewsPreview from "@/components/news/NewsPreview";

export const metadata: Metadata = {
  title: "بارمان محور اسپادانا | هوشمندسازی زیرساخت‌های حیاتی کشور",
  description:
    "بارمان محور اسپادانا، شرکت دانش‌بنیان فعال در طراحی و پیاده‌سازی سامانه‌های بومی پایش و کنترل (ICTS)، پلتفرم‌های دیجیتال و هوشمندسازی زیرساخت‌های حساس انرژی و سلامت.",
  alternates: {
    canonical: "https://barman-mes.ir",
  },
  openGraph: {
    title: "بارمان محور اسپادانا | انقلاب صنعتی چهارم",
    description: "تکنولوژی‌های بومی برای هوشمندسازی صنایع، انرژی و سلامت.",
    type: "website",
    locale: "fa_IR",
  }
};

export default function HomePage ()
{
  return (
    <main className="flex flex-col gap-16 md:gap-24 overflow-x-hidden bg-slate-50">

      {/* 1. HERO SECTION (Specific User Content) */ }
      <Hero />

      {/* 2. TRUST INDICATORS */ }
      <TechStrip />

      {/* 3. MAIN CONTENT AREA */ }
      <div className="container mx-auto px-4 max-w-6xl space-y-24 pb-12">
        <WorldsGrid />
        <ProductBands />
      </div>

      {/* 4. NEWSROOM PREVIEW (Placed before Footer) */ }
      <NewsPreview />

    </main>
  );
}