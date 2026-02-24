import type { Meta, StoryObj } from "@storybook/react";
import { AddModulePlaceholder } from "./AddModulePlaceholder";

const meta: Meta<typeof AddModulePlaceholder> = {
  component: AddModulePlaceholder,
  title: "Hub / AddModulePlaceholder",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

type Story = StoryObj<typeof AddModulePlaceholder>;

export const Default: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 400 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <AddModulePlaceholder onClick={() => {}} />
      </div>
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 600 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <AddModulePlaceholder empty onClick={() => {}}>
          Добавить модуль (папка с manifest.json)
        </AddModulePlaceholder>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 400 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <AddModulePlaceholder disabled />
      </div>
    </div>
  ),
};
