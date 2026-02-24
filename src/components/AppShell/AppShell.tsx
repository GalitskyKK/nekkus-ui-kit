import React from "react";

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
export const AppShell: React.FC<AppShellProps> = ({
  logo,
  eyebrow,
  title,
  description,
  meta,
  children,
  className = "",
  style,
}) => (
  <div className={`nekkus-app-shell ${className}`.trim()} style={style}>
    <header className="nekkus-app-header">
      <div className="nekkus-app-header__main">
        {logo ? (
          <div className="nekkus-app-header__brand">
            <span className="nekkus-app-header__logo">{logo.toUpperCase()}</span>
            <h1 className="nekkus-app-header__title">{title.toUpperCase()}</h1>
          </div>
        ) : (
          <>
            {eyebrow ? <p className="nekkus-app-header__eyebrow">{eyebrow}</p> : null}
            <h1 className="nekkus-app-header__title">{title}</h1>
          </>
        )}
        {description ? (
          <p className="nekkus-app-header__desc">{description}</p>
        ) : null}
      </div>
      {meta ? <div className="nekkus-app-header__meta">{meta}</div> : null}
    </header>
    <div className="nekkus-app-shell__content">{children}</div>
  </div>
);
