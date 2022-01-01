const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
//const userService = require('services/user.service');
const movie_ticketService = require('services/movie-ticket.service');

// routes
router.delete('/cancel', authorize(), cancelReservation);
router.post('/reserve', authorize(), reserveSeat);


module.exports = router;

function reserveSeat(req, res, next) {
    movie_ticketService.reserveSeat(req.user.username, req.body.movie, req.body.seats)
        .then(() => res.json({ message: 'Reservation successful' }))
        .catch(next);
}

function cancelReservation(req, res, next) {
    movie_ticketService.cancelReservation(req.user.username, req.body.movie, req.body.seat)
        .then(() => res.json({ message: 'Cancellation successful' }))
        .catch(next);
}