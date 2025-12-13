const securityBlocks = [
    {
        title: "زیرساخت امن و ارتباطات رمزنگاری‌شده",
        body:
            "تمام ارتباطات بین مرورگر کاربران و سرور، از طریق پروتکل‌های امن (مانند HTTPS) رمزنگاری می‌شود. دسترسی به پنل مدیریت تنها از مسیرهای مجاز و با کنترل‌های امنیتی در سطح کاربرد و زیرساخت ممکن است."
    },
    {
        title: "کنترل دسترسی مبتنی بر نقش (Role-Based Access)",
        body:
            "هر کاربر (مدیر، پزشک، پذیرش، مالی و…) فقط به بخش‌هایی از اطلاعات دسترسی دارد که برای انجام وظایفش لازم است. نقش‌ها و سطح دسترسی‌ها در پنل مدیریت قابل تنظیم است و می‌توان آن‌ها را مطابق ساختار واقعی کلینیک تعریف کرد."
    },
    {
        title: "پشتیبان‌گیری و بازیابی داده‌ها",
        body:
            "از داده‌های کلینیک به‌صورت منظم نسخه‌پشتیبان گرفته می‌شود تا در صورت بروز خطا، مشکل سخت‌افزاری یا حوادث پیش‌بینی‌نشده، امکان بازیابی اطلاعات وجود داشته باشد. فرآیندهای پشتیبان‌گیری و بازیابی، مستندسازی شده و به‌صورت دوره‌ای آزمون می‌شوند."
    },
    {
        title: "محرمانگی و رعایت حقوق مراجعان",
        body:
            "داده‌های مراجعان مطابق با اصول محرمانگی در حوزه سلامت نگه‌داری شده و برای هیچ استفاده‌ای خارج از چارچوب حرفه‌ای کلینیک به‌کار نمی‌رود. دسترسی به اطلاعات حساس، به‌صورت کامل ثبت و قابل ردیابی است."
    }
];

export default function ClinicansSecuritySection ()
{
    return (
        <section id="clinicans-security" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    امنیت داده و حریم خصوصی؛ ستون‌های اصلی Clinicans
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    اعتماد کلینیک و مراجعان، بدون امنیت و محرمانگی داده‌ها معنا ندارد؛ به
                    همین دلیل، Clinicans از ابتدا با نگاه امنیت‌محور طراحی شده است.
                </p>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    در کلینیکانز، اطلاعات مراجعان، برنامه‌ی کاری پزشکان و داده‌های مالی
                    کلینیک، صرفاً «اطلاعات سامانه» نیستند؛ دارایی‌های حیاتی شما هستند.
                    معماری محصول، انتخاب فناوری‌ها و فرآیندهای پشتیبانی، همگی با این فرض
                    شکل گرفته‌اند که حفظ محرمانگی، تمامیت و دسترس‌پذیری داده‌ها، اولویت
                    اول است؛ نه یک ویژگی جانبی.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    { securityBlocks.map( ( block ) => (
                        <article
                            key={ block.title }
                            className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-[11px] md:text-sm leading-relaxed text-slate-700"
                        >
                            <h3 className="mb-2 text-sm md:text-base font-semibold text-bms-dark">
                                { block.title }
                            </h3>
                            <p>{ block.body }</p>
                        </article>
                    ) ) }
                </div>
            </div>
        </section>
    );
}
