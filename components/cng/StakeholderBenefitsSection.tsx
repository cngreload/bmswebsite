export default function StakeholderBenefitsSection ()
{
    return (
        <section id="stakeholder-benefits" className="pt-8">
            <div className="mx-auto max-w-6xl space-y-4 text-right">
                <h2 className="text-lg md:text-xl font-semibold text-bms-dark">
                    فواید برای مردم، حاکمیت و صنف جایگاه‌داران
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                    {/* مردم */ }
                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                        <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                            مردم؛ تجربه‌ای ایمن‌تر و شفاف‌تر
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-[11px] md:text-sm text-slate-700 list-disc pr-4">
                            <li>
                                کاهش ریسک حوادث پرهزینه با جلوگیری از سوخت‌گیری خودروهای ناایمن
                            </li>
                            <li>پرداخت سریع‌تر، دقیق‌تر و امن‌تر در فرآیند سوخت‌گیری</li>
                            <li>
                                شفافیت در خدمات و افزایش اعتماد به زیرساخت سوخت پاک CNG
                            </li>
                        </ul>
                    </article>

                    {/* حاکمیت / صنعت گاز طبیعی */ }
                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                        <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                            حاکمیت و صنعت گاز طبیعی؛ داده به‌عنوان سرمایه راهبردی
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-[11px] md:text-sm text-slate-700 list-disc pr-4">
                            <li>
                                تصویر لحظه‌ای و مستند از وضعیت شبکه CNG در سطح ملی و استانی
                            </li>
                            <li>
                                امکان سیاست‌گذاری دقیق‌تر با تکیه بر داده‌های واقعی مصرف و
                                عملکرد
                            </li>
                            <li>
                                کاهش وابستگی به فناوری‌های خارجی و افزایش تاب‌آوری در برابر
                                تحریم و تهدیدات سایبری
                            </li>
                        </ul>
                    </article>

                    {/* صنف جایگاه‌داران */ }
                    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                        <h3 className="text-sm md:text-base font-semibold text-bms-dark">
                            صنف جایگاه‌داران؛ مدیریت هوشمند و سودآورتر
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-[11px] md:text-sm text-slate-700 list-disc pr-4">
                            <li>
                                کاهش خطا و تخلف با حذف فرآیندهای دستی و ثبت دقیق تراکنش‌ها
                            </li>
                            <li>
                                امکان رصد عملکرد جایگاه، شیفت‌ها و تجهیزات در یک نگاه مدیریتی
                            </li>
                            <li>
                                آماده‌سازی زیرساخت برای مدل‌های درآمدی جدید، همکاری با PSPها و
                                طرح‌های وفاداری مشتریان
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
