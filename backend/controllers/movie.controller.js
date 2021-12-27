const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorizeAdmin = require('_middleware/authorizeAdmin')
const authorizeManager = require('_middleware/authorizeManager')
const movieService = require('services/movie.service');
const movie_ticketService = require('services/movie-ticket.service');
// routes
router.get('/getmovies',  getMovies);
router.get('/getallmovies',  getAllMovies);
router.post('/movies/new', authorizeManager, CreateSchema, createMovie);
module.exports = router;

function CreateSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        date: Joi.date().required(),
        start_time:  Joi.date().timestamp().required(),
        end_time:Joi.date().timestamp().required(),
        room: Joi.string().required(),
        empty_seats_count: Joi.number().required(),
        price: Joi.number().required(),
        poster_url: Joi.string().uri(),
        trailer_url: Joi.string().uri(),
        
    });
    validateRequest(req, next, schema);
}


function getMovies(req, res, next) {
    movie_ticketService.getTicketsOfMovies()
        .then(movies => res.json(movies))
        .catch(next);
}

function getAllMovies(req, res, next) {
    movieService.getMovies()
        .then(movies => res.json(movies))
        .catch(next);
}

function createMovie(req, res, next) {
	movieService
		.create(req.body)
		.then(() => res.json({ message: "Creation successful" }))
		.catch(next);
}