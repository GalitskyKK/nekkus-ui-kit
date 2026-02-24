import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./AppShell";
import { Button } from "../Button";
import { StatusDot } from "../StatusDot";

const meta: Meta<typeof AppShell> = {
  component: AppShell,
  title: "Layout / AppShell",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

type Story = StoryObj<typeof AppShell>;

/** Базовый каркас: eyebrow, title, description */
export const Default: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <AppShell
        eyebrow="nekkus hub"
        title="Модули и виджеты"
        description="Запуск, настройка и виджеты модулей в одной панели."
      >
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>Контент под хедером.</p>
      </AppShell>
    </div>
  ),
};

/** С блоком meta справа (статы, кнопки) — как в Hub/Net */
export const WithMeta: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <AppShell
        eyebrow="nekkus net"
        title="VPN"
        description="Конфиги, подписки и подключение к VPN."
        meta={
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <StatusDot status="online" label="Подключено" pulse />
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Сервер: example.com</span>
            <Button variant="ghost" size="sm">
              Обновить
            </Button>
          </div>
        }
      >
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>Контент модуля.</p>
      </AppShell>
    </div>
  ),
};

/** Без description */
export const Minimal: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <AppShell eyebrow="nekkus eye" title="Мониторинг системы">
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>Краткий хедер.</p>
      </AppShell>
    </div>
  ),
};

/** С логотипом Nekkus и названием приложения (Hub, Net, Eye). */
export const WithLogo: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <AppShell
        logo="Nekkus"
        title="Hub"
        description="Модули и виджеты в одной панели."
        meta={
          <div className="nekkus-header-stat" style={{ padding: "10px 14px" }}>
            <span>Модули</span>
            <strong>2</strong>
          </div>
        }
      >
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>Контент.</p>
      </AppShell>
    </div>
  ),
};
