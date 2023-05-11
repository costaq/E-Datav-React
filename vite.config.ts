/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-05-11 15:25:28
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['packages'],
      outputDir: 'es',
      insertTypesEntry: true
    })
  ],
  build: {
    target: 'modules',
    outDir: "lib", //输出文件名称
    //css分离
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./packages/index.ts"), //指定组件编译入口文件
      formats: ['es', 'cjs', 'umd'],
      name: "EDataV",
      // fileName: "e-datav",
    }, //库编译模式配置
    rollupOptions: {
      //忽略打包react文件
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: ['packages/index.ts'],
      output: [
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src'
        },
        {
          format: 'es',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src'
        }
      ]
    }
  }
})
