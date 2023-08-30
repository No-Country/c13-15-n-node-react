const { DataTypes } = require("sequelize");

const Users = sequelize.define( 'users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    timestamps: false
    });

module.exports = Users;