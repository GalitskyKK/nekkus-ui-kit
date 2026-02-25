import React from "react";

/** Цвет по диапазону процента: 0–60 зелёный, 60–80 жёлтый, 80–100 красный. */
export function getProgressBarColor(percent: number): string {
  if (percent >= 80) return "#EF4444";
  if (percent >= 60) return "#F59E0B";
  return "#10B981";
}

export interface ProgressBarProps {
  /** Подпись слева (напр. "CPU", "RAM"). */
  label: string;
  /** Процент 0–100. */
  value: number;
  /** Доп. инфо мелким текстом справа (напр. "3.2 GHz", "42°C"). */
  extra?: string;
  /** Высота полосы в px. */
  height?: number;
  /** Максимум шкалы (по умолчанию 100). */
  max?: number;
  className?: string;
}

const defaultHeight = 8;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  extra,
  height = defaultHeight,
  max = 100,
  className = "",
}) => {
  const clamped = Math.min(max, Math.max(0, value));
  const pct = max > 0 ? (clamped / max) * 100 : 0;
  const color = getProgressBarColor(pct);

  return (
    <div className={`flex flex-col gap-1 ${className}`.trim()} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-nekkus-sm text-nekkus-text-muted">{label}</span>
        <span className="text-nekkus-sm font-medium tabular-nums text-nekkus-text">
          {value.toFixed(1)}%
          {extra ? <span className="ml-1.5 text-nekkus-text-dim font-normal">{extra}</span> : null}
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden bg-nekkus-layer-2"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};
