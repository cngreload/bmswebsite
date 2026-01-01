// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer ()
{
    const year = new Date().getFullYear();

    // 🧠 CRAWLER EMPATHY: Group links semantically
    const productLinks = [
        { label: "سامانه هوشمند CNG", href: "/cng-automation" },
        { label: "پلتفرم مدیریت کلینیک", href: "/clinicans" },
        { label: "هوشمندسازی صنعتی", href: "/intelligentautomation" },
    ];

    const companyLinks = [
        { label: "درباره ما", href: "/about" },
        { label: "تماس با ما", href: "/contact-us" },
        { label: "اخبار", href: "/news" },
    ];

    return (
        <footer className="border-t border-slate-200 bg-slate-50 mt-auto" role="contentinfo">
            <div className="container py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-4 lg:gap-16">

                    {/* Brand Column */ }
                    <div className="md:col-span-2 space-y-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-lg font-bold text-bms-dark">بارمان محور اسپادانا</span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bms-primary text-white font-bold">B</div>
                        </div>
                        <p className="text-sm text-slate-600 leading-7 max-w-sm ml-auto">
                            توسعه‌دهنده زیرساخت‌های بومی اینترنت اشیاء (IoT) و پلتفرم‌های نرم‌افزاری
                            برای صنایع استراتژیک کشور. ما داده‌ها را به تصمیمات هوشمند تبدیل می‌کنیم.
                        </p>
                    </div>

                    {/* Links Column 1 */ }
                    <div className="text-right">
                        <h3 className="text-sm font-bold text-bms-dark mb-4">محصولات و خدمات</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            { productLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link href={ link.href } className="hover:text-bms-primary transition-colors">
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* Links Column 2 */ }
                    <div className="text-right">
                        <h3 className="text-sm font-bold text-bms-dark mb-4">دسترسی سریع</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            { companyLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link href={ link.href } className="hover:text-bms-primary transition-colors">
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>
                </div>

                {/* Legal / Copyright */ }
                <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© { year } BMS Corp. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* 🧠 TRUST SIGNALS: Legal pages (placeholders for now) */ }
                        <span className="cursor-not-allowed">حریم خصوصی</span>
                        <span className="cursor-not-allowed">قوانین و مقررات</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}