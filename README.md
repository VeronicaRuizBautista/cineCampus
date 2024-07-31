# CineCampus
### **Problematica**

CineCampus es una empresa de entretenimiento que se especializa en ofrecer una experiencia de cine completa y personalizada. La empresa desea desarrollar una aplicación web que permita a los usuarios seleccionar películas, comprar boletos y asignar asientos de manera eficiente y cómoda. La aplicación también ofrecerá opciones de descuento para usuarios con tarjeta VIP y permitirá realizar compras en línea.

### **Objetivo**

Desarrollar una serie de APIs para la aplicación web de CineCampus utilizando MongoDB como base de datos. Las APIs deberán gestionar la selección de películas, la compra de boletos, la asignación de asientos, y la implementación de descuentos para tarjetas VIP, con soporte para diferentes roles de usuario.

**Cadena de Coneccion**

MONGO_USER = mongo
MONGO_PORT = 41308
MONGO_PWD = sdTrHIbgrwSeayOgnvCkbhfglQkTBZKc
MONGO_HOST = mongodb://
MONGO_CLUSTER = monorail.proxy.rlwy.net
MONGO_DB = cinecampus

### **Requisitos Funcionales**

1. **Selección de Películas:**
   - **API para Listar Películas:** 
     - **Método `getAllPelicula()`**
     - **Descripción:**
       - Conecta la colección `pelicula` con la colección `funcion` mediante el campo `idPelicula`.
       - Muestra en un array todas las películas, con detalles como título, género, duración y horario de proyección.
     - **Retorno:**
       ```json
       [
         {
           "_id": 1,
           "titulo": "The Killer",
           "genero": ["Thriller", "Crimen"],
           "duracion": 113,
           "sinopsis": "Un asesino a sueldo lucha por mantener su humanidad mientras enfrenta una serie de desafíos que amenazan su vida.",
           "horarioProyeccion": [
             {
               "idSala": 2,
               "fechaInicio": "2024-07-04T12:00:00.000Z",
               "fechaFinal": "2024-07-04T14:30:00.000Z"
             }
           ]
         },
         ...
       ]
       ```
     - **Ejemplo de Uso:**
       ```javascript
      let Pelicula = new pelicula()
      console.log(JSON.stringify(await Pelicula.getAllpelicula(new Date('2024-06-20T14:00:00.000+00:00')), null, 4) );
       ```

   - **API para Obtener Detalles de Película:**
     - **Método `getOnePelicula(titulo)`**
     - **Descripción:**
       - Conecta la colección `pelicula` con la colección `funcion` mediante el campo `idPelicula`.
       - Filtra las películas por el título proporcionado.
     - **Parámetros:**
       - `titulo` (string): El título de la película a buscar.
     - **Retorno:**
       ```json
            [
            {
                "_id": 2,
                "titulo": "Dune: Part Two",
                "genero": [
                    "Ciencia ficción",
                    "Aventura",
                    "Drama"
                ],
                "duracion": 155,
                "sinopsis": "Paul Atreides continúa su lucha por la supervivencia en Arrakis y se une a los Fremen para
        enfrentar un nuevo desafío.",
                "horarioProyeccion": [
                    {
                        "idSala": 3,
                        "fechaInicio": "2024-07-02T18:30:00.000Z",
                        "fechaFinal": "2024-07-02T20:45:00.000Z"
                    }
                ]
            }
        ]
       ```
     - **Ejemplo de Uso:**
       ```javascript
        let Pelicula = new pelicula()
        console.log(JSON.stringify(await Pelicula.getOnepelicula({titulo:'Dune: Part Two' }), null, 4) );
       ```

### **Descripción de los Métodos**

#### `getAllPelicula()`
- **Descripción:**
  - Lista todas las películas disponibles, incluyendo sus detalles y horarios de proyección.
- **Retorno:**
  - Array de objetos de películas con detalles como título, género, duración y horarios de proyección.

#### `getOnePelicula(titulo)`
- **Descripción:**
  - Obtiene los detalles de una película específica basada en su título.
- **Parámetros:**
  - `titulo` (string): El título de la película a buscar.
- **Retorno:**
  - Objeto con los detalles de la película y sus horarios de proyección.

2. **Compra de Boletos:**

