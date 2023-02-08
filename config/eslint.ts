import viteEslint from "vite-plugin-eslint";
/**
 * @description 对eslint的支持，在开发模式下，自动会开启检测
 */
export default function configEslint() {
  return [
    // 在 Vite HMR 叠加层和终端控制台中提示错误
    viteEslint({
      failOnError: false
    })
  ];
}
