import { jsxs as r, jsx as s, Fragment as A } from "react/jsx-runtime";
import { useId as j } from "react";
const L = "inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed", se = ({
  variant: e = "primary",
  size: t = "md",
  children: n,
  icon: a,
  iconPosition: l = "left",
  className: d = "",
  ...o
}) => /* @__PURE__ */ r(
  "button",
  {
    type: "button",
    "data-nekkus-button": !0,
    "data-variant": e,
    "data-size": t,
    className: `${L} ${d}`.trim(),
    ...o,
    children: [
      a && l === "left" && /* @__PURE__ */ s(a, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 }),
      n,
      a && l === "right" && /* @__PURE__ */ s(a, { className: "w-4 h-4 shrink-0", "aria-hidden": !0, strokeWidth: 1.5 })
    ]
  }
), D = "text-nekkus-card font-semibold text-nekkus-text mb-3";
function P(e) {
  if (e === !0) return "net";
  if (!(e === !1 || e == null))
    return e;
}
const H = ({
  children: e,
  title: t,
  accentTop: n = !1,
  variant: a = "default",
  heroModule: l,
  moduleGlow: d,
  className: o = "",
  ...c
}) => {
  const p = P(n);
  return /* @__PURE__ */ r(
    "div",
    {
      "data-nekkus-card": !0,
      "data-accent-top": p ?? void 0,
      "data-elevated": a === "elevated" ? "" : void 0,
      "data-hero": a === "hero" ? "" : void 0,
      "data-hero-module": a === "hero" && l ? l : void 0,
      "data-module-glow": d ?? void 0,
      className: o.trim(),
      ...c,
      children: [
        t ? /* @__PURE__ */ s("div", { className: D, children: t }) : null,
        e
      ]
    }
  );
}, S = {
  small: "Маленький",
  medium: "Средний",
  large: "Большой"
}, ne = ({
  size: e,
  title: t,
  description: n,
  module: a,
  running: l,
  accentTop: d,
  children: o,
  onSizeChange: c,
  headerActions: p,
  configPanel: h,
  footer: u,
  onDragStart: m,
  onDragEnd: $,
  onDragOver: b,
  onDrop: g,
  dragging: _,
  className: y = "",
  style: w
}) => {
  const N = !!a, C = /* @__PURE__ */ r(
    "div",
    {
      className: "nekkus-module-card__drag",
      draggable: !!m,
      onDragStart: m,
      onDragEnd: $,
      title: m ? "Перетащите для смены порядка" : void 0,
      children: [
        /* @__PURE__ */ s("h2", { className: "nekkus-module-card__title", children: t }),
        n ? /* @__PURE__ */ s("p", { className: "nekkus-module-card__desc", children: n }) : null
      ]
    }
  );
  return /* @__PURE__ */ r(
    H,
    {
      accentTop: N ? void 0 : d,
      className: `nekkus-module-card nekkus-module-card--${e} nekkus-glass-card ${N ? "nekkus-module-card-border" : ""} ${_ ? "nekkus-module-card--dragging" : ""} ${y}`.trim(),
      "data-module": a,
      "data-running": N && l ? "true" : void 0,
      style: w,
      onDragOver: b,
      onDrop: g,
      children: [
        /* @__PURE__ */ r("header", { className: "nekkus-module-card__header", children: [
          C,
          /* @__PURE__ */ r("div", { className: "nekkus-module-card__header-actions", children: [
            c ? /* @__PURE__ */ s("span", { className: "nekkus-module-card__size-btns", onClick: (k) => k.stopPropagation(), children: ["small", "medium", "large"].map((k) => /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: `nekkus-module-card__size-btn ${e === k ? "nekkus-module-card__size-btn--active" : ""}`,
                onClick: () => c(k),
                title: S[k],
                "aria-pressed": e === k,
                children: k === "small" ? "S" : k === "medium" ? "M" : "L"
              },
              k
            )) }) : null,
            p
          ] })
        ] }),
        h ? /* @__PURE__ */ s("div", { className: "nekkus-module-card__config", role: "dialog", "aria-label": "Настройки отображения", children: h }) : null,
        /* @__PURE__ */ s("div", { className: "nekkus-module-card__body", children: o }),
        u ? /* @__PURE__ */ s("div", { className: "nekkus-module-card__footer", children: u }) : null
      ]
    }
  );
}, ae = ({
  children: e,
  className: t = "",
  style: n
}) => /* @__PURE__ */ s("div", { className: `nekkus-module-card-grid ${t}`.trim(), style: n, children: e }), re = ({
  onClick: e,
  disabled: t = !1,
  empty: n = !1,
  className: a = "",
  children: l
}) => /* @__PURE__ */ r(
  "button",
  {
    type: "button",
    className: `nekkus-add-placeholder ${n ? "nekkus-add-placeholder--empty" : ""} ${a}`.trim(),
    onClick: e,
    disabled: t,
    "aria-label": "Добавить модуль",
    children: [
      /* @__PURE__ */ s("span", { className: "nekkus-add-placeholder__icon", "aria-hidden": !0, children: "+" }),
      l ?? "Добавить модуль"
    ]
  }
), le = ({
  children: e,
  className: t = "",
  style: n
}) => /* @__PURE__ */ s("p", { className: `nekkus-empty-state ${t}`.trim(), style: n, children: e }), de = ({
  label: e,
  value: t,
  className: n = "",
  style: a
}) => /* @__PURE__ */ r("div", { className: `nekkus-header-stat ${n}`.trim(), style: a, children: [
  /* @__PURE__ */ s("span", { children: e }),
  /* @__PURE__ */ s("strong", { children: t })
] }), oe = ({
  value: e,
  label: t,
  className: n = "",
  ...a
}) => /* @__PURE__ */ r("div", { className: `${n}`.trim(), ...a, children: [
  /* @__PURE__ */ s("div", { className: "nekkus-metric-hero", children: e }),
  t != null && /* @__PURE__ */ s("div", { className: "nekkus-metric-label", children: t })
] }), ie = ({ className: e = "", ...t }) => /* @__PURE__ */ s("hr", { className: `nekkus-divider ${e}`.trim(), ...t }), ce = ({
  status: e,
  label: t,
  size: n = 8,
  pulse: a = !0
}) => /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-2", children: [
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
] }), G = "min-h-screen bg-nekkus-layer-0 text-nekkus-text p-6 md:p-8 box-border font-sans", ue = ({
  children: e,
  className: t = "",
  style: n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `${G} ${t}`.trim(),
    style: n,
    "data-nekkus-root": !0,
    children: e
  }
), W = "text-nekkus-card font-semibold text-nekkus-text mb-3", me = ({
  children: e,
  title: t,
  className: n = "",
  ...a
}) => /* @__PURE__ */ r("section", { className: `mb-8 ${n}`.trim(), ...a, children: [
  t ? /* @__PURE__ */ s("h2", { className: W, children: t }) : null,
  e
] }), ke = ({
  logo: e,
  eyebrow: t,
  title: n,
  description: a,
  meta: l,
  children: d,
  className: o = "",
  style: c
}) => /* @__PURE__ */ r("div", { className: `nekkus-app-shell ${o}`.trim(), style: c, children: [
  /* @__PURE__ */ r("header", { className: "nekkus-app-header", children: [
    /* @__PURE__ */ r("div", { className: "nekkus-app-header__main", children: [
      e ? /* @__PURE__ */ r("div", { className: "nekkus-app-header__brand", children: [
        /* @__PURE__ */ s("span", { className: "nekkus-app-header__logo", children: e.toUpperCase() }),
        /* @__PURE__ */ s("h1", { className: "nekkus-app-header__title", children: n.toUpperCase() })
      ] }) : /* @__PURE__ */ r(A, { children: [
        t ? /* @__PURE__ */ s("p", { className: "nekkus-app-header__eyebrow", children: t }) : null,
        /* @__PURE__ */ s("h1", { className: "nekkus-app-header__title", children: n })
      ] }),
      a ? /* @__PURE__ */ s("p", { className: "nekkus-app-header__desc", children: a }) : null
    ] }),
    l ? /* @__PURE__ */ s("div", { className: "nekkus-app-header__meta", children: l }) : null
  ] }),
  /* @__PURE__ */ s("div", { className: "nekkus-app-shell__content", children: d })
] }), I = "w-full min-w-[4px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300", O = "text-[10px] font-medium text-nekkus-text-dim font-mono truncate max-w-full", pe = ({
  data: e,
  labels: t,
  height: n = 120,
  color: a,
  showValueLabels: l = !1,
  valueSuffix: d = "",
  maxValue: o
}) => {
  const c = e.length > 0 ? e : [0], p = Math.max(...c, 1), h = o ?? p;
  return /* @__PURE__ */ r("div", { className: "chart-wrap flex gap-0.5 font-mono", children: [
    /* @__PURE__ */ r("div", { className: "chart-y-axis flex flex-col justify-between text-[10px] text-nekkus-text-dim font-mono pr-2 shrink-0", style: { height: n }, children: [
      /* @__PURE__ */ r("span", { children: [
        h <= 1 ? "1" : Math.round(h),
        d
      ] }),
      /* @__PURE__ */ r("span", { children: [
        "0",
        d
      ] })
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: "flex items-end flex-1 gap-0.5 min-h-0",
        style: { height: n },
        children: c.map((u, m) => /* @__PURE__ */ r(
          "div",
          {
            className: "flex-1 flex flex-col items-center justify-end gap-1 min-w-0 h-full",
            style: { height: n },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: `${I} shrink-0`,
                  style: {
                    height: u === 0 ? 0 : `${Math.max(u / h * 100, 2)}%`,
                    ...a != null ? { backgroundColor: a } : {}
                  }
                }
              ),
              ((t == null ? void 0 : t[m]) != null || l) && /* @__PURE__ */ s("span", { className: O, title: String(u), children: (t == null ? void 0 : t[m]) ?? (l ? `${Number(u).toFixed(u % 1 === 0 ? 0 : 1)}${d}` : null) })
            ]
          },
          m
        ))
      }
    )
  ] });
}, B = "rgba(148, 163, 184, 0.2)", i = { top: 4, right: 12, bottom: 16, left: 32 }, he = ({
  data: e,
  height: t = 160,
  color: n = "#3b82f6",
  maxValue: a = 100,
  valueSuffix: l = "%",
  yLabel: d,
  xLabel: o,
  timeRangeLabel: c
}) => {
  const p = j().replace(/:/g, ""), h = e.length > 0 ? e : [0], u = a ?? Math.max(...h, 1), m = 600, $ = m - i.left - i.right, b = t - i.top - i.bottom, g = h.length, _ = g > 1 ? $ / (g - 1) : 0, y = (x) => i.left + x * _, w = (x) => {
    const f = Math.min(u, Math.max(0, x));
    return i.top + b - f / u * b;
  }, N = h.map((x, f) => `${y(f)},${w(x)}`).join(" "), C = g > 0 ? `M ${i.left},${i.top + b} L ${N} L ${y(g - 1)},${i.top + b} Z` : "", k = g > 0 ? `M ${N.split(" ").join(" L ")}` : "", F = 5, E = Array.from({ length: F + 1 }, (x, f) => {
    const v = i.top + b * f / F, M = u - u * f / F;
    return { y: v, val: M };
  });
  return /* @__PURE__ */ r("div", { className: "line-chart-wrap flex flex-col gap-1", children: [
    /* @__PURE__ */ r("div", { className: "flex justify-between items-baseline text-[10px] text-nekkus-text-dim font-mono", children: [
      d && /* @__PURE__ */ s("span", { children: d }),
      /* @__PURE__ */ r("span", { children: [
        u,
        l
      ] })
    ] }),
    /* @__PURE__ */ r(
      "svg",
      {
        width: "100%",
        viewBox: `0 0 ${m} ${t}`,
        preserveAspectRatio: "none",
        className: "min-h-[120px] block",
        style: { height: t },
        children: [
          /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ r("linearGradient", { id: p, x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ s("stop", { offset: "0%", stopColor: n, stopOpacity: 0.35 }),
            /* @__PURE__ */ s("stop", { offset: "100%", stopColor: n, stopOpacity: 0.05 })
          ] }) }),
          E.map(({ y: x, val: f }, v) => /* @__PURE__ */ s(
            "line",
            {
              x1: i.left,
              y1: x,
              x2: m - i.right,
              y2: x,
              stroke: B,
              strokeWidth: 1
            },
            v
          )),
          g > 1 && Array.from({ length: 5 }, (x, f) => {
            const v = i.left + $ * f / 4;
            return /* @__PURE__ */ s(
              "line",
              {
                x1: v,
                y1: i.top,
                x2: v,
                y2: t - i.bottom,
                stroke: B,
                strokeWidth: 1
              },
              f
            );
          }),
          /* @__PURE__ */ s("path", { d: C, fill: `url(#${p})` }),
          /* @__PURE__ */ s(
            "path",
            {
              d: k,
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
    /* @__PURE__ */ r("div", { className: "flex justify-between text-[10px] text-nekkus-text-dim font-mono", children: [
      o && /* @__PURE__ */ s("span", { children: o }),
      c && /* @__PURE__ */ s("span", { children: "0" })
    ] })
  ] });
}, R = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans placeholder:text-nekkus-text-dim box-border transition-[border-color,box-shadow] duration-150", T = "flex flex-col gap-1 w-full", U = "text-nekkus-sm font-medium text-nekkus-text-muted", xe = ({
  label: e,
  className: t = "",
  id: n,
  ...a
}) => {
  const l = n ?? (e ? `input-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ r("label", { className: T, htmlFor: l, children: [
    e ? /* @__PURE__ */ s("span", { className: U, children: e }) : null,
    /* @__PURE__ */ s(
      "input",
      {
        id: l,
        "data-nekkus-input": !0,
        className: `${R} ${t}`.trim(),
        ...a
      }
    )
  ] });
}, X = "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans cursor-pointer box-border transition-[border-color,box-shadow] duration-150", Y = "flex flex-col gap-1 w-full", Z = "text-nekkus-sm font-medium text-nekkus-text-muted", fe = ({
  label: e,
  options: t,
  className: n = "",
  id: a,
  ...l
}) => {
  const d = a ?? (e ? `select-${e.replace(/\s/g, "-")}` : void 0);
  return /* @__PURE__ */ r("label", { className: Y, htmlFor: d, children: [
    e ? /* @__PURE__ */ s("span", { className: Z, children: e }) : null,
    /* @__PURE__ */ s(
      "select",
      {
        id: d,
        "data-nekkus-select": !0,
        className: `${X} ${n}`.trim(),
        ...l,
        children: t.map((o) => /* @__PURE__ */ s("option", { value: o.value, children: o.label }, o.value))
      }
    )
  ] });
}, z = {
  default: "bg-nekkus-accent/15 text-nekkus-accent",
  success: "bg-nekkus-success/15 text-nekkus-success",
  warning: "bg-nekkus-warning/15 text-nekkus-warning",
  error: "bg-nekkus-error/15 text-nekkus-error",
  info: "bg-nekkus-info/15 text-nekkus-info"
}, J = "inline-flex items-center px-2 py-0.5 text-nekkus-xs font-medium rounded-nekkus-sm font-sans", ge = ({
  children: e,
  variant: t = "default",
  className: n = "",
  ...a
}) => /* @__PURE__ */ s(
  "span",
  {
    className: `${J} ${z[t]} ${n}`.trim(),
    ...a,
    children: e
  }
), q = {
  sm: "text-nekkus-sm font-medium",
  base: "text-nekkus-base font-medium",
  metric: "text-nekkus-metric font-bold"
}, K = "font-mono text-nekkus-text tracking-tight", be = ({
  children: e,
  as: t = "span",
  size: n = "base",
  className: a = "",
  ...l
}) => /* @__PURE__ */ s(
  t,
  {
    className: `${K} ${q[n]} ${a}`.trim(),
    ...l,
    children: e
  }
);
function Q(e) {
  return e >= 80 ? "#EF4444" : e >= 60 ? "#F59E0B" : "#10B981";
}
const V = 8, Ne = ({
  label: e,
  value: t,
  extra: n,
  height: a = V,
  max: l = 100,
  className: d = ""
}) => {
  const o = Math.min(l, Math.max(0, t)), c = l > 0 ? o / l * 100 : 0, p = Q(c);
  return /* @__PURE__ */ r("div", { className: `flex flex-col gap-1 ${d}`.trim(), role: "progressbar", "aria-valuenow": o, "aria-valuemin": 0, "aria-valuemax": l, "aria-label": e, children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ s("span", { className: "text-nekkus-sm text-nekkus-text-muted", children: e }),
      /* @__PURE__ */ r("span", { className: "text-nekkus-sm font-medium tabular-nums text-nekkus-text", children: [
        t.toFixed(1),
        "%",
        n ? /* @__PURE__ */ s("span", { className: "ml-1.5 text-nekkus-text-dim font-normal", children: n }) : null
      ] })
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: "w-full rounded-full overflow-hidden bg-nekkus-layer-2",
        style: { height: `${a}px` },
        children: /* @__PURE__ */ s(
          "div",
          {
            className: "h-full rounded-full transition-all duration-200 ease-out",
            style: { width: `${c}%`, backgroundColor: p }
          }
        )
      }
    )
  ] });
}, ve = {
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
  re as AddModulePlaceholder,
  ke as AppShell,
  se as Button,
  H as Card,
  pe as Chart,
  be as DataText,
  ie as Divider,
  le as EmptyState,
  de as HeaderStat,
  xe as Input,
  he as LineChart,
  oe as MetricHero,
  ne as ModuleCard,
  ae as ModuleCardGrid,
  ue as PageLayout,
  ge as Pill,
  Ne as ProgressBar,
  me as Section,
  fe as Select,
  ce as StatusDot,
  Q as getProgressBarColor,
  ve as theme
};
//# sourceMappingURL=index.js.map
