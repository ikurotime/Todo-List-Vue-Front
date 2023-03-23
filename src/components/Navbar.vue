<script lang="ts" setup>
import { useGeneralStore } from '../store'

const store = useGeneralStore()
</script>
<template>
  <nav>
    <span>To do list with Vue and Redis</span>
    <span v-if="store.username">Logged in as: {{ store.username }}</span>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #1b1b1b;
  gap: 10px;
}
</style>
