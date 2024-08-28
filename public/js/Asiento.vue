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
          <div :class="getSeatClass('A1')" @click="toggleSeatSelection('A1')">
            <p v-if="selectedSeat === 'A1'">1</p>
          </div>
          <div :class="getSeatClass('A2')" @click="toggleSeatSelection('A2')">
            <p v-if="selectedSeat === 'A2'">2</p>
          </div>
          <div :class="getSeatClass('A3')" @click="toggleSeatSelection('A3')">
            <p v-if="selectedSeat === 'A3'">3</p>
          </div>
          <div :class="getSeatClass('A4')" @click="toggleSeatSelection('A4')">
            <p v-if="selectedSeat === 'A4'">4</p>
          </div>
          <div :class="getSeatClass('A5')" @click="toggleSeatSelection('A5')">
            <p v-if="selectedSeat === 'A5'">5</p>
          </div>
        </div>
      </div>
      <div class="b">
        <div class="letra">
          <p>B</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('B1')" @click="toggleSeatSelection('B1')">
            <p v-if="selectedSeat === 'B1'">1</p>
          </div>
          <div :class="getSeatClass('B2')" @click="toggleSeatSelection('B2')">
            <p v-if="selectedSeat === 'B2'">2</p>
          </div>
          <div :class="getSeatClass('B3')" @click="toggleSeatSelection('B3')">
            <p v-if="selectedSeat === 'B3'">3</p>
          </div>
          <div :class="getSeatClass('B4')" @click="toggleSeatSelection('B4')">
            <p v-if="selectedSeat === 'B4'">4</p>
          </div>
          <div :class="getSeatClass('B5')" @click="toggleSeatSelection('B5')">
            <p v-if="selectedSeat === 'B5'">5</p>
          </div>
          <div :class="getSeatClass('B6')" @click="toggleSeatSelection('B6')">
            <p v-if="selectedSeat === 'B6'">6</p>
          </div>
          <div :class="getSeatClass('B7')" @click="toggleSeatSelection('B7')">
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
          <div :class="getSeatClass('C1')" @click="toggleSeatSelection('C1')">
            <p v-if="selectedSeat === 'C1'">1</p>
          </div>
          <div :class="getSeatClass('C2')" @click="toggleSeatSelection('C2')">
            <p v-if="selectedSeat === 'C2'">2</p>
          </div>
          <div :class="getSeatClass('C3')" @click="toggleSeatSelection('C3')">
            <p v-if="selectedSeat === 'C3'">3</p>
          </div>
          <div :class="getSeatClass('C4')" @click="toggleSeatSelection('C4')">
            <p v-if="selectedSeat === 'C4'">4</p>
          </div>
          <div :class="getSeatClass('C5')" @click="toggleSeatSelection('C5')">
            <p v-if="selectedSeat === 'C5'">5</p>
          </div>
          <div :class="getSeatClass('C6')" @click="toggleSeatSelection('C6')">
            <p v-if="selectedSeat === 'C6'">6</p>
          </div>
          <div :class="getSeatClass('C7')" @click="toggleSeatSelection('C7')">
            <p v-if="selectedSeat === 'C7'">7</p>
          </div>
          <div :class="getSeatClass('C8')" @click="toggleSeatSelection('C8')">
            <p v-if="selectedSeat === 'C8'">8</p>
          </div>
          <div :class="getSeatClass('C9')" @click="toggleSeatSelection('C9')">
            <p v-if="selectedSeat === 'C9'">9</p>
          </div>
        </div>
      </div>
      <div class="d">
        <div class="letra">
          <p>D</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('D1')" @click="toggleSeatSelection('D1')">
            <p v-if="selectedSeat === 'D1'">1</p>
          </div>
          <div :class="getSeatClass('D2')" @click="toggleSeatSelection('D2')">
            <p v-if="selectedSeat === 'D2'">2</p>
          </div>
          <div :class="getSeatClass('D3')" @click="toggleSeatSelection('D3')">
            <p v-if="selectedSeat === 'D3'">3</p>
          </div>
          <div :class="getSeatClass('D4')" @click="toggleSeatSelection('D4')">
            <p v-if="selectedSeat === 'D4'">4</p>
          </div>
          <div :class="getSeatClass('D5')" @click="toggleSeatSelection('D5')">
            <p v-if="selectedSeat === 'D5'">5</p>
          </div>
          <div :class="getSeatClass('D6')" @click="toggleSeatSelection('D6')">
            <p v-if="selectedSeat === 'D6'">6</p>
          </div>
          <div :class="getSeatClass('D7')" @click="toggleSeatSelection('D7')">
            <p v-if="selectedSeat === 'D7'">7</p>
          </div>
          <div :class="getSeatClass('D8')" @click="toggleSeatSelection('D8')">
            <p v-if="selectedSeat === 'D8'">8</p>
          </div>
          <div :class="getSeatClass('D9')" @click="toggleSeatSelection('D9')">
            <p v-if="selectedSeat === 'D9'">9</p>
          </div>
        </div>
      </div>
      <div class="e">
        <div class="letra">
          <p>E</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('E1')" @click="toggleSeatSelection('E1')">
            <p v-if="selectedSeat === 'E1'">1</p>
          </div>
          <div :class="getSeatClass('E2')" @click="toggleSeatSelection('E2')">
            <p v-if="selectedSeat === 'E2'">2</p>
          </div>
          <div :class="getSeatClass('E3')" @click="toggleSeatSelection('E3')">
            <p v-if="selectedSeat === 'E3'">3</p>
          </div>
          <div :class="getSeatClass('E4')" @click="toggleSeatSelection('E4')">
            <p v-if="selectedSeat === 'E4'">4</p>
          </div>
          <div :class="getSeatClass('E5')" @click="toggleSeatSelection('E5')">
            <p v-if="selectedSeat === 'E5'">5</p>
          </div>
          <div :class="getSeatClass('E6')" @click="toggleSeatSelection('E6')">
            <p v-if="selectedSeat === 'E6'">6</p>
          </div>
          <div :class="getSeatClass('E7')" @click="toggleSeatSelection('E7')">
            <p v-if="selectedSeat === 'E7'">7</p>
          </div>
          <div :class="getSeatClass('E8')" @click="toggleSeatSelection('E8')">
            <p v-if="selectedSeat === 'E8'">8</p>
          </div>
          <div :class="getSeatClass('E9')" @click="toggleSeatSelection('E9')">
            <p v-if="selectedSeat === 'E9'">9</p>
          </div>
        </div>
      </div>
    </section>
        <div class="opciones">
            <div class="available">
                <div></div>
                <p>Abailable</p>
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
    <section class="detalles">
        <div class="fechas">
            <div class="fecha">
                <p>Fri</p>
                <h1>17</h1>
            </div>
            <div class="fecha">
                <p>Sat</p>
                <h1>18</h1>
            </div>
            <div class="fecha">
                <p>Sun</p>
                <h1>19</h1>
            </div>
            <div class="fecha">
                <p>Mon</p>
                <h1>20</h1>
            </div>
            <div class="fecha">
                <p>Tue</p>
                <h1>21</h1>
            </div>
            <div class="fecha">
                <p>Wed</p>
                <h1>21</h1>
            </div>
            <div class="fecha">
                <p>Thur</p>
                <h1>21</h1>
            </div>
        </div>
        <div class="precios">
            <div class="precio">
                <h1>13:00</h1>
                <p>$ {{ Asiento.precio }} 3D</p>
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

    const getSeatClass = (seat) => {
      const foundSeat = asientos.value.find(a => a.asiento == seat);
      if (seat === selectedSeat.value) {
            return 'asiento-seleccionado';
      }
      if (foundSeat) {
        return 'asiento-reservado';
      }else{
        return 'asiento-no-disponible';
      }
    };
    const toggleSeatSelection = (seat) => {
        console.log(seat) 
      // Solo cambiar la selección si el asiento no está actualmente seleccionado
      if (selectedSeat.value !== seat) {
        selectedSeat.value = seat;
      } else {
        selectedSeat.value = null; // Deseleccionar si se vuelve a hacer clic
      }
      selectedPrice.value = seat === selectedSeat.value ? 0 : foundSeat.precio;
    };
    const buyTicket = () => {
      if (selectedSeat.value) {
        router.push({path: 'Save', query: selectedSeat.value.name});
      } else {
        alert("Por favor selecciona un asiento primero.");
      }
    };

    const goBack = () => {
      router.back();
    };

    onMounted(() => {
      fetchAsientos();
    });

    return {
      dates,
      prices,
      getSeatClass,
      goBack,
      selectedSeat,
      toggleSeatSelection,
      buyTicket
    };
  }
};

</script>
