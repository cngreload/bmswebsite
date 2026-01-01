import Link from "next/link";
import Image from "next/image";
import { fetchBlogPosts, fetchBlogCategories } from "@/lib/server-api";

export const dynamic = "force-dynamic";

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
    const sp = ( await searchParams ) ?? {};
    const page = Number( sp.page ?? "1" ) || 1;
    const categorySlug = sp.category;
    const query = sp.q;

    const [ data, categories ] = await Promise.all( [
        fetchBlogPosts( { page, pageSize: 9, category: categorySlug, q: query } ),
        fetchBlogCategories(),
    ] );

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header Section */ }
            <section className="bg-white border-b border-slate-200 pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-bms-dark mb-4">مرکز دانش و اخبار</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        آخرین تحولات صنعت، به‌روزرسانی‌های بارمان و مقالات تخصصی در حوزه هوشمندسازی
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-6xl py-12">

                {/* Simple Category Filter */ }
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    <Link
                        href="/news"
                        className={ `px-4 py-2 rounded-full text-sm transition-all ${ !categorySlug
                            ? "bg-bms-primary text-white shadow-md"
                            : "bg-white text-slate-600 border border-slate-200 hover:border-bms-primary"
                            }` }
                    >
                        همه مطالب
                    </Link>
                    { categories.map( ( cat ) => (
                        <Link
                            key={ cat.id }
                            href={ `/news?category=${ cat.slug }` }
                            className={ `px-4 py-2 rounded-full text-sm transition-all ${ categorySlug === cat.slug
                                ? "bg-bms-primary text-white shadow-md"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-bms-primary"
                                }` }
                        >
                            { cat.name }
                        </Link>
                    ) ) }
                </div>

                {/* Posts Grid */ }
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { data.items.map( ( post ) => (
                        <Link
                            key={ post.id }
                            href={ `/news/${ post.slug }` }
                            className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Placeholder or Actual Image */ }
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                { post.coverImageUrl ? (
                                    <Image
                                        src={ post.coverImageUrl }
                                        alt={ post.title }
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <span className="text-4xl font-bold opacity-20">BMS</span>
                                    </div>
                                ) }
                                {/* Category Badge */ }
                                { post.category && (
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-bms-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                                        { post.category.name }
                                    </div>
                                ) }
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-3 text-xs text-slate-400">
                                    { post.publishedAt
                                        ? new Intl.DateTimeFormat( "fa-IR", { dateStyle: "long" } ).format( new Date( post.publishedAt ) )
                                        : "پیش‌نویس" }
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-bms-primary transition-colors line-clamp-2">
                                    { post.title }
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                                    { post.excerpt || "برای مطالعه جزئیات بیشتر کلیک کنید..." }
                                </p>

                                <div className="flex items-center text-bms-primary text-sm font-medium mt-auto">
                                    ادامه مطلب
                                    <svg className="w-4 h-4 mr-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ) ) }
                </div>

                {/* Empty State */ }
                { data.items.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-500">مقاله‌ای در این بخش یافت نشد.</p>
                    </div>
                ) }

                {/* Pagination */ }
                { data.totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                        { Array.from( { length: data.totalPages } ).map( ( _, i ) => (
                            <Link
                                key={ i }
                                href={ `/news?page=${ i + 1 }${ categorySlug ? `&category=${ categorySlug }` : "" }` }
                                className={ `w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${ page === i + 1
                                    ? "bg-bms-dark text-white shadow-lg"
                                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }` }
                            >
                                { i + 1 }
                            </Link>
                        ) ) }
                    </div>
                ) }
            </div>
        </div>
    );
}