import { default as React } from 'react';

export interface ModuleCardGridProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Сетка для карточек модулей (6 колонок на десктопе, 2 на планшете, 1 на мобильном).
 * Внутри размещаются ModuleCard и AddModulePlaceholder.
 */
export declare const ModuleCardGrid: React.FC<ModuleCardGridProps>;
