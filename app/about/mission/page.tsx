export const metadata = {
    title: "مأموریت بارمان",
};

export default function MissionPage ()
{
    return (
        <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                مأموریت ما
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                مأموریت بارمان محور اسپادانا، طراحی و توسعه‌ی زیرساخت‌های بومی
                هوشمندسازی است؛ زیرساخت‌هایی که بتوانند فاصله‌ی میان «عملیات روزمره در
                میدان» و «تصمیم‌گیری دقیق در سطح مدیریت و حاکمیت» را پر کنند.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                ما خودمان را صرفاً تولیدکننده‌ی یک نرم‌افزار یا یک دستگاه نمی‌دانیم؛
                مأموریت ما ایجاد بستری است که در آن زیرساخت‌های حیاتی کشور، از انرژی تا
                سلامت، به‌صورت امن، شفاف و مبتنی بر داده اداره شوند و کسب‌وکارها بتوانند
                بدون تکیه بر سامانه‌های خارجی، از مزایای واقعی هوشمندسازی بهره‌مند شوند.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                در یک جمله: ما برای این‌جا هستیم که «کنترل، پایش و تصمیم‌سازی هوشمند» را
                از سطح شعار، به واقعیتی قابل لمس در صنعت و زندگی روزمره تبدیل کنیم.
            </p>
        </div>
    );
}
