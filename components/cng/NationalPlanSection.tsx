// components/cng/NationalPlanSection.tsx
import
{
    LuSignature,
    LuLandmark,
    LuCoins,
    LuScale
} from "react-icons/lu";

export default function NationalPlanSection ()
{
    return (
        <section
            id="national-plan"
            className="py-8 md:py-12"
            aria-labelledby="plan-heading"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */ }
                <div className="mb-10 text-right space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuScale className="h-3.5 w-3.5" />
                        <span>الزامات قانونی و حاکمیتی</span>
                    </div>
                    <h2
                        id="plan-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl text-balance"
                    >
                        طرح ملی هوشمندسازی جایگاه‌های CNG؛ <br />
                        <span className="text-slate-500 text-lg md:text-2xl font-medium mt-2 block">ضرورت ملی، تکلیف قانونی و تحول فناورانه</span>
                    </h2>
                </div>

                {/* The 3 Pillars of the Plan */ }
                <div className="grid gap-6 md:grid-cols-3">

                    {/* Pillar 1: Legal Basis */ }
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden group hover:border-bms-primary/30 hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 h-1 w-full bg-slate-900 group-hover:bg-bms-primary transition-colors" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuSignature className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">مصوبه هیئت وزیران</h3>
                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            بر اساس مصوبه <strong className="text-bms-dark">اسفند ۱۳۹۷</strong> و با استناد به <strong className="text-bms-dark">اصل ۱۳۸ قانون اساسی</strong>،
                            هوشمندسازی جایگاه‌های عرضه سوخت گاز طبیعی به عنوان یک تکلیف ملی ابلاغ شده است.
                        </p>
                    </article>

                    {/* Pillar 2: Technical Mandate */ }
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden group hover:border-emerald-500/30 hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 h-1 w-full bg-slate-900 group-hover:bg-emerald-500 transition-colors" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuLandmark className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">تکلیف وزارت نفت</h3>
                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            ایجاد بستر اتصال امن جایگاه‌ها به <strong className="text-emerald-700">سامانه سیمفا</strong> و دیتابیس خودروهای گازسوز؛
                            با هدف جلوگیری از سوخت‌گیری خودروهای فاقد معاینه فنی و ارتقای ایمنی عمومی.
                        </p>
                    </article>

                    {/* Pillar 3: Economic Model */ }
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden group hover:border-amber-500/30 hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 h-1 w-full bg-slate-900 group-hover:bg-amber-500 transition-colors" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuCoins className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">تامین منابع مالی</h3>
                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            پیش‌بینی سازوکار پایدار از طریق <strong className="text-amber-700">اصلاح نرخ سوخت</strong> برای تأمین هزینه‌های هوشمندسازی
                            و تعویض مخازن ناایمن؛ تبدیل ایمنی از هزینه به سرمایه‌گذاری.
                        </p>
                    </article>

                </div>

                {/* Summary Footer */ }
                <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-center">
                    <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                        هوشمندسازی جایگاه‌های CNG یک انتخاب لوکس نیست؛ بلکه حلقه‌ای کلیدی در زنجیره‌ی
                        <span className="mx-1 text-slate-800 font-bold">امنیت انرژی</span> و
                        <span className="mx-1 text-slate-800 font-bold">اقتصاد ملی</span> است که بدون سامانه بومی محقق نخواهد شد.
                    </p>
                </div>

            </div>
        </section>
    );
}