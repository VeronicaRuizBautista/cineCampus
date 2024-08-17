class asientoDTO {
    constructor({_id, tipo, idFuncion,  nombreAsiento, fechaActual }) {
        this._id = _id;
        this.tipo = tipo;
        this.idFuncion = idFuncion;
        this.nombreAsiento = nombreAsiento;
        this.fechaActual = fechaActual;
    }
}
class cancelarAsientoDTO {
    constructor({ nombreAsiento, fechaAdquisicion}) {
        this.nombreAsiento = nombreAsiento;
        this.fechaAdquisicion = fechaAdquisicion;
    }
}

// class RolUserDto {
//     constructor({rol}) {
//         this.rol = rol;
//     }
// }

module.exports = {
    asientoDTO,
    cancelarAsientoDTO 
}
