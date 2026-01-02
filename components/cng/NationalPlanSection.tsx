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
            className="py-10 md:py-14"
            aria-labelledby="plan-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-12 space-y-4 text-right">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuScale className="h-3.5 w-3.5" />
                        <span>چارچوب حقوقی و حکمرانی</span>
                    </div>

                    <h2
                        id="plan-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl leading-tight text-balance"
                    >
                        طرح ملی هوشمندسازی جایگاه‌های CNG
                        <span className="block mt-3 text-slate-500 text-lg md:text-2xl font-medium">
                            الزام قانونی، مسئولیت اجرایی و تحول فناورانه
                        </span>
                    </h2>
                </div>

                {/* Three Governance Pillars */ }
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Pillar 1: Legal Basis */ }
                    <article className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-bms-primary/30">
                        <div className="absolute inset-x-0 top-0 h-1 bg-slate-900 transition-colors group-hover:bg-bms-primary" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuSignature className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            مبنای قانونی و الزام حاکمیتی
                        </h3>

                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            بر اساس مصوبه هیئت وزیران در{ " " }
                            <strong className="text-slate-900">اسفند ۱۳۹۷</strong> و به استناد{ " " }
                            <strong className="text-slate-900">اصل ۱۳۸ قانون اساسی</strong>،
                            هوشمندسازی جایگاه‌های عرضه سوخت CNG به‌عنوان یک{ " " }
                            <strong className="text-bms-dark">
                                تکلیف الزام‌آور ملی
                            </strong>{ " " }
                            تعریف شده است. این مصوبه، دستگاه‌های اجرایی ذی‌ربط را موظف به
                            ایجاد زیرساخت‌های فنی، نظارتی و کنترلی لازم برای اجرای کامل طرح
                            می‌کند.
                        </p>
                    </article>

                    {/* Pillar 2: Technical Mandate */ }
                    <article className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/30">
                        <div className="absolute inset-x-0 top-0 h-1 bg-slate-900 transition-colors group-hover:bg-emerald-500" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuLandmark className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            تکلیف اجرایی و مسئولیت نهادی
                        </h3>

                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            بر اساس این چارچوب، وزارت نفت موظف است بستر اتصال امن، پایدار و
                            برخط جایگاه‌های CNG به{ " " }
                            <strong className="text-emerald-700">سامانه ملی سیمفا</strong>{ " " }
                            و پایگاه داده خودروهای گازسوز کشور را فراهم کند؛ با هدف{ " " }
                            <strong className="text-slate-800">
                                پیشگیری از سوخت‌گیری خودروهای فاقد معاینه فنی
                            </strong>
                            ، کاهش ریسک‌های ایمنی و اعمال نظارت هوشمند بر شبکه توزیع سوخت.
                        </p>
                    </article>

                    {/* Pillar 3: Economic Model */ }
                    <article className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-500/30">
                        <div className="absolute inset-x-0 top-0 h-1 bg-slate-900 transition-colors group-hover:bg-amber-500" />

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                            <LuCoins className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-slate-900">
                            مدل تأمین مالی و توجیه اقتصادی
                        </h3>

                        <p className="text-sm leading-7 text-slate-600 text-justify">
                            در این طرح، سازوکار تأمین منابع مالی از طریق{ " " }
                            <strong className="text-amber-700">اصلاح ساختار نرخ سوخت</strong>{ " " }
                            پیش‌بینی شده است؛ رویکردی که هزینه‌های هوشمندسازی، نوسازی تجهیزات
                            و حذف مخازن ناایمن را از یک هزینه مقطعی، به{ " " }
                            <strong className="text-slate-800">
                                سرمایه‌گذاری پایدار در ایمنی و بهره‌وری
                            </strong>{ " " }
                            تبدیل می‌کند و بازگشت آن در سطح ملی قابل اندازه‌گیری است.
                        </p>
                    </article>
                </div>

                {/* Strategic Summary */ }
                <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-100 p-5 text-center">
                    <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-600">
                        هوشمندسازی جایگاه‌های CNG یک پروژه انتخابی یا صرفاً فناورانه نیست؛
                        بلکه سازوکاری اجرایی برای تحقق هم‌زمان{ " " }
                        <span className="mx-1 font-bold text-slate-800">امنیت انرژی</span>،
                        <span className="mx-1 font-bold text-slate-800">ایمنی عمومی</span> و
                        <span className="mx-1 font-bold text-slate-800">کارآمدی اقتصادی</span>
                        است که بدون یک سامانه بومی، حاکمیتی و قابل اتکا محقق نخواهد شد.
                    </p>
                </div>
            </div>
        </section>
    );
}
