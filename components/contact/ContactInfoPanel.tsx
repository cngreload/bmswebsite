// components/contact/ContactInfoPanel.tsx
export default function ContactInfoPanel ()
{
    return (
        <div className="space-y-4 text-right">
            <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-bms-dark">
                    راه‌های تماس با بارمان‌محور اسپادانا
                </h2>
                <p className="text-xs md:text-sm text-slate-600">
                    برای پیگیری سریع‌تر، استفاده از فرم تماس پیشنهاد می‌شود. با این حال،
                    می‌توانید از کانال‌های زیر نیز با ما در ارتباط باشید.
                </p>
            </div>

            <div className="space-y-3 text-xs md:text-sm">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <div className="text-[11px] font-medium text-slate-500">ایمیل</div>
                    <div className="mt-0.5 font-medium text-slate-800 ltr">
                        contact@barman-example.ir
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <div className="text-[11px] font-medium text-slate-500">
                        شماره تماس (ساعات اداری)
                    </div>
                    <div className="mt-0.5 font-medium text-slate-800">
                        ۰۳۱-xxxxxxx
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <div className="text-[11px] font-medium text-slate-500">
                        موضوعات پیشنهادی برای تماس
                    </div>
                    <ul className="mt-1 list-disc pr-4 text-[11px] text-slate-700 space-y-0.5">
                        <li>هوشمندسازی جایگاه‌های CNG و سامانه ICTS</li>
                        <li>پلتفرم Clinicans و مدیریت کلینیک‌های سلامت و زیبایی</li>
                        <li>همکاری‌های صنعتی، تحقیقاتی و سرمایه‌گذاری</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-dashed border-bms-primary/40 bg-bms-primary-soft/40 px-3 py-2.5 text-[11px] text-bms-dark">
                    اگر درباره‌ی همکاری‌های راهبردی و سرمایه‌گذاری سوال دارید، می‌توانید
                    از طریق صفحه{ " " }
                    <a
                        href="/cooperation"
                        className="font-semibold text-bms-primary underline-offset-2 hover:underline"
                    >
                        «همکاری و سرمایه‌گذاری»
                    </a>{ " " }
                    نیز با ما در ارتباط باشید.
                </div>
            </div>
        </div>
    );
}
