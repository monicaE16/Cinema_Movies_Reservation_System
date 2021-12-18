const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false,primaryKey: true,references: {model: 'users',key: 'username'} },
        movie_id: { type: DataTypes.INTEGER, allowNull: false ,primaryKey: true,references: {model: 'movies',key: 'id'}},
        seat_number: { type: DataTypes.DATE, allowNull: false ,primaryKey: true}
        };

    return sequelize.define('Ticket', attributes);
}