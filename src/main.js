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
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import 'remixicon/fonts/remixicon.css'
const initApp = async () => {
  authMiddleware()
  await initAuthStore()
  const app = createApp(App)
  app.use(router)
  app.use(Vue3Toasity, {
    autoClose: 3000,
    dangerouslyHTMLString: true,
  })
  app.component('DefaultLayout', authLayout)
  app.component('EmptyLayout', emptyLayout)
  app.use(Notifications)
  router.isReady().then(() => {
    app.mount('#app')
  })
}
initApp()
