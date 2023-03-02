/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-02 11:11:11
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
})
