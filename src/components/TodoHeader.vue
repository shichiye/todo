<template>
  <div>
    <h1 class="text-6xl text-center font-extralight" :class="isDark ? 'text-white' : ''">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { isDark } from '../composables/dark'

defineProps({
  title: String
})

</script>

<style scoped>

</style>
