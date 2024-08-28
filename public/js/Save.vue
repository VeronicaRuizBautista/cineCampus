<template>
    <header class="header-trailer">
      <router-link to="/" class="atras">
        <i class='bx bx-chevron-left'></i>
      </router-link>
      <h1 class="trailer">Se hizo la compra de su boleta correctamente</h1>
    </header>
</template>

<style scoped>
@import '../css/style.css';
</style>

<script>
import apis from './api.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Save',
  setup() {
    const route = useRouter();
    // const trailer = ref({
    //   trailer: '',  
    // });

    const seatReservation= async () => {
      try {
        // const titulo = route.currentRoute.value.params
        const response = await apis.saveBoleta(idFuncion, nombreAsiento)
        .then(response => {
            // Maneja la respuesta de la API si es necesario
            console.log('Boleta guardada exitosamente:', response.data);
        })
        .catch(error => {
            console.error('Error al guardar la boleta:', error);
        });
        // const result = response.data.data[0]
        // trailer.value = result;  

      } catch (error) {
        console.error('Error al comprar boleta', error);
      }
    };

    onMounted(() => {
        seatReservation();
    });

    return {
    //   trailer,
      seatReservation,
    };
  },
};

</script>