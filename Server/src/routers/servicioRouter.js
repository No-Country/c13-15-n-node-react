const express     = require('express');
const router      = express.Router();
const { create_service }   = require('../controllers/servicioService')

router.post('/', create_service );


module.exports = router;