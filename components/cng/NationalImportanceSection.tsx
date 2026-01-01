// components/cng/NationalImportanceSection.tsx
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
                <div className="mb-12 text-right space-y-3">
                    <span className="inline-block rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600 border border-amber-100">
                        چشم‌انداز کلان
                    </span>
                    <h2
                        id="importance-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl leading-tight"
                    >
                        انرژی به‌عنوان <span className="text-amber-500">سرمایه ملی</span>، <br className="hidden md:block" />
                        داده به‌عنوان <span className="text-bms-primary">سرمایه راهبردی</span>
                    </h2>
                </div>

                {/* Dual Pillar Grid */ }
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Pillar 1: Energy */ }
                    <article className="group relative overflow-hidden rounded-[2rem] bg-amber-50/50 p-8 border border-amber-100 transition-all hover:shadow-lg hover:border-amber-200">
                        <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-6">
                            <LuFlame className="h-32 w-32 text-amber-500" />
                        </div>

                        <div className="relative z-10 space-y-4 text-right">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
                                <LuFlame className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">امنیت سبد سوخت</h3>
                            <p className="text-sm leading-8 text-slate-700 text-justify">
                                CNG تنها یک سوخت ارزان‌تر نیست؛ بلکه ستون فقرات استراتژی ملی برای <strong className="font-medium text-amber-700">کاهش وابستگی به بنزین</strong> و مدیریت ناترازی انرژی است.
                                هوشمندسازی این شبکه، شرط لازم برای پایداری و تاب‌آوری سیستم توزیع سوخت کشور در شرایط بحرانی است.
                            </p>
                        </div>
                    </article>

                    {/* Pillar 2: Data */ }
                    <article className="group relative overflow-hidden rounded-[2rem] bg-blue-50/50 p-8 border border-blue-100 transition-all hover:shadow-lg hover:border-blue-200">
                        <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110 group-hover:-rotate-6">
                            <LuDatabase className="h-32 w-32 text-blue-500" />
                        </div>

                        <div className="relative z-10 space-y-4 text-right">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                                <LuDatabase className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">حکمرانی داده‌محور</h3>
                            <p className="text-sm leading-8 text-slate-700 text-justify">
                                در مقیاس ملی، داده‌های جایگاه‌ها – از الگوی مصرف تا رفتار ناوگان – یک <strong className="font-medium text-blue-700">دارایی استراتژیک</strong> است.
                                بدون سامانه بومی و امن، این داده‌ها یا تولید نمی‌شوند یا در اختیار بیگانگان قرار می‌گیرند. ICTS داده خام را به قدرت تصمیم‌گیری حاکمیتی تبدیل می‌کند.
                            </p>
                        </div>
                    </article>

                </div>

                {/* Synthesis / Bridge */ }
                <div className="mt-8 flex items-center justify-center">
                    <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 p-6 text-center text-white shadow-xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-800 p-2 border-4 border-white">
                            <LuLink className="h-5 w-5 text-emerald-400" />
                        </div>
                        <p className="pt-2 text-sm md:text-base font-medium leading-relaxed text-slate-200">
                            <span className="text-emerald-400 font-bold">ICTS</span> حلقه اتصال میان
                            «سرمایه فیزیکی» زیرساخت و «سرمایه دانشی» مدیریت است.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}