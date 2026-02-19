import { default as React } from 'react';

export type PillVariant = "default" | "success" | "warning" | "error" | "info";
export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: PillVariant;
}
export declare const Pill: React.FC<PillProps>;
