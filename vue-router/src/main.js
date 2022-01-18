/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-18 11:44:06
 * @Description: file not
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true;

const app=new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app')
