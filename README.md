# CineCampus

### **Problematica**

CineCampus es una empresa de entretenimiento que se especializa en ofrecer una experiencia de cine completa y personalizada. La empresa desea desarrollar una aplicación web que permita a los usuarios seleccionar películas, comprar boletos y asignar asientos de manera eficiente y cómoda. La aplicación también ofrecerá opciones de descuento para usuarios con tarjeta VIP y permitirá realizar compras en línea.

### **Objetivo**

Desarrollar una serie de APIs para la aplicación web de CineCampus utilizando MongoDB como base de datos. Las APIs deberán gestionar la selección de películas, la compra de boletos, la asignación de asientos, y la implementación de descuentos para tarjetas VIP, con soporte para diferentes roles de usuario.

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
       const peliculaInstance = new Pelicula();
       const peliculas = await peliculaInstance.getAllPelicula();
       console.log(JSON.stringify(peliculas, null, 4));
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
       const peliculaInstance = new Pelicula();
       const pelicula = await peliculaInstance.getOnePelicula();
       console.log(JSON.stringify(pelicula, null, 4));
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
