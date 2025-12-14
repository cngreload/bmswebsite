// components/admin/blog/AdminBlogTable.tsx
"use client";

import { useRouter } from "next/navigation";
import { AdminBlogPost } from "@/lib/admin-api";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AdminBlogTableProps = {
    posts: AdminBlogPost[];
    page: number;
    totalPages: number;
};

export function AdminBlogTable ( {
    posts,
    page,
    totalPages,
}: AdminBlogTableProps )
{
    const router = useRouter();
    const [ deletingId, setDeletingId ] = useState<string | null>( null );

    const goToNew = () =>
    {
        router.push( "/admin/blog/new" );
    };

    const goToEdit = ( id: string ) =>
    {
        router.push( `/admin/blog/${ id }` );
    };

    const handleDelete = async ( id: string ) =>
    {
        if (
            !window.confirm(
                "آیا از حذف این پست اطمینان دارید؟ این عملیات قابل بازگشت نیست.",
            )
        )
        {
            return;
        }

        try
        {
            setDeletingId( id );
            const res = await fetch( `/api/admin/blog/posts/${ id }`, {
                method: "DELETE",
            } );

            if ( !res.ok )
            {
                alert( "خطایی در حذف پست رخ داد." );
                return;
            }

            router.refresh();
        } catch
        {
            alert( "عدم ارتباط با سرور. لطفاً دوباره تلاش کنید." );
        } finally
        {
            setDeletingId( null );
        }
    };

    return (
        <div className="space-y-4">
            {/* header */ }
            <div className="flex items-center justify-between gap-3">
                <div className="space-y-1 text-right">
                    <h1 className="text-base font-semibold text-bms-dark md:text-lg">
                        پست‌های وبلاگ
                    </h1>
                    <p className="text-[11px] text-slate-500 md:text-xs">
                        مدیریت اخبار، مقالات و به‌روزرسانی‌های محتوایی بارمان.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={ goToNew }
                    className="rounded-xl bg-bms-primary px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-bms-dark md:text-sm"
                >
                    پست جدید
                </button>
            </div>

            {/* table */ }
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="min-w-full border-separate border-spacing-0 text-right text-[11px] md:text-xs">
                    <thead className="bg-slate-50">
                        <tr>
                            <Th>عنوان</Th>
                            <Th className="hidden md:table-cell">Slug</Th>
                            <Th>وضعیت</Th>
                            <Th className="hidden md:table-cell">تاریخ انتشار</Th>
                            <Th>اقدامات</Th>
                        </tr>
                    </thead>
                    <tbody>
                        { posts.length === 0 && (
                            <tr>
                                <td
                                    colSpan={ 5 }
                                    className="px-4 py-6 text-center text-[11px] text-slate-500 md:text-xs"
                                >
                                    هنوز هیچ پستی ثبت نشده است.
                                </td>
                            </tr>
                        ) }

                        { posts.map( ( post, index ) => (
                            <tr
                                key={ post.id }
                                className={ cn(
                                    "border-t border-slate-100",
                                    index % 2 === 1 && "bg-slate-50/40",
                                ) }
                            >
                                {/* عنوان */ }
                                <Td>
                                    <div className="flex flex-col gap-1">
                                        <span className="line-clamp-2 text-[11px] font-medium text-bms-dark md:text-xs">
                                            { post.title }
                                        </span>
                                        { post.excerpt && (
                                            <span className="line-clamp-1 text-[10px] text-slate-500">
                                                { post.excerpt }
                                            </span>
                                        ) }
                                    </div>
                                </Td>

                                {/* slug */ }
                                <Td className="hidden md:table-cell text-[10px] text-slate-500">
                                    { post.slug }
                                </Td>

                                {/* status */ }
                                <Td>
                                    <span
                                        className={ cn(
                                            "inline-flex items-center rounded-full px-2 py-[3px] text-[10px]",
                                            post.status === "PUBLISHED"
                                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                                                : "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
                                        ) }
                                    >
                                        { post.status === "PUBLISHED" ? "منتشر شده" : "پیش‌نویس" }
                                    </span>
                                </Td>

                                {/* date */ }
                                <Td className="hidden md:table-cell text-[10px] text-slate-500">
                                    { post.publishedAt
                                        ? new Intl.DateTimeFormat( "fa-IR", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                        } ).format( new Date( post.publishedAt ) )
                                        : "-" }
                                </Td>

                                {/* actions */ }
                                <Td>
                                    <div className="flex items-center justify-start gap-2">
                                        <button
                                            type="button"
                                            onClick={ () => goToEdit( post.id ) }
                                            className="text-[11px] text-bms-primary hover:text-bms-dark"
                                        >
                                            ویرایش
                                        </button>
                                        <button
                                            type="button"
                                            onClick={ () => handleDelete( post.id ) }
                                            disabled={ deletingId === post.id }
                                            className="text-[11px] text-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            { deletingId === post.id ? "در حال حذف..." : "حذف" }
                                        </button>
                                    </div>
                                </Td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>

            {/* pagination placeholder */ }
            { totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs">
                    <span className="text-slate-500">
                        صفحه { page } از { totalPages }
                    </span>
                </div>
            ) }
        </div>
    );
}

function Th ( {
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
} )
{
    return (
        <th
            className={ cn(
                "px-4 py-3 text-[11px] font-medium text-slate-600 md:text-xs",
                className,
            ) }
        >
            { children }
        </th>
    );
}

function Td ( {
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
} )
{
    return (
        <td className={ cn( "px-4 py-3 align-top", className ) }>{ children }</td>
    );
}
