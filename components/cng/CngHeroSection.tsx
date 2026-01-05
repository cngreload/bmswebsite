import Link from "next/link";
import
{
    LuDownload,
    LuCalendarCheck,
    LuShieldCheck,
    LuGauge,
    LuNetwork,
} from "react-icons/lu";

export default function CngHeroSection ()
{
    return (
        <section
            id="cng-hero"
            className="relative py-8 md:py-12 lg:py-16 overflow-hidden"
            aria-labelledby="cng-hero-heading"
        >
            {/* Technical Background Grid */ }
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 px-4">

                {/* CONTENT */ }
                <div className="md:col-span-7 space-y-6 text-right">

                    {/* Trust / System Badge */ }
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-bold text-bms-primary shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-bms-primary" />
                        </span>
                        سامانه بومی پایش و کنترل صنعتی زیرساخت CNG
                    </div>

                    {/* H1 */ }
                    <h1
                        id="cng-hero-heading"
                        className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-bms-dark text-balance"
                    >
                        سامانه مرجع <span className="text-bms-primary">پایش، ایمنی و کنترل</span>
                        <br />
                        جایگاه‌های سوخت CNG
                    </h1>

                    {/* Definition-style paragraph */ }
                    <p className="text-sm md:text-base text-slate-700 leading-8 max-w-2xl text-justify">
                        <strong className="font-semibold text-slate-900">
                            ICTS (Intelligent Control & Tag System)
                        </strong>{ " " }
                        یک سامانه صنعتی یکپارچه و بومی برای پایش لحظه‌ای،
                        افزایش ایمنی عملیات و مدیریت داده‌محور جایگاه‌های CNG است.
                        این سامانه با تکیه بر{ " " }
                        <strong className="text-slate-900">اینترنت اشیاء صنعتی (IIoT)</strong>،
                        کنترلرهای صنعتی و پردازش لبه، برای پاسخ‌گویی به
                        الزامات فنی، نظارتی و حاکمیتی شبکه سوخت کشور طراحی شده است.
                    </p>

                    {/* Industrial Proof Signals */ }
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-slate-600">
                        <li className="flex items-center gap-1.5">
                            <LuGauge className="h-4 w-4 text-emerald-500" />
                            <span>پایش بلادرنگ تجهیزات، خودرو و فرآیند</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <LuShieldCheck className="h-4 w-4 text-emerald-500" />
                            <span>ارتقای ایمنی عملیاتی و انطباق مقرراتی</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <LuNetwork className="h-4 w-4 text-emerald-500" />
                            <span>زیرساخت IIoT با سخت‌افزار صنعتی بومی</span>
                        </li>
                    </ul>

                    {/* Actions */ }
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bms-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-bms-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-bms-dark"
                        >
                            <LuCalendarCheck className="h-4 w-4" />
                            درخواست جلسه فنی و دمو
                        </Link>

                        <Link
                            href="/downloads/icts-intro.pdf"
                            target="_blank"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                        >
                            <LuDownload className="h-4 w-4 text-slate-500" />
                            دریافت معرفی‌نامه فنی (PDF)
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
