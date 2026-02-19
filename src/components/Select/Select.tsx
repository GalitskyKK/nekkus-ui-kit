import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  className?: string;
  label?: string;
  options: SelectOption[];
}

const selectClasses =
  "w-full bg-nekkus-layer-0 border border-nekkus-border rounded-nekkus-lg px-3.5 py-2.5 text-nekkus-base text-nekkus-text font-sans cursor-pointer box-border transition-[border-color,box-shadow] duration-150";
const labelClasses = "flex flex-col gap-1 w-full";
const labelTextClasses = "text-nekkus-sm font-medium text-nekkus-text-muted";

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  className = "",
  id: idProp,
  ...rest
}) => {
  const id = idProp ?? (label ? `select-${label.replace(/\s/g, "-")}` : undefined);
  return (
    <label className={labelClasses} htmlFor={id}>
      {label ? <span className={labelTextClasses}>{label}</span> : null}
      <select
        id={id}
        data-nekkus-select
        className={`${selectClasses} ${className}`.trim()}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};
