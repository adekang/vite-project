import viteStylelint from "vite-plugin-stylelint";
/**
 * @description 对stylelint的支持，在开发模式下，自动会开启检测
 */
export default function configStylelint() {
  return [
    // 在 Vite HMR 叠加层和终端控制台中提示错误
    viteStylelint({
      // 对某些文件排除检查
      exclude: "/windicss|node_modules/"
    })
  ];
}
