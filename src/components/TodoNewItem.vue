<template>
  <div class="flex justify-center">
    <input type="text"
           placeholder="有什么事需要完成吗？"
           :value="newTodo"
           class="p-4 mt-5 bg-gray-100 border border-gray-500 rounded-sm outline-none w-96"
           :class="isDark ? 'bg-gray-700 text-white' : ''"
           @input="handleInputChange($event)"
           @keyup.enter="handleAddNewItem "/>
  </div>
</template>

<script setup lang="ts">
import { isDark } from '../composables/dark';

defineProps({
  newTodo: String
})

const emit = defineEmits(['update:newTodo', 'addNewItem'])


const handleInputChange = ($event: any) => {
  emit('update:newTodo', $event.target.value)
}

const handleAddNewItem = () => {
  emit('addNewItem')
}
</script>

<style scoped>

</style>
