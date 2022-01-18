import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

import store from './store'

const app=createApp(App);
app.use(store)
app.mount('#app')