import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { children: "Card content here." },
};

export const WithTitle: Story = {
  args: { title: "Card title", children: "Card body content." },
};

export const WithButton: Story = {
  render: () => (
    <Card title="Module card">
      <p style={{ margin: 0, fontSize: "14px", color: "var(--nekkus-text-muted)" }}>
        Description text.
      </p>
      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button type="button" style={{ padding: "6px 12px", borderRadius: 8, background: "var(--nekkus-primary)", color: "#fff", border: "none", cursor: "pointer" }}>
          Start
        </button>
        <button type="button" style={{ padding: "6px 12px", borderRadius: 8, background: "transparent", color: "var(--nekkus-text)", border: "1px solid var(--nekkus-border)", cursor: "pointer" }}>
          Stop
        </button>
      </div>
    </Card>
  ),
};

export const AccentTop: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Card accentTop className="nekkus-glass-card" style={{ padding: 16, maxWidth: 200 }}>
        accentTop (net)
      </Card>
      <Card accentTop="eye" className="nekkus-glass-card" style={{ padding: 16, maxWidth: 200 }}>
        accentTop eye
      </Card>
    </div>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" title="Elevated" className="nekkus-glass-card" style={{ padding: 16, maxWidth: 280 }}>
      Тень и inner highlight.
    </Card>
  ),
};

export const Hero: Story = {
  render: () => (
    <Card variant="hero" heroModule="net" title="Hero (gradient border)" style={{ padding: 16, maxWidth: 280 }}>
      Градиентная граница по модулю.
    </Card>
  ),
};

export const ModuleGlow: Story = {
  render: () => (
    <Card moduleGlow="eye" title="Module glow" className="nekkus-glass-card" style={{ padding: 16, maxWidth: 280 }}>
      Цветное свечение по границе (eye).
    </Card>
  ),
};
