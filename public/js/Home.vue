<template>
    <body>
      <section class="home">
      <section class="encabezado">
        <div class="info-perfil">
          <div class="datos">
            <img class="foto-perfil" loading="lazy" alt="" src="../storage/img/fotoperfil.png" />
            <div class="texto-saludo">
              <h3 class="hi-nombre">Hi, <span>{{ nombreUsuario }}</span>!</h3>
              <h3 class="lets-watch-movie">Let’s watch movie together!</h3>
            </div>
            <div class="box-campana">
              <div class="campanita">
                <i class='bx bx-bell' style='color:#ffffff'></i>
              </div>
            </div>
          </div>
          <div class="search">
            <div class="search-inner">
              <i class='bx bx-search-alt-2' style='color:#fffdfdb7'></i>
            </div>
            <input 
              class="search-movie-cinema" 
              placeholder="Search movie, cinema, genre..." 
              type="text" 
              v-model="searchTerm" 
              @keyup.enter="searchMovies"
            />
          </div>
        </div>
      </section>
      <div class="titulo">
        <h2 class="now-playing1">Now playing</h2>
        <div class="see-all-movies">
          <a href="#" class="see-all">See all</a>
        </div>
      </div>
      <section class="movie-posters">
        <div class="search-icon">
          <div class="ejemplo-poster" v-for="pelicula in filteredPeliculas" :key="pelicula._id">
            <div class="box-img" @click="redirectToPelicula(pelicula.titulo)">
              <img class="poster1" :src="pelicula.img" alt="" loading="lazy"/>
            </div>
            <div class="detalles-movie">
              <h2 class="titulo-poster">{{ pelicula.titulo }}</h2>
              <!-- <h1 class="genero-poster">{{ pelicula.genero.join(', ') }}</h1> -->
            </div>
          </div> 
        </div>
      </section>
      <section class="Proximamente">
        <div class="movie-actions">
          <h2 class="coming-soon">Coming soon</h2>
          <a href="#" class="see-all">See all</a>
        </div>
      </section>
      <section class="recommended-movies">
        <div class="cart" v-for="pelicula in filteredRecommendedMovies" :key="pelicula._id">
          <div class="cart-item">
            <img :alt="pelicula.titulo" :src="pelicula.img" />
          </div>
          <div class="recommendation-details">
            <div class="recommendation-title">
              <div class="furious-10-2023">{{ pelicula.titulo }}</div>
               <!-- <div class="action-adventure">{{ pelicula.genero.join(', ') }}</div> -->
            </div>
          </div>
        </div>
      </section>
      </section>
      <footer class="rectangle-parent">
          <div class="tabs-content-parent">
          <div class="tabs-content">
              <div class="home-tab">
              <a class="icon-footer" href="#"><i class='bx bxs-home' style='color:#fe0000'></i></a>
              <a class="icon-footer" href="#"><i class='bx bx-search-alt-2' style='color:#fffdfdb7'></i></a>
              <a class="icon-footer" href="#"><i class='bx bx-film' style='color:#fffdfdb7'></i></a>
              <a class="icon-footer" href="#"><i class='bx bx-user' style='color:#fffdfdb7'></i></a>
              </div>
          </div>
          <div class="navigation-labels">
              <div class="home1">Home</div>
              <div class="browse">Browse</div>
              <div class="tickets">Tickets</div>
              <div class="profile">Profile</div>
          </div>
          </div>
      </footer>
    </body>
</template>

<script>
import apis from './api.js'
import { ref, onMounted, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const nombreUsuario = ref('Ferrucio Tuccine');
    const peliculas = ref([]);
    const searchTerm = ref('');
    const recommendedMovies = ref([
      { title: 'Furious 10 (2023)', genre: 'Action, Adventure', imgSrc: 'storage/img/miniatura.png' },
    ]);

    const obtenerNombreUsuario = async () => {
      try {
        const response = await apis.getUsername();
        nombreUsuario.value = response.data; // Actualizar el nombre del usuario
      } catch (error) {
        console.error('Error al obtener el nombre del usuario', error);
      }
    };

    const obtenerPeliculas = async () => {
      try {
        const response = await apis.getAllPeliculas();
        peliculas.value = response.data.data; 
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    };

    const comingSoon = async () => {
      try {
        const response = await apis.commingSoonPeliculas();
        recommendedMovies.value = response.data.data; // Actualizar el array de películas
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    };
    const redirectToPelicula = async (titulo) => {
      try {
        router.push({ name: 'Pelicula', params: { titulo } });
      } catch (error) {
        console.error('Error al redireccionar a la película', error);
      }
    };

        // Función para realizar la búsqueda cuando se presiona "Enter"
        const searchMovies = () => {
      // Los resultados se actualizan automáticamente porque usamos `computed`
      // para filtrar las películas y las películas recomendadas
    };
     // Computed properties para filtrar las películas
    const filteredPeliculas = computed(() => {
      const term = searchTerm.value.toLowerCase();
      return peliculas.value.filter(pelicula =>
        term === '' || pelicula.titulo.toLowerCase().includes(term) ||
        pelicula.genero.some(g => g.toLowerCase().includes(term))
      );
    });

    const filteredRecommendedMovies = computed(() => {
      const term = searchTerm.value.toLowerCase();
      return recommendedMovies.value.filter(pelicula =>
        term === '' || pelicula.titulo.toLowerCase().includes(term)
      );
    });

    onMounted(() => {
      obtenerNombreUsuario();
      obtenerPeliculas();
      comingSoon();
    });

    return {
      nombreUsuario,
      peliculas,
      recommendedMovies,
      redirectToPelicula,
      searchTerm,
      filteredPeliculas,
      filteredRecommendedMovies,
      searchMovies
    };
  },
};

</script>

<style scoped>
@import '../css/style.css';
</style>