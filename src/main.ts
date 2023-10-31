import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import TDesign from 'tdesign-mobile-vue'
import App from './App.vue'

// 引入组件库的少量全局样式变量
import './styles/main.css'
import 'uno.css'
import 'tdesign-mobile-vue/es/style/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(TDesign)
app.use(router)
app.mount('#app')
