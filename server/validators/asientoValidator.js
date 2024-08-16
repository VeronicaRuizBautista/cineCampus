const { query } = require('express-validator');
const {body} = require('express-validator')


// exports.updateUserValidationRules = () => {
//     return [
//         body('nick')
//             .isString().withMessage('Nick debe ser una cadena de texto')
//             .notEmpty().withMessage('Nick es requerido'),

//         body('role')
//             .isArray().withMessage('Rol debe ser una array')
//             .notEmpty().withMessage('Rol es requerido')
//             .isIn(['usuarioVip', 'administrador', 'usuarioEstándar']).withMessage('Rol debe ser uno de los siguientes: usuarioVip, administrador, usuarioEstándar'),
//     ]
// }

exports.AsientoValidationByFuncion = () => {
    return [
        query('idFuncion')
            .notEmpty().withMessage('El id no puede estar vacío')
            .isInt().withMessage('Debe ser un numero') 
    ]
}