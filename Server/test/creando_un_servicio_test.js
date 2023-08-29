const request           = require('supertest');
const app               = require('../src/app');
const services_router   = require( '../src/routers/servicioRouter' );
const expect            = require('chai').expect;
const URL               = '/api/servicios';
const DATOS_DEL_SERVICIO = {
   identificador_de_usuario: btoa("emanuel"),
   nombre_servicio: "Peluquería Pepito",
   meses: [7, 8, 10],
   dias: [1, 2, 4],
   horarios: {
      inicio: '09:00-0300',
      fin: '16:00-0300'
   },
   intervalo: 1800
};

const DATOS_CON_USUARIO_INVALIDO = {
   identificador_de_usuario: btoa("emmanuel")
   , nombre_servicio: "Peluquería pepito"
   , meses: [7, 8, 9]
   , dias: [1, 2, 4]
   , horarios: {
      inicio: '09:00-0300'
      , fin: '16:00-0300'
   }
};

describe(`POST ${URL}`, function () {
   app.use('/api/servicios', services_router);
   describe('cuando se crea exitosamente el servicio', function () {
      it('debería retornar un json', function (done) {
         request(app)
            .post( URL )
            .send(DATOS_DEL_SERVICIO)
            .accept('application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201, done)
      });

      it('debería devolver el json con el id del servicio y el link para acceder al calendario', function (done) {
         request(app)
            .post( URL )
            .send(DATOS_DEL_SERVICIO)
            .expect( function (res) {
               expect(res.body).to.have.property('servicio');
               expect( res.body ).to.have.property('enlace');
               expect( res.body ).to.have.property('mensaje');
            })
            .expect(201, done);
      });
   });
});