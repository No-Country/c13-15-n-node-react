const express     = require('express');
const router      = express.Router();
const disponibilidadServicio = require('../controllers/disponibilidadServicio')

router.get('/api/calendarios?servicio', disponibilidadServicio)


module.exports = router;