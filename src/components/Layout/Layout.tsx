import React from "react";

export interface PageLayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, style }) => (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "var(--nekkus-bg, #0f1117)",
      color: "var(--nekkus-text, #e6e8ec)",
      padding: "var(--nekkus-spacing-md, 16px)",
      boxSizing: "border-box",
      ...style,
    }}
  >
    {children}
  </div>
);

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  style,
  ...rest
}) => (
  <section
    style={{
      marginBottom: "24px",
      ...style,
    }}
    {...rest}
  >
    {title && (
      <h2
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "12px",
          color: "var(--nekkus-text, #e6e8ec)",
        }}
      >
        {title}
      </h2>
    )}
    {children}
  </section>
);
