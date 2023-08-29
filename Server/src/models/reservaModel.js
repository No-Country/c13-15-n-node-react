const { Sequelize, DataTypes } = require("sequelize");

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


module.exports = ReservationModel;