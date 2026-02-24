import { default as React } from 'react';

export interface MetricHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Главная метрика (крупный градиентный текст) */
    value: React.ReactNode;
    /** Подпись под метрикой (12px uppercase) */
    label?: string;
}
/** Hero-метрика: 48px mono, gradient text, label под ней (nekkus-vis) */
export declare const MetricHero: React.FC<MetricHeroProps>;
