import { Meta, StoryObj } from '@storybook/react';
import { ModuleCard } from './ModuleCard';

declare const meta: Meta<typeof ModuleCard>;
export default meta;
type Story = StoryObj<typeof ModuleCard>;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
/** Обводка без running — тихая подсветка. */
export declare const Inactive: Story;
export declare const WithError: Story;
