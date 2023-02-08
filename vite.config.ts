import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windi from "vite-plugin-windicss";
import cssOption from "./config/style";
import createVitePlugins from "./config/plugins";
import path from "path";
import { isDev, VITE_APP_BASE } from "./config/config";
import build from "./config/build";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  console.log("config::", configEnv);
  const { command, mode } = configEnv;
  return {
    base: isDev ? "./" : VITE_APP_BASE,
    resolve: {
      // 别名配置
      alias: {
        "@": path.join(__dirname, "src")
      }
    },
    server: {
      port: 3000,
      proxy: {
        // 代理配置
        // "/api/": {
        //   target: "http://127.0.0.1:3300/",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, "")
        // }
      }
    },
    css: cssOption,
    json: {
      stringify: true
    },
    plugins: [
      react(),
      viteMockServe({
        mockPath: "mock"
      }),
      windi(),
      createVitePlugins(command, mode)
    ],
    build
  };
});
