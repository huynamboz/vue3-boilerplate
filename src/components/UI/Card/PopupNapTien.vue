<template>
  <div
    class="fixed top-0 left-0 h-[100vh] bg-[#6d6d6d6e] z-[999] overflow-hidden w-full flex justify-center items-center"
    @click="$emit('close')"
  >
    <div class="bg-white w-[400px] rounded-xl py-5 gap-3 px-5 flex flex-col" @click.stop>
      <p class="font-semibold">Nạp tiền</p>
      <p>
        Số tiền hiện tại: <span class="font-bold">{{ formatPrice(user.balance) }}</span>
      </p>
      <div class="flex flex-col">
        <p class="mb-2">
          Số tiền cần nạp: <span class="text-green-600 font-semibold">{{ formatPrice(balance) }}</span>
        </p>
        <input v-model="balance" type="text" class="rounded-md" />
      </div>
      <button class="bg-[#2a7fd9] text-white py-3 rounded-md hover:shadow-md" @click="submit">Nạp ngay</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { changeBalance } from '@/services/user.service'
import { formatPrice } from '@/utils/formatPrice'
const props = defineProps(['user'])
const emits = defineEmits(['update', 'close'])
const balance = ref(0)
import { toast } from 'vue3-toastify'
const submit = async () => {
  if (confirm('Bạn có chắc chắn muốn nạp tiền chưa?')) {
    const res = await changeBalance(props.user.id, balance.value)
    toast(`Nạp thành công số tiền <strong>${formatPrice(balance.value)}VND</strong>`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      type: 'success',
    })
    emits('update', res.data)
  }
}
</script>
