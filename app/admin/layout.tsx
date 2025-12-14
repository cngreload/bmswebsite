import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminLayout ( { children }: { children: React.ReactNode; } )
{
    const { userId } = await auth();
    if ( !userId ) redirect( "/sign-in" );

    const adminId = process.env.ADMIN_CLERK_USER_ID?.trim();
    if ( !adminId || userId !== adminId ) redirect( "/sign-in" );

    return <AdminShell>{ children }</AdminShell>;
}
