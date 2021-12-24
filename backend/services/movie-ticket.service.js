const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
var Sequelize = require('sequelize');
const { user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });


module.exports = {
    getTicketsOfMovie,
    getTicketsOfMovies
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