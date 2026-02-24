import React from "react";

export interface HeaderStatProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Блок стата в хедере (Модули: 2, Ошибки: 0).
 */
export const HeaderStat: React.FC<HeaderStatProps> = ({
  label,
  value,
  className = "",
  style,
}) => (
  <div className={`nekkus-header-stat ${className}`.trim()} style={style}>
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);
