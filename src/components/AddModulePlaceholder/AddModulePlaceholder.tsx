import React from "react";

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
export const AddModulePlaceholder: React.FC<AddModulePlaceholderProps> = ({
  onClick,
  disabled = false,
  empty = false,
  className = "",
  children,
}) => (
  <button
    type="button"
    className={`nekkus-add-placeholder ${empty ? "nekkus-add-placeholder--empty" : ""} ${className}`.trim()}
    onClick={onClick}
    disabled={disabled}
    aria-label="Добавить модуль"
  >
    <span className="nekkus-add-placeholder__icon" aria-hidden>
      +
    </span>
    {children ?? "Добавить модуль"}
  </button>
);
