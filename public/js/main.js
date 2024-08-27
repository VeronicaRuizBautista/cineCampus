import { createApp } from 'vue';
import App from './App.vue'; // Componente raíz
import router from './vueRouter.js'; // Importa el router configurado

const app = createApp(App);
console.log("hii")

app.use(router); // Usa el router en la aplicación
app.mount('#app'); // Monta la aplicación en el div con id 'app' en index.html