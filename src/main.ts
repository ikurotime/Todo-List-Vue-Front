import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { VueQueryPlugin } from 'vue-query'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).use(VueQueryPlugin).mount('#app')
