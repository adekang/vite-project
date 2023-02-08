import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import * as path from "path";

export default function configSvgSprites() {
  return [
    // 在 Vite HMR 叠加层和终端控制台中提示错误
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "./src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: { attrs: ["class", "data-name", "fill", "stroke"] }
          }
        ]
      }

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    })
  ];
}
