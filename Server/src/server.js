// const express = require('express')
// const app = express()
// //falta instalar 
// //const cors = require('cors')

// const router = require('./routers/router')
// const servicios_router = require('./routers/servicioRouter')
// // const dispHorarioRouter = require('./routers/dispHorarioRouter')
// const dispServicioRouter = require('./routers/dispServicioRouter')
// const sessionRouter = require('./routers/sessionRouter')
// app.use(sessionRouter)

// app.use(express.json())

// // app.use(dispHorarioRouter)
// app.use(dispServicioRouter)

// app.use(router)

// //const router = require('./routers/router')
// const connection = require('./utils/connect');
// const servicios_router = require('./routers/servicioRouter');
// const User = require('./models/usuarioModel');

// connection.sync().then(async () => {
//    await User.findOrCreate({
//       where: {
//          id: 'emanuel123'
//          , username: 'emanuel'
//          , email: 'yo@mi-ksa.ahi'
//          , password: 'qwerty987'
//       }
//    })
// }
// ).catch(err => console.error(">> ERROR [ON USER CREATE]", err));


// app.use( '/api/servicios', servicios_router );


// app.listen(3000, ()=> console.log('Online server in 3000'))