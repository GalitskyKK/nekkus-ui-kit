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

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-nekkus-accent text-white border-0 hover:bg-nekkus-accent-hover active:opacity-90",
  secondary:
    "bg-transparent text-nekkus-text border border-nekkus-border hover:bg-nekkus-layer-2 hover:border-nekkus-border-hover",
  ghost:
    "bg-transparent text-nekkus-text-muted border-0 hover:bg-nekkus-layer-2 hover:text-nekkus-text",
  danger:
    "bg-nekkus-error text-white border-0 hover:bg-red-600 active:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-nekkus-sm rounded-[6px]",
  md: "px-5 py-2.5 text-nekkus-base rounded-nekkus-md",
  large: "px-6 py-3 text-base rounded-nekkus-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans font-medium cursor-pointer transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

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
    className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim()}
    {...rest}
  >
    {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" aria-hidden strokeWidth={1.5} />}
    {children}
    {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" aria-hidden strokeWidth={1.5} />}
  </button>
);
