import type { Meta, StoryObj } from "@storybook/react";
import { PageLayout, Section } from "./Layout";

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  title: "Layout",
};
export default meta;

type Story = StoryObj<typeof PageLayout>;

export const Page: Story = {
  render: () => (
    <PageLayout>
      <Section title="First section">
        <p style={{ margin: 0 }}>Content of first section.</p>
      </Section>
      <Section title="Second section">
        <p style={{ margin: 0 }}>Content of second section.</p>
      </Section>
    </PageLayout>
  ),
};
