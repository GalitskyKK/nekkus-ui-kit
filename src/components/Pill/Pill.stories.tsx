import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta: Meta<typeof Pill> = {
  component: Pill,
  title: "Pill",
};
export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: { children: "widget" },
};

export const Success: Story = {
  args: { variant: "success", children: "Active" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Pending" },
};

export const Error: Story = {
  args: { variant: "error", children: "Failed" },
};

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Pill variant="default">default</Pill>
      <Pill variant="success">success</Pill>
      <Pill variant="warning">warning</Pill>
      <Pill variant="error">error</Pill>
    </div>
  ),
};
