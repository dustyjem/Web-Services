// const routes = require('express').Router();

// const myController = require('../controllers')

// routes.get('/', myController.homePage)
// routes.get('/anotherPage', myController.anotherPage)


// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contact', require('./contact'))

module.exports = router;