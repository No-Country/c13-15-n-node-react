const express     = require('express');
const router      = express.Router();
const servicios   = require('./servicios');

router.post('/', (request, response) => {
   
   const servicio = {
      usuario_id: request.body.usuario_id,
      nombre_servicio: request.body.nombre_servicio,
      meses: request.body.meses,
      dias: request.body.dias,
      horarios: request.body.horarios,
      intervalo: request.body.intervalo 
   };

   respuesta = servicios.crear( servicio );

   response.status(201).json( respuesta );
});


module.exports = router;