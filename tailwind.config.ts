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
      /* ------------------------------------------------------------------
       * Breakpoints (Preserved)
       * ---------------------------------------------------------------- */
      screens: {
        "bs-sm": "576px",
        "bs-md": "768px",
        "bs-lg": "992px",
        "bs-xl": "1200px",
        "bs-xxl": "1400px",
      },

      /* ------------------------------------------------------------------
       * Colors (Preserved)
       * ---------------------------------------------------------------- */
      colors: {
        "bms-primary": "#145C98",
        "bms-primary-soft": "#E6F1FB",
        "bms-accent": "#10B981",
        "bms-dark": "#0F172A",

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

      /* ------------------------------------------------------------------
       * Fonts (Preserved)
       * ---------------------------------------------------------------- */
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

      /* ------------------------------------------------------------------
       * ✅ NEW ADDITIONS (SAFE EXTENSION)
       * ---------------------------------------------------------------- */
      gap: {
        "24": "6rem", // enables: gap-24
      },

      gridAutoRows: {
        fr: "minmax(0, 1fr)", // enables: auto-rows-fr
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
