const express     = require('express');
const router      = express.Router();
const JobController   = require('../controllers/JobController')

router.post('/', JobController.create );
router.get('/', JobController.listing );


module.exports = router;