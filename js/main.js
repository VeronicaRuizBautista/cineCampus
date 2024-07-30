import { pelicula } from "./modules/pelicula.js";
import { cliente } from "./modules/cliente.js";
import { asiento } from "./modules/asiento.js";

// let Pelicula = new pelicula()
// console.log(JSON.stringify(await Pelicula.getAllpelicula(new Date('2024-06-20T14:00:00.000+00:00')), null, 4) );
// console.log(JSON.stringify(await Pelicula.getOnepelicula({titulo:'Dune: Part Two' }), null, 4) );

//  let Cliente = new cliente()
// console.log(JSON.stringify(await Cliente.createClientAndUser({
//     "_id": 21,
//     "nombre": "Laura Gómez",
//     "nick": "lau",
//     "email": "laura.gomez@example.com",
//     "cedula": 12945678,
//     "telefono": 3001237667,
//     "rol": "usuarioVip"
// })));

// console.log(JSON.stringify(await Cliente.getAllUser(), null, 4))
// console.log(JSON.stringify(await Cliente.UpdateRolOfUser("lau", [{role: "usuarioVip", db: process.env.MONGO_DB }])));
// console.log(JSON.stringify(await Cliente.getAllUserWithFilter('usuarioVip'), null, 4))
let asientos = new asiento()
console.log(JSON.stringify(await asientos.getSeatAvailability({idFuncion:7}), null, 4))