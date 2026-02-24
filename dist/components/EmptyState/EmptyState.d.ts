import { default as React } from 'react';

export interface EmptyStateProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Пустое состояние (например «Нет модулей. Нажмите + или обновить»).
 */
export declare const EmptyState: React.FC<EmptyStateProps>;
