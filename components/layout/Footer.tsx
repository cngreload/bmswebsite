// components/layout/Footer.tsx
import Link from "next/link";
import
{
    LuMapPin,
    LuPhone,
    LuMail,
    LuLinkedin,
    LuInstagram,
    LuGlobe
} from "react-icons/lu";

export default function Footer ()
{
    const year = new Date().getFullYear();

    const productLinks = [
        { label: "سامانه هوشمند CNG", href: "/cng-automation" },
        { label: "پلتفرم مدیریت کلینیک", href: "/clinicans" },
        { label: "هوشمندسازی صنعتی", href: "/intelligentautomation" },
    ];

    const companyLinks = [
        { label: "درباره ما", href: "/about" },
        { label: "تماس با ما", href: "/contact-us" },
        { label: "اخبار و مقالات", href: "/news" },
        { label: "فرصت‌های شغلی", href: "/careers" },
    ];

    return (
        <footer className="border-t border-slate-200 bg-slate-50 mt-auto text-right" role="contentinfo">
            <div className="container py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* 1. Brand & Mission */ }
                    <div className="space-y-4">
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-lg font-bold text-bms-dark">بارمان محور اسپادانا</span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bms-primary text-white font-bold shadow-sm">B</div>
                        </div>
                        <p className="text-xs leading-6 text-slate-500 text-justify pl-4">
                            پیشگام در توسعه زیرساخت‌های بومی اینترنت اشیاء (IoT) و پلتفرم‌های نرم‌افزاری
                            برای صنایع استراتژیک کشور. ما داده‌های خام میدان را به تصمیمات هوشمند مدیریتی تبدیل می‌کنیم.
                        </p>

                        {/* Socials */ }
                        <div className="flex items-center justify-end gap-3 pt-2">
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors" aria-label="LinkedIn">
                                <LuLinkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-pink-600 hover:border-pink-200 transition-colors" aria-label="Instagram">
                                <LuInstagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 transition-colors" aria-label="Website">
                                <LuGlobe className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Solutions */ }
                    <div>
                        <h3 className="text-sm font-bold text-bms-dark mb-4">راهکارها</h3>
                        <ul className="space-y-3 text-xs md:text-sm text-slate-600">
                            { productLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link href={ link.href } className="hover:text-bms-primary transition-colors block py-1">
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* 3. Company */ }
                    <div>
                        <h3 className="text-sm font-bold text-bms-dark mb-4">دسترسی سریع</h3>
                        <ul className="space-y-3 text-xs md:text-sm text-slate-600">
                            { companyLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link href={ link.href } className="hover:text-bms-primary transition-colors block py-1">
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* 4. Contact Info (Local SEO Signal) */ }
                    <div>
                        <h3 className="text-sm font-bold text-bms-dark mb-4">ارتباط با ما</h3>
                        <ul className="space-y-4 text-xs md:text-sm text-slate-600">
                            <li className="flex items-start justify-end gap-3">
                                <span className="text-slate-700 leading-6">اصفهان، خیابان...، ساختمان بارمان، طبقه ۳</span>
                                <LuMapPin className="h-5 w-5 shrink-0 text-bms-primary/60 mt-0.5" />
                            </li>
                            <li className="flex items-center justify-end gap-3">
                                <a href="tel:0313XXXXXXX" className="hover:text-bms-primary dir-ltr">۰۳۱-۳XXXXXXX</a>
                                <LuPhone className="h-5 w-5 shrink-0 text-bms-primary/60" />
                            </li>
                            <li className="flex items-center justify-end gap-3">
                                <a href="mailto:info@barman-mes.ir" className="hover:text-bms-primary font-mono text-xs">info@barman-mes.ir</a>
                                <LuMail className="h-5 w-5 shrink-0 text-bms-primary/60" />
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */ }
                <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-slate-500">
                    <p className="font-medium">© { year } تمامی حقوق برای شرکت بارمان محور اسپادانا محفوظ است.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-bms-primary transition-colors">حریم خصوصی</span>
                        <span className="cursor-pointer hover:text-bms-primary transition-colors">قوانین و مقررات</span>
                        <span className="cursor-pointer hover:text-bms-primary transition-colors">نقشه سایت</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}