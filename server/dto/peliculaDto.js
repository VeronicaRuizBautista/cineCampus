class PeliculaDTO {
    templateNoPeli(){
        return{
            status: 404,
            message: "No hay peliculas registradas"
        }
    }
    templateListPelis(arg){
        return{
            status: 200,
            data: arg
        }
    }
    templateNoPeliBytittle(){
        return{
            status: 404,
            message: "No hay ninguna película que coincida con el título proporcionado"
        }
    }
}



module.exports = {PeliculaDTO};



