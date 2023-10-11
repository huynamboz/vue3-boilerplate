<template>
  <div class="flex p-7 flex-col gap-5">
    <p class="font-bold text-xl">Trang chủ</p>
    <!-- <div
      class="w-full h-[200px] bg-blue-300 rounded-xl flex justify-center items-center flex-col cursor-pointer"
      @click="showPopup = true"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
        <path
          fill="#ffffff"
          d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
        />
      </svg>
      <p class="font-bold text-2xl text-white">Gửi thông tin</p>
    </div> -->
    <div class="flex gap-5">
      <div class="flex gap-5 w-[50%] h-[200px] box-shadow-custom bg-white rounded-2xl p-5 items-center justify-between">
        <div>
          <p class="font-bold text-xl">Gửi thông tin cho chúng tôi</p>
          <p>Gửi ngay</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 12h16m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </div>
        <div
          class="h-full w-[30%] bg-gradient rounded-xl flex justify-center items-center cursor-pointer"
          @click="showPopup = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="#ffffff"
              d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
            />
          </svg>
        </div>
      </div>

      <div>
        
      </div>
    </div>
    <p class="font-bold text-xl">Thông tin đã gửi</p>
    <div v-if="listInformations.length == 0" class="w-full flex justify-center">Không có dữ liệu</div>
    <div v-else class="flex gap-5 flex-wrap">
      <div v-for="information in listInformations" :key="information.id">
        <InformationCard :information="information" />
      </div>
    </div>
  </div>
  <PopupInputData v-if="showPopup" @createInfor="submit" @close="showPopup = false" />
</template>

<script setup>
import InformationCard from '@/components/informations/InformationCard.vue'
import { ref, onBeforeMount } from 'vue'
import PopupInputData from '@/components/informations/PopupInputData.vue'
import { sendInformationApi } from '@/services/user.service'
import { useNotification } from '@kyvg/vue3-notification'
const notification = useNotification()

import { getListInformationsApi } from '@/services/user.service'

const listInformations = ref([])
const getListInfors = async () => {
  const res = await getListInformationsApi()
  listInformations.value = res.data.data
  console.log(listInformations.value)
}
onBeforeMount(() => {
  getListInfors()
})
const showPopup = ref(false)
const submit = async (data) => {
  try {
    const res = await sendInformationApi(data)
    notification.notify({
      title: 'Thành công',
      text: 'Gửi thành công',
    })
    showPopup.value = false
    listInformations.value.push(res.data)
  } catch (error) {
    console.log(error)
    if (error.response) {
      notification.notify({
        title: 'Lỗi',
        text: error.response.data.message,
      })
    }
  }
}
</script>
