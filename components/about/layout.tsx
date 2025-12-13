import type { ReactNode } from "react";

export const metadata = {
    title: "معرفی بارمان محور اسپادانا",
};

export default function AboutLayout ( { children }: { children: ReactNode; } )
{
    return (
        <main className="pt-[76px] bg-slate-50/60 min-h-screen">
            <div className="container py-8">
                { children }
            </div>
        </main>
    );
}
