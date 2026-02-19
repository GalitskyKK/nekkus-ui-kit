import { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

declare const meta: Meta<typeof Chart>;
export default meta;
type Story = StoryObj<typeof Chart>;
export declare const Default: Story;
export declare const WithLabels: Story;
