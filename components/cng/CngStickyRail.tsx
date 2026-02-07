"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------
 * SECTIONS
 * ------------------------------------------------*/
const SECTIONS = [
    { id: "hero", label: "معرفی سامانه" },
    { id: "products", label: "معماری و محصولات" },
    { id: "story", label: "مجوز" },
    { id: "pilotvideo", label: "پیلوت رسمی" },
    { id: "why", label: "چرایی ملی" },
    { id: "how", label: "چگونگی عملکرد" },
    { id: "future", label: "آینده و توسعه" },
    { id: "action", label: "همکاری" },
];

export default function CngStickyRail ()
{
    const [ active, setActive ] = useState( "hero" );
    const [ hasScrolled, setHasScrolled ] = useState( false );

    /* Fade-in after scroll */
    useEffect( () =>
    {
        const onScroll = () =>
        {
            if ( window.scrollY > 48 ) setHasScrolled( true );
        };
        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    /* Section observer */
    useEffect( () =>
    {
        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( e ) =>
                {
                    if ( e.isIntersecting ) setActive( e.target.id );
                } );
            },
            { rootMargin: "-42% 0px -52% 0px" }
        );

        SECTIONS.forEach( ( { id } ) =>
        {
            const el = document.getElementById( id );
            if ( el ) observer.observe( el );
        } );

        return () => observer.disconnect();
    }, [] );

    const activeIndex = SECTIONS.findIndex( ( s ) => s.id === active );

    return (
        <nav
            aria-label="ناوبری بخش‌های سامانه ICTS"
            className={ cn(
                "hidden lg:block sticky top-28 mt-24 h-fit",
                "transition-all duration-700 ease-out",
                hasScrolled ? "opacity-100" : "opacity-0 translate-y-3"
            ) }
        >
            <div className="relative">
                {/* Vertical spine */ }
                <span
                    aria-hidden
                    className="
            absolute right-0 top-0 h-full w-[2px]
            bg-gradient-to-b
            from-transparent
            via-[#0B3C5D]/40
            to-transparent
          "
                />

                <ul
                    className="
            flex flex-col gap-6
            pr-6
            max-w-[170px]
          "
                >
                    { SECTIONS.map( ( s, idx ) =>
                    {
                        const state =
                            s.id === active
                                ? "active"
                                : activeIndex > idx
                                    ? "past"
                                    : "future";

                        return (
                            <li key={ s.id } className="relative">
                                <Link
                                    href={ `#${ s.id }` }
                                    aria-current={ state === "active" ? "location" : undefined }
                                    className={ cn(
                                        "group block transition-all duration-500 ease-out",
                                        "text-[22px] xl:text-[24px] font-extrabold leading-tight",

                                        /* COLOR SYSTEM */
                                        state === "active" &&
                                        "text-[#0B3C5D] translate-x-[-12px]",
                                        state === "past" &&
                                        "text-[#0B3C5D]/30",
                                        state === "future" &&
                                        "text-[#0B3C5D] hover:text-[#0B3C5D] hover:translate-x-[-8px]"
                                    ) }
                                >
                                    {/* Red dot */ }
                                    <span
                                        className={ cn(
                                            "absolute right-[-16px] top-1/2 -translate-y-1/2 rounded-full",
                                            "transition-all duration-500 ease-out",
                                            state === "active"
                                                ? "h-3 w-3 bg-[#D72638] shadow-[0_0_0_7px_rgba(215,38,56,0.35)]"
                                                : "h-2 w-2 bg-[#D72638]/40 group-hover:bg-[#D72638]"
                                        ) }
                                    />

                                    { s.label }
                                </Link>
                            </li>
                        );
                    } ) }
                </ul>

                {/* CTA */ }
                <div className="mt-14 pr-6">
                    <Link
                        href="#action"
                        className="
              inline-flex items-center justify-center
              rounded-xl
              px-5 py-3
              text-sm font-extrabold
              text-white
              bg-gradient-to-r
              from-[#D72638]
              via-[#F4C430]
              to-[#0B3C5D]
              shadow-lg shadow-[#D72638]/30
              transition-all
              hover:scale-[1.05]
              hover:shadow-xl
            "
                    >
                        شروع همکاری
                    </Link>
                </div>
            </div>
        </nav>
    );
}