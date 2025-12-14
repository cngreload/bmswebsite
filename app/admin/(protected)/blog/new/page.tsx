// app/admin/(protected)/blog/new/page.tsx
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";

export const dynamic = "force-dynamic";

export default function AdminBlogNewPage ()
{
    return <BlogPostForm mode="create" />;
}
