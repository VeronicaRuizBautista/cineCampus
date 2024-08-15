const connect = require('../helper/connection.js')

class Pelicula extends connect{
    static instance;
    static get getInstance() {
      if (typeof Pelicula.instance === "object") {
          return Pelicula.instance;
      }
      
      Pelicula.instance = new Pelicula();
      return Pelicula.instance;
  }
 

/**
 * @function getAllpelicula()
 * @param {Date} fechaHoraActual - La fecha y hora actual. Por ejemplo, `2024-07-20T14:00:00.000Z`.
 * 
 * @returns {Array} Un array con todos los detalles de la película.
 *
 * @description
 * Esta función recibe una fecha y hora actual y devuelve un array con todos los detalles de la película.
 */

    async getAllpelicula(fechayhora){
        try{
            if (!this.collection) {
                await this.reconnect();
                this.collection = this.db.collection("pelicula");
            }
            let res = await this.collection.aggregate([
                {
                    $lookup: {
                        from: 'funcion',
                        localField: '_id',
                        foreignField: 'idPelicula',
                        as: 'horarioProyeccion',
                      },
                    },
                    {
                      $project: {
                        titulo: 1,
                        genero: 1,
                        duracion: 1,
                        sinopsis: 1,
                        horarioProyeccion: {
                          idSala: 1,
                          fechaInicio: 1,
                          fechaFinal: 1,
                        }
                      },
                    },
                    {
                        $unwind: '$horarioProyeccion'
                      },
                      {
                        $match: {
                          'horarioProyeccion.fechaFinal': { $gte: fechayhora }
                        },
                      }
                  ]).toArray();
            return res;
        } catch(error){
            console.error("Error al obtener las películas:", error)
        }
    }


/**
 * @function getOnepelicula()
 * Obtiene los detalles de una película basada en su título.
 *
 * @param {string} titulo - El título de la película. Por ejemplo: `'Dune: Part Two'`.
 * @returns {Array<Object>} Un array que contiene un objeto con los detalles de la película. El objeto tiene la siguiente estructura:
 * 
 * ```
 * [
 *   {
 *     "_id": number, // Identificador único de la película.
 *     "titulo": string, // Título de la película.
 *     "genero": string[], // Array de géneros de la película.
 *     "duracion": number, // Duración de la película en minutos.
 *     "sinopsis": string, // Resumen de la trama de la película.
 *     "horarioProyeccion": Object[] // Array de objetos con los horarios de proyección de la película.
 *     "horarioProyeccion": [
 *       {
 *         "idSala": number, // Identificador de la sala de proyección.
 *         "fechaInicio": string, // Fecha y hora de inicio de la proyección en formato ISO 8601.
 *         "fechaFinal": string // Fecha y hora de finalización de la proyección en formato ISO 8601.
 *       }
 *     ]
 *   }
 * ]
 * ```
 * 
 * 
 */
    async getOnepelicula(titulo){
        try{
            if (!this.collection) {
                await this.reconnect();
                this.collection = this.db.collection("pelicula");
            }
            let res = await this.collection.aggregate([
                {
                    $match: {
                      titulo: titulo // Filtrar por título específico
                    }
                },
                {
                    $lookup: {
                        from: 'funcion',
                        localField: '_id',
                        foreignField: 'idPelicula',
                        as: 'horarioProyeccion',
                    },
                },
                    {
                      $project: {
                        titulo: 1,
                        genero: 1,
                        duracion: 1,
                        sinopsis: 1,
                        horarioProyeccion: {
                          idSala: 1,
                          fechaInicio: 1,
                          fechaFinal: 1,
                        }
                      },
                    }
                  ]).toArray();
                if (res.length === 0) {
                    let console = "No hay ninguna película que coincida con el título proporcionado";
                    return console
                } else {
                    return res;
                }
            
        }catch(error){
            console.error("Error al obtener la película:", error)
        }
    }
}
module.exports = Pelicula;