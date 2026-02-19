import { default as React } from 'react';

/** Простой bar chart. Гайд: бары [module-color] opacity 0.8, hover 1.0, radius 4px сверху, подписи JetBrains Mono 11px. */
export interface ChartProps {
    data: number[];
    labels?: string[];
    height?: number;
    /** Модульный цвет (по умолчанию Net #3B82F6) */
    color?: string;
}
export declare const Chart: React.FC<ChartProps>;
