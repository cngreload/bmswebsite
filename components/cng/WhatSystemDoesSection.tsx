export default function WhatSystemDoesSection ()
{
    return (
        <section id="what-system-does" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    ICTS دقیقاً چه می‌کند؟ از میدان تا تصمیم مدیریتی
                </h2>
                <p className="text-xs md:text-sm text-slate-700 max-w-3xl ml-auto">
                    ICTS یک نرم‌افزار تنها یا یک دستگاه تکی نیست؛ زنجیره‌ای است از
                    سخت‌افزار صنعتی، نرم‌افزار میدانی و داشبورد مدیریتی که داده را از
                    لحظه‌ی رخ‌داد در جایگاه، تا لحظه‌ی تصمیم در سطح مدیریت و حاکمیت، حمل
                    و تبدیل می‌کند.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-[11px] md:text-sm leading-relaxed text-slate-700">
                        <h3 className="mb-2 text-sm md:text-base font-semibold text-bms-dark">
                            ۱. داده از میدان
                        </h3>
                        <p>
                            سنسورها، نازل‌ها، کمپرسورها، تگ خودرو و تجهیزات حیاتی جایگاه، هر
                            کدام سیگنال و داده‌ای تولید می‌کنند؛ از فشار و دما تا تعداد
                            تراکنش‌ها و وضعیت تجهیزات. ICTS این داده‌های خام را در سطح
                            جایگاه جمع‌آوری، پایش و اعتبارسنجی می‌کند.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-[11px] md:text-sm leading-relaxed text-slate-700">
                        <h3 className="mb-2 text-sm md:text-base font-semibold text-bms-dark">
                            ۲. پردازش و کنترل هوشمند
                        </h3>
                        <p>
                            هسته نرم‌افزاری جایگاه با تکیه بر قوانین عملیاتی، آستانه‌ها و
                            سناریوهای تعریف‌شده، شرایط را تحلیل و در صورت لزوم آلارم صادر
                            می‌کند، از سوخت‌گیری خودروهای ناایمن جلوگیری می‌کند و داده‌های
                            ساخت‌یافته را به مرکز ارسال می‌کند.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm text-[11px] md:text-sm leading-relaxed text-slate-700">
                        <h3 className="mb-2 text-sm md:text-base font-semibold text-bms-dark">
                            ۳. داشبورد، گزارش و هوش تجاری
                        </h3>
                        <p>
                            در سطح مرکزی، داده‌های جایگاه‌های مختلف تجمیع و ذخیره‌سازی
                            می‌شوند. مدیران می‌توانند از طریق داشبورد تحت‌وب، وضعیت لحظه‌ای را
                            ببینند، گزارش‌های دوره‌ای بگیرند و با تحلیل روندها، برای توسعه
                            شبکه، سیاست‌های قیمتی و ارتقای ایمنی تصمیم‌سازی کنند.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
