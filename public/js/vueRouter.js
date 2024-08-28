import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import Pelicula from './Pelicula.vue';
// import Trailer from './Trailer.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pelicula/v2/:titulo', name: 'Pelicula', component: Pelicula, props: true },
  // { path: '/pelicula/v2/:titulo', name: 'Trailer', component: Trailer, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;