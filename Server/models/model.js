const { DataTypes } = require('sequelize');
const db_sequelize = require('../database/sequelizeConfig');

module.export = {
    name_models: db_sequelize.define('name_tabla', {
        name_column: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_column: {
            type: DataTypes.STRING,
        },
        name_column: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false // Agrega esta opción para desactivar las columnas createdAt y updatedAt
    }),
}


