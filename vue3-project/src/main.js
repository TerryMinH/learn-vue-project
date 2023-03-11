/*
 * @Author: TerryMin
 * @Date: 2022-01-14 14:57:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-08 09:18:26
 * @Description: file not
 */
import { createApp,defineAsyncComponent } from "vue";
import { createPinia } from 'pinia';
// import components from '@/components/index.js';
import App from "./App.vue";
import plugin from "./plugins/plugin-child.js";

const app = createApp(App);
console.log(app);
// store
app.use(createPinia());

// components(app,defineAsyncComponent); // 注册全局组件
// registerGlobalAsyncComponents(app);

app.config.globalProperties.$systemId = "10";

app.use(plugin); // 插件安装

app.mount("#app");
