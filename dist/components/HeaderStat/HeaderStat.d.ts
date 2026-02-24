import { default as React } from 'react';

export interface HeaderStatProps {
    label: string;
    value: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Блок стата в хедере (Модули: 2, Ошибки: 0).
 */
export declare const HeaderStat: React.FC<HeaderStatProps>;
