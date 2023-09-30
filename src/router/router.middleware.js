import router from '.'
import { authStore } from '@/stores/auth.store'
export const authMiddleware = () => {
  router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    const isLoggedIn = localStorage.getItem('access_token')
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        next({ name: 'login' })
      } else {
        // handle logged in user permission
        const user = authStore.value.user
        const userRole = user.role
        if (to.meta.roles && !to.meta.roles.includes(userRole)) {
          console.log('403')
          next({ name: 'dashboard' })
        }
      }
    } else {
      if (isLoggedIn && to.name == 'login') {
        next({ name: 'dashboard' })
      }
    }
    next()
  })
}
