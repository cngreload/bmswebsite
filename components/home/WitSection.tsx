import Link from "next/link";
import { LuHandshake, LuGlobe } from "react-icons/lu";

export default function WitSection ()
{
    return (
        <section className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-4">

                <article className="rounded-[3rem] bg-slate-900 p-12 md:p-16 text-center text-white shadow-xl">
                    <div className="mx-auto max-w-3xl space-y-10">

                        <div className="flex justify-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                <LuHandshake className="h-6 w-6" />
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold">
                            همکاری برای{ " " }
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                آینده هوشمند
                            </span>
                        </h3>

                        <p className="text-slate-300 leading-8">
                            بارمان با تکیه بر زیرساخت ماژولار و پلتفرم‌محور خود،
                            بستری برای توسعه مشترک محصولات، سرمایه‌گذاری فناورانه
                            و ورود هدفمند به حوزه‌های نوظهور صنعتی و دیجیتال فراهم می‌کند.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Link
                                href="/intelligentautomation"
                                className="rounded-xl bg-white px-8 py-3 text-sm font-bold text-slate-900"
                            >
                                مدل‌های همکاری
                            </Link>

                            <Link
                                href="/contact-us"
                                className="rounded-xl border border-white/20 px-8 py-3 text-sm font-bold text-white"
                            >
                                تماس با توسعه کسب‌وکار
                            </Link>
                        </div>

                        <div className="pt-6 text-xs tracking-widest text-blue-300">
                            <LuGlobe className="inline h-3 w-3 mr-1" />
                            Worldwide Intelligent Technology (WIT)
                        </div>

                    </div>
                </article>
            </div>
        </section>
    );
}
