// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// 🧠 UPDATE: Switch to local static data
import { getNewsBySlug, getAllNews } from "@/components/news/data";
import { Metadata } from "next";
import
{
    LuCalendar,

    LuArrowRight,
    LuShare2,
    LuUser,
} from "react-icons/lu";

// ⚡ PERFORMANCE: Static Site Generation (SSG)
// This tells Next.js to pre-build these pages, no server required at runtime.
export async function generateStaticParams ()
{
    const posts = getAllNews();
    return posts.map( ( post ) => ( {
        slug: post.slug,
    } ) );
}

type Props = {
    params: Promise<{ slug: string; }>;
};

// 🧠 CRAWLER EMPATHY: Dynamic SEO Metadata from Static Data
export async function generateMetadata ( { params }: Props ): Promise<Metadata>
{
    const { slug } = await params;
    const post = getNewsBySlug( slug );

    if ( !post )
    {
        return { title: "مطلب یافت نشد" };
    }

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
            publishedTime: post.publishedAt,
            section: post.category,
            images: [ { url: post.image } ],
            locale: "fa_IR",
            siteName: "بارمان محور اسپادانا"
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.summary,
        }
    };
}

export default async function NewsDetailPage ( { params }: Props )
{
    const { slug } = await params;

    // ⚡ FETCH: Load from local constant (Instant)
    const post = getNewsBySlug( slug );

    if ( !post )
    {
        notFound();
    }

    // Optional: Fetch related posts based on IDs in the data

    // 🧠 CRAWLER EMPATHY: Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [ post.image ],
        "datePublished": post.publishedAt,
        "author": {
            "@type": "Organization",
            "name": post.author || "تیم تحریریه بارمان",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Barman Mehvar Spadana",
            "logo": {
                "@type": "ImageObject",
                "url": "https://barman-mes.ir/logo.png"
            }
        },
        "description": post.summary,
        "articleBody": post.content
    };

    const dateLabel = new Intl.DateTimeFormat( "fa-IR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    } ).format( new Date( post.publishedAt ) );

    return (
        <>
            <Script
                id="json-ld-article"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="min-h-screen bg-slate-50 pb-24">

                {/* 🧭 STICKY NAV */ }
                <div className="sticky top-[64px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-3 transition-all">
                    <div className="container mx-auto max-w-4xl px-4 flex items-center justify-between text-xs">
                        <Link href="/news" className="flex items-center gap-2 text-slate-600 hover:text-bms-primary transition-colors font-bold group">
                            <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <span>بازگشت به مرکز دانش</span>
                        </Link>
                        <div className="hidden sm:flex items-center gap-2 text-slate-400">
                            <span className="text-slate-500 font-medium">{ post.category }</span>
                            <span className="opacity-30">/</span>
                            <span className="truncate max-w-[200px] font-bold text-slate-800">{ post.title }</span>
                        </div>
                    </div>
                </div>

                <article className="container mx-auto max-w-4xl px-4 mt-10 md:mt-16">

                    {/* 📝 HEADER BLOCK */ }
                    <header className="mb-10 text-right space-y-6">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                            <span className="px-3 py-1 rounded-lg bg-bms-primary/10 text-bms-primary border border-bms-primary/20">
                                { post.category }
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-lg">
                                <LuCalendar className="h-3.5 w-3.5" />
                                <span>{ dateLabel }</span>
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bms-dark leading-[1.3] tracking-tight text-balance">
                            { post.title }
                        </h1>

                        <p className="text-base md:text-xl text-slate-600 leading-9 font-light border-r-4 border-slate-300 pr-6 mr-2">
                            { post.summary }
                        </p>
                    </header>

                    {/* 🖼️ HERO IMAGE */ }
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 bg-slate-200 ring-1 ring-slate-900/5">
                        <Image
                            src={ post.image }
                            alt={ post.title }
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                        />
                    </div>

                    {/* 📄 CONTENT BODY */ }
                    <div className="grid gap-10 lg:grid-cols-12">

                        {/* Main Text */ }
                        <div className="lg:col-span-12">
                            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-200 text-right">
                                {/* 
                           ⚠️ SECURITY NOTE: 
                           Since this is internal static data, dangerouslySetInnerHTML is safe.
                        */}
                                <div
                                    className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-bms-dark prose-p:text-slate-700 prose-p:leading-9 prose-p:text-justify prose-img:rounded-2xl prose-a:text-bms-primary hover:prose-a:underline prose-li:text-right"
                                    dangerouslySetInnerHTML={ { __html: post.content } }
                                />

                                {/* Reading Time Badge */ }
                                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                                        { post.readingTime }
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 👤 AUTHOR CARD */ }
                        <div className="lg:col-span-12">
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-lg mr-auto">
                                <div className="h-14 w-14 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                                    <LuUser className="h-7 w-7" />
                                </div>
                                <div className="text-right flex-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">نویسنده</p>
                                    <p className="text-base font-bold text-slate-900">{ post.author }</p>
                                    <p className="text-xs text-slate-500 mt-1">تیم فنی و مهندسی بارمان</p>
                                </div>
                                <button className="p-2 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-bms-primary transition-colors" aria-label="Share">
                                    <LuShare2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}