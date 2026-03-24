<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { productos } from '@/data/productos';
</script>

<template>
  <div>
    <h1>Listado de productos</h1>
    <!-- Importante: pasarle la prop 'producto' al componente ProductCard -->
    <ProductCard v-for="producto in productos" :key="producto.id" :producto="producto" />
  </div>
</template>

<style scoped></style>