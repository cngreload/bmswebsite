import Link from "next/link";
import
{
    LuMapPin,
    LuPhone,
    LuMail,
    LuLinkedin,
    LuInstagram,
    LuArrowUpLeft,
} from "react-icons/lu";
import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string; }>;

export default function Footer ()
{
    const year = new Date().getFullYear();

    const productLinks = [
        { label: "امنیت انرژی (ICTS)", href: "/cng-automation" },
        { label: "سلامت دیجیتال (Clinicans)", href: "/clinicans" },
        { label: "هوشمندسازی صنعتی", href: "/intelligentautomation" },
    ];

    const companyLinks = [
        { label: "داستان ما", href: "/about/story" },
        { label: "تماس و گفتگو", href: "/contact-us" },
        { label: "مجله خبری", href: "/news" },
        { label: "فرصت‌های شغلی", href: "/careers" },
    ];

    return (
        <footer
            className="bg-white border-t border-slate-200 mt-auto text-right"
            role="contentinfo"
        >
            <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
                <div className="grid gap-12 lg:grid-cols-12">

                    {/* BRAND */ }
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-bms-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                                B
                            </div>
                            <span className="text-xl font-black text-slate-900 tracking-tight">
                                بارمان محور
                            </span>
                        </Link>

                        <p className="text-sm leading-8 text-slate-600 text-justify pl-4">
                            ما اینجا هستیم تا فاصله بین «داده‌های میدانی» و «آرامش مدیریتی» را پر کنیم.
                            تکنولوژی برای ما ابزار است، نه هدف؛ هدف، ساختن زیرساخت‌هایی است که امن،
                            پایدار و انسانی باشند.
                        </p>

                        <div className="flex gap-3">
                            <SocialLink href="#" icon={ LuLinkedin } label="لینکدین" />
                            <SocialLink href="#" icon={ LuInstagram } label="اینستاگرام" />
                        </div>
                    </div>

                    {/* PRODUCTS */ }
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-bold text-slate-900 mb-6 text-sm">
                            محصولات
                        </h4>
                        <ul className="space-y-4">
                            { productLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="text-sm text-slate-600 hover:text-bms-primary transition-colors flex items-center gap-1 group"
                                    >
                                        { link.label }
                                        <LuArrowUpLeft className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* COMPANY */ }
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6 text-sm">
                            گشت و گذار
                        </h4>
                        <ul className="space-y-4">
                            { companyLinks.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="text-sm text-slate-600 hover:text-bms-primary transition-colors"
                                    >
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* CONTACT */ }
                    <div className="lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                            <h4 className="font-bold text-slate-900 text-sm">
                                هم‌صحبت شویم
                            </h4>

                            <div className="space-y-3">
                                <a
                                    href="tel:021-66463924"
                                    className="flex items-center justify-end gap-3 text-slate-600 hover:text-bms-primary transition-colors group"
                                >
                                    <span className="text-sm font-mono dir-ltr group-hover:font-bold">
                                        021-66463924
                                    </span>
                                    <IconBox icon={ LuPhone } />
                                </a>

                                <a
                                    href="mailto:info@co-bms.ir"
                                    className="flex items-center justify-end gap-3 text-slate-600 hover:text-bms-primary transition-colors group"
                                >
                                    <span className="text-sm font-mono group-hover:font-bold">
                                        info@co-bms.ir
                                    </span>
                                    <IconBox icon={ LuMail } />
                                </a>
                            </div>

                            <div className="pt-2 border-t border-slate-200">
                                <div className="flex items-start justify-end gap-3 text-right">
                                    <p className="text-xs text-slate-500 leading-6">
                                        تهران، بلوار کشاورز، وصال شیرازی، پلاک 57
                                    </p>
                                    <LuMapPin className="w-5 h-5 text-slate-400 mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */ }
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400 font-medium">
                        © { year } بارمان محور اسپادانا. تمامی حقوق محفوظ است.
                    </p>
                    <div className="flex gap-6 text-[11px] text-slate-500">
                        <Link href="#" className="hover:text-bms-primary">
                            حریم خصوصی
                        </Link>
                        <Link href="#" className="hover:text-bms-primary">
                            شرایط استفاده
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ---------- HELPERS ---------- */

function SocialLink ( {
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: IconType;
    label: string;
} )
{
    return (
        <a
            href={ href }
            aria-label={ label }
            className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}

function IconBox ( { icon: Icon }: { icon: IconType; } )
{
    return (
        <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-bms-primary group-hover:text-bms-primary transition-colors">
            <Icon className="w-4 h-4" />
        </div>
    );
}
