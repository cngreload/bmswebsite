import type { Metadata } from "next";

// Components
import Hero from "@/components/home/HeroSection";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";
import NewsPreview from "@/components/news/NewsPreview";

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
    <main
      className="
        flex flex-col min-h-screen
        bg-slate-50
        overflow-x-hidden
        antialiased
      "
    >
      {/* ===================== HERO ===================== */ }
      <section
        aria-label="معرفی بارمان"
        className="
          relative z-20
          -mb-16 md:-mb-24 lg:-mb-32
        "
      >
        <Hero />
      </section>

      {/* ===================== WORLDS + TECH (ZIGZAG) ===================== */ }
      <section
        aria-label="حوزه‌های فعالیت و تکنولوژی"
        className="
          relative z-30
          mx-auto w-full max-w-[1500px]
          px-4 sm:px-6 md:px-8 lg:px-10
          mt-2
          pb-20 md:pb-28 lg:pb-36
        "
      >
        {/* Floating surface */ }
        <div
          className="
            relative
            bg-white
            rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]
            shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]
            border border-slate-100/70
            overflow-hidden
          "
        >
          {/* Subtle top accent */ }
          <div
            className="
              pointer-events-none
              absolute inset-x-0 top-0 h-px
              bg-gradient-to-r
              from-transparent via-amber-400/30 to-transparent
            "
          />

          {/* SVG Clip Paths */ }
          <div className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
            <svg>
              <defs>
                <clipPath
                  id="zigzag-world-desktop"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M1 0 L0.08 0 L0.12 0.1 L0.04 0.2 L0.12 0.3 L0.04 0.4 L0.12 0.5 L0.04 0.6 L0.12 0.7 L0.04 0.8 L0.12 0.9 L0.08 1 L1 1 Z" />
                </clipPath>

                <clipPath
                  id="zigzag-world-mobile"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M0 0 L1 0 L1 0.86 L0.9 0.9 L0.8 0.82 L0.7 0.9 L0.6 0.82 L0.5 0.9 L0.4 0.82 L0.3 0.9 L0.2 0.82 L0.1 0.9 L0 0.86 Z" />
                </clipPath>

                <clipPath
                  id="zigzag-tech-desktop"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M0 0 L0.92 0 L0.88 0.1 L0.96 0.2 L0.88 0.3 L0.96 0.4 L0.88 0.5 L0.96 0.6 L0.88 0.7 L0.96 0.8 L0.88 0.9 L0.92 1 L0 1 Z" />
                </clipPath>

                <clipPath
                  id="zigzag-tech-mobile"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M0 0.14 L0.1 0.1 L0.2 0.18 L0.3 0.1 L0.4 0.18 L0.5 0.1 L0.6 0.18 L0.7 0.1 L0.8 0.18 L0.9 0.1 L1 0.14 L1 1 L0 1 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* WORLDS */ }
            <div className="relative isolate">
              <div
                className="hidden lg:block h-full w-full"
                style={ { clipPath: "url(#zigzag-world-desktop)" } }
              >
                <WorldsGrid />
              </div>
              <div
                className="block lg:hidden w-full"
                style={ { clipPath: "url(#zigzag-world-mobile)" } }
              >
                <WorldsGrid />
              </div>
            </div>

            {/* TECH */ }
            <div className="relative isolate">
              <div
                className="hidden lg:block h-full w-full"
                style={ { clipPath: "url(#zigzag-tech-desktop)" } }
              >
                <TechStrip />
              </div>
              <div
                className="block lg:hidden w-full"
                style={ { clipPath: "url(#zigzag-tech-mobile)" } }
              >
                <TechStrip />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */ }
      <section
        aria-label="محصولات و پلتفرم‌ها"
        className="
          relative
          bg-gradient-to-b from-white to-slate-50/80
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <ProductBands />
        </div>
      </section>

      {/* ===================== NEWS ===================== */ }
      <section
        aria-label="آخرین اخبار و مقالات"
        className="
          relative
          py-24 md:py-32 lg:py-40
          bg-white
          border-t border-slate-100
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <NewsPreview />
        </div>
      </section>

      {/* Footer fade */ }
      <div
        aria-hidden="true"
        className="
          h-40
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />
    </main>
  );
}
