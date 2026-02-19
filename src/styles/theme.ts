/**
 * Nekkus Design Guide — токены для приложений.
 * Mission control: слои фона, минимум теней, модульные цвета точечно.
 */
export const theme = {
  layers: {
    "0": "#0A0A0F",
    "1": "#12121A",
    "2": "#1A1A2E",
    "3": "#232340",
  },
  border: {
    default: "#1E1E2E",
    hover: "#2E2E4E",
  },
  text: {
    primary: "#E2E8F0",
    muted: "#94A3B8",
    dim: "#475569",
  },
  modules: {
    net: "#3B82F6",
    eye: "#10B981",
    gate: "#EF4444",
    port: "#8B5CF6",
    vault: "#F59E0B",
    sync: "#06B6D4",
    clip: "#EC4899",
    hub: "#FFFFFF",
  },
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
    muted: "#475569",
  },
  radius: { sm: "6px", md: "8px", lg: "10px", card: "14px" },
  font: {
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  shadow: {
    dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)",
    modal: "0 20px 60px rgba(0, 0, 0, 0.7)",
    glow: "0 0 12px rgba(59, 130, 246, 0.4)",
  },
} as const;

export type Theme = typeof theme;
