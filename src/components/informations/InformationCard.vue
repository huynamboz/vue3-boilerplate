<template>
  <div class="flex flex-col bg-white h-[200px] w-[200px] rounded-md p-5">
    <div class="flex flex-col gap-3">
      <p>Tên: {{ information.name }}</p>
      <p>Giới tính: {{ information.gender }}</p>
      <p>Ngày sinh: {{ information.bỉthday }}</p>
      <p>Địa chỉ nhận : {{ information.location }}</p>
      <p>
        Trạng thái :
        <span :class="{ ' text-green-500': information.isSend, 'text-yellow-500': !information.isSend }">
          {{ information.isSend ? 'Đã xử lý' : 'Đang xử lý' }}
        </span>
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  information: Object,
})
</script>
