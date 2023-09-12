const { v4: uuidv4 }       = require('uuid');
const generate_days_from   = require('../utils/days_generator');
const JobModel             = require('../models/servicioModel');
const ScheduleModel        = require('../models/horarioModel');
const transform_to_months_and_days_from = require('../utils/transform_to_months_and_days_from');

const JobsService = class {

   async create(job_data) {
      try {
         const job = await JobModel.create({
            service_id: uuidv4()
            , name: job_data.name
            , init_time: job_data.init_time
            , finish_time: job_data.finish_time
            , duration: job_data.duration
         });

         const days_schedules = generate_days_from( {
            "months": job_data.months,
            "days": job_data.days
         }).forEach( async element => {
            const schedule = await ScheduleModel.create({
               schedule_id: uuidv4(), 
               schedule: element
            })

        await job.addSchedule( schedule, { though: { available: false } } );
        console.log( ">> Fecha programada: ", schedule.schedule, schedule.available );
        });
         
         return job;
         
      } catch (error) {
         if( error.name === 'SequelizeUniqueConstraintError' ) {
            throw { code: 1, message: `${job_data.name} ya existe` }
         } else if( error.name === 'SequelizeValidationError') {
            throw { code: 2, message: `Error al validar los datos: ${error}`}
         } else {
            throw { code: -1, message: `DESCONOCIDO - ${error}` }
         }
      }
   }

   async list_all(params = {}) {
      const job = await JobModel.findOne( {
         where: {
            userId: params.user_id
         }
      })

      console.log( job );
      return "lista de servicios";
   }

   async getJobCalendary(serviceId){
      const schedulesJob= await JobModel.findAll({
         where:{
            service_id:serviceId
         },
         include:{
         model:ScheduleModel,
         attributes:{
            exclude:["createdAt","updatedAt"]
         }
         }
      })
      const datesJob=schedulesJob[0].schedules.map(data=>data.schedule)
      return {
         job:schedulesJob[0],
         dates:transform_to_months_and_days_from(datesJob)
      }
      
   }
}



module.exports = new JobsService();