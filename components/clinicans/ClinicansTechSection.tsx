const techBlocks = [
    {
        title: "معماری تحت‌وب و Cloud-Ready",
        body:
            "دسترسی به Clinicans از طریق مرورگر، بدون نیاز به نصب و به‌روزرسانی دستی انجام می‌شود. امکان استفاده هم در داخل کلینیک و هم در شعب یا مکان‌های دیگر در صورت تعریف سطح دسترسی وجود دارد."
    },
    {
        title: "هسته‌ی مبتنی بر فریم‌ورک‌های مدرن",
        body:
            "لایه‌ی بک‌اند بر پایه‌ی فناوری‌های مدرن و پایدار توسعه یافته است تا نگه‌داری، توسعه و یکپارچگی با سامانه‌های دیگر در طول زمان ساده و قابل اتکا باشد. لایه‌ی فرانت‌اند با تمرکز بر تجربه‌ی کاربری روان و واکنش‌گرا طراحی شده است."
    },
    {
        title: "پایگاه داده ساخت‌یافته و مقیاس‌پذیر",
        body:
            "داده‌های کلینیک روی پایگاه داده‌ای ساخت‌یافته ذخیره می‌شود که برای حجم بالای نوبت‌ها، پرونده‌ها و سوابق مالی آماده است. معماری داده امکان گزارش‌گیری و تحلیل مؤثر اطلاعات را در آینده ساده‌تر می‌کند."
    },
    {
        title: "آماده برای یکپارچگی (Integration-Ready)",
        body:
            "زیرساخت کلینیکانز با نگاه API-محور طراحی شده است تا در صورت نیاز، امکان اتصال به سامانه‌های مکمل (مانند سیستم‌های آزمایشگاهی، پرداخت، پیامک و…) فراهم باشد و اکوسیستم دیجیتال اختصاصی هر کلینیک شکل بگیرد."
    }
];

export default function ClinicansTechSection ()
{
    return (
        <section id="clinicans-tech" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    تکنولوژی و زیرساخت کلینیکانز
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    پلتفرمی تحت‌وب، مقیاس‌پذیر و قابل‌اتکا؛ ساخته‌شده با فناوری‌های روز و
                    آماده برای رشد کلینیک شما.
                </p>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    کلینیکانز به‌عنوان یک پلتفرم تحت‌وب طراحی شده است؛ یعنی برای استفاده
                    از آن نیازی به نصب نرم‌افزارهای سنگین یا تجهیزات خاص در کلینیک نیست.
                    تنها با یک مرورگر به‌روز و اینترنت پایدار، می‌توان از هر کامپیوتر یا
                    تبلت در محیط کلینیک به پنل دسترسی داشت. زیرساخت نرم‌افزاری و پایگاه
                    داده‌ی سیستم، بر پایه‌ی فناوری‌های مدرن و قابل‌گسترش انتخاب شده است
                    تا بتواند هم نیاز یک کلینیک تک‌شعبه‌ای و هم شبکه‌ای از کلینیک‌ها را
                    پاسخ دهد.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    { techBlocks.map( ( block ) => (
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
