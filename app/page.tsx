// app/page.tsx
import Link from "next/link";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";
import { Metadata } from "next";

// 🧠 HOMEPAGE METADATA
export const metadata: Metadata = {
  title: "بارمان محور اسپادانا | هوشمندسازی زیرساخت‌های حیاتی کشور",
  description:
    "بارمان محور اسپادانا، شرکت دانش‌بنیان فعال در طراحی و پیاده‌سازی سامانه‌های بومی پایش و کنترل (ICTS)، پلتفرم‌های دیجیتال و هوشمندسازی زیرساخت‌های حساس انرژی و سلامت.",
  alternates: {
    canonical: "https://barman-mes.ir",
  },
};

export default function HomePage ()
{
  return (
    <main className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      {/* HERO */ }
      <section className="relative pt-12 md:pt-20 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bms-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT CONTENT */ }
            <div className="lg:col-span-7 space-y-8 text-right order-1">

              {/* 1. Updated Main Headline */ }
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-bms-primary border border-blue-100">
                راهکارهای بومی دیجیتال برای کسب و کار و زیرساخت‌های ملی              </div>
              {/* 2. Sub-headline + 3. Stylish Tagline */ }
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-slate-900 leading-[1.15] tracking-tight">
                  هوشمندسازی <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                    دارایی‌های حیاتی
                  </span>
                </h1>       <p className="text-sm md:text-base font-light text-slate-500 tracking-wider opacity-80">
                  (دریچه شما به انقلاب صنعتی چهارم)
                </p>
              </div>

              {/* 4. Updated Description Paragraph */ }
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
                ما با ادغام فناوری‌های نوین در عرصه سخت‌افزار و نرم‌افزار و رشد راهکارهای همه‌جانبه،
                فاصله میان <span className="font-medium text-slate-900">عملیات میدانی</span> و
                <span className="font-medium text-slate-900"> تصمیم‌سازی مدیریتی </span>
                را از بین می‌بریم.
              </p>

              {/* CTA */ }
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/cng-automation"
                  className="inline-flex items-center justify-center rounded-xl bg-bms-primary px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-bms-primary/25 hover:-translate-y-0.5 transition"
                >
                  راهکارهای انرژی (CNG)
                </Link>
                <Link
                  href="/clinicans"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-base font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  پلتفرم سلامت (Clinicans)
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */ }
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-8 md:p-10 text-white">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#10B981,transparent_55%)]" />

                <div className="relative z-20 space-y-6 text-right">
                  {/* HEADER */ }
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <span className="text-sm font-bold text-bms-accent">WIT</span>
                    </div>
                    <span className="text-xs text-slate-300 tracking-wide">
                      Always On • Real-Time
                    </span>
                  </div>

                  {/* 5. TITLE UPDATE */ }
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    تکنولوژی هوشمندسازی جهانی
                  </h3>

                  {/* CORE VISION STATEMENT */ }
                  <p className="text-slate-200 text-sm md:text-[15px] leading-relaxed">
                    ما در <strong className="text-white">بارمان محور اسپادانا</strong>،
                    طلایه‌دار تحقق رؤیای انسان مدرن هستیم — رؤیایی که در آن،
                    <strong className="text-white">
                      { " " }
                      کنترل کامل و بی‌درنگ{ " " }
                    </strong>
                    بر املاک و کسب‌وکار، از هر جا و در هر لحظه، ممکن است؛ با
                    <strong className="text-white">
                      { " " }
                      دقت، امنیت و آرامش خاطر
                    </strong>
                    .
                  </p>

                  {/* SIGNALS */ }
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-emerald-300 font-mono">
                      Real-Time Control
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-300 font-mono">
                      Secure Infrastructure
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-purple-300 font-mono">
                      Digital Platforms
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-yellow-300 font-mono">
                      Industrial Systems
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bms-primary/30 blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + CONTENT */ }
      {/* 5. Refactored Component */ }
      <TechStrip />

      <div className="container mx-auto px-4 max-w-6xl space-y-24 pb-20">
        {/* 6. Refactored Component */ }
        <WorldsGrid />
        <ProductBands />
      </div>
    </main>
  );
}