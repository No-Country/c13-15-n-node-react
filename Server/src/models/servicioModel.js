const db          = require('../utils/connect.js')
const servicios   = {
}

servicios.crear = function (servicio) {
   db.insert( servicio );
   const s = {
      servicio: btoa(servicio.nombre_servicio),
      enlace: `http://localhost:9000/api/calendarios?servicio=${btoa('qwerty')}`,
      mensaje: "Se creó exitosamente el servicio"
   };
   return s;
}

module.exports = servicios;