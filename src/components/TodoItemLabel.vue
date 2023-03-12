<template>
  <div class="flex items-center h-16">
    <el-image v-show="checked" :src="checkedImg" @click="handleCheckChange"></el-image>
    <el-image v-show="!checked" :src="uncheckedImg" @click="handleCheckChange"></el-image>
    <div class="relative cursor-pointer left-3" :class="{'line-through': checked, 'text-gray-400': checked, 'text-black': isDark}" @dblclick="handleDbClick">
      {{ content }}
    </div>
    <div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { isDark } from '../composables/dark';


const emit = defineEmits(['checkedChange', 'dbClick'])

const prop = defineProps({
  content: String,
  checked: Boolean
})


const uncheckedImg = 'data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23272727%22%20stroke-width%3D%223%22%2F%3E%3C%2Fsvg%3E'
const checkedImg = 'data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23272727%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%2301997d%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E'


const handleCheckChange = () => {
  emit('checkedChange')
  nextTick(() => {

  })
  if (prop.checked == true) {

  }
}

const handleDbClick = () => {
  emit('dbClick')
}
</script>

<style scoped></style>
