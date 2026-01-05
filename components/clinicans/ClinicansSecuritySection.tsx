// components/clinicans/ClinicansSecuritySection.tsx
import
{
    LuLock,
    LuLockKeyhole,
    LuFingerprint,
    LuDatabaseBackup,
    LuEyeOff,
    LuShieldCheck,
    LuTriangleAlert,
} from "react-icons/lu";

const securityBlocks = [
    {
        id: "encryption",
        capability: "Data Integrity & Protection",
        title: "حفاظت و یکپارچگی داده‌ها",
        icon: LuLock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body:
            "اطلاعات درمانی و عملیاتی در کلینیکانز  با معماری رمزنگاری‌شده محافظت می‌شوند تا از هرگونه دسترسی غیرمجاز، تغییر یا افشای ناخواسته جلوگیری شود و یکپارچگی داده‌ها در تمام چرخه استفاده حفظ گردد.",
    },
    {
        id: "rbac",
        capability: "Governed Access",
        title: "حاکمیت دسترسی مبتنی بر نقش",
        icon: LuFingerprint,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body:
            "کلینیکانز  بر اساس نقش‌های واقعی سازمانی طراحی شده است. هر کاربر تنها به بخشی از اکوسیستم دسترسی دارد که با مسئولیت حرفه‌ای او هم‌راستاست؛ نه کمتر، نه بیشتر.",
    },
    {
        id: "backup",
        capability: "Operational Continuity",
        title: "تداوم عملیاتی و بازیابی اطلاعات",
        icon: LuDatabaseBackup,
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "group-hover:border-teal-200",
        body:
            "پایداری اکوسیستم کلینیکانز  به معنای آمادگی در برابر سناریوهای پیش‌بینی‌نشده است. سازوکارهای پشتیبان‌گیری و بازیابی، تداوم فعالیت کلینیک را حتی در شرایط بحرانی تضمین می‌کنند.",
    },
    {
        id: "privacy",
        capability: "Data Ownership & Privacy",
        title: "مالکیت و حریم خصوصی اطلاعات",
        icon: LuEyeOff,
        color: "text-slate-600",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        body:
            "داده‌های بیماران بخشی از دارایی‌های کلینیک محسوب می‌شوند. کلینیکانز  هیچ استفاده ثانویه‌ای از اطلاعات انجام نمی‌دهد و تمام دسترسی‌ها شفاف، قابل ردیابی و تحت حاکمیت کامل مجموعه درمانی است.",
    },
];

export default function ClinicansSecuritySection ()
{
    return (
        <section
            id="clinicans-security"
            className="py-10 md:py-16 bg-slate-50/50"
            aria-labelledby="security-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-14 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-200/50 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300">
                        <LuShieldCheck className="h-3.5 w-3.5" />
                        <span>پایه اعتماد اکوسیستم</span>
                    </div>

                    <h2
                        id="security-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        امنیت، حریم خصوصی و{ " " }
                        <span className="text-slate-500">اعتماد پایدار</span>
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base text-justify">
                        در اکوسیستم سلامت، اعتماد مهم‌ترین دارایی است.
                        کلینیکانز  با درک حساسیت داده‌های درمانی،
                        امنیت را نه به‌عنوان یک قابلیت جانبی،
                        بلکه به‌عنوان بخشی جدایی‌ناپذیر از معماری هسته‌ای خود تعریف کرده است.
                    </p>
                </div>

                {/* Security Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { securityBlocks.map( ( block ) =>
                    {
                        const Icon = block.icon;
                        return (
                            <article
                                key={ block.id }
                                className={ `group relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${ block.border }` }
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={ `flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${ block.bg } ${ block.color } transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            { block.title }
                                        </h3>
                                        {/* Capability Tag */ }
                                        <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 border border-slate-200">
                                            <LuTriangleAlert className="h-3 w-3" />
                                            { block.capability }
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm leading-7 text-slate-600 text-pretty pr-16 border-r-2 border-slate-100">
                                    { block.body }
                                </p>
                            </article>
                        );
                    } ) }
                </div>
                {/* 
    🧠 SYSTEM SUMMARY BLOCK (Security by Design)
    Architectural trust statement
*/}
                <div className="mt-20 lg:mt-28 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4">

                        {/* Inner Container */ }
                        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                                    <LuLockKeyhole className="h-10 w-10" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-3">
                                <h4 className="text-lg font-bold text-slate-900">
                                    امنیت به‌مثابه معماری
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 leading-8 text-justify">
                                    در <strong className="text-slate-900 font-bold">کلینیکانز </strong>،
                                    امنیت نتیجه
                                    <span className="text-indigo-700 font-medium"> تصمیمات معماری</span>
                                    است، نه افزودن ابزارهای مقطعی.
                                    این رویکرد،
                                    <span className="text-indigo-700 font-medium"> اعتماد بلندمدت</span>
                                    میان کلینیک، تیم درمان و مراجعان را تضمین می‌کند.
                                </p>
                            </div>

                        </div>
                    </aside>
                </div>

            </div>
        </section>
    );
}
