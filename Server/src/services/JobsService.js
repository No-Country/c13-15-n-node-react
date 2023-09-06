const { v4: uuidv4 } = require('uuid');
const JobModel = require('../models/servicioModel');

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

         return job;
      } catch (error) {
         if( error.name === 'SequelizeUniqueConstraintError' ) {
            throw { code: 1, message: `${job_data.name} ya existe` }
         }
      }
   }

   async list_all(params = {}) {
      return "lista de servicios";
   }
}


module.exports = new JobsService();