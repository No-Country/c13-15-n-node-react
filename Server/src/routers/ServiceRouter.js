const express     = require('express');
const router      = express.Router();
const JobController   = require('../controllers/JobController')
const passportJWT = require('../middlewares/jwtAuthenticate')

router.post('/', passportJWT.authenticate('jwt',{session:false}), JobController.create )
router.post('/', JobController.create );
router.get('/', JobController.listing );


module.exports = router;