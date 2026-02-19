/** @type {import('tailwindcss').Config} */
/** Nekkus Design Guide: mission control, слои, минимум теней, модульные цвета */
export default {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.css", "./.storybook/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nekkus: {
          /* Слои фона (глубина без тяжёлых теней) */
          "layer-0": "#0A0A0F",
          "layer-1": "#12121A",
          "layer-2": "#1A1A2E",
          "layer-3": "#232340",
          /* Границы */
          border: "#1E1E2E",
          "border-hover": "#2E2E4E",
          /* Текст */
          text: "#E2E8F0",
          "text-muted": "#94A3B8",
          "text-dim": "#475569",
          /* Модульные цвета (точечно: кнопка, полоска, иконка) */
          net: "#3B82F6",
          eye: "#10B981",
          gate: "#EF4444",
          port: "#8B5CF6",
          vault: "#F59E0B",
          sync: "#06B6D4",
          clip: "#EC4899",
          hub: "#64748B",
          /* Статусы */
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
          muted: "#475569",
          /* Акцент по умолчанию (Net) */
          accent: "#3B82F6",
          "accent-hover": "#2563EB",
        },
      },
      borderRadius: {
        nekkus: { sm: "6px", md: "8px", lg: "10px", card: "14px" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "nekkus-xs": ["11px", { lineHeight: "1.4" }],
        "nekkus-sm": ["12px", { lineHeight: "1.5" }],
        "nekkus-base": ["14px", { lineHeight: "1.5" }],
        "nekkus-card": ["16px", { lineHeight: "1.2" }],
        "nekkus-page": ["24px", { lineHeight: "1.2" }],
        "nekkus-metric": ["32px", { lineHeight: "1.2" }],
      },
      boxShadow: {
        nekkus: {
          dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)",
          modal: "0 20px 60px rgba(0, 0, 0, 0.7)",
          glow: "0 0 12px rgba(59, 130, 246, 0.4)",
        },
      },
      transitionDuration: { 150: "150ms", 200: "200ms", 300: "300ms" },
      keyframes: {
        "status-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "70%": { boxShadow: "0 0 0 6px rgba(16, 185, 129, 0)" },
        },
      },
      animation: {
        "status-pulse": "status-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
