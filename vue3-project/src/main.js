/*
 * @Author: TerryMin
 * @Date: 2022-01-14 14:57:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-23 10:41:29
 * @Description: file not
 */
import { createApp,defineAsyncComponent } from "vue";
import App from "./App.vue";
import plugin from "./plugins/plugin-child.js";

const app = createApp(App);

function registerGlobalAsyncComponents(app) {
  const modules = import.meta.glob('./components/*.vue');
  console.log(11,modules);
  for (const path in modules) {
    const result = path.match(/.*\/(.+).vue$/);
    console.log(result);
    console.log(path);
    if (result) {
      const name = result[1];
      const component = modules[path];
      console.log(component);
      app.component(name, defineAsyncComponent(`${component}`));
    }
  }
}

registerGlobalAsyncComponents(app);

app.config.globalProperties.$systemId = "10";

app.use(plugin); // 插件安装

app.mount("#app");
