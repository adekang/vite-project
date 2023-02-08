import * as path from "path";
import { normalizePath } from "vite";
import { CSSOptions } from "vite";

const variablePath = normalizePath(
  path.resolve("./src/assets/scss/variable.scss")
);

/**
 * @description css样式配置
 */
const cssOption: CSSOptions = {
  modules: {
    generateScopedName: "[name]_[local]_[hash:base64:5]",
    hashPrefix: "prefix",
    localsConvention: "camelCase",
  },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
    },
    scss: {
      charset: false,
      additionalData: `@import "${variablePath}";`,
    },
  },
};
export default cssOption;
