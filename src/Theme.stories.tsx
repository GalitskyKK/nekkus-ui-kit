import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Theme / App Chrome",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

/** Единый хедер приложений (Hub, Net, Eye). Классы: nekkus-app-header, nekkus-app-header__eyebrow, __title, __desc, __meta. */
export const AppHeader: StoryObj = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <header className="nekkus-app-header">
        <div className="nekkus-app-header__main">
          <p className="nekkus-app-header__eyebrow">nekkus hub</p>
          <h1 className="nekkus-app-header__title">Модули и виджеты</h1>
          <p className="nekkus-app-header__desc">
            Запуск, настройка и виджеты модулей в одной панели.
          </p>
        </div>
        <div className="nekkus-app-header__meta">
          <div style={{ padding: "8px 12px", background: "var(--bg-nested)", borderRadius: 8, fontSize: 12 }}>
            <span style={{ color: "var(--text-secondary)" }}>Модули</span>
            <strong style={{ display: "block", fontSize: 16 }}>2</strong>
          </div>
        </div>
      </header>
    </div>
  ),
};

/** Стеклянная карточка. Класс nekkus-glass-card на элементе с data-nekkus-card. */
export const GlassCard: StoryObj = {
  render: () => (
    <div style={{ background: "#050508", padding: 24, minHeight: 200 }}>
      <div
        data-nekkus-card
        className="nekkus-glass-card"
        style={{ padding: 20, borderRadius: 14, maxWidth: 360 }}
      >
        <h3 style={{ margin: "0 0 8px", fontSize: 16 }}>Карточка со стеклом</h3>
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)" }}>
          Фон полупрозрачный с blur, граница — glass-border.
        </p>
      </div>
    </div>
  ),
};
