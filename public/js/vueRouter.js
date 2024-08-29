import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import Pelicula from './Pelicula.vue';
import Asiento from './Asiento.vue';
import Save from './Save.vue';
// import Trailer from './Trailer.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pelicula/v2/:titulo', name: 'Pelicula', component: Pelicula, props: true },
  { path: '/asiento/v1', name: 'Asiento', component: Asiento, props: true },
  { path: '/asiento/v2', name: 'Save', component: Save, props: (route) => ({ idFuncion: route.query.idFuncion, nombreAsiento: route.query.nombreAsiento }) },
  // { path: '/pelicula/v2/:titulo', name: 'Trailer', component: Trailer, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;