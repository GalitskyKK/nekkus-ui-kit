import React from "react";
import { Card } from "../Card";
import type { CardModule } from "../Card";

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

const SIZE_LABELS: Record<ModuleCardSize, string> = {
  small: "Маленький",
  medium: "Средний",
  large: "Большой",
};

/**
 * Карточка модуля в Hub: шапка (title, description, размер S/M/L, actions), опциональная панель настроек, тело (виджет), футер.
 */
export const ModuleCard: React.FC<ModuleCardProps> = ({
  size,
  title,
  description,
  module: moduleType,
  running,
  accentTop,
  children,
  onSizeChange,
  headerActions,
  configPanel,
  footer,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  dragging,
  className = "",
  style,
}) => {
  const useShimmerBorder = Boolean(moduleType);
  const dragHandle = (
    <div
      className="nekkus-module-card__drag"
      draggable={Boolean(onDragStart)}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      title={onDragStart ? "Перетащите для смены порядка" : undefined}
    >
      <h2 className="nekkus-module-card__title">{title}</h2>
      {description ? <p className="nekkus-module-card__desc">{description}</p> : null}
    </div>
  );

  return (
    <Card
      accentTop={useShimmerBorder ? undefined : accentTop}
      className={`nekkus-module-card nekkus-module-card--${size} nekkus-glass-card ${useShimmerBorder ? "nekkus-module-card-border" : ""} ${dragging ? "nekkus-module-card--dragging" : ""} ${className}`.trim()}
      data-module={moduleType}
      data-running={useShimmerBorder && running ? "true" : undefined}
      style={style}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <header className="nekkus-module-card__header">
        {dragHandle}
        <div className="nekkus-module-card__header-actions">
          {onSizeChange ? (
            <span className="nekkus-module-card__size-btns" onClick={(e) => e.stopPropagation()}>
              {(["small", "medium", "large"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`nekkus-module-card__size-btn ${size === s ? "nekkus-module-card__size-btn--active" : ""}`}
                  onClick={() => onSizeChange(s)}
                  title={SIZE_LABELS[s]}
                  aria-pressed={size === s}
                >
                  {s === "small" ? "S" : s === "medium" ? "M" : "L"}
                </button>
              ))}
            </span>
          ) : null}
          {headerActions}
        </div>
      </header>
      {configPanel ? (
        <div className="nekkus-module-card__config" role="dialog" aria-label="Настройки отображения">
          {configPanel}
        </div>
      ) : null}
      <div className="nekkus-module-card__body">{children}</div>
      {footer ? <div className="nekkus-module-card__footer">{footer}</div> : null}
    </Card>
  );
};
