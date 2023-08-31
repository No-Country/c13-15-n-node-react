const express = require('express')
const app = express()
//falta instalar 
//const cors = require('cors')
//const router = require('./routers/router')
const connection = require('./utils/connect');
const servicios_router = require('./routers/servicioRouter');
const User = require('./models/usuarioModel');

connection.sync().then(async () => {
   await User.findOrCreate({
      where: {
         id: 'emanuel123'
         , username: 'emanuel'
         , email: 'yo@mi-ksa.ahi'
         , password: 'qwerty987'
      }
   })
}
).catch(err => console.error(">> ERROR [ON USER CREATE]", err));

app.use(express.json())
//app.use(cors())
//app.use(router)
app.use( '/api/servicios', servicios_router );

app.listen(3000, ()=> console.log('Online server in 3000'))