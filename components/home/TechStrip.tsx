// components/home/TechStrip.tsx
import
{
    SiLaravel,
    SiSharp,
    SiNextdotjs,
    SiDotnet,
    SiDjango,
    SiPython,
    SiReact,
    SiMysql,
    SiTailwindcss,
    SiThreedotjs,
} from "react-icons/si";
import
{
    LuCpu,
    LuCircuitBoard,
    LuServer,
    LuLayoutDashboard,
    LuWifi,
    LuScan,
    LuRadio,
    LuBrainCircuit, // Added for AI/Agents
} from "react-icons/lu";
import type { IconType } from "react-icons";

// 🧠 SEMANTIC DATA MODEL
type TechItem = {
    id: number;
    label: string;
    description: string;
    icon: IconType;
    color: string;
};

// 🧠 COHERENT STACK FOR IOT, INDUSTRIAL SYSTEMS & DIGITAL PLATFORMS
const techItems: TechItem[] = [
    // --- FIELD & IOT LAYER ---
    {
        id: 1,
        label: "Industrial Sensors",
        description: "سنسورهای صنعتی برای پایش داده‌های میدانی",
        icon: LuRadio,
        color: "text-emerald-600",
    },
    {
        id: 2,
        label: "RFID Systems",
        description: "شناسایی و رهگیری تجهیزات و دارایی‌ها",
        icon: LuScan,
        color: "text-amber-600",
    },
    {
        id: 3,
        label: "iBeacon / BLE",
        description: "شناسایی مبتنی بر BLE و موقعیت‌یابی هوشمند",
        icon: LuWifi,
        color: "text-sky-600",
    },

    // --- EDGE & EMBEDDED ---
    {
        id: 4,
        label: "Embedded Systems",
        description: "سیستم‌های توکار و کنترلرهای سخت‌افزاری",
        icon: LuCpu,
        color: "text-teal-600",
    },
    {
        id: 5,
        label: "PLC & Field Controllers",
        description: "کنترل فرآیندهای صنعتی و تجهیزات میدانی",
        icon: LuCircuitBoard,
        color: "text-orange-600",
    },

    // --- CORE ENGINEERING ---
    {
        id: 6,
        label: "C#",
        description: "منطق صنعتی و پردازش‌های سطح سازمان",
        icon: SiSharp,
        color: "text-purple-600",
    },
    {
        id: 7,
        label: ".NET",
        description: "زیرساخت نرم‌افزاری پایدار و مقیاس‌پذیر",
        icon: SiDotnet,
        color: "text-indigo-600",
    },
    {
        id: 8,
        label: "Python",
        description: "پردازش داده، اتوماسیون و منطق IoT",
        icon: SiPython,
        color: "text-yellow-600",
    },
    {
        id: 9,
        label: "Django",
        description: "هسته‌ی بک‌اند و سرویس‌های داده‌محور",
        icon: SiDjango,
        color: "text-green-700",
    },
    {
        id: 10,
        label: "Laravel",
        description: "وب‌سرویس‌ها و APIهای امن سازمانی",
        icon: SiLaravel,
        color: "text-red-600",
    },
    {
        id: 11,
        label: "MySQL",
        description: "مدیریت داده‌های رابطه‌ای و تراکنش‌های امن",
        icon: SiMysql,
        color: "text-blue-600",
    },

    // --- DATA & PLATFORMS ---
    {
        id: 12,
        label: "Digital Platforms",
        description: "پلتفرم‌های داده‌محور چندکاربره",
        icon: LuLayoutDashboard,
        color: "text-sky-700",
    },
    {
        id: 13,
        label: "Next.js",
        description: "فریم‌ورک رابط‌های کاربری سازمانی",
        icon: SiNextdotjs,
        color: "text-slate-900",
    },
    {
        id: 14,
        label: "React",
        description: "توسعه کامپوننت‌های تعاملی و پویا",
        icon: SiReact,
        color: "text-sky-500",
    },
    {
        id: 15,
        label: "Three.js",
        description: "مصورسازی سه‌بعدی و دوقلوی دیجیتال",
        icon: SiThreedotjs,
        color: "text-slate-800",
    },
    {
        id: 16,
        label: "Tailwind CSS",
        description: "طراحی رابط کاربری مدرن و واکنش‌گرا",
        icon: SiTailwindcss,
        color: "text-cyan-500",
    },

    // --- INFRASTRUCTURE & ADVANCED ---
    {
        id: 17,
        label: "Server Infrastructure",
        description: "پایداری، امنیت و مانیتورینگ سیستم",
        icon: LuServer,
        color: "text-slate-600",
    },
    {
        id: 18,
        label: "LLM & AI Agents",
        description: "تحلیل هوشمند و عامل‌های خودکار مبتنی بر مدل زبانی",
        icon: LuBrainCircuit,
        color: "text-violet-600",
    },
];

export default function TechStrip ()
{
    return (
        <section
            className="border-t border-slate-200 bg-slate-50/60 py-12 lg:py-16"
            aria-labelledby="tech-stack-heading"
        >
            <div className="container mx-auto px-4 max-w-7xl">
                {/* HEADER */ }
                <div className="mb-6 flex items-center gap-4">
                    <h2
                        id="tech-stack-heading"
                        className="text-xs font-bold tracking-wider text-slate-600 uppercase whitespace-nowrap"
                    >
                        زیرساخت فنی و معماری پلتفرم هسته‌ای
                    </h2>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* CONTEXT */ }
                <p className="mb-12 max-w-3xl text-sm leading-relaxed text-slate-600">
                    معماری فنی بارمان‌محور اسپادانا بر پایه‌ی دریافت داده از میدان، پردازش
                    در لبه (Edge) و انتقال امن به پلتفرم‌های دیجیتال طراحی شده است؛ از
                    سنسورها، RFID و iBeacon در لایه‌ی فیزیکی تا هسته‌های نرم‌افزاری
                    داده‌محور برای پایش، تحلیل و تصمیم‌سازی مدیریتی.
                </p>

                {/* TECH GRID */ }
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-6">
                    { techItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <li key={ item.id } className="h-full">
                                <div className="group relative flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-bms-primary/20">
                                    <div
                                        className={ `mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-slate-100 ${ item.color }` }
                                    >
                                        <Icon className="h-6 w-6 opacity-70 transition-opacity group-hover:opacity-100" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold text-slate-800 transition-colors group-hover:text-bms-primary">
                                            { item.label }
                                        </h3>
                                        <p className="text-[11px] font-medium text-slate-500">
                                            { item.description }
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-bms-primary transition-all duration-300 group-hover:w-1/3" />
                                </div>
                            </li>
                        );
                    } ) }
                </ul>
            </div>
        </section>
    );
}