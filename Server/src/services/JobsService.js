const { v4: uuidv4 }       = require('uuid');
const generate_days_from   = require('../utils/days_generator');
const JobModel             = require('../models/servicioModel');
const JobScheduled         = require('../models/horariosServicioModel')
const UserModel            = require('../models/usuarioModel')
const ScheduleModel        = require('../models/horarioModel');

const JobsService = class {
   async create(job_data) {
      console.log(`>> Job create with: ${job_data}`)
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
               schedule_id: uuidv4(), schedule: element
            })
            job.addSchedule( schedule, { though: { available: false } } );
            console.log( ">> Fecha programada: ", schedule.schedule );
         });
         /**/

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
      return "lista de servicios";
   }
}


module.exports = new JobsService();