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
            // If autoplay policies or something blocks it, user can still use native controls.
        }
    };

    return (
        <div
            className="relative overflow-hidden rounded-2xl bg-slate-900 text-white aspect-video shadow-soft-lg"
            aria-label={ ariaLabel }
        >
            <video
                ref={ videoRef }
                controls
                playsInline
                preload="metadata"
                poster={ poster }
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={ src } type="video/mp4" />
                مرورگر شما امکان پخش فیلم را ندارد
            </video>

            {/* overlay should NOT block clicks on video controls */ }
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bms-primary/30 via-bms-accent/20 to-slate-900/35" />

            { !isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <button
                        type="button"
                        onClick={ handlePlay }
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-bms-primary shadow-lg"
                    >
                        <span className="mr-0.5 translate-x-[1px] text-lg">▶</span>
                    </button>
                    <span className="text-[10px] md:text-xs text-white/85">
                        مشاهده ویدیوی پایلوت
                    </span>
                </div>
            ) }
        </div>
    );
}
