const carAvailabilityController = require('../controllers/carAvailabilityController.js')

const router = require('express').Router()

//add carAvailability
router.post('/addCarAvailability', carAvailabilityController.addCarAvailability)

//get all carAvailability
router.get('/allCarAvailability', carAvailabilityController.getAllCarAvailability)

//get one carAvailability
router.get('/getCarAvailability/:id', carAvailabilityController.getOneCarAvailability)

//update carAvailability
router.put('/updateCarAvailability/:id', carAvailabilityController.updateCarAvailability)

//delete carAvailability
router.delete('/deleteCarAvailability/:id', carAvailabilityController.deleteCarAvailability)

module.exports = router