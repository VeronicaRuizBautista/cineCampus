import axios from 'axios';

// Configura la base URL para las solicitudes HTTP
const api = axios.create({
    baseURL: 'http://localhost:5012/',  // Ajusta según la base URL de tu servidor
});

// Define las funciones para interactuar con las rutas de la API
export const getUsername = () => api.get('/username');
export const getAllPeliculas = () => api.get("/pelicula/v1?fechayhora=2024-06-20T14:00:00.000Z")
export const commingSoonPeliculas = () => api.get("/pelicula/v1?fechayhora=2024-07-10T14:00:00.000Z")
export const getPeliculaByTittle = (titulo) => api.get(`/pelicula/v2/:${titulo}`);

const apis = {
    getUsername,
    getAllPeliculas,
    commingSoonPeliculas,
    getPeliculaByTittle
};

export default apis;