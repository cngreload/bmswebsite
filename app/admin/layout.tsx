import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AdminShell from "@/components/admin/AdminShell";

export const runtime = "nodejs";

export default async function AdminLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    const { userId } = await auth();

    // Not signed in -> go to admin sign-in (NOT /sign-in)
    if ( !userId ) redirect( "/admin/sign-in" );

    // Support both env names (pick one, but this avoids deployment mismatch)
    const adminId =
        process.env.CLERK_ADMIN_USER_ID?.trim() ||
        process.env.ADMIN_CLERK_USER_ID?.trim();

    // If admin id is not set -> show auth-error page (more diagnosable than looping sign-in)
    if ( !adminId ) redirect( "/admin/auth-error?reason=missing_admin_id" );

    // Signed in but not the single admin
    if ( userId !== adminId ) redirect( "/admin/forbidden" );

    return <AdminShell>{ children }</AdminShell>;
}
