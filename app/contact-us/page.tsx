// app/contact-us/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";

export const metadata: Metadata = {
    title: "تماس با بارمان‌محور اسپادانا",
    description:
        "برای ارتباط با شرکت دانش‌بنیان بارمان‌محور اسپادانا، درخواست جلسه، همکاری یا طرح سوالات فنی، از طریق فرم تماس با ما اقدام کنید.",
};

export default function ContactUsPage ()
{
    return (
        <main className="container py-10 md:py-14">
            {/* Hero */ }
            <section className="mb-10 md:mb-12">
                <div className="max-w-2xl space-y-3 text-right">
                    <p className="text-xs font-medium text-bms-primary">
                        ارتباط مستقیم با بارمان‌محور اسپادانا
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-bms-dark">
                        تماس با ما
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                        اگر درباره‌ی سامانه ICTS، پلتفرم Clinicans، همکاری‌های صنعتی یا
                        سرمایه‌گذاری سوالی دارید، فرم زیر را تکمیل کنید تا همکاران ما در
                        اولین فرصت با شما تماس بگیرند.
                    </p>
                </div>
            </section>

            {/* Layout: Form + Info */ }
            <section className="grid items-start gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-soft-lg md:p-6">
                    <ContactForm />
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 md:p-6">
                    <ContactInfoPanel />
                </div>
            </section>
        </main>
    );
}
