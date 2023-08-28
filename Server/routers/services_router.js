const express = require('express');
const router = express.Router();
const { create_service } = require('../controllers/services_controller')

router.post('/', create_service );


module.exports = router;