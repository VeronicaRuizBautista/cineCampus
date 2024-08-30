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
            <p v-if="selectedSeats.includes('A1')">1</p>
          </div>
          <div :class="getSeatClass('A2')" @click="toggleSeatSelection('A2')" data-seat="A2">
            <p v-if="selectedSeats.includes('A2')">2</p>
          </div>
          <div :class="getSeatClass('A3')" @click="toggleSeatSelection('A3')" data-seat="A3">
            <p v-if="selectedSeats.includes('A3')">3</p>
          </div>
          <div :class="getSeatClass('A4')" @click="toggleSeatSelection('A4')" data-seat="A4">
            <p v-if="selectedSeats.includes('A4')">4</p>
          </div>
          <div :class="getSeatClass('A5')" @click="toggleSeatSelection('A5')" data-seat="A5">
            <p v-if="selectedSeats.includes('A5')">5</p>
          </div>
        </div>
      </div>
      <div class="b">
        <div class="letra">
          <p>B</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('B1')" @click="toggleSeatSelection('B1')" data-seat="B1">
            <p v-if="selectedSeats.includes('B1')">1</p>
          </div>
          <div :class="getSeatClass('B2')" @click="toggleSeatSelection('B2')" data-seat="B2">
            <p v-if="selectedSeats.includes('B2')">2</p>
          </div>
          <div :class="getSeatClass('B3')" @click="toggleSeatSelection('B3')" data-seat="B3">
            <p v-if="selectedSeats.includes('B3')">3</p>
          </div>
          <div :class="getSeatClass('B4')" @click="toggleSeatSelection('B4')" data-seat="B4">
            <p v-if="selectedSeats.includes('B4')">4</p>
          </div>
          <div :class="getSeatClass('B5')" @click="toggleSeatSelection('B5')" data-seat="B5">
            <p v-if="selectedSeats.includes('B5')">5</p>
          </div>
          <div :class="getSeatClass('B6')" @click="toggleSeatSelection('B6')" data-seat="B6">
            <p v-if="selectedSeats.includes('B6')">6</p>
          </div>
          <div :class="getSeatClass('B7')" @click="toggleSeatSelection('B7')" data-seat="B7">
            <p v-if="selectedSeats.includes('B7')">7</p>
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
            <p v-if="selectedSeats.includes('C1')">1</p>
          </div>
          <div :class="getSeatClass('C2')" @click="toggleSeatSelection('C2')" data-seat="C2">
            <p v-if="selectedSeats.includes('C2')">2</p>
          </div>
          <div :class="getSeatClass('C3')" @click="toggleSeatSelection('C3')" data-seat="C3">
            <p v-if="selectedSeats.includes('C3')">3</p>
          </div>
          <div :class="getSeatClass('C4')" @click="toggleSeatSelection('C4')" data-seat="C4">
            <p v-if="selectedSeats.includes('C4')">4</p>
          </div>
          <div :class="getSeatClass('C5')" @click="toggleSeatSelection('C5')" data-seat="C5">
            <p v-if="selectedSeats.includes('C5')">5</p>
          </div>
          <div :class="getSeatClass('C6')" @click="toggleSeatSelection('C6')" data-seat="C6">
            <p v-if="selectedSeats.includes('C6')">6</p>
          </div>
          <div :class="getSeatClass('C7')" @click="toggleSeatSelection('C7')" data-seat="C7">
            <p v-if="selectedSeats.includes('C7')">7</p>
          </div>
          <div :class="getSeatClass('C8')" @click="toggleSeatSelection('C8')" data-seat="C8">
            <p v-if="selectedSeats.includes('C8')">8</p>
          </div>
          <div :class="getSeatClass('C9')" @click="toggleSeatSelection('C9')" data-seat="C9">
            <p v-if="selectedSeats.includes('C9')">9</p>
          </div>
        </div>
      </div>
      <div class="d">
        <div class="letra">
          <p>D</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('D1')" @click="toggleSeatSelection('D1')" data-seat="D1">
            <p v-if="selectedSeats.includes('D1')">1</p>
          </div>
          <div :class="getSeatClass('D2')" @click="toggleSeatSelection('D2')" data-seat="D2">
            <p v-if="selectedSeats.includes('D2')">2</p>
          </div>
          <div :class="getSeatClass('D3')" @click="toggleSeatSelection('D3')" data-seat="D3">
            <p v-if="selectedSeats.includes('D3')">3</p>
          </div>
          <div :class="getSeatClass('D4')" @click="toggleSeatSelection('D4')" data-seat="D4">
            <p v-if="selectedSeats.includes('D4')">4</p>
          </div>
          <div :class="getSeatClass('D5')" @click="toggleSeatSelection('D5')" data-seat="D5">
            <p v-if="selectedSeats.includes('D5')">5</p>
          </div>
          <div :class="getSeatClass('D6')" @click="toggleSeatSelection('D6')" data-seat="D6">
            <p v-if="selectedSeats.includes('D6')">6</p>
          </div>
          <div :class="getSeatClass('D7')" @click="toggleSeatSelection('D7')" data-seat="D7">
            <p v-if="selectedSeats.includes('D7')">7</p>
          </div>
          <div :class="getSeatClass('D8')" @click="toggleSeatSelection('D8')" data-seat="D8">
            <p v-if="selectedSeats.includes('D8')">8</p>
          </div>
          <div :class="getSeatClass('D9')" @click="toggleSeatSelection('D9')" data-seat="D9">
            <p v-if="selectedSeats.includes('D9')">9</p>
          </div>
        </div>
      </div>
      <div class="e">
        <div class="letra">
          <p>E</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('E1')" @click="toggleSeatSelection('E1')" data-seat="E1">
            <p v-if="selectedSeats.includes('E1')">1</p>
          </div>
          <div :class="getSeatClass('E2')" @click="toggleSeatSelection('E2')" data-seat="E2">
            <p v-if="selectedSeats.includes('E2')">2</p>
          </div>
          <div :class="getSeatClass('E3')" @click="toggleSeatSelection('E3')" data-seat="E3">
            <p v-if="selectedSeats.includes('E3')">3</p>
          </div>
          <div :class="getSeatClass('E4')" @click="toggleSeatSelection('E4')" data-seat="E4">
            <p v-if="selectedSeats.includes('E4')">4</p>
          </div>
          <div :class="getSeatClass('E5')" @click="toggleSeatSelection('E5')" data-seat="E5">
            <p v-if="selectedSeats.includes('E5')">5</p>
          </div>
          <div :class="getSeatClass('E6')" @click="toggleSeatSelection('E6')" data-seat="E6">
            <p v-if="selectedSeats.includes('E6')">6</p>
          </div>
          <div :class="getSeatClass('E7')" @click="toggleSeatSelection('E7')" data-seat="E7">
            <p v-if="selectedSeats.includes('E7')">7</p>
          </div>
          <div :class="getSeatClass('E8')" @click="toggleSeatSelection('E8')" data-seat="E8">
            <p v-if="selectedSeats.includes('E8')">8</p>
          </div>
          <div :class="getSeatClass('E9')" @click="toggleSeatSelection('E9')" data-seat="E9">
            <p v-if="selectedSeats.includes('E9')">9</p>
          </div>
        </div>
      </div>
      <div class="f">
        <div class="letra">
          <p>F</p>
        </div>
        <div class="asientos">
          <div :class="getSeatClass('F1')" @click="toggleSeatSelection('F1')" data-seat="F1">
            <p v-if="selectedSeats.includes('F1')">1</p>
          </div>
          <div :class="getSeatClass('F2')" @click="toggleSeatSelection('F2')" data-seat="F2">
            <p v-if="selectedSeats.includes('F2')">2</p>
          </div>
          <div :class="getSeatClass('F3')" @click="toggleSeatSelection('F3')" data-seat="F3">
            <p v-if="selectedSeats.includes('F3')">3</p>
          </div>
          <div :class="getSeatClass('F4')" @click="toggleSeatSelection('F4')" data-seat="F4">
            <p v-if="selectedSeats.includes('F4')">4</p>
          </div>
          <div :class="getSeatClass('F5')" @click="toggleSeatSelection('F5')" data-seat="F5">
            <p v-if="selectedSeats.includes('F5')">5</p>
          </div>
          <div :class="getSeatClass('F6')" @click="toggleSeatSelection('F6')" data-seat="F6">
            <p v-if="selectedSeats.includes('F6')">6</p>
          </div>
          <div :class="getSeatClass('F7')" @click="toggleSeatSelection('F7')" data-seat="F7">
            <p v-if="selectedSeats.includes('F7')">7</p>
          </div>
          <div :class="getSeatClass('F8')" @click="toggleSeatSelection('F8')" data-seat="F8">
            <p v-if="selectedSeats.includes('F8')">8</p>
          </div>
          <div :class="getSeatClass('F9')" @click="toggleSeatSelection('F9')" data-seat="F9">
            <p v-if="selectedSeats.includes('F9')">9</p>
          </div>
        </div>
      </div>
    </section>
  </main>
      <section class="detalles" v-if="pelicula.horarioProyeccion">
        <div class="fechas">
          <div :class="getSeatFecha(new Date(horario.fechaInicio).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'}))" id="fecha" v-for="(horario, index) in pelicula.horarioProyeccion"
           :key="index"  
           @click="toggleFechaSelection(new Date(horario.fechaInicio).toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'}))">
            <p>{{ new Date(horario.fechaInicio).toLocaleDateString('en-US', { weekday: 'short' }) }}</p>
            <h1>{{ new Date(horario.fechaInicio).getDate() }}</h1>
          </div>
        </div>
        <div class="precios">
          <div id="precio" v-for="(horario, index) in pelicula.horarioProyeccion" 
          :key="index" :class="getSeatHora(new Date(horario.fechaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))"
          @click="togglehoraSelection(new Date(horario.fechaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))">
            <h1>{{ new Date(horario.fechaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</h1>
            <p>$ {{ selectedPrice}} 3D</p>
          </div>
        </div>
      </section>
    <section class="total">
        <div class="price">
            <h1>Price</h1>
            <p>${{ selectedTotalPrice }}</p>
        </div>
        <a href="#" @click="buyTicket()">
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
    let selectedPrice = ref(0);
    let selectedTotalPrice = ref(0);
    const selectedDate = ref(null);
    const selectedTime = ref(null);
    const pelicula = ref({
        horarioProyeccion: []
      });
    const selectedSeat = ref(null);
    const selectedSeats = ref([]);
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
      // Verificar si el asiento está en el array de asientos seleccionados
      if (selectedSeats.value.includes(seat)) {
        return 'asiento-seleccionado';
      }
      // console.log(foundSeat)
      if (foundSeat) {
        return 'asiento-reservado';
      }else{
        return 'asiento-no-disponible';
      }
    };
    const getSeatFecha = (fecha) => {
      if (fecha === selectedDate.value) {
            return 'seleccionado';
      }else {
        return 'no-seleccionado'
      }
    };
    const getSeatHora = (hora) => {
      if (hora === selectedTime.value) {
            return 'seleccionadoHora';
      }else {
        return 'no-seleccionadoHora'
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
      const foundSeat = asientos.value.find(a => a.asiento === seat);
      // Solo cambiar la selección si el asiento no está actualmente seleccionado
      if (selectedSeats.value.includes(seat)) {
      // Si el asiento ya está seleccionado, se deselecciona
      selectedSeats.value = selectedSeats.value.filter(s => s !== seat);
      selectedTotalPrice.value -= foundSeat.precio;
    } else {
          // Actualizar el precio basado en la selección actual
          selectedSeat.value = seat;
        selectedSeats.value.push(seat);
        selectedTotalPrice.value += foundSeat.precio;

        sessionStorage.setItem('selectedSeatsStorage', JSON.stringify(selectedSeats.value));
        sessionStorage.setItem('selectedTotalPriceStorage', selectedTotalPrice.value);
        console.log(selectedSeats.value)

        selectedPrice.value = selectedSeat.value ? foundSeat.precio : 0;
        sessionStorage.setItem('selectedPriceStorage', selectedPrice.value); 
    }
      
    };
    const toggleFechaSelection = (fecha) => {
      console.log(fecha);
      sessionStorage.setItem('selectedDayStorage', fecha);     
      if (selectedDate.value !== fecha) {
        selectedDate.value = fecha;
      } else {
        selectedDate.value = null; // Deseleccionar si se vuelve a hacer clic
      }
    };
    const togglehoraSelection = (hora) => {
      console.log(hora);
      sessionStorage.setItem('selectedHourStorage', hora);
      if (selectedTime .value !== hora) {
        selectedTime .value = hora;
      } else {
        selectedTime .value = null; // Deseleccionar si se vuelve a hacer clic
      }
    };


  const buyTicket = () => {
    if (selectedSeats.value.length > 0 && selectedDate.value && selectedTime.value) {
      route.push({ name: 'Save', query: selectedSeats.value.join(',')});
    } else {
      alert("Por favor selecciona al menos un asiento, una fecha y una hora disponibles");
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
      selectedSeats,
      toggleSeatSelection,
      buyTicket,
      dataPeli,
      selectedDate,
      selectedTime,
      toggleFechaSelection,
      togglehoraSelection,
      getSeatFecha,
      getSeatHora,
      selectedTotalPrice
    };
  }
};

</script>