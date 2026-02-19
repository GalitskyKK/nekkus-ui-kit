import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string;
  label?: string;
}

/** Гайд: фон Layer 0, граница #1E1E2E, radius 10px, padding 10px 14px */
const inputClasses =
  "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans placeholder:text-nekkus-text-dim box-border transition-[border-color,box-shadow] duration-150";
const labelClasses = "flex flex-col gap-1 w-full";
const labelTextClasses = "text-nekkus-sm font-medium text-nekkus-text-muted";

export const Input: React.FC<InputProps> = ({
  label,
  className = "",
  id: idProp,
  ...rest
}) => {
  const id = idProp ?? (label ? `input-${label.replace(/\s/g, "-")}` : undefined);
  return (
    <label className={labelClasses} htmlFor={id}>
      {label ? <span className={labelTextClasses}>{label}</span> : null}
      <input
        id={id}
        data-nekkus-input
        className={`${inputClasses} ${className}`.trim()}
        {...rest}
      />
    </label>
  );
};
