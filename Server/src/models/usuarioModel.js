const bcrypt        = require('bcryptjs');

function validar_usuario(token) {
    
}


module.exports = {
    no_es_valido: function ( token ) {
        return false;
    },
    getIdentificadorPara: function( identificador ) {
        return btoa(Math.random());
    }
}