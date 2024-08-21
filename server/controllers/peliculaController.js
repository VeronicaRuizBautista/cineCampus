const { validationResult } = require('express-validator');
const {PeliculaDTO} = require('../dto/peliculaDto.js');
const Pelicula = require('../model/peliculaModel.js');

const getAllpelicula = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const fechaHora = req.query.fechayhora; // Obtener parámetro de la consulta
        const peliculaDto = new PeliculaDTO()
        const instance = Pelicula.getInstance;
        const result = await instance.getAllpelicula(fechaHora);
        let data = (result.length) ? peliculaDto.templateListPelis(result): peliculaDto.templateNoPeliBytittle()
        res.status(data.status).json(data);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ mensaje: "Error al obtener las películas" });
    }
};




const getOnepelicula = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const titulo  = req.params.titulo
        const peliculaDto = new PeliculaDTO()
        const pelicula = Pelicula.getInstance;
        const result = await pelicula.getOnepelicula(titulo);
        let data = (result.length) ? peliculaDto.templateListPelis(result): peliculaDto.templateNoPeliBytittle()
        res.status(data.status).json(data);
    } catch (error) {
        console.error("Error al obtener la película:", error);
        res.status(500).json({ mensaje: "Error al obtener la película" });
    }
};

module.exports = { 
    getAllpelicula,
    getOnepelicula
 };


