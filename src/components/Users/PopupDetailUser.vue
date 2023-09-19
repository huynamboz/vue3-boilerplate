<template>
  <div
    class="fixed bg-[#0000008f] z-[60] w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center"
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
          viewBox="0 0 24 24"
          @click="$emit('close')"
        >
          <g fill="currentColor">
            <path
              d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94l-1.97-1.97Z"
            />
            <path
              fill-rule="evenodd"
              d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0Z"
              clip-rule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div class="flex flex-col">
        <p>Tên</p>
        <input v-model="userData.name" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Email</p>
        <input v-model="userData.email" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Role</p>
        <input v-model="userData.role" type="text" class="rounded-[10px]" style="outline: none" />
      </div>
      <div class="flex gap-2">
        <button class="bg-[#1e90ff] text-white rounded-[20px] px-4 py-1" @click="submit">Lưu</button>
        <button class="bg-[#1e90ff] text-white rounded-[20px] px-4 py-1">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue'
const props = defineProps({
  show: Boolean,
  user: Object,
})
const emits = defineEmits(['close', 'updateUser'])
const userData = ref(null)
onBeforeMount(() => {
  userData.value = { ...props.user }
  console.log(userData.value.balance)
})
const submit = () => {
  emits('updateUser', userData.value)
}
</script>
