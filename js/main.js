import { pelicula } from "./modules/pelicula.js";

let Pelicula = new pelicula()
console.log(JSON.stringify(await Pelicula.getAllpelicula(new Date('2024-06-20T14:00:00.000+00:00')), null, 4) );
console.log(JSON.stringify(await Pelicula.getOnepelicula({titulo:'Dune: Part Two' }), null, 4) );