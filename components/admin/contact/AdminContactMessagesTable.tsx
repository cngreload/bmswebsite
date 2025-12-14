"use client";

import
{
    AdminContactMessage,
} from "@/lib/admin-api";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

type AdminContactMessagesTableProps = {
    messages: AdminContactMessage[];
    page: number;
    totalPages: number;
};

export function AdminContactMessagesTable ( {
    messages,
    page,
    totalPages,
}: AdminContactMessagesTableProps )
{
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [ expandedId, setExpandedId ] = useState<string | null>( null );
    const [ searchValue, setSearchValue ] = useState<string>(
        searchParams?.get( "q" ) ?? "",
    );

    const buildPageHref = ( targetPage: number ) =>
    {
        const params = new URLSearchParams( searchParams?.toString() ?? "" );
        params.set( "page", String( targetPage ) );
        const qs = params.toString();
        return qs ? `${ pathname }?${ qs }` : pathname;
    };

    const handleSearchSubmit = ( e: FormEvent ) =>
    {
        e.preventDefault();
        const params = new URLSearchParams( searchParams?.toString() ?? "" );
        if ( searchValue.trim() )
        {
            params.set( "q", searchValue.trim() );
        } else
        {
            params.delete( "q" );
        }
        params.delete( "page" );
        const qs = params.toString();
        router.push( qs ? `${ pathname }?${ qs }` : pathname );
    };

    const toggleExpand = ( id: string ) =>
    {
        setExpandedId( ( prev ) => ( prev === id ? null : id ) );
    };

    const getStatusLabelAndClass = ( status?: string | null ) =>
    {
        const s = ( status ?? "NEW" ).toUpperCase();

        if ( s === "RESOLVED" )
        {
            return {
                label: "پاسخ داده شده",
                className:
                    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
            };
        }
        if ( s === "IN_PROGRESS" )
        {
            return {
                label: "در حال پیگیری",
                className: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
            };
        }
        if ( s === "ARCHIVED" )
        {
            return {
                label: "آرشیو شده",
                className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
            };
        }
        // NEW or unknown
        return {
            label: "جدید",
            className: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
        };
    };

    return (
        <div className="space-y-4">
            {/* هدر و سرچ */ }
            <div className="flex flex-col items-stretch justify-between gap-3 md:flex-row md:items-center">
                <div className="space-y-1 text-right">
                    <h1 className="text-base font-semibold text-bms-dark md:text-lg">
                        پیام‌های تماس
                    </h1>
                    <p className="text-[11px] text-slate-500 md:text-xs">
                        درخواست‌ها و پیام‌های ارسال‌شده از فرم «تماس با ما» را در این بخش
                        مشاهده و پیگیری کنید.
                    </p>
                </div>

                <form
                    onSubmit={ handleSearchSubmit }
                    className="flex w-full items-center gap-2 md:w-auto"
                >
                    <input
                        type="text"
                        value={ searchValue }
                        onChange={ ( e ) => setSearchValue( e.target.value ) }
                        placeholder="جستجو در نام، ایمیل یا موضوع..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                    />
                    <button
                        type="submit"
                        className="whitespace-nowrap rounded-xl bg-bms-primary px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-bms-dark md:text-sm"
                    >
                        جستجو
                    </button>
                </form>
            </div>

            {/* جدول */ }
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="min-w-full border-separate border-spacing-0 text-right text-[11px] md:text-xs">
                    <thead className="bg-slate-50">
                        <tr>
                            <Th>فرستنده</Th>
                            <Th className="hidden md:table-cell">ایمیل</Th>
                            <Th>موضوع</Th>
                            <Th className="hidden md:table-cell">وضعیت</Th>
                            <Th>تاریخ</Th>
                            <Th>عملیات</Th>
                        </tr>
                    </thead>
                    <tbody>
                        { messages.length === 0 && (
                            <tr>
                                <td
                                    colSpan={ 6 }
                                    className="px-4 py-6 text-center text-[11px] text-slate-500 md:text-xs"
                                >
                                    پیامی یافت نشد.
                                </td>
                            </tr>
                        ) }

                        { messages.map( ( msg, index ) =>
                        {
                            const created = new Intl.DateTimeFormat( "fa-IR", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                            } ).format( new Date( msg.createdAt ) );

                            const statusInfo = getStatusLabelAndClass( msg.status );

                            const isExpanded = expandedId === msg.id;

                            return (
                                <tbody key={ msg.id }>
                                    <tr
                                        className={ cn(
                                            "border-t border-slate-100",
                                            index % 2 === 1 && "bg-slate-50/40",
                                        ) }
                                    >
                                        {/* فرستنده */ }
                                        <Td>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[11px] font-medium text-bms-dark md:text-xs">
                                                    { msg.name || "—" }
                                                </span>
                                                { msg.phone && (
                                                    <span className="text-[10px] text-slate-500">
                                                        { msg.phone }
                                                    </span>
                                                ) }
                                            </div>
                                        </Td>

                                        {/* ایمیل */ }
                                        <Td className="hidden md:table-cell">
                                            { msg.email ? (
                                                <a
                                                    href={ `mailto:${ msg.email }` }
                                                    className="text-[11px] text-bms-primary hover:text-bms-dark md:text-xs"
                                                >
                                                    { msg.email }
                                                </a>
                                            ) : (
                                                <span className="text-[10px] text-slate-400">—</span>
                                            ) }
                                        </Td>

                                        {/* موضوع */ }
                                        <Td>
                                            <span className="line-clamp-2 text-[11px] text-slate-700 md:text-xs">
                                                { msg.subject || "بدون موضوع" }
                                            </span>
                                        </Td>

                                        {/* وضعیت */ }
                                        <Td className="hidden md:table-cell">
                                            <span
                                                className={ cn(
                                                    "inline-flex items-center rounded-full px-2 py-[3px] text-[10px]",
                                                    statusInfo.className,
                                                ) }
                                            >
                                                { statusInfo.label }
                                            </span>
                                        </Td>

                                        {/* تاریخ */ }
                                        <Td>
                                            <span className="text-[10px] text-slate-500 md:text-xs">
                                                { created }
                                            </span>
                                        </Td>

                                        {/* عملیات */ }
                                        <Td>
                                            <button
                                                type="button"
                                                onClick={ () => toggleExpand( msg.id ) }
                                                className="text-[11px] text-bms-primary hover:text-bms-dark md:text-xs"
                                            >
                                                { isExpanded ? "بستن" : "مشاهده پیام" }
                                            </button>
                                        </Td>
                                    </tr>

                                    {/* ردیف پیام کامل */ }
                                    { isExpanded && (
                                        <tr className="border-t border-slate-100 bg-slate-50/80">
                                            <td colSpan={ 6 } className="px-4 py-3">
                                                <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[11px] leading-relaxed text-slate-700 md:text-xs">
                                                    { msg.message ? (
                                                        <pre className="whitespace-pre-wrap break-words font-sans">
                                                            { msg.message }
                                                        </pre>
                                                    ) : (
                                                        <span className="text-slate-400">
                                                            متن پیام ثبت نشده است.
                                                        </span>
                                                    ) }
                                                </div>
                                            </td>
                                        </tr>
                                    ) }
                                </tbody>
                            );
                        } ) }
                    </tbody>
                </table>
            </div>

            {/* pagination */ }
            { totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 text-[11px] md:text-xs">
                    <PaginationButton
                        disabled={ page <= 1 }
                        onClick={ () =>
                        {
                            if ( page > 1 ) router.push( buildPageHref( page - 1 ) );
                        } }
                    >
                        صفحه قبلی
                    </PaginationButton>

                    <span className="text-slate-500">
                        صفحه { page } از { totalPages }
                    </span>

                    <PaginationButton
                        disabled={ page >= totalPages }
                        onClick={ () =>
                        {
                            if ( page < totalPages ) router.push( buildPageHref( page + 1 ) );
                        } }
                    >
                        صفحه بعدی
                    </PaginationButton>
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

function PaginationButton ( {
    disabled,
    onClick,
    children,
}: {
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
} )
{
    if ( disabled )
    {
        return (
            <span className="cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-400">
                { children }
            </span>
        );
    }

    return (
        <button
            type="button"
            onClick={ onClick }
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 shadow-sm transition hover:border-bms-primary/50 hover:text-bms-primary"
        >
            { children }
        </button>
    );
}
