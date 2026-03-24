import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import ProductoDetalleView from '@/views/ProductoDetalleView.vue';
import ProductosView from '@/views/ProductosView.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/', // www.misitio.com/
    component: HomeView,
  },
  {
    path: '/contacto',
    component: ContactView,
  },
  {
    path: '/productos',
    component: ProductosView,
  },
  {
    path: '/productos/:id',
    name: 'detalle',
    component: ProductoDetalleView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
