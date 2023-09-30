<template>
  <div class="">
    <div class="w-[180px]"></div>
    <div
      class="w-[130px] h-fit bg-white fixed top-[100px] left-6 z-[50] rounded-2xl shadow-md max-[400px]:w-[90vw] max-[400px]:relative"
    >
      <div class="flex justify-between"></div>
      <div class="mt-[10px] py-5 px-5 flex flex-col gap-2 max-[400px]:flex-row max-[400px]:justify-around">
        <router-link
          to="/"
          class="hover:bg-slate-100 cursor-pointer py-3 rounded-[8px] items-center gap-3 flex flex-col"
          :class="{ 'bg-[#5d87ff_!important] text-white hover:bg-[#5d87ff]': isDashboard }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <defs><path id="solarHomeBoldDuotone0" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z" /></defs>
            <g fill="currentColor">
              <path
                fill-rule="evenodd"
                d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172ZM12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5Zm1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597Z"
                clip-rule="evenodd"
              />
              <g fill-rule="evenodd" clip-rule="evenodd" opacity=".5">
                <use href="#solarHomeBoldDuotone0" />
                <use href="#solarHomeBoldDuotone0" />
              </g>
              <path
                d="M12.05 13.25c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098ZM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3Z"
                opacity=".5"
              />
            </g>
          </svg>
          Trang chủ
        </router-link>
        <router-link
          v-if="user?.role == 'ADMIN'"
          to="/users"
          class="hover:bg-slate-100 cursor-pointer py-3 rounded-[8px] flex text-center items-center gap-3 flex-col"
          :class="{ 'bg-[#5d87ff_!important] text-white hover:bg-[#5d87ff]': isUsers }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M1 18q-.425 0-.713-.288T0 17v-.575q0-1.1 1.1-1.763T4 14q.325 0 .613.025t.562.075q-.35.5-.513 1.075T4.5 16.4V18H1Zm6 0q-.425 0-.713-.288T6 17v-.6q0-1.625 1.663-2.638T12 12.75q2.7 0 4.35 1.012T18 16.4v.6q0 .425-.288.713T17 18H7Zm12.5 0v-1.6q0-.65-.175-1.225t-.5-1.075q.275-.05.563-.075T20 14q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18h-3.5ZM4 13q-.825 0-1.413-.588T2 11q0-.825.588-1.413T4 9q.825 0 1.413.588T6 11q0 .825-.588 1.413T4 13Zm16 0q-.825 0-1.413-.588T18 11q0-.825.588-1.413T20 9q.825 0 1.413.588T22 11q0 .825-.588 1.413T20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Z"
            />
          </svg>
          Tài khoản
        </router-link>
        <div class="hover:bg-slate-100 cursor-pointer py-3 text-center rounded-[8px] flex items-center gap-3 flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M2 6V1h5v2H4v3H2Zm18 0V3h-3V1h5v5h-2ZM2 23v-5h2v3h3v2H2Zm15 0v-2h3v-3h2v5h-5ZM5 20V4h14v16H5Zm4-10h6V8H9v2Zm0 3h6v-2H9v2Zm0 3h6v-2H9v2Z"
            />
          </svg>
          Quản lý
        </div>
      </div>
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
const user = computed(() => authStore.value.user)
onBeforeMount(() => {
  console.log(user.value, route)
})
</script>
