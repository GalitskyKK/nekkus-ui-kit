import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Разделитель с градиентом к краям (nekkus-vis) */
}

export const Divider: React.FC<DividerProps> = ({ className = "", ...rest }) => (
  <hr className={`nekkus-divider ${className}`.trim()} {...rest} />
);
