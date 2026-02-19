import { default as React } from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "large";
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
}
export declare const Button: React.FC<ButtonProps>;
