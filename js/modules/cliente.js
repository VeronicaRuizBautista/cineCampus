import {connect} from "../../db/connection.js"

export class cliente extends connect{
    static instance;
    constructor(){
        if(typeof cliente.instance === "object"){
            return cliente.instance;
        }
        super();
        cliente.instance = this;
    }


/**
 *  @function createClientAndUser()
 * Crea un nuevo cliente y usuario en la base de datos.
 *
 * @param {Object} data - Datos del cliente y usuario a crear.
 * @param {string} data._id - Identificador único del cliente (si es necesario, aunque no se usa en el código proporcionado).
 * @param {boolean} data.vip - Indica si el cliente es VIP.
 * @param {string} data.nombre - Nombre del cliente.
 * @param {string} data.nick - Apodo del cliente (también se usa para el nombre de usuario).
 * @param {string} data.email - Correo electrónico del cliente.
 * @param {string} data.cedula - Cédula del cliente (también se usa como contraseña del usuario).
 * @param {string} data.telefono - Número de teléfono del cliente.
 * @param {string} data.rol - Rol del usuario en la base de datos.
 * 
 * @returns {Promise<Object>} Un objeto con el mensaje y los detalles de la operación. 
 * @returns {string} return.mensaje - Mensaje que indica el resultado de la operación.
 * @returns {Object} return.datos - Detalles de la inserción en la colección "cliente".
 * @returns {Object} return.usuario - Detalles del usuario creado en la base de datos.
 * si se crea con exito debe mostrar:
 * {"mensaje":"El usuario fue creado","datos":{"acknowledged":true,"insertedId":21},"usuario":{"ok":1}}
 * 
 */

    async createClientAndUser(data){
        try{
            await this.reconnect();
            let collection = this.db.collection("cliente");
            let {_id, nombre, nick: apodo, email:correo, cedula: codigo, telefono, rol} = data

            let condicion = await collection.find({
                $or:[
                    {nick: apodo},
                    {cedula: codigo},
                    {email:correo}
                ]
            }).toArray();
            if(condicion.length) return {mensaje: "El usuario ya existe", user: condicion}
            const res = await collection.insertOne({
                _id, nombre, nick: apodo, email:correo, cedula: codigo, telefono, rol
            })
            const usuario = await this.db.command({
                createUser: apodo,
                pwd: `${codigo}`,
                roles: [
                    {role: rol, db: process.env.MONGO_DB}
                ]
            });
            await this.close()
            return {mensaje: "El usuario fue creado", datos: res, usuario: usuario}
        } catch(error){
            console.error("Error al crear el usuario:", error)
        }
    }

/**
 * @function getAllUser()
 * Obtiene una lista de todos los usuarios con detalles extendidos, incluyendo el rol basado en si el usuario es VIP.
 *
 * @returns {Promise<Object>} Un objeto que contiene el mensaje y la lista de usuarios.
 * @returns {string} return.mensaje - Mensaje que indica el resultado de la operación.
 * @returns {Object[]} return.usuarios - Array de objetos que representan a los usuarios con detalles extendidos.
 * @returns {string} return.usuarios[].vip - Indica si el usuario es VIP.
 * @returns {string[]} return.usuarios[].genero - Lista de géneros asociados con el usuario.
 * @returns {string} return.usuarios[].nombre - Nombre del usuario.
 * @returns {string} return.usuarios[].nick - Apodo del usuario.
 * @returns {string} return.usuarios[].email - Correo electrónico del usuario.
 * @returns {string} return.usuarios[].cedula - Cédula del usuario.
 * @returns {string} return.usuarios[].telefono - Número de teléfono del usuario.
 * @returns {Object[]} return.usuarios[].estadoTarjeta - Estado de la tarjeta del usuario (un array con objetos que contienen el campo `estado`).
 * @returns {string} return.usuarios[].rol - Rol del usuario (`"usuarioVip"` o `"usuarioEstandar"`).
 */

