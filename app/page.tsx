// app/page.tsx
import Link from "next/link";
import Script from "next/script";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";
import { Metadata } from "next";

// 🧠 CRAWLER EMPATHY: Explicit Metadata for the Homepage
export const metadata: Metadata = {
  title: "بارمان محور اسپادانا | هوشمندسازی زیرساخت‌های ملی",
  description: "پیشگام در طراحی و تولید سامانه‌های بومی کنترل و مانیتورینگ برای صنایع نفت، گاز (ICTS) و سلامت (Clinicans).",
  alternates: {
    canonical: "https://barman-mes.ir",
  }
};

export default function HomePage ()
{
  // 🧠 CRAWLER EMPATHY: JSON-LD for the Website entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Barman Mehvar Spadana",
    "url": "https://barman-mes.ir",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://barman-mes.ir/news?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
      />

      {/* 
        ⚡ HERO SECTION
        Strategy: Pure CSS visuals for instant LCP (Largest Contentful Paint).
        No heavy images to fetch.
      */}
      <section className="relative pt-12 md:pt-20 lg:pt-32 pb-16 overflow-hidden">
        {/* Ambient Background Glow */ }
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bms-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* 
              🎨 CONTENT (Right in RTL)
              Semantic Flow: h1 -> p -> nav (buttons)
            */}
            <div className="lg:col-span-7 space-y-8 text-right order-1">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-bms-primary border border-blue-100"
                role="status"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-bms-primary"></span>
                </span>
                پیشگام در هوشمندسازی زیرساخت‌های ملی
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-slate-900 leading-[1.15] tracking-tight">
                هوشمندسازی <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                  دارایی‌های حیاتی
                </span>
              </h1>

              <h2 className="sr-only">زیرساخت‌های هوشمند انرژی و سلامت</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
                ما فاصله میان <span className="font-medium text-slate-900">عملیات میدانی</span> و <span className="font-medium text-slate-900">هوش مدیریتی</span> را حذف می‌کنیم.
                طراحی زیرساخت‌های بومی و امن برای کنترل، پایش و تصمیم‌سازی در صنایع حساس.
              </p>

              {/* 🎯 ACTIONABLE BUTTONS (44px+ height) */ }
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/cng-automation"
                  className="group inline-flex items-center justify-center rounded-xl bg-bms-primary px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-bms-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bms-primary focus:ring-offset-2"
                  aria-label="مشاهده راهکارهای هوشمندسازی CNG"
                >
                  راهکارهای انرژی (CNG)
                  <svg className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                <Link
                  href="/clinicans"
                  className="group inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  aria-label="مشاهده پلتفرم سلامت کلینیکانز"
                >
                  پلتفرم سلامت (Clinicans)
                </Link>
              </div>
            </div>

            {/* 
              ⚡ VISUAL ABSTRACT (Left in RTL)
              LCP Candidate: Using CSS gradients instead of heavy images for instant load.
            */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-8 md:p-10 text-white transform transition-transform hover:scale-[1.01] duration-500">
                {/* Abstract Data Flow Visuals */ }
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_0%,#10B981,transparent_50%)]"></div>

                <div className="relative z-20 space-y-8 text-right">
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner">
                      <svg className="w-7 h-7 text-bms-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-500/50"></span>
                      <span className="h-2 w-2 rounded-full bg-yellow-500/50"></span>
                      <span className="h-2 w-2 rounded-full bg-green-500/50"></span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">پلتفرم یکپارچه WIT</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      هسته‌ای قدرتمند که داده‌های میدان را به بینش استراتژیک تبدیل می‌کند. امنیت در لایه سخت‌افزار، هوشمندی در لایه نرم‌افزار.
                    </p>
                  </div>

                  {/* Feature Tags */ }
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-emerald-300 font-mono">IoT Industrial</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-300 font-mono">Big Data</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-purple-300 font-mono">Real-time</span>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Element - Kept minimal to avoid painting costs */ }
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bms-primary/30 blur-[80px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        🏗️ TECH STRIP
        Trust signals via technology stack visualization
      */}
      <TechStrip />

      {/* 
        🌍 MAIN CONTENT
        Progressive disclosure of services
      */}
      <div className="container mx-auto px-4 max-w-6xl space-y-24 pb-20">
        <WorldsGrid />
        <ProductBands />
      </div>
    </div>
  );
}