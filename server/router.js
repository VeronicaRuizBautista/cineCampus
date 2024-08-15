const router = require('express').Router();
const path = require('path');



const { createUser } = require('./controllers/userController');
const { userValidationRules } = require('./validators/userValidator');

router.get('/users', userValidationRules(), createUser);



const {getAllpelicula} = require('./controllers/peliculaController');
const {PeliculaValidationRules} = require('./validators/peliculaValidator');
const {getOnepelicula} = require('./controllers/peliculaController');
const {OnePeliculaValidationRules} = require('./validators/peliculaValidator');

router.get('/allpeliculas', PeliculaValidationRules(), getAllpelicula)
router.get('/peliculaTitulo', OnePeliculaValidationRules(), getOnepelicula)


module.exports = router;