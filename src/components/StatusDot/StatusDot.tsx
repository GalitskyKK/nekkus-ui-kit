import React from "react";

export type StatusDotStatus = "online" | "offline" | "busy" | "error";

export interface StatusDotProps {
  status: StatusDotStatus;
  label?: string;
  size?: number;
}

const statusColors: Record<StatusDotStatus, string> = {
  online: "#22c55e",
  offline: "#6b7280",
  busy: "#eab308",
  error: "#ef4444",
};

export const StatusDot: React.FC<StatusDotProps> = ({
  status,
  label,
  size = 8,
}) => {
  const color = statusColors[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: color,
          flexShrink: 0,
        }}
      />
      {label != null && (
        <span
          style={{
            fontSize: "13px",
            color: "var(--nekkus-text-muted, #9ca3af)",
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
};
