<template>
  <div v-if="authStore.isLoggedIn" class="flex min-h-screen">
    <div class="flex flex-col flex-grow bg-[var(--bg-pri)]">
      <the-header />

      <div class="mb-auto flex">
        <the-sidebar />
        <div class="w-full pt-[72px] max-[400px]:pt-[200px]">
          <slot></slot>
        </div>
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script setup>
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import { authStore } from '@/stores/auth.store'
</script>
