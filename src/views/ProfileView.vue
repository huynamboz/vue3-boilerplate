<template>
  <div class="w-full p-5">
    <div class="relative">
      <img
        class="w-full h-[200px] object-cover rounded-xl"
        src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/curved0.jpg"
        alt=""
      />
      <div class="w-full h-[100px] flex justify-center absolute -bottom-10">
        <div
          class="w-[95%] h-full bg-[#ffffffc9] rounded-xl p-2 gap-5 flex items-center px-4 box-shadow-custom"
          style="backdrop-filter: blur(16px)"
        >
          <img :src="authStore.user.avatar" class="shadow-md h-[70px] w-[70px] object-cover rounded-lg" alt="" />
          <div class="flex flex-col">
            <p class="font-semibold text-lg">{{ authStore.user.name }}</p>
            <p class="text-sm">{{ authStore.user.email }}</p>
          </div>
          <!-- edit btn -->
          <div class="w-[100px] h-[40px]">
            <button
              class="w-full h-full shadow-lg rounded-xl bg-[#ff9f93] text-white font-semibold"
              @click="editProfile = true"
            >
              Chỉnh sửa
            </button>
          </div>
          <div class="w-[100px] h-[40px] ml-auto">
            <button
              class="w-full h-full shadow-lg rounded-xl bg-[#1e90ff] text-white font-semibold"
              @click="authStore.logout()"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { authStore } from '@/stores/auth.store'
</script>
