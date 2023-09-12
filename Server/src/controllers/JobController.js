const HOST = require('../../config').api.host
const jobs = require('../services/JobsService');


const JobController = class {

   async listing( req, res ) {
      const user_id = req.user.id 
      const jobs_list = await jobs.list_all( { user_id: user_id });
      res.json({
         jobs_list
      })
   }

   async create( req, res ) {
      const {
          nombre_del_servicio
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
            , enlace: `${HOST}/api/calendarios?servicio_id=${job.service_id}`
            , mensaje: "Se creó con éxito el servicio"
         })
      } catch (error) {
         console.error( ">> ERROR ON CONTROLLER CREATE", error );
         res.status(409).json( error )
      }
   }

   async getCalendary(req,res){
      const serviceId = req.query.service_id
      const {job,dates}= await jobs.getJobCalendary(serviceId)
      try{ 
         if({job,dates}){
         res.status(200).json({
            jobName:job.name, 
            calendary:{
               months:Array.from(dates.months),
               days:Array.from(dates.days)
            }
         
         })
      }
      else{
         res.status(404).json({
            message:"Invalid ID"
         })
         }
      }catch(err){
         res.status(400).json({
            message:err.message
         })
      }

}
}
      
 


module.exports = new JobController();