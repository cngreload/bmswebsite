// app/admin/(protected)/blog/page.tsx
import { fetchAdminBlogPosts } from "@/lib/admin-api";
import { AdminBlogTable } from "@/components/admin/blog/AdminBlogTable";

export const dynamic = "force-dynamic";

type AdminBlogPageSearchParams = {
    page?: string | string[];
    q?: string | string[];
    status?: string | string[];
};

export default async function AdminBlogPage ( {
    searchParams,
}: {
    searchParams?: Promise<AdminBlogPageSearchParams>;
} )
{
    const sp = ( ( await searchParams ) ?? {} ) as AdminBlogPageSearchParams;

    const rawPage =
        typeof sp.page === "string"
            ? sp.page
            : Array.isArray( sp.page )
                ? sp.page[ 0 ]
                : "1";

    const currentPage = Number( rawPage ?? "1" ) || 1;

    const q =
        typeof sp.q === "string"
            ? sp.q
            : Array.isArray( sp.q )
                ? sp.q[ 0 ]
                : undefined;

    const rawStatus =
        typeof sp.status === "string"
            ? sp.status
            : Array.isArray( sp.status )
                ? sp.status[ 0 ]
                : undefined;

    const status =
        rawStatus === "PUBLISHED" || rawStatus === "DRAFT" ? rawStatus : "ALL";

    const data = await fetchAdminBlogPosts( {
        page: currentPage,
        pageSize: 20,
        q,
        status,
    } );

    return (
        <div className="mx-auto max-w-6xl px-4 py-6">
            <AdminBlogTable
                posts={ data.items }
                page={ data.page }
                totalPages={ data.totalPages }
            />
        </div>
    );
}
