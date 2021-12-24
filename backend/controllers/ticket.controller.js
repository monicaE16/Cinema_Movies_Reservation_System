const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('services/ticked.service');

// routes
router.post('/ticket/:id', authorize(), reserve);

module.exports = router;