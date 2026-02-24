import { Meta, StoryObj } from '@storybook/react';
import { AddModulePlaceholder } from './AddModulePlaceholder';

declare const meta: Meta<typeof AddModulePlaceholder>;
export default meta;
type Story = StoryObj<typeof AddModulePlaceholder>;
export declare const Default: Story;
export declare const Empty: Story;
export declare const Disabled: Story;
