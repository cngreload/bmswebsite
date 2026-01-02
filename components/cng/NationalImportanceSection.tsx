import { LuFlame, LuDatabase, LuLink } from "react-icons/lu";

export default function NationalImportanceSection ()
{
    return (
        <section
            id="national-importance"
            className="py-10 md:py-16"
            aria-labelledby="importance-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-3 text-right">
                    <span className="inline-block rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600 border border-amber-100">
                        چشم‌انداز کلان ملی
                    </span>

                    <h2
                        id="importance-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl leading-tight"
                    >
                        انرژی به‌عنوان <span className="text-amber-500">سرمایه ملی</span>،
                        <br className="hidden md:block" />
                        داده به‌عنوان <span className="text-bms-primary">قدرت راهبردی</span>
                    </h2>
                </div>

                {/* Dual Pillar Grid */ }
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Pillar 1: Energy */ }
                    <article className="group relative overflow-hidden rounded-[2rem] bg-amber-50/50 p-8 border border-amber-100 transition-all duration-300 hover:shadow-lg hover:border-amber-200">
                        <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                            <LuFlame className="h-32 w-32 text-amber-500" />
                        </div>

                        <div className="relative z-10 space-y-4 text-right">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
                                <LuFlame className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900">
                                امنیت و تاب‌آوری سبد سوخت کشور
                            </h3>

                            <p className="text-sm leading-8 text-slate-700 text-justify">
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

                    {/* Pillar 2: Data */ }
                    <article className="group relative overflow-hidden rounded-[2rem] bg-blue-50/50 p-8 border border-blue-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
                        <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                            <LuDatabase className="h-32 w-32 text-blue-500" />
                        </div>

                        <div className="relative z-10 space-y-4 text-right">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                                <LuDatabase className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900">
                                حکمرانی داده در مقیاس ملی
                            </h3>

                            <p className="text-sm leading-8 text-slate-700 text-justify">
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

                {/* Synthesis / Bridge */ }
                <div className="mt-10 flex items-center justify-center">
                    <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 p-6 text-center text-white shadow-xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-800 p-2 border-4 border-white">
                            <LuLink className="h-5 w-5 text-emerald-400" />
                        </div>

                        <p className="pt-2 text-sm md:text-base font-medium leading-relaxed text-slate-200">
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
