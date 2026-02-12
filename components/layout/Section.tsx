import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps
{
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
    /** 
     * white: #FFFFFF
     * subtle: #F8FAFC (Slate 50)
     * dark: #0F172A (BMS Dark)
     */
    variant?: "white" | "subtle" | "dark" | "none";
    /** Control the max-width of the content */
    size?: "default" | "narrow" | "wide" | "full";
    /** 
     * default: 80px - 128px (Corporate Standard)
     * large: 128px - 192px (Hero/High Impact)
     */
    spacing?: "default" | "large" | "none";
    /** Optional border standard */
    border?: boolean;
}

export const Section = ( {
    children,
    id,
    className,
    containerClassName,
    variant = "none",
    size = "default",
    spacing = "default",
    border = false,
}: SectionProps ) =>
{
    const variants = {
        white: "bg-white",
        subtle: "bg-slate-50",
        dark: "bg-bms-dark text-white",
        none: "",
    };

    const sizes = {
        default: "max-w-7xl",
        narrow: "max-w-4xl",
        wide: "max-w-[1500px]",
        full: "max-w-full",
    };

    const spacings = {
        default: "py-20 lg:py-32",
        large: "py-24 lg:py-48",
        none: "py-0",
    };

    return (
        <section
            id={ id }
            className={ cn(
                variants[ variant ],
                spacings[ spacing ],
                border && "border-t border-slate-200",
                "relative w-full overflow-hidden",
                className
            ) }
        >
            <div className={ cn( "mx-auto px-6 lg:px-12", sizes[ size ], containerClassName ) }>
                { children }
            </div>
        </section>
    );
};