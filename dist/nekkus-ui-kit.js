import { jsxs as o, jsx as s } from "react/jsx-runtime";
import { useId as D } from "react";
const j = "inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed", Q = ({
  variant: e = "primary",
  size: t = "md",
  children: n,
  icon: a,
  iconPosition: r = "left",
  className: l = "",
  ...d
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    "data-nekkus-button": !0,
    "data-variant": e,
    "data-size": t,
    className: `${j} ${l}`.trim(),
    ...d,
    children: [
      a && r === "left" && /* @__PURE__ */ s(a, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 }),
      n,
      a && r === "right" && /* @__PURE__ */ s(a, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 })
    ]
  }
), L = "text-nekkus-card font-semibold text-nekkus-text mb-3";
function H(e) {
  if (e === !0) return "net";
  if (!(e === !1 || e == null))
    return e;
}
const U = ({
  children: e,
  title: t,
  accentTop: n = !1,
  variant: a = "default",
  heroModule: r,
  moduleGlow: l,
  className: d = "",
  ...p
}) => {
  const h = H(n);
  return /* @__PURE__ */ o(
    "div",
    {
      "data-nekkus-card": !0,
      "data-accent-top": h ?? void 0,
      "data-elevated": a === "elevated" ? "" : void 0,
      "data-hero": a === "hero" ? "" : void 0,
      "data-hero-module": a === "hero" && r ? r : void 0,
      "data-module-glow": l ?? void 0,
      className: d.trim(),
      ...p,
      children: [
        t ? /* @__PURE__ */ s("div", { className: L, children: t }) : null,
        e
      ]
    }
  );
}, V = ({
  value: e,
  label: t,
  className: n = "",
  ...a
}) => /* @__PURE__ */ o("div", { className: `${n}`.trim(), ...a, children: [
  /* @__PURE__ */ s("div", { className: "nekkus-metric-hero", children: e }),
  t != null && /* @__PURE__ */ s("div", { className: "nekkus-metric-label", children: t })
] }), ee = ({ className: e = "", ...t }) => /* @__PURE__ */ s("hr", { className: `nekkus-divider ${e}`.trim(), ...t }), te = ({
  status: e,
  label: t,
  size: n = 8,
  pulse: a = !0
}) => /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-2", children: [
  /* @__PURE__ */ s(
    "span",
    {
      "data-nekkus-status-dot": !0,
      "data-status": e,
      "data-pulse": a && (e === "online" || e === "busy") ? "" : void 0,
      style: { width: n, height: n }
    }
  ),
  t != null && /* @__PURE__ */ s("span", { className: "text-nekkus-sm font-medium text-nekkus-text-muted font-mono", children: t })
] }), P = "min-h-screen bg-nekkus-layer-0 text-nekkus-text p-6 md:p-8 box-border font-sans", se = ({
  children: e,
  className: t = "",
  style: n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `${P} ${t}`.trim(),
    style: n,
    "data-nekkus-root": !0,
    children: e
  }
), W = "text-nekkus-card font-semibold text-nekkus-text mb-3", ne = ({
  children: e,
  title: t,
  className: n = "",
  ...a
}) => /* @__PURE__ */ o("section", { className: `mb-8 ${n}`.trim(), ...a, children: [
  t ? /* @__PURE__ */ s("h2", { className: W, children: t }) : null,
  e
] }), G = "w-full min-w-[4px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300", O = "text-[10px] font-medium text-nekkus-text-dim font-mono truncate max-w-full", ae = ({
  data: e,
  labels: t,
  height: n = 120,
  color: a,
  showValueLabels: r = !1,
  valueSuffix: l = "",
  maxValue: d
}) => {
  const p = e.length > 0 ? e : [0], h = Math.max(...p, 1), x = d ?? h;
  return /* @__PURE__ */ o("div", { className: "chart-wrap flex gap-0.5 font-mono", children: [
    /* @__PURE__ */ o("div", { className: "chart-y-axis flex flex-col justify-between text-[10px] text-nekkus-text-dim font-mono pr-2 shrink-0", style: { height: n }, children: [
      /* @__PURE__ */ o("span", { children: [
        x <= 1 ? "1" : Math.round(x),
        l
      ] }),
      /* @__PURE__ */ o("span", { children: [
        "0",
        l
      ] })
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-end flex-1 gap-0.5 min-h-0",
        style: { height: n },
        children: p.map((c, k) => /* @__PURE__ */ o(
          "div",
          {
            className: "flex-1 flex flex-col items-center justify-end gap-1 min-w-0 h-full",
            style: { height: n },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: `${G} shrink-0`,
                  style: {
                    height: c === 0 ? 0 : `${Math.max(c / x * 100, 2)}%`,
                    ...a != null ? { backgroundColor: a } : {}
                  }
                }
              ),
              ((t == null ? void 0 : t[k]) != null || r) && /* @__PURE__ */ s("span", { className: O, title: String(c), children: (t == null ? void 0 : t[k]) ?? (r ? `${Number(c).toFixed(c % 1 === 0 ? 0 : 1)}${l}` : null) })
            ]
          },
          k
        ))
      }
    )
  ] });
}, w = "rgba(148, 163, 184, 0.2)", i = { top: 8, right: 8, bottom: 24, left: 48 }, re = ({
  data: e,
  height: t = 160,
  color: n = "#3b82f6",
  maxValue: a = 100,
  valueSuffix: r = "%",
  yLabel: l,
  xLabel: d,
  timeRangeLabel: p
}) => {
  const h = D().replace(/:/g, ""), x = e.length > 0 ? e : [0], c = a ?? Math.max(...x, 1), k = 400, $ = k - i.left - i.right, b = t - i.top - i.bottom, f = x.length, C = f > 1 ? $ / (f - 1) : 0, v = (u) => i.left + u * C, F = (u) => {
    const m = Math.min(c, Math.max(0, u));
    return i.top + b - m / c * b;
  }, N = x.map((u, m) => `${v(m)},${F(u)}`).join(" "), E = f > 0 ? `M ${i.left},${i.top + b} L ${N} L ${v(f - 1)},${i.top + b} Z` : "", B = f > 0 ? `M ${N.split(" ").join(" L ")}` : "", y = 5, M = Array.from({ length: y + 1 }, (u, m) => {
    const g = i.top + b * m / y, A = c - c * m / y;
    return { y: g, val: A };
  });
  return /* @__PURE__ */ o("div", { className: "line-chart-wrap flex flex-col gap-1", children: [
    /* @__PURE__ */ o("div", { className: "flex justify-between items-baseline text-[10px] text-nekkus-text-dim font-mono", children: [
      l && /* @__PURE__ */ s("span", { children: l }),
      /* @__PURE__ */ o("span", { children: [
        c,
        r
      ] })
    ] }),
    /* @__PURE__ */ o(
      "svg",
      {
        width: "100%",
        viewBox: `0 0 ${k} ${t}`,
        preserveAspectRatio: "xMidYMid meet",
        className: "min-h-[120px]",
        style: { maxHeight: t },
        children: [
          /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ o("linearGradient", { id: h, x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ s("stop", { offset: "0%", stopColor: n, stopOpacity: 0.35 }),
            /* @__PURE__ */ s("stop", { offset: "100%", stopColor: n, stopOpacity: 0.05 })
          ] }) }),
          M.map(({ y: u, val: m }, g) => /* @__PURE__ */ s(
            "line",
            {
              x1: i.left,
              y1: u,
              x2: k - i.right,
              y2: u,
              stroke: w,
              strokeWidth: 1
            },
            g
          )),
          f > 1 && Array.from({ length: 5 }, (u, m) => {
            const g = i.left + $ * m / 4;
            return /* @__PURE__ */ s(
              "line",
              {
                x1: g,
                y1: i.top,
                x2: g,
                y2: t - i.bottom,
                stroke: w,
                strokeWidth: 1
              },
              m
            );
          }),
          /* @__PURE__ */ s("path", { d: E, fill: `url(#${h})` }),
          /* @__PURE__ */ s(
            "path",
            {
              d: B,
              fill: "none",
              stroke: n,
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex justify-between text-[10px] text-nekkus-text-dim font-mono", children: [
      d && /* @__PURE__ */ s("span", { children: d }),
      p && /* @__PURE__ */ s("span", { children: "0" })
    ] })
  ] });
}, S = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans placeholder:text-nekkus-text-dim box-border transition-[border-color,box-shadow] duration-150", I = "flex flex-col gap-1 w-full", R = "text-nekkus-sm font-medium text-nekkus-text-muted", oe = ({
  label: e,
  className: t = "",
  id: n,
  ...a
}) => {
  const r = n ?? (e ? `input-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ o("label", { className: I, htmlFor: r, children: [
    e ? /* @__PURE__ */ s("span", { className: R, children: e }) : null,
    /* @__PURE__ */ s(
      "input",
      {
        id: r,
        "data-nekkus-input": !0,
        className: `${S} ${t}`.trim(),
        ...a
      }
    )
  ] });
}, Y = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans cursor-pointer box-border transition-[border-color,box-shadow] duration-150", _ = "flex flex-col gap-1 w-full", T = "text-nekkus-sm font-medium text-nekkus-text-muted", ie = ({
  label: e,
  options: t,
  className: n = "",
  id: a,
  ...r
}) => {
  const l = a ?? (e ? `select-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ o("label", { className: _, htmlFor: l, children: [
    e ? /* @__PURE__ */ s("span", { className: T, children: e }) : null,
    /* @__PURE__ */ s(
      "select",
      {
        id: l,
        "data-nekkus-select": !0,
        className: `${Y} ${n}`.trim(),
        ...r,
        children: t.map((d) => /* @__PURE__ */ s("option", { value: d.value, children: d.label }, d.value))
      }
    )
  ] });
}, X = {
  default: "bg-nekkus-accent/15 text-nekkus-accent",
  success: "bg-nekkus-success/15 text-nekkus-success",
  warning: "bg-nekkus-warning/15 text-nekkus-warning",
  error: "bg-nekkus-error/15 text-nekkus-error",
  info: "bg-nekkus-info/15 text-nekkus-info"
}, z = "inline-flex items-center px-2 py-0.5 text-nekkus-xs font-medium rounded-nekkus-sm font-sans", le = ({
  children: e,
  variant: t = "default",
  className: n = "",
  ...a
}) => /* @__PURE__ */ s(
  "span",
  {
    className: `${z} ${X[t]} ${n}`.trim(),
    ...a,
    children: e
  }
), J = {
  sm: "text-nekkus-sm font-medium",
  base: "text-nekkus-base font-medium",
  metric: "text-nekkus-metric font-bold"
}, Z = "font-mono text-nekkus-text tracking-tight", de = ({
  children: e,
  as: t = "span",
  size: n = "base",
  className: a = "",
  ...r
}) => /* @__PURE__ */ s(
  t,
  {
    className: `${Z} ${J[n]} ${a}`.trim(),
    ...r,
    children: e
  }
), ce = {
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
  Q as Button,
  U as Card,
  ae as Chart,
  de as DataText,
  ee as Divider,
  oe as Input,
  re as LineChart,
  V as MetricHero,
  se as PageLayout,
  le as Pill,
  ne as Section,
  ie as Select,
  te as StatusDot,
  ce as theme
};
//# sourceMappingURL=nekkus-ui-kit.js.map
