import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/global.css'
import Notifications from '@kyvg/vue3-notification'
import { initAuthStore } from '@/stores/auth.store'
import { authMiddleware } from '@/router/router.middleware'
import authLayout from '@/layouts/authLayout.vue'
import emptyLayout from '@/layouts/emptyLayout.vue'

const initApp = async () => {
  authMiddleware()
  await initAuthStore()
  const app = createApp(App)
  app.use(router)
  app.component('default-layout', authLayout)
  app.component('empty-layout', emptyLayout)
  app.use(Notifications)
  app.mount('#app')
}
initApp()
