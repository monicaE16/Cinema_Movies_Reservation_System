const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const authorizeAdmin = require('_middleware/authorizeAdmin')
const userService = require('services/user.service');

// routes
router.get('/export/:genre', authorize(),exportTopUsers);
router.get('/top/:genre', authorize(), getTopUsers);
router.get('/alltop/:cycle',authorize(), getTops);
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register', registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/current', authorize(), getCurrent);
router.get('/myrank', authorize(), getMyRank);
router.get('/myrankdev', authorize(), getMyRankDev);
router.get('/mypoints', authorize(), getMyPoints);
router.get('/mypoints/:id', authorize(), getMyPointsCycle);
router.put('/changepassword', authorize(), changePassword);
router.get('/:id', authorize(), getById);
router.put('/edit/:id', authorize(), updateSchema, update);
router.put('/confirmed', authorizeAdmin(),confirmActivitySchema, confirmActivity);
router.delete('/declined', authorizeAdmin(), declineActivity);
router.delete('/:id', authorize(), _delete);

module.exports = router;


async function exportTopUsers(req,res,next) {
    await userService.exportTopUsers(req.params.genre)
    res.download('./outputFiles/excel-from-js.xlsx','Users.xlsx',(err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });}})
}

function confirmActivitySchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        activity_id: Joi.number().required()
    });
    validateRequest(req, next, schema);
}
function confirmActivity(req, res, next) {
    userService.confirm_byAdmin(req.body)
        .then(() => res.json({ message: 'Successfully confirmed' }))
        .catch(next);
}

function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('D','N' ,'A').required(),
        currentPractice: Joi.number(),
        image_url:Joi.string().uri(),
        position: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}
function getTopUsers(req, res, next) {
    userService.getTopUsers(req.params.genre)
        .then(users => res.json(users))
        .catch(next);
}
function getTops(req, res, next) {
    userService.getTops(req.params.cycle)
        .then(dept => res.json(dept))
        .catch(next);
}
function getMyPoints(req, res, next) {
    console.log(req.user);
    userService.getMyPoints(req.user)
        .then(points => res.json(points))
        .catch(next);

}
function getMyPointsCycle(req, res, next) {
    console.log(req.user);
    userService.getMyPointsCycle(req.user, req.params.id)
        .then(points => res.json(points))
        .catch(next);

}
function getCurrent(req, res, next) {
    res.json(req.user);
}

function getMyRank(req, res, next) {
    userService.getMyRank(req.user)
    .then(rank => res.json(rank))
    .catch(next);
}
function getMyRankDev(req, res, next) {
    userService.getMyRankDev(req.user)
    .then(rank => res.json(rank))
    .catch(next);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        username: Joi.string().empty(''),
        password: Joi.string().min(6).empty(''),
        role: Joi.string().valid('D','N' ,'A').empty(''),
        currentPractice: Joi.number().empty(''),
        image_url:Joi.string().uri().empty(''),
        position: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}
function changePassword(req, res, next) {
    userService.changePassword(req.user, req.body.oldpass, req.body.newpass)
        .then(() => res.json("password changed"))
        .catch(next);
}

function declineActivity(req, res, next) {
    userService.declineActivity(req.body)
        .then(() => res.json({ message: 'declined successfully' }))
        .catch(next);

}function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}