<script setup>

</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/productos">Productos</RouterLink>
      </li>
      <li>
        <RouterLink to="/contacto">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: antiquewhite;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.285);
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style-type: none;
}
</style>