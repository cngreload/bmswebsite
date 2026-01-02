import
{
    LuLayers,
    LuCircuitBoard,
    LuDatabase,
    LuArrowDownToLine,
} from "react-icons/lu";

const features = [
    {
        title: "پلتفرم هسته‌ای (Core Platform)",
        desc: "WIT یک محصول تک‌منظوره یا پروژه‌محور نیست؛ یک هسته فناورانه‌ی پایدار و قابل توسعه است که می‌تواند هم‌زمان بار پروژه‌های صنعتی، انرژی و سلامت را بدون بازطراحی زیرساخت پشتیبانی کند.",
        icon: LuLayers,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        title: "هم‌طراحی سخت‌افزار و نرم‌افزار",
        desc: "بردهای الکترونیکی، فریم‌ور، پروتکل‌های ارتباطی و لایه نرم‌افزار به‌صورت یکپارچه طراحی شده‌اند تا پایداری صنعتی، تأخیر پایین، کنترل دقیق و قابلیت اطمینان بلندمدت تضمین شود.",
        icon: LuCircuitBoard,
        color: "text-violet-600",
        bg: "bg-violet-50",
    },
    {
        title: "جریان داده End-to-End",
        desc: "داده از سطح میدان (سنسورها، PLC و کنترلرها) تا لایه تحلیل و داشبورد مدیریتی بدون شکست، تبدیل یا گسست منتقل می‌شود؛ آماده تحلیل پیشرفته، تصمیم‌سازی مدیریتی و هوش مصنوعی.",
        icon: LuDatabase,
        color: "text-fuchsia-600",
        bg: "bg-fuchsia-50",
    },
];

export default function WitWhatIsSection ()
{
    return (
        <section
            aria-labelledby="whatis-heading"
            role="region"
            className="relative"
        >
            <div className="grid gap-10 lg:grid-cols-12 items-start">

                {/* Definition Text */ }
                <div className="lg:col-span-5 space-y-6 text-right">
                    <div className="inline-flex items-center gap-2 text-indigo-600">
                        <LuArrowDownToLine className="h-4 w-4" />
                        <span className="text-xs font-bold tracking-wider">
                            Platform Definition
                        </span>
                    </div>

                    <h2
                        id="whatis-heading"
                        className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight"
                    >
                        WIT دقیقاً <span className="text-indigo-600">چیست؟</span>
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-slate-600 text-justify">
                        WIT یک زیرساخت فناورانه‌ی هسته‌ای است که محصولات کلیدی بارمان —
                        از سامانه‌های
                        <strong className="text-slate-900 mx-1">
                            پایش و کنترل صنعتی (ICTS)
                        </strong>
                        تا پلتفرم
                        <strong className="text-slate-900 mx-1">
                            سلامت دیجیتال Clinicans
                        </strong>
                        — بر پایه آن توسعه یافته‌اند.
                        <br />
                        <br />
                        به‌جای توسعه مجزا و تکراری برای هر پروژه، WIT یک هسته مرکزی
                        پایدار ایجاد می‌کند که امکان انطباق با حوزه‌های مختلف،
                        مقیاس‌پذیری در سطح سازمانی و توسعه تدریجی بدون اختلال
                        در سامانه‌های فعال را فراهم می‌سازد.
                    </p>
                </div>

                {/* Feature Cards */ }
                <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    { features.map( ( f, i ) =>
                    {
                        const Icon = f.icon;
                        return (
                            <article
                                key={ i }
                                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200"
                            >
                                <div
                                    className={ `mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                  ${ f.bg } ${ f.color } transition-transform group-hover:scale-110` }
                                >
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="mb-2 text-sm font-bold text-slate-900">
                                    { f.title }
                                </h3>

                                <p className="text-xs md:text-sm leading-6 text-slate-600 text-pretty">
                                    { f.desc }
                                </p>
                            </article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}
