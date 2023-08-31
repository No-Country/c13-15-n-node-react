const { DataTypes }  = require("sequelize");
const sequelize      = require('../utils/connect');

const Services = sequelize.define('services', {
   service_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   duration: {
      type: DataTypes.INTEGER,
      default: 15
   }
}, { timestamp: false });

module.exports = Services;
