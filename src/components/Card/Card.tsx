import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

const cardStyle: React.CSSProperties = {
  backgroundColor: "var(--nekkus-surface, #1e2129)",
  border: "1px solid var(--nekkus-border, #2d323d)",
  borderRadius: "var(--nekkus-radius-md, 8px)",
  padding: "var(--nekkus-spacing-md, 16px)",
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  style,
  ...rest
}) => (
  <div style={{ ...cardStyle, ...style }} {...rest}>
    {title && (
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "8px",
          color: "var(--nekkus-text, #e6e8ec)",
        }}
      >
        {title}
      </div>
    )}
    {children}
  </div>
);
