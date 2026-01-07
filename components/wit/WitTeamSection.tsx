// components/wit/WitTeamSection.tsx
import
{
    LuUsers,
    LuAward,
    LuBriefcase,
    LuGraduationCap,
    LuLinkedin,
    LuMail
} from "react-icons/lu";
import Link from "next/link";

const leadershipTeam = [
    {
        name: "محمد رضایی",
        role: "مدیرعامل و بنیان‌گذار",
        expertise: "کارآفرینی فناوری، مدیریت عملیات",
        experience: "۱۵+ سال تجربه در صنعت انرژی و فناوری",
        education: "MBA از دانشگاه تهران",
        linkedin: "https://linkedin.com",
        highlight: true
    },
    {
        name: "علی محمدی",
        role: "مدیر فنی",
        expertise: "معماری سیستم‌های صنعتی، IoT",
        experience: "۱۲+ سال در پروژه‌های ملی اتوماسیون",
        education: "کارشناسی ارشد مهندسی کامپیوتر - شریف",
        linkedin: "https://linkedin.com",
        highlight: false
    },
    {
        name: "فاطمه کریمی",
        role: "مدیر محصول",
        expertise: "تحلیل بازار، توسعه محصول",
        experience: "۱۰+ سال در استارتاپ‌های فناوری",
        education: "کارشناسی ارشد مدیریت فناوری",
        linkedin: "https://linkedin.com",
        highlight: false
    },
    {
        name: "حسین احمدی",
        role: "مدیر مالی و سرمایه‌گذاری",
        expertise: "تأمین مالی، مدل‌سازی مالی",
        experience: "۸+ سال در امور مالی شرکتی",
        education: "CFA Level III",
        linkedin: "https://linkedin.com",
        highlight: false
    }
];

const advisors = [
    {
        name: "دکتر سعید نجفی",
        role: "مشاور فنی",
        expertise: "هوش مصنوعی و تحلیل داده",
        position: "استاد دانشگاه صنعتی شریف",
        company: "مشاور چند شرکت فناوری پیشرو"
    },
    {
        name: "مهندس رضا محمودی",
        role: "مشاور صنعتی",
        expertise: "اتوماسیون صنعتی",
        position: "مشاور ارشد صنعت نفت و گاز",
        company: "سابقه ۲۵ سال مدیریت پروژه"
    },
    {
        name: "دکتر مریم حسینی",
        role: "مشاور سلامت",
        expertise: "سیستم‌های سلامت دیجیتال",
        position: "مدیر سابق بیمارستان تخصصی",
        company: "مشاور وزارت بهداشت"
    }
];

const teamStats = [
    { label: "تیم فنی", value: "۶۵%", desc: "مهندسان سخت‌افزار و نرم‌افزار" },
    { label: "تجربه میانگین", value: "۸ سال", desc: "تجربه حرفه‌ای تیم" },
    { label: "مدارک پیشرفته", value: "۴۰%", desc: "کارشناسی ارشد و بالاتر" },
    { label: "تعهد سهام", value: "۲۵%", desc: "سهام تیم بنیان‌گذار" }
];

