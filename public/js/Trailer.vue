<template>
    <header class="header-trailer">
      <router-link to="/" class="atras">
        <i class='bx bx-chevron-left'></i>
      </router-link>
      <h1 class="trailer">Tráiler</h1>
    </header>
    <div class="box-trailer">
        <iframe :src="pelicula.trailer"></iframe>
    </div>
</template>

<style scoped>
@import '../css/style.css';
</style>

<script>
import apis from './api.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Trailer',
  setup() {
    const route = useRouter();
    const trailer = ref({
      trailer: '',  
    });

    const fetchtrailerData = async () => {
      try {
        const titulo = route.currentRoute.value.params
        const response = await apis.getPeliculaByTittle(titulo.titulo); 
        const result = response.data.data[0]
        trailer.value = result;  

      } catch (error) {
        console.error('Error al cargar los datos de la película:', error);
      }
    };

    onMounted(() => {
      fetchtrailerData();
    });

    return {
      trailer,
      fetchtrailerData,
    };
  },
};

</script>
