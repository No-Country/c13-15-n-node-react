<<<<<<< HEAD

const express     = require('express');
const router      = express.Router();
const { create_service }   = require('../controllers/servicioService')
=======
const express = require('express');
const router = express.Router();
const connection     = require('../utils/connect');
const { JobService } = require('../controllers/servicioService');
>>>>>>> login

const mapper = (day) => {
   const week_days = {
      'lunes': 0, 'martes': 1, 'miercoles': 2
      , 'jueves': 3, 'viernes': 4, 'sabado': 5
      , 'domingo': 6
   }

   return week_days[day];
}

router.post('/', function (req, res) {
   const {
      identificador_de_usuario
      , nombre_del_servicio
      , meses
      , dias
      , horarios
      , intervalo
   } = req.body;

   const jobs = new JobService( connection );
   
   const job_data = {
      usuario: identificador_de_usuario
      , nombre_del_servicio: nombre_del_servicio
      , meses: meses.map( m => m+1)
      , dias: dias.map( d => mapper(d) )
      , hora_inicio: horarios['inicio']
      , hora_fin: horarios['fin']
      , duracion: intervalo
   };

   const job_id = jobs.create( job_data );

   res.status(201).json( {
      identificador: job_id
      , enlace: `${req.protocol}://localhost:${3000}/api/servicios?id=${job_id}`
      , mensaje: 'se creó con éxito el servicio'
   });
});


module.exports = router;