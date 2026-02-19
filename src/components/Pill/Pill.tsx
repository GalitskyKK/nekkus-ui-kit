import React from "react";

export type PillVariant = "default" | "success" | "warning" | "error" | "info";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: PillVariant;
}

/** Гайд: 11px font, 2px 8px padding, 6px radius, bg color 0.15, text color */
const variantClasses: Record<PillVariant, string> = {
  default: "bg-nekkus-accent/15 text-nekkus-accent",
  success: "bg-nekkus-success/15 text-nekkus-success",
  warning: "bg-nekkus-warning/15 text-nekkus-warning",
  error: "bg-nekkus-error/15 text-nekkus-error",
  info: "bg-nekkus-info/15 text-nekkus-info",
};

const baseClasses =
  "inline-flex items-center px-2 py-0.5 text-nekkus-xs font-medium rounded-nekkus-sm font-sans";

export const Pill: React.FC<PillProps> = ({
  children,
  variant = "default",
  className = "",
  ...rest
}) => (
  <span
    className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
    {...rest}
  >
    {children}
  </span>
);
