import HeroSection from "@/components/home/HeroSection";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import ProductBands from "@/components/home/ProductBands";

export default function HomePage ()
{
  return (
    <div className="bms-page">
      {/* هیرو + سطر تکنولوژی‌ها به هم چسبیده‌تر */ }
      <div className="space-y-6 md:space-y-8">
        <HeroSection />
        <TechStrip />
      </div>

      {/* بنتو حوزه‌ها */ }
      <div className="mt-12 md:mt-16 space-y-16">
        <WorldsGrid />

        {/* باندهای محصول ICTS، Clinicans و همکاری */ }
        <ProductBands />
      </div>
    </div>
  );
}
