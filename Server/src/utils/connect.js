// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize({
//    dialect: 'sqlite',
//    storage: 'test.sqlite'
// });

// module.exports = sequelize;

//borrar despues
const { Sequelize } = require('sequelize')

//Configuracion de base de datos
const sequelize = new Sequelize('calendario', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

//Prueba de conexion
sequelize
    .authenticate()
    .then(()=>{
        console.log('Conexion a la base de datos extablecida correctamente')
    })
    .catch((error)=>{
        console.error('No se conecto a la base de datos ', error)
    })


module.exports = sequelize