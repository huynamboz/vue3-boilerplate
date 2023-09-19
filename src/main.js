import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/global.css'
import router from '@/router'
import Notifications from '@kyvg/vue3-notification'
import { initAuthStore } from '@/stores/auth.store'
import { authMiddleware } from '@/router/router.middleware'
authMiddleware()
const initApp = async () => {
  await initAuthStore()
  const app = createApp(App)
  app.use(router)
  app.use(Notifications)
  app.mount('#app')
}
initApp()
