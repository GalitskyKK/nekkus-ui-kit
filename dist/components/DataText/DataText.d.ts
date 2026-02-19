import { default as React } from 'react';

/** Гайд: JetBrains Mono для данных, метрик, кода. Визуально отделяет «интерфейс» от «данных». */
export interface DataTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    as?: "span" | "code" | "pre";
    /** Большие метрики: 32–48px mono bold */
    size?: "sm" | "base" | "metric";
}
export declare const DataText: React.FC<DataTextProps>;
