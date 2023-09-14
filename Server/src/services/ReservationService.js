const { v4: uuidv4 } = require('uuid');
const ReservationModel = require('../models/reservaModel')
const Dates = require('../models/FechaModel')

class ReservationService {
   async create( reservation_data ) {
      const date = reservation_data.fecha;
      const hours = reservation_data.horas;

      console.log( ">> DATE ON SERVICE", date, new Date(date) );

      try {
         const a_date = await Dates.findAll({
            where: {
               schedule: new Date( date )
            }, include: ReservationModel
         })
         const scheduled_hours = await a_date.at(0).reservas.map( (e) => e.schedules ).map( e => +e )
         const include = hours.reduce( (a, h) => { a &= scheduled_hours.includes(h); return a }, true)
         if(include) {
            console.log( ">>>> HOURS REQUEST ON SERVICE", hours)
            return false;
         }

         const reserva = await ReservationModel.create({
            reservation_id: uuidv4()
            , username: reservation_data.cliente
            , email: reservation_data.email
            , schedules: hours.join(",")
            , service_id: reservation_data.service_id
         })


         console.log( ">> RESERVATION ON SERVICE", date, reservation_data.service_id )
         reserva.setSchedule( a_date );
         return reserva
      } catch (error) {
         console.error( ">>>> ERROR ON SERVICE", error )
      }
   }
}

module.exports = new ReservationService();