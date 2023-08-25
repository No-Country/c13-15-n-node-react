const express = require('express')
const app = express()
//falta instalar 
//const cors = require('cors')
const router = require('./routers/router')
const servicios_router = require('./routers/services_router')

app.use(express.json())
//app.use(cors())
app.use(router)
app.use( '/api/servicios', servicios_router );

app.listen(3000, ()=> console.log('Online server in 3000'))