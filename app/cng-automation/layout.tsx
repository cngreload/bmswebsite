// app/cng-automation/layout.tsx
import CngMacosDock from "@/components/cng/CngMacosDock";

/**
 * 🏗️ UNIVERSAL PRODUCT LAYOUT - REFORMED
 * Strategy: Single Navigation System (macOS Dock) for all Viewports.
 * UI Standard: Zero horizontal scroll, max-width article centering.
 */
export default function CngProductLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="relative w-full bg-white overflow-x-hidden">
            {/* 
          🚀 UNIVERSAL NAVIGATION
          The macOS Dock handles its own internal responsiveness 
          and magnification logic based on screen size.
      */}
            <CngMacosDock />

            <div className="relative w-full">
                {/* 📄 MAIN CONTENT CORE */ }
                <article className="mx-auto max-w-7xl px-6 lg:px-12 w-full min-w-0 pb-32">
                    { children }
                </article>
            </div>

            {/* Visual hard-stop before global footer */ }
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
        </div>
    );
}