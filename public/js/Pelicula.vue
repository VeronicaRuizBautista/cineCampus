<template>
    <header class="header">
      <a href="#" class="atras" @click="$router.go(-1)">
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
          <p class="genero">{{ pelicula.genero.join(', ') }}</p>
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
        <a class="box-rojo" href="#">
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

export default {
  name: 'Pelicula',
  data() {
    return {
      pelicula: {
        img: '',
        titulo: '',
        genero: [],
        sinopsis: '',
        reparto: [],
        horarioProyeccion: [],
        trailer: ''  // Agrega la URL del tráiler aquí
      }
    }
  },
  created() {
    this.fetchPeliculaData();
  },
  methods: {
    async fetchPeliculaData() {
      try {
        const response = await apis.getPeliculaByTittle();  // Reemplaza con la URL real de tu API
        const result = await response.json();
        // Asigna el primer objeto del array de datos al modelo
        if (result.status === 200 && result.data.length > 0) {
          this.pelicula = result.data[0];  // Cambia esto si deseas manejar más de una película
        }
      } catch (error) {
        console.error('Error al cargar los datos de la película:', error);
      }
    }
  }
}
</script>
