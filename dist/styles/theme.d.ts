/**
 * Nekkus Design Guide — токены для приложений (nekkus-vis).
 * Глубина: градиенты, glow, inner highlight, dot grid, noise.
 */
export declare const theme: {
    readonly layers: {
        readonly "0": "#0A0A0F";
        readonly "1": "#12121A";
        readonly "2": "#1A1A2E";
        readonly "3": "#232340";
    };
    readonly border: {
        readonly default: "#1E1E2E";
        readonly hover: "#2E2E4E";
        readonly active: "rgba(59, 130, 246, 0.4)";
    };
    readonly text: {
        readonly primary: "#E2E8F0";
        readonly muted: "#94A3B8";
        readonly dim: "#475569";
        readonly faint: "#334155";
    };
    readonly modules: {
        readonly net: "#3B82F6";
        readonly eye: "#10B981";
        readonly gate: "#EF4444";
        readonly port: "#8B5CF6";
        readonly vault: "#F59E0B";
        readonly sync: "#06B6D4";
        readonly clip: "#EC4899";
        readonly hub: "#FFFFFF";
    };
    readonly gradients: {
        readonly net: "linear-gradient(135deg, #3B82F6, #6366F1)";
        readonly eye: "linear-gradient(135deg, #10B981, #059669)";
        readonly gate: "linear-gradient(135deg, #EF4444, #DC2626)";
        readonly port: "linear-gradient(135deg, #8B5CF6, #7C3AED)";
    };
    readonly glow: {
        readonly net: "0 0 30px rgba(59, 130, 246, 0.15)";
        readonly eye: "0 0 30px rgba(16, 185, 129, 0.15)";
        readonly gate: "0 0 30px rgba(239, 68, 68, 0.15)";
        readonly port: "0 0 30px rgba(139, 92, 246, 0.15)";
    };
    readonly status: {
        readonly success: "#10B981";
        readonly warning: "#F59E0B";
        readonly error: "#EF4444";
        readonly info: "#3B82F6";
        readonly muted: "#475569";
    };
    readonly radius: {
        readonly sm: "6px";
        readonly md: "10px";
        readonly lg: "14px";
        readonly xl: "18px";
    };
    readonly font: {
        readonly sans: "\"Inter\", \"Geist Sans\", system-ui, sans-serif";
        readonly mono: "\"JetBrains Mono\", \"Geist Mono\", \"Fira Code\", monospace";
    };
    readonly shadow: {
        readonly dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)";
        readonly modal: "0 20px 60px rgba(0, 0, 0, 0.6)";
        readonly glow: "0 0 12px rgba(59, 130, 246, 0.4)";
        readonly card: "0 4px 24px rgba(0, 0, 0, 0.3)";
        readonly cardHover: "0 8px 30px rgba(0, 0, 0, 0.5)";
        readonly innerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.03)";
        readonly innerHighlightStrong: "inset 0 1px 0 rgba(255, 255, 255, 0.06)";
    };
    readonly transition: {
        readonly fast: "150ms ease";
        readonly normal: "200ms ease";
        readonly slow: "300ms ease";
    };
};
export type Theme = typeof theme;
