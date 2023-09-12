const HOST = require('../../config').api.host;
const jobs = require('../services/JobsService.js');

const JobController = class {
   async listing( req, res ) {
      try {
         const user_id = req.user.id
         const { job, months, days } = await jobs.list_all({ user_id: user_id });
         console.log(">> CONTROLLER", months, job.id);
         res.json({
            id: job.service_id
            , nombre_del_servicio: job.name
            , meses: Array.from(months)
            , dias: Array.from(days)
            , horarios: {
               inicio: job.init_time
               , fin: job.finish_time
            }
            , enlace: `${HOST}calendarios?service_id=${job.service_id}`
         })
      } catch (error) {
         if (error.name === 'JobNotFound') {
            res.status(404).json({message: "No tienes ni un servicio creado"})
         } else {
            res.status(503).json({message: error })
         }
      }
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