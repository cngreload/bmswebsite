import Link from "next/link";

const cards = [
    {
        href: "/about/story",
        title: "داستان بارمان محور اسپادانا",
        desc: "از تجربه‌ی میدانی جایگاه‌های CNG تا طراحی سامانه‌های بومی هوشمندسازی.",
    },
    {
        href: "/about/mission",
        title: "مأموریت ما",
        desc: "طراحی و توسعه‌ی زیرساخت‌های بومی برای کنترل، پایش و تصمیم‌سازی هوشمند.",
    },
    {
        href: "/about/values",
        title: "ارزش‌های محوری",
        desc: "واقعیت‌محوری، بومی‌سازی عمیق، شفافیت، ایمنی و همکاری به‌عنوان ستون‌های هویت بارمان.",
    },
    {
        href: "/about/team",
        title: "تیم راهبر",
        desc: "ترکیبی از تجربه‌ی میدانی، مهندسی، فناوری و نگاه راهبردی.",
    },
    {
        href: "/about/governance",
        title: "حاکمیت شرکتی و ساختار تصمیم‌گیری",
        desc: "ساختار شفاف، پاسخ‌گو و مبتنی بر مدیریت ریسک برای پروژه‌های حساس.",
    },
    {
        href: "/about/code-of-ethics",
        title: "منشور حرفه‌ای و کد اخلاقی",
        desc: "تقدم جان و ایمنی انسان، صداقت، محرمانگی و پرهیز از تضاد منافع.",
    },
    {
        href: "/about/ecosystem",
        title: "اکوسیستم همکاری بارمان محور",
        desc: "همکاری با حاکمیت، بخش خصوصی، دانشگاه‌ها، شرکت‌های فناور و سرمایه‌گذاران.",
    },
];

export default function AboutOverviewPage ()
{
    return (
        <div className="space-y-8">
            <section className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    درباره بارمان محور اسپادانا
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    بارمان محور اسپادانا یک شرکت دانش‌بنیان و فناوری‌محور است که با تکیه بر
                    تجربه‌ی میدانی در زیرساخت‌های حیاتی کشور و ترکیب آن با مهندسی
                    نرم‌افزار، سخت‌افزار و طراحی پلتفرم، راهکارهای بومی برای هوشمندسازی
                    صنعت، انرژی و خدمات سلامت توسعه می‌دهد.
                </p>
            </section>

            <section className="max-w-5xl mx-auto">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    { cards.map( ( card ) => (
                        <Link
                            key={ card.href }
                            href={ card.href }
                            className="group h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-bms-primary/60 transition-all"
                        >
                            <h2 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-bms-primary">
                                { card.title }
                            </h2>
                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                                { card.desc }
                            </p>
                        </Link>
                    ) ) }
                </div>
            </section>
        </div>
    );
}
