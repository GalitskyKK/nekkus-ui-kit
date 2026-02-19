import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const WithValue: Story;
