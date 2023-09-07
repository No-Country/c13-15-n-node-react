const HOST = require('../../config').api.host;
const jobs = require('../services/JobsService.js');

const JobController = class {
   async listing( req, res ) {
      const jobs_list = jobs.list_all();
      res.json({
         jobs_list
      })
   }

   async create( req, res ) {
      const {
         identificador_del_usuario
         , nombre_del_servicio
         , meses
         , dias
         , horarios
         , intervalo
      } = req.body;

      try {
         const user_id = req.user.id;
         const job = await jobs.create({
            name: nombre_del_servicio
            , init_time: horarios.inicio
            , finish_time: horarios.fin
            , duration: intervalo
            , userId: user_id
            , months: meses
            , days: dias
         });
         res.status(201).json({
            identificador: job.service_id
            , enlace: `${HOST}api/calendarios?servicio_id=${job.service_id}`
            , mensaje: "Se creó con éxito el servicio"
         })
      } catch (error) {
         console.error( ">> ERROR ON CONTROLLER CREATE", error );
         res.status(409).json( error )
      }


   }
}

module.exports = new JobController();