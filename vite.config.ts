import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "NekkusUiKit",
      fileName: (format) =>
        format === "es" ? "nekkus-ui-kit.js" : "nekkus-ui-kit.umd.cjs",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "framer-motion", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "framer-motion": "motion",
          "lucide-react": "lucideReact",
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          return name.endsWith(".css") ? "theme.css" : "assets/[name]-[hash][extname]";
        },
      },
    },
    sourcemap: true,
  },
});
