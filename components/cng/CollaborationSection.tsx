export default function CollaborationSection ()
{
    return (
        <section id="collaboration" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    مدل همکاری؛ از هم‌فکری تا هم‌سرنوشتی در صنعت CNG
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto">
                    ICTS به‌گونه‌ای طراحی شده است که بتواند در کنار بازیگران اصلی زنجیره
                    سوخت، نه در مقابل آن‌ها، عمل کند.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    <CollabCard title="همکاری با نهادهای حاکمیتی و سیاست‌گذار">
                        بارمان آماده است تا در کنار وزارت نفت، شرکت ملی پخش فرآورده‌های
                        نفتی، شرکت ملی گاز، سازمان ملی استاندارد، سازمان محیط‌زیست و دیگر
                        نهادهای ذی‌ربط، ICTS را به‌عنوان زیرساخت بومی اجرای مصوبه
                        هوشمندسازی جایگاه‌های CNG مستقر کند؛ شامل طراحی چارچوب‌های فنی و
                        نظارتی مشترک، تعریف استانداردهای مرجع و تدوین نقشه‌راه استقرار ملی.
                    </CollabCard>

                    <CollabCard title="همکاری با صنف و بهره‌برداران جایگاه‌ها">
                        صنف جایگاه‌داران و شرکت‌های بهره‌بردار، خط مقدم اجرای این طرح
                        هستند. تمرکز بر الگوهای استقرار مرحله‌ای متناسب با توان مالی و
                        عملیاتی، مدل‌های اقتصادی روشن و طراحی برنامه‌های آموزش و پشتیبانی
                        عملیاتی برای اپراتورها و مدیران جایگاه‌ها است.
                    </CollabCard>

                    <CollabCard title="همکاری با شرکت‌های پرداخت الکترونیک (PSP)">
                        ICTS فرصتی جدی برای توسعه بازار پرداخت صنعتی و کیف‌پول‌های تخصصی
                        سوخت است. این همکاری می‌تواند شامل پیاده‌سازی مشترک زیرساخت پرداخت
                        متناسب با الزامات صنعتی، طراحی محصولات مالی جدید و عرضه‌ی آن‌ها به
                        ‌عنوان نمونه‌ای از مسئولیت اجتماعی در حوزه ایمنی و بهره‌وری انرژی
                        باشد.
                    </CollabCard>

                    <CollabCard title="همکاری تحقیقاتی و توسعه‌ای (R&D)">
                        با توجه به ماهیت داده‌محور ICTS، امکان همکاری با مراکز پژوهشی،
                        دانشگاه‌ها و شرکت‌های فناور در حوزه تحلیل داده، هوش مصنوعی و
                        بهینه‌سازی مصرف انرژی فراهم است؛ از پروژه‌های مشترک تحقیقاتی روی
                        داده‌های ناشناس تا توسعه ماژول‌های تحلیلی پیشرفته و سیاست‌های
                        نوآورانه در مدیریت مصرف و قیمت‌گذاری سوخت.
                    </CollabCard>
                </div>
            </div>
        </section>
    );
}

function CollabCard ( {
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
