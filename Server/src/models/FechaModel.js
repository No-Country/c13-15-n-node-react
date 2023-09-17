const {DataTypes } = require('sequelize');
const sequelize = require('../utils/connect');

const Schedules = sequelize.define('schedules', {
   schedule_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
<<<<<<< HEAD:Server/src/models/horarioModel.js
   }, 
   schedule: {
      type: DataTypes.DATE, 
      allowNull: false
=======
   }, schedule: {
      type: DataTypes.DATEONLY, allowNull: false
>>>>>>> back:Server/src/models/FechaModel.js
   }
}, { timestamps: false });

module.exports = Schedules
