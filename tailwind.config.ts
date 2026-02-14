import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      // 📐 Fluid Padding: Zero "squashing" on mobile, generous on desktop
      padding: {
        DEFAULT: "1rem",   // 16px - Minimal mobile gutter
        sm: "2rem",        // 32px
        lg: "4rem",        // 64px
        xl: "5rem",        // 80px
        "2xl": "6rem",     // 96px
      },
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      screens: {
        "bs-sm": "576px",
        "bs-md": "768px",
        "bs-lg": "992px",
        "bs-xl": "1200px",
        "bs-xxl": "1400px",
      },

      colors: {
        "bms-primary": "#145C98",
        "bms-primary-soft": "#E6F1FB",
        "bms-accent": "#10B981",
        "bms-dark": "#0F172A",
        "brand-red": "#D72638",
        "brand-yellow": "#F4C430",

        odoo: {
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E6E9ED",
          400: "#D8DADD",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#374151",
          900: "#111827",
        },
      },

      fontFamily: {
        sans: [
          "var(--font-bms-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },

      fontSize: {
        "display-1": ["clamp(2.5rem, 8vw, 4.5rem)", { lineHeight: "1.1" }],
        "display-3": ["clamp(2rem, 5vw, 3rem)", { lineHeight: "1.15" }],
      },

      borderRadius: {
        "2xl": "1.25rem",
        "corp": "2.5rem",
        pill: "9999px",
      },

      boxShadow: {
        "soft-lg": "0 18px 45px rgba(15, 23, 42, 0.12)",
        "premium": "0 20px 50px -12px rgba(15, 23, 42, 0.1)",
        "odoo-sm": "0 6px 18px rgba(15, 23, 42, 0.08)",
      },

      gap: {
        "24": "6rem",
      },

      gridAutoRows: {
        fr: "minmax(0, 1fr)",
      },
      
      lineHeight: {
        'corp-relaxed': '1.8',
      }
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;