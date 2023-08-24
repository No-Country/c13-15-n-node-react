const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/api/calendarios?servicio_id', controller.change_name)
router.post('/api/reservas', controller.change_name)

module.exports = router