const servicios   = require('../models/servicios');
const usuarios    = require('../models/usuarios' );

const create_service = (request, response) => {
   const id_usuario = usuarios.get_usuario_id_from( request.body.identificador_de_usuario );

   const servicio = {
      usuario_id: id_usuario,
      nombre_servicio: request.body.nombre_servicio,
      meses: request.body.meses,
      dias: request.body.dias,
      horarios: request.body.horarios,
      intervalo: request.body.intervalo 
   };

   respuesta = servicios.crear( servicio );

   response.status(201).json( respuesta );
};


module.exports = {
   create_service
};