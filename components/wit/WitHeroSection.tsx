// components/wit/WitHeroSection.tsx

export default function WitHeroSection ()
{
    return (
        <section className="text-right">
            <div className="space-y-4">
                <p className="text-sm font-medium text-emerald-700">
                    پلتفرم هسته‌ای بارمان – WIT
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-slate-900">
                    تکنولوژی هوشمند جهانی
                    <span className="inline-block mx-1 text-emerald-700">WIT</span>
                    برای دارایی‌های حیاتی
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl">
                    WIT هسته‌ی مشترک سامانه‌های هوشمند بارمان است؛ زیرساختی ماژولار و
                    داده‌محور که از میدان واقعی تا داشبورد مدیریتی را پوشش می‌دهد و
                    امروز در محصولاتی مانند سامانه ICTS برای جایگاه‌های CNG و پلتفرم
                    Clinicans برای کلینیک‌های سلامت و زیبایی به‌کار گرفته شده است.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl">
                    هدف WIT ساده است: تبدیل زیرساخت‌های پیچیده و حساس به دارایی‌های
                    قابل‌مدیریت دیجیتال؛ با تمرکز بر ایمنی، بهره‌وری و تصمیم‌گیری مبتنی
                    بر داده.
                </p>
            </div>
        </section>
    );
}
