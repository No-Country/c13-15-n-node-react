const { Sequelize, DataTypes } = require("sequelize");
const HorarioServicioModel = require("./horariosServicioModel");
const sequelize                  = require('../utils/connect');

const ReservationModel = sequelize.define( 'reservas', {
   reservation_id: {
      type: DataTypes.UUID,
      primaryKey: true
   },
   username: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   phone: {
      type: DataTypes.STRING
      , allowNull: false
   }
});

ReservationModel.hasMany( HorarioServicioModel );
HorarioServicioModel.belongsTo( ReservationModel );

module.exports = ReservationModel;