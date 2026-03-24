<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* estilos de transiciones entre navegación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
