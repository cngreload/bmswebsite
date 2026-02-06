import CngStickyRail from "@/components/cng/CngStickyRail";
import CngSectionSwitcherMobile from "@/components/cng/CngSectionSwitcherMobile";

export default function CngProductLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
            {/* Mobile + Tablet Section Switcher */ }
            <div className="lg:hidden sticky top-16 md:top-20 z-40">
                <CngSectionSwitcherMobile />
            </div>

            {/* Desktop Layout */ }
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
                <CngStickyRail />
                <article className="min-w-0">{ children }</article>
            </div>
        </div>
    );
}
