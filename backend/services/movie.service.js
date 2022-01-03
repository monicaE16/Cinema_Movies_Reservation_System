const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getMovies,
    updateSeatsCount,
    getDetails,
    create,
    update
};
async function getMovies() {
    console.log("here");
    const movies=await db.Movie.findAll();
    console.log(movies);
    return movies;
}
async function getDetails(id_) {
    const movie = await db.Movie.findOne({
        where: {
          id: id_
        }
      });
    return movie;
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
   
    if (data.start_time>data.end_time)
    {
        throw 'start time must be earlier than end time'
    }
    if (Date.parse(data.date)< Date.now())
    {
        throw 'please use a future date'
    }
    const my_query="SELECT * FROM `movies` WHERE `room` = '"+data.room+"' AND `date` = '"+data.date+"' AND( ( `end_time` > '"+data.start_time+"' AND `start_time` < '"+data.start_time+"' ) OR( `start_time` <'"+data.end_time+"' AND `end_time` > '"+data.end_time+"' ) OR( `start_time` > '"+data.start_time+"' AND `end_time` < '"+data.end_time+"' ) )"
    if (Date.parse(data.date)< Date.now())
    {
        throw 'room already in use'
    }
    else {
        await db.Movie.create(data);
    }
}
async function update(data, movie_id) {
    if (data.start_time>data.end_time)
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
            { where: { id: movie_id } }
        );
    }
}
