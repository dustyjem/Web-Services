// const routes = require('express').Router();
// const myControllers = require('../controllers/index.js');



// routes.get('/', require('./index'))
// // routes.get('/:id', myControllers.getSingle)


// module.exports = routes;
const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;