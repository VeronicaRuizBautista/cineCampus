const {validationResult} = require('express-validator');

const tarjeta = require('../model/tarjetaModel')

const validarTarjeta = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const instance = tarjeta.getInstance;
        const result = await instance.validateCard();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al validar tarjeta" });
    }
}


module.exports = {
    validarTarjeta
};