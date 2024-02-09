import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  eslintConfigPrettier,
});
