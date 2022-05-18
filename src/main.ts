import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import elementplus from '@/plugins/element-plus'

createApp(App)
.use(router)
.use(createPinia())
.use(elementplus)
.mount('#app')
