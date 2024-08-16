class UserDTO {
    constructor({_id, nombre, nick,  email, cedula, telefono, rol}) {
        this._id = _id;
        this.nombre = nombre;
        this.nick = nick;
        this.email = email;
        this.cedula = cedula;
        this.telefono = telefono;
        this.rol = rol;
    }
}
class UpdateRolUserDto {
    constructor({ nick, role}) {
        this.nick = nick;
        this.role = role;
    }
}

// class RolUserDto {
//     constructor({rol}) {
//         this.rol = rol;
//     }
// }

module.exports = {
    UserDTO, 
    UpdateRolUserDto,
}
