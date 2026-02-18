/**
 * Nekkus UI theme tokens.
 * Use in CSS variables or inline styles for consistency across Hub, Net, Eye, etc.
 */
export const theme = {
  colors: {
    primary: "#3574D4",
    primaryHover: "#2C5FB8",
    primaryMuted: "rgba(53, 116, 212, 0.15)",
    background: "#0f1117",
    backgroundElevated: "#1a1d26",
    surface: "#1e2129",
    border: "#2d323d",
    text: "#e6e8ec",
    textMuted: "#9ca3af",
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
    info: "#3b82f6",
  },
  status: {
    online: "#22c55e",
    offline: "#6b7280",
    busy: "#eab308",
    error: "#ef4444",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  font: {
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
} as const;

export type Theme = typeof theme;
