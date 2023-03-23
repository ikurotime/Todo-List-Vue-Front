<script setup lang="ts">
import { ref } from 'vue'
import { useGeneralStore } from '../store'
const user = ref('')
const store = useGeneralStore()
const handleChange = (e: any) => (user.value = e.target.value)
const handleSubmit = () => {
  store.setUsername(user.value)
}
</script>
<template>
  <div id="container">
    <div class="card">
      <h1>Redis To Do App</h1>
      <div id="input_container">
        <span>Current user: {{ user }}</span>
        <input
          @input="handleChange"
          type="text"
          name="user_name"
          id="user_name"
          maxlength="12"
        />
        <button class="login-button" @click="handleSubmit">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#input_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
#user_name {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1b1b1b;
}
.card {
  border: 1px solid #1b1b1b;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: #1b1b1b;
}
.login-button {
  padding: 8px 20px;
  font-weight: 700;
}
</style>
