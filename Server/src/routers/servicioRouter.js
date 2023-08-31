<<<<<<< HEAD:Server/routers/services_router.js
const express = require('express');
const router = express.Router();
const { create_service } = require('../controllers/services_controller')
=======
const express     = require('express');
const router      = express.Router();
const { create_service }   = require('../controllers/servicioService')
>>>>>>> 4fe27582d5d593355257ea704c210f9ad9eeea76:Server/src/routers/servicioRouter.js

router.post('/', create_service );


module.exports = router;