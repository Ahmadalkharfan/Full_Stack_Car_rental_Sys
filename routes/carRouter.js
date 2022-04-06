const carController = require('../controllers/carsController.js')

const router = require('express').Router()

//add car
router.post('/addCar', carController.addCar)

//get all cars
router.get('/allCars', carController.getAllCars)

//get the carAvailability related to this car
router.get('/getCarsAvailability/:id',carController.getCarAvailability)

//get one car
router.get('/getCar/:id', carController.getOneCar)

//update car
router.put('/updateCar/:id', carController.updateCar)

//delete car
router.delete('/deleteCar/:id', carController.deleteCar)

module.exports = router