// app/news/page.tsx
import
{
    fetchBlogPosts,
    fetchBlogCategories,
    fetchBlogTags,
} from "@/lib/server-api";
import { BlogCard } from "@/components/admin/blog/BlogCard";
import { BlogFilterBar } from "@/components/admin/blog/BlogFilterBar";

export const dynamic = "force-dynamic";

type NewsPageSearchParams = {
    page?: string | string[];
    category?: string | string[];
    tag?: string | string[];
    q?: string | string[];
};

export default async function NewsPage ( {
    searchParams,
}: {
    searchParams?: Promise<NewsPageSearchParams>;
} )
{
    const sp = ( ( await searchParams ) ?? {} ) as NewsPageSearchParams;

    const rawPage =
        typeof sp.page === "string"
            ? sp.page
            : Array.isArray( sp.page )
                ? sp.page[ 0 ]
                : "1";

    const currentPage = Number( rawPage ?? "1" ) || 1;

    const currentCategory =
        typeof sp.category === "string"
            ? sp.category
            : Array.isArray( sp.category )
                ? sp.category[ 0 ]
                : undefined;

    const currentTag =
        typeof sp.tag === "string"
            ? sp.tag
            : Array.isArray( sp.tag )
                ? sp.tag[ 0 ]
                : undefined;

    const currentQuery =
        typeof sp.q === "string"
            ? sp.q
            : Array.isArray( sp.q )
                ? sp.q[ 0 ]
                : undefined;

    const [ postsData, categories, tags ] = await Promise.all( [
        fetchBlogPosts( {
            page: currentPage,
            pageSize: 9,
            category: currentCategory,
            tag: currentTag,
            q: currentQuery,
        } ),
        fetchBlogCategories(),
        fetchBlogTags(),
    ] );

    const { items, page, totalPages } = postsData;

    const normalizedParams: { [ key: string ]: string | undefined; } = {
        category: currentCategory,
        tag: currentTag,
        q: currentQuery,
    };

    return (
        <main className="bg-slate-50/60 py-10">
            <div className="mx-auto max-w-6xl px-4">
                {/* هدر سکشن */ }
                <header className="mb-4 space-y-2 text-right">
                    <p className="text-[11px] font-medium text-bms-primary">
                        مرکز اخبار و محتوا
                    </p>
                    <h1 className="text-xl font-bold text-bms-dark md:text-2xl">
                        تازه‌ترین خبرها و تحلیل‌های بارمان
                    </h1>
                    <p className="max-w-2xl text-[12px] leading-relaxed text-slate-600 md:text-sm">
                        در این بخش، گزارش پروژه‌ها، به‌روزرسانی‌های فنی، مقالات تخصصی و
                        خبرهای مرتبط با سامانه‌های پایش و کنترل بارمان را می‌توانید دنبال
                        کنید.
                    </p>
                </header>

                {/* نوار فیلتر */ }
                <BlogFilterBar
                    categories={ categories }
                    tags={ tags }
                    currentCategorySlug={ currentCategory }
                    currentTagSlug={ currentTag }
                    currentQuery={ currentQuery }
                />

                {/* اگر خبری نیست */ }
                { items.length === 0 && (
                    <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500">
                        محتوایی مطابق فیلترهای انتخاب‌شده یافت نشد.
                    </div>
                ) }

                {/* لیست کارت‌ها */ }
                { items.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        { items.map( ( post ) => (
                            <BlogCard key={ post.id } post={ post } />
                        ) ) }
                    </div>
                ) }

                {/* pagination */ }
                { totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-3 text-xs">
                        <PaginationButton
                            disabled={ page <= 1 }
                            href={
                                page > 1
                                    ? buildPageHref( page - 1, normalizedParams )
                                    : undefined
                            }
                        >
                            صفحه قبلی
                        </PaginationButton>
                        <span className="text-slate-500">
                            صفحه { page } از { totalPages }
                        </span>
                        <PaginationButton
                            disabled={ page >= totalPages }
                            href={
                                page < totalPages
                                    ? buildPageHref( page + 1, normalizedParams )
                                    : undefined
                            }
                        >
                            صفحه بعدی
                        </PaginationButton>
                    </div>
                ) }
            </div>
        </main>
    );
}

function buildPageHref (
    targetPage: number,
    searchParams?: { [ key: string ]: string | undefined; },
)
{
    const params = new URLSearchParams();
    params.set( "page", String( targetPage ) );

    if ( searchParams?.category ) params.set( "category", searchParams.category );
    if ( searchParams?.tag ) params.set( "tag", searchParams.tag );
    if ( searchParams?.q ) params.set( "q", searchParams.q );

    const qs = params.toString();
    return qs ? `/news?${ qs }` : "/news";
}

type PaginationButtonProps = {
    disabled?: boolean;
    href?: string;
    children: React.ReactNode;
};

function PaginationButton ( { disabled, href, children }: PaginationButtonProps )
{
    if ( disabled || !href )
    {
        return (
            <span className="cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-400">
                { children }
            </span>
        );
    }

    return (
        <a
            href={ href }
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 shadow-sm transition hover:border-bms-primary/50 hover:text-bms-primary"
        >
            { children }
        </a>
    );
}
