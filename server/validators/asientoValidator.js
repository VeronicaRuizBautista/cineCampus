const { query } = require('express-validator');
const {body} = require('express-validator')

exports.AsientoValidationByFuncion = () => {
    return [
        query('idFuncion')
            .notEmpty().withMessage('El id no puede estar vacío')
            .isInt().withMessage('Debe ser un numero') 
    ]
}

exports.asientoValidationRules = () => {
    return [
         body('_id')
         .isInt({ min: 1 }).withMessage('_id debe ser un número entero positivo'),

        body('tipo')
            .isString().withMessage('tipo debe ser un string')
            .isIn(['reserva', 'compra']).withMessage('tipo debe ser "reserva" o "compra"'),

        body('idFuncion')
            .isInt({ min: 1 }).withMessage('idFuncion debe ser un número entero positivo'),

        body('nombreAsiento')
            .isString().withMessage('nombreAsiento debe ser un string')
            .matches(/^[A-Z]\d+$/).withMessage('nombreAsiento debe seguir el formato de una letra seguida de un número (ej. E3)'),

        body('fechaActual')
            .isISO8601().withMessage('fechaActual debe ser una fecha válida en formato ISO8601'),
    ];
}


exports.candelarAsientoValidationRules = () => {
    return [
        body('nombreAsiento')
            .isString().withMessage('nombreAsiento debe ser un string')
            .matches(/^[A-Z]\d+$/).withMessage('nombreAsiento debe seguir el formato de una letra seguida de un número (ej. E3)'),

        body('fechaAdquisicion')
            .isISO8601().withMessage('fechaAdquisicion debe ser una fecha válida en formato ISO8601'),
    ];
}