export default function WitTeamSection ()
{
    return (
        <section
            id="team"
            className="relative"
            aria-labelledby="team-heading"
        >
            {/* Section Header */ }
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-indigo-600 mb-4">
                    <LuUsers className="h-5 w-5" />
                    <span className="text-sm font-bold tracking-wider">
                        تیم اجرایی و مشاوران
                    </span>
                </div>

                <h2
                    id="team-heading"
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                >
                    سرمایه انسانی: <span className="text-indigo-600">مهم‌ترین دارایی ما</span>
                </h2>

                <p className="text-slate-600 max-w-3xl mx-auto">
                    ترکیبی از تجربه صنعتی عمیق و جوانان نخبه فناوری که با هم تحولی در اتوماسیون ایجاد کرده‌اند
                </p>
            </div>

            {/* Team Stats */ }
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                { teamStats.map( ( stat, idx ) => (
                    <div key={ idx } className="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-sm transition-shadow">
                        <div className="text-2xl font-bold text-slate-900">{ stat.value }</div>
                        <div className="text-sm font-semibold text-slate-700 mt-1">{ stat.label }</div>
                        <div className="text-xs text-slate-500 mt-1">{ stat.desc }</div>
                    </div>
                ) ) }
            </div>

            {/* Leadership Team */ }
            <div className="mb-16">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <LuBriefcase className="h-5 w-5 text-indigo-600" />
                    تیم رهبری
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    { leadershipTeam.map( ( member, idx ) => (
                        <div
                            key={ idx }
                            className={ `group relative rounded-2xl overflow-hidden ${ member.highlight
                                ? 'border-2 border-indigo-500 shadow-lg'
                                : 'border border-slate-200' } bg-white hover:shadow-xl transition-all duration-300` }
                        >
                            { member.highlight && (
                                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                                    بنیان‌گذار
                                </div>
                            ) }

                            {/* Profile Image Placeholder */ }
                            <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 border-4 border-white shadow-lg" />
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{ member.name }</h4>
                                        <div className="text-sm text-indigo-600 font-semibold">{ member.role }</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={ member.linkedin }
                                            className="text-slate-400 hover:text-indigo-600 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LuLinkedin className="h-5 w-5" />
                                        </a>
                                        <a
                                            href={ `mailto:${ member.name.replace( ' ', '.' ).toLowerCase() }@bms-co.ir` }
                                            className="text-slate-400 hover:text-indigo-600 transition-colors"
                                        >
                                            <LuMail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <LuAward className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <span className="text-sm text-slate-700">{ member.expertise }</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <LuBriefcase className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <span className="text-sm text-slate-700">{ member.experience }</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <LuGraduationCap className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <span className="text-sm text-slate-700">{ member.education }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>

            {/* Advisors */ }
            <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <LuAward className="h-5 w-5 text-amber-600" />
                    هیئت مشاوران
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    { advisors.map( ( advisor, idx ) => (
                        <div key={ idx } className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-amber-600">
                                        { advisor.name.split( ' ' )[ 0 ].charAt( 0 ) }
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{ advisor.name }</h4>
                                    <div className="text-sm text-amber-600 font-semibold">{ advisor.role }</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">تخصص</div>
                                    <div className="text-sm text-slate-700">{ advisor.expertise }</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">موقعیت فعلی</div>
                                    <div className="text-sm text-slate-700">{ advisor.position }</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">سوابق</div>
                                    <div className="text-sm text-slate-700">{ advisor.company }</div>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>

            {/* Team Culture & Commitment */ }
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">فرهنگ تیم و تعهد</h3>
                        <ul className="space-y-3">
                            { [
                                "تعهد بلندمدت به موفقیت شرکت",
                                "فرهنگ مبتنی بر نوآوری و یادگیری مستمر",
                                "تمرکز بر ایجاد ارزش برای سهامداران",
                                "شفافیت در گزارش‌دهی و تصمیم‌گیری"
                            ].map( ( item, idx ) => (
                                <li key={ idx } className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                    <span className="text-slate-700">{ item }</span>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-4">تعهد تیم بنیان‌گذار</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600">تعهد سهام تیم</span>
                                    <span className="font-semibold text-slate-900">۲۵%</span>
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-600 rounded-full w-1/4" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600">وست ۴ ساله</span>
                                    <span className="font-semibold text-slate-900">۱۰۰%</span>
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-600 rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600">کلاف گلدن هنداگ</span>
                                    <span className="font-semibold text-slate-900">۱ سال</span>
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-600 rounded-full w-1/4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team CTA */ }
            <div className="mt-12 text-center">
                <Link
                    href="/contact?type=team-meeting"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 font-semibold hover:shadow-xl transition-all"
                >
                    <LuUsers className="h-5 w-5" />
                    ملاقات با تیم اجرایی
                </Link>
                <p className="text-sm text-slate-600 mt-4">
                    می‌توانید با تمام اعضای تیم ملاقات کنید و از نزدیک با فرهنگ سازمانی آشنا شوید
                </p>
            </div>
        </section>
    );
}