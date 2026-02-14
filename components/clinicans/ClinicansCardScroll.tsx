"use client";

import React, { useRef } from "react";
import Link from "next/link"; // Import Link
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu"; // Import Icons
import { CARDS } from "./constants";
import { CardData } from "./types";

// Helper for classes
function cn ( ...classes: ( string | undefined | null | false )[] )
{
  return classes.filter( Boolean ).join( " " );
}

const Card = ( {
  data,
  index,
  total,
  progress,
}: {
  data: CardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
} ) =>
{
  const step = 1 / total;
  const start = step * index;
  const end = start + step;

  // Animation Logic
  const opacity = useTransform(
    progress,
    [ start, start + 0.1, end - 0.1, end ],
    [ 0, 1, 1, 0 ]
  );

  const scale = useTransform(
    progress,
    [ start, start + 0.1, end ],
    [ 0.85, 1, 1.1 ]
  );

  const y = useTransform(
    progress,
    [ start, start + 0.1, end ],
    [ "50px", "0px", "-50px" ]
  );

  const blur = useTransform(
    progress,
    [ start, start + 0.1, end - 0.1, end ],
    [ "10px", "0px", "0px", "10px" ]
  );

  const display = useTransform( progress, ( v ) =>
    ( v >= start && v <= end ) ? "flex" : "none"
  );

  return (
    <motion.div
      style={ {
        opacity,
        scale,
        y,
        filter: `blur(${ blur })`,
        display,
        zIndex: index,
      } }
      className="absolute inset-0 items-center justify-center px-6 perspective-1000 flex"
    >
      <div
        className={ cn(
          "w-full max-w-3xl aspect-[4/3] md:aspect-[16/9] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between p-8 md:p-12 transition-colors duration-500",
          "bg-slate-950/90 backdrop-blur-xl"
        ) }
      >
        {/* Subtle Gradient Spot */ }
        <div
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[80px] opacity-20 pointer-events-none mix-blend-screen"
          style={ { backgroundColor: data.color } }
        />

        {/* --- Top Row: Profile & ID --- */ }
        <div className="flex justify-between items-start relative z-10 w-full border-b border-white/5 pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5"
              style={ { boxShadow: `0 0 15px ${ data.color }15` } }
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={ { backgroundColor: data.color } } />
            </div>
            <span className="text-slate-500 font-mono text-xs tracking-[0.2em] uppercase">
              Expert Profile
            </span>
          </div>
          <span className="text-2xl font-mono text-white/40">0{ data.id }</span>
        </div>

        {/* --- Middle: Content --- */ }
        <div className="relative z-10 flex flex-col justify-center h-full text-left space-y-4" dir="ltr">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
            { data.title }
          </h2>
          <div className="w-12 h-1 bg-white/10 rounded-full" />
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
            { data.hook }
          </p>
        </div>

        {/* --- Bottom: Footer with Tags & CTA --- */ }
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 pt-6 border-t border-white/5" dir="ltr">

          {/* Tags (Left) */ }
          <div className="flex flex-wrap gap-3">
            { data.tags.map( ( tag, i ) => (
              <div
                key={ i }
                className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-slate-400 text-xs md:text-sm font-medium"
              >
                <span>{ tag }</span>
              </div>
            ) ) }
          </div>

          {/* CTA Button (Right) */ }
          <Link
            href={ data.href }
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span>View Profile</span>
            <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

        </div>
      </div>
    </motion.div>
  );
};

const ClinicansCardScroll = () =>
{
  const containerRef = useRef<HTMLDivElement>( null );

  const { scrollYProgress } = useScroll( {
    target: containerRef,
    offset: [ "start start", "end end" ],
  } );

  return (
    // HEIGHT: 600vh for smooth scroll timing
    <div ref={ containerRef } className="h-[600vh] w-full relative bg-slate-950">

      {/* Sticky Camera */ }
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background Atmosphere */ }
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-black opacity-80" />
          {/* Minimal Stars */ }
          { [ ...Array( 15 ) ].map( ( _, i ) => (
            <div
              key={ i }
              className="absolute bg-white rounded-full opacity-10"
              style={ {
                top: `${ Math.random() * 100 }%`,
                left: `${ Math.random() * 100 }%`,
                width: `${ Math.random() * 2 }px`,
                height: `${ Math.random() * 2 }px`,
              } }
            />
          ) ) }
        </div>

        {/* Cards Container */ }
        <div className="relative w-full h-full max-w-[1920px] flex items-center justify-center">
          { CARDS.map( ( card, i ) => (
            <Card
              key={ card.id }
              data={ card }
              index={ i }
              total={ CARDS.length }
              progress={ scrollYProgress }
            />
          ) ) }
        </div>

        {/* Progress Bar */ }
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-32 w-0.5 bg-white/5 rounded-full hidden md:block z-50">
          <motion.div
            className="w-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={ { height: useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "100%" ] ) } }
          />
        </div>

      </div>
    </div>
  );
};

export default ClinicansCardScroll;