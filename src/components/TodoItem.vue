<template>
  <div class="flex items-center justify-between h-16 pr-5 mx-auto mt-2 bg-gray-100 border-b border-gray-500 rounded-sm outline-none w-96 "
    :class="isDark ? 'bg-gray-700 text-white' : ''">
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
      class="relative w-5/6 bg-gray-300 border-b border-gray-500 rounded-sm outline-none left-4"
      :class="isDark ? 'bg-gray-900	text-gray-200' : ''"
      v-show="editable"
      type="text"
      :value="content"
      @keyup.enter="handleEditFinish()"
      @blur="handleEditFinish()"
    />
    <div @click="handleDelete">
      <el-icon :size="30"><Close /></el-icon>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue' 
import TodoItemLabel from './TodoItemLabel.vue'
import { ElNotification } from 'element-plus'
import { isDark } from '../composables/dark';


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

const handleDbClick = () => {
  emit('itemDbClick')
  nextTick(() => {
    refInput.value.focus()
  })
}

const handleEditFinish = () => {
  if (!refInput.value.value) {
    ElNotification({
      title: '错误',
      message: '你什么都没有输入哦！',
      type: 'warning'
    })
    return
  }
  console.log(refInput.value.value)
  emit('inputEditFinish', refInput.value.value)
}
</script>

<style scoped>

</style>
