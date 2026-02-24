import { default as React } from 'react';
import { CardModule } from '../Card';

export type ModuleCardSize = "small" | "medium" | "large";
export interface ModuleCardProps {
    /** Размер карточки в сетке: small=1 колонка, medium=2, large=3 (в 6-колоночной сетке). */
    size: ModuleCardSize;
    title: string;
    description?: string;
    /** Модуль для переливающейся обводки (net/eye/gate/port). Если задан — показывается обводка, не полоска сверху. */
    module?: CardModule;
    /** Модуль запущен — обводка ярче + свечение. */
    running?: boolean;
    /** Цветная полоска сверху (только если module не задан). */
    accentTop?: boolean | CardModule;
    /** Контент виджета (тело карточки). */
    children: React.ReactNode;
    /** Кнопки размера S/M/L. */
    onSizeChange?: (size: ModuleCardSize) => void;
    /** Дополнительные действия в шапке (настройки, Pill и т.д.). */
    headerActions?: React.ReactNode;
    /** Панель настроек под шапкой (чекбоксы, пресеты). */
    configPanel?: React.ReactNode;
    /** Футер: кнопки Запуск / Открыть и т.д. */
    footer?: React.ReactNode;
    /** Область перетаскивания (drag handle): title + description. */
    onDragStart?: React.DragEventHandler;
    onDragEnd?: React.DragEventHandler;
    onDragOver?: React.DragEventHandler;
    onDrop?: React.DragEventHandler;
    dragging?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Карточка модуля в Hub: шапка (title, description, размер S/M/L, actions), опциональная панель настроек, тело (виджет), футер.
 */
export declare const ModuleCard: React.FC<ModuleCardProps>;
