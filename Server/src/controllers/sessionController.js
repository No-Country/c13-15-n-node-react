const usuarioModel = require('../models/usuarioModel')
const {compare} = require('../helpers/bcrypt')

const userSession = {
    Session: async ( req, res )=>{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({menssaje: 'Faltan parametros'})
        }
        //cambiar a un archivo aparte
        const contraEncrypt = await  usuarioModel.findOne({
            where: {
                email: email
            }
        })
        const passObtaiDB = contraEncrypt.dataValues.password
        const contraDescrypt = await compare(password, passObtaiDB)
        
        if(contraDescrypt){
            //enviar el token etc
        }
    }
}

module.exports = userSession;



