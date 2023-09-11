const { DataTypes }  = require("sequelize");
const sequelize   = require('../utils/connect');


const HorarioServicioModel = sequelize.define('horarios_de_servicios', {
   reserva_id: {
      type: DataTypes.UUID
   },
   available: {
      type: DataTypes.BOOLEAN,
      default: false
   }
})

module.exports = HorarioServicioModel
