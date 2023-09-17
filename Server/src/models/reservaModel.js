const {DataTypes } = require("sequelize");
const sequelize= require('../utils/connect');


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
   schedules: {
      type: DataTypes.STRING
      , allowNull: false
   },
<<<<<<< HEAD
   horas:{
      type:DataTypes.STRING
      
=======
   service_id: {
      type: DataTypes.UUID
      , allowNull: false
>>>>>>> back
   }
}, { timestamps: false });

module.exports = ReservationModel
