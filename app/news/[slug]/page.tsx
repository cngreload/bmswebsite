// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchBlogPostBySlug } from "@/lib/server-api";

export const dynamic = "force-dynamic";

type NewsDetailParams = {
    slug?: string | string[];
};

export default async function NewsDetailPage ( {
    params,
}: {
    params: Promise<NewsDetailParams>;
} )
{
    const p = ( ( await params ) ?? {} ) as NewsDetailParams;

    const rawSlug =
        typeof p.slug === "string"
            ? p.slug
            : Array.isArray( p.slug )
                ? p.slug[ 0 ]
                : undefined;

    if ( !rawSlug )
    {
        notFound();
    }

    let post;
    try
    {
        post = await fetchBlogPostBySlug( rawSlug );
    } catch ( err )
    {
        if ( err instanceof Error && err.message === "NOT_FOUND" )
        {
            notFound();
        }
        throw err;
    }

    const publishedLabel = post.publishedAt
        ? new Intl.DateTimeFormat( "fa-IR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        } ).format( new Date( post.publishedAt ) )
        : null;

    return (
        <main className="bg-slate-50/60 py-10">
            <div className="mx-auto max-w-3xl px-4">
                {/* breadcrumb / section label */ }
                <p className="mb-2 text-[11px] font-medium text-bms-primary md:text-xs">
                    اخبار و مقالات بارمان
                </p>

                {/* title */ }
                <h1 className="mb-3 text-xl font-bold leading-relaxed text-bms-dark md:text-2xl">
                    { post.title }
                </h1>

                {/* meta */ }
                <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-500 md:text-xs">
                    { publishedLabel && (
                        <span className="inline-flex items-center gap-1">
                            <span className="h-[6px] w-[6px] rounded-full bg-emerald-500" />
                            <span>منتشر شده در { publishedLabel }</span>
                        </span>
                    ) }

                    { post.categories && post.categories.length > 0 && (
                        <span className="inline-flex flex-wrap items-center gap-2">
                            <span className="text-slate-400">دسته‌ها:</span>
                            { post.categories.map( ( cat: { id: string; name: string; } ) => (
                                <span
                                    key={ cat.id }
                                    className="rounded-full bg-slate-100 px-2 py-[3px] text-[10px] text-slate-700"
                                >
                                    { cat.name }
                                </span>
                            ) ) }
                        </span>
                    ) }

                    { post.tags && post.tags.length > 0 && (
                        <span className="inline-flex flex-wrap items-center gap-2">
                            <span className="text-slate-400">تگ‌ها:</span>
                            { post.tags.map( ( tag: { id: string; name: string; } ) => (
                                <span
                                    key={ tag.id }
                                    className="rounded-full bg-bms-primary-soft px-2 py-[3px] text-[10px] text-bms-primary"
                                >
                                    { tag.name }
                                </span>
                            ) ) }
                        </span>
                    ) }
                </div>

                {/* content */ }
                <article className="rounded-2xl border border-slate-200 bg-white/95 p-4 text-[13px] leading-7 text-slate-700 shadow-sm md:p-6 md:text-sm">
                    { post.content ? (
                        post.content.split( /\n{2,}/ ).map( ( para: string, idx: number ) => (
                            <p key={ idx } className="mb-3 last:mb-0">
                                { para }
                            </p>
                        ) )
                    ) : (
                        <p className="text-slate-400">
                            محتوای این خبر هنوز ثبت نشده است.
                        </p>
                    ) }
                </article>
            </div>
        </main>
    );
}
