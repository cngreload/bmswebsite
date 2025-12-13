export default function ClinicansProblemsSection ()
{
    return (
        <section id="clinicans-problems" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    مشکل امروز کلینیک‌ها چیست؟
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto leading-relaxed">
                    حتی موفق‌ترین کلینیک‌های سلامت و زیبایی هم امروز با چالش‌هایی روبه‌رو
                    هستند که ریشه‌ی آن‌ها در «پراکنده‌بودن اطلاعات و ابزارها» است؛ از
                    نوبت‌دهی و پرونده تا مالی و ارتباط با مراجعان. نتیجه این است که زمان
                    و انرژی زیادی صرف مدیریت روزمره می‌شود، نه ارتقای کیفیت خدمات و
                    تجربه‌ی بیمار.
                </p>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* مدیریت و مالک کلینیک */ }
                    <ProblemCard title="از نگاه مدیریت و مالک کلینیک" subtitle="تصمیم‌گیری با داده‌های ناقص و پنل‌های پراکنده">
                        <li>
                            نوبت‌دهی، پرونده، مالی، پیامک و وب‌سایت هر کدام در یک سیستم
                            جداگانه مدیریت می‌شوند.
                        </li>
                        <li>
                            گزارش‌های مالی، عملکرد پزشکان و وضعیت خدمات، یک‌پارچه و لحظه‌ای
                            در دسترس نیست.
                        </li>
                        <li>
                            رشد کلینیک و توسعه شعب بدون تصویر شفاف از وضعیت واقعی، ریسک‌پذیر
                            و دشوار است.
                        </li>
                    </ProblemCard>

                    {/* پزشکان و تیم درمان */ }
                    <ProblemCard title="از نگاه پزشکان و تیم درمان" subtitle="وقتی تمرکز بالینی زیر فشار کار اداری قرار می‌گیرد">
                        <li>
                            دسترسی به سوابق کامل مراجع، تصاویر و درمان‌های قبلی همیشه سریع و
                            منظم نیست.
                        </li>
                        <li>
                            بخشی از زمان و تمرکز پزشک، صرف هماهنگی نوبت‌ها، فرم‌ها و
                            پیگیری‌های دستی می‌شود.
                        </li>
                        <li>
                            نبود یک مسیر روشن برای مستندسازی درمان، کار تیمی و پیگیری نتایج
                            را سخت‌تر می‌کند.
                        </li>
                    </ProblemCard>

                    {/* پذیرش و منشی‌ها */ }
                    <ProblemCard title="از نگاه پذیرش و منشی‌ها" subtitle="همه‌چیز روی تلفن و برگه‌های کاغذ">
                        <li>
                            تماس‌های مداوم تلفنی برای رزرو، لغو و جابه‌جایی نوبت‌ها، فشار
                            زیادی ایجاد می‌کند.
                        </li>
                        <li>
                            ثبت دستی اطلاعات و دوباره‌کاری بین دفتر، فایل و چند سامانه،
                            احتمال خطا را بالا می‌برد.
                        </li>
                        <li>
                            نبود یک تقویم یک‌پارچه برای همه پزشکان و اتاق‌ها، مدیریت ظرفیت و
                            زمان‌بندی را دشوار می‌سازد.
                        </li>
                    </ProblemCard>

                    {/* مراجعان و بیماران */ }
                    <ProblemCard title="از نگاه مراجعان و بیماران" subtitle="تجربه‌ای که می‌تواند آرام‌تر و شفاف‌تر باشد">
                        <li>
                            نوبت‌گیری اغلب از طریق تماس تلفنی و پیام‌رسان‌های پراکنده انجام
                            می‌شود.
                        </li>
                        <li>
                            اطلاع‌رسانی درباره زمان نوبت، تغییرات و پیگیری‌های بعد از درمان
                            همیشه منظم نیست.
                        </li>
                        <li>
                            مراجع احساس نمی‌کند مسیر ارتباطی مشخص، امن و حرفه‌ای با کلینیک
                            دارد.
                        </li>
                    </ProblemCard>
                </div>
            </div>
        </section>
    );
}

function ProblemCard ( {
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
