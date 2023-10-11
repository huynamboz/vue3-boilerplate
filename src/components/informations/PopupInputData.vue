<template>
  <div
    class="fixed bg-[#0000008f] z-[60] w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center fadeIn"
    @click="$emit('close')"
  >
    <div class="w-[500px] h-fit bg-white rounded-2xl flex p-6 flex-col gap-3" @click.stop="">
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
        <input v-model="informationData.name" type="text" class="rounded-md" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Ngày sinh: định dạng ngày/tháng/năm</p>
        <input v-model="informationData.birthday" type="text" class="rounded-md" style="outline: none" />
      </div>
      <div class="flex flex-col">
        <p>Giới tính</p>
        <div>
          <label for="fm">Nam </label>
          <input
            id="fm"
            v-model="informationData.gender"
            type="radio"
            value="nam"
            class="rounded-md"
            style="outline: none"
          />
        </div>
        <div>
          <label for="m">Nữ </label>
          <input
            id="m"
            v-model="informationData.gender"
            type="radio"
            value="nữ"
            class="rounded-md"
            style="outline: none"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <p>Địa chỉ nhận thông tin</p>
        <select v-model="informationData.location" name="" class="rounded-md">
          <option value="telegram">Telegram</option>
          <option value="zalo">Zalo</option>
        </select>
      </div>
      <div class="flex flex-col">
        <p>Số điện thoại</p>
        <input v-model="informationData.phone_number" type="text" class="rounded-md" style="outline: none" />
      </div>
      <div class="flex gap-2">
        <button class="bg-[#1e90ff] text-white rounded-[8px] px-4 py-1 h-10 w-[100px]" @click="submit">Lưu</button>
        <button class="bg-[#d1d1d1] text-white rounded-[8px] px-4 py-1 h-10 w-[100px]" @click="$emit('close')">
          Hủy
        </button>
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
const emits = defineEmits(['close', 'updateInfor', 'createInfor'])
const informationData = ref(null)
onBeforeMount(() => {
  informationData.value = { ...props.user }
  informationData.value.location = 'telegram'
  console.log(informationData.value.balance)
})
const submit = () => {
  if (informationData.value.id) {
    emits('updateInfor', informationData.value)
  } else {
    emits('createInfor', informationData.value)
  }
}
</script>
