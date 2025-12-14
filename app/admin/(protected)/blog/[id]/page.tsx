// app/admin/(protected)/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";

export const dynamic = "force-dynamic";

type AdminBlogEditParams = {
    id?: string;
};

export default async function AdminBlogEditPage ( {
    params,
}: {
    params: Promise<AdminBlogEditParams>;
} )
{
    const p = ( ( await params ) ?? {} ) as AdminBlogEditParams;
    const id = p.id;

    if ( !id )
    {
        notFound();
    }

    return <BlogPostForm mode="edit" postId={ id } />;
}
