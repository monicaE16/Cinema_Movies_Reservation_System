const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false,primaryKey: false,references: {model: 'users',key: 'username'} },
        movie_id: { type: DataTypes.INTEGER, allowNull: false ,primaryKey: true,references: {model: 'movies',key: 'id'}},
        seat_number: { type: DataTypes.INTEGER, allowNull: false ,primaryKey: true}
        };
        Ticket=sequelize.define('Ticket', attributes);
    return Ticket
}