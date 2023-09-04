const generate_days_from = require('../utils/days_generator');
const Servicio = require('../models/servicioModel');
const Usuario = require('../models/usuarioModel');
const Horario = require('../models/horarioModel');
const HorariosServicios = require('../models/horariosServicioModel');
const { v4: uuidv4 } = require('uuid');

const JobService = class {
   constructor(connection) {
      this.conexion = connection;
   }
   /*
   * Crea el servicio, los horarios para el servicio y los almacena en la BD
   * 
   * ARGS: datos del servicio.
   * {
   *     'nombre_del_servicio' 
   *     , 'dias'
   *     , 'meses'
   *     , 'hora_inicio'
   *     , 'hora_fin' 
   *     , 'duración' 
   *     , 'usuario'
   * }
   * 
   * Retorna: { 'id' }
    */
   create(jobs_data) {
      const schedules = generate_days_from({
         months: jobs_data['meses']
         , days: jobs_data['dias']
      })

      let job = Servicio.create({
         service_id: uuidv4()
         , name: jobs_data['nombre_del_servicio']
         , duration: jobs_data['duracion']
         , userId: jobs_data['usuario']
      })/*.then( j => {
         job_id = j.dataValues.service_id;
         console.log( j );
      }).catch(err => console.error('>> ERROR [ON CREATE]', err))
      /*
      */

      console.log( ">> [JOB CREATED]", job.then( j => resolve(j) ) );
      return uuidv4();
   }
};


module.exports = {
   JobService
};