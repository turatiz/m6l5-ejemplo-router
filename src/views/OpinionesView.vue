<script setup>
import { ref } from 'vue'
import { productos } from '@/data/productos';

const opiniones = ref([])

const props = defineProps(['id'])

opiniones.value = productos.find(producto => producto.id == props.id).opiniones
</script>

<template>
  <div>
    <h1>Opiniones del producto</h1>
    <ul>
      <li v-for="opinion in opiniones" :key="`${opinion.usuario}-${opinion.comentario}`">
        {{ opinion.usuario }} opina {{ opinion.comentario }} - Calificación: {{ opinion.calificacion }}/5
      </li>
    </ul>
  </div>
</template>

<style scoped></style>