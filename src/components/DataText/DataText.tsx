import React from "react";

/** Гайд: JetBrains Mono для данных, метрик, кода. Визуально отделяет «интерфейс» от «данных». */
export interface DataTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  as?: "span" | "code" | "pre";
  /** Большие метрики: 32–48px mono bold */
  size?: "sm" | "base" | "metric";
}

const sizeClasses = {
  sm: "text-nekkus-sm font-medium",
  base: "text-nekkus-base font-medium",
  metric: "text-nekkus-metric font-bold",
};

const dataClasses = "font-mono text-nekkus-text tracking-tight";

export const DataText: React.FC<DataTextProps> = ({
  children,
  as: El = "span",
  size = "base",
  className = "",
  ...rest
}) => (
  <El
    className={`${dataClasses} ${sizeClasses[size]} ${className}`.trim()}
    {...rest}
  >
    {children}
  </El>
);
