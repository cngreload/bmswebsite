export type ClinicansModule = {
  slug: string;
  title: string;
  subtitle: string;
  iconSrc: string; // from /public
};

export type ClinicansCategory = {
  id: string;
  title: string;
  modules: ClinicansModule[];
};

export const CLINICANS_ALL_IN_ONE: ClinicansCategory[] = [
  {
    id: "frontdesk",
    title: "نوبت‌دهی و پذیرش",
    modules: [
      {
        slug: "appointments",
        title: "نوبت‌دهی آنلاین",
        subtitle: "رزرو سریع نوبت و مدیریت ظرفیت",
        iconSrc: "/clinicans/modules/appointments/icon.svg"
      },
      {
        slug: "calendar",
        title: "تقویم پزشکان",
        subtitle: "برنامه‌ریزی شیفت‌ها و زمان‌های آزاد",
        iconSrc: "/clinicans/modules/calendar/icon.svg"
      },
      {
        slug: "reception",
        title: "پذیرش و صف",
        subtitle: "گردش کار پذیرش، نوبت حضوری و صف انتظار",
        iconSrc: "/clinicans/modules/reception/icon.svg"
      },
      {
        slug: "waitlist",
        title: "لیست انتظار",
        subtitle: "پر کردن خودکار اسلات‌های خالی و لغوشده",
        iconSrc: "/clinicans/modules/waitlist/icon.svg"
      },
      {
        slug: "reminders",
        title: "یادآوری پیامکی",
        subtitle: "کاهش No-Show با پیامک/واتساپ",
        iconSrc: "/clinicans/modules/reminders/icon.svg"
      },
      {
        slug: "rooms",
        title: "مدیریت اتاق‌ها",
        subtitle: "هماهنگی اتاق‌ها، تجهیزات و ظرفیت",
        iconSrc: "/clinicans/modules/rooms/icon.svg"
      }
    ]
  },
  {
    id: "clinical",
    title: "پرونده و درمان",
    modules: [
      {
        slug: "ehr",
        title: "پرونده الکترونیک",
        subtitle: "نمای کامل مراجع، سوابق و یادداشت‌ها",
        iconSrc: "/clinicans/modules/ehr/icon.svg"
      },
      {
        slug: "history",
        title: "سوابق درمانی",
        subtitle: "ثبت خدمات، اقدامات و روند درمان",
        iconSrc: "/clinicans/modules/history/icon.svg"
      },
      {
        slug: "files",
        title: "فایل‌ها و تصاویر",
        subtitle: "آپلود، آرشیو و دسترسی سریع به اسناد",
        iconSrc: "/clinicans/modules/files/icon.svg"
      },
      {
        slug: "checklists",
        title: "پروتکل‌ها و چک‌لیست‌ها",
        subtitle: "استانداردسازی خدمات و کنترل کیفیت",
        iconSrc: "/clinicans/modules/checklists/icon.svg"
      },
      {
        slug: "prescription",
        title: "دستور و نسخه",
        subtitle: "ثبت دستورات و پیگیری درمان",
        iconSrc: "/clinicans/modules/prescription/icon.svg"
      },
      {
        slug: "televisit",
        title: "ویزیت آنلاین",
        subtitle: "مشاوره و پیگیری از راه دور",
        iconSrc: "/clinicans/modules/televisit/icon.svg"
      }
    ]
  },
  {
    id: "finance",
    title: "مالی و درآمد",
    modules: [
      {
        slug: "invoicing",
        title: "صورتحساب و فاکتور",
        subtitle: "فاکتور، بدهی/بستانکاری و گزارش‌ها",
        iconSrc: "/clinicans/modules/invoicing/icon.svg"
      },
      {
        slug: "payments",
        title: "صندوق و پرداخت",
        subtitle: "پرداخت حضوری/آنلاین و رسیدها",
        iconSrc: "/clinicans/modules/payments/icon.svg"
      },
      {
        slug: "packages",
        title: "پکیج‌ها و پلن‌ها",
        subtitle: "فروش بسته خدمات و مدیریت اعتبار",
        iconSrc: "/clinicans/modules/packages/icon.svg"
      },
      {
        slug: "discounts",
        title: "کد تخفیف",
        subtitle: "کمپین تخفیف و سیاست قیمت‌گذاری",
        iconSrc: "/clinicans/modules/discounts/icon.svg"
      },
      {
        slug: "settlements",
        title: "تسویه پزشکان",
        subtitle: "سهم پزشک/کلینیک و تسویه دوره‌ای",
        iconSrc: "/clinicans/modules/settlements/icon.svg"
      },
      {
        slug: "finance-reports",
        title: "گزارش مالی",
        subtitle: "درآمد، هزینه، سود و روندها",
        iconSrc: "/clinicans/modules/finance-reports/icon.svg"
      }
    ]
  },
  {
    id: "ops",
    title: "عملیات کلینیک",
    modules: [
      {
        slug: "inventory",
        title: "انبار و مواد مصرفی",
        subtitle: "ورودی/خروجی، حداقل موجودی و هشدار",
        iconSrc: "/clinicans/modules/inventory/icon.svg"
      },
      {
        slug: "procurement",
        title: "تأمین و سفارش‌دهی",
        subtitle: "سفارش خرید، تامین‌کننده و پیگیری",
        iconSrc: "/clinicans/modules/procurement/icon.svg"
      },
      {
        slug: "maintenance",
        title: "تجهیزات و تعمیرات",
        subtitle: "ثبت درخواست و نگهداری دوره‌ای",
        iconSrc: "/clinicans/modules/maintenance/icon.svg"
      },
      {
        slug: "branches",
        title: "مدیریت شعب",
        subtitle: "چند شعبه، چند تیم، یک داشبورد",
        iconSrc: "/clinicans/modules/branches/icon.svg"
      },
      {
        slug: "roles",
        title: "نقش‌ها و دسترسی‌ها",
        subtitle: "سطوح دسترسی دقیق و گزارش فعالیت",
        iconSrc: "/clinicans/modules/roles/icon.svg"
      },
      {
        slug: "automation",
        title: "اتوماسیون کارها",
        subtitle: "روال‌های تکراری را خودکار کنید",
        iconSrc: "/clinicans/modules/automation/icon.svg"
      }
    ]
  },
  {
    id: "growth",
    title: "بازاریابی و رشد",
    modules: [
      {
        slug: "sms-marketing",
        title: "SMS مارکتینگ",
        subtitle: "ارسال هدفمند، مدیریت اعتبار و گزارش",
        iconSrc: "/clinicans/modules/sms-marketing/icon.svg"
      },
      {
        slug: "campaigns",
        title: "کمپین‌ها",
        subtitle: "کمپین‌های جذب و بازگشت مشتری",
        iconSrc: "/clinicans/modules/campaigns/icon.svg"
      },
      {
        slug: "referrals",
        title: "ارجاع و معرفی",
        subtitle: "سیستم معرفی و انگیزه‌سازی رشد",
        iconSrc: "/clinicans/modules/referrals/icon.svg"
      },
      {
        slug: "loyalty",
        title: "باشگاه مشتریان",
        subtitle: "امتیاز، سطح‌بندی و پیشنهاد شخصی",
        iconSrc: "/clinicans/modules/loyalty/icon.svg"
      },
      {
        slug: "surveys",
        title: "نظرسنجی",
        subtitle: "سنجش رضایت و بهبود تجربه مراجع",
        iconSrc: "/clinicans/modules/surveys/icon.svg"
      },
      {
        slug: "ads",
        title: "اتصال تبلیغات",
        subtitle: "ردیابی کمپین‌ها و منابع ورودی",
        iconSrc: "/clinicans/modules/ads/icon.svg"
      }
    ]
  },
  {
    id: "analytics",
    title: "گزارش‌گیری و هوش مدیریتی",
    modules: [
      {
        slug: "kpi-dashboard",
        title: "داشبورد KPI",
        subtitle: "شاخص‌های کلیدی در یک نگاه",
        iconSrc: "/clinicans/modules/kpi-dashboard/icon.svg"
      },
      {
        slug: "revenue-analysis",
        title: "تحلیل منابع درآمد",
        subtitle: "کانال‌های درآمدی و خدمات پرفروش",
        iconSrc: "/clinicans/modules/revenue-analysis/icon.svg"
      },
      {
        slug: "doctor-performance",
        title: "عملکرد پزشکان",
        subtitle: "ویزیت، درآمد، رضایت و روندها",
        iconSrc: "/clinicans/modules/doctor-performance/icon.svg"
      },
      {
        slug: "time-analysis",
        title: "تحلیل زمان‌بندی",
        subtitle: "پیک‌های مراجعه، اتلاف زمان و بهینه‌سازی",
        iconSrc: "/clinicans/modules/time-analysis/icon.svg"
      },
      {
        slug: "exports",
        title: "خروجی اکسل",
        subtitle: "گزارش‌های سفارشی و خروجی‌گیری",
        iconSrc: "/clinicans/modules/exports/icon.svg"
      },
      {
        slug: "bi-connect",
        title: "اتصال BI",
        subtitle: "اتصال به ابزارهای تحلیلی پیشرفته",
        iconSrc: "/clinicans/modules/bi-connect/icon.svg"
      }
    ]
  },
  {
    id: "integrations",
    title: "یکپارچه‌سازی و سفارشی‌سازی",
    modules: [
      {
        slug: "api",
        title: "API",
        subtitle: "اتصال نرم‌افزارهای دیگر به Clinicans",
        iconSrc: "/clinicans/modules/api/icon.svg"
      },
      {
        slug: "sms-gateway",
        title: "درگاه پیامک",
        subtitle: "اتصال به سامانه‌های پیامکی",
        iconSrc: "/clinicans/modules/sms-gateway/icon.svg"
      },
      {
        slug: "webhooks",
        title: "وب‌هوک‌ها",
        subtitle: "اتصال رویدادها به سرویس‌های دیگر",
        iconSrc: "/clinicans/modules/webhooks/icon.svg"
      },
      {
        slug: "forms",
        title: "فرم‌های سفارشی",
        subtitle: "فرم‌های اختصاصی برای هر کلینیک",
        iconSrc: "/clinicans/modules/forms/icon.svg"
      },
      {
        slug: "plugins",
        title: "افزونه‌ها",
        subtitle: "ماژول‌های قابل توسعه و افزودنی‌ها",
        iconSrc: "/clinicans/modules/plugins/icon.svg"
      },
      {
        slug: "security",
        title: "امنیت و سیاست‌ها",
        subtitle: "کنترل دسترسی، ثبت رخداد و محافظت داده",
        iconSrc: "/clinicans/modules/security/icon.svg"
      }
    ]
  }
];
