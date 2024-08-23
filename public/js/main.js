// new Vue({
//     el: '#nombre',
//     data: {
//         nombreUsuario: 'Ferrucio Tuccine' // Valor inicial
//     },
//     mounted() {
//         this.obtenerNombreUsuario(); // Llamar la función al montar el componente
//     },
//     methods: {
//         async obtenerNombreUsuario() {
//             try {
//                 const response = await fetch('/username');
//                 const data = await response.json();
//                 this.nombreUsuario = data; // Actualizar el nombre del usuario
//             } catch (error) {
//                 console.error("Error al obtener el nombre del usuario", error);
//             }
//         }
//     }
// });
new Vue({
    el: '#peliculas-app',
    data: {
        peliculas: [] // Inicialmente vacío, se llenará con los datos obtenidos
    },
    mounted() {
        this.obtenerPeliculas(); // Llamar a la función para obtener las películas al montar el componente
    },
    methods: {
        async obtenerPeliculas() {
            try {
                const response = await fetch('/pelicula/v1?fechayhora=2024-06-20T14:00:00.000Z');
                const data = await response.json();
                console.log(data.data)
                this.peliculas = data.data; // Actualizar el array de películas
            } catch (error) {
                console.error("Error al obtener las películas", error);
            }
        }
    }
});
