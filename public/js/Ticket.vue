<template>
        <header class="header">
      <a  @click.prevent="goHome" class="atras">
        <i class='bx bx-chevron-left'></i>
      </a>
      <h2 class="cinema-selection"> Ticket</h2>
      <a href="#" class="tres-puntos">
        <i class='bx bx-dots-vertical-rounded'></i>
      </a>
    </header>
    <main>
        <div class="ticket">
            <div class="img">
                <img :src="pelicula.img" alt="Puss in Boots">
            </div>
            <div class="titulo">
                <h2>{{ pelicula.titulo }}</h2>
                <p>Show this ticket at the entrance</p>
            </div>
            <div class="cinema">
                <div class="texto">
                  <p>Cinema:</p>
                  <h3> HARTONO MALL 12</h3>
                </div>
                <img src="../storage/img/Rectangle 376.png" alt="">
            </div>
            <div class="date">
                <div class="box1">
                  <p>Date</p>
                  <p>Time</p>
                </div>
                <div class="box2">
                  <h3>{{ selectedDayStorage }}</h3>
                  <h3>{{ selectedHourStorage }}</h3>
                </div>
            </div>
            <div class="date">
                <div class="box1">
                  <p>Cinema Hall #</p>
                  <p>Seat</p>
                </div>
                <div class="box2">
                  <h3> Cinema A</h3>
                  <h3>{{ selectedSeatsStr }}</h3>
                </div>
            </div>
            <div class="date">
                <div class="box1">
                  <p>Cost</p>
                  <p>Order ID</p>
                </div>
                <div class="box2">
                  <h3>{{ selectedTotalPriceStorage }}</h3>
                  <h3> 12345678</h3>
                </div>
            </div>
            <div class="linea">
                <img src="../storage/img/Line61.png" alt="">
            </div>
            <img src="../storage/img/Barcode.png" alt="">
        </div>
    </main>
</template>

<style scoped>
@import '../css/Ticket.css';
</style>

<script>
import apis from './api.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Ticket',
  setup() {
    const router = useRouter();
    let selectedDayStorage = sessionStorage.getItem('selectedDayStorage');
    let selectedHourStorage = sessionStorage.getItem('selectedHourStorage');
    let selectedSeatsStorage = sessionStorage.getItem('selectedSeatsStorage');
    const selectedSeatsArray = JSON.parse(selectedSeatsStorage);
    const selectedSeatsStr = selectedSeatsArray.join(', ');
    let selectedTotalPriceStorage = sessionStorage.getItem('selectedTotalPriceStorage');
    const pelicula = ref({
      img: '',
      titulo: '',
      genero: [],
      sinopsis: '',
      reparto: [],
      horarioProyeccion: [],
    });

    const dataPeli = async () => {
      try {
        const titulo = sessionStorage.getItem('key');
        console.log(titulo)
        const response = await apis.getPeliculaByTittle(titulo); 
        const result = response.data.data[0]
        pelicula.value = response.data.data[0] || { horarioProyeccion: [] };  
      } catch (error) {
        console.error('Error al cargar los datos de los asientos:', error);
      }
    };
    const goHome = () => {
      router.push('/');
    };

    onMounted(() => {
        dataPeli()
    });

    return {
      pelicula,
      dataPeli,
      selectedHourStorage,
      selectedDayStorage,
      selectedSeatsStorage,
      goHome,
      selectedSeatsStr,
      selectedTotalPriceStorage
    };
  },
};

</script>