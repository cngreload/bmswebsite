"use client";

import React, { useRef, useState, useEffect } from "react";
import
{
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
    type MotionValue
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import
{
    LuHouse,
    LuLayers,
    LuShieldCheck,
    LuCirclePlay,
    LuTriangleAlert,
    LuCpu,
    LuNetwork,
    LuHandshake
} from "react-icons/lu";

if ( typeof window !== "undefined" )
{
    gsap.registerPlugin( ScrollTrigger );
}

const DOCK_ITEMS = [
    { id: "hero", label: "معرفی", icon: LuHouse },
    { id: "products", label: "محصولات", icon: LuLayers },
    { id: "story", label: "مجوزها", icon: LuShieldCheck },
    { id: "pilotvideo", label: "ویدیو", icon: LuCirclePlay },
    { id: "why", label: "ضرورت", icon: LuTriangleAlert },
    { id: "how", label: "فناوری", icon: LuCpu },
    { id: "future", label: "استقرار", icon: LuNetwork },
    { id: "action", label: "همکاری", icon: LuHandshake },
] as const;

type DockItem = typeof DOCK_ITEMS[ number ];

export default function CngMacosDock ()
{
    const [ active, setActive ] = useState( "hero" );
    const [ mounted, setMounted ] = useState( false );
    const dockContainerRef = useRef<HTMLDivElement>( null );
    const mouseX = useMotionValue<number>( Infinity );

    useEffect( () =>
    {
        setMounted( true );
    }, [] );

    useGSAP( () =>
    {
        if ( !mounted || !dockContainerRef.current ) return;

        gsap.set( dockContainerRef.current, { y: 0, opacity: 1 } );

        ScrollTrigger.create( {
            start: "top top",
            end: "bottom bottom",
            onUpdate: ( self ) =>
            {
                if ( self.direction === 1 && self.scroll() > 100 )
                {
                    gsap.to( dockContainerRef.current, {
                        y: 150,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.in"
                    } );
                }
                else if ( self.direction === -1 )
                {
                    gsap.to( dockContainerRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    } );
                }
            }
        } );

        ScrollTrigger.create( {
            trigger: "footer",
            start: "top bottom",
            onEnter: () =>
                gsap.to( dockContainerRef.current, { y: 150, opacity: 0, duration: 0.3 } ),
            onLeaveBack: () =>
                gsap.to( dockContainerRef.current, { y: 0, opacity: 1, duration: 0.4 } ),
        } );

        DOCK_ITEMS.forEach( ( item ) =>
        {
            ScrollTrigger.create( {
                trigger: `#${ item.id }`,
                start: "top 40%",
                end: "bottom 60%",
                onToggle: ( self ) =>
                {
                    if ( self.isActive ) setActive( item.id );
                },
            } );
        } );

        ScrollTrigger.refresh();
    }, { scope: dockContainerRef, dependencies: [ mounted ] } );

    if ( !mounted ) return null;

    return (
        <div
            ref={ dockContainerRef }
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none transition-opacity"
        >
            <motion.div
                onMouseMove={ ( e ) => mouseX.set( e.pageX ) }
                onMouseLeave={ () => mouseX.set( Infinity ) }
                className="flex items-end gap-3 px-5 py-4 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] ring-1 ring-black/5 pointer-events-auto"
                dir="rtl"
            >
                { DOCK_ITEMS.map( ( item ) => (
                    <DockIcon
                        key={ item.id }
                        mouseX={ mouseX }
                        item={ item }
                        isActive={ active === item.id }
                    />
                ) ) }
            </motion.div>
        </div>
    );
}

function DockIcon ( {
    mouseX,
    item,
    isActive,
}: {
    mouseX: MotionValue<number>;
    item: DockItem;
    isActive: boolean;
} )
{
    const ref = useRef<HTMLDivElement>( null );
    const Icon = item.icon;

    const distance = useTransform( mouseX, ( val: number ) =>
    {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    } );

    const widthSync = useTransform( distance, [ -150, 0, 150 ], [ 54, 88, 54 ] );
    const width = useSpring( widthSync, {
        mass: 0.1,
        stiffness: 180,
        damping: 15
    } );

    const scrollTo = ( id: string ) =>
    {
        const el = document.getElementById( id );
        if ( el )
        {
            const offset = 100;
            const elementPosition =
                el.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo( {
                top: elementPosition - offset,
                behavior: "smooth"
            } );
        }
    };

    return (
        <motion.div
            ref={ ref }
            style={ { width } }
            onClick={ () => scrollTo( item.id ) }
            className="group relative aspect-square flex flex-col items-center justify-center cursor-pointer"
        >
            <AnimatePresence>
                <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
                    <div className="bg-bms-dark text-white text-[11px] font-black px-4 py-2 rounded-2xl whitespace-nowrap shadow-2xl border border-white/10">
                        { item.label }
                    </div>
                    <div className="w-2.5 h-2.5 bg-bms-dark rotate-45 mx-auto -mt-1.5" />
                </div>
            </AnimatePresence>

            <div
                className={ cn(
                    "flex items-center justify-center w-full h-full rounded-2xl transition-all duration-300 border shadow-sm relative overflow-hidden",
                    isActive
                        ? "bg-bms-primary text-white border-bms-primary shadow-lg shadow-blue-500/30 scale-105"
                        : "bg-white text-slate-500 border-slate-100 hover:border-bms-primary/40 hover:text-bms-primary"
                ) }
            >
                <Icon className="w-1/2 h-1/2 relative z-10" />

                { isActive && (
                    <motion.div
                        layoutId="active-highlight"
                        className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10"
                    />
                ) }
            </div>
        </motion.div>
    );
}
