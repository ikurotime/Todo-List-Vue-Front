<script setup lang="ts">
import Inputs from './components/Inputs.vue'
import Welcome from './components/Welcome.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import { useGeneralStore } from './store'
const store = useGeneralStore()
</script>

<template>
  <div class="container">
    <Navbar />
    <template v-if="store.username">
      <Inputs />
    </template>
    <template v-else>
      <Welcome />
    </template>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
}
</style>
