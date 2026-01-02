export type ClinicansModule = {
  slug: string;
  title: string;
  subtitle: string;
  iconSrc: string;
};

export type ClinicansCategory = {
  id: string;
  title: string;
  description: string;
  capability: string;
  modules: ClinicansModule[];
};

export const CLINICANS_ALL_IN_ONE: ClinicansCategory[] = [
  {
    id: "frontdesk",
    title: "نوبت‌دهی و پذیرش",
    capability: "Patient Flow Management",
    description:
      "هسته مدیریت جریان مراجعه در اکوسیستم Clinicans؛ از اولین تعامل مراجع تا پذیرش حضوری، با هدف کاهش ازدحام، حذف تداخل و ایجاد تجربه‌ای منظم و حرفه‌ای.",
    modules: [
      {
        slug: "appointments",
        title: "نوبت‌دهی آنلاین",
        subtitle: "رزرو هوشمند نوبت با کنترل ظرفیت",
        iconSrc: "/clinicans/modules/appointments/icon.svg",
      },
      {
        slug: "calendar",
        title: "تقویم پزشکان",
        subtitle: "مدیریت زمان پزشکان و خدمات",
        iconSrc: "/clinicans/modules/calendar/icon.svg",
      },
      {
        slug: "reception",
        title: "پذیرش و صف",
        subtitle: "گردش کار پذیرش و مدیریت صف انتظار",
        iconSrc: "/clinicans/modules/reception/icon.svg",
      },
      {
        slug: "waitlist",
        title: "لیست انتظار",
        subtitle: "جایگزینی خودکار نوبت‌های لغوشده",
        iconSrc: "/clinicans/modules/waitlist/icon.svg",
      },
      {
        slug: "reminders",
        title: "یادآوری پیامکی",
        subtitle: "کاهش No-Show و افزایش نظم مراجعه",
        iconSrc: "/clinicans/modules/reminders/icon.svg",
      },
      {
        slug: "rooms",
        title: "مدیریت اتاق‌ها",
        subtitle: "هماهنگی اتاق، تجهیزات و ظرفیت",
        iconSrc: "/clinicans/modules/rooms/icon.svg",
      },
    ],
  },

  {
    id: "clinical",
    title: "پرونده و درمان",
    capability: "Clinical Operations",
    description:
      "زیرساخت بالینی Clinicans برای ثبت، نگهداری و تحلیل داده‌های درمانی؛ ایجاد تصویری یکپارچه از مسیر درمان برای تصمیم‌گیری دقیق‌تر پزشک.",
    modules: [
      {
        slug: "ehr",
        title: "پرونده الکترونیک سلامت",
        subtitle: "نمای ۳۶۰ درجه از مراجع و سوابق",
        iconSrc: "/clinicans/modules/ehr/icon.svg",
      },
      {
        slug: "history",
        title: "سوابق درمانی",
        subtitle: "ثبت اقدامات، خدمات و روند درمان",
        iconSrc: "/clinicans/modules/history/icon.svg",
      },
      {
        slug: "files",
        title: "فایل‌ها و تصاویر",
        subtitle: "آرشیو امن اسناد و تصاویر پزشکی",
        iconSrc: "/clinicans/modules/files/icon.svg",
      },
      {
        slug: "checklists",
        title: "پروتکل‌ها و چک‌لیست‌ها",
        subtitle: "استانداردسازی خدمات درمانی",
        iconSrc: "/clinicans/modules/checklists/icon.svg",
      },
      {
        slug: "prescription",
        title: "دستور و نسخه",
        subtitle: "ثبت نسخه و پیگیری درمان",
        iconSrc: "/clinicans/modules/prescription/icon.svg",
      },
      {
        slug: "televisit",
        title: "ویزیت آنلاین",
        subtitle: "مشاوره و پیگیری از راه دور",
        iconSrc: "/clinicans/modules/televisit/icon.svg",
      },
    ],
  },

  {
    id: "finance",
    title: "مالی و درآمد",
    capability: "Revenue & Accounting",
    description:
      "مدیریت شفاف و دقیق جریان‌های مالی در کلینیک؛ از پرداخت مراجع تا تسویه پزشکان، با تمرکز بر کنترل، اعتماد و سودآوری پایدار.",
    modules: [
      {
        slug: "invoicing",
        title: "صورتحساب و فاکتور",
        subtitle: "فاکتور، بدهی و گزارش‌های مالی",
        iconSrc: "/clinicans/modules/invoicing/icon.svg",
      },
      {
        slug: "payments",
        title: "صندوق و پرداخت",
        subtitle: "پرداخت حضوری و آنلاین",
        iconSrc: "/clinicans/modules/payments/icon.svg",
      },
      {
        slug: "packages",
        title: "پکیج‌ها و پلن‌ها",
        subtitle: "مدیریت بسته‌های خدماتی",
        iconSrc: "/clinicans/modules/packages/icon.svg",
      },
      {
        slug: "discounts",
        title: "کد تخفیف",
        subtitle: "سیاست‌های تخفیف و قیمت‌گذاری",
        iconSrc: "/clinicans/modules/discounts/icon.svg",
      },
      {
        slug: "settlements",
        title: "تسویه پزشکان",
        subtitle: "محاسبه سهم و تسویه شفاف",
        iconSrc: "/clinicans/modules/settlements/icon.svg",
      },
      {
        slug: "finance-reports",
        title: "گزارش مالی",
        subtitle: "تحلیل درآمد، هزینه و سود",
        iconSrc: "/clinicans/modules/finance-reports/icon.svg",
      },
    ],
  },

  {
    id: "ops",
    title: "عملیات کلینیک",
    capability: "Operational Control",
    description:
      "کنترل منابع، تجهیزات و فرآیندهای داخلی برای افزایش بهره‌وری و ایجاد ثبات عملیاتی در مقیاس یک یا چند شعبه.",
    modules: [
      {
        slug: "inventory",
        title: "انبار و مواد مصرفی",
        subtitle: "کنترل موجودی و هشدار کمبود",
        iconSrc: "/clinicans/modules/inventory/icon.svg",
      },
      {
        slug: "procurement",
        title: "تأمین و سفارش‌دهی",
        subtitle: "مدیریت سفارش‌ها و تامین‌کنندگان",
        iconSrc: "/clinicans/modules/procurement/icon.svg",
      },
      {
        slug: "maintenance",
        title: "تجهیزات و تعمیرات",
        subtitle: "نگهداری و ثبت سرویس‌ها",
        iconSrc: "/clinicans/modules/maintenance/icon.svg",
      },
      {
        slug: "branches",
        title: "مدیریت شعب",
        subtitle: "چند شعبه، یک کنترل مرکزی",
        iconSrc: "/clinicans/modules/branches/icon.svg",
      },
      {
        slug: "roles",
        title: "نقش‌ها و دسترسی‌ها",
        subtitle: "کنترل دقیق سطوح دسترسی",
        iconSrc: "/clinicans/modules/roles/icon.svg",
      },
      {
        slug: "automation",
        title: "اتوماسیون فرآیندها",
        subtitle: "کاهش کارهای تکراری دستی",
        iconSrc: "/clinicans/modules/automation/icon.svg",
      },
    ],
  },

  {
    id: "growth",
    title: "بازاریابی و رشد",
    capability: "Patient Growth & Retention",
    description:
      "ابزارهای رشد در Clinicans بخشی از اکوسیستم هستند؛ کمک به جذب مراجع جدید، حفظ ارتباط و افزایش ارزش طول عمر بیمار بدون اتکای صرف به تبلیغات.",
    modules: [
      {
        slug: "sms-marketing",
        title: "SMS مارکتینگ",
        subtitle: "ارتباط هدفمند و قابل اندازه‌گیری",
        iconSrc: "/clinicans/modules/sms-marketing/icon.svg",
      },
      {
        slug: "campaigns",
        title: "کمپین‌ها",
        subtitle: "جذب و بازگشت مراجع",
        iconSrc: "/clinicans/modules/campaigns/icon.svg",
      },
      {
        slug: "referrals",
        title: "ارجاع و معرفی",
        subtitle: "سیستم معرفی و انگیزه‌سازی",
        iconSrc: "/clinicans/modules/referrals/icon.svg",
      },
      {
        slug: "loyalty",
        title: "باشگاه مشتریان",
        subtitle: "وفادارسازی و پیشنهاد شخصی",
        iconSrc: "/clinicans/modules/loyalty/icon.svg",
      },
      {
        slug: "surveys",
        title: "نظرسنجی",
        subtitle: "سنجش رضایت و بهبود تجربه",
        iconSrc: "/clinicans/modules/surveys/icon.svg",
      },
      {
        slug: "ads",
        title: "اتصال تبلیغات",
        subtitle: "تحلیل منابع جذب مراجع",
        iconSrc: "/clinicans/modules/ads/icon.svg",
      },
    ],
  },

  {
    id: "analytics",
    title: "گزارش‌گیری و هوش مدیریتی",
    capability: "Business Intelligence",
    description:
      "تبدیل داده‌های عملیاتی و مالی به بینش مدیریتی؛ برای تصمیم‌گیری مبتنی بر KPI و هدایت آگاهانه کلینیک.",
    modules: [
      {
        slug: "kpi-dashboard",
        title: "داشبورد KPI",
        subtitle: "شاخص‌های کلیدی در یک نگاه",
        iconSrc: "/clinicans/modules/kpi-dashboard/icon.svg",
      },
      {
        slug: "revenue-analysis",
        title: "تحلیل درآمد",
        subtitle: "منابع درآمد و خدمات پرفروش",
        iconSrc: "/clinicans/modules/revenue-analysis/icon.svg",
      },
      {
        slug: "doctor-performance",
        title: "عملکرد پزشکان",
        subtitle: "تحلیل ویزیت و رضایت",
        iconSrc: "/clinicans/modules/doctor-performance/icon.svg",
      },
      {
        slug: "time-analysis",
        title: "تحلیل زمان‌بندی",
        subtitle: "بهینه‌سازی پیک مراجعه",
        iconSrc: "/clinicans/modules/time-analysis/icon.svg",
      },
      {
        slug: "exports",
        title: "خروجی گزارش‌ها",
        subtitle: "اکسل و گزارش‌های سفارشی",
        iconSrc: "/clinicans/modules/exports/icon.svg",
      },
      {
        slug: "bi-connect",
        title: "اتصال BI",
        subtitle: "یکپارچه با ابزارهای تحلیلی",
        iconSrc: "/clinicans/modules/bi-connect/icon.svg",
      },
    ],
  },

  {
    id: "integrations",
    title: "یکپارچه‌سازی و توسعه‌پذیری",
    capability: "Extensibility & Integration",
    description:
      "Clinicans برای رشد ساخته شده است؛ اتصال به نرم‌افزارهای دیگر، توسعه اختصاصی و انطباق با اکوسیستم دیجیتال هر کلینیک.",
    modules: [
      {
        slug: "api",
        title: "API",
        subtitle: "اتصال سرویس‌های بیرونی",
        iconSrc: "/clinicans/modules/api/icon.svg",
      },
      {
        slug: "sms-gateway",
        title: "درگاه پیامک",
        subtitle: "اتصال به سامانه‌های پیامکی",
        iconSrc: "/clinicans/modules/sms-gateway/icon.svg",
      },
      {
        slug: "webhooks",
        title: "وب‌هوک‌ها",
        subtitle: "رویدادمحور و بلادرنگ",
        iconSrc: "/clinicans/modules/webhooks/icon.svg",
      },
      {
        slug: "forms",
        title: "فرم‌های سفارشی",
        subtitle: "متناسب با فرآیند کلینیک",
        iconSrc: "/clinicans/modules/forms/icon.svg",
      },
      {
        slug: "plugins",
        title: "افزونه‌ها",
        subtitle: "قابلیت توسعه ماژولار",
        iconSrc: "/clinicans/modules/plugins/icon.svg",
      },
      {
        slug: "security",
        title: "امنیت و سیاست‌ها",
        subtitle: "کنترل، لاگ و انطباق",
        iconSrc: "/clinicans/modules/security/icon.svg",
      },
    ],
  },
];
