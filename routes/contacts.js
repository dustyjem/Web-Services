const routes = require('express').Router();
const express = require('express');
const myControllers = require('../controllers/index.js');

// Import the express-validator module
const { body, validationResult } = require('express-validator');

console.log('Something is happening here');

// Define validation rules for contact creation
const createContactValidationRules = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email'),
];

// Apply validation rules and handle errors
routes.post('/', createContactValidationRules, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  myControllers.create(req, res, next);
});

routes.get('/', myControllers.getAll);
routes.get('/:id', myControllers.getSingle);
routes.put('/:id', myControllers.update);
routes.delete('/:id', myControllers.remove);

module.exports = routes;
