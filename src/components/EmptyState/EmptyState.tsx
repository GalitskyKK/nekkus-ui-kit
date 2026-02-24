import React from "react";

export interface EmptyStateProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Пустое состояние (например «Нет модулей. Нажмите + или обновить»).
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  children,
  className = "",
  style,
}) => (
  <p className={`nekkus-empty-state ${className}`.trim()} style={style}>
    {children}
  </p>
);
