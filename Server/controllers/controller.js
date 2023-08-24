const controller = {}
const model = require('../models/model')


controller.change_name = (res, req) => {
    try{
        model.peticion('Gustavo')
            .then( result => {
                console.log('Insercion exitosa: ', result)
            })
            .catch(error => {
                res.send(
                    {
                        message: 'El servicio solicitado no se encuentra registrado'
                    }
                )
            })
    }catch{
        //falta
    }
}

module.exports = controller