// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchBlogPostBySlug } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage ( {
    params,
}: {
    params: Promise<{ slug: string; }>;
} )
{
    const { slug } = await params;
    if ( !slug ) notFound();

    try
    {
        const post = await fetchBlogPostBySlug( slug );

        // Prepare the date label for display
        const publishedLabel = post.publishedAt
            ? new Intl.DateTimeFormat( "fa-IR", {
                year: "numeric",
                month: "long",
                day: "2-digit",
            } ).format( new Date( post.publishedAt ) )
            : null;

        return (
            <main className="bg-slate-50/60 py-10">
                <div className="mx-auto max-w-3xl px-4 text-right">
                    {/* Breadcrumb / Category */ }
                    <div className="mb-2 flex items-center justify-start gap-2 text-xs text-bms-primary">
                        <span>اخبار و مقالات</span>
                        { post.category && (
                            <>
                                <span className="text-slate-300">/</span>
                                <span>{ post.category.name }</span>
                            </>
                        ) }
                    </div>

                    {/* Title */ }
                    <h1 className="mb-3 text-xl font-bold leading-relaxed text-bms-dark md:text-2xl">
                        { post.title }
                    </h1>

                    {/* Meta Info */ }
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        { publishedLabel && (
                            <span className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                <span>منتشر شده در { publishedLabel }</span>
                            </span>
                        ) }
                        { post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                                { post.tags.map( ( tag ) => (
                                    <span key={ tag.id } className="text-slate-400">
                                        #{ tag.name }
                                    </span>
                                ) ) }
                            </div>
                        ) }
                    </div>

                    {/* Content */ }
                    <article className="rounded-2xl border border-slate-200 bg-white p-6 text-[13px] leading-8 text-slate-700 shadow-sm md:p-8 md:text-sm">
                        { post.content ? (
                            post.content.split( /\n{2,}/ ).map( ( para, i ) => (
                                <p key={ i } className="mb-4 last:mb-0">
                                    { para }
                                </p>
                            ) )
                        ) : (
                            <p className="text-slate-400">محتوایی برای این خبر ثبت نشده است.</p>
                        ) }
                    </article>
                </div>
            </main>
        );
    } catch
    {
        // Logic Fix: Omit the catch variable entirely. 
        // This is valid in modern JS and bypasses the unused variable error.
        notFound();
    }
}