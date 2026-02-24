import { default as React } from 'react';

export interface AddModulePlaceholderProps {
    onClick?: () => void;
    disabled?: boolean;
    /** Когда true — блок тянется на всю ширину сетки (пустое состояние). */
    empty?: boolean;
    className?: string;
    children?: React.ReactNode;
}
/**
 * Блок «+ Добавить модуль» в сетке Hub. При empty=true занимает всю ширину.
 */
export declare const AddModulePlaceholder: React.FC<AddModulePlaceholderProps>;
