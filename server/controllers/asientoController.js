const {validationResult} = require('express-validator');

//const {UserDTO, UpdateRolUserDto } = require('../dto/userDto.js');
const asiento = require('../model/asientoModel.js')

// const createUser = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         console.log("Errores de validación:", errors.array());
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const data = req.body; // Obtener parámetro de la consulta
//         const userDto = new UserDTO(data);
//         const instance = user.getInstance;
//         const result = await instance.createClientAndUser(userDto);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error("Error al crear usuario", error);
//         res.status(500).json({ mensaje: "Error al crear usuario" });
//     }
// }


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

module.exports = {
    asientoDisponibilidad
};