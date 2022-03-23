/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-23 10:44:56
 * @Description: file not
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Directives from './directives/index.js'

Vue.use(Directives) // 注册指令

Vue.config.productionTip = true;

const app=new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app')
