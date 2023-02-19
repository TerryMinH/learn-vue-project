/*
 * @Author: TerryMin
 * @Date: 2022-01-14 14:57:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-17 17:31:38
 * @Description: file not
 */
import { createApp } from "vue";
import App from "./App.vue";
import plugin from "./plugins/plugin-child.js";
// createApp(App).mount('#app')

const app = createApp(App);

app.config.globalProperties.$systemId = "10";

app.use(plugin); // 插件安装

app.mount("#app");
