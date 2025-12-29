// components/contact/ContactForm.tsx
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { cn } from "@/lib/utils";

type ContactFormValues = {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm ()
{
    const [ values, setValues ] = useState<ContactFormValues>( {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    } );

    const [ errors, setErrors ] = useState<FieldErrors>( {} );
    const [ submitting, setSubmitting ] = useState( false );
    const [ serverError, setServerError ] = useState<string | null>( null );
    const [ serverSuccess, setServerSuccess ] = useState<string | null>( null );

    const handleChange =
        ( field: keyof ContactFormValues ) =>
            (
                e:
                    | ChangeEvent<HTMLInputElement>
                    | ChangeEvent<HTMLTextAreaElement>
                    | ChangeEvent<HTMLSelectElement>,
            ) =>
            {
                const value = e.target.value;
                setValues( ( prev ) => ( { ...prev, [ field ]: value } ) );
                setErrors( ( prev ) => ( { ...prev, [ field ]: undefined } ) );
                setServerError( null );
                setServerSuccess( null );
            };

    const validate = (): boolean =>
    {
        const nextErrors: FieldErrors = {};

        if ( !values.fullName.trim() )
        {
            nextErrors.fullName = "نام را وارد کنید.";
        }
        if ( !values.email.trim() )
        {
            nextErrors.email = "ایمیل را وارد کنید.";
        } else if ( !/^\S+@\S+\.\S+$/.test( values.email.trim() ) )
        {
            nextErrors.email = "فرمت ایمیل معتبر نیست.";
        }
        if ( !values.message.trim() )
        {
            nextErrors.message = "متن پیام را وارد کنید.";
        }

        setErrors( nextErrors );
        return Object.keys( nextErrors ).length === 0;
    };

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) =>
    {
        e.preventDefault();
        setServerError( null );
        setServerSuccess( null );

        if ( !validate() ) return;

        setSubmitting( true );
        try
        {
            const res = await fetch( "/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {
                    fullName: values.fullName.trim(), // 👈 IMPORTANT: backend expects fullName
                    email: values.email.trim(),
                    phone: values.phone.trim() || null,
                    subject: values.subject.trim() || null,
                    message: values.message.trim(),
                } ),
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
                        setServerError(
                            "ارسال فرم با مشکل مواجه شد. لطفاً دوباره تلاش کنید.",
                        );
                    }
                } catch
                {
                    setServerError(
                        "ارسال فرم با مشکل مواجه شد. لطفاً دوباره تلاش کنید.",
                    );
                }
                return;
            }

            setServerSuccess(
                "پیام شما با موفقیت ثبت شد. همکاران ما در اولین فرصت با شما تماس می‌گیرند.",
            );
            setValues( {
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            } );
        } catch
        {
            setServerError( "عدم ارتباط با سرور. لطفاً بعداً دوباره تلاش کنید." );
        } finally
        {
            setSubmitting( false );
        }
    };

    return (
        <form
            onSubmit={ handleSubmit }
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm md:p-6"
        >
            { serverError && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-[11px] text-red-600 md:text-xs">
                    { serverError }
                </div>
            ) }

            { serverSuccess && (
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700 md:text-xs">
                    { serverSuccess }
                </div>
            ) }

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        نام و نام خانوادگی <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={ values.fullName }
                        onChange={ handleChange( "fullName" ) }
                        className={ cn(
                            "w-full rounded-xl border px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition md:text-sm",
                            "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                        ) }
                        placeholder="مثلاً: علی رضایی"
                    />
                    { errors.fullName && (
                        <p className="mt-1 text-[11px] text-red-500">{ errors.fullName }</p>
                    ) }
                </div>

                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        ایمیل <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={ values.email }
                        onChange={ handleChange( "email" ) }
                        className={ cn(
                            "w-full rounded-xl border px-3 py-2 text-xs text-left text-slate-800 outline-none ring-0 transition md:text-sm",
                            "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                        ) }
                        placeholder="you@example.com"
                        dir="ltr"
                    />
                    { errors.email && (
                        <p className="mt-1 text-[11px] text-red-500">{ errors.email }</p>
                    ) }
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        شماره تماس (اختیاری)
                    </label>
                    <input
                        type="tel"
                        value={ values.phone }
                        onChange={ handleChange( "phone" ) }
                        className={ cn(
                            "w-full rounded-xl border px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition md:text-sm",
                            "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                        ) }
                        placeholder="مثلاً: ۰۹۱۲۱۲۳۴۵۶۷"
                    />
                </div>

                <div className="text-right">
                    <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                        موضوع (اختیاری)
                    </label>
                    <input
                        type="text"
                        value={ values.subject }
                        onChange={ handleChange( "subject" ) }
                        className={ cn(
                            "w-full rounded-xl border px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition md:text-sm",
                            "bg-slate-50 border-slate-200 focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary",
                        ) }
                        placeholder="مثلاً: درخواست دمو، همکاری، سرمایه‌گذاری و ..."
                    />
                </div>
            </div>

            <div className="text-right">
                <label className="mb-1 block text-xs font-medium text-slate-700 md:text-sm">
                    متن پیام <span className="text-red-500">*</span>
                </label>
                <textarea
                    value={ values.message }
                    onChange={ handleChange( "message" ) }
                    rows={ 5 }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                    placeholder="لطفاً توضیح دهید در چه زمینه‌ای می‌خواهید با بارمان همکاری یا ارتباط داشته باشید..."
                />
                { errors.message && (
                    <p className="mt-1 text-[11px] text-red-500">{ errors.message }</p>
                ) }
            </div>

            <div className="flex items-center justify-end">
                <button
                    type="submit"
                    disabled={ submitting }
                    className="rounded-xl bg-bms-primary px-5 py-2 text-[11px] font-medium text-white shadow-sm transition hover:bg-bms-dark disabled:cursor-not-allowed disabled:bg-slate-400 md:text-sm"
                >
                    { submitting ? "در حال ارسال..." : "ارسال پیام" }
                </button>
            </div>
        </form>
    );
}
