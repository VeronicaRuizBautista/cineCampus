<template>
    <header>
        <div class="box1">
            <a href="#" @click="goBack"><i class='bx bx-chevron-left'></i></a>
            <h2>Choose Seat</h2>
            <i class='bx bx-dots-vertical-rounded'></i>
        </div>
        <div class="screen">
            <img src="../storage/img/Vector 259.png" alt="linea-roja">
            <h5>Screen This Way</h5>
        </div>
    </header>
    <main>
    <section class="asiento-vip">
        <div class="a">
            <div class="letra">
                <p>A</p>
            </div>
            <div class="asientos">
                <div :class="getSeatClass('A1')" @click="toggleSeatSelection('A1')" data-seat="A1">
                    <p v-if="selectedSeat === 'A1'">1</p>
                </div>
                <div :class="getSeatClass('A2')" @click="toggleSeatSelection('A2')" data-seat="A2">
                    <p v-if="selectedSeat === 'A2'">2</p>
                </div>
                <div :class="getSeatClass('A3')" @click="toggleSeatSelection('A3')" data-seat="A3">
                    <p v-if="selectedSeat === 'A3'">3</p>
                </div>
                <div :class="getSeatClass('A4')" @click="toggleSeatSelection('A4')" data-seat="A4">
                    <p v-if="selectedSeat === 'A4'">4</p>
                </div>
                <div :class="getSeatClass('A5')" @click="toggleSeatSelection('A5')" data-seat="A5">
                    <p v-if="selectedSeat === 'A5'">5</p>
                </div>
            </div>
        </div>
        <div class="b">
            <div class="letra">
                <p>B</p>
            </div>
            <div class="asientos">
                <div :class="getSeatClass('B1')" @click="toggleSeatSelection('B1')" data-seat="B1">
                    <p v-if="selectedSeat === 'B1'">1</p>
                </div>
                <div :class="getSeatClass('B2')" @click="toggleSeatSelection('B2')" data-seat="B2">
                    <p v-if="selectedSeat === 'B2'">2</p>
                </div>
                <div :class="getSeatClass('B3')" @click="toggleSeatSelection('B3')" data-seat="B3">
                    <p v-if="selectedSeat === 'B3'">3</p>
                </div>
                <div :class="getSeatClass('B4')" @click="toggleSeatSelection('B4')" data-seat="B4">
                    <p v-if="selectedSeat === 'B4'">4</p>
                </div>
                <div :class="getSeatClass('B5')" @click="toggleSeatSelection('B5')" data-seat="B5">
                    <p v-if="selectedSeat === 'B5'">5</p>
                </div>
                <div :class="getSeatClass('B6')" @click="toggleSeatSelection('B6')" data-seat="B6">
                    <p v-if="selectedSeat === 'B6'">6</p>
                </div>
                <div :class="getSeatClass('B7')" @click="toggleSeatSelection('B7')" data-seat="B7">
                    <p v-if="selectedSeat === 'B7'">7</p>
                </div>
            </div>
        </div>
    </section>
    <section class="asiento-normal">
        <div class="c">
            <div class="letra">
                <p>C</p>
            </div>
            <div class="asientos">
                <div :class="getSeatClass('C1')" @click="toggleSeatSelection('C1')" data-seat="C1">
                    <p v-if="selectedSeat === 'C1'">1</p>
                </div>
                <div :class="getSeatClass('C2')" @click="toggleSeatSelection('C2')" data-seat="C2">
                    <p v-if="selectedSeat === 'C2'">2</p>
                </div>
                <div :class="getSeatClass('C3')" @click="toggleSeatSelection('C3')" data-seat="C3">
                    <p v-if="selectedSeat === 'C3'">3</p>
                </div>
                <div :class="getSeatClass('C4')" @click="toggleSeatSelection('C4')" data-seat="C4">
                    <p v-if="selectedSeat === 'C4'">4</p>
                </div>
                <div :class="getSeatClass('C5')" @click="toggleSeatSelection('C5')" data-seat="C5">
                    <p v-if="selectedSeat === 'C5'">5</p>
                </div>
                <div :class="getSeatClass('C6')" @click="toggleSeatSelection('C6')" data-seat="C6">
                    <p v-if="selectedSeat === 'C6'">6</p>
                </div>
                <div :class="getSeatClass('C7')" @click="toggleSeatSelection('C7')" data-seat="C7">
                    <p v-if="selectedSeat === 'C7'">7</p>
                </div>
                <div :class="getSeatClass('C8')" @click="toggleSeatSelection('C8')" data-seat="C8">
                    <p v-if="selectedSeat === 'C8'">8</p>
                </div>
                <div :class="getSeatClass('C9')" @click="toggleSeatSelection('C9')" data-seat="C9">
                    <p v-if="selectedSeat === 'C9'">9</p>
                </div>
            </div>
        </div>
        <div class="d">
            <div class="letra">
                <p>D</p>
            </div>
            <div class="asientos">
                <div :class="getSeatClass('D1')" @click="toggleSeatSelection('D1')" data-seat="D1">
                    <p v-if="selectedSeat === 'D1'">1</p>
                </div>
                <div :class="getSeatClass('D2')" @click="toggleSeatSelection('D2')" data-seat="D2">
                    <p v-if="selectedSeat === 'D2'">2</p>
                </div>
                <div :class="getSeatClass('D3')" @click="toggleSeatSelection('D3')" data-seat="D3">
                    <p v-if="selectedSeat === 'D3'">3</p>
                </div>
                <div :class="getSeatClass('D4')" @click="toggleSeatSelection('D4')" data-seat="D4">
                    <p v-if="selectedSeat === 'D4'">4</p>
                </div>
                <div :class="getSeatClass('D5')" @click="toggleSeatSelection('D5')" data-seat="D5">
                    <p v-if="selectedSeat === 'D5'">5</p>
                </div>
                <div :class="getSeatClass('D6')" @click="toggleSeatSelection('D6')" data-seat="D6">
                    <p v-if="selectedSeat === 'D6'">6</p>
                </div>
                <div :class="getSeatClass('D7')" @click="toggleSeatSelection('D7')" data-seat="D7">
                    <p v-if="selectedSeat === 'D7'">7</p>
                </div>
                <div :class="getSeatClass('D8')" @click="toggleSeatSelection('D8')" data-seat="D8">
                    <p v-if="selectedSeat === 'D8'">8</p>
                </div>
                <div :class="getSeatClass('D9')" @click="toggleSeatSelection('D9')" data-seat="D9">
                    <p v-if="selectedSeat === 'D9'">9</p>
                </div>
            </div>
        </div>
        <div class="e">
            <div class="letra">
                <p>E</p>
            </div>
            <div class="asientos">
                <div :class="getSeatClass('E1')" @click="toggleSeatSelection('E1')" data-seat="E1">
                    <p v-if="selectedSeat === 'E1'">1</p>
                </div>
                <div :class="getSeatClass('E2')" @click="toggleSeatSelection('E2')" data-seat="E2">
                    <p v-if="selectedSeat === 'E2'">2</p>
                </div>
                <div :class="getSeatClass('E3')" @click="toggleSeatSelection('E3')" data-seat="E3">
                    <p v-if="selectedSeat === 'E3'">3</p>
                </div>
                <div :class="getSeatClass('E4')" @click="toggleSeatSelection('E4')" data-seat="E4">
                    <p v-if="selectedSeat === 'E4'">4</p>
                </div>
                <div :class="getSeatClass('E5')" @click="toggleSeatSelection('E5')" data-seat="E5">
                    <p v-if="selectedSeat === 'E5'">5</p>
                </div>
                <div :class="getSeatClass('E6')" @click="toggleSeatSelection('E6')" data-seat="E6">
                    <p v-if="selectedSeat === 'E6'">6</p>
                </div>
                <div :class="getSeatClass('E7')" @click="toggleSeatSelection('E7')" data-seat="E7">
                    <p v-if="selectedSeat === 'E7'">7</p>
                </div>
                <div :class="getSeatClass('E8')" @click="toggleSeatSelection('E8')" data-seat="E8">
                    <p v-if="selectedSeat === 'E8'">8</p>
                </div>
                <div :class="getSeatClass('E9')" @click="toggleSeatSelection('E9')" data-seat="E9">
                    <p v-if="selectedSeat === 'E9'">9</p>
                </div>
            </div>
        </div>
    </section>
    <div class="opciones">
        <div class="available">
            <div></div>
            <p>Available</p>
        </div>
        <div class="reserved">
            <div></div>
            <p>Reserved</p>
        </div>
        <div class="select">
            <div></div>
            <p>Selected</p>
        </div>
    </div>
