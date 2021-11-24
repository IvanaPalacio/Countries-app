const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const {getDatabase} = require('../controllers/functions');
const touringsRoute = require('./tourings.js');
const countriesRoute = require('./country.js');
const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/', getDatabase)
router.use('/activity', touringsRoute)
router.use('/countries', countriesRoute)

module.exports = router;
