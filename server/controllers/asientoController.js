const {validationResult} = require('express-validator');

const {asientoDTO, cancelarAsientoDTO } = require('../dto/asientoDto.js');
const asiento = require('../model/asientoModel.js')

const asientoDisponibilidad = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.query.idFuncion;
        const instance = asiento.getInstance;
        const result = await instance.getSeatAvailability(data);
        res.status(200).json(result);
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
        const asientodto = new asientoDTO(data);
        const instance = asiento.getInstance;
        const result = await instance.seatReservation(asientodto);
        res.status(200).json(result);
    } catch (error) {
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
        const cancelarAsientodto = new cancelarAsientoDTO(data);
        const instance = asiento.getInstance;
        const result = await instance.seatReservation(cancelarAsientodto);
        res.status(200).json(result);
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