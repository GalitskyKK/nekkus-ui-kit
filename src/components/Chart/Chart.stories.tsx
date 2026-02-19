import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta: Meta<typeof Chart> = {
  component: Chart,
  title: "Chart",
};
export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: { data: [10, 40, 30, 70, 50], height: 120 },
};

export const WithLabels: Story = {
  args: {
    data: [12, 19, 8, 25, 18],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    height: 140,
  },
};
