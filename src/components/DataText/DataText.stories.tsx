import type { Meta, StoryObj } from "@storybook/react";
import { DataText } from "./DataText";

const meta: Meta<typeof DataText> = {
  component: DataText,
  title: "DataText",
};
export default meta;

type Story = StoryObj<typeof DataText>;

export const Default: Story = {
  args: { children: "42 ms" },
};

export const AsCode: Story = {
  args: { as: "code", children: "const x = 1;" },
};

export const Metric: Story = {
  args: { children: "1.2 GB" },
};
