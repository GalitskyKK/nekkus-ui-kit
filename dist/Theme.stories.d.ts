import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta;
export default meta;
/** Единый каркас модуля (AppShell): лого Nekkus + название + описание. */
export declare const AppHeader: StoryObj;
/** Полный скелет модуля: AppShell + PageLayout + Section + карточки, блоки. Как собирается Hub/Net/Eye. */
export declare const FullModule: StoryObj;
/** Полная сетка Hub: AppShell + ModuleCardGrid с карточками трёх размеров и плейсхолдером. */
export declare const HubGrid: StoryObj;
/** Стеклянная карточка. Класс nekkus-glass-card на элементе с data-nekkus-card. */
export declare const GlassCard: StoryObj;
