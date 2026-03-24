<script setup>
// Recibiremos la prop 'producto' del componente padre
const props = defineProps(['producto'])
</script>

<template>
  <div class="card">
    <div class="card__header">
      <img :src="props.producto.imagen" :alt="`Imagen de ${props.producto.nombre}`">
      <h2>{{ props.producto.nombre }}</h2>
    </div>
    <div class="card__body">
      <h3>${{ props.producto.precio }}</h3>
      <p>{{ props.producto.descripcion }}</p>
      <RouterLink :to="{ name: 'detalle', params: { id: props.producto.id } }">Ver detalle</RouterLink>
    </div>
    <div class="card__footer">
      <p class="badge">{{ props.producto.categoria }}</p>
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

.card__header img {
  width: 100%;
  border-radius: 5px;
}
</style>