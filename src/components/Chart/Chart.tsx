import React from "react";

/** Простой bar chart. Столбики по значениям, опционально подписи и шкала 0–max. */
export interface ChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  /** Модульный цвет (по умолчанию Net #3B82F6) */
  color?: string;
  /** Показывать подписи значений под столбиками (если labels не передан — выводятся числа из data) */
  showValueLabels?: boolean;
  /** Суффикс подписи (напр. "%") */
  valueSuffix?: string;
  /** Фиксированный максимум шкалы (напр. 100 для процентов) — от него считаются высоты столбиков */
  maxValue?: number;
}

const barClasses =
  "w-full min-w-[4px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300";
const labelClasses = "text-[10px] font-medium text-nekkus-text-dim font-mono truncate max-w-full";

export const Chart: React.FC<ChartProps> = ({
  data,
  labels,
  height = 120,
  color,
  showValueLabels = false,
  valueSuffix = "",
  maxValue,
}) => {
  const safeData = data.length > 0 ? data : [0];
  const dataMax = Math.max(...safeData, 1);
  const max = maxValue ?? dataMax;
  return (
    <div className="chart-wrap flex gap-0.5 font-mono">
      <div className="chart-y-axis flex flex-col justify-between text-[10px] text-nekkus-text-dim font-mono pr-2 shrink-0" style={{ height }}>
        <span>{max <= 1 ? "1" : Math.round(max)}{valueSuffix}</span>
        <span>0{valueSuffix}</span>
      </div>
      <div
        className="flex items-end gap-0.5 flex-1"
        style={{ height }}
      >
        {safeData.map((value, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-end gap-1 min-w-0"
          >
            <div
              className={barClasses}
              style={{
                height: value === 0 ? 0 : `${Math.max((value / max) * 100, 2)}%`,
                ...(color != null ? { backgroundColor: color } : {}),
              }}
            />
            {(labels?.[i] != null || showValueLabels) && (
              <span className={labelClasses} title={String(value)}>
                {labels?.[i] ?? (showValueLabels ? `${Number(value).toFixed(value % 1 === 0 ? 0 : 1)}${valueSuffix}` : null)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
