const { v4: uuidv4 } = require('uuid');
const ReservationModel = require('../models/reservaModel')
const Dates = require('../models/FechaModel')

class ReservationService {
   async create( reservation_data ) {
      const date = reservation_data.fecha;
      const hours = reservation_data.horas;

      console.log( ">> DATE ON SERVICE", date, new Date(date) );

      try {
         const a_date = await Dates.findOne({
            where: {
               schedule: new Date( date )
            }, include: ReservationModel
         })

         const reserva = await ReservationModel.create({
            reservation_id: uuidv4()
            , username: reservation_data.cliente
            , email: reservation_data.email
            , schedules: hours.join(",")
            , service_id: reservation_data.service_id
         })

         console.log( ">> RESERVATION SERVICE", date, reservation_data.service_id )
         await reserva.setSchedule( a_date );
         return reserva
      } catch (error) {
         console.error( ">> ERROR", error )
      }
   }
}

module.exports = new ReservationService();