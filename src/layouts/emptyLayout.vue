<template>
  <div v-if="!authStore.isLoggedIn">
    <slot></slot>
  </div>
</template>
<script setup>
import { authStore } from '@/stores/auth.store'
</script>
