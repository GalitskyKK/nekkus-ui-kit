import { default as React } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
    className?: string;
    label?: string;
}
export declare const Input: React.FC<InputProps>;
