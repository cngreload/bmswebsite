import type { Metadata } from "next";

// Components
import Hero from "@/components/home/HeroSection";
import DualFeatureCard from "@/components/home/DualFeatureCard";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import WitSection from "@/components/home/WitSection";
import ProductBands from "@/components/home/ProductBands";
import NewsPreview from "@/components/news/NewsPreview";
import { Section } from "@/components/layout/Section";

/**
 * 🏢 BARMAN CORPORATE MAIN - ARCHITECTURAL REFORMATION
 * Strategy: Unified Editorial Masterclass
 * Spacing: Strict 8pt Grid & High-Contrast Section Handlers
 */

export const metadata: Metadata = {
  title: "بارمان | تکنولوژی برای زندگی امن‌تر و هوشمندتر",
  description:
    "توسعه سامانه‌های بومی پایش، کنترل و تصمیم‌سازی هوشمند. زیرساخت‌های بومی که می‌توانید به آن‌ها تکیه کنید.",
  alternates: {
    canonical: "https://co-bms.ir",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "بارمان | زیرساخت‌های هوشمند برای آینده ایران",
    url: "https://co-bms.ir",
    siteName: "Barman Mehvar Spadana",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "بارمان محور اسپادانا - هوشمندسازی دارایی‌های حیاتی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بارمان | زیرساخت‌های هوشمند برای آینده ایران",
    description:
      "سامانه‌های بومی پایش، کنترل و تصمیم‌سازی هوشمند در حوزه انرژی، صنعت و سلامت.",
  },
};

export default function HomePage ()
{
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden antialiased">

      {/* ===================== CHAPTER 1: THE HOOK ===================== 
          Hero Section: Direct entrance, full viewport impact.
      */}
      <Hero />


      {/* ===================== CHAPTER 3: TECHNICAL MOAT ===================== 
          Editorial Header + Bento Grid (Worlds, Tech, Wit)
      */}
      <Section variant="white" spacing="large" id="technical-moat">
        <header className="mb-20 md:mb-32 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
              Infrastructure_Governance / WIT_Core
            </span>
          </div>
          <h2 className="text-slate-950 font-black text-4xl md:text-6xl tracking-tightest leading-none">
            حاکمیت داده و <span className="text-bms-primary">تکنولوژی بومی</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-light leading-relaxed">
            تلفیق مهندسی سخت‌افزار و معماری نرم‌افزار برای خلق پایداری مطلق در عملیات‌های حساس صنعتی و درمانی.
          </p>
        </header>

        <div className="relative z-30 -mt-8">
          <div className="relative bg-white rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] border border-slate-100 overflow-hidden ring-1 ring-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b lg:border-b-0 lg:border-l border-slate-100">
                <WorldsGrid />
              </div>
              <div>
                <TechStrip />
              </div>
              <div className="lg:col-span-2">
                <WitSection />
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* ===================== CHAPTER 2: STRATEGIC ASSETS ===================== 
          Editorial Header + Dual Feature Cards (Desktop Only)
      */}
      <Section variant="subtle" spacing="large" id="primary-platforms">
        <header className="mb-20 md:mb-32 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-bms-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
              Core_Strategic_Solutions / v4.2
            </span>
          </div>
          <h2 className="text-slate-950 font-black text-4xl md:text-6xl tracking-tightest leading-none">
            پیشگام در هوشمندسازی <br /> <span className="text-bms-primary">زیرساخت‌های ملی</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-light leading-relaxed">
            تجمیع داده‌های میدانی، امنیت پدافندی و تصمیم‌سازی هوشمند در یک اکوسیستم بومی و نفوذناپذیر.
          </p>
        </header>



        {/* 
            🚀 RESPONSIVE SWITCH: 
            DualFeatureCard is for high-density cinematic desktop experiences. 
        */}
        <div className="hidden lg:block">
          <DualFeatureCard
            leftCard={ {
              title: "سامانه هوشمند سوخت (ICTS)",
              subtitle: "پایش لحظه‌ای، مدیریت هوشمند و امنیت کامل جایگاه‌های CNG با معماری Edge Computing اختصاصی",
              ctaText: "مشاهده مستندات فنی",
              ctaLink: "/cng-automation",
              backgroundImage: "/images/icts-bg.jpg",
              category: "INDUSTRIAL SAFETY",
            } }
            rightCard={ {
              title: "پلتفرم سلامت کلینیکانز",
              subtitle: "سیستم یکپارچه مدیریت کلینیک‌های پزشکی با هوش مصنوعی و تحلیل داده‌های سلامت در زمان واقعی",
              ctaText: "درخواست دمو",
              ctaLink: "/clinicans",
              backgroundImage: "/ctest.jpg",
              category: "HEALTH TECH",
            } }
            separatorText="WIT"
          />
        </div>
      </Section>

      {/* ===================== CHAPTER 4: PRODUCT PORTFOLIO ===================== 
          Mobile-friendly list view of products.
      */}
      <div className="lg:hidden">
        <Section variant="subtle" spacing="large" id="product-bands" border>
          <header className="mb-20 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-bms-primary font-mono">
                Operational_System_Portfolio
              </span>
            </div>
            <h2 className="text-slate-950 font-black text-4xl tracking-tightest leading-none">
              سبد محصولات و <span className="text-bms-primary">راهکارهای اجرایی</span>
            </h2>
            <p className="max-w-xl mx-auto text-sm text-slate-500 font-light leading-relaxed">
              سامانه‌های عملیاتی بارمان در ابعاد ملی، نبض تداوم خدمات را در دست دارند.
            </p>
          </header>

          <ProductBands />
        </Section>
      </div>

      {/* ===================== CHAPTER 5: INTELLIGENCE HUB ===================== 
          Final journalistic section for News and Archive.
      */}
      <Section variant="subtle" spacing="large" border id="latest-news" className="pb-32">

        <NewsPreview />
      </Section>
    </div>
  );
}