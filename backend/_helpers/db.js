const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../models/user.model')(sequelize);
    db.Movie = require('../models/movie.model')(sequelize);
    db.Ticket = require('../models/ticket.model')(sequelize);



    db.Ticket.hasOne(db.Movie, {foreignKey: 'id',sourceKey: 'movie_id'});
    db.Movie.belongsTo(db.Ticket, {foreignKey: 'id',targetKey: 'movie_id'});


    // sync all models with database
    await sequelize.sync();
}