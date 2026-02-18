# @nekkus/ui-kit

Общая библиотека React-компонентов для приложений экосистемы Nekkus (Hub, Net, Eye, Gate и др.).

## Что сделать сначала

1. **Создать репозиторий на GitHub**  
   Создай пустой репозиторий, например `nekkus-ui-kit` (можно с README и .gitignore или полностью пустой).

2. **Локальная разработка**  
   Клонируй репу в общую папку рядом с hub/net:
   ```bash
   cd E:/1frontend/Practice/Golang/nekkus   # или твоя корневая папка nekkus
   git clone https://github.com/GalitskyKK/nekkus-ui-kit.git
   cd nekkus-ui-kit
   npm install
   npm run build
   ```

3. **Подключить в Hub/Net**  
   В `nekkus-hub/frontend` и `nekkus-net/frontend` в `package.json`:
   ```json
   "@nekkus/ui-kit": "file:../../nekkus-ui-kit"
   ```
   Затем `npm install` в каждом фронтенде.

   После публикации на npm можно перейти на версию:
   ```json
   "@nekkus/ui-kit": "^0.1.0"
   ```

## Установка

```bash
npm install @nekkus/ui-kit
# или для локальной разработки:
# "@nekkus/ui-kit": "file:../../nekkus-ui-kit"
```

## Использование

```tsx
import { Button, Card, StatusDot, theme } from "@nekkus/ui-kit";

<Button variant="primary">Connect</Button>
<StatusDot status="online" />
```

## Компоненты

- **Button** — кнопка (primary, secondary, ghost)
- **Card** — карточка контента
- **Layout** — PageLayout, Section
- **StatusDot** — индикатор статуса (online, offline, busy, error)
- **Chart** — обёртка для простых графиков (данные в JSON)

## Сборка

```bash
npm run build
```

Собирается как библиотека (Vite library mode), выход в `dist/`.

## Лицензия

MIT
