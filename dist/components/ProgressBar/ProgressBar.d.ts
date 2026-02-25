import { default as React } from 'react';

/** Цвет по диапазону процента: 0–60 зелёный, 60–80 жёлтый, 80–100 красный. */
export declare function getProgressBarColor(percent: number): string;
export interface ProgressBarProps {
    /** Подпись слева (напр. "CPU", "RAM"). */
    label: string;
    /** Процент 0–100. */
    value: number;
    /** Доп. инфо мелким текстом справа (напр. "3.2 GHz", "42°C"). */
    extra?: string;
    /** Высота полосы в px. */
    height?: number;
    /** Максимум шкалы (по умолчанию 100). */
    max?: number;
    className?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
