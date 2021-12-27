const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getMovies,
    updateSeatsCount,
    create,
    update
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

async function create(data) {
    if (data.start_time<=data.end_time)
    {
        throw 'start time must be earlier than end time'
    }
    if (data.date< Date.now())
    {
        throw 'please use a future date'
    }
    else {
        await db.Movie.create(data);
    }
}
async function update(data) {
    if (data.start_time<=data.end_time)
    {
        throw 'start time must be earlier than end time'
    }
    if (data.date< Date.now())
    {
        throw 'please use a future date'
    }
    else {
        await db.Movie.update(
           data,
            { where: { id: data.id } }
        );
    }
}
