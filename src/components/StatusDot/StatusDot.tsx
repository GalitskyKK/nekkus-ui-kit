import React from "react";

export type StatusDotStatus = "online" | "offline" | "busy" | "error";

export interface StatusDotProps {
  status: StatusDotStatus;
  label?: string;
  size?: number;
  /** Пульсация для online/active (гайд: 2s цикл) */
  pulse?: boolean;
}

const dotColorClasses: Record<StatusDotStatus, string> = {
  online: "bg-nekkus-success",
  offline: "bg-nekkus-muted",
  busy: "bg-nekkus-warning",
  error: "bg-nekkus-error",
};

export const StatusDot: React.FC<StatusDotProps> = ({
  status,
  label,
  size = 8,
  pulse = true,
}) => {
  const isPulse = pulse && status === "online";
  return (
    <span className="inline-flex items-center gap-2">
      <span
        data-nekkus-status-dot
        data-pulse={isPulse ? "" : undefined}
        className={`shrink-0 rounded-full ${dotColorClasses[status]}`}
        style={{ width: size, height: size }}
      />
      {label != null && (
        <span className="text-nekkus-sm font-medium text-nekkus-text-muted font-mono">
          {label}
        </span>
      )}
    </span>
  );
};
