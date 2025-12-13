export default function ClinicansForWhomSection ()
{
    return (
        <section id="clinicans-for-whom" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    برای چه کسانی طراحی شده است؟
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    کلینیکانز فقط یک نرم‌افزار نوبت‌دهی یا فقط یک داشبورد مدیریتی نیست؛
                    پلتفرمی است که برای همه‌ی نقش‌های کلیدی در کلینیک طراحی شده است؛ از
                    مدیریت و پزشک تا تیم پذیرش و خود مراجع. هرکدام تجربه‌ای متناسب با نیاز
                    خود دارند، اما همه روی یک بستر مشترک کار می‌کنند.
                </p>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <RoleCard title="برای مدیران و مالکان کلینیک" subtitle="دید شفاف، تصمیم‌گیری مطمئن">
                        <li>تصویر یک‌پارچه از نوبت‌ها، خدمات، درآمد و عملکرد پزشکان</li>
                        <li>
                            گزارش‌های مالی و مدیریتی قابل اتکا برای برنامه‌ریزی و توسعه
                        </li>
                        <li>امکان مدیریت یک یا چند شعبه در یک پنل واحد</li>
                    </RoleCard>

                    <RoleCard title="برای پزشکان و کادر درمان" subtitle="تمرکز بر درمان، نه فرم و کاغذ">
                        <li>دسترسی سریع به پرونده‌ی کامل و منظم هر مراجع</li>
                        <li>ثبت ساده‌ی خدمات، نتایج و یادداشت‌ها در جریان ویزیت</li>
                        <li>
                            هماهنگی بهتر با تیم پذیرش و کاهش وقفه‌های اداری در کار بالینی
                        </li>
                    </RoleCard>

                    <RoleCard title="برای تیم پذیرش و منشی‌ها" subtitle="نظم در نوبت‌ها، آرامش در پذیرش">
                        <li>
                            تقویم یک‌پارچه برای مدیریت نوبت‌های همه‌ی پزشکان و اتاق‌ها
                        </li>
                        <li>
                            ثبت، لغو و جابه‌جایی نوبت بدون برگه و دفتر و چند سیستم موازی
                        </li>
                        <li>
                            کاهش تماس‌های تکراری و خطاهای انسانی در ثبت اطلاعات مراجعان
                        </li>
                    </RoleCard>

                    <RoleCard title="برای مراجعان و بیماران" subtitle="تجربه‌ای شفاف، محترمانه و قابل پیگیری">
                        <li>نوبت‌گیری آسان و منظم، با اطلاع‌رسانی و یادآوری به‌موقع</li>
                        <li>
                            ارتباط روشن با کلینیک، بدون سردرگمی بین کانال‌های مختلف
                        </li>
                        <li>
                            احساس اعتماد بیشتر نسبت به نظم، دقت و حرفه‌ای بودن کلینیک
                        </li>
                    </RoleCard>
                </div>
            </div>
        </section>
    );
}

function RoleCard ( {
    title,
    subtitle,
    children
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
} )
{
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
            <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                { title }
            </h3>
            <p className="mt-1 text-[11px] md:text-xs text-slate-600">{ subtitle }</p>
            <ul className="mt-2 space-y-1.5 pr-4 list-disc text-[11px] md:text-sm text-slate-700">
                { children }
            </ul>
        </article>
    );
}
