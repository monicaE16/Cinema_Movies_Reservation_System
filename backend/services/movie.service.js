const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getMovies,
    updateSeatsCount
};
async function getMovies() {
    movies=await db.Movie.findAll();
}

async function updateSeatsCount(id_, op) {
    const movie = await db.Movie.findOne({
        where: {
          id: id_
        }
      });
    if (movie) {
        if(op == 'dec')
        movie.empty_seats_count = movie.empty_seats_count - 1;
        else if (op == 'inc')
            movie.empty_seats_count = movie.empty_seats_count + 1;

        await movie.save();
    }
    
}