</main>
      <section class="detalles" v-if="pelicula.horarioProyeccion">
        <div class="fechas">
          <div class="fecha" v-for="(horario, index) in pelicula.horarioProyeccion" :key="index">
            <p>{{ new Date(horario.fechaInicio).toLocaleDateString('en-US', { weekday: 'short' }) }}</p>
            <h1>{{ new Date(horario.fechaInicio).getDate() }}</h1>
          </div>
        </div>
        <div class="precios">
          <div class="precio" v-for="(horario, index) in pelicula.horarioProyeccion" :key="index">
            <h1>{{ new Date(horario.fechaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</h1>
            <p>$ {{ selectedPrice}} 3D</p>
          </div>
        </div>
      </section>
    <section class="total">
        <div class="price">
            <h1>Price</h1>
            <p>${{ selectedPrice }}</p>
        </div>
        <a href="#" @click="buyTicket">
            <button :disabled="!selectedPrice">Buy ticket</button>
        </a>
    </section>
</template>

<style scoped>
@import '../css/asiento.css';
</style>

<script>
import apis from './api.js'
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Asiento',
    setup() {
    const route = useRouter();
    const asientos = ref([]);
    const selectedPrice = ref(null);
    const pelicula = ref({
        horarioProyeccion: []
      });
    const selectedSeat = ref(null);
    const dates = ref([
      { day: 'Fri', date: '17' },
      { day: 'Sat', date: '18' },
      { day: 'Sun', date: '19' },
      { day: 'Mon', date: '20' },
      { day: 'Tue', date: '21' },
      { day: 'Wed', date: '21' },
      { day: 'Thur', date: '21' },
    ]);

    const fetchAsientos = async () => {
      try {
        const idFuncion = route.currentRoute.value.query.idFuncion;
        const response = await apis.getAsientos(idFuncion);
        if (response.status === 200) {
          asientos.value = response.data.data;
        }
      } catch (error) {
        console.error('Error al cargar los datos de los asientos:', error);
      }
    };

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

    const getSeatClass = (seat) => {
      const foundSeat = asientos.value.find(a => a.asiento == seat);
      if (seat === selectedSeat.value) {
            return 'asiento-seleccionado';
      }
      // console.log(foundSeat)
      if (foundSeat) {
        return 'asiento-reservado';
      }else{
        return 'asiento-no-disponible';
      }
    };
    const toggleSeatSelection = (seat) => {
      console.log(seat);

      // Obtener el div del asiento basado en el ID del asiento
      const seatElement = document.querySelector(`div[data-seat="${seat}"]`);
      // Verificar si el asiento tiene la clase 'asiento-no-disponible'
      if (seatElement && seatElement.classList.contains('asiento-no-disponible')) {
        return; // No hacer nada si el asiento está no disponible
      }

      // Solo cambiar la selección si el asiento no está actualmente seleccionado
      if (selectedSeat.value !== seat) {
        selectedSeat.value = seat;
      } else {
        selectedSeat.value = null; // Deseleccionar si se vuelve a hacer clic
      }

      // Actualizar el precio basado en la selección actual
      const foundSeat = asientos.value.find(a => a.asiento === seat);
      selectedPrice.value = selectedSeat.value ? foundSeat.precio : 0;
    };
    const buyTicket = () => {
      if (selectedSeat.value) {
        route.push({path: 'Save', query: selectedSeat.value});
      } else {
        alert("Por favor selecciona un asiento primero.");
      }
    };

    const goBack = () => {
      route.back();
    };

    onMounted(() => {
      fetchAsientos();
      dataPeli();
    });

    return {
      dates,
      pelicula,
      selectedSeat,
      selectedPrice,
      dates: ref([]),
      getSeatClass,
      goBack,
      selectedSeat,
      toggleSeatSelection,
      buyTicket,
      dataPeli
    };
  }
};

</script>
