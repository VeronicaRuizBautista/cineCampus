const { validationResult } = require('express-validator');
const getAllPeliculaDTO = require('../dto/peliculaDto.js');
const Pelicula = require('../model/peliculaModel.js');

const getAllpelicula = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const fechaHora = req.query.fechayhora; // Obtener parámetro de la consulta
        const peliculaDto = new getAllPeliculaDTO({ fechayhora: fechaHora });
        const instance = Pelicula.getInstance;
        const result = await instance.getAllpelicula(fechaHora);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ mensaje: "Error al obtener las películas" });
    }
};

module.exports = { getAllpelicula };


