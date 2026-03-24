import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import ProductoDetalleView from '@/views/ProductoDetalleView.vue';
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
    path: '/productos/:id',
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
