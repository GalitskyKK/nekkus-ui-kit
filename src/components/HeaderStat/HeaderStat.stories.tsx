import type { Meta, StoryObj } from "@storybook/react";
import { HeaderStat } from "./HeaderStat";

const meta: Meta<typeof HeaderStat> = {
  component: HeaderStat,
  title: "Hub / HeaderStat",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

type Story = StoryObj<typeof HeaderStat>;

export const Default: Story = {
  args: { label: "Модули", value: "2" },
};

export const Multiple: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <HeaderStat label="Модули" value="3" />
      <HeaderStat label="Ошибки" value="0" />
    </div>
  ),
};
