const reservations = require('../services/ReservationService');

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
         res.status(201).json({
            message: "Reserva realizada"
            , reserva: reservation
         })
      } catch (error) {
         res.status(503).json({ message: error });
      }
   }
}

module.exports = new ReservationController();