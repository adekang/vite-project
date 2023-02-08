import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windi from "vite-plugin-windicss";
import cssOption from "./config/style";
import createVitePlugins from "./config/plugins";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  console.log("config::", configEnv);
  const { command, mode } = configEnv;

  return {
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
