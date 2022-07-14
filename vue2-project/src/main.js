/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-14 10:08:30
 * @Description: file not
 */
import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import Directives from './directives/index.js'
import Toast from './plugins/toast'
import Loading from './plugins/loading'

Vue.use(Toast)
Vue.use(Loading)

Vue.use(Directives) // 注册指令

Vue.config.productionTip = true;

const app=new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app')
