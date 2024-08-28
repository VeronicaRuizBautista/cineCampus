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
            <div :class="getSeatClass('A1')"><p>1</p></div>
            <div :class="getSeatClass('A2')"><p>2</p></div>
            <div :class="getSeatClass('A3')"><p>3</p></div>
            <div :class="getSeatClass('A4')"><p>4</p></div>
            <div :class="getSeatClass('A5')"><p>5</p></div>
          </div>
        </div>
        <div class="b">
          <div class="letra">
            <p>B</p>
          </div>
          <div class="asientos">
            <div :class="getSeatClass('B1')"><p>1</p></div>
            <div :class="getSeatClass('B2')"><p>2</p></div>
            <div :class="getSeatClass('B3')"><p>3</p></div>
            <div :class="getSeatClass('B4')"><p>4</p></div>
            <div :class="getSeatClass('B5')"><p>5</p></div>
            <div :class="getSeatClass('B6')"><p>6</p></div>
            <div :class="getSeatClass('B7')"><p>7</p></div>
          </div>
        </div>
      </section>
      <section class="asiento-normal">
        <div class="c">
          <div class="letra">
            <p>C</p>
          </div>
          <div class="asientos">
            <div :class="getSeatClass('C1')"><p>1</p></div>
            <div :class="getSeatClass('C2')"><p>2</p></div>
            <div :class="getSeatClass('C3')"><p>3</p></div>
            <div :class="getSeatClass('C4')"><p>4</p></div>
            <div :class="getSeatClass('C5')"><p>5</p></div>
            <div :class="getSeatClass('C6')"><p>6</p></div>
            <div :class="getSeatClass('C7')"><p>7</p></div>
            <div :class="getSeatClass('C8')"><p>8</p></div>
            <div :class="getSeatClass('C9')"><p>9</p></div>
          </div>
        </div>
        <div class="d">
          <div class="letra">
            <p>D</p>
          </div>
          <div class="asientos">
            <div :class="getSeatClass('D1')"><p>1</p></div>
            <div :class="getSeatClass('D2')"><p>2</p></div>
            <div :class="getSeatClass('D3')"><p>3</p></div>
            <div :class="getSeatClass('D4')"><p>4</p></div>
            <div :class="getSeatClass('D5')"><p>5</p></div>
            <div :class="getSeatClass('D6')"><p>6</p></div>
            <div :class="getSeatClass('D7')"><p>7</p></div>
            <div :class="getSeatClass('D8')"><p>8</p></div>
            <div :class="getSeatClass('D9')"><p>9</p></div>
          </div>
        </div>
        <div class="e">
          <div class="letra">
            <p>E</p>
          </div>
          <div class="asientos">
            <div :class="getSeatClass('E1')"><p>1</p></div>
            <div :class="getSeatClass('E2')"><p>2</p></div>
            <div :class="getSeatClass('E3')"><p>3</p></div>
            <div :class="getSeatClass('E4')"><p>4</p></div>
            <div :class="getSeatClass('E5')"><p>5</p></div>
            <div :class="getSeatClass('E6')"><p>6</p></div>
            <div :class="getSeatClass('E7')"><p>7</p></div>
            <div :class="getSeatClass('E8')"><p>8</p></div>
            <div :class="getSeatClass('E9')"><p>9</p></div>
          </div>
        </div>
        <div class="f">
          <div class="letra">
            <p>F</p>
          </div>
          <div class="asientos">
            <div :class="getSeatClass('F1')"><p>1</p></div>
            <div :class="getSeatClass('F2')"><p>2</p></div>
            <div :class="getSeatClass('F3')"><p>3</p></div>
            <div :class="getSeatClass('F4')"><p>4</p></div>
            <div :class="getSeatClass('F5')"><p>5</p></div>
            <div :class="getSeatClass('F6')"><p>6</p></div>
            <div :class="getSeatClass('F7')"><p>7</p></div>
            <div :class="getSeatClass('F8')"><p>8</p></div>
            <div :class="getSeatClass('F9')"><p>9</p></div>
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
                <p>$ 5.25 3D</p>
            </div>
            <div class="precio">
                <h1>15:45</h1>
                <p>$ 3.99 3D</p>
            </div>
            <div class="precio">
                <h1>18:50</h1>
                <p>$ 4.50 3D</p>
            </div>
            <div class="precio">
                <h1>20:30</h1>
                <p>$ 6.5 3D</p>
            </div>
        </div>
    </section>
    <section class="total">
        <div class="price">
            <h1>Price</h1>
            <p>$24,99</p>
        </div>
        <a href="#">
            <button>Buy ticket</button>
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
    const dates = ref([
      { day: 'Fri', date: '17' },
      { day: 'Sat', date: '18' },
      { day: 'Sun', date: '19' },
      { day: 'Mon', date: '20' },
      { day: 'Tue', date: '21' },
      { day: 'Wed', date: '21' },
      { day: 'Thur', date: '21' },
    ]);
    const prices = ref([
      { time: '13:00', amount: '5.25' },
      { time: '15:45', amount: '3.99' },
      { time: '18:50', amount: '4.50' },
      { time: '20:30', amount: '6.50' },
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
      if (foundSeat) {
        return 'asiento-reservado';
      }else{
        return 'asiento-no-disponible';
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
      goBack
    };
  }
};

</script>
