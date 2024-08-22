const {validationResult} = require('express-validator');

const {asientoDTO } = require('../dto/asientoDto.js');
const asiento = require('../model/asientoModel.js')

const asientoDisponibilidad = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const arg = req.query.idFuncion;
        const AsientoDto = new asientoDTO()
        const instance = asiento.getInstance;
        const funcion = await instance.FuncionExist(arg)
        let result
        let validfuncion = (funcion) ? AsientoDto.templateFuncion(funcion): AsientoDto.templateNoFuncion()
        if (validfuncion.status == 404) res.status(validfuncion.status).json(validfuncion);
        if (validfuncion.status == 200) result = await instance.getSeatAvailability(funcion);
        let data = (result.length) ? AsientoDto.templateAsientosDisponibles(result): AsientoDto.templateNoFuncion()
        res.status(data.status).json(data);
    } catch (error) {
        console.error("Error al ver la disponibilidad de asientos", error);
        res.status(500).json({ mensaje: "Error al ver la disponibilidad de asientos" });
    }
}

const compraAsiento = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.body; // Obtener parámetro de la consulta
        const AsientoDto = new asientoDTO(data);
        const instance = asiento.getInstance;
        let _idfuncion = parseInt(data.idFuncion);
        let fecha;
        let idAsiento;
        let funcion = await instance.FuncionExist(_idfuncion)
        let validfuncion = (funcion) ? AsientoDto.templateFuncion(funcion): AsientoDto.templateNoFuncion()
        if (validfuncion.status == 404) res.status(validfuncion.status).json(validfuncion);
        if (validfuncion.status == 200) fecha = new Date(funcion.fechaFinal);
        if(fecha < data.fechaActual){
            // Template para fecha expirada
            AsientoDto.expiredTemplate()
            return res.status(expiredTemplate.status).json(expiredTemplate);
        }else{
            let infoasiento = await instance.AsientoExist(data.nombreAsiento)
            let validAsiento = (infoasiento) ? AsientoDto.templateAsiento(infoasiento): AsientoDto.templateNoAsiento()
            if (validAsiento.status == 404) res.status(validAsiento.status).json(validAsiento);
            if (validAsiento.status == 200) idAsiento = parseInt(infoasiento._id)
            let disponibilidad = await instance.getSeatAvailability(_idfuncion)
            const asientoEncontrado = disponibilidad.asientos.find(asiento => asiento._id == idAsiento);
            if (asientoEncontrado) {
                let saveMoviemiento = await instance.SaveMovimiento(data)
                let validMoviemiento = (saveMoviemiento) ? AsientoDto.templateMovimientoSave(saveMoviemiento): AsientoDto.templateNoMovimiento()
                if (validMoviemiento.status == 500) res.status(validMoviemiento.status).json(validMoviemiento);
                if (validMoviemiento.status == 201)  result = await instance.seatReservation(data, idAsiento);
                res.status(result.status).json(result);
            }else{
                AsientoDto.TemplateAsientoNoDisponible()
                return res.status(TemplateAsientoNoDisponible.status).json(TemplateAsientoNoDisponible);
            }
        }
    }catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al hacer la reserva del asiento" });
    }
}

const cancelarAsiento = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.body; // Obtener parámetro de la consulta
        let idAsiento
        let idMovimiento
        let result
        let deletemovimiento
        const AsientoDto = new asientoDTO(data);
        const instance = asiento.getInstance;
        let infoasiento = await instance.AsientoExist(data.nombreAsiento)
        let validAsiento = (infoasiento) ? AsientoDto.templateAsiento(infoasiento): AsientoDto.templateNoAsiento()
        if (validAsiento.status == 404) res.status(validAsiento.status).json(validAsiento);
        if (validAsiento.status == 200) idAsiento = parseInt(infoasiento._id)
        let movimiento = await instance.ReservasMovimiento()
        let validMoviemiento = (movimiento) ? AsientoDto.templateMovimiento(movimiento): AsientoDto.templateNoMovimientoFound()
        if (validMoviemiento.status == 404) res.status(validMoviemiento.status).json(validMoviemiento);
        if (validMoviemiento.status == 200) idMovimiento = parseInt(movimiento.map(mov => mov._id);)
        let deleteboleta = await instance.cancelSeatReservation(data, idAsiento, idMovimiento)
        let validBoleta = (deleteboleta.deletedCount > 0) ? AsientoDto.templateDeleteBoleta(deleteboleta): AsientoDto.templateNoDeleteBoleta()
        if (validBoleta.status == 500) res.status(validBoleta.status).json(validBoleta);
        if (validBoleta.status == 200) deletemovimiento = await instance.CancelMovimiento(idMovimiento);
        result = (deletemovimiento.deletedCount > 0)? AsientoDto.templateDeleteMovimiento(deletemovimiento): AsientoDto.templateNoDeleteMoviemiento()
        res.status(result.status).json(result);
    } catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al cancelar la reservacion del asiento" });
    }
}

module.exports = {
    asientoDisponibilidad,
    compraAsiento,
    cancelarAsiento
};