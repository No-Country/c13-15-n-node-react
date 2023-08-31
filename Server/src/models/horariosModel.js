const { DataTypes } = require("sequelize");

const Schedules = sequelize.define('schedules', {
    schedule_id: {
        type: DataTypeses.UUID,
        primaryKey: true,
        allowNull: false
    }
    , schedule: {
        type: DataTypes.DATE, allowNull: false
    }
}
);

module.exports = Schedules;