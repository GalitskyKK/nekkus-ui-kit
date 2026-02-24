import React from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "large";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

/* Стили кнопок задаются в globals.css по data-variant / data-size (градиент, glow, hover lift) */
const baseClasses = "inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon: Icon,
  iconPosition = "left",
  className = "",
  ...rest
}) => (
  <button
    type="button"
    data-nekkus-button
    data-variant={variant}
    data-size={size}
    className={`${baseClasses} ${className}`.trim()}
    {...rest}
  >
    {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" aria-hidden strokeWidth={1.5} />}
    {children}
    {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" aria-hidden strokeWidth={1.5} />}
  </button>
);
