import React, { useId } from "react";

/** Линейный график с заливкой под линией, сеткой и подписями осей (стиль мониторинга). */
export interface LineChartProps {
  data: number[];
  height?: number;
  /** Цвет линии и заливки (заливка с opacity) */
  color?: string;
  /** Максимум шкалы Y (например 100 для %) */
  maxValue?: number;
  /** Суффикс для подписей (напр. "%") */
  valueSuffix?: string;
  /** Подпись оси Y (напр. "Используется %") */
  yLabel?: string;
  /** Подпись оси X (напр. "60 секунд") */
  xLabel?: string;
  /** Количество последних точек по времени (для подписи "0" = сейчас) */
  timeRangeLabel?: string;
}

const GRID_COLOR = "rgba(148, 163, 184, 0.2)";
const PADDING = { top: 8, right: 8, bottom: 24, left: 48 };

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 160,
  color = "#3b82f6",
  maxValue = 100,
  valueSuffix = "%",
  yLabel,
  xLabel,
  timeRangeLabel,
}) => {
  const gradientId = useId().replace(/:/g, "");
  const safeData = data.length > 0 ? data : [0];
  const max = maxValue ?? Math.max(...safeData, 1);
  const width = 400;
  const innerWidth = width - PADDING.left - PADDING.right;
  const innerHeight = height - PADDING.top - PADDING.bottom;
  const n = safeData.length;
  const stepX = n > 1 ? innerWidth / (n - 1) : 0;

  const toX = (i: number) => PADDING.left + i * stepX;
  const toY = (v: number) => {
    const clamped = Math.min(max, Math.max(0, v));
    return PADDING.top + innerHeight - (clamped / max) * innerHeight;
  };

  const points = safeData.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
  const areaPath =
    n > 0
      ? `M ${PADDING.left},${PADDING.top + innerHeight} L ${points} L ${toX(n - 1)},${PADDING.top + innerHeight} Z`
      : "";
  const linePath = n > 0 ? `M ${points.split(" ").join(" L ")}` : "";

  const gridLines = 5;
  const gridY = Array.from({ length: gridLines + 1 }, (_, i) => {
    const y = PADDING.top + (innerHeight * i) / gridLines;
    const val = max - (max * i) / gridLines;
    return { y, val };
  });

  return (
    <div className="line-chart-wrap flex flex-col gap-1">
      <div className="flex justify-between items-baseline text-[10px] text-nekkus-text-dim font-mono">
        {yLabel && <span>{yLabel}</span>}
        <span>{max}{valueSuffix}</span>
      </div>
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="min-h-[120px]"
        style={{ maxHeight: height }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        {/* Grid */}
        {gridY.map(({ y, val }, i) => (
          <line
            key={i}
            x1={PADDING.left}
            y1={y}
            x2={width - PADDING.right}
            y2={y}
            stroke={GRID_COLOR}
            strokeWidth={1}
          />
        ))}
        {n > 1 &&
          Array.from({ length: 5 }, (_, i) => {
            const x = PADDING.left + (innerWidth * i) / 4;
            return (
              <line
                key={i}
                x1={x}
                y1={PADDING.top}
                x2={x}
                y2={height - PADDING.bottom}
                stroke={GRID_COLOR}
                strokeWidth={1}
              />
            );
          })}
        {/* Area */}
        <path d={areaPath} fill={`url(#${gradientId})`} />
        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex justify-between text-[10px] text-nekkus-text-dim font-mono">
        {xLabel && <span>{xLabel}</span>}
        {timeRangeLabel && <span>0</span>}
      </div>
    </div>
  );
};
