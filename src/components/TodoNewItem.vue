<template>
  <div class="flex justify-center">
    <input type="text"
           placeholder="有什么事需要完成吗？"
           :value="newTodo"
           class="text-center w-96 p-4 mt-5 bg-gray-100 border rounded-sm outline-none border-gray-500"
           @input="handleInputChange($event)"
           @keyup.enter="handleAddNewItem "/>
  </div>
</template>

<script setup lang="ts">
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