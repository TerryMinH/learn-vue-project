/*
 * @Author: TerryMin
 * @Date: 2022-01-14 14:57:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-26 15:51:38
 * @Description: file not
 */
import { createApp } from 'vue'
// import App from './App.vue'
import App from './shopping-cart/components/App.vue'
import store from './shopping-cart/store'

// createApp(App).mount('#app')
// import store from './store'

const app=createApp(App);
app.use(store)
app.mount('#app')