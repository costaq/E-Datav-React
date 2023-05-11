import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    'process.env': {}
  },
  build: {
    target: 'modules',
    outDir: "umd", //输出文件名称
    //css分离
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./packages/index.ts"), //指定组件编译入口文件
      formats: ['umd'],
      name: "EDataV",
      // fileName: "e-datav",
    }, //库编译模式配置
    rollupOptions: {
      //忽略打包react文件
      external: ['react', 'react-dom'],
      input: ['packages/index.ts'],
      output: {
        name: 'EDataV',
        entryFileNames: 'e-datav-react.umd.js',
        sourcemap: false,
        globals: {
          react: 'react',
          'react-dom': 'react-dom'
        },
      }
    }
  }
})