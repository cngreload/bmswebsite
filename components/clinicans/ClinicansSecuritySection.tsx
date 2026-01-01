// components/clinicans/ClinicansSecuritySection.tsx
import
{
    LuLock,
    LuFingerprint,
    LuDatabaseBackup,
    LuEyeOff,
    LuShieldCheck,
    LuServer
} from "react-icons/lu";

const securityBlocks = [
    {
        id: "encryption",
        title: "رمزنگاری سراسری (End-to-End)",
        icon: LuLock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body: "تمام داده‌ها در مسیر انتقال (SSL/TLS) و در حالت استراحت (At Rest) رمزنگاری می‌شوند. حتی توسعه‌دهندگان سیستم نیز امکان خواندن پرونده‌های پزشکی بیماران را ندارند."
    },
    {
        id: "rbac",
        title: "کنترل دسترسی دقیق (RBAC)",
        icon: LuFingerprint,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body: "دسترسی‌ها بر اساس نقش تعریف می‌شوند. منشی فقط تقویم را می‌بیند، پزشک پرونده را، و حسابدار فقط فاکتورها را. هیچ‌کس بیشتر از نیاز کاری‌اش دسترسی ندارد."
    },
    {
        id: "backup",
        title: "پشتیبان‌گیری خودکار و توزیع‌شده",
        icon: LuDatabaseBackup,
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "group-hover:border-teal-200",
        body: "از داده‌های شما به صورت ساعتی در سرورهای جداگانه بکاپ گرفته می‌شود. سناریوهای بازجشانی (Disaster Recovery) تضمین می‌کنند که حتی در حوادث سخت‌افزاری، داده‌ای گم نمی‌شود."
    },
    {
        id: "privacy",
        title: "حریم خصوصی و مالکیت داده",
        icon: LuEyeOff,
        color: "text-slate-600",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        body: "در کلینیکانز، داده‌ها دارایی انحصاری شما هستند. ما متعهد به عدم استفاده تجاری از اطلاعات بیماران هستیم و لاگ تمام دسترسی‌ها برای ممیزی ثبت می‌شود."
    }
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
                <div className="mb-12 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-200/50 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-300">
                        <LuShieldCheck className="h-3.5 w-3.5" />
                        <span>اولویت شماره یک</span>
                    </div>
                    <h2
                        id="security-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        امنیت داده و <span className="text-slate-500">حریم خصوصی</span>
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base text-justify">
                        در دنیای سلامت، اعتماد مهم‌ترین ارز است. ما با استانداردهای امنیتی در سطح بانکداری،
                        از اطلاعات حساس کلینیک و بیماران شما محافظت می‌کنیم.
                    </p>
                </div>

                {/* Grid */ }
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
                                    <div className={ `flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${ block.bg } ${ block.color } transition-transform group-hover:scale-110` }>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        { block.title }
                                    </h3>
                                </div>

                                <p className="text-sm leading-7 text-slate-600 text-pretty pr-16 border-r-2 border-slate-100">
                                    { block.body }
                                </p>
                            </article>
                        );
                    } ) }
                </div>

                {/* Trust Seal Footer */ }
                <div className="mt-8 flex items-center justify-center">
                    <div className="flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                            <LuServer className="h-5 w-5" />
                        </div>
                        <div className="text-xs md:text-sm text-slate-500 leading-relaxed">
                            <span className="font-bold text-slate-800">اصل مالکیت داده:</span> تمام اطلاعات ثبت شده در سیستم، متعلق به کلینیک است.
                            شما هر زمان می‌توانید نسخه کامل دیتابیس خود را دریافت کنید.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}