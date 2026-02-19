import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
};
export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

export const Default: Story = {
  args: { options },
};

export const WithLabel: Story = {
  args: { label: "Profile", options, defaultValue: "a" },
};
