const { query } = require('express-validator');

exports.PeliculaValidationRules = () => {
    return [
        query('fechayhora')
            .exists().withMessage('El campo fecha y hora es obligatorio')
            .isISO8601().withMessage('Debe ser una fecha en formato ISO 8601') // Verifica formato ISO 8601
            .toDate() // Convierte la cadena de fecha en un objeto Date
    ];
};


exports.OnePeliculaValidationRules = () => {
    return [
        query('titulo')
            .notEmpty().withMessage('El título no puede estar vacío')
            .isString().withMessage('Debe ser una cadena de texto') 
    ];
};
