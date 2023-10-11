<template>
  <div
    class="fixed bg-[#0000008f] z-[60] w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center fadeIn"
    @click="$emit('close')"
  >
    <div class="w-[500px] h-fit bg-white rounded-[10px] flex p-6 flex-col gap-3" @click.stop="">
      <div class="flex justify-between">
        <p class="font-bold">Thông tin tài khoản</p>
        <svg
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          @click="$emit('close')"
        >
          <path
            fill="currentColor"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          />
        </svg>
      </div>
      <div class="flex flex-col">
        <p>Tên</p>
        <input v-model="authStore.user.name" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Email</p>
        <input v-model="authStore.user.email" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Role</p>
        <input v-model="authStore.user.role" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex gap-2">
        <button class="bg-[#1e90ff] text-white rounded-[20px] px-4 py-1" @click="submit">Lưu</button>
        <button class="bg-[#1e90ff] text-white rounded-[20px] px-4 py-1">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { authStore } from '@/stores/auth.store'

</script>
