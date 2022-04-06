const userController = require('../controllers/usersController.js')

const router = require('express').Router()

//add user
router.post('/addUser', userController.addUser)

//get all users
router.get('/allUsers', userController.getAllUsers)

//get the cars related to this user
router.get('/getUserCars/:id',userController.getUserCars)

//get one user
router.get('/getUser/:id', userController.getOneUser)

//update user
router.put('/updateUser/:id', userController.updateUser)

//delete user
router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router