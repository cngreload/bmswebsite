export default function ClinicansOverviewSection ()
{
    return (
        <section id="clinicans-overview" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    کلینیکانز در یک نگاه
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    یک پلتفرم یک‌پارچه برای مدیریت حرفه‌ای کلینیک‌های سلامت و زیبایی؛ از
                    اولین تماس مراجع تا آخرین گزارش مدیریتی.
                </p>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    کلینیکانز یک پلتفرم بومی و تحت‌وب برای مدیریت هوشمند کلینیک‌های سلامت
                    و زیبایی است که نوبت‌دهی، پرونده‌ی مراجعین، امور مالی و ارتباط با
                    بیماران را در یک محیط یک‌پارچه گرد هم می‌آورد. هدف آن ساده است: کاهش
                    شلوغی پنل‌ها و کارهای تکراری، و فراهم‌کردن بستری که روی آن بتوان یک
                    کلینیک مدرن، منظم و در حال رشد را اداره کرد.
                </p>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <OverviewCard title="نوبت‌دهی و جریان مراجعین">
                        سیستم نوبت‌دهی یک‌پارچه برای مدیریت رزروها، لغو و جابه‌جایی نوبت،
                        صف انتظار و برنامه‌ی روزانه‌ی هر پزشک و اتاق؛ بدون نیاز به چند دفتر
                        و چند پنل جدا.
                    </OverviewCard>

                    <OverviewCard title="پرونده‌ی مراجع و مسیر درمان">
                        ثبت ساخت‌یافته‌ی مراجعات، خدمات، نتایج و مستندات هر بیمار در یک
                        پرونده‌ی دیجیتال؛ تا پزشک در هر ویزیت، تصویر کامل و منظم از سابقه‌ی
                        درمانی و زیبایی مراجع داشته باشد.
                    </OverviewCard>

                    <OverviewCard title="مالی و مدیریت درآمد کلینیک">
                        ثبت خدمات، صدور فاکتور، تفکیک درآمد بر اساس پزشک و خدمت، و گزارش‌های
                        مالی قابل اتکا؛ برای تصمیم‌گیری دقیق و برنامه‌ریزی برای توسعه.
                    </OverviewCard>

                    <OverviewCard title="ارتباط با مراجع و رشد کلینیک">
                        ابزارهایی برای پیام و یادآوری، اطلاع‌رسانی هوشمند و کمپین‌های
                        هدفمند؛ تا ارتباط کلینیک با مراجعان منظم، حرفه‌ای و مبتنی بر داده
                        باشد.
                    </OverviewCard>
                </div>
            </div>
        </section>
    );
}

function OverviewCard ( {
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
} )
{
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-[11px] md:text-sm leading-relaxed text-slate-700">
            <h3 className="mb-2 text-sm md:text-base font-semibold text-bms-dark">
                { title }
            </h3>
            <p>{ children }</p>
        </article>
    );
}
