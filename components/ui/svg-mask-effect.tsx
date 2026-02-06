"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MaskContainerProps
{
    children?: React.ReactNode;
    revealText?: React.ReactNode;
    className?: string;
}

export function MaskContainer ( {
    children,
    revealText,
    className,
}: MaskContainerProps )
{
    const [ isActive, setIsActive ] = useState( false );
    const [ mouse, setMouse ] = useState( { x: 0, y: 0 } );
    const ref = useRef<HTMLDivElement | null>( null );

    useEffect( () =>
    {
        const el = ref.current;
        if ( !el ) return;

        const move = ( e: MouseEvent ) =>
        {
            const rect = el.getBoundingClientRect();
            setMouse( {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            } );
        };

        el.addEventListener( "mousemove", move );
        return () => el.removeEventListener( "mousemove", move );
    }, [] );

    return (
        <div
            ref={ ref }
            className={ cn( "relative overflow-hidden", className ) }
            onMouseEnter={ () => setIsActive( true ) }
            onMouseLeave={ () => setIsActive( false ) }
            onClick={ () => setIsActive( ( v ) => !v ) }
        >
            { !isActive && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                    { [ 0, 1, 2, 3 ].map( ( i ) => (
                        <motion.span
                            key={ i }
                            className="absolute rounded-full border-2 border-emerald-400/60"
                            initial={ { width: 30, height: 30, opacity: 0.5 } }
                            animate={ { width: 200, height: 200, opacity: 0 } }
                            transition={ {
                                duration: 3.2,
                                ease: "easeOut",
                                repeat: Infinity,
                                delay: i * 0.8,
                            } }
                        />
                    ) ) }
                </div>
            ) }

            <motion.div
                className="
          absolute inset-0 z-20
          [mask-image:url(/mask.svg)]
          [mask-repeat:no-repeat]
          bg-black
        "
                animate={ {
                    maskPosition: `${ mouse.x - 450 }px ${ mouse.y - 450 }px`,
                    maskSize: isActive ? "900px" : "0px",
                } }
                transition={ {
                    maskSize: { duration: 0.6 },
                    maskPosition: { duration: 0.4 },
                } }
            >
                <div className="relative z-30">{ children }</div>
            </motion.div>

            <div className="relative z-10">{ revealText }</div>
        </div>
    );
}
