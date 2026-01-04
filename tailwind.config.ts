import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      // Bootstrap-like breakpoints (Preserved)
      screens: {
        "bs-sm": "576px",
        "bs-md": "768px",
        "bs-lg": "992px",
        "bs-xl": "1200px",
        "bs-xxl": "1400px",
      },

      colors: {
        "bms-primary": "#145C98", // Corporate Blue
        "bms-primary-soft": "#E6F1FB", // Light Blue Background
        "bms-accent": "#10B981", // Success Green
        "bms-dark": "#0F172A", // Slate 900 equivalent

        // Odoo neutral scale (Preserved)
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

      // Font Mapping (Preserved - Matches your Layout.tsx)
      fontFamily: {
        sans: [
          "var(--font-bms-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1" }],
        "display-3": ["2.5rem", { lineHeight: "1.15" }],
      },

      borderRadius: {
        "2xl": "1.25rem",
        pill: "9999px",
      },

      boxShadow: {
        "soft-lg": "0 18px 45px rgba(15, 23, 42, 0.12)",
        "odoo-sm": "0 6px 18px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  // ✅ ADDED: Typography plugin for News Article HTML rendering
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;