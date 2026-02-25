import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "ProgressBar",
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { label: "CPU", value: 50 },
};

export const Green: Story = {
  args: { label: "RAM", value: 45 },
};

export const Yellow: Story = {
  args: { label: "Disk", value: 72 },
};

export const Red: Story = {
  args: { label: "GPU", value: 94 },
};

export const WithExtra: Story = {
  args: { label: "CPU", value: 78, extra: "3.2 GHz" },
};

export const WithTemp: Story = {
  args: { label: "GPU", value: 18, extra: "42°C" },
};

export const HubEyeBlock: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <ProgressBar label="CPU" value={78} extra="72°C" height={6} />
      <ProgressBar label="RAM" value={52} extra="8.3 / 16 ГБ" height={6} />
      <ProgressBar label="GPU" value={18} extra="42°C" height={6} />
      <ProgressBar label="Диск" value={89} extra="234 / 256 ГБ" height={6} />
    </div>
  ),
};
