<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { productos } from '@/data/productos';
</script>

<template>
  <div>
    <h1>Listado de productos</h1>
    <!-- Importante: pasarle la prop 'producto' al componente ProductCard -->
    <div class="row">
      <div class="col" v-for="producto in productos" :key="producto.id">
        <ProductCard :producto="producto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  /* permite que items flex cambien de fila cuando se acabe el espacio */
  gap: 1rem;
  justify-content: center;
}

.col {
  flex: 1 1 auto
}
</style>