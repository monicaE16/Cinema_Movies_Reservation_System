const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorizeAdmin = require('_middleware/authorizeAdmin')
const movieService = require('services/movie.service');
const movie_ticketService = require('services/movie-ticket.service');
// routes
router.get('/getmovies',  getMovies);
module.exports = router;

function getMovies(req, res, next) {
    movie_ticketService.getTicketsOfMovies()
        .then(movies => res.json(movies))
        .catch(next);
}