- **API para Verificar Disponibilidad de Asientos:**
  - **Método `getSeatAvailability(idFuncion)`**
  - **Descripción:**
    - Verifica la disponibilidad de asientos en una función específica de una sala.
  - **Parámetros:**
    - `idFuncion` (string): Identificador de la función.
  - **Retorno:**
    ```json
    {
      "mensaje": "Disponibilidad de asientos",
      "asientosDisponibles": [
        {
            "_id": 17,
            "idSala": 6,
            "asiento": "F2",
            "tipo": "estandar"
        }, ...
      ]
    }
    ```
  - **Ejemplo de Uso:**
    ```javascript
    let asientos = new asiento()
    console.log(JSON.stringify(await asientos.getSeatAvailability({idFuncion:7}), null, 4))
    ```

### **Descripción de los Métodos**

#### `verifySeatAvailability(idFuncion, idSala, fechaInicio)`
- **Descripción:**
  - Verifica la disponibilidad de asientos en una función específica.
- **Parámetros:**
  - `idFuncion` (string): Identificador de la función.
- **Retorno:**
  - Array de asientos disponibles para la función específica.

---

3. **Asignación de Asientos:**

- **API para Reservar Asientos:**
  - **Método `seatReservation(data)`**
  - **Descripción:**
    - Reserva un asiento para una función específica para un cliente.
  - **Parámetros:**
    - `data` (Object): Los datos necesarios para realizar la reserva.
      - `data._id` (string): ID del movimiento y boleta (debe ser único para cada reserva).
      - `data.nombreAsiento` (string): Nombre del asiento que se desea reservar.
      - `data.fechaActual` (Date): La fecha y hora actual de la reserva.
      - `data.tipo` (string): Tipo de la reserva (por ejemplo, "reserva").
  - **Retorno:**
    ```json
    {
      "mensaje": "Se hizo la reserva para la función correctamente",
      "reserva": {
        "_id": "12345",
        "idMovimiento": "12345",
        "idAsiento": "67890",
        "fecha": "2024-07-30T14:00:00.000Z"
      }
    }
    ```
  - **Ejemplo de Uso:**
    ```javascript
    let asientos = new asiento()
    console.log(JSON.stringify(await asientos.seatReservation({
        "_id": 21,
        "tipo": "reserva",
        "idFuncion": 10,
        "nombreAsiento": "E3",
        "fechaActual" : new Date("2024-05-01T10:15:00Z")
    }), null, 4));
    ```

- **API para Cancelar Reserva de Asientos:**
  - **Método `cancelSeatReservation(nombreAsiento)`**
  - **Descripción:**
    - Cancela una reserva de asiento para un cliente específico.
  - **Parámetros:**
    - `nombreAsiento` (Object): Información sobre el asiento que se desea cancelar.
      - `nombreAsiento.nombreAsiento` (string): Nombre del asiento que se desea cancelar.
      - `nombreAsiento.fechaAdquisicion` (Date): Fecha de adquisición de la reserva que se desea cancelar.
  - **Retorno:**
    ```json
    {
      "mensaje": "Se ha cancelado correctamente la reserva del asiento",
      "deleteboleta": {
        "deletedCount": 1
      },
      "deleteMovimiento": {
        "deletedCount": 1
      }
    }
    ```
  - **Ejemplo de Uso:**
    ```javascript
    let asientos = new asiento()
    console.log(JSON.stringify(await asientos.cancelSeatReservation({nombreAsiento: "A2", fechaAdquisicion:"2024-07-01T10:15:00.000Z" }), null, 4))
    ```

### **Descripción de los Métodos**

#### `seatReservation(data)`
- **Descripción:**
  - Reserva un asiento para una función específica para un cliente. Primero valida la existencia del cliente y del movimiento. Luego verifica la existencia de la función y la disponibilidad del asiento. Si todas las validaciones son exitosas, realiza la reserva y guarda la información en la base de datos.
- **Parámetros:**
  - `data` (Object): Los datos necesarios para realizar la reserva.
    - `data._id` (string): ID del movimiento y boleta (debe ser único para cada reserva).
    - `data.nombreAsiento` (string): Nombre del asiento que se desea reservar.
    - `data.fechaActual` (Date): La fecha y hora actual de la reserva.
    - `data.tipo` (string): Tipo de la reserva (por ejemplo, "reserva").
- **Retorno:**
  - Objeto con el resultado de la operación de reserva, incluyendo un mensaje de éxito y detalles de la reserva.

#### `cancelSeatReservation(nombreAsiento)`
- **Descripción:**
  - Cancela una reserva de asiento para un cliente específico. Primero valida la existencia del cliente y del asiento. Luego busca todas las reservas asociadas al cliente. Si se encuentra una boleta que coincida con el asiento y la fecha de adquisición, se eliminan la boleta y el movimiento correspondiente de la base de datos.
- **Parámetros:**
  - `nombreAsiento` (Object): Información sobre el asiento que se desea cancelar.
    - `nombreAsiento.nombreAsiento` (string): Nombre del asiento que se desea cancelar.
    - `nombreAsiento.fechaAdquisicion` (Date): Fecha de adquisición de la reserva que se desea cancelar.
- **Retorno:**
  - Objeto con el resultado de la operación de cancelación, incluyendo un mensaje de éxito y los resultados de la eliminación de la boleta y el movimiento.

---

4. **Descuentos y Tarjetas VIP:**

- **API para Validar Tarjeta VIP:**
  - **Método `validateCard(cardNumber)`**
  - **Descripción:**
    - Valida una tarjeta VIP que pertenezca al usuario logueado.
  - **Retorno:**
    ```json
    {
      "mensaje": "Su tarjeta esta registrada pero no activa",
      "tarjeta": {
          "_id": 1,
          "idCliente": 1,
          "fechaExpedicion": "2024-01-15T00:00:00.000Z",
          "estado": "activa"
      }
    }
    ```
  - **Ejemplo de Uso:**
    ```javascript
    let tarjetas = new tarjeta()
    console.log(JSON.stringify(await tarjetas.validateCard(), null, 4))
    ```

### **Descripción del Método**

#### `validateCard(cardNumber)`
- **Descripción:**
  -Verifica si la tarjeta existe en la base de datos y si es válida. Retorna un mensaje de éxito o error.
- **Retorno:**
  - Objeto con el resultado de la validación, incluyendo un mensaje de éxito.

---


5. **Roles Definidos:**

   **Administrador:** Tiene permisos completos para gestionar el sistema, incluyendo la venta de boletos en el lugar físico. Los administradores no están involucrados en las compras en línea realizadas por los usuarios.

   **Usuario Estándar:** Puede comprar boletos en línea sin la intervención del administrador.

   **Usuario VIP:** Puede comprar boletos en línea con descuentos aplicables para titulares de tarjetas VIP.

   - **API para Crear Usuario:**
     - **Método `createClientAndUser(data)`**
     - **Descripción:**
       - Permite la creación de un nuevo cliente y usuario en la base de datos, asignando roles y privilegios específicos (usuario estándar, usuario VIP o administrador).
     - **Parámetros:**
       - `data` (object): Un objeto que contiene los detalles del nuevo cliente y usuario.
         - `_id` (string): Identificador único del cliente.
         - `vip` (boolean): Indica si el cliente es VIP.
         - `nombre` (string): Nombre del cliente.
         - `nick` (string): Apodo del cliente, utilizado también como nombre de usuario.
         - `email` (string): Correo electrónico del cliente.
         - `cedula` (string): Cédula del cliente, utilizada también como contraseña del usuario.
         - `telefono` (string): Número de teléfono del cliente.
         - `rol` (string): Rol del usuario (puede ser 'usuarioEstándar', 'usuarioVIP', o 'administrador').
     - **Retorno:**
       ```json
       {
         "mensaje": "El usuario fue creado",
         "datos": {
           "acknowledged": true,
           "insertedId": 21
         },
         "usuario": {
           "ok": 1
         }
       }
       ```
     - **Ejemplo de Uso:**
       ```javascript
        let Cliente = new cliente()
        console.log(JSON.stringify(await Cliente.createClientAndUser({
            "_id": 21,
            "nombre": "Laura Gómez",
            "nick": "lau",
            "email": "laura.gomez@example.com",
            "cedula": 12945678,
            "telefono": 3001237667,
            "rol": "usuarioVip"
        })));
       ```

   - **API para Obtener Detalles de Usuario:**
     - **Método `getAllUser()`**
     - **Descripción:**
       - Obtiene una lista de todos los usuarios con detalles extendidos, incluyendo el rol basado en si el usuario es VIP.
     - **Retorno:**
       ```json
       {
         "mensaje": "Usuarios obtenidos",
         "usuarios": [
           {
             "vip": true,
             "genero": ["Acción", "Drama"],
             "nombre": "Ana Gómez",
             "nick": "anag",
             "email": "anag@example.com",
             "cedula": "87654321",
             "telefono": "555-5678",
             "estadoTarjeta": [
               {
                 "estado": "Activa"
               }
             ],
             "rol": "usuarioVIP"
           },
           ...
         ]
       }
       ```
     - **Ejemplo de Uso:**
       ```javascript
       let Cliente = new cliente()
      console.log(JSON.stringify(await Cliente.getAllUser(), null, 4))
       ```

   - **API para Actualizar Rol de Usuario:**
     - **Método `UpdateRolOfUser(user, data)`**
     - **Descripción:**
       - Permite la actualización del rol de un usuario (por ejemplo, cambiar de usuario estándar a VIP, o viceversa).
     - **Parámetros:**
       - `user` (string): El nombre del usuario cuyo rol se desea actualizar.
       - `data` (Array<{ role: string, db: string }>): Un array de objetos que representan los nuevos roles que se desean asignar al usuario.
     - **Retorno:**
       ```json
       {
         "mensaje": "El rol del usuario fue actualizado",
         "datos": {
           "ok": 1
         }
       }
       ```
     - **Ejemplo de Uso:**
       ```javascript
        let Cliente = new cliente()
        console.log(JSON.stringify(await Cliente.UpdateRolOfUser("lau", [{role: "usuarioVip", db: process.env.MONGO_DB }])));
       ```

   - **API para Listar Usuarios con Filtro:**
     - **Método `getAllUserWithFilter(filter)`**
     - **Descripción:**
       - Permite la consulta de todos los usuarios del sistema, con la posibilidad de filtrar por rol (VIP, estándar o administrador).
     - **Parámetros:**
       - `filter` (string): El rol por el cual filtrar los usuarios. Puede ser "usuarioVip", "usuarioEstandar", "administrador" u otro rol.
     - **Retorno:**
       ```json
       {
         "mensaje": "Usuarios obtenidos",
         "usuarios": [
           {
             "vip": false,
             "genero": ["Comedia"],
             "nombre": "Luis Fernández",
             "nick": "luisf",
             "email": "luisf@example.com",
             "cedula": "11223344",
             "telefono": "555-9876",
             "estadoTarjeta": [
               {
                 "estado": "Inactiva"
               }
             ],
             "rol": "usuarioEstandar"
           },
           ...
         ]
       }
       ```
     - **Ejemplo de Uso:**
       ```javascript
        let Cliente = new cliente()
        console.log(JSON.stringify(await Cliente.getAllUserWithFilter('usuarioVip'), null, 4))
       ```

### **Descripción de los Métodos**

#### `createClientAndUser(data)`
- **Descripción:**
  - Crea un nuevo cliente y usuario en la base de datos, asignando roles y privilegios específicos.
- **Parámetros:**
  - `data` (object): Datos del cliente y usuario a crear.
- **Retorno:**
  - Objeto con el mensaje y detalles de la operación.

#### `getAllUser()`
- **Descripción:**
  - Obtiene una lista de todos los usuarios con detalles extendidos, incluyendo el rol basado en si el usuario es VIP.
- **Retorno:**
  - Array de objetos de usuarios con detalles extendidos.

#### `UpdateRolOfUser(user, data)`
- **Descripción:**
  - Actualiza los roles de un usuario en la base de datos MongoDB.
- **Parámetros:**
  - `user` (string): El nombre del usuario cuyo rol se desea actualizar.
  - `data` (Array<{ role: string, db: string }>): Nuevos roles a asignar.
- **Retorno:**
  - Objeto con el mensaje de éxito o error y los datos del resultado.

#### `getAllUserWithFilter(filter)`
- **Descripción:**
  - Obtiene los detalles de todos los usuarios filtrados por rol.
- **Parámetros:**
  - `filter` (string): El rol por el cual filtrar los usuarios.
- **Retorno:**
  - Objeto con el mensaje de éxito y los detalles de los usuarios filtrados.

---