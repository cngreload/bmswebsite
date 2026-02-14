// app/cng-automation/layout.tsx
import CngMacosDock from "@/components/cng/CngMacosDock";

/**
 * 🏗️ UNIVERSAL PRODUCT LAYOUT - REFORMED
 * Strategy: Absolute Navigation (macOS Dock) + Unrestricted Content Flow.
 * Result: No horizontal scroll, maximum readability on mobile.
 */
export default function CngProductLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="relative w-full bg-white selection:bg-bms-primary/10">
            {/* 
          🚀 UNIVERSAL NAVIGATION
          The macOS Dock sits on a higher Z-index and does not affect the
          DOM flow of the article.
      */}
            <CngMacosDock />

            <div className="relative w-full">
                {/* 📄 MAIN CONTENT CORE 
            Uses a centered max-width container that remains wide on desktop 
            but provides safe gutters on mobile.
        */}
                <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full min-w-0 pb-32">
                    { children }
                </article>
            </div>

            {/* Visual Hard-Stop Visual Anchor */ }
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
    );
}