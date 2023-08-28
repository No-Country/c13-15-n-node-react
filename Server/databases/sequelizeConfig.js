const { Sequelize } = require('sequelize')

//Configuracion de base de datos
const db_sequelize = new Sequelize('name_db', 'root', 'pass', {
    host: 'localhost',
    dialect: 'postgress',
    port: 3306,
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