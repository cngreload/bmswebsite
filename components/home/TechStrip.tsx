// components/home/TechStrip.tsx
import
{
    SiLaravel,
    SiSharp,
    SiNextdotjs,
    SiDotnet,
    SiPostgresql,
    SiTailwindcss,
    SiPrisma,
    SiDocker,
    SiRedis,
} from "react-icons/si";
import { LuCpu } from "react-icons/lu";

// 🧠 SEMANTIC DATA: Defined statically for stability
const techItems = [
    {
        id: 1,
        label: "Laravel",
        description: "هسته‌ی وب‌سرویس‌ها",
        icon: SiLaravel,
        color: "text-red-600",
    },
    {
        id: 2,
        label: "C#",
        description: "توسعه‌ی صنعتی",
        icon: SiSharp,
        color: "text-purple-600",
    },
    {
        id: 3,
        label: "Microcoding",
        description: "کنترلرهای میدانی",
        icon: LuCpu,
        color: "text-emerald-600",
    },
    {
        id: 4,
        label: "Next.js",
        description: "فرانت‌اند مدرن",
        icon: SiNextdotjs,
        color: "text-slate-900",
    },
    {
        id: 5,
        label: ".NET",
        description: "زیرساخت سازمانی",
        icon: SiDotnet,
        color: "text-indigo-600",
    },
    {
        id: 6,
        label: "PostgreSQL",
        description: "پایگاه داده‌ی پایدار",
        icon: SiPostgresql,
        color: "text-blue-500",
    },
    {
        id: 7,
        label: "Tailwind",
        description: "رابط‌های کاربری",
        icon: SiTailwindcss,
        color: "text-cyan-500",
    },
    {
        id: 8,
        label: "Prisma",
        description: "مدل‌سازی داده",
        icon: SiPrisma,
        color: "text-slate-700",
    },
    {
        id: 9,
        label: "Docker",
        description: "استقرار کانتینری",
        icon: SiDocker,
        color: "text-blue-600",
    },
    {
        id: 10,
        label: "Redis",
        description: "کش و پردازش سریع",
        icon: SiRedis,
        color: "text-red-500",
    },
];

export default function TechStrip ()
{
    return (
        <section
            className="border-t border-slate-200 bg-slate-50/50 py-10 lg:py-14"
            aria-labelledby="tech-stack-heading"
        >
            <div className="container mx-auto px-4 max-w-7xl">
                {/* 
          🧠 SEMANTIC HEADER
          Hidden visibly if needed, but present for screen readers to define the section.
        */}
                <div className="mb-8 flex items-center justify-between">
                    <h2
                        id="tech-stack-heading"
                        className="text-xs font-bold tracking-wider text-slate-500 uppercase"
                    >
                        زیرساخت‌های فنی و تکنولوژی‌های مورد استفاده
                    </h2>
                    <div className="h-px flex-1 bg-slate-200 mr-4"></div>
                </div>

                {/* 
          ⚡ PERFORMANCE GRID 
          - Grid layout minimizes CLS (Cumulative Layout Shift).
          - No JavaScript required.
          - Semantic <ul> for list of items.
        */}
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
                    { techItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <li key={ item.id } className="h-full">
                                <div
                                    className="group relative flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-bms-primary/20"
                                >
                                    {/* Icon Container with subtle hover glow */ }
                                    <div className={ `mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-slate-100 ${ item.color }` }>
                                        <Icon className="h-6 w-6 opacity-80 transition-opacity group-hover:opacity-100" />
                                    </div>

                                    {/* Text Content */ }
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold text-slate-800 group-hover:text-bms-primary transition-colors">
                                            { item.label }
                                        </h3>
                                        <p className="text-[11px] font-medium text-slate-500">
                                            { item.description }
                                        </p>
                                    </div>

                                    {/* 🎨 UX: Subtle bottom accent on hover */ }
                                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-bms-primary transition-all duration-300 group-hover:w-1/3 rounded-full"></div>
                                </div>
                            </li>
                        );
                    } ) }
                </ul>
            </div>
        </section>
    );
}