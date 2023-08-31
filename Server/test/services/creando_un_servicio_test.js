const { v4: uuidv4 }   = require('uuid');
const conexion         = require('../../src/utils/connect')
const { JobService }   = require('../../src/controllers/servicioService')
const expect            = require('chai').expect;
conexion.sync();

describe('JobService', function () {
   context('cuando el servicio no existe', function () {
      it('debería almacenar en la BD', async function () {
         const job = {
            'nombre_del_servicio': 'peluquería barboza'
            , 'dias': [0, 1]
            , 'meses': [9]
            , 'hora_inicio': 9
            , 'hora_fin': 16
            , 'duración': 30
            , 'usuario': uuidv4()
         }

         expect(false)
            .to.equal( true )
      });
      it('debería retornar el id del servicio')
   })
})