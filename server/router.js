const router = require('express').Router();
const path = require('path');



const { createUser } = require('./controllers/userController');
const { userValidationRules } = require('./validators/userValidator');
const {AllUser} = require('./controllers/userController');
const {UpdateUser} = require('./controllers/userController');
const { updateUserValidationRules } = require('./validators/userValidator');
const {UserByRol} = require('./controllers/userController');
const { UserValidationRulesByRole } = require('./validators/userValidator');

router.post('/users/v1', userValidationRules(), createUser);
router.get('/users/v1', AllUser);
router.post('/users/v2', updateUserValidationRules(), UpdateUser);
router.get('/users/v2', UserValidationRulesByRole(), UserByRol);

const {getAllpelicula} = require('./controllers/peliculaController');
const {PeliculaValidationRules} = require('./validators/peliculaValidator');
const {getOnepelicula} = require('./controllers/peliculaController');
const {OnePeliculaValidationRules} = require('./validators/peliculaValidator');

router.get('/pelicula/v1', PeliculaValidationRules(), getAllpelicula)
router.get('/pelicula/v2', OnePeliculaValidationRules(), getOnepelicula)


const {asientoDisponibilidad} = require('./controllers/asientoController');
const {AsientoValidationByFuncion} = require('./validators/asientoValidator');

router.get('/asiento/v1', AsientoValidationByFuncion(), asientoDisponibilidad)

module.exports = router;