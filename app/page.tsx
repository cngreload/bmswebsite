import type { Metadata } from "next";

// Components
import Hero from "@/components/home/HeroSection";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";
import NewsPreview from "@/components/news/NewsPreview";
import WitSection from "@/components/home/WitSection";

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
  },
};

export default function HomePage ()
{
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden bg-slate-50">

      {/* 1. HERO SECTION */ }
      <Hero />

      {/* 2. CORE PLATFORM + DOMAINS (50 / 50 SPLIT) */ }
      <section className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TechStrip />
          <WorldsGrid />
        </div>
      </section>

      {/* 3. PRODUCTS / SOLUTIONS */ }
      <div className="container mx-auto px-4 max-w-6xl space-y-24 pb-12">
        <ProductBands />
      </div>

      {/* 4. NEWSROOM PREVIEW */ }
      <NewsPreview />

      <div className="container mx-auto px-4 max-w-6xl space-y-24 pb-12">
        <WitSection />
      </div>
    </div>

  );
}
