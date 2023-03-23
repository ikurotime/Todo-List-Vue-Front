<script setup lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { useInfiniteQuery, useMutation, useQuery } from 'vue-query'
import { useGeneralStore } from '../store'
import { getTodos } from '../functions'

const store = useGeneralStore()
const user = store.username
const taskList = store.taskList
const refetch = () => {
  getTodos(user).then((data) => {
    store.setTaskList(
      data.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
    )
  })
}
onMounted(() => {
  refetch()
})
const handleDelete = (taskId: string) => {
  fetch(import.meta.env.VITE_BACKEND_URL + '/delete/' + store.username, {
    method: 'DELETE',
    body: JSON.stringify({
      taskId: taskId
    })
  }).then(() => {
    //store.deleteTask(taskId)
    refetch()
  })
}
const handleSubmit = () => {
  const task = store.task

  fetch(import.meta.env.VITE_BACKEND_URL + '/post/' + user, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: task,
      id: store.taskList.length + 1,
      taskId: crypto.randomUUID()
    })
  }).then(() => {
    refetch()
  })
}

/* watch(
  () => store.taskList,
  () => {
    console.log('taskList changed', store.taskList)
  }
) */
</script>
<template>
  <button id="add_task" @click="handleSubmit">Add</button>
  <div v-if="store.taskList">
    <ul>
      <li v-for="task in store.taskList" :key="task.id">
        {{ task.name }}
        <button @click="handleDelete(task.taskId)">Delete</button>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No tasks</p>
  </div>
</template>

<style scoped>
#add_task {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1b1b1b;
}
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
li {
  display: flex;
  padding: 10px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #313131;
}
</style>
