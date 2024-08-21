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
    async MovimientoExist(data){
        await this.reconnect();
        let collectionMovimiento = this.db.collection("movimiento");
        let existeMovimiento = await collectionMovimiento.findOne({_id: data._id});
        await this.close()
        return existeMovimiento
    }
    async AsientoExist(data){
        await this.reconnect();
        let asiento = await this.db.collection("asiento")
        let infoAsiento = await asiento.find({asiento: data.nombreAsiento}).toArray();
        await this.close()
        return infoAsiento
    }
    async seatReservation(data){
        try{
            await this.reconnect()
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
            // if(existeMovimiento.length == 0){
            // if(existefuncion == null){
                //enviar existe funcion y data
            let fecha = await existefuncion[0].fechaFinal
            let fechaactual = new Date(data.fechaActual)
            if(fecha > fechaactual){
                // if(infoAsiento == null){, enviar infor asiento
                let idAsiento = await infoAsiento[0]._id
                let _idfuncion = parseInt(data.idFuncion);
                let disponibilidad = await this.getSeatAvailability(_idfuncion)
                const asientoEncontrado = disponibilidad.asientos.find(asiento => asiento._id == idAsiento);
                if (asientoEncontrado) {
                    let movimiento = await collectionMovimiento.insertOne(
                        {
                            _id: data._id,
                            idCliente: idCliente,
                            tipo: data.tipo,
                            idFuncion: data.idFuncion
                        }
                    )
                    let collectionBoleta = this.db.collection("boleta")
                    let boleta = await collectionBoleta.insertOne(
                        {
                            _id: data._id,
                            idMovimiento: data._id,
                            idAsiento: idAsiento,
                            fecha: new Date(data.fechaActual)
                        }
                    )
                    return { mensaje: `Se hizo la reserva para la funcion correctamente`, reserva: boleta};
                } else {
                    console.log("El asiento ingresado no esta disponible");
                    console.log(JSON.stringify(disponibilidad, null, 4))
                    this.close()
                    return {mensaje: "ingrese un asiento que este disponible"}
                }
                
            }
            
            else{
                return {mensaje: "El id de funcion ingresado, es de una funcion que ya termino"}
            }

            
                
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
    async cancelSeatReservation(nombreAsiento){
        try{
            await this.reconnect()
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
            let data = nombreAsiento.nombreAsiento
            let fecha = nombreAsiento.fechaAdquisicion
            let collectionAsiento = this.db.collection("asiento");
            let asiento = await collectionAsiento.findOne({asiento: data})
            if (asiento == null){
                return {mensaje : "el asiento ingresado no existe"}
            }else{
                let idAsiento = asiento._id
                let collectionMovimiento = this.db.collection("movimiento");
                let movimiento = await collectionMovimiento.find({idCliente: idCliente, tipo: "reserva"}).toArray()
                if(movimiento == null){
                    return {mensaje: "No tiene ninguna reservacion"}
                }else{
                    let idMovimiento = movimiento.map(mov => mov._id);
                    let boletas = await this.db.collection("boleta")
                    let boleta = await boletas.findOne({idAsiento: idAsiento, idMovimiento:{$in: idMovimiento}, fecha: new Date(fecha)})
                    let deleteboleta = await boletas.deleteOne({_id:boleta._id})
                    let deleteMovimiento = await collectionMovimiento.deleteOne({_id: boleta.idMovimiento})
                    return {mensaje: "Se ha cancelado correctamente la resevacion del asiento", deleteboleta, deleteMovimiento}
                }
            }
        }catch(error){
            console.error("Error al obtener los asientos:", error)
        }
    }
}

module.exports = Asiento;
