import React from "react";

export type CardVariant = "default" | "elevated" | "hero";
export type CardModule = "net" | "eye" | "gate" | "port";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  /** Тонкая цветная полоска сверху. Передай модуль для цвета (net/eye/gate/port). */
  accentTop?: boolean | CardModule;
  /** Вариант: elevated (тень + inner highlight), hero (gradient border). */
  variant?: CardVariant;
  /** Модуль для hero (gradient border) или module-glow. */
  heroModule?: CardModule;
  /** Цветное свечение по границе карточки (для карточки модуля). */
  moduleGlow?: CardModule;
}

const titleClasses =
  "text-nekkus-card font-semibold text-nekkus-text mb-3";

function accentTopValue(accentTop: boolean | CardModule | undefined): string | undefined {
  if (accentTop === true) return "net";
  if (accentTop === false || accentTop == null) return undefined;
  return accentTop;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  accentTop = false,
  variant = "default",
  heroModule,
  moduleGlow,
  className = "",
  ...rest
}) => {
  const accent = accentTopValue(accentTop);
  return (
    <div
      data-nekkus-card
      data-accent-top={accent ?? undefined}
      data-elevated={variant === "elevated" ? "" : undefined}
      data-hero={variant === "hero" ? "" : undefined}
      data-hero-module={variant === "hero" && heroModule ? heroModule : undefined}
      data-module-glow={moduleGlow ?? undefined}
      className={className.trim()}
      {...rest}
    >
      {title ? <div className={titleClasses}>{title}</div> : null}
      {children}
    </div>
  );
};
