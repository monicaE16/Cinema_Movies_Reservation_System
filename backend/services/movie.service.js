const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getMovies
};
async function getMovies() {
    movies=await db.Movie.findAll();
}