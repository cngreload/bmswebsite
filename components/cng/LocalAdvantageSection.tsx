// components/cng/LocalAdvantageSection.tsx
import { LuMapPin, LuShieldCheck, LuGem } from "react-icons/lu";

const advantages = [
    {
        id: "native",
        title: "طراحی بومی برای میدان واقعی",
        icon: LuMapPin,
        description:
            "ICTS ترجمه‌ی یک محصول وارداتی نیست؛ بلکه از ابتدا بر اساس چالش‌ها، زیرساخت‌ها و فشارهای عملیاتی جایگاه‌های گاز ایران مهندسی شده است.",
    },
    {
        id: "support",
        title: "پشتیبانی و امنیت پایدار",
        icon: LuShieldCheck,
        description:
            "توسعه و نگه‌داری در داخل کشور انجام می‌شود. این یعنی انطباق کامل با الزامات پدافند غیرعامل و عدم وابستگی به لایسنس‌های خارجی تحریم‌پذیر.",
    },
    {
        id: "asset",
        title: "سرمایه زیرساختی، نه هزینه",
        icon: LuGem,
        description:
            "یک تکنولوژی زودگذر نیست؛ بلکه دارایی ماندگاری است که با زبان و فرآیندهای بومی هم‌خوانی دارد و برای سال‌های آینده صنعت CNG قابل اتکا است.",
    },
];

export default function LocalAdvantageSection ()
{
    return (
        <section
            id="local-advantage"
            className="py-10 md:py-16 bg-slate-50/50"
            aria-labelledby="local-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-10 text-right space-y-3">
                    <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary">
                        مزیت رقابتی
                    </span>
                    <h2 id="local-heading" className="text-2xl font-bold text-bms-dark md:text-3xl">
                        چرا <span className="text-bms-primary">توانایی بومی</span> یک ضرورت است؟
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-7 text-slate-600 md:text-base">
                        در زیرساخت‌های حیاتی،{ " " }
                        <strong className="font-bold text-bms-primary">بومی بودن</strong>{ " " }
                        شعار نیست؛ بلکه تضمین‌کننده تداوم سرویس و امنیت داده‌ها در شرایط بحرانی است.
                    </p>
                </div>

                {/* Advantages Grid */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { advantages.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.id }
                                className="group relative flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-bms-primary/20"
                            >
                                {/* Icon Container */ }
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-bms-primary group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-lg font-bold text-slate-900">{ item.title }</h3>
                                    <p className="text-sm leading-7 text-slate-600 text-pretty">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Bottom Border Accent */ }
                                <div className="absolute inset-x-6 bottom-0 h-1 scale-x-0 rounded-t-full bg-bms-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}