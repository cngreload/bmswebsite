// components/wit/WitStrategicAdvantageSection.tsx

export default function WitStrategicAdvantageSection ()
{
    return (
        <section className="text-right space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    مزیت رقابتی و دارایی راهبردی
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    WIT به‌عنوان سرمایه نامشهود ولی حیاتی برای سازمان
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* ستون ۱ – دید سرمایه‌گذاری و توسعه کسب‌وکار */ }
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-slate-900">
                        زیرساخت مشترک برای چندین محصول و بازار
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        WIT هزینه توسعه و زمان ورود به بازار را برای محصولات جدید به‌شدت
                        کاهش می‌دهد؛ زیرا بسیاری از اجزای حیاتی – از جمع‌آوری داده تا
                        احراز هویت و گزارش‌دهی – یک‌بار در سطح پلتفرم پیاده‌سازی شده‌اند و
                        در پروژه‌های بعدی صرفاً بازپیکربندی می‌شوند.
                    </p>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>امکان توسعه سریع راهکارهای جدید بر بستر یک هسته پایدار</li>
                        <li>کاهش ریسک فنی در محصولات بعدی</li>
                        <li>تسهیل هم‌افزایی بین تیم‌ها و پروژه‌ها</li>
                    </ul>
                </div>

                {/* ستون ۲ – دید راهبرد ملی و حاکمیتی */ }
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-slate-900">
                        استقلال فناوری و پشتیبانی بومی
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        WIT بر پایه‌ی طراحی و پیاده‌سازی بومی شکل گرفته است؛ به‌گونه‌ای که
                        توسعه، پشتیبانی و ارتقاء آن در داخل کشور قابل انجام است و وابستگی
                        به تأمین‌کنندگان خارجی در لایه‌های حیاتی به حداقل می‌رسد.
                    </p>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>هم‌خوانی با الزامات پدافند غیرعامل و زیرساخت‌های حیاتی</li>
                        <li>امکان تطبیق سریع با مقررات و سیاست‌های داخلی</li>
                        <li>کاهش ریسک تحریم و اختلال در زنجیره تأمین فناوری</li>
                    </ul>
                </div>

                {/* ستون ۳ – دید عملیاتی و داده‌محور */ }
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-slate-900">
                        داده به‌عنوان دارایی راهبردی
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        WIT داده‌های تولیدشده در میدان را به‌صورت ساخت‌یافته و طولانی‌مدت
                        ذخیره و قابل تحلیل می‌کند؛ داده‌ای که می‌تواند پایه‌ی تصمیم‌گیری
                        مدیریتی، بهینه‌سازی سیاست‌ها و توسعه‌ی سرویس‌های تحلیلی و هوش
                        مصنوعی در آینده باشد.
                    </p>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>امکان تحلیل روندها در سطح سازمان و شبکه</li>
                        <li>پشتیبانی از طراحی سیاست‌های جدید مبتنی بر شواهد</li>
                        <li>آمادگی برای توسعه ماژول‌های تحلیلی پیشرفته و AI</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
