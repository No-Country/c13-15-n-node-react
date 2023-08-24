const express = require('express')
const app = express()
//falta instalar 
//const cors = require('cors')
const router = require('./routers/router')

app.use(express.json())
//app.use(cors())
app.use(router)

app.listen(3000, ()=> console.log('Online server in 3000'))