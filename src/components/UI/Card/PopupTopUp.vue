<template>
  <div
    class="fixed top-0 left-0 fadeIn h-[100vh] bg-[#6d6d6d6e] z-[999] overflow-hidden w-full flex justify-center items-center"
    @click="$emit('close')"
  >
    <div class="bg-white w-[400px] rounded-xl py-5 gap-3 px-5 flex flex-col" @click.stop>
      <p class="font-semibold text-lg">{{ type === 'add' ? 'Nạp tiền' : 'Trừ tiền' }} cho user: {{ user.name }}</p>
      <p>
        Số tiền hiện tại: <span class="font-bold">{{ formatPrice(user.balance) }}</span>
      </p>
      <div class="flex flex-col">
        <p class="mb-2">
          Số tiền cần {{ type === 'add' ? 'nạp' : 'trừ' }}:
          <span class="text-green-600 font-semibold">{{ formatPrice(balance) }}</span>
        </p>
        <input v-model="balance" type="text" class="rounded-md" />
      </div>
      <AButton title="Xác nhận" @click="submit" />
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { changeBalance } from '@/services/user.service'
import { formatPrice } from '@/utils/formatPrice'
const props = defineProps(['user', 'type'])
const emits = defineEmits(['update', 'close'])
const balance = ref(0)
import AButton from '@/components/atoms/AButton.vue'
import { toast } from 'vue3-toastify'
const submit = async () => {
  if (confirm(`Bạn có chắc chắn muốn ${props.type === 'add' ? 'nạp' : 'trừ'} tiền cho user này?`)) {
    try {
      const res = await changeBalance(props.user.id, balance.value, props.type)
      if (props.type === 'add') {
        toast(`Nạp thành công số tiền <strong>${formatPrice(balance.value)}VND</strong>`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          type: 'success',
        })
      } else {
        toast(`Trừ thành công số tiền <strong>${formatPrice(balance.value)}VND</strong>`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          type: 'success',
        })
      }
      emits('update', res.data)
    } catch (error) {
      toast(`Nạp tiền không thành công, kiểm tra lại số tiền nap`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
      })
    }
  }
}
onBeforeMount(() => {
  console.log(props.type)
})
</script>
