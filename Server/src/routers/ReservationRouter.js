const { Router } = require('express');
const reservarion_controller = require('../controllers/ReservationController')
const router = Router();

router.post('/', reservarion_controller.create );

module.exports = router