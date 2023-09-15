const reservations = require('../services/ReservationService');
const TAG = "ON RESERVATION CONTROLLER"

class ReservationController {
   async create( req, res ) {
      const { service_id, cliente, email, fecha, horas } = req.body
      // verificando que servicio sea el correcto
      if( !service_id || undefined == service_id ) {
         return res.status( 400 ).json( { message: 'Debes definir el servicio' })
      }

      if( !cliente || undefined == cliente ) {
         return res.status( 400 ).json( {message: 'No se ingresó el cliente' } )
      }

      // verificar que los horarios tenga algún valor
      if( !horas || undefined == horas ) {
         return res.status( 400 ).json( { message: 'No se ingresó los horarios a reservar' } )
      }

      if( !fecha || undefined == fecha ) {
         return res.status( 400 ).json( { message: 'No se ingresó la fecha de la reserva' } )
      }
      
      try {
         const reservation = await reservations.create({ service_id, cliente, email, fecha, horas })
         const date = await reservation.getSchedule();
         console.log( TAG, date.schedule)
         if(!reservation) {
            res.status(400).json( {message: 'Ya se encuentra reservado' } )
         }
         res.status(201).json({
            message: "Reserva realizada"
            , reserva: {
               service_id: reservation.service_id,
               cliente: reservation.username,
               email: reservation.email,
               fecha: date.schedule,
               horas: reservation.schedules.split(",").map( hour => +hour )
            }
         })
      } catch (error) {
         res.status(503).json({ message: error });
      }
   }
}

module.exports = new ReservationController();