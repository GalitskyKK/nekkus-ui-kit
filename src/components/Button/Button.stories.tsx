import type { Meta, StoryObj } from "@storybook/react";
import { Play, Square } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Connect" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Open" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Remove" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Button variant="primary" icon={Play} iconPosition="left">
        Start
      </Button>
      <Button variant="secondary" icon={Square} iconPosition="right">
        Stop
      </Button>
    </div>
  ),
};
