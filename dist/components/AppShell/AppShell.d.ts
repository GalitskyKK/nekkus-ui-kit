import { default as React } from 'react';

export interface AppShellProps {
    /** Бренд/лого (напр. "Nekkus") — показывается рядом с заголовком */
    logo?: string;
    /** Подпись над заголовком (если нет logo). Иначе не показывается. */
    eyebrow?: string;
    /** Заголовок страницы (название приложения: Hub, Net, Eye или "Модули и виджеты") */
    title: string;
    /** Краткое описание под заголовком */
    description?: string;
    /** Опциональный блок справа (статы, кнопки) */
    meta?: React.ReactNode;
    /** Контент под хедером */
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Единый каркас модуля: хедер (лого Nekkus + title или eyebrow + title + description + meta) с переливающейся линией под ним и слот для контента.
 */
export declare const AppShell: React.FC<AppShellProps>;
