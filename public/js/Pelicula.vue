<template>
    <header class="header">
      <a href="#"  @click="goBack" class="atras">
        <i class='bx bx-chevron-left'></i>
      </a>
      <h2 class="cinema-selection">Cinema Selection</h2>
      <a href="#" class="tres-puntos">
        <i class='bx bx-dots-vertical-rounded'></i>
      </a>
    </header>
    
    <div class="info-peli">
      <img :src="pelicula.img" alt="Pelicula Imagen">
      <div class="box-principal">
        <div class="box-principal2">
          <h2 class="titulo">{{ pelicula.titulo }}</h2>
          <p v-if="pelicula && Array.isArray(pelicula.genero)" class="genero">
            {{ pelicula.genero.join(', ') }}
          </p>
        </div>
        <a :href="pelicula.trailer">
          <button class="watch-trailer">
            <i class='bx bxs-right-arrow' style='color:#ffffff'></i>
            <p class="watch-trailer1">Watch Trailer</p>
          </button>
        </a>
      </div>
      <div class="descripcion">
        <p>{{ pelicula.sinopsis }}</p>
      </div>
    </div>
  
    <div class="cast-parent">
      <h1 class="cast">Cast</h1>
      <div class="cast-container">
        <div v-for="actor in pelicula.reparto" :key="actor.nombre" class="cast-images">
          <img class="cast-images-child" :src="actor.img" alt="Actor Imagen">
          <div class="names">
            <p class="actor-name">{{ actor.nombre }}</p>
            <p class="actor-role">{{ actor.personaje }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cinema-parent">
        <h1>Cinema</h1>
        <div class="cinemas-container">
            <div class="Cinecampus">
                <div class="texto">
                    <h4 >Cinecampus</h4>
                    <p>Staff Lines, Saddar, Karachi</p>
                </div>
                <img class="Cinecampus-item" src="../storage/img/Rectangle 376.png" alt="">
            </div>
            <div class="neuplex">
                <div class="texto">
                    <h4 >Neuplex</h4>
                    <p>Khayaban - e Shaheen, Dha Phase 8</p>
                </div>
                <img class="Cinecampus-item" src="../storage/img/Rectangle 377.png" alt="">
            </div>
        </div>
    </div>
    <section class="book-now">
        <a class="box-rojo" href="#" @click="redirectToAsiento(pelicula._id)">
            <button>
                <h3>Book Now</h3>
            </button> 
        </a>
    </section>
</template>

<style scoped>
@import '../css/pelicula.css';
</style>

<script>
import apis from './api.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Pelicula',
  setup() {
    const route = useRouter();
    const pelicula = ref({
      img: '',
      titulo: '',
      genero: [],
      sinopsis: '',
      reparto: [],
      horarioProyeccion: [],
    });

    const fetchPeliculaData = async () => {
      try {
        const titulo = route.currentRoute.value.params
        sessionStorage.setItem('key', titulo.titulo);
        const response = await apis.getPeliculaByTittle(titulo.titulo); 
        const result = response.data.data[0]
        pelicula.value = result;  

      } catch (error) {
        console.error('Error al cargar los datos de la película:', error);
      }
    };
    const redirectToAsiento = async ( idFuncion) => {
      console.log(idFuncion)
      sessionStorage.setItem('idFuncion', idFuncion);
      try {
        route.push({ name: 'Asiento', query: {idFuncion  } });
      } catch (error) {
        console.error('Error al redireccionar a la película', error);
      }
    };
    const goBack = () => {
      route.back();
    };
    onMounted(() => {
      fetchPeliculaData();
    });

    return {
      pelicula,
      fetchPeliculaData,
      redirectToAsiento,
      goBack
    };
  },
};

</script>
