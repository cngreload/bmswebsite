// components/clinicans/ClinicansFeaturesGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import
{
    LuGlobe,
    LuCpu,
    LuTrendingUp,
    LuBrainCircuit,
    LuArrowLeft,
    LuZap
} from 'react-icons/lu';

const features = [
    {
        id: 1,
        title: "حضور دیجیتال حرفه‌ای کلینیک، بدون هزینه و پیچیدگی",
        subtitle: "وب‌سایت، محتوا و سئو — به‌صورت خودکار درون پلتفرم",
        description: "کلینیکانز زیرساخت کامل حضور دیجیتال کلینیک‌های سلامت و درمان را بدون نیاز به دانش فنی فراهم می‌کند. وب‌سایت‌ساز درون‌پلتفرمی امکان ساخت لندینگ‌پیج و وب‌سایت مدرن با پشتیبانی از معرفی خدمات، پرسنل، مقالات تخصصی، ویدیو، پادکست و نظرات مراجعین را ارائه می‌دهد. تمامی فرآیندهای هاست، امنیت، بهینه‌سازی سئو، تولید محتوای مستمر و پشتیبانی فنی به‌صورت یکپارچه و خودکار انجام می‌شود.",
        ctaText: "مشاهده راهکار حضور دیجیتال", // 👈 Restored
        ctaLink: "/solutions/digital-presence",
        icon: LuGlobe,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "hover:border-blue-300",
        gridPosition: "lg:text-right lg:items-end lg:pr-8",
        connectorGradient: "bg-gradient-to-bl from-blue-100/50 to-blue-500/20"
    },
    {
        id: 2,
        title: "اتوماسیون کامل کلینیک با مدیریت داده‌محور",
        subtitle: "عملیات، درمان و مالی — در یک داشبورد هوشمند",
        description: "کلینیکانز به‌عنوان ستون فقرات عملیاتی کلینیک‌های موفق، تمامی ابزارهای حیاتی را در یک پلتفرم یکپارچه ارائه می‌دهد: پرونده الکترونیک سلامت (EHR)، رزرواسیون، پیامک یادآوری، CRM، حسابداری، انبارداری، باشگاه مشتریان و ویزیت آنلاین صوتی و چت. داشبورد تحلیلی پیشرفته با الگوریتم‌های مالی، مدیریتی و درمانی، امکان پیش‌بینی، پایش عملکرد و تصمیم‌سازی مبتنی بر داده را برای مدیران کلینیک فراهم می‌کند.",
        ctaText: "بررسی اتوماسیون کلینیک", // 👈 Restored
        ctaLink: "/solutions/operations",
        icon: LuCpu,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "hover:border-emerald-300",
        gridPosition: "lg:text-left lg:items-start lg:pl-8",
        connectorGradient: "bg-gradient-to-br from-emerald-100/50 to-emerald-500/20"
    },
    {
        id: 3,
        title: "مارکتینگ هوشمند کلینیک با کمترین هزینه",
        subtitle: "جذب هدفمند مراجعین و رشد ارگانیک",
        description: "کلینیکانز فرآیند بازاریابی کلینیک‌های سلامت و زیبایی را ساده و هوشمند می‌کند. سیستم پیامک مارکتینگ پیشرفته با قابلیت فیلتر و تارگتینگ دقیق، امکان اجرای کمپین‌های شخصی‌سازی‌شده را فراهم می‌سازد. در کنار آن، تیم تخصصی تولید محتوا و مدیریت شبکه‌های اجتماعی، به‌همراه سیستم رفرال و لویالتی شبکه‌ای، رشد ارگانیک، وفاداری مراجعین و افزایش مراجعه مجدد را بدون هزینه‌های سنگین تبلیغاتی ممکن می‌کند.",
        ctaText: "مشاهده راهکارهای مارکتینگ", // 👈 Restored
        ctaLink: "/solutions/marketing",
        icon: LuTrendingUp,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "hover:border-rose-300",
        gridPosition: "lg:text-right lg:items-end lg:pr-8",
        connectorGradient: "bg-gradient-to-tl from-rose-100/50 to-rose-500/20"
    },
    {
        id: 4,
        title: "هوش مصنوعی تخصصی برای کلینیک‌های سلامت",
        subtitle: "تحلیل، پیش‌بینی و پیشنهاددهی هوشمند",
        description: "کلینیکانز با توسعه مدل‌های پیشرفته هوش مصنوعی (LLM) ویژه حوزه درمان و سلامت، سطح جدیدی از بهره‌وری و دقت را ایجاد می‌کند. از آنالیز تصویر پزشکی و تحلیل داده‌های درمانی و درآمدی، تا پیشنهاددهی خدمات و یادآوری‌های هوشمند—همه برای کاهش خطا، افزایش کیفیت درمان و بهینه‌سازی درآمد کلینیک طراحی شده‌اند.",
        ctaText: "آشنایی با هوش مصنوعی کلینیکانز", // 👈 Restored
        ctaLink: "/solutions/ai",
        icon: LuBrainCircuit,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "hover:border-violet-300",
        gridPosition: "lg:text-left lg:items-start lg:pl-8",
        connectorGradient: "bg-gradient-to-tr from-violet-100/50 to-violet-500/20"
    },
];

