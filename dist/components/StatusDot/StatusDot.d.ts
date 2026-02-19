import { default as React } from 'react';

export type StatusDotStatus = "online" | "offline" | "busy" | "error";
export interface StatusDotProps {
    status: StatusDotStatus;
    label?: string;
    size?: number;
    /** Пульсация для online/active (гайд: 2s цикл) */
    pulse?: boolean;
}
export declare const StatusDot: React.FC<StatusDotProps>;
