import { jsxs as l, jsx as a } from "react/jsx-runtime";
const c = "inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed", A = ({
  variant: e = "primary",
  size: t = "md",
  children: n,
  icon: s,
  iconPosition: r = "left",
  className: i = "",
  ...o
}) => /* @__PURE__ */ l(
  "button",
  {
    type: "button",
    "data-nekkus-button": !0,
    "data-variant": e,
    "data-size": t,
    className: `${c} ${i}`.trim(),
    ...o,
    children: [
      s && r === "left" && /* @__PURE__ */ a(s, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 }),
      n,
      s && r === "right" && /* @__PURE__ */ a(s, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 })
    ]
  }
), k = "text-nekkus-card font-semibold text-nekkus-text mb-3";
function m(e) {
  if (e === !0) return "net";
  if (!(e === !1 || e == null))
    return e;
}
const D = ({
  children: e,
  title: t,
  accentTop: n = !1,
  variant: s = "default",
  heroModule: r,
  moduleGlow: i,
  className: o = "",
  ...d
}) => {
  const u = m(n);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-nekkus-card": !0,
      "data-accent-top": u ?? void 0,
      "data-elevated": s === "elevated" ? "" : void 0,
      "data-hero": s === "hero" ? "" : void 0,
      "data-hero-module": s === "hero" && r ? r : void 0,
      "data-module-glow": i ?? void 0,
      className: o.trim(),
      ...d,
      children: [
        t ? /* @__PURE__ */ a("div", { className: k, children: t }) : null,
        e
      ]
    }
  );
}, S = ({
  value: e,
  label: t,
  className: n = "",
  ...s
}) => /* @__PURE__ */ l("div", { className: `${n}`.trim(), ...s, children: [
  /* @__PURE__ */ a("div", { className: "nekkus-metric-hero", children: e }),
  t != null && /* @__PURE__ */ a("div", { className: "nekkus-metric-label", children: t })
] }), H = ({ className: e = "", ...t }) => /* @__PURE__ */ a("hr", { className: `nekkus-divider ${e}`.trim(), ...t }), j = ({
  status: e,
  label: t,
  size: n = 8,
  pulse: s = !0
}) => /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
  /* @__PURE__ */ a(
    "span",
    {
      "data-nekkus-status-dot": !0,
      "data-status": e,
      "data-pulse": s && (e === "online" || e === "busy") ? "" : void 0,
      style: { width: n, height: n }
    }
  ),
  t != null && /* @__PURE__ */ a("span", { className: "text-nekkus-sm font-medium text-nekkus-text-muted font-mono", children: t })
] }), x = "min-h-screen bg-nekkus-layer-0 text-nekkus-text p-6 md:p-8 box-border font-sans", M = ({
  children: e,
  className: t = "",
  style: n
}) => /* @__PURE__ */ a(
  "div",
  {
    className: `${x} ${t}`.trim(),
    style: n,
    "data-nekkus-root": !0,
    children: e
  }
), g = "text-nekkus-card font-semibold text-nekkus-text mb-3", P = ({
  children: e,
  title: t,
  className: n = "",
  ...s
}) => /* @__PURE__ */ l("section", { className: `mb-8 ${n}`.trim(), ...s, children: [
  t ? /* @__PURE__ */ a("h2", { className: g, children: t }) : null,
  e
] }), p = "w-full min-h-[6px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300", h = "text-nekkus-xs font-medium text-nekkus-text-dim font-mono", G = ({
  data: e,
  labels: t,
  height: n = 120,
  color: s
}) => {
  const r = Math.max(...e, 1);
  return /* @__PURE__ */ a(
    "div",
    {
      className: "flex items-end gap-1 font-mono",
      style: { height: n },
      children: e.map((i, o) => /* @__PURE__ */ l(
        "div",
        {
          className: "flex-1 flex flex-col items-center gap-1.5",
          children: [
            /* @__PURE__ */ a(
              "div",
              {
                className: p,
                style: {
                  height: `${i / r * 100}%`,
                  ...s != null ? { backgroundColor: s } : {}
                }
              }
            ),
            (t == null ? void 0 : t[o]) != null && /* @__PURE__ */ a("span", { className: h, children: t[o] })
          ]
        },
        o
      ))
    }
  );
}, b = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans placeholder:text-nekkus-text-dim box-border transition-[border-color,box-shadow] duration-150", f = "flex flex-col gap-1 w-full", v = "text-nekkus-sm font-medium text-nekkus-text-muted", L = ({
  label: e,
  className: t = "",
  id: n,
  ...s
}) => {
  const r = n ?? (e ? `input-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ l("label", { className: f, htmlFor: r, children: [
    e ? /* @__PURE__ */ a("span", { className: v, children: e }) : null,
    /* @__PURE__ */ a(
      "input",
      {
        id: r,
        "data-nekkus-input": !0,
        className: `${b} ${t}`.trim(),
        ...s
      }
    )
  ] });
}, N = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans cursor-pointer box-border transition-[border-color,box-shadow] duration-150", C = "flex flex-col gap-1 w-full", $ = "text-nekkus-sm font-medium text-nekkus-text-muted", T = ({
  label: e,
  options: t,
  className: n = "",
  id: s,
  ...r
}) => {
  const i = s ?? (e ? `select-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ l("label", { className: C, htmlFor: i, children: [
    e ? /* @__PURE__ */ a("span", { className: $, children: e }) : null,
    /* @__PURE__ */ a(
      "select",
      {
        id: i,
        "data-nekkus-select": !0,
        className: `${N} ${n}`.trim(),
        ...r,
        children: t.map((o) => /* @__PURE__ */ a("option", { value: o.value, children: o.label }, o.value))
      }
    )
  ] });
}, y = {
  default: "bg-nekkus-accent/15 text-nekkus-accent",
  success: "bg-nekkus-success/15 text-nekkus-success",
  warning: "bg-nekkus-warning/15 text-nekkus-warning",
  error: "bg-nekkus-error/15 text-nekkus-error",
  info: "bg-nekkus-info/15 text-nekkus-info"
}, F = "inline-flex items-center px-2 py-0.5 text-nekkus-xs font-medium rounded-nekkus-sm font-sans", W = ({
  children: e,
  variant: t = "default",
  className: n = "",
  ...s
}) => /* @__PURE__ */ a(
  "span",
  {
    className: `${F} ${y[t]} ${n}`.trim(),
    ...s,
    children: e
  }
), w = {
  sm: "text-nekkus-sm font-medium",
  base: "text-nekkus-base font-medium",
  metric: "text-nekkus-metric font-bold"
}, E = "font-mono text-nekkus-text tracking-tight", z = ({
  children: e,
  as: t = "span",
  size: n = "base",
  className: s = "",
  ...r
}) => /* @__PURE__ */ a(
  t,
  {
    className: `${E} ${w[n]} ${s}`.trim(),
    ...r,
    children: e
  }
), J = {
  layers: {
    0: "#0A0A0F",
    1: "#12121A",
    2: "#1A1A2E",
    3: "#232340"
  },
  border: {
    default: "#1E1E2E",
    hover: "#2E2E4E",
    active: "rgba(59, 130, 246, 0.4)"
  },
  text: {
    primary: "#E2E8F0",
    muted: "#94A3B8",
    dim: "#475569",
    faint: "#334155"
  },
  modules: {
    net: "#3B82F6",
    eye: "#10B981",
    gate: "#EF4444",
    port: "#8B5CF6",
    vault: "#F59E0B",
    sync: "#06B6D4",
    clip: "#EC4899",
    hub: "#FFFFFF"
  },
  gradients: {
    net: "linear-gradient(135deg, #3B82F6, #6366F1)",
    eye: "linear-gradient(135deg, #10B981, #059669)",
    gate: "linear-gradient(135deg, #EF4444, #DC2626)",
    port: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
  },
  glow: {
    net: "0 0 30px rgba(59, 130, 246, 0.15)",
    eye: "0 0 30px rgba(16, 185, 129, 0.15)",
    gate: "0 0 30px rgba(239, 68, 68, 0.15)",
    port: "0 0 30px rgba(139, 92, 246, 0.15)"
  },
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
    muted: "#475569"
  },
  radius: { sm: "6px", md: "10px", lg: "14px", xl: "18px" },
  font: {
    sans: '"Inter", "Geist Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Geist Mono", "Fira Code", monospace'
  },
  shadow: {
    dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)",
    modal: "0 20px 60px rgba(0, 0, 0, 0.6)",
    glow: "0 0 12px rgba(59, 130, 246, 0.4)",
    card: "0 4px 24px rgba(0, 0, 0, 0.3)",
    cardHover: "0 8px 30px rgba(0, 0, 0, 0.5)",
    innerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.03)",
    innerHighlightStrong: "inset 0 1px 0 rgba(255, 255, 255, 0.06)"
  },
  transition: { fast: "150ms ease", normal: "200ms ease", slow: "300ms ease" }
};
export {
  A as Button,
  D as Card,
  G as Chart,
  z as DataText,
  H as Divider,
  L as Input,
  S as MetricHero,
  M as PageLayout,
  W as Pill,
  P as Section,
  T as Select,
  j as StatusDot,
  J as theme
};
//# sourceMappingURL=nekkus-ui-kit.js.map
