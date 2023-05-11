const routes = require('express').Router();
const express = require('express');
const myControllers = require('../controllers/index.js');


console.log('Something is happening here');
routes.get('/', myControllers.getAll)
routes.get('/:id', myControllers.getSingle)


module.exports = routes;