# @nekkus/ui-kit

Общая библиотека React-компонентов для экосистемы Nekkus (Hub, Net, Eye, Gate и др.). Стиль по **Nekkus UI/UX Design Guide**: mission control, тёмная тема, слои фона, модульные акценты, типографика Inter + JetBrains Mono.

### Философия

- **Не системная утилита** — интерфейс как продукт за $20/мес, который получаешь бесплатно.
- **Тёмная тема** — основа (Layer 0: `#0A0A0F`), не опция.
- **Глубина без теней** — слои (Layer 0→1→2→3), тонкие границы (`#1E1E2E`, hover `#2E2E4E`).
- **Модульные цвета** точечно: кнопки, полоска карточки, графики, бейджи (Net, Eye, Gate, Port, Vault, Sync, Clip, Hub).
- **Типографика**: UI — Inter/Geist Sans; данные/метрики — JetBrains Mono/Geist Mono.
- **Screenshot test** — каждый экран должен вызывать желание заскринить и поделиться.

### Токены (theme.ts + Tailwind)

| Назначение | Значения |
|------------|----------|
| Слои фона | Layer 0 `#0A0A0F`, 1 `#12121A`, 2 `#1A1A2E`, 3 `#232340` |
| Границы | default `#1E1E2E`, hover `#2E2E4E` |
| Модули | net `#3B82F6`, eye `#10B981`, gate `#EF4444`, port `#8B5CF6`, vault `#F59E0B`, sync `#06B6D4`, clip `#EC4899`, hub `#64748B` |
| Статусы | success `#10B981`, warning `#F59E0B`, error `#EF4444`, info `#3B82F6`, muted `#475569` |
| Радиусы | sm 6px, md 8px, lg 10px, card 14px |

### Стек

- **Tailwind CSS** — тема в `tailwind.config.js` (слои, границы, модульные цвета, шрифты, радиусы, тени).
- **Radix UI** — примитивы (Select и др., по необходимости).
- **Lucide Icons** — иконки (опционально в Button).
- **Recharts/D3** — в приложениях; в ките — простой bar Chart.

## Как это работает (репы по отдельности на GitHub)

- В `nekkus-hub/frontend` и `nekkus-net/frontend` в `package.json`:  
  `"@nekkus/ui-kit": "github:GalitskyKK/nekkus-ui-kit#main"`.  
  При `npm install` ui-kit ставится с GitHub. Для фикса версии: `#v0.1.0`.

- **Локальная разработка** (все репы в одной папке): в `nekkus-ui-kit` — `npm run build` и `npm link`; в hub/net frontend — `npm link @nekkus/ui-kit`. После правок в ui-kit снова `npm run build` в ui-kit.

## Установка

```bash
npm install @nekkus/ui-kit
# или локально: "@nekkus/ui-kit": "file:../../nekkus-ui-kit"
```

## Использование

В точке входа приложения:

```tsx
import "@nekkus/ui-kit/theme.css";
// Опционально: document.body.classList.add("nekkus-theme");
// Или обернуть в <PageLayout> — ставит data-nekkus-root и шрифты.
```

Компоненты:

```tsx
import { Button, Card, StatusDot, Input, Select, Pill, Chart, theme } from "@nekkus/ui-kit";

<Button variant="primary" accent="net">Connect</Button>
<Card title="Overview" accentTop="eye">...</Card>
<StatusDot status="online" label="Online" />
<Input label="URL" value={url} onChange={e => setUrl(e.target.value)} />
<Select label="Profile" options={[{ value: "a", label: "A" }]} value={sel} onChange={e => setSel(e.target.value)} />
<Pill variant="success">Active</Pill>
<Chart data={[1,2,3]} labels={["a","b","c"]} color={theme.modules.eye} />
```

## Компоненты

- **Button** — primary/secondary/ghost/danger, размеры sm/md/large, опционально `accent` (модуль).
- **Card** — Layer 1, 14px radius, 20px padding, опционально `title`, `accentTop` (полоска сверху).
- **Layout** — PageLayout, Section.
- **StatusDot** — online/offline/busy/error; для online — пульс (keyframes nekkus-status-pulse).
- **Chart** — bar chart; опционально `color` (модульный цвет), иначе Net accent.
- **Input, Select** — Layer 0, 10px radius, focus ring по акценту.
- **Pill** — бейдж 11px, 2px 8px, 6px radius (default, success, warning, error).
- **DataText** — моно для метрик (sm, base, metric).
- **theme** — объект слоёв, границ, модулей, статусов, радиусов, шрифтов, теней.

## Сборка и Storybook

```bash
npm install && npm run build
npm run storybook   # http://localhost:6006
npm run build-storybook   # storybook-static/
```

## Чеклист по гайду (для новых экранов)

- [ ] Тёмная тема, слои и границы по токенам.
- [ ] Данные в моноширинном шрифте, UI — Inter.
- [ ] Цвет модуля точечно (кнопка, полоска, график), не заливкой.
- [ ] Информационная плотность без каши, иерархия: главная метрика → поддержка → детали.
- [ ] Анимации функциональные (появление, обновление, StatusDot pulse).
- [ ] Графики плавные, с акцентным цветом и опциональной заливкой.
- [ ] Screenshot test: хочется заскринить и отправить.

## Лицензия

MIT
