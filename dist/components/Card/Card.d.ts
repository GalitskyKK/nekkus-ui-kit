import { default as React } from 'react';

export type CardVariant = "default" | "elevated" | "hero";
export type CardModule = "net" | "eye" | "gate" | "port";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title?: string;
    /** Тонкая цветная полоска сверху. Передай модуль для цвета (net/eye/gate/port). */
    accentTop?: boolean | CardModule;
    /** Вариант: elevated (тень + inner highlight), hero (gradient border). */
    variant?: CardVariant;
    /** Модуль для hero (gradient border) или module-glow. */
    heroModule?: CardModule;
    /** Цветное свечение по границе карточки (для карточки модуля). */
    moduleGlow?: CardModule;
}
export declare const Card: React.FC<CardProps>;
