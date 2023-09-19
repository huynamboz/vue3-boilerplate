<template>
  <div class="flex min-h-screen">
    <div class="flex flex-col flex-grow bg-[#f4f6f9]">
      <the-header />

      <div class="mb-auto flex">
        <the-sidebar />
        <div class="w-full pt-[72px]">
          <router-view :key="$router.fullPath" />
        </div>
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'

export default {
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
}
</script>
