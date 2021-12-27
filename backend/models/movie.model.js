const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false, unique:'compositeIndex'},
        date: {type: DataTypes.DATE, allowNull: false, unique:'compositeIndex'},
        start_time:{type: DataTypes.TIME, allowNull: false, unique:'compositeIndex'},
        end_time: {type: DataTypes.TIME, allowNull: false}, 
        room: {type: DataTypes.STRING, allowNull: false, unique:'compositeIndex'},
        empty_seats_count: {type: DataTypes.INTEGER, allowNull: false},
        price: {type: DataTypes.INTEGER, allowNull: false},
        poster_url: {type: DataTypes.STRING, allowNull: false, defaultValue: "https://image.flaticon.com/icons/png/512/2583/2583338.png"},
        trailer_url: {type: DataTypes.STRING, allowNull: false, defaultValue: "https://image.flaticon.com/icons/png/512/2583/2583338.png"},
    };

    Movie=sequelize.define('Movie', attributes);
    return Movie
}