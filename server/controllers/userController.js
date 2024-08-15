const {validationResult} = require('express-validator');

const UserDTO = require('../dto/userDto.js');
const user = require('../model/userModel.js')

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.body; // Obtener parámetro de la consulta
        console.log(data)
        const userDto = new UserDTO({data});
        const instance = user.getInstance;
        const result = await instance.createClientAndUser(data);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al crear usuario" });
    }
}

module.exports = {createUser};


