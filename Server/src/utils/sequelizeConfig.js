const { Sequelize } = require('sequelize')

//Configuracion de base de datos
const db_sequelize = new Sequelize('calendario', 'root', '12345', {
    host: 'localhost',
    dialect: 'postgress',
    port: 5432,
})

//Prueba de conexion
db_sequelize
    .authenticate()
    .then(()=>{
        console.log('Conexion a la base de datos extablecida correctamente')
    })
    .catch((error)=>{
        console.error('No se conecto a la base de datos ', error)
    })


module.exports = db_sequelize