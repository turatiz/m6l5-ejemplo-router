<script setup>
import { useRoute } from 'vue-router';
import { productos } from '@/data/productos';
import { ref } from 'vue'

const route = useRoute() // devuelve un objeto reactivo con la informacion de la ruta actual. Tiene propiedades como name, params, query, actualiza su componente si alguna cambia
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

    <RouterLink :to="{ name: 'opiniones', params: { id: route.params.id } }" v-if="route.name !== 'opiniones'">Opiniones
      del producto</RouterLink>
    <!-- para ver ruta anidada (opiniones) -->
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <RouterLink :to="{ name: 'detalle', params: { id: route.params.id } }" v-if="route.name === 'opiniones'">Cerrar
      opiniones</RouterLink>
  </div>
</template>

<style scoped>
/* estilos de transiciones entre navegación */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>