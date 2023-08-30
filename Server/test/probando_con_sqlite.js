const PATH = '../src/models'
const { v4: uuidv4 } = require('uuid');
const Horarios = require(`${PATH}/horarioModel`);
const HorarioServicioModel = require( `${PATH}/horariosServicioModel`);
const Servicio = require(`${PATH}/servicioModel`);
const Reservas = require(`${PATH}/reservaModel`)
const Usuario = require(`${PATH}/usuarioModel`);

const sequelize = require('../src/utils/connect');

sequelize.sync()
   .then(() => {
      Usuario.create( {id: uuidv4(), email: 'emanuelgauler@mi-casa.mk', username: 'emanuel', password: 'qwerty123'})
      .then( function(user) {
         Servicio.create( {service_id: uuidv4(), name: 'Peluquería Barboza', duration: 30, userId: user.id })
         .then( function(service) {
         })
         .catch( err => console.error(">> [SERVICE]", err) );
      })
      .catch( err => console.error( ">> ERROR [USER]", err ) );
   })
   .catch(err => console.error(">> ERROR: ", err));