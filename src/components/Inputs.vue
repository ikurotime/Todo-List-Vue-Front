<script setup lang="ts">
import { ref, watch } from 'vue'
import Tasks from './Tasks.vue'
import { useGeneralStore } from '../store'
//const inputValue = ref('')
const store = useGeneralStore()
//const user = store.username
const handleChange = (e: any) => {
  store.setTask(e.target.value)
}
/* watch(
  () => store.task,
  () => {
    console.log('task changed', store.task)
  }
) */
</script>
<template>
  <div id="container">
    <label for="input_container">Task</label>
    <input id="input_container" @input="handleChange" type="text" />
    <Tasks />
  </div>
</template>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
}
#input_container {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1b1b1b;
}
</style>
