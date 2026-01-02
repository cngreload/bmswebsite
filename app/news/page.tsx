import type { Metadata } from "next";
import Script from "next/script";

import { fetchBlogPosts } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "اخبار و مقالات | مرکز دانش بارمان",
    description:
        "آخرین تحولات صنعت هوشمندسازی، گزارش‌های فنی ICTS و مقالات تخصصی سلامت دیجیتال.",
    alternates: {
        canonical: "https://barman-mes.ir/news",
    },
};

type SearchParams = {
    page?: string;
    category?: string;
    q?: string;
};

export default async function PublicNewsPage ( {
    searchParams,
}: {
    searchParams?: Promise<SearchParams>;
} )
{
    // ✅ NEXT 15 REQUIRED
    const resolvedSearchParams = await searchParams;

    const page = Number( resolvedSearchParams?.page ?? "1" ) || 1;
    const categorySlug = resolvedSearchParams?.category;
    const query = resolvedSearchParams?.q ?? "";

    const data = await fetchBlogPosts( {
        page,
        pageSize: 9,
        category: categorySlug,
        q: query,
    } );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "مرکز دانش بارمان",
        url: "https://barman-mes.ir/news",
        description: metadata.description,
        publisher: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
            logo: {
                "@type": "ImageObject",
                url: "https://barman-mes.ir/logo.png",
            },
        },
        blogPost: data.items.map( ( post ) => ( {
            "@type": "BlogPosting",
            headline: post.title,
            image:
                post.coverImageUrl ||
                "https://barman-mes.ir/images/blog-placeholder.jpg",
            datePublished: post.publishedAt,
            author: {
                "@type": "Organization",
                name: "Barman Team",
            },
        } ) ),
    };

    return (
        <>
            <Script
                id="json-ld-blog"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* JSX صفحه */ }
        </>
    );
}
