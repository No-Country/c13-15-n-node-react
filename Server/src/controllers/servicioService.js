const servicios   = require('../models/servicioModel');
const usuarios    = require('../models/usuarioModel' );

const create_service = (request, response) => {
   const identificador = request.body.identificado_de_usuario;
   if( usuarios.no_es_valido( identificador ) ) {
      return response.status(200).json( {
         mensaje: "El usuario no puede realizar la operación"
      });
   }

   const id_usuario = usuarios.getIdentificadorPara( identificador );

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