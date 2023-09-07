const { v4: uuidv4 }    = require('uuid');
const day_generator     = require('../utils/days_generator');
const JobModel          = require('../models/servicioModel');
const JobScheduled      = require('../models/horariosServiciosModel')
const UserModel         = require('../models/usuarioModel')
const ScheduleModel     = require('../models/horarioModel');

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

         console.log( job_data.months, job_data.days );

         console.log( day_generator( {
            "months": job_data.months,
            "days": job_data.days
         }) );/*.array.forEach( async element => {
            await ScheduleModel.create({
               schedule_id: uuidv4(), schedule: element
            })
         });
         */

         return job;
      } catch (error) {
         if( error.name === 'SequelizeUniqueConstraintError' ) {
            throw { code: 1, message: `${job_data.name} ya existe` }
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