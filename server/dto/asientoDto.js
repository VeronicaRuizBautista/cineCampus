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
}

module.exports = {
    asientoDTO,
}
