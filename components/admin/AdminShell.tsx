"use client";

import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
    { href: "/admin/posts", label: "پست‌ها" },
    { href: "/admin/blog/categories", label: "دسته‌بندی‌ها" },
    { href: "/admin/blog/tags", label: "تگ‌ها" },
    { href: "/admin/contact-messages", label: "پیام‌ها" },
];

export default function AdminShell ( { children }: { children: React.ReactNode; } )
{
    const pathname = usePathname();

    return (
        <ClerkProvider signInUrl="/sign-in">
            <div className="min-h-screen bg-odoo-50">
                <header className="bg-white border-b border-odoo-200">
                    <div className="container h-16 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/admin/posts" className="font-bold text-bms-dark">
                                Admin
                            </Link>

                            <nav className="hidden md:flex items-center gap-2">
                                { nav.map( ( n ) =>
                                {
                                    const active = pathname === n.href || pathname.startsWith( n.href + "/" );
                                    return (
                                        <Link
                                            key={ n.href }
                                            href={ n.href }
                                            className={ `px-3 py-2 rounded-xl text-sm border transition ${ active
                                                ? "bg-bms-primary-soft text-bms-primary border-bms-primary/20"
                                                : "border-transparent text-odoo-700 hover:bg-odoo-50"
                                                }` }
                                        >
                                            { n.label }
                                        </Link>
                                    );
                                } ) }
                            </nav>
                        </div>

                        <UserButton />
                    </div>

                    <div className="md:hidden border-t border-odoo-100">
                        <div className="container py-2 flex flex-wrap gap-2">
                            { nav.map( ( n ) =>
                            {
                                const active = pathname === n.href || pathname.startsWith( n.href + "/" );
                                return (
                                    <Link
                                        key={ n.href }
                                        href={ n.href }
                                        className={ `px-3 py-2 rounded-xl text-xs border transition ${ active
                                            ? "bg-bms-primary-soft text-bms-primary border-bms-primary/20"
                                            : "border-odoo-200 text-odoo-700 hover:bg-odoo-50"
                                            }` }
                                    >
                                        { n.label }
                                    </Link>
                                );
                            } ) }
                        </div>
                    </div>
                </header>

                <main className="container py-8">{ children }</main>
            </div>
        </ClerkProvider>
    );
}
