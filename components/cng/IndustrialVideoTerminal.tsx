// components/ui/IndustrialVideoTerminal.tsx
"use client";

import React, { useRef, useState } from "react";
import Script from "next/script";
import { LuPlay, LuActivity } from "react-icons/lu";

interface VideoProps
{
    src: string;
    poster: string;
    title: string;
    description: string;
    uploadDate: string; // ISO 8601 (e.g., '2025-01-01')
    duration?: string; // ISO 8601 (e.g., 'PT1M30S')
}

export default function IndustrialVideoTerminal ( {
    src,
    poster,
    title,
    description,
    uploadDate,
    duration = "PT2M", // Default duration if unknown
}: VideoProps )
{
    const videoRef = useRef<HTMLVideoElement>( null );
    const [ isPlaying, setIsPlaying ] = useState( false );

    // 🧠 UX: Toggle Play/Pause
    const togglePlay = () =>
    {
        if ( videoRef.current )
        {
            if ( isPlaying )
            {
                videoRef.current.pause();
            } else
            {
                videoRef.current.play();
            }
            setIsPlaying( !isPlaying );
        }
    };

    // 🧠 TRICK: Force browser to render first frame if poster fails
    const videoSrc = src.includes( "#" ) ? src : `${ src }#t=0.001`;

    // 🧠 SEO: VideoObject Schema for Google Indexing
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": title,
        "description": description,
        "thumbnailUrl": [ poster ],
        "uploadDate": uploadDate,
        "duration": duration,
        "contentUrl": src,
        "embedUrl": src, // Or the actual page URL if hosted elsewhere
    };

    return (
        <>
            {/* Schema Injection */ }
            <Script
                id={ `video-schema-${ title.replace( /\s+/g, "-" ) }` }
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <div className="relative group w-full max-w-2xl mx-auto">

                {/* 
          🎨 VISUAL: Industrial Glow Backdrop 
          Adds depth and separates the terminal from the page background.
        */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-bms-primary/30 to-emerald-500/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                {/* 
          🏗️ TERMINAL CHASSIS 
          The main container styled to look like hardware.
        */}
                <div className="relative rounded-2xl bg-slate-900 p-2 ring-1 ring-white/10 shadow-2xl overflow-hidden">

                    {/* Screen Bezel Reflection */ }
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-30" />

                    {/* Video Container */ }
                    <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-video group/video">
                        <video
                            ref={ videoRef }
                            src={ videoSrc }
                            poster={ poster }
                            className="w-full h-full object-cover"
                            playsInline
                            controls={ isPlaying } // Native controls only when playing
                            onPlay={ () => setIsPlaying( true ) }
                            onPause={ () => setIsPlaying( false ) }
                        />

                        {/* 
               🎮 HUD OVERLAY (Active when paused)
               Provides context and "Click to Play" affordance.
            */}
                        { !isPlaying && (
                            <div
                                className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group-hover/video:bg-slate-900/30"
                                onClick={ togglePlay }
                            >
                                {/* Play Button */ }
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover/video:scale-110">
                                    <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_linear_infinite]" />
                                    <LuPlay className="h-8 w-8 text-white ml-1 fill-white" />
                                </div>

                                {/* Status Indicators */ }
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-[10px] font-mono text-red-400 font-bold tracking-widest uppercase">REC</span>
                                </div>

                                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                                    <LuActivity className="h-3 w-3 text-emerald-400" />
                                    <span className="text-[10px] font-mono text-emerald-400 font-bold">SYSTEM ONLINE</span>
                                </div>
                            </div>
                        ) }
                    </div>

                    {/* 
             📝 CAPTION AREA (Integrated into chassis) 
          */}
                    <div className="relative mt-4 mb-2 px-4 text-center">
                        {/* Tech Decoration Lines */ }
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                        <h3 className="text-sm font-bold text-slate-200 mb-1">
                            { title }
                        </h3>
                        <p className="text-[10px] md:text-xs text-slate-50 font-medium leading-relaxed max-w-md mx-auto">
                            { description }
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}