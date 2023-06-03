import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@store": "/src/store",
      "@services": "/src/services",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
