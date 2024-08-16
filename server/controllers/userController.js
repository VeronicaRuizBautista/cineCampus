const {validationResult} = require('express-validator');

const {UserDTO, UpdateRolUserDto } = require('../dto/userDto.js');
const user = require('../model/userModel.js')

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.body; // Obtener parámetro de la consulta
        const userDto = new UserDTO(data);
        const instance = user.getInstance;
        const result = await instance.createClientAndUser(userDto);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({ mensaje: "Error al crear usuario" });
    }
}

const AllUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const instance = user.getInstance;
        const result = await instance.getAllUser();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al mostrar usuarios", error);
        res.status(500).json({ mensaje: "Error al mostrar usuarios" });
    }
}




const UpdateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.body; // Obtener parámetro de la consulta
        const UpdateRolUser = new UpdateRolUserDto(data);
        const instance = user.getInstance;
        const result = await instance.UpdateRolOfUser(UpdateRolUser);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al actualizar usuario", error);
        res.status(500).json({ mensaje: "Error al actualizar usuario" });
    }
}

const UserByRol = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = req.query.rol;
        const instance = user.getInstance;
        const result = await instance.getAllUserWithFilter(data);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al actualizar usuario", error);
        res.status(500).json({ mensaje: "Error al actualizar usuario" });
    }
}

module.exports = {
    createUser,
    AllUser,
    UpdateUser,
    UserByRol
};


