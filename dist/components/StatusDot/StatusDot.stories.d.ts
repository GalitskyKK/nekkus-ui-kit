import { Meta, StoryObj } from '@storybook/react';
import { StatusDot } from './StatusDot';

declare const meta: Meta<typeof StatusDot>;
export default meta;
type Story = StoryObj<typeof StatusDot>;
export declare const Online: Story;
export declare const Offline: Story;
export declare const Busy: Story;
export declare const Error: Story;
export declare const All: Story;
