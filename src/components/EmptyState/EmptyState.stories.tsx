import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  component: EmptyState,
  title: "Hub / EmptyState",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 600 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <EmptyState>
          Нет модулей. Нажмите на блок «+» ниже или кнопку обновления выше.
        </EmptyState>
      </div>
    </div>
  ),
};
