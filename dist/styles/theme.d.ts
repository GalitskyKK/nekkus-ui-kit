/**
 * Nekkus Design Guide — токены для приложений.
 * Mission control: слои фона, минимум теней, модульные цвета точечно.
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
    };
    readonly text: {
        readonly primary: "#E2E8F0";
        readonly muted: "#94A3B8";
        readonly dim: "#475569";
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
    readonly status: {
        readonly success: "#10B981";
        readonly warning: "#F59E0B";
        readonly error: "#EF4444";
        readonly info: "#3B82F6";
        readonly muted: "#475569";
    };
    readonly radius: {
        readonly sm: "6px";
        readonly md: "8px";
        readonly lg: "10px";
        readonly card: "14px";
    };
    readonly font: {
        readonly sans: "\"Inter\", system-ui, sans-serif";
        readonly mono: "\"JetBrains Mono\", \"Fira Code\", monospace";
    };
    readonly shadow: {
        readonly dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)";
        readonly modal: "0 20px 60px rgba(0, 0, 0, 0.7)";
        readonly glow: "0 0 12px rgba(59, 130, 246, 0.4)";
    };
};
export type Theme = typeof theme;
