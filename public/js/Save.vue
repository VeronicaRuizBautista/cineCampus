<template>
    <div class="bodyorder" v-if="pelicula">
        <header>
            <div class="ordermainheader">
              <a href="#" @click="goBack"><i class='bx bx-chevron-left'></i></a>
                <h3 class="whitetext">Order Summary</h3>
                <i class='bx bx-dots-vertical-rounded'></i>
            </div>

            <div class="moviesummaryimgzone">
                <img :src="pelicula.img">

                <div class="moviesummarytext">
                    <div class="moviesummaryinformation">
                        <strong class="redtext">{{ pelicula.titulo }}</strong>
                        <p class="graytext">{{ pelicula.genero }}</p>
                    </div>
                    <div class="moviesummarylocation">
                        <strong class="whitetext">HARTONO MALL</strong>
                        <p class="graytext">{{ selectedDayStorage }}, {{ selectedHourStorage }}</p>
                    </div>
                </div>
            </div>
        </header>
        <div class="ordernumber">
            <span class="graytext">Order Number: </span><span class="whitetext">123456786</span>.
        </div>
        <section class="ordermain">
            <div class="order-summary">
                <div class="order-row">
                <span class="left">1 Ticket</span>
                <span class="right">{{ selectedSeatsStorage }}</span>
                </div>
                <div class="order-row">
                <span class="left">Regular Seat</span>
                <span class="right">$24,99</span>
                </div>
                <div class="order-row">
                <span class="left">Service Fee</span>
                <span class="right">$1,99</span>
                </div>
            </div>
        </section>
    
        <div class="payment">
            <h3 class="whitetext">Payment Method</h3>

            <div class="payment-method">
                <img src="../storage/img/Vector 259.png" alt="" class="card-logo">
                <div class="card-details">
                    <span class="card-name">MasterCard</span>
                    <span class="card-number">**** **** 0998 7865</span>
                </div>
            </div>

            <div class="paymentTime">
                <span class="graytext">Complete your payment in</span>
                <span class="redtext">04:59</span>
            </div>
        </div>

        <footer>
            <button class="buyticket" @click="gotoTicket()">Buy Ticket</button>
        </footer>
    </div>
</template>

<style scoped>
@import '../css/save.css';
</style>

<script>
import apis from './api.js'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Save',
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
    const dataPeli = async () => {
      try {
        const titulo = sessionStorage.getItem('key');
        const response = await apis.getPeliculaByTittle(titulo); 
        const result = response.data.data[0]
        pelicula.value = result
      } catch (error) {
        console.error('Error al cargar los datos de los asientos:', error);
      }
    };
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