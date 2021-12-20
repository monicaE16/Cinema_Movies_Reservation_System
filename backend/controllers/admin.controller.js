const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorizeAdmin = require('_middleware/authorizeAdmin')
const userService = require('services/user.service');

// routes
router.get('/requests', authorizeAdmin(), getManagerialRequests);
router.post('/approve', authorizeAdmin(), approveRequest);
router.get('/delete', authorizeAdmin(), deleteuser);

function getManagerialRequests(req, res, next) {
    console.log("hksfk")
    userService.getFutureManagers(req)
    .then((users) => res.json(users))
    .catch(next);
}
function approveRequest(req, res, next) {
    console.log(req.body.username)
    userService.approveManager(req.body.username)
    .then(() => res.json({ message: 'User updated successfully' }))
    .catch(next);
}
function deleteuser(req, res, next) {
    userService.deleteByUserName(req.body.username)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch(next);
}

module.exports = router;