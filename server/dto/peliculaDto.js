class getAllPeliculaDTO {
    constructor({ fechayhora }) {
        this.fechayhora = fechayhora;
    }
}

class getOnePeliculaDTO {
    constructor({ titulo }) {
        this.titulo = titulo;
    }
}

module.exports = {
    getAllPeliculaDTO,
    getOnePeliculaDTO
};