const CentralHub = ( { className = "" }: { className?: string; } ) => (
    <div className={ `relative flex items-center justify-center z-50 ${ className }` }>
        {/* Deep Glow Behind */ }
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-[60px]" />

        {/* The Main Ring */ }
        <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(79,70,229,0.4)] border border-white/50 ring-4 ring-slate-50/50">

            {/* Spinning Data Streams */ }
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-indigo-200/50 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-3 rounded-full border-2 border-dotted border-bms-primary/30 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Inner Glass Core */ }
            <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white to-slate-50 shadow-inner flex items-center justify-center border border-white">
                <div className="relative w-20 h-20 filter drop-shadow-sm transform transition-transform hover:scale-110 duration-500">
                    <Image
                        src="/clogo.svg"
                        alt="Clinicans Core"
                        fill
                        className="object-contain p-2"
                        priority
                    />
                </div>
            </div>

            {/* Orbiting Particles */ }
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                <div className="absolute top-4 left-1/2 w-3 h-3 bg-emerald-400 rounded-full blur-[2px] shadow-lg shadow-emerald-400/50" />
            </div>
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
                <div className="absolute bottom-4 right-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[1px]" />
            </div>
        </div>
    </div>
);

export const ClinicansFeaturesGrid = () =>
{
    return (
        <section className="w-full py-16 md:py-24 overflow-hidden" aria-labelledby="features-grid-heading">

            {/* HEADER */ }
            <div className="text-center mb-20 px-4 space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                    <LuZap className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>هسته مرکزی پلتفرم</span>
                </div>
                <h2 id="features-grid-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                    چهار ستون <span className="text-bms-primary underline decoration-bms-primary/20 underline-offset-8 decoration-4">تحول دیجیتال</span> کلینیک‌های سلامت
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                    کلینیکانز یک زیست‌بوم دیجیتال یکپارچه برای هوشمندسازی کلینیک‌های سلامت و درمان است.
                    این پلتفرم با تمرکز بر افزایش مراجعین، کاهش بار عملیاتی و حذف خطاهای انسانی، تمامی لایه‌های کلیدی یک کلینیک مدرن را ارتقا می‌دهد.
                </p>
            </div>

            <div className="relative max-w-[90rem] mx-auto px-4 lg:px-8">

                {/* 
                   🖥️ DESKTOP HUB (Absolute Center)
                */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
                    <div className="pointer-events-auto">
                        <CentralHub />
                    </div>
                </div>

                {/* 
                   GRID LAYOUT
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-40 lg:gap-y-16 relative z-10">
                    { features.map( ( feature, idx ) =>
                    {
                        const Icon = feature.icon;
                        const showMobileHubAfter = idx === 1;

                        return (
                            <React.Fragment key={ feature.id }>
                                <article
                                    className={ `
                                        group relative flex flex-col gap-5 rounded-[2.5rem] bg-white p-8 lg:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:z-20
                                        border border-slate-100 ${ feature.border }
                                        ${ feature.gridPosition }
                                    `}
                                >
                                    {/* CONNECTOR GRADIENT */ }
                                    <div className={ `absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${ feature.connectorGradient }` } />

                                    {/* Header */ }
                                    <div className="flex flex-col gap-4 relative z-10 w-full">
                                        <div className={ `flex items-center gap-4 ${ idx % 2 !== 0 ? 'lg:flex-row-reverse' : '' }` }>
                                            <div className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ feature.bg } ${ feature.color } shadow-sm transition-transform group-hover:scale-110` }>
                                                <Icon className="h-7 w-7" />
                                            </div>
                                            <div className={ `${ idx % 2 !== 0 ? 'lg:text-left' : 'lg:text-right' }` }>
                                                <h3 className="font-bold text-slate-900 text-xl leading-snug group-hover:text-bms-primary transition-colors">
                                                    { feature.title }
                                                </h3>
                                                <p className="text-sm font-medium text-slate-500 mt-1">{ feature.subtitle }</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */ }
                                    <p className="text-sm md:text-base leading-8 text-slate-600 text-justify border-t border-slate-50 pt-5 relative z-10">
                                        { feature.description }
                                    </p>

                                    {/* CTA */ }
                                    <div className={ `mt-auto pt-3 flex w-full relative z-10 ${ idx % 2 !== 0 ? 'lg:justify-start' : 'lg:justify-end' } justify-end` }>
                                        <Link
                                            href={ feature.ctaLink }
                                            className={ `inline-flex items-center gap-2 text-sm font-bold ${ feature.color } hover:gap-3 transition-all bg-white/50 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm` }
                                        >
                                            <span>{ feature.ctaText }</span>
                                            <LuArrowLeft className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>

                                {/* MOBILE HUB */ }
                                { showMobileHubAfter && (
                                    <div className="lg:hidden flex justify-center py-12 relative">
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-px h-full bg-gradient-to-b from-slate-200 via-bms-primary/30 to-slate-200" />
                                        </div>
                                        <CentralHub className="scale-90" />
                                    </div>
                                ) }
                            </React.Fragment>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
};