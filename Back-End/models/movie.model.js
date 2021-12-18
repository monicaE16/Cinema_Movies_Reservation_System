const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false},
        date: {type: DataTypes.DATE, allowNull: false},
        start_time:{type: DataTypes.TIME, allowNull: false},
        end_time: {type: DataTypes.TIME, allowNull: false}, 
        room: {type: DataTypes.STRING, allowNull: false},
        empty_seats_count: {type: DataTypes.INTEGER, allowNull: false},
        poster_url: {type: DataTypes.STRING, allowNull: false, defaultValue: "https://image.flaticon.com/icons/png/512/2583/2583338.png"},
        trailer_url: {type: DataTypes.STRING, allowNull: false, defaultValue: "https://image.flaticon.com/icons/png/512/2583/2583338.png"},
        created_by: { type: DataTypes.STRING, allowNull: false,references:  {model: 'users',key: 'username'}},

    };

    return sequelize.define('Movie', attributes);
}