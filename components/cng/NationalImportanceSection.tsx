import { LuFlame, LuDatabase, LuLink } from "react-icons/lu";

export default function NationalImportanceSection ()
{
    return (
        <section
            id="national-importance"
            aria-labelledby="importance-heading"
            className="py-24 md:py-32 bg-white"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-24 max-w-4xl text-right space-y-6">
                    <span className="inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-600 border border-amber-100">
                        چشم‌انداز کلان ملی
                    </span>

                    <h2
                        id="importance-heading"
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        انرژی به‌عنوان{ " " }
                        <span className="text-amber-500">
                            سرمایه ملی
                        </span>
                        ،<br />
                        داده به‌عنوان{ " " }
                        <span className="text-bms-primary">
                            قدرت راهبردی
                        </span>
                    </h2>
                </header>

                {/* ================= DUAL NARRATIVE ================= */ }
                <div className="relative grid gap-16 md:grid-cols-2">

                    {/* ENERGY COLUMN */ }
                    <article className="relative rounded-[2.75rem] bg-amber-50/60 border border-amber-100 p-8 md:p-10">
                        {/* Background icon */ }
                        <LuFlame
                            className="absolute top-8 left-8 h-32 w-32 text-amber-200 opacity-30"
                            aria-hidden
                        />

                        <div className="relative space-y-6 text-right">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-600 border border-amber-100 shadow-sm">
                                <LuFlame className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                امنیت و تاب‌آوری سبد سوخت کشور
                            </h3>

                            <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                                CNG در راهبرد انرژی کشور، صرفاً یک سوخت جایگزین نیست؛ بلکه
                                مؤلفه‌ای کلیدی برای
                                <strong className="mx-1 font-medium text-amber-700">
                                    کاهش وابستگی به بنزین
                                </strong>
                                ، مدیریت ناترازی انرژی و افزایش تاب‌آوری شبکه توزیع سوخت است.
                                بدون پایش هوشمند، داده‌محور و بلادرنگ، این شبکه در برابر شوک‌های
                                عملیاتی، اختلالات فنی و شرایط بحرانی، آسیب‌پذیر باقی می‌ماند.
                                ICTS بستر کنترل‌پذیری و حکمرانی مؤثر بر این زیرساخت حیاتی را فراهم
                                می‌کند.
                            </p>
                        </div>
                    </article>

                    {/* DATA COLUMN */ }
                    <article className="relative rounded-[2.75rem] bg-blue-50/60 border border-blue-100 p-8 md:p-10">
                        {/* Background icon */ }
                        <LuDatabase
                            className="absolute top-8 left-8 h-32 w-32 text-blue-200 opacity-30"
                            aria-hidden
                        />

                        <div className="relative space-y-6 text-right">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 border border-blue-100 shadow-sm">
                                <LuDatabase className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                حکمرانی داده در مقیاس ملی
                            </h3>

                            <p className="text-sm md:text-base leading-8 text-slate-700 text-justify">
                                داده‌های تولیدشده در جایگاه‌های CNG – از الگوی مصرف و رفتار
                                ناوگان تا وضعیت تجهیزات – یک
                                <strong className="mx-1 font-medium text-blue-700">
                                    دارایی راهبردی ملی
                                </strong>
                                هستند. بدون یک سامانه بومی، امن و یکپارچه، این داده‌ها یا به‌صورت
                                جزیره‌ای باقی می‌مانند یا هرگز به بینش سیاست‌گذارانه و مدیریتی
                                تبدیل نمی‌شوند. ICTS داده خام را به ابزار تصمیم‌سازی، پیش‌بینی و
                                حکمرانی هوشمند انرژی تبدیل می‌کند.
                            </p>
                        </div>
                    </article>
                </div>

                {/* ================= CORE BRIDGE ================= */ }
                <div className="mt-24 flex justify-center">
                    <div className="relative max-w-3xl rounded-[2.5rem] bg-slate-900 px-8 py-10 text-center text-white shadow-2xl">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-4 border-white">
                            <LuLink className="h-5 w-5 text-emerald-400" />
                        </div>

                        <p className="text-sm md:text-base leading-relaxed text-slate-200">
                            <span className="font-bold text-emerald-400">ICTS</span> حلقه اتصال
                            میان «زیرساخت فیزیکی انرژی» و «حکمرانی داده‌محور» است؛
                            جایی که ایمنی، بهره‌وری و تصمیم‌سازی ملی به هم می‌رسند.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
