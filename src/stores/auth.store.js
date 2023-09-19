import { ref } from 'vue'
import { getInfo } from '@/services/auth.service'
export const authStore = ref({
  user: null,
  isLoggedIn: false,
})

export const initAuthStore = async () => {
  if (localStorage.getItem('access_token')) {
    const { data } = await getInfo()
    authStore.value.user = data
    authStore.value.isLoggedIn = true
    console.log('initAuthStore', authStore.value)
  }
}
