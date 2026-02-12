// app/cng-automation/layout.tsx
import CngMacosDock from "@/components/cng/CngMacosDock";
import CngSectionSwitcherMobile from "@/components/cng/CngSectionSwitcherMobile";

export default function CngProductLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="relative w-full bg-white">
            {/* 📱 Mobile UI: Only active on small screens */ }
            <div className="lg:hidden sticky top-[64px] z-[40] w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
                <CngSectionSwitcherMobile />
            </div>

            {/* 
          Main Container
          The macOS dock is inside here but fixed to the viewport.
      */}
            <div className="relative w-full">
                <div className="hidden lg:block">
                    <CngMacosDock />
                </div>

                <article className="mx-auto max-w-7xl w-full min-w-0 ">
                    { children }
                </article>
            </div>
        </div>
    );
}