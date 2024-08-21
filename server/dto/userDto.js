class UserDTO {
    templateExistUsers({cedula, nick, email}){
        return{
            status: 200,
            message: "ya existe un usuario con los siguientes datos",
            data: {cedula, nick, email}
        }
    }
    templateNoUsers(){
        return{
            status: 404,
            message: "No hay usuarios registrados"
        }
    }
    templateListUsers(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateUserSave(arg){
        return{
            status: 201,
            data: arg
        }
    }
    errorUser(arg){
        return{
            status: 500,
            message: "Ocurrio un error",
            data: arg
        }
    }
}
class UpdateRolUserDto {
    constructor({ nick, role}) {
        this.nick = nick;
        this.role = role;
    }
}



module.exports = {
    UserDTO, 
    UpdateRolUserDto,
    
}
