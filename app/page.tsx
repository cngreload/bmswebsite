import type { Metadata } from "next";

// Components
import Hero from "@/components/home/HeroSection";
import DualFeatureCard from "@/components/home/DualFeatureCard";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import NewsPreview from "@/components/news/NewsPreview";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "بارمان | تکنولوژی برای زندگی امن‌تر و هوشمندتر",
  description:
    "ما پیچیدگی‌های صنعت را به آسایش تبدیل می‌کنیم. سامانه هوشمند سوخت (ICTS)، پلتفرم سلامت (Clinicans) و پایش صنعتی؛ زیرساخت‌های بومی که می‌توانید به آن‌ها تکیه کنید.",
  alternates: {
    canonical: "https://barman-mes.ir",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "بارمان | زیرساخت‌های هوشمند برای آینده ایران",
    description:
      "توسعه سامانه‌های بومی پایش، کنترل و تصمیم‌سازی هوشمند. جایی که داده‌های میدانی به آرامش مدیریتی تبدیل می‌شوند.",
    url: "https://barman-mes.ir",
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
      {/* 1. HERO SECTION */ }
      <Hero />

      {/* 2. STRATEGIC PLATFORMS */ }
      <Section variant="subtle" spacing="large" id="primary-platforms">
        <header className="mb-16 md:mb-24 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-bms-primary opacity-70">
            Core Solutions
          </span>
          <h2 className="text-slate-900 font-black">پیشگام در هوشمندسازی زیرساخت‌های ملی</h2>
        </header>

        <DualFeatureCard
          leftCard={ {
            title: "سامانه هوشمند سوخت (ICTS)",
            subtitle: "پایش لحظه‌ای، مدیریت هوشمند و امنیت کامل جایگاه‌های CNG با معماری Edge Computing و پروتکل‌های صنعتی اختصاصی",
            ctaText: "مشاهده مستندات فنی",
            ctaLink: "/cng-automation",
            backgroundImage: "/images/icts-bg.jpg",
            category: "INDUSTRIAL SAFETY", // Added missing prop
          } }
          rightCard={ {
            title: "پلتفرم سلامت کلینیکانز",
            subtitle: "سیستم یکپارچه مدیریت کلینیک‌های پزشکی با هوش مصنوعی، اتوماسیون فرآیندها و تحلیل داده‌های سلامت در زمان واقعی",
            ctaText: "درخواست دمو",
            ctaLink: "/clinicans",
            backgroundImage: "/ctest.jpg",
            category: "HEALTH TECH", // Added missing prop
          } }
          separatorText="WIT"
        />
      </Section>

      {/* 3. CORE TECHNOLOGY (The ZigZag Overlay) */ }
      <section
        aria-label="حوزه‌های فعالیت و تکنولوژی"
        className="relative z-30 mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 -mt-20 md:-mt-32 lg:-mt-40"
      >
        <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-soft-lg border border-slate-100/70 overflow-hidden">

          {/* Grid setup with controlled height */ }
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white min-h-[550px] lg:min-h-[650px]">

            {/* WORLDS */ }
            <div className="relative isolate">
              <div className="hidden lg:block h-full w-full absolute inset-0" style={ { clipPath: "url(#zigzag-world-desktop)" } }>
                <WorldsGrid />
              </div>
              <div className="block lg:hidden h-full w-full" >
                <WorldsGrid />
              </div>
            </div>

            {/* TECH */ }
            <div className="relative isolate lg:mt-0">
              <div className="hidden lg:block h-full w-full absolute inset-0" style={ { clipPath: "url(#zigzag-tech-desktop)" } }>
                <TechStrip />
              </div>
              <div className="block lg:hidden h-full w-full" >
                <TechStrip />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRODUCT PORTFOLIO */ }


      {/* 5. KNOWLEDGE HUB */ }
      <Section variant="subtle" border id="latest-news">
        <NewsPreview />
      </Section>
    </div>
  );
}