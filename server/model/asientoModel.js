const connect = require('../helper/connection.js')
class Asiento extends connect {
    static instance;
    static get getInstance() {
        if (typeof Asiento.instance === "object") {
            return Asiento.instance;
        }
        
        Asiento.instance = new Asiento();
        return Asiento.instance;
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

    async FuncionExist(idFuncion){
        let data = parseInt(idFuncion);
        await this.reconnect();
        let collectionFuncion = this.db.collection("funcion");
        let funcion = await collectionFuncion.findOne({ _id: data });
        await this.close()
        return funcion
    }
    async getSeatAvailability(funcion) {
        try {
            await this.reconnect();
            let sala = funcion.idSala;
            let boleta = this.db.collection("boleta");
            let ocupados = await boleta.aggregate([
                {
                    $lookup: {
                        from: "movimiento",
                        localField: "idMovimiento",
                        foreignField: "_id",
                        as: "movimiento"
                    }
                },
                { $unwind: "$movimiento" },
                { $match: { "movimiento.idFuncion": funcion._id } },
                {
                    $project: {
                        _id: 0,
                        idAsiento: 1
                    }
                }
            ]).toArray();

            let asientosOcupados = ocupados.map(doc => doc.idAsiento);
            let asientodb = this.db.collection("asiento");
            let totalAsientos = await asientodb.find({ idSala: sala }).toArray();
            let asientosDisponibles = totalAsientos.filter(asiento => !asientosOcupados.includes(asiento._id));
            return asientosDisponibles;
            
        } catch (error) {
            console.error("Error al obtener los asientos:", error);
            throw error; // Asegúrate de lanzar el error para que el llamador pueda manejarlo
        }
    }



/**
 * @function seatReservation()
 * Reserva un asiento para una función específica para un cliente.
 * 
 * @param {Object} data - Los datos necesarios para realizar la reserva.
 * @param {string} data._id - ID del movimiento y boleta (debe ser único para cada reserva).
 * @param {string} data.nombreAsiento - Nombre del asiento que se desea reservar.
 * @param {Date} data.fechaActual - La fecha y hora actual de la reserva.
 * @param {string} data.tipo - Tipo de la reserva (por ejemplo, "reserva").
 * 
 * @returns {Promise<Object>} Un objeto con el resultado de la operación de reserva.
 * 
 * @throws {Error} Si ocurre un error al realizar la operación de reserva.
 * 
 * @description
 * Esta función realiza la reserva de un asiento para una función específica. Primero valida la existencia del cliente, 
 * luego verifica si el movimiento ya existe. Si no existe, valida la existencia de la función y la disponibilidad del 
 * asiento. Si todas las validaciones son exitosas, realiza la reserva y guarda la información en la base de datos.
 */
    async MovimientoCantidad(data){
        await this.reconnect();
        let collectionMovimiento = this.db.collection("movimiento");
        // let existeMovimiento = await collectionMovimiento.findOne({_id: data._id});
        // await this.close()
        // return existeMovimiento
    }
    async SaveMovimiento(data){
        await this.reconnect();
        let cliente = process.env.MONGO_USER
        let idCliente
        let clientes = await this.db.collection("cliente")
        let datocliente = await clientes.find({nick: cliente}).toArray()
        if(datocliente.length == 0){
            this.close();
            return{mensaje: "El cliente ingresado no existe en la base de datos"}
        }else{
            idCliente = datocliente[0]._id          
        }
        let collectionMovimiento = this.db.collection("movimiento");
        let idMovimiento = await this.MovimientoCantidad()
        idMovimiento +=1;
        console.log(idMovimiento)
        let movimiento = await collectionMovimiento.insertOne(
            {
                _id: idMovimiento,
                idCliente: idCliente,
                tipo: data.tipo,
                idFuncion: data.idFuncion
            }
        )
        await this.close()
        return movimiento
    }
    async BoletaCantidad(data){
        await this.reconnect();
        let collectionMovimiento = this.db.collection("movimiento");
        // let existeMovimiento = await collectionMovimiento.findOne({_id: data._id});
        // await this.close()
        // return existeMovimiento
    }
    async AsientoExist(data){
        await this.reconnect();
        let asiento = await this.db.collection("asiento")
        let infoAsiento = await asiento.find({asiento: data.nombreAsiento}).toArray();
        await this.close()
        return infoAsiento
    }


    async seatReservation(data, idAsiento){
        try{
            await this.reconnect()  
            let idBoleta = await this.BoletaCantidad()
            console.log(idBoleta)
            idBoleta +=1;
            let collectionBoleta = this.db.collection("boleta")
            let boleta = await collectionBoleta.insertOne(
                {
                    _id: data._id,
                    idMovimiento: data._id,
                    idAsiento: idAsiento,
                    fecha: new Date(data.fechaActual)
                }
            )
            return boleta        
        }catch(error){
            console.error("Error al obtener los asientos:", error)
        }
    }



/**
 * @function cancelSeatReservation()
 * Cancela una reserva de asiento para un cliente específico.
 * 
 * @param {Object} nombreAsiento - Información sobre el asiento que se desea cancelar.
 * @param {string} nombreAsiento.nombreAsiento - Nombre del asiento que se desea cancelar.
 * @param {Date} nombreAsiento.fechaAdquisicion - Fecha de adquisición de la reserva que se desea cancelar.
 * 
 * @returns {Promise<Object>} Un objeto con el resultado de la operación de cancelación.
 * 
 * @throws {Error} Si ocurre un error al realizar la operación de cancelación.
 * 
 * @description
 * Esta función cancela una reserva de asiento para un cliente específico. Primero valida la existencia del cliente y 
 * del asiento. Luego busca todas las reservas asociadas al cliente. Si se encuentra una boleta que coincida con el 
 * asiento y la fecha de adquisición, se eliminan la boleta y el movimiento correspondiente de la base de datos. 
 * Finalmente, devuelve un mensaje de confirmación junto con los resultados de la eliminación.
 */

    async CancelMovimiento(idMovimiento){
        await this.reconnect();
        let collectionMovimiento = this.db.collection("movimiento");
        let deleteMovimiento = await collectionMovimiento.deleteOne({_id: idMovimiento})
        await this.close()
        return deleteMovimiento
    }

    async ReservasMovimiento(){
        await this.reconnect();
        let cliente = process.env.MONGO_USER
        let idCliente
        if(cliente == "mongo"){
            idCliente = 2
        }else{
            let clientes = await this.db.collection("cliente")
            let datocliente = await clientes.find({nick: cliente}).toArray()
            if(datocliente.length == 0){
                this.close();
                return{mensaje: "El cliente ingresado no existe en la base de datos"}
            }else{
                idCliente = datocliente[0]._id          
            }
        }
        let collectionMovimiento = this.db.collection("movimiento");
        let movimiento = await collectionMovimiento.find({idCliente: idCliente, tipo: "reserva"}).toArray()
        await this.close()
        return movimiento
    }

    async cancelSeatReservation(data, idAsiento, idMovimiento){
        try{
            await this.reconnect()
            let fecha = data.fechaAdquisicion         
            let boletas = await this.db.collection("boleta")
            let boleta = await boletas.findOne({idAsiento: idAsiento, idMovimiento:{$in: idMovimiento}, fecha: new Date(fecha)})
            let deleteboleta = await boletas.deleteOne({_id:boleta._id})
            return deleteboleta
        }catch(error){
            console.error("Error al obtener los asientos:", error)
        }
    }
}

module.exports = Asiento;
