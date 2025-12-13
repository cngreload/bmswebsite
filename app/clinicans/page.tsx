import type { Metadata } from "next";

import ClinicansHeroSection from "@/components/clinicans/ClinicansHeroSection";
import ClinicansProblemsSection from "@/components/clinicans/ClinicansProblemsSection";
import ClinicansOverviewSection from "@/components/clinicans/ClinicansOverviewSection";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansFeaturesSection from "@/components/clinicans/ClinicansFeaturesSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";

export const metadata: Metadata = {
    title: "Clinicans – پلتفرم مدیریت هوشمند کلینیک‌های سلامت و زیبایی | بارمان‌محور اسپادانا",
    description:
        "کلینیکانز پلتفرم بومی و یکپارچه برای نوبت‌دهی، پرونده‌ی مراجعین، مالی و گزارش‌دهی کلینیک‌های سلامت و زیبایی است؛ ساده برای تیم پذیرش و پزشک، شفاف برای مدیریت و قابل‌اعتماد برای مراجعان."
};

export default function ClinicansPage ()
{
    return (
        <div className="bms-page space-y-12 md:space-y-16">
            {/* ۱. هیرو محصول Clinicans */ }
            <ClinicansHeroSection />

            {/* ۲. مشکل امروز کلینیک‌ها چیست؟ */ }
            <ClinicansProblemsSection />

            {/* ۳. کلینیکانز در یک نگاه */ }
            <ClinicansOverviewSection />

            {/* ۴. برای چه کسانی طراحی شده است؟ */ }
            <ClinicansForWhomSection />

            {/* ۵. ویژگی‌ها و ماژول‌ها */ }
            <ClinicansFeaturesSection />

            {/* ۶. امنیت داده و حریم خصوصی */ }
            <ClinicansSecuritySection />

            {/* ۷. تکنولوژی و زیرساخت کلینیکانز */ }
            <ClinicansTechSection />

            {/* ۸. شروع همکاری با Clinicans */ }
            <ClinicansGetStartedSection />
        </div>
    );
}
