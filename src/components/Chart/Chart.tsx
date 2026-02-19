import React from "react";

/** Простой bar chart. Гайд: бары [module-color] opacity 0.8, hover 1.0, radius 4px сверху, подписи JetBrains Mono 11px. */
export interface ChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  /** Модульный цвет (по умолчанию Net #3B82F6) */
  color?: string;
}

const barClasses =
  "w-full min-h-[6px] rounded-t-[4px] bg-nekkus-accent/80 hover:bg-nekkus-accent transition-[height] duration-300";
const labelClasses = "text-nekkus-xs font-medium text-nekkus-text-dim font-mono";

export const Chart: React.FC<ChartProps> = ({
  data,
  labels,
  height = 120,
  color,
}) => {
  const max = Math.max(...data, 1);
  return (
    <div
      className="flex items-end gap-1 font-mono"
      style={{ height }}
    >
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center gap-1.5"
        >
          <div
            className={barClasses}
            style={{
              height: `${(value / max) * 100}%`,
              ...(color != null ? { backgroundColor: color } : {}),
            }}
          />
          {labels?.[i] != null && (
            <span className={labelClasses}>{labels[i]}</span>
          )}
        </div>
      ))}
    </div>
  );
};
