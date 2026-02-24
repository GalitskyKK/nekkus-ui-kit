import { default as React } from 'react';

/** Простой bar chart. Столбики по значениям, опционально подписи и шкала 0–max. */
export interface ChartProps {
    data: number[];
    labels?: string[];
    height?: number;
    /** Модульный цвет (по умолчанию Net #3B82F6) */
    color?: string;
    /** Показывать подписи значений под столбиками (если labels не передан — выводятся числа из data) */
    showValueLabels?: boolean;
    /** Суффикс подписи (напр. "%") */
    valueSuffix?: string;
    /** Фиксированный максимум шкалы (напр. 100 для процентов) — от него считаются высоты столбиков */
    maxValue?: number;
}
export declare const Chart: React.FC<ChartProps>;
