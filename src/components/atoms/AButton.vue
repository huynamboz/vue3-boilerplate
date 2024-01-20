<template>
  <button class="bg-[#2a7fd9] text-white py-3 rounded-md hover:shadow-md">{{ title }}</button>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>

</style>