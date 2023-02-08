/**
 * @description vite的插件配置文件
 */

import { Plugin } from "vite";
import configEslint from "./eslint";
import configStylelint from "./stylelint";
import svgr from "vite-plugin-svgr";
import configSvgSprites from "./svgSprites";
import { visualizer } from "rollup-plugin-visualizer";

export default function createVitePlugins(command: string, mode: string) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    configEslint(),
    configStylelint(),
    svgr(),
    configSvgSprites(),
    visualizer({
      open: process.env.NODE_ENV === "production"
    }) as any
  ];

  return vitePlugins;
}
