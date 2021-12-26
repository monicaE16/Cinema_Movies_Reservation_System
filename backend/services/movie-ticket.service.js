const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
var Sequelize = require('sequelize');
const { user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });


module.exports = {
    getTicketsOfMovie,
    getTicketsOfMovies,
    reserveSeat,
    cancelReservation
};
async function getTicketsOfMovie(id) {
    return await db.Movie.find({where: { movie_id: id } });
}
async function getTicketsOfMovies() {
    /*return await db.Movie.findAll({
        include: [{
          model: db.Ticket,
          required: true
         }]
      });*/
      my_query="SELECT M.*,GROUP_CONCAT(T.seat_number) as reseved_seats FROM movies M LEFT JOIN tickets T ON M.id = T.movie_id GROUP BY M.id"
      return await sequelize.query(my_query,{ type: Sequelize.QueryTypes.SELECT });
}

async function reserveSeat(username,movie, seat) {
    const data = {
        "username": username,
        "movie_id": movie,
        "seat_number": seat
    }
    return await db.Ticket.create(data);
}

async function cancelReservation(username,movie, seat) {
    const ticket = await getSeat(username, movie, seat);
    if (!ticket ) throw 'No such reservation';
    else await ticket.destroy();
}





// helper functions

async function getSeat(username_, movie, seat) {
    const ticket = await db.Ticket.findOne({
        where: {
            username: username_,
            movie_id: movie,
            seat_number: seat
        }
      });
    if (!ticket) throw 'Reservation not found';
    return ticket;
}