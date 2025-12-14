'use client';
import Link from "next/link";

export default function Footer ()
{
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white mt-10">
            <div className="container py-8 md:py-10">
                <div className="grid gap-8 md:grid-cols-3 text-sm">
                    {/* Column 1 – Brand */ }
                    <div className="space-y-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                            <div className="leading-tight">
                                <div className="text-sm font-semibold text-bms-dark">
                                    بارمان محور اسپادانا
                                </div>
                                <div className="text-[11px] text-slate-500">
                                    سامانه‌های بومی هوشمندسازی کسب‌وکار و صنعت
                                </div>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-bms-primary text-white text-xs font-bold">
                                B
                            </div>
                        </div>
                        <p className="text-[13px] leading-relaxed text-slate-600">
                            توسعه سامانه‌های بومی پایش، کنترل و هوشمندسازی برای زیرساخت‌های
                            حیاتی، جایگاه‌های CNG و کلینیک‌های سلامت و زیبایی؛ با تمرکز بر
                            امنیت، پایداری و تصمیم‌سازی مبتنی بر داده.
                        </p>
                    </div>

                    {/* Column 2 – Navigation */ }
                    <div className="space-y-3 text-right">
                        <h3 className="text-sm font-semibold text-bms-dark">
                            لینک‌های اصلی
                        </h3>
                        <ul className="space-y-1.5 text-[13px] text-slate-600">
                            <li>
                                <Link href="/">صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href="/cng-automation">سامانه ICTS جایگاه‌های CNG</Link>
                            </li>
                            <li>
                                <Link href="/clinicans">پلتفرم Clinicans</Link>
                            </li>
                            <li>
                                <Link href="/intelligentautomation">
                                    راهکارهای هوشمندسازی صنعت ۴
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">اخبار و رویدادها</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">تماس با ما</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 – Contact / Legal */ }
                    <div className="space-y-3 text-right">
                        <h3 className="text-sm font-semibold text-bms-dark">
                            تماس و همکاری
                        </h3>
                        <p className="text-[13px] leading-relaxed text-slate-600">
                            برای گفت‌وگو درباره استقرار سامانه ICTS، پلتفرم Clinicans یا
                            طراحی راهکار اختصاصی هوشمندسازی، می‌توانید از طریق صفحه{ " " }
                            <Link
                                href="/contact-us"
                                className="underline underline-offset-4"
                            >
                                تماس با ما
                            </Link>{ " " }
                            درخواست خود را ثبت کنید.
                        </p>
                        <p className="text-[12px] text-slate-500">
                            اطلاعات تماس و جزئیات حقوقی در نسخه‌های بعدی وب‌سایت تکمیل
                            خواهند شد.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */ }
                <div className="mt-6 border-t border-slate-200 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
                    <p className="text-center md:text-right">
                        © { year } بارمان محور اسپادانا. تمامی حقوق محفوظ است.
                    </p>
                    <p className="text-center md:text-left">
                        زیرساخت بومی برای پایش، کنترل و هوشمندسازی دارایی‌های حیاتی.
                    </p>
                </div>
            </div>
        </footer>
    );
}