    async getAllUser() {
        try {
            await this.reconnect();
            let collection = this.db.collection("cliente");
            let detalles = await collection.aggregate([
                {
                    $lookup: {
                        from: 'tarjeta',
                        localField: '_id',
                        foreignField: 'idCliente',
                        as: 'estadoTarjeta',
                    }
                },
                {
                    $project: {
                        vip: 1,
                        genero: 1,
                        nombre: 1,
                        nick: 1,
                        email: 1,
                        cedula: 1,
                        telefono: 1,
                        rol: 1,
                        estadoTarjeta: {
                            estado: 1,
                        },
                    }
                }
            ]).toArray();
            await this.close();
            return { mensaje: "Usuarios obtenidos", usuarios: detalles }; 
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return { mensaje: "Error al obtener los usuarios", error: error.message };
        }
    }


/**
 * @function UpdateRolOfUser()
 * Actualiza los roles de un usuario en la base de datos MongoDB.
 * 
 * @param {string} user - El nombre del usuario cuyo rol se desea actualizar. 
 *                        Debe coincidir con el nombre de usuario en la base de datos MongoDB.
 * @param {Array<{role: string, db: string}>} data - Un array de objetos que representan los nuevos roles que se desean asignar al usuario.
 *                                                   Cada objeto debe tener las propiedades:
 *                                                   - `role`: El nombre del rol a asignar.
 *                                                   - `db`: El nombre de la base de datos a la que se aplica el rol.
 * 
 * @returns {Promise<Object>} Un objeto que contiene el mensaje de éxito o de error y los datos del resultado.
 *                            - Si la actualización es exitosa: `{ mensaje: "El rol del usuario fue actualizado", datos: usuario }`
 *                            - Si el usuario no existe: `{ mensaje: "El usuario no existe" }`
 *                            - En caso de error: `{ mensaje: "Error al actualizar el rol del usuario", error: error.message }`
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la conexión a la base de datos, la obtención de la información del usuario,
 *                 la revocación de roles o la asignación de nuevos roles.
 */
    async UpdateRolOfUser(user, data){
        try{
            await this.reconnect();
            const userInfo = await this.db.command({ usersInfo: user });
            if (userInfo.users.length == 0) {
                console.log("El usuario no existe.");
                this.close()
                return { mensaje: "El usuario no existe" };
            }
            //ver atiguos roles

            const currentRoles = userInfo.users[0].roles;

            // Revocar roles actuales
            if (currentRoles.length > 0) {
                await this.db.command({
                    revokeRolesFromUser: user,
                    roles: currentRoles.map(role => ({ role: role.role, db: process.env.MONGO_DB }))
                });
            }
            // Asignar nuevos roles
            const usuario = await this.db.command({
                grantRolesToUser: user,
                roles: data 
            });
            await this.close()
            return {mensaje: "El rol del usuario fue actualizado", datos: usuario}
        } catch(error){
            console.error("Error al actualizar el rol del usuario:", error)
        }
    }



/**
 *  * @function getAllUserWithFilter()
 * Obtiene los detalles de todos los usuarios filtrados por rol.
 * 
 * @param {string} filter - El rol por el cual filtrar los usuarios. Puede ser "usuarioVip", "usuarioEstandar", "administrador" u otro rol.
 * 
 * @returns {Promise<Object>} Un objeto que contiene el mensaje de éxito y los detalles de los usuarios filtrados.
 *                            - En caso de éxito: `{ mensaje: "Usuarios obtenidos", usuarios: detalles }`
 *                            - En caso de error: `{ mensaje: "Error al obtener los usuarios", error: error.message }`
 */
    async getAllUserWithFilter(filter) {
        try {
            await this.reconnect();
            let collection = this.db.collection("cliente");
            let detalles = await collection.aggregate([
                {
                    $match: {
                        rol: filter
                    }
                },
                {
                    $lookup: {
                        from: 'tarjeta',
                        localField: '_id',
                        foreignField: 'idCliente',
                        as: 'estadoTarjeta',
                    }
                },
                {
                    $project: {
                        vip: 1,
                        genero: 1,
                        nombre: 1,
                        nick: 1,
                        email: 1,
                        cedula: 1,
                        telefono: 1,
                        rol:1,
                        estadoTarjeta: {
                            estado: 1,
                        },
                    }
                }
            ]).toArray();
            await this.close();
            return { mensaje: "Usuarios obtenidos", usuarios: detalles }; 
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return { mensaje: "Error al obtener los usuarios", error: error.message };
        }
    }
}