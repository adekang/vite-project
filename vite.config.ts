import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windi from "vite-plugin-windicss";
import cssOption from "./config/style";
import createVitePlugins from "./config/plugins";
import path from "path";
import { isProduction, VITE_APP_BASE } from "./config/config";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  console.log("config::", configEnv);
  const { command, mode } = configEnv;

  // const isProduction = mode === "production";

  return {
    base: isProduction ? VITE_APP_BASE : "./",
    resolve: {
      // 别名配置
      alias: {
        "@": path.join(__dirname, "./src"),
        "@assets": path.join(__dirname, "./src/assets")
      }
    },
    css: cssOption,
    json: {
      stringify: true
    },
    plugins: [react(), windi(), createVitePlugins(command, mode)]
  };
});
