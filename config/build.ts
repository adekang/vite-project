import { BuildOptions } from "vite";

const build: BuildOptions = {
  minify: "terser",
  assetsInlineLimit: 8 * 1024,
  terserOptions: {
    compress: {
      keep_infinity: true
    }
  },
  outDir: "dist", // 指定输出路径目录
  assetsDir: "assets" // 指定打包生成静态资源的存放路径目录
};
export default build;
