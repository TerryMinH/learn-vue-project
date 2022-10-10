/*
 * @Author: TerryMin
 * @Date: 2022-01-14 14:57:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-16 15:31:23
 * @Description: file not
 */
import { createApp } from "vue";
import App from "./App.vue";
import plugin from "./components/plugin-child.js";
// createApp(App).mount('#app')

const app = createApp(App);
app.config.globalProperties.$systemId = "10";
app.use(plugin);
app.mount("#app");
