<template>
  <div class="flex justify-between items-center pr-5 h-16 w-96 mx-auto mt-2 bg-gray-100 border-b rounded-sm outline-none border-gray-500 ">
    <todo-item-label
      v-show="!editable"
      :content="content"
      :checked="completed"
      @checked-change="handleCheckedChange"
      @db-click="handleDbClick"
    >
    </todo-item-label>
    <input
      ref="refInput"
      class="relative left-4 w-5/6 bg-gray-100 border-b rounded-sm outline-none border-gray-500"
      v-show="editable"
      type="text"
      :value="content"
      @input="handleInputChange($event)"
      @keyup.enter="handleEditFinish()"
    />
    <div @click="handleDelete">
      <el-icon :size="30"><Close /></el-icon>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue' 
import TodoItemLabel from './TodoItemLabel.vue'

const emit = defineEmits(['delete', 'itemDbClick', 'inputEditFinish', "checkedChange"])

const prop = defineProps({
  editable: Boolean,
  checked: Boolean,
  content: String
})

const completed = ref(prop.checked)
const refInput = ref()

const handleCheckedChange = () => {
  completed.value = !completed.value
  emit('checkedChange')
}
const handleDelete = () => {
  emit('delete')
}

const handleInputChange = ($event: any) => {
  
}

const handleDbClick = () => {
  emit('itemDbClick')
  nextTick(() => {
    refInput.value.focus()
  })
}

const handleEditFinish = () => {
  emit('inputEditFinish', refInput.value.value)
}
</script>

<style scoped>

</style>