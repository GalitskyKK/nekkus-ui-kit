import React from "react";

export interface MetricHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Главная метрика (крупный градиентный текст) */
  value: React.ReactNode;
  /** Подпись под метрикой (12px uppercase) */
  label?: string;
}

/** Hero-метрика: 48px mono, gradient text, label под ней (nekkus-vis) */
export const MetricHero: React.FC<MetricHeroProps> = ({
  value,
  label,
  className = "",
  ...rest
}) => (
  <div className={`${className}`.trim()} {...rest}>
    <div className="nekkus-metric-hero">{value}</div>
    {label != null && <div className="nekkus-metric-label">{label}</div>}
  </div>
);
