/*
 * @Author: TerryMin
 * @Date: 2022-08-01 20:15:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-08-02 15:52:49
 * @Description: file not
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
console.log(path);

// https://vitejs.dev/config/
export default defineConfig({
  // 服务
  server: {
    // 服务器主机名
    host: "0.0.0.0",
    // 端口号
    port: 3000,
    // 设为 true 时若端口已被占用则会直接退出，
    // 而不是尝试下移一格端口
    strictPort: false,
    // http.createServer() 配置项
    // https: '',
    proxy: {
      "/api": {
        target: "http://...............",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
  // 项目根目录
  // root: process.cwd(),
  root: "./src/pages/",
  // 项目部署的基础路径
  base: "/",
  // 环境配置
  mode: "development",
  plugins: [vue()],
  build: {
    // 浏览器兼容性 ‘esnext’ | 'modules'
    target: "modules",
    //输出路径
    outDir: "../dist",
    // 生成静态资源的存放路径
    assetsDir: "../assets",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]",
      },
    },
  },
});
