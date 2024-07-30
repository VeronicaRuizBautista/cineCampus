import {connect} from "../../db/connection.js"

export class asiento extends connect{
    static instance;
    constructor(){
        if(typeof asiento.instance === "object"){
            return asiento.instance;
        }
        super();
        asiento.instance = this;
        
    }

    /**
     * @function getSeatAvailability()
     * Verifica la disponibilidad de asientos en una sala para una función específica.
     *
     * @param {string} idFuncion - El ID de la función para la cual se desea verificar la disponibilidad de asientos.
     * 
     * @returns {Promise<Object>} Un objeto con el mensaje y la lista de asientos disponibles.
     * @returns {string} return.mensaje - Mensaje que indica el resultado de la operación.
     * @returns {Array} return.asientos - Lista de asientos disponibles para la función específica.
     * 
     * @throws {Error} Error al obtener los asientos.
     */
    async getSeatAvailability(idFuncion){
        try{
            let data = idFuncion.idFuncion
            await this.reconnect()
            let collectionFuncion = this.db.collection("funcion");
            let funcion = await collectionFuncion.findOne({_id: data})
            if (funcion == null){
                return {mensaje : "el id de la funcion ingresado no existe"}
            }else{
                let sala = await funcion.idSala
                let boleta = await this.db.collection("boleta");
                let ocupados = await boleta.aggregate([
                    {
                        $lookup: {
                            from: "movimiento",
                            localField: "idMovimiento",
                            foreignField: "_id",
                            as: "movimiento"
                        }
                    },
                    {$unwind: "$movimiento"},
                    {$match: {"movimiento.idFuncion": data}},
                    {
                        $project:{
                            _id:0,
                            idAsiento:1
                        }
                    }
                ]).toArray();
                let asientosOcupados = ocupados.map(doc => doc.idAsiento)
                let asientodb = await this.db.collection("asiento")
                let totalAsientos = await asientodb.find({idSala: sala}).toArray();
                let asientosDisponibles = totalAsientos.filter(asiento => !asientosOcupados.includes(asiento._id));
                return { mensaje: `Asientos disponibles para la funcion ${data}`, asientos: asientosDisponibles };
            }
        }catch(error){
            console.error("Error al obtener los asientos:", error)
        }
    }
}