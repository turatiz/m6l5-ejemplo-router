<script setup>
import { productos } from '@/data/productos';
</script>

<template>
  <div>
    <h1>Listado de productos</h1>
    <div class="card" v-for="producto in productos" :key="producto.id">
      <div class="card__header">
        <h2>{{ producto.nombre }}</h2>
      </div>
      <div class="card__body">
        <h3>${{ producto.precio }}</h3>
        <p>{{ producto.descripcion }}</p>
        <RouterLink :to="{ name: 'detalle', params: { id: producto.id } }">Ver detalle</RouterLink>
      </div>
      <div class="card__footer">
        <p class="badge">{{ producto.categoria }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  width: calc((100vw/3) - 0.5rem);
  display: inline-block;
}

.badge {
  font-size: 0.8rem;
  background-color: gray;
  color: white;
  display: inline-block;
  padding: 0.2rem 0.3rem;
  border-radius: 50px;
}
</style>