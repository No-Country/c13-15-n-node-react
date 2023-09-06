const { DataTypes } = require("sequelize");
const sequelize   = require('../utils/connect');

const HorariosServiciosModel = sequelize.define('horarios_de_Servicios', {
    reserva_id: {
        type: DataTypes.UUID
    }, 
    available: {
        type: DataTypes.DATE, 
        default: false
    }
}
);


module.exports = HorariosServiciosModel;