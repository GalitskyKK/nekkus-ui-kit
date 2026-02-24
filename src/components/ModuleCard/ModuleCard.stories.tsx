import type { Meta, StoryObj } from "@storybook/react";
import { ModuleCard } from "./ModuleCard";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { StatusDot } from "../StatusDot";
import { DataText } from "../DataText";

const meta: Meta<typeof ModuleCard> = {
  component: ModuleCard,
  title: "Hub / ModuleCard",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

type Story = StoryObj<typeof ModuleCard>;

export const Small: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 400 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <ModuleCard
          size="small"
          title="NET"
          description="VPN, конфиги, подписки"
          module="net"
          running
          onSizeChange={() => {}}
          headerActions={<Pill variant="info">widget</Pill>}
        >
          <StatusDot status="online" label="Подключено" pulse />
        </ModuleCard>
      </div>
    </div>
  ),
};

export const Medium: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 600 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <ModuleCard
          size="medium"
          title="EYE"
          description="Мониторинг CPU, память, диск"
          module="eye"
          running
          onSizeChange={() => {}}
          headerActions={<Pill variant="default">custom</Pill>}
          footer={
            <>
              <span>Запущен</span>
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="ghost" size="sm">Открыть</Button>
              </div>
            </>
          }
        >
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>CPU</span><DataText size="metric">42%</DataText></div>
            <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>RAM</span><DataText size="metric">1.2 GB</DataText></div>
          </div>
        </ModuleCard>
      </div>
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 800 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <ModuleCard
          size="large"
          title="NET"
          description="Конфиги, подписки и подключение к VPN"
          module="net"
          running
          onSizeChange={() => {}}
          headerActions={
            <>
              <Button variant="ghost" size="sm" title="Настройки виджета">⚙</Button>
              <Pill variant="info">widget</Pill>
            </>
          }
          configPanel={
            <>
              <p className="nekkus-module-card__config-title">Метрики</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}><input type="checkbox" defaultChecked /> Скорость ↓</label>
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}><input type="checkbox" defaultChecked /> Скорость ↑</label>
              </div>
            </>
          }
          footer={
            <>
              <span>Сервер: example.com</span>
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="secondary" size="sm">Отключить</Button>
                <Button variant="ghost" size="sm">Открыть</Button>
              </div>
            </>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <StatusDot status="online" label="Подключено" pulse />
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>example.com</span>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>↓</span><DataText size="base">12.5 MB/s</DataText></div>
              <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>↑</span><DataText size="base">1.2 MB/s</DataText></div>
            </div>
          </div>
        </ModuleCard>
      </div>
    </div>
  ),
};

/** Обводка без running — тихая подсветка. */
export const Inactive: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 400 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <ModuleCard
          size="small"
          title="NET"
          description="Модуль остановлен"
          module="net"
          onSizeChange={() => {}}
          headerActions={<Pill variant="default">widget</Pill>}
        >
          <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>Запустите модуль</p>
        </ModuleCard>
      </div>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ maxWidth: 400 }}>
      <div className="nekkus-module-card-grid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
        <ModuleCard
          size="small"
          title="Сломанный модуль"
          description="Не запускается"
          onSizeChange={() => {}}
        >
          <div className="nekkus-module-card__body" style={{ color: "var(--color-gate)", fontWeight: 600 }}>
            Ошибка: модуль не ответил на ping
          </div>
        </ModuleCard>
      </div>
    </div>
  ),
};
