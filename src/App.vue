<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navBarComponent from './components/navBar.vue'
import footerApp from '@/components/footer.vue'

</script>

<template>
  <header>
    <navBarComponent />
  </header>

  <RouterView />

  <footer>
    <footerApp/>
  </footer>
</template>

<style scoped>

</style>