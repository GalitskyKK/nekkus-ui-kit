import { default as React } from 'react';

export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className"> {
    className?: string;
    label?: string;
    options: SelectOption[];
}
export declare const Select: React.FC<SelectProps>;
