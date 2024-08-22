class asientoDTO {
    templateNoFuncion(){
        return{
            status: 404,
            message: "No hay funciones con ese id"
        }
    }
    templateAsientosDisponibles(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateFuncion(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateMoviemiento(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateNoMovimiento(){
        return{
            status: 404,
            message: "No hay movimientos con ese id"
        }
    }
    templateAsiento(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateNoAsiento(){
        return{
            status: 404,
            message: "El asiento ingresado no existe"
        }
    }
    expiredTemplate(){
        return{
            status: 400,
            message: "El id de funcion ingresado, es de una funcion que ya termino"
        }
    }
    templateMovimientoSave(arg){
        return{
            status: 201,
            data: arg
        }
    }
    templateNoMovimiento(){
        return{
            status: 500,
            message: "Error al guardar movimiento"
        }
    }
    TemplateAsientoNoDisponible = {
        status: 409,
        message: 'No hay asientos disponibles para la función solicitada.',
    };
    templateMovimiento(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateNoMovimientoFound(){
        return{
            status: 404,
            message: "No tiene ninguna reservacion"
        }
    }
    templateNoDeleteBoleta(){
        return{
            status: 500,
            message: "Error al eliminar boleta"
        }
    }
    templateDeleteBoleta(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateNoDeleteMoviemiento(){
        return{
            status: 500,
            message: "Error al eliminar boleta"
        }
    }
    templateDeleteMovimiento(arg){
        return{
            status: 200,
            data: arg
        }
    }
}

module.exports = {
    asientoDTO,
}
