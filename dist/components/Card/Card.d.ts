import { default as React } from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    /** Тонкая цветная полоска сверху (модуль). Задаёт data-accent-top. */
    accentTop?: boolean;
}
export declare const Card: React.FC<CardProps>;
