<script setup lang="ts">
import { isDark, toggleDark } from '../composables/dark'
</script>

<template>
  <nav class="flex justify-center m-5">
    <button @click="toggleDark()">
      {{ isDark ? '🌞' : '🌙'   }}
    </button>
  </nav>
</template>
