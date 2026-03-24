<script setup>
import { useRoute } from 'vue-router';
import { productos } from '@/data/productos';
import { ref } from 'vue'

const route = useRoute()
const producto = ref({})

console.log(route.params.id) // accedemos a los parámetros de ruta, y luego al id (que definimos en router/index.js para la ruta productos/:id)
producto.value = productos.find(producto => producto.id == route.params.id)
</script>

<template>
  <div>
    <div>
      <h1>Producto: <strong>{{ producto.nombre }}</strong></h1>
      <h2>${{ producto.precio }}</h2>
      <p>{{ producto.descripcion }}</p>
      <p>Categoría del producto: {{ producto.categoria }}</p>
      <img :src="producto.imagen" alt="">
    </div>

    <RouterLink :to="{ name: 'opiniones', params: { id: route.params.id } }">Opiniones del producto</RouterLink>
    <RouterView /> <!-- para ver ruta anidada (opiniones) -->
  </div>
</template>

<style scoped></style>