const express     = require('express');
const router      = express.Router();
const sessionController = require('../controllers/sessionController')

router.post('/acceso', sessionController.Session)


module.exports = router;