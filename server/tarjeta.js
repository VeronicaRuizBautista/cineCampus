const connect = require("../db/connection");

class tarjeta extends connect{
    static instance;
    static get getInstance() {
        if (typeof tarjeta.instance === "object") {
            return tarjeta.instance;
        }
        
        tarjeta.instance = new tarjeta();
        return tarjeta.instance;
    }
 
/**
 * @function validateCard()
 * Valida el estado de la tarjeta de un cliente en la base de datos.
 * 
 * @returns {Promise<Object>} Un objeto con el resultado de la validación de la tarjeta.
 * 
 * @throws {Error} Si ocurre un error al realizar la operación de validación.
 */
    async validateCard(){
        try{
            await this.reconnect()
            let cliente = process.env.MONGO_USER
            let idCliente
            if(cliente == "mongo"){
                idCliente = 1
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
            let tarjetas = await this.db.collection("tarjeta")
            let tarjeta = await tarjetas.findOne({idCliente: idCliente})
            if(tarjeta == null){
                return {mensaje : "El usuario no tiene tarjeta"}
            } else{
                if(tarjeta.estado == "activa"){
                    return {mensaje: "Se valido la tarjeta", tarjeta}
                }else{
                    return{mensaje: "Su tarjeta esta registrada pero no activa", tarjeta}
                }
            }
        } catch(error){
            console.error("Error al obtener las películas:", error)
        }
    }
}

module.exports = tarjeta;
