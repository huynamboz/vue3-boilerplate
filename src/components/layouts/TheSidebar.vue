<template>
  <div class="">
    <div class="w-[300px] max-[900px]:w-[80px]"></div>
    <div class="flex flex-col h-full fixed top-[72px] left-0 p-5 w-[300px] gap-3 max-[900px]:w-[80px] overflow-hidden">
      <div class="w-full h-[1px] border-b-[1px]"></div>
      <h1>Unlockscan</h1>

      <router-link
        to="/"
        class="flex items-center gap-2 py-3 px-3 rounded-xl w-[260px] overflow-hidden"
        :class="{ ' bg-white box-shadow-custom': isDashboard }"
      >
        <div
          :class="{ ' background-active': isDashboard }"
          class="shadow-lg p-2 rounded-lg h-10 w-10 flex justify-center items-center"
        >
          <img v-if="!isDashboard" src="@/assets/icons/home.svg" alt="" />
          <img v-else src="@/assets/icons/home-active.svg" alt="" />
        </div>
        <p class="">Trang chủ</p>
      </router-link>

      <router-link
        to="users"
        class="flex items-center gap-2 py-3 px-3 rounded-xl w-[260px]"
        :class="{ ' bg-white box-shadow-custom': isUsers }"
      >
        <div
          :class="{ ' background-active': isUsers }"
          class="shadow-lg p-2 rounded-lg h-10 w-10 flex justify-center items-center"
        >
          <img v-if="!isUsers" src="@/assets/icons/user.svg" alt="" />
          <img v-else src="@/assets/icons/user-active.svg" alt="" />
        </div>
        <p>Danh sách người dùng</p>
      </router-link>

      <router-link
        to="settings"
        class="flex items-center gap-2 py-3 px-3 rounded-xl w-[260px]"
        :class="{ ' bg-white box-shadow-custom': isSettings }"
      >
        <div
          :class="{ ' background-active': isSettings }"
          class="shadow-lg p-2 rounded-lg h-10 w-10 flex justify-center items-center"
        >
          <img v-if="!isSettings" src="@/assets/icons/user.svg" alt="" />
          <img v-else src="@/assets/icons/user-active.svg" alt="" />
        </div>
        <p>Tài khoản của tôi</p>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount } from 'vue'
import { authStore } from '@/stores/auth.store'
import { useRoute } from 'vue-router'
const route = useRoute()
const isDashboard = computed(() => route.name === 'dashboard')
const isUsers = computed(() => route.name === 'users')
const isSettings = computed(() => route.name === 'settings')
const user = computed(() => authStore.value.user)
onBeforeMount(() => {
  console.log(user.value, route)
})
</script>
