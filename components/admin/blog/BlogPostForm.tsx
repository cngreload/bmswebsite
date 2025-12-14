// components/admin/blog/BlogPostForm.tsx
"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Status = "DRAFT" | "PUBLISHED";

type Category = {
    id: string;
    name: string;
    slug: string;
};

type Tag = {
    id: string;
    name: string;
    slug: string;
};

type BlogPostFormProps = {
    mode: "create" | "edit";
    postId?: string;
};

type FormValues = {
    title: string;
    slug: string;
    status: Status;
    excerpt: string;
    content: string;
    categoryIds: string[];
    tagIds: string[];
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

export function BlogPostForm ( { mode, postId }: BlogPostFormProps )
{
    const router = useRouter();

    const [ values, setValues ] = useState<FormValues>( {
        title: "",
        slug: "",
        status: "DRAFT",
        excerpt: "",
        content: "",
        categoryIds: [],
        tagIds: [],
    } );

    const [ categories, setCategories ] = useState<Category[]>( [] );
    const [ tags, setTags ] = useState<Tag[]>( [] );

    const [ fieldErrors, setFieldErrors ] = useState<FieldErrors>( {} );
    const [ loading, setLoading ] = useState<boolean>( mode === "edit" );
    const [ loadingMeta, setLoadingMeta ] = useState<boolean>( true );
    const [ saving, setSaving ] = useState( false );
    const [ serverError, setServerError ] = useState<string | null>( null );
    const [ serverSuccess, setServerSuccess ] = useState<string | null>( null );

    const makeSlug = ( text: string ) =>
        text
            .trim()
            .toLowerCase()
            .replace( /[\s_]+/g, "-" )
            .replace( /[^a-z0-9\-آ-ی]+/gi, "-" )
            .replace( /-+/g, "-" )
            .replace( /^-|-$/g, "" );

    // لود دسته‌ها و تگ‌ها
    useEffect( () =>
    {
        let cancelled = false;

        const loadMeta = async () =>
        {
            try
            {
                setLoadingMeta( true );
                const [ catRes, tagRes ] = await Promise.all( [
                    fetch( "/api/admin/blog/categories", { cache: "no-store" } ),
                    fetch( "/api/admin/blog/tags", { cache: "no-store" } ),
                ] );

                if ( !catRes.ok || !tagRes.ok )
                {
                    throw new Error( "Failed to load categories/tags" );
                }

                const cats = ( await catRes.json() ) as Category[];
                const tgs = ( await tagRes.json() ) as Tag[];

                if ( !cancelled )
                {
                    setCategories( cats );
                    setTags( tgs );
                }
            } catch
            {
                if ( !cancelled )
                {
                    setServerError( "خطا در بارگذاری دسته‌ها و تگ‌ها." );
                }
            } finally
            {
                if ( !cancelled )
                {
                    setLoadingMeta( false );
                }
            }
        };

        loadMeta();

        return () =>
        {
            cancelled = true;
        };
    }, [] );

    // اگر حالت edit است: لود داده پست
    useEffect( () =>
    {
        if ( mode !== "edit" || !postId ) return;

        let cancelled = false;

        const loadPost = async () =>
        {
            try
            {
                setLoading( true );
                const res = await fetch( `/api/admin/blog/posts/${ postId }`, {
                    cache: "no-store",
                } );

                if ( !res.ok )
                {
                    throw new Error( "Failed to load post" );
                }

                const data = await res.json();

                if ( cancelled ) return;

                const cats: Category[] = data.categories ?? [];
                const tgs: Tag[] = data.tags ?? [];

                setValues( {
                    title: data.title ?? "",
                    slug: data.slug ?? "",
                    status: ( data.status as Status ) ?? "DRAFT",
                    excerpt: data.excerpt ?? "",
                    content: data.content ?? "",
                    categoryIds: cats.map( ( c ) => c.id ),
                    tagIds: tgs.map( ( t ) => t.id ),
                } );
            } catch
            {
                if ( !cancelled )
                {
                    setServerError( "خطا در بارگذاری اطلاعات پست." );
                }
            } finally
            {
                if ( !cancelled )
                {
                    setLoading( false );
                }
            }
        };

        loadPost();

        return () =>
        {
            cancelled = true;
        };
    }, [ mode, postId ] );

    const handleChange =
        ( field: keyof FormValues ) =>
            (
                e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                    | React.ChangeEvent<HTMLSelectElement>,
            ) =>
            {
                const value = e.target.value;
                setValues( ( prev ) => ( { ...prev, [ field ]: value } ) );
                setFieldErrors( ( prev ) => ( { ...prev, [ field ]: undefined } ) );
                setServerError( null );
                setServerSuccess( null );
            };

    const handleToggleCategory = ( id: string ) =>
    {
        setValues( ( prev ) =>
        {
            const exists = prev.categoryIds.includes( id );
            return {
                ...prev,
                categoryIds: exists
                    ? prev.categoryIds.filter( ( x ) => x !== id )
                    : [ ...prev.categoryIds, id ],
            };
        } );
    };

    const handleToggleTag = ( id: string ) =>
    {
        setValues( ( prev ) =>
        {
            const exists = prev.tagIds.includes( id );
            return {
                ...prev,
                tagIds: exists
                    ? prev.tagIds.filter( ( x ) => x !== id )
                    : [ ...prev.tagIds, id ],
            };
        } );
    };

    const validate = (): boolean =>
    {
        const errs: FieldErrors = {};

        if ( !values.title.trim() )
        {
            errs.title = "عنوان را وارد کنید.";
        }
        if ( !values.slug.trim() )
        {
            errs.slug = "Slug را وارد کنید.";
        }
        if ( !values.content.trim() )
        {
            errs.content = "متن اصلی محتوا نباید خالی باشد.";
        }

        setFieldErrors( errs );
        return Object.keys( errs ).length === 0;
    };

    const handleAutoSlug = () =>
    {
        if ( !values.title.trim() ) return;
        const slug = makeSlug( values.title );
        setValues( ( prev ) => ( { ...prev, slug } ) );
        setFieldErrors( ( prev ) => ( { ...prev, slug: undefined } ) );
    };

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) =>
    {
        e.preventDefault();
        setServerError( null );
        setServerSuccess( null );

        if ( !validate() ) return;

        setSaving( true );
        try
        {
            const payload = {
                title: values.title.trim(),
                slug: values.slug.trim(),
                status: values.status,
                excerpt: values.excerpt.trim() || null,
                content: values.content.trim(),
                categoryIds: values.categoryIds,
                tagIds: values.tagIds,
            };

            const url =
                mode === "create"
                    ? "/api/admin/blog/posts"
                    : `/api/admin/blog/posts/${ postId }`;

            const res = await fetch( url, {
                method: mode === "create" ? "POST" : "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( payload ),
            } );

            if ( !res.ok )
            {
                try
                {
                    const data = await res.json();
                    if ( data?.message )
                    {
                        setServerError( data.message );
                    } else
                    {
                        setServerError( "خطا در ذخیره پست. لطفاً دوباره تلاش کنید." );
                    }
                } catch
                {
                    setServerError( "خطا در ذخیره پست. لطفاً دوباره تلاش کنید." );
                }
                return;
            }

            setServerSuccess(
                mode === "create"
                    ? "پست با موفقیت ایجاد شد."
                    : "تغییرات با موفقیت ذخیره شد.",
            );

            if ( mode === "create" )
            {
                router.push( "/admin/blog" );
                router.refresh();
            } else
            {
                router.refresh();
            }
        } catch
        {
            setServerError( "عدم ارتباط با سرور. لطفاً بعداً دوباره تلاش کنید." );
        } finally
        {
            setSaving( false );
        }
    };

    const isBusy = saving || loading || loadingMeta;

    if ( loading && mode === "edit" )
    {
        return (
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-xs text-slate-500 md:text-sm">
                در حال بارگذاری اطلاعات پست...
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl px-4 py-6">
            {/* عنوان صفحه */ }
            <div className="mb-4 space-y-1 text-right">
                <h1 className="text-base font-semibold text-bms-dark md:text-lg">
                    { mode === "create" ? "پست جدید وبلاگ" : "ویرایش پست وبلاگ" }
                </h1>
                <p className="text-[11px] text-slate-500 md:text-xs">
                    عنوان، متن، وضعیت انتشار و دسته‌بندی‌های محتوای بارمان را مدیریت
                    کنید.
                </p>
            </div>

            {/* خطای عمومی */ }
            { serverError && (
                <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-[11px] text-red-600 md:text-xs">
                    { serverError }
                </div>
            ) }

            {/* پیام موفقیت */ }
            { serverSuccess && (
                <div className="mb-4 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700 md:text-xs">
                    { serverSuccess }
                </div>
            ) }

            <form
                onSubmit={ handleSubmit }
                className="space-y-5 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm md:p-6"
            >
                {/* عنوان + وضعیت */ }
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="text-right md:col-span-2">
                        <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                            عنوان پست <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={ values.title }
                            onChange={ handleChange( "title" ) }
                            className={ cn(
                                "w-full rounded-xl border px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition md:text-sm",
                                "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                            ) }
                            placeholder="مثلاً: سامانه پایش لحظه‌ای ایستگاه‌های CNG"
                        />
                        { fieldErrors.title && (
                            <p className="mt-1 text-[11px] text-red-500">
                                { fieldErrors.title }
                            </p>
                        ) }
                    </div>

                    <div className="text-right">
                        <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                            وضعیت انتشار
                        </label>
                        <select
                            value={ values.status }
                            onChange={ handleChange( "status" ) }
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                        >
                            <option value="DRAFT">پیش‌نویس</option>
                            <option value="PUBLISHED">منتشر شده</option>
                        </select>
                    </div>
                </div>

                {/* slug */ }
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        Slug <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                        <input
                            type="text"
                            value={ values.slug }
                            onChange={ handleChange( "slug" ) }
                            className={ cn(
                                "w-full rounded-xl border px-3 py-2 text-xs text-left text-slate-800 outline-none ring-0 transition md:text-sm",
                                "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                            ) }
                            placeholder="مثلاً: realtime-cng-monitoring"
                            dir="ltr"
                        />
                        <button
                            type="button"
                            onClick={ handleAutoSlug }
                            className="whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600 transition hover:border-bms-primary/50 hover:bg-white md:text-xs"
                        >
                            تولید خودکار از عنوان
                        </button>
                    </div>
                    { fieldErrors.slug && (
                        <p className="mt-1 text-[11px] text-red-500">
                            { fieldErrors.slug }
                        </p>
                    ) }
                </div>

                {/* excerpt */ }
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        خلاصه (اختیاری)
                    </label>
                    <textarea
                        value={ values.excerpt }
                        onChange={ handleChange( "excerpt" ) }
                        rows={ 3 }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                        placeholder="یک خلاصه کوتاه برای نمایش در لیست اخبار..."
                    />
                </div>

                {/* content */ }
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        متن اصلی <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={ values.content }
                        onChange={ handleChange( "content" ) }
                        rows={ 10 }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                        placeholder="متن کامل خبر یا مقاله را اینجا بنویسید..."
                    />
                    { fieldErrors.content && (
                        <p className="mt-1 text-[11px] text-red-500">
                            { fieldErrors.content }
                        </p>
                    ) }
                </div>

                {/* دسته‌ها */ }
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        دسته‌ها
                    </label>
                    { loadingMeta ? (
                        <p className="text-[11px] text-slate-500">
                            در حال بارگذاری دسته‌ها...
                        </p>
                    ) : categories.length === 0 ? (
                        <p className="text-[11px] text-slate-500">
                            هیچ دسته‌ای ثبت نشده است. (می‌توانید بعداً اضافه کنید)
                        </p>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            { categories.map( ( cat ) =>
                            {
                                const active = values.categoryIds.includes( cat.id );
                                return (
                                    <button
                                        key={ cat.id }
                                        type="button"
                                        onClick={ () => handleToggleCategory( cat.id ) }
                                        className={ cn(
                                            "rounded-full border px-3 py-[4px] text-[11px] md:text-xs transition",
                                            active
                                                ? "border-bms-primary bg-bms-primary-soft text-bms-primary"
                                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-bms-primary/40 hover:bg-white",
                                        ) }
                                    >
                                        { cat.name }
                                    </button>
                                );
                            } ) }
                        </div>
                    ) }
                </div>

                {/* تگ‌ها */ }
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        تگ‌ها
                    </label>
                    { loadingMeta ? (
                        <p className="text-[11px] text-slate-500">
                            در حال بارگذاری تگ‌ها...
                        </p>
                    ) : tags.length === 0 ? (
                        <p className="text-[11px] text-slate-500">
                            هیچ تگی ثبت نشده است. (می‌توانید بعداً اضافه کنید)
                        </p>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            { tags.map( ( tag ) =>
                            {
                                const active = values.tagIds.includes( tag.id );
                                return (
                                    <button
                                        key={ tag.id }
                                        type="button"
                                        onClick={ () => handleToggleTag( tag.id ) }
                                        className={ cn(
                                            "rounded-full border px-3 py-[3px] text-[11px] md:text-xs transition",
                                            active
                                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300/60 hover:bg-white",
                                        ) }
                                    >
                                        { tag.name }
                                    </button>
                                );
                            } ) }
                        </div>
                    ) }
                </div>

                {/* دکمه‌ها */ }
                <div className="flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={ () => router.push( "/admin/blog" ) }
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] text-slate-600 transition hover:border-slate-300 hover:bg-white md:text-xs"
                    >
                        انصراف
                    </button>
                    <button
                        type="submit"
                        disabled={ isBusy }
                        className="inline-flex items-center gap-2 rounded-xl bg-bms-primary px-5 py-2 text-[11px] font-medium text-white shadow-sm transition hover:bg-bms-dark disabled:cursor-not-allowed disabled:bg-slate-400 md:text-sm"
                    >
                        { saving
                            ? "در حال ذخیره..."
                            : mode === "create"
                                ? "ایجاد پست"
                                : "ذخیره تغییرات" }
                    </button>
                </div>
            </form>
        </div>
    );
}
