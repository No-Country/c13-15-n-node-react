const { DataTypes }  = require("sequelize");
const sequelize   = require('../utils/connect');
const Servicio       = require('./servicioModel');
const Horarios       = require('./horarioModel');


const HorarioServicioModel = sequelize.define('horarios_de_servicios', {
   reserva_id: {
      type: DataTypes.UUID
   },
   available: {
      type: DataTypes.BOOLEAN,
      default: false
   }
})

// Servicio.belongsToMany( Horarios, { through: HorarioServicioModel } );
// Horarios.belongsToMany( Servicio, { through: HorarioServicioModel } );



module.exports = HorarioServicioModel