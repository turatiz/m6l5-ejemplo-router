<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.params.id) // accedemos a los parámetros de ruta, y luego al id (que definimos en router/index.js para la ruta productos/:id)
</script>

<template>
  <div>
    <h1>Producto con id: <strong>{{ route.params.id }}</strong></h1>
  </div>
</template>

<style scoped></style>