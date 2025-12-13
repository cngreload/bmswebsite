// components/about/AboutEthicsSection.tsx

export default function AboutEthicsSection ()
{
    return (
        <section
            id="code-of-ethics"
            className="text-right space-y-4 border-t border-slate-100 pt-10"
        >
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    منشور حرفه‌ای و کد اخلاقی بارمان
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    تعهد حرفه‌ای در حوزه‌هایی که با جان و اعتماد مردم گره خورده‌اند
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    فعالیت در حوزه‌هایی مانند انرژی و سلامت، تنها یک فعالیت تجاری نیست؛
                    تعهدی است در برابر جان، امنیت و اعتماد مردم. منشور حرفه‌ای و کد
                    اخلاقی بارمان، چارچوبی است که رفتار فردی و سازمانی ما را در این مسیر
                    تعریف می‌کند.
                </p>

                <ul className="space-y-2 text-sm text-slate-700">
                    <li>
                        <span className="font-semibold">
                            تقدم جان و ایمنی انسان بر هر منفعت اقتصادی:
                        </span>{ " " }
                        در تصمیم‌گیری‌های فنی، تجاری و زمانی، ایمنی و سلامت استفاده‌کنندگان
                        از سامانه‌های ما، معیار اول است.
                    </li>
                    <li>
                        <span className="font-semibold">
                            صداقت و شفافیت در تعاملات:
                        </span>{ " " }
                        در بیان توانمندی‌ها، محدودیت‌ها و نتایج پروژه‌ها صادقانه عمل
                        می‌کنیم و از هرگونه ارائه‌ی غیرواقعی یا مبالغه‌آمیز پرهیز داریم.
                    </li>
                    <li>
                        <span className="font-semibold">
                            حفظ محرمانگی و حریم خصوصی:
                        </span>{ " " }
                        داده‌های مربوط به شهروندان، کلینیک‌ها و زیرساخت‌ها امانتی در دست
                        ماست و صرفاً در چارچوب‌های قانونی و حرفه‌ای مورد استفاده قرار
                        می‌گیرد.
                    </li>
                    <li>
                        <span className="font-semibold">
                            پرهیز از تضاد منافع و تعارض نقش‌ها:
                        </span>{ " " }
                        در همکاری با ذی‌نفعان مختلف، سازوکارهایی برای مدیریت و کاهش تضاد
                        منافع در نظر گرفته می‌شود تا اعتماد طرفین خدشه‌دار نشود.
                    </li>
                    <li>
                        <span className="font-semibold">
                            احترام به دانش، زمان و سرمایه‌ی دیگران:
                        </span>{ " " }
                        چه در تعامل با همکاران داخلی و چه با مشتریان، شرکا و
                        سرمایه‌گذاران، خود را ملزم به رفتار حرفه‌ای، احترام متقابل و رعایت
                        حقوق طرف مقابل می‌دانیم.
                    </li>
                </ul>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    این منشور در قراردادها، همکاری‌ها و فرهنگ سازمانی بارمان بازتاب می‌یابد
                    و نقض آن، صرفاً تخطی از یک متن، بلکه خدشه به هویت حرفه‌ای شرکت تلقی
                    می‌شود.
                </p>
            </div>
        </section>
    );
}
