const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false ,primaryKey: true},
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email:{ type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.ENUM(['user', 'manager' , 'admin']), allowNull: false,defaultValue: "user" },
        hash: { type: DataTypes.STRING, allowNull: false },
        requesting_managerial: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}