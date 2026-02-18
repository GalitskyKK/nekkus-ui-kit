import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<
  ButtonVariant,
  React.CSSProperties
> = {
  primary: {
    backgroundColor: "var(--nekkus-primary, #3574d4)",
    color: "#fff",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--nekkus-text, #e6e8ec)",
    border: "1px solid var(--nekkus-border, #2d323d)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--nekkus-text, #e6e8ec)",
    border: "none",
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
  },
};

const baseStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: "var(--nekkus-radius-md, 8px)",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  fontFamily: "inherit",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  style,
  ...rest
}) => (
  <button
    type="button"
    style={{ ...baseStyle, ...variantStyles[variant], ...style }}
    {...rest}
  >
    {children}
  </button>
);
