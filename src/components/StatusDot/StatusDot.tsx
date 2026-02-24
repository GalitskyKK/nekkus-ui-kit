import React from "react";

export type StatusDotStatus = "online" | "offline" | "busy" | "error";

export interface StatusDotProps {
  status: StatusDotStatus;
  label?: string;
  size?: number;
  /** Пульсация для online/active (гайд: 2s цикл) */
  pulse?: boolean;
}

/** Цвет и glow задаются в globals.css по data-status / data-pulse */
export const StatusDot: React.FC<StatusDotProps> = ({
  status,
  label,
  size = 8,
  pulse = true,
}) => {
  const isPulse = pulse && (status === "online" || status === "busy");
  return (
    <span className="inline-flex items-center gap-2">
      <span
        data-nekkus-status-dot
        data-status={status}
        data-pulse={isPulse ? "" : undefined}
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
