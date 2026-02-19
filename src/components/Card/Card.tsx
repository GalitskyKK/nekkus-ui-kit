import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  /** Тонкая цветная полоска сверху (модуль). Задаёт data-accent-top. */
  accentTop?: boolean;
}

/** Карточка: Layer 1, 1px граница, 14px радиус, 20px padding. Гайд: «глубина слоями, не тенями». */
const titleClasses =
  "text-nekkus-card font-semibold text-nekkus-text mb-3";

export const Card: React.FC<CardProps> = ({
  children,
  title,
  accentTop = false,
  className = "",
  ...rest
}) => (
  <div
    data-nekkus-card
    data-accent-top={accentTop ? "" : undefined}
    className={className.trim()}
    {...rest}
  >
    {title ? <div className={titleClasses}>{title}</div> : null}
    {children}
  </div>
);
