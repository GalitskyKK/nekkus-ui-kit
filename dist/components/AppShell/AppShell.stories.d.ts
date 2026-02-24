import { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell';

declare const meta: Meta<typeof AppShell>;
export default meta;
type Story = StoryObj<typeof AppShell>;
/** Базовый каркас: eyebrow, title, description */
export declare const Default: Story;
/** С блоком meta справа (статы, кнопки) — как в Hub/Net */
export declare const WithMeta: Story;
/** Без description */
export declare const Minimal: Story;
/** С логотипом Nekkus и названием приложения (Hub, Net, Eye). */
export declare const WithLogo: Story;
