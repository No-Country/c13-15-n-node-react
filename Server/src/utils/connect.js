const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: 'test/db.sqlite'
});

module.exports = sequelize;