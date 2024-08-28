import { createApp } from 'vue';
import App from './App.vue';
import router from './vueRouter.js';

const app = createApp(App);
console.log("hii")

app.use(router);
app.mount('#app');