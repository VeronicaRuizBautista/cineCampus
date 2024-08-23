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
        const arg = req.body; // Obtener parámetro de la consulta
        const userDto = new UserDTO();
        const instance = user.getInstance;
        let result = await instance.userExist(arg);
        let data = (result) ? userDto.templateExistUsers(arg): userDto.templateNoUsers()
        if(data.status == 200) res.status(data.status).json(data);
        if (data.status == 404) result = await instance.saveUser(arg);
        data = (result.acknowledged) ? userDto.templateUserSave(arg): userDto.errorUser(result)
        if(data.status == 500) res.status(data.status).json(data);
        if (data.status == 201) result = await instance.createUser(arg);
        data = (result.ok) ? userDto.templateUserSave(arg): userDto.errorUser(result)
        if(data.status == 500) res.status(data.status).json(data);
        res.status(data.status).json(data);
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
        const allUserDto = new UserDTO()
        const result = await instance.getAllUser();
        let data = (result.length) ? allUserDto.templateListUsers(result): allUserDto.templateNoUsers()
        res.status(data.status).json(data);
    } catch (error) {
        console.error("Error al mostrar usuarios", error);
        res.status(500).json({ mensaje: "Error al mostrar usuarios" });
    }
}
const getNombreUser = async (req, res) => {
    try {
        const instance = user.getInstance;
        const result = await instance.nombreUser();
        res.status(200).json(result);
        return result
    } catch (error) {
        console.error("Error al mostrar nombre de usuario", error);
        res.status(500).json({ mensaje: "Error al mostrar nombre de usuario" });
    }
}




const UpdateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const arg = req.body; // Obtener parámetro de la consulta
        const UpdateRolUser = new UpdateRolUserDto(arg);
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
        const arg = req.query.rol;
        const instance = user.getInstance;
        const result = await instance.getAllUserWithFilter(arg);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al mostrar usuario", error);
        res.status(500).json({ mensaje: "Error al mostrar usuario" });
    }
}

module.exports = {
    createUser,
    AllUser,
    UpdateUser,
    UserByRol,
    getNombreUser
};


