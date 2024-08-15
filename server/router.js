const router = require('express').Router();
const path = require('path');



const { createUser } = require('./controllers/userController');
const { userValidationRules } = require('./validators/userValidator');

router.get('/users', userValidationRules(), createUser);



const {getAllpelicula} = require('./controllers/peliculaController');
const {PeliculaValidationRules} = require('./validators/peliculaValidator');


router.get('/allpeliculas', PeliculaValidationRules(), getAllpelicula)


module.exports = router;