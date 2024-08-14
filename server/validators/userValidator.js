const {body} = require('express-validator')

exports.userValidationRules = () => {
    return [
        body('_id').isInt({ gt: 0 }).withMessage('_id debe ser un número entero positivo'),

        body('nombre')
            .isString().withMessage('Nombre debe ser una cadena de texto')
            .notEmpty().withMessage('Nombre es requerido'),

        body('nick')
            .isString().withMessage('Nick debe ser una cadena de texto')
            .notEmpty().withMessage('Nick es requerido'),

        body('email')
            .isEmail().withMessage('Email debe ser una dirección de correo electrónico válida'),

        body('cedula')
            .isInt({ gt: 0 }).withMessage('Cédula debe ser un número entero positivo'),

        body('telefono')
            .isInt({ gt: 0 }).withMessage('Teléfono debe ser un número entero positivo'),

        body('rol')
            .isString().withMessage('Rol debe ser una cadena de texto')
            .notEmpty().withMessage('Rol es requerido')
            .isIn(['usuarioVip', 'administrador', 'usuarioEstándar']).withMessage('Rol debe ser uno de los siguientes: usuarioVip, administrador, usuarioEstándar'),
    ]
}
