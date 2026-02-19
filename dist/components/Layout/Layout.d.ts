import { default as React } from 'react';

export interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare const PageLayout: React.FC<PageLayoutProps>;
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    title?: string;
    className?: string;
}
export declare const Section: React.FC<SectionProps>;
