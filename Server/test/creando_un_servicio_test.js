const request = require('supertest');
const app      = require('../src/app');

describe( 'creando un servicio', function() {
   describe( 'cuando se crea exitosamente el servicio', function() {
      it( 'debería retornar un json', function(done) {
         request(app)
            .post('/api/servicios')
            .accept('application/json')
            .expect('Content-Type', 'application/json')
            .expect(201, done)
      })
   });
});