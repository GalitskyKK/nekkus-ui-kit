import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./LineChart";

const meta: Meta<typeof LineChart> = {
  component: LineChart,
  title: "LineChart",
};
export default meta;

type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    data: [20, 45, 35, 70, 55, 40, 80, 65],
    height: 160,
    maxValue: 100,
    valueSuffix: "%",
    yLabel: "Используется %",
    xLabel: "60 секунд",
  },
};

export const EyeStyle: Story = {
  args: {
    data: [12, 25, 18, 42, 38, 55, 48, 62, 51, 45],
    height: 160,
    color: "#10B981",
    maxValue: 100,
    valueSuffix: "%",
    yLabel: "Используется %",
    xLabel: "60 секунд",
  },
};

export const NetworkRate: Story = {
  args: {
    data: [0.5, 1.2, 2.1, 1.8, 3.0, 2.4, 1.5],
    height: 140,
    color: "#3b82f6",
    maxValue: 5,
    valueSuffix: " МБ/с",
    yLabel: "Отправка",
    xLabel: "60 с",
  },
};
