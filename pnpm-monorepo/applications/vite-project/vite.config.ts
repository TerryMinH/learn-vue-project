/*
 * @Author: TerryMin
 * @Date: 2022-08-01 13:52:49
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-08-01 14:01:04
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // ,eslint()
  ]
})
