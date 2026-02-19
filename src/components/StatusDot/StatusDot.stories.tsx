import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./StatusDot";

const meta: Meta<typeof StatusDot> = {
  component: StatusDot,
  title: "StatusDot",
};
export default meta;

type Story = StoryObj<typeof StatusDot>;

export const Online: Story = {
  args: { status: "online", label: "Online" },
};

export const Offline: Story = {
  args: { status: "offline", label: "Offline" },
};

export const Busy: Story = {
  args: { status: "busy", label: "Busy" },
};

export const Error: Story = {
  args: { status: "error", label: "Error" },
};

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <StatusDot status="online" label="Online" />
      <StatusDot status="offline" label="Offline" />
      <StatusDot status="busy" label="Busy" />
      <StatusDot status="error" label="Error" />
    </div>
  ),
};
