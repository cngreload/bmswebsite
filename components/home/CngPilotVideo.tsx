"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CngPilotVideo ( {
    src,
    poster,
    ariaLabel,
}: {
    src: string;
    poster?: string;
    ariaLabel?: string;
} )
{
    const videoRef = useRef<HTMLVideoElement | null>( null );
    const [ isPlaying, setIsPlaying ] = useState( false );

    useEffect( () =>
    {
        const v = videoRef.current;
        if ( !v ) return;

        const onPlay = () => setIsPlaying( true );
        const onPause = () => setIsPlaying( false );

        v.addEventListener( "play", onPlay );
        v.addEventListener( "pause", onPause );

        return () =>
        {
            v.removeEventListener( "play", onPlay );
            v.removeEventListener( "pause", onPause );
        };
    }, [] );

    const handlePlay = async () =>
    {
        const v = videoRef.current;
        if ( !v ) return;
        try
        {
            await v.play();
        } catch
        {
            // Prevent crash if browser autoplay policies block programmatic play
        }
    };

    // 🧠 FIX: Appending #t=0.001 forces browsers (Safari/Chrome) to pre-render 
    // the first frame as a thumbnail if no poster is active.
    const videoSrc = src.includes( "#" ) ? src : `${ src }#t=0.001`;

    return (
        <div
            className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-video shadow-soft-lg group"
            aria-label={ ariaLabel }
        >
            <video
                ref={ videoRef }
                controls
                playsInline
                preload="metadata"
                poster={ poster }
                className="absolute inset-0 h-full w-full object-cover bg-slate-900"
            >
                <source src={ videoSrc } type="video/mp4" />
                مرورگر شما امکان پخش فیلم را ندارد
            </video>

            {/* Overlay Gradient - Improves text readability over the thumbnail */ }
            { !isPlaying && (
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/10 z-10 transition-opacity duration-300"
                />
            ) }

            {/* Custom Play Button Overlay */ }
            { !isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
                    <button
                        type="button"
                        onClick={ handlePlay }
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-bms-primary shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                        aria-label="پخش ویدیو"
                    >
                        <span className="mr-1 translate-x-[2px] text-2xl">▶</span>
                    </button>
                    <span className="text-xs font-bold text-white/90 drop-shadow-md bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        مشاهده ویدیو
                    </span>
                </div>
            ) }
        </div>
    );
}