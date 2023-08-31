const express     = require('express');
const router      = express.Router();
const  disponibilidadHorario  = require('../controllers/disponibilidadHorario')

router.get('/api/calendarios?servicio_id', disponibilidadHorario)


module.exports = router;