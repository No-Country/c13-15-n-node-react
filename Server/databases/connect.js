const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

function connect() {

   sequelize.sync()
      .then()
      .catch((error) => {
         console.error('>> incapaz de conectarse a la BD', error);
      });
   return sequelize;
}

module.exports = {
   connect
};
