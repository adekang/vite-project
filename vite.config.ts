import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import windi from "vite-plugin-windicss";
import cssOption from "./config/style";
import createVitePlugins from "./config/plugins";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  console.log("config::", configEnv);
  const { command, mode } = configEnv;

  return {
    css: cssOption,
    plugins: [react(), windi(), createVitePlugins(command, mode)]
  };
});
