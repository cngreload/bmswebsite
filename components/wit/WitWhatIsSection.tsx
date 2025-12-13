// components/wit/WitWhatIsSection.tsx

export default function WitWhatIsSection ()
{
    return (
        <section className="text-right space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    این پلتفرم دقیقاً چیست؟
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    WIT؛ هسته‌ی مشترک هوشمندسازی در بارمان
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    WIT یک «محصول واحد» برای یک صنعت خاص نیست؛ یک پلتفرم هسته‌ای برای
                    طراحی و پیاده‌سازی سامانه‌های هوشمند در حوزه‌های مختلف انرژی، صنعت و
                    سلامت است. این پلتفرم ترکیبی از سخت‌افزار صنعتی، نرم‌افزار ماژولار و
                    معماری داده‌محور است که از لایه‌ی میدان تا لایه‌ی تصمیم‌سازی مدیریتی
                    را پوشش می‌دهد.
                </p>
                <p>
                    در عمل، WIT همان زیرساختی است که سامانه هوشمندسازی جایگاه‌های CNG
                    (ICTS) و پلتفرم Clinicans بر روی آن بنا شده‌اند؛ زیرساختی که امکان
                    توسعه‌ی راهکارهای جدید برای سایر کسب‌وکارها و زیرساخت‌های حیاتی را
                    نیز فراهم می‌کند، بدون آن‌که هر بار نیاز به طراحی همه‌چیز از ابتدا
                    باشد.
                </p>
                <p>
                    فلسفه‌ی طراحی WIT بر سه اصل استوار است:{ " " }
                    <span className="font-semibold">
                        یکپارچگی داده و فرایند، مقیاس‌پذیری عملیاتی و استقلال فناوری
                    </span>
                    . این سه اصل باعث می‌شوند که سرمایه‌گذاری انجام‌شده روی این پلتفرم،
                    نه فقط یک پروژه مقطعی، بلکه یک دارایی راهبردی بلندمدت برای سازمان
                    باشد.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <h3 className="mb-2 text-sm font-semibold text-slate-900">
                        پلتفرم هسته‌ای، نه پروژه‌ی تکی
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        WIT برای یک سناریوی محدود طراحی نشده است؛ هسته‌ای است که می‌تواند
                        در قالب محصولات مختلف، در صنایع متنوع تکرار و توسعه یابد.
                    </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <h3 className="mb-2 text-sm font-semibold text-slate-900">
                        ترکیب سخت‌افزار، نرم‌افزار و فرایند
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        در WIT، طراحی سخت‌افزار صنعتی، نرم‌افزار تحت‌وب و مدل‌سازی فرایند
                        کسب‌وکار در کنار هم دیده شده‌اند؛ نه به‌صورت جزایر جداگانه.
                    </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <h3 className="mb-2 text-sm font-semibold text-slate-900">
                        از میدان تا داشبورد مدیریتی
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                        داده از سنسور و تجهیزات در میدان جمع‌آوری، در لایه‌های میانی
                        پردازش و در نهایت در قالب داشبوردها و گزارش‌های مدیریتی قابل‌استفاده
                        می‌شود.
                    </p>
                </div>
            </div>
        </section>
    );
}
