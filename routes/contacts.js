const routes = require('express').Router();
const express = require('express');
const myControllers = require('../controllers/index.js');


console.log('Something is happening here');
routes.get('/', myControllers.getAll);
routes.get('/:id', myControllers.getSingle);
routes.post('/', myControllers.create);
routes.put('/:id', myControllers.update);
routes.delete('/:id', myControllers.remove);

module.exports = routes;