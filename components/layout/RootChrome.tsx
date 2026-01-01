// components/layout/RootChrome.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootChrome ( { children }: { children: React.ReactNode; } )
{
    const pathname = usePathname();

    const isAdmin = pathname.startsWith( "/admin" );
    const isSignIn = pathname.startsWith( "/sign-in" );

    if ( isAdmin || isSignIn ) return <>{ children }</>;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* 
        ♿ ACCESSIBILITY: ID for Skip Link target 
        ⚡ PERFORMANCE: flex-1 ensures footer stays at bottom even on empty pages
      */}
            <main id="main-content" className="flex-1">
                { children }
            </main>
            <Footer />
        </div>
    );
}