import { jsxs as u, jsx as r } from "react/jsx-runtime";
const d = {
  primary: "bg-nekkus-accent text-white border-0 hover:bg-nekkus-accent-hover active:opacity-90",
  secondary: "bg-transparent text-nekkus-text border border-nekkus-border hover:bg-nekkus-layer-2 hover:border-nekkus-border-hover",
  ghost: "bg-transparent text-nekkus-text-muted border-0 hover:bg-nekkus-layer-2 hover:text-nekkus-text",
  danger: "bg-nekkus-error text-white border-0 hover:bg-red-600 active:opacity-90"
}, k = {
  sm: "px-3 py-2 text-nekkus-sm rounded-[6px]",
  md: "px-5 py-2.5 text-nekkus-base rounded-nekkus-md",
  large: "px-6 py-3 text-base rounded-nekkus-lg"
}, i = "inline-flex items-center justify-center gap-2 font-sans font-medium cursor-pointer transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed", A = ({
  variant: e = "primary",
  size: s = "md",
  children: n,
  icon: t,
  iconPosition: a = "left",
  className: l = "",
  ...o
}) => /* @__PURE__ */ u(
  "button",
  {
    type: "button",
    "data-nekkus-button": !0,
    className: `${i} ${k[s]} ${d[e]} ${l}`.trim(),
    ...o,
    children: [
      t && a === "left" && /* @__PURE__ */ r(t, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 }),
      n,
      t && a === "right" && /* @__PURE__ */ r(t, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 })
    ]
  }
), c = "text-nekkus-card font-semibold text-nekkus-text mb-3", T = ({
  children: e,
  title: s,
  accentTop: n = !1,
  className: t = "",
  ...a
}) => /* @__PURE__ */ u(
  "div",
  {
    "data-nekkus-card": !0,
    "data-accent-top": n ? "" : void 0,
    className: t.trim(),
    ...a,
    children: [
      s ? /* @__PURE__ */ r("div", { className: c, children: s }) : null,
      e
    ]
  }
), m = {
  online: "bg-nekkus-success",
  offline: "bg-nekkus-muted",
  busy: "bg-nekkus-warning",
  error: "bg-nekkus-error"
}, j = ({
  status: e,
  label: s,
  size: n = 8,
  pulse: t = !0
}) => /* @__PURE__ */ u("span", { className: "inline-flex items-center gap-2", children: [
  /* @__PURE__ */ r(
    "span",
    {
      "data-nekkus-status-dot": !0,
      "data-pulse": t && e === "online" ? "" : void 0,
      className: `shrink-0 rounded-full ${m[e]}`,
      style: { width: n, height: n }
    }
  ),
  s != null && /* @__PURE__ */ r("span", { className: "text-nekkus-sm font-medium text-nekkus-text-muted font-mono", children: s })
] }), x = "min-h-screen bg-nekkus-layer-0 text-nekkus-text p-6 md:p-8 box-border font-sans", D = ({
  children: e,
  className: s = "",
  style: n
}) => /* @__PURE__ */ r(
  "div",
  {
    className: `${x} ${s}`.trim(),
    style: n,
    "data-nekkus-root": !0,
    children: e
  }
), b = "text-nekkus-card font-semibold text-nekkus-text mb-3", P = ({
  children: e,
  title: s,
  className: n = "",
  ...t
}) => /* @__PURE__ */ u("section", { className: `mb-8 ${n}`.trim(), ...t, children: [
  s ? /* @__PURE__ */ r("h2", { className: b, children: s }) : null,
  e
] }), p = "w-full min-h-[6px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300", h = "text-nekkus-xs font-medium text-nekkus-text-dim font-mono", S = ({
  data: e,
  labels: s,
  height: n = 120,
  color: t
}) => {
  const a = Math.max(...e, 1);
  return /* @__PURE__ */ r(
    "div",
    {
      className: "flex items-end gap-1 font-mono",
      style: { height: n },
      children: e.map((l, o) => /* @__PURE__ */ u(
        "div",
        {
          className: "flex-1 flex flex-col items-center gap-1.5",
          children: [
            /* @__PURE__ */ r(
              "div",
              {
                className: p,
                style: {
                  height: `${l / a * 100}%`,
                  ...t != null ? { backgroundColor: t } : {}
                }
              }
            ),
            (s == null ? void 0 : s[o]) != null && /* @__PURE__ */ r("span", { className: h, children: s[o] })
          ]
        },
        o
      ))
    }
  );
}, g = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans placeholder:text-nekkus-text-dim box-border transition-[border-color,box-shadow] duration-150", f = "flex flex-col gap-1 w-full", y = "text-nekkus-sm font-medium text-nekkus-text-muted", L = ({
  label: e,
  className: s = "",
  id: n,
  ...t
}) => {
  const a = n ?? (e ? `input-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ u("label", { className: f, htmlFor: a, children: [
    e ? /* @__PURE__ */ r("span", { className: y, children: e }) : null,
    /* @__PURE__ */ r(
      "input",
      {
        id: a,
        "data-nekkus-input": !0,
        className: `${g} ${s}`.trim(),
        ...t
      }
    )
  ] });
}, v = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans cursor-pointer box-border transition-[border-color,box-shadow] duration-150", $ = "flex flex-col gap-1 w-full", C = "text-nekkus-sm font-medium text-nekkus-text-muted", M = ({
  label: e,
  options: s,
  className: n = "",
  id: t,
  ...a
}) => {
  const l = t ?? (e ? `select-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ u("label", { className: $, htmlFor: l, children: [
    e ? /* @__PURE__ */ r("span", { className: C, children: e }) : null,
    /* @__PURE__ */ r(
      "select",
      {
        id: l,
        "data-nekkus-select": !0,
        className: `${v} ${n}`.trim(),
        ...a,
        children: s.map((o) => /* @__PURE__ */ r("option", { value: o.value, children: o.label }, o.value))
      }
    )
  ] });
}, N = {
  default: "bg-nekkus-accent/15 text-nekkus-accent",
  success: "bg-nekkus-success/15 text-nekkus-success",
  warning: "bg-nekkus-warning/15 text-nekkus-warning",
  error: "bg-nekkus-error/15 text-nekkus-error",
  info: "bg-nekkus-info/15 text-nekkus-info"
}, w = "inline-flex items-center px-2 py-0.5 text-nekkus-xs font-medium rounded-nekkus-sm font-sans", W = ({
  children: e,
  variant: s = "default",
  className: n = "",
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: `${w} ${N[s]} ${n}`.trim(),
    ...t,
    children: e
  }
), F = {
  sm: "text-nekkus-sm font-medium",
  base: "text-nekkus-base font-medium",
  metric: "text-nekkus-metric font-bold"
}, E = "font-mono text-nekkus-text tracking-tight", z = ({
  children: e,
  as: s = "span",
  size: n = "base",
  className: t = "",
  ...a
}) => /* @__PURE__ */ r(
  s,
  {
    className: `${E} ${F[n]} ${t}`.trim(),
    ...a,
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
    hover: "#2E2E4E"
  },
  text: {
    primary: "#E2E8F0",
    muted: "#94A3B8",
    dim: "#475569"
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
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
    muted: "#475569"
  },
  radius: { sm: "6px", md: "8px", lg: "10px", card: "14px" },
  font: {
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace'
  },
  shadow: {
    dropdown: "0 8px 30px rgba(0, 0, 0, 0.5)",
    modal: "0 20px 60px rgba(0, 0, 0, 0.7)",
    glow: "0 0 12px rgba(59, 130, 246, 0.4)"
  }
};
export {
  A as Button,
  T as Card,
  S as Chart,
  z as DataText,
  L as Input,
  D as PageLayout,
  W as Pill,
  P as Section,
  M as Select,
  j as StatusDot,
  J as theme
};
//# sourceMappingURL=nekkus-ui-kit.js.map
