const { expect } = require('chai')
const transform_to_months_and_days_from = require("../src/utils/transform_to_months_and_days_from")

describe('Transformar una lista de fechas a 2 array de meses y días de la semana', function(){
   context('cuando pasamos 1 fecha', function() {
      it( 'debería retornar el objeto con una propiedad "month" con 1 valor y "wdays" con 1 valor', function() {
         const dates = [ '2023-09-11 03:00' ]
         const transformed = transform_to_months_and_days_from( dates );
         expect( transformed ).to.eql( {
            months: [9], wdays: [1]
         } )
      })
   })
})