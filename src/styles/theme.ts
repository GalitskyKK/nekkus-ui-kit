/**
 * Nekkus Design Guide — токены для приложений (nekkus-vis).
 * Глубина: градиенты, glow, inner highlight, dot grid, noise.
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
    active: "rgba(59, 130, 246, 0.4)",
  },
  text: {
    primary: "#E2E8F0",
    muted: "#94A3B8",
    dim: "#475569",
    faint: "#334155",
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
  gradients: {
    net: "linear-gradient(135deg, #3B82F6, #6366F1)",
    eye: "linear-gradient(135deg, #10B981, #059669)",
    gate: "linear-gradient(135deg, #EF4444, #DC2626)",
    port: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  },
  glow: {
    net: "0 0 30px rgba(59, 130, 246, 0.15)",
    eye: "0 0 30px rgba(16, 185, 129, 0.15)",
    gate: "0 0 30px rgba(239, 68, 68, 0.15)",
    port: "0 0 30px rgba(139, 92, 246, 0.15)",
  },
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
    muted: "#475569",
  },
  radius: { sm: "6px", md: "10px", lg: "14px", xl: "18px" },
  font: {
    sans: '"Inter", "Geist Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Geist Mono", "Fira Code", monospace',
  },
  shadow: {
    dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)",
    modal: "0 20px 60px rgba(0, 0, 0, 0.6)",
    glow: "0 0 12px rgba(59, 130, 246, 0.4)",
    card: "0 4px 24px rgba(0, 0, 0, 0.3)",
    cardHover: "0 8px 30px rgba(0, 0, 0, 0.5)",
    innerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.03)",
    innerHighlightStrong: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
  },
  transition: { fast: "150ms ease", normal: "200ms ease", slow: "300ms ease" },
} as const;

export type Theme = typeof theme;
