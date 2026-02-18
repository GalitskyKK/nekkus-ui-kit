import React from "react";

/** Simple bar chart from array of numbers. For complex charts, apps can use recharts/visx and pass data from widget. */
export interface ChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  color?: string;
}

const defaultColor = "var(--nekkus-primary, #3574d4)";

export const Chart: React.FC<ChartProps> = ({
  data,
  labels,
  height = 120,
  color = defaultColor,
}) => {
  const max = Math.max(...data, 1);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        height,
      }}
    >
      {data.map((value, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "4px",
              height: `${(value / max) * 100}%`,
              backgroundColor: color,
              borderRadius: "4px 4px 0 0",
            }}
          />
          {labels?.[i] != null && (
            <span
              style={{
                fontSize: "11px",
                color: "var(--nekkus-text-muted, #9ca3af)",
              }}
            >
              {labels[i]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
