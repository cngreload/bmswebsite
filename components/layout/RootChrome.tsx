"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootChrome ( { children }: { children: React.ReactNode; } )
{
    const pathname = usePathname();

    // Hide public chrome on admin + sign-in routes
    const isAdmin = pathname.startsWith( "/admin" );
    const isSignIn = pathname.startsWith( "/sign-in" );

    if ( isAdmin || isSignIn ) return <>{ children }</>;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{ children }</main>
            <Footer />
        </div>
    );
}
