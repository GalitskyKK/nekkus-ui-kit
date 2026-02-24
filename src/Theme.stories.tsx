import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./components/AppShell";
import { PageLayout, Section } from "./components/Layout";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { StatusDot } from "./components/StatusDot";
import { DataText } from "./components/DataText";
import { Pill } from "./components/Pill";
import { ModuleCard } from "./components/ModuleCard";
import type { ModuleCardSize } from "./components/ModuleCard";
import { ModuleCardGrid } from "./components/ModuleCardGrid";
import { AddModulePlaceholder } from "./components/AddModulePlaceholder";

const meta: Meta = {
  title: "Theme / App Chrome",
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#050508" }] },
  },
};
export default meta;

/** Единый каркас модуля (AppShell): лого Nekkus + название + описание. */
export const AppHeader: StoryObj = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root" style={{ padding: 24 }}>
      <AppShell
        logo="Nekkus"
        title="Hub"
        description="Модули и виджеты в одной панели."
        meta={
          <div className="nekkus-header-stat">
            <span>Модули</span>
            <strong>2</strong>
          </div>
        }
      >
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>Контент под хедером.</p>
      </AppShell>
    </div>
  ),
};

/** Полный скелет модуля: AppShell + PageLayout + Section + карточки, блоки. Как собирается Hub/Net/Eye. */
export const FullModule: StoryObj = {
  render: () => (
    <div data-nekkus-root className="nekkus-theme nekkus-glass-root">
      <PageLayout className="nekkus-glass-root">
        <AppShell
          logo="Nekkus"
          title="Net"
          description="VPN, конфиги и подписки."
          meta={
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <StatusDot status="online" label="Подключено" pulse />
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Сервер: example.com</span>
              <Button variant="ghost" size="sm">Обновить</Button>
            </div>
          }
        >
          <Section title="Скорость и трафик">
            <Card className="nekkus-glass-card" accentTop style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <div><span style={{ fontSize: 12, color: "var(--text-secondary)" }}>↓ Скачивание</span><DataText size="metric">12.5 MB/s</DataText></div>
                <div><span style={{ fontSize: 12, color: "var(--text-secondary)" }}>↑ Отдача</span><DataText size="metric">1.2 MB/s</DataText></div>
              </div>
            </Card>
          </Section>
          <Section title="Конфиги">
            <Card className="nekkus-glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
                <div><div style={{ fontWeight: 600 }}>Мой конфиг</div><div style={{ fontSize: 12, color: "var(--text-secondary)" }}>ID: abc123</div></div>
                <Pill variant="info">Subscription</Pill>
              </div>
            </Card>
          </Section>
        </AppShell>
      </PageLayout>
    </div>
  ),
};

/** Полная сетка Hub: AppShell + ModuleCardGrid с карточками трёх размеров и плейсхолдером. */
export const HubGrid: StoryObj = {
  render: () => {
    const [sizes, setSizes] = React.useState<Record<string, ModuleCardSize>>({
      net: "large",
      eye: "medium",
      other: "small",
    });
    const setSize = (id: string) => (size: ModuleCardSize) => setSizes((s) => ({ ...s, [id]: size }));
    return (
      <div data-nekkus-root className="nekkus-theme nekkus-glass-root">
        <PageLayout className="nekkus-glass-root">
          <AppShell
            logo="Nekkus"
            title="Hub"
            description="Модули и виджеты в одной панели."
            meta={
              <>
                <div className="nekkus-header-stat">
                  <span>Модули</span>
                  <strong>3</strong>
                </div>
                <Button variant="ghost" size="sm">Обновить</Button>
              </>
            }
          >
            <Section title="">
              <ModuleCardGrid>
                <ModuleCard
                  size={sizes.net}
                  title="NET"
                  description="VPN, конфиги, подписки"
                  module="net"
                  running
                  onSizeChange={setSize("net")}
                  headerActions={<Pill variant="info">widget</Pill>}
                  footer={
                    <>
                      <span>Сервер: example.com</span>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Button variant="ghost" size="sm">Открыть</Button>
                      </div>
                    </>
                  }
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <StatusDot status="online" label="Подключено" pulse />
                    <DataText size="base">12.5 MB/s ↓</DataText>
                    <DataText size="base">1.2 MB/s ↑</DataText>
                  </div>
                </ModuleCard>
                <ModuleCard
                  size={sizes.eye}
                  title="EYE"
                  description="Мониторинг системы"
                  module="eye"
                  running
                  onSizeChange={setSize("eye")}
                  headerActions={<Pill variant="default">custom</Pill>}
                  footer={
                    <>
                      <span>Запущен</span>
                      <Button variant="ghost" size="sm">Открыть</Button>
                    </>
                  }
                >
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>CPU</span><DataText size="metric">42%</DataText></div>
                    <div><span style={{ fontSize: 11, color: "var(--text-secondary)" }}>RAM</span><DataText size="metric">1.2 GB</DataText></div>
                  </div>
                </ModuleCard>
                <ModuleCard
                  size={sizes.other}
                  title="ДРУГОЙ"
                  description="Пример маленькой карточки"
                  onSizeChange={setSize("other")}
                  headerActions={<Pill variant="default">widget</Pill>}
                >
                  <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>Нет данных</p>
                </ModuleCard>
                <AddModulePlaceholder onClick={() => {}} />
              </ModuleCardGrid>
            </Section>
          </AppShell>
        </PageLayout>
      </div>
    );
  },
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
