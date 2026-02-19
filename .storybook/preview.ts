import type { Preview } from "@storybook/react";
import "@/styles/globals.css";

// Применяем типографику темы в Storybook
if (typeof document !== "undefined") {
  document.body.classList.add("nekkus-theme");
}

const preview: Preview = {
  parameters: {
    controls: { matchers: ["color", "date"] },
    backgrounds: {
      default: "nekkus",
      values: [
        { name: "nekkus", value: "var(--nekkus-bg, #0f1117)" },
        { name: "surface", value: "var(--nekkus-surface, #1e2129)" },
      ],
    },
  },
};

export default preview;
