/*
 * @Author: TerryMin
 * @Date: 2022-04-27 15:48:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-28 14:28:53
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    }
  },
})
