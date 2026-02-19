import React from "react";

export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Гайд: Layer 0 фон, отступы 24–32px от краёв */
const pageLayoutClasses =
  "min-h-screen bg-nekkus-layer-0 text-nekkus-text p-6 md:p-8 box-border font-sans";

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
  style,
}) => (
  <div
    className={`${pageLayoutClasses} ${className}`.trim()}
    style={style}
    data-nekkus-root
  >
    {children}
  </div>
);

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

/** Заголовок секции: 16px semibold */
const sectionTitleClasses =
  "text-nekkus-card font-semibold text-nekkus-text mb-3";

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  className = "",
  ...rest
}) => (
  <section className={`mb-8 ${className}`.trim()} {...rest}>
    {title ? <h2 className={sectionTitleClasses}>{title}</h2> : null}
    {children}
  </section>
);
