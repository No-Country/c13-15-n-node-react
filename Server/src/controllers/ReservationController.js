
class ReservationController {
   async create( req, res ) {
      const { service_id, cliente, email, horarios } = req.body
      // verificando que servicio sea el correcto
      if( !service_id || undefined == service_id ) {
         return res.status( 400 ).json( { message: 'Debes definir el servicio' })
      }

      if( !cliente || undefined == cliente ) {
         return res.status( 400 ).json( {message: 'No se ingresó el cliente' } )
      }

      // verificar que los horarios tenga algún valor
      if( !horarios || undefined == horarios ) {
         return res.status( 400 ).json( { message: 'No se ingresó los horarios a reservar' } )
      }

      reservations.create( {service_id, cliente, email, horarios } )
   }
}
module.exports = new ReservationController();