<template>
  <div class="mt-20">
    <todo-header title="todos"></todo-header>
    <todo-new-item v-model:newTodo="newTodo" @addNewItem="handleAddNewItem"></todo-new-item>
    <template v-for="item in todoItems" :key="item.id" class="flex justify-center">
      <todo-item
        :editable="item.editable"
        :checked="item.completed"
        :content="item.content"
        @delete="handleItemDelete(item)"
        @item-db-click="handleItemEdit(item)"
        @inputEditFinish="handleItemEditFinish($event, item)"
        @checkedChange="handleItemCompleted(item)"
      />
    </template>
    <Footer />

  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import TodoHeader from './TodoHeader.vue'
import TodoNewItem from './TodoNewItem.vue'
import TodoItem from './TodoItem.vue'
import  ITodoType  from './types'
import Footer from './Footer.vue'

import 'element-plus/es/components/notification/style/css'
import { ElNotification } from 'element-plus'
import { nanoid } from 'nanoid'

const newTodo = ref("")
const todoItems = ref<Array<ITodoType>>([]);

onMounted(() => {
  todoItems.value = localStorage.getItem('todoItems')
    ? JSON.parse(localStorage.getItem('todoItems') || '[]')
    : []
})


const handleAddNewItem = () => {
  if (newTodo.value == '') {
    ElNotification({
      title: '错误',
      message: '你什么都没有输入哦！',
      type: 'warning'
    })
    return
  }
  todoItems.value.push({
    id: nanoid(),
    content: newTodo.value,
    completed: false,
    editable: false
  })
  newTodo.value = ''
  localStorage.setItem('todoItems', JSON.stringify(todoItems.value))
}

const handleItemCompleted = (item: ITodoType) => {
  const matchTodoItem = todoItems.value.find((todo) => todo.id === item.id)
  if (!matchTodoItem) return
  matchTodoItem.completed = true
  localStorage.setItem('todoItems', JSON.stringify(todoItems.value))

}

const handleItemDelete = (item: ITodoType) => {
  todoItems.value = todoItems.value.filter(todo => todo.id !== item.id)
  localStorage.setItem('todoItems', JSON.stringify(todoItems.value))
}

const handleItemEdit = (item: ITodoType) => {
  const matchTodoItem = todoItems.value.find((todo) => todo.id === item.id)
  if (!matchTodoItem) return
  matchTodoItem.editable = true
}

const handleItemEditFinish = (value: string,item: ITodoType) => {
  const matchTodoItem = todoItems.value.find((todo) => todo.id === item.id)
  if (!matchTodoItem) return
  matchTodoItem.editable = false
  matchTodoItem.content = value
  localStorage.setItem('todoItems', JSON.stringify(todoItems.value))
}
</script>

<style scoped>

</style>
