import
{
    LuSignature,
    LuLandmark,
    LuCoins,
    LuScale,
} from "react-icons/lu";

export default function NationalPlanSection ()
{
    return (
        <section
            id="national-plan"
            aria-labelledby="plan-heading"
            className="
        relative
        py-20 md:py-28
        bg-gradient-to-b from-white to-slate-50
      "
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl px-4">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 max-w-3xl text-right space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuScale className="h-4 w-4" />
                        چارچوب حقوقی و حکمرانی
                    </div>

                    <h2
                        id="plan-heading"
                        className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold
              leading-tight
              text-slate-900
            "
                    >
                        طرح ملی هوشمندسازی جایگاه‌های CNG
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-slate-600">
                        الزام قانونی، مسئولیت اجرایی و تحول فناورانه در زیرساخت‌های
                        حیاتی کشور
                    </p>
                </header>

                {/* ================= GOVERNANCE PILLARS ================= */ }
                <div className="grid gap-8 md:grid-cols-3">

                    {/* === Pillar 1 === */ }
                    <GovernanceCard
                        tone="primary"
                        icon={ <LuSignature className="h-6 w-6" /> }
                        title="مبنای قانونی و الزام حاکمیتی"
                    >
                        بر اساس مصوبه هیئت وزیران در{ " " }
                        <strong>اسفند ۱۳۹۷</strong> و به استناد{ " " }
                        <strong>اصل ۱۳۸ قانون اساسی</strong>،
                        هوشمندسازی جایگاه‌های عرضه سوخت CNG
                        به‌عنوان یک{ " " }
                        <strong className="text-bms-dark">
                            تکلیف الزام‌آور ملی
                        </strong>{ " " }
                        تعریف شده است. این مصوبه، دستگاه‌های اجرایی
                        ذی‌ربط را موظف به ایجاد زیرساخت‌های فنی،
                        نظارتی و کنترلی لازم برای اجرای کامل طرح
                        می‌کند.
                    </GovernanceCard>

                    {/* === Pillar 2 === */ }
                    <GovernanceCard
                        tone="emerald"
                        icon={ <LuLandmark className="h-6 w-6" /> }
                        title="تکلیف اجرایی و مسئولیت نهادی"
                    >
                        بر اساس این چارچوب، وزارت نفت موظف است
                        بستر اتصال امن، پایدار و برخط جایگاه‌های
                        CNG به{ " " }
                        <strong className="text-emerald-700">
                            سامانه ملی سیمفا
                        </strong>{ " " }
                        و پایگاه داده خودروهای گازسوز کشور را
                        فراهم کند؛ با هدف{ " " }
                        <strong>
                            پیشگیری از سوخت‌گیری خودروهای فاقد
                            معاینه فنی
                        </strong>
                        ، کاهش ریسک‌های ایمنی و اعمال نظارت
                        هوشمند بر شبکه توزیع سوخت.
                    </GovernanceCard>

                    {/* === Pillar 3 === */ }
                    <GovernanceCard
                        tone="amber"
                        icon={ <LuCoins className="h-6 w-6" /> }
                        title="مدل تأمین مالی و توجیه اقتصادی"
                    >
                        در این طرح، سازوکار تأمین منابع مالی از
                        طریق{ " " }
                        <strong className="text-amber-700">
                            اصلاح ساختار نرخ سوخت
                        </strong>{ " " }
                        پیش‌بینی شده است؛ رویکردی که هزینه‌های
                        هوشمندسازی و نوسازی تجهیزات را از یک
                        هزینه مقطعی، به{ " " }
                        <strong>
                            سرمایه‌گذاری پایدار در ایمنی و
                            بهره‌وری
                        </strong>{ " " }
                        تبدیل می‌کند.
                    </GovernanceCard>
                </div>

                {/* ================= STRATEGIC SUMMARY ================= */ }
                <div
                    className="
            mt-20
            rounded-2xl
            border border-slate-200
            bg-white
            px-6 py-8
            text-center
            shadow-sm
          "
                >
                    <p className="text-sm md:text-base leading-relaxed font-medium text-slate-700 max-w-4xl mx-auto">
                        هوشمندسازی جایگاه‌های CNG یک پروژه انتخابی
                        یا صرفاً فناورانه نیست؛ بلکه سازوکاری
                        اجرایی برای تحقق هم‌زمان{ " " }
                        <span className="font-bold text-slate-900">
                            امنیت انرژی
                        </span>
                        ،{ " " }
                        <span className="font-bold text-slate-900">
                            ایمنی عمومی
                        </span>{ " " }
                        و{ " " }
                        <span className="font-bold text-slate-900">
                            کارآمدی اقتصادی
                        </span>{ " " }
                        است که بدون یک سامانه بومی، حاکمیتی و
                        قابل اتکا محقق نخواهد شد.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ================= CARD COMPONENT ================= */
function GovernanceCard ( {
    icon,
    title,
    tone,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    tone: "primary" | "emerald" | "amber";
    children: React.ReactNode;
} )
{
    const tones = {
        primary: "border-bms-primary/30",
        emerald: "border-emerald-500/30",
        amber: "border-amber-500/30",
    };

    return (
        <article
            className={ `
        relative
        rounded-[2rem]
        border
        bg-white
        p-7 md:p-8
        shadow-[0_20px_40px_-30px_rgba(0,0,0,0.35)]
        ${ tones[ tone ] }
      `}
        >
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    { icon }
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                    { title }
                </h3>
            </div>

            <p className="text-sm leading-8 text-slate-600 text-justify">
                { children }
            </p>
        </article>
    );
}
