const client = require('../databases/connect')

client.connect()

module.export = {
    peticion(nombre){
        return new Promise((resolver, reject) => {
            client.query('insert into name_db (nombre) values ($1)', [nombre], (err, result) => {
                if(err){
                    reject(err)
                } else {
                    resolver(result)
                }
            })
        })
    }
}


