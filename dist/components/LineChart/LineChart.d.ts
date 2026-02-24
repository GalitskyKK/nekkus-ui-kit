import { default as React } from 'react';

/** Линейный график с заливкой под линией, сеткой и подписями осей (стиль мониторинга). */
export interface LineChartProps {
    data: number[];
    height?: number;
    /** Цвет линии и заливки (заливка с opacity) */
    color?: string;
    /** Максимум шкалы Y (например 100 для %) */
    maxValue?: number;
    /** Суффикс для подписей (напр. "%") */
    valueSuffix?: string;
    /** Подпись оси Y (напр. "Используется %") */
    yLabel?: string;
    /** Подпись оси X (напр. "60 секунд") */
    xLabel?: string;
    /** Количество последних точек по времени (для подписи "0" = сейчас) */
    timeRangeLabel?: string;
}
export declare const LineChart: React.FC<LineChartProps>;
