const router= require('express').Router()
const jobsControllers= require('../controllers/JobController')
const passportJWT=require('../middlewares/jwtAuthenticate')


router.post('/',passportJWT.authenticate('jwt',{session:false}),jobsControllers.create)

module.exports